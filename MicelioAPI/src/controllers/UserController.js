const knex = require('../database/connection');
const idGenerator = require('../utils/generators/idGenerator');
const {generatePassword, isPasswordValid} = require('../utils/generators/passwordGenerator');
const {generateUserSession, decodeUserSession} = require('../utils/generators/userSessionGenerator')

class UserController {

  async get(request, response) {
    const {miceliotoken} = request.cookies
    console.log('Cookies:', request.cookies);
    console.log(miceliotoken)

    if (!miceliotoken) {
      return response.status(401).send()
    }

    try {
      const {sub: userId} = decodeUserSession(miceliotoken)
      console.log('UserID from token:', userId); 

      const user_db = await knex('MicelioUser').select().where({user_id: userId}).first()
      console.log('User from DB:', user_db);

      delete user_db.password

      response.json({ok: true, data: user_db})

    } catch (e) {
      return response.status(401)
    }
  }

  async create(request, response) {
    let {username, password, confirmation_password, email} = request.body;

    if (!username) {
      return response.status(400).json({error: "Invalid username"});
    }

    if (!password) {
      return response.status(400).json({error: "Invalid password"});
    }

    if (!confirmation_password) {
      return response.status(400).json({error: "Invalid password"});
    } else {
      if (confirmation_password != password) {
        return response.status(400).json({error: "The passwords do not match"});
      }
    }

    if (!email) {
      return response.status(400).json({error: "Invalid e-mail"});
    }

    const hashedPassword = generatePassword(password);

    try {

      username = username.toLowerCase();
      email = email.toLowerCase();

      const registeredUser = await knex('MicelioUser')
        .select('username', 'email')
        .where('username', username)
        .orWhere('email', email)
        .first();

      if (registeredUser) {
        if (registeredUser.username === username) {
          return response.status(400).json({error: 'User already exists.'});
        }
        if (registeredUser.email === email) {
          return response.status(400).json({error: 'Email already in use.'});
        }
      }

      const user_id = await idGenerator('MicelioUser', 'user');

      const data = {
        user_id,
        username,
        email,
        password: hashedPassword
      }

      const insertedUser = await knex('MicelioUser')
        .insert(data);

      const token = generateUserSession(user_id);
      response.cookie('miceliotoken', token);

      if (insertedUser) {
        return response.status(201).json({ok: true});
      } else {
        return response.status(400).json({error: 'Cannot insert user, try again later'});
      }

    } catch (err) {
      console.log(err)
      return response.status(400).json({error: 'Cannot connect to database, try again later'});
    }

  }

  async update(request, response) {
    const {username, email, password, newPassword} = request.body;

    const {miceliotoken} = request.cookies

    if (!miceliotoken) {
      return response.status(401).send()
    }

    try {
      const {sub: userId} = decodeUserSession(miceliotoken)

      const updatedUser = {}

      if (username) updatedUser.username = username
      if (email) updatedUser.email = email

      await knex('MicelioUser').update(updatedUser).where('user_id', userId)

      response.json({ok: true})

    } catch (e) {
      return response.status(401)
    }

  }

  async login(request, response) {
    const {username, password} = request.body

    if (!username) {
      return response.status(400).json({error: "Invalid username"});
    }

    if (!password) {
      return response.status(400).json({error: "Invalid password"});
    }

    const user_db = await knex('MicelioUser').select().where({username}).first();

    if (!user_db) {
      return response.status(404).json({error: "User not found"});
    }

    if (!isPasswordValid(user_db.password, password)) {
      return response.status(400).json({error: 'Invalid password'});
    }

    delete user_db.password;

    const token = generateUserSession(user_db.user_id);

    response.cookie('miceliotoken', token);
   /* response.cookie('miceliotoken', token, {
      httpOnly: true,
      sameSite: 'None', // Adjust as needed
      secure: true    // Should be true if you're using HTTPS
   }); */
    response.json({ok: true, data: user_db, token});
  }

  async logout(request, response) {
    response.clearCookie('miceliotoken')
    response.send()
  }

  async updatePassword(request, response) {
    const {currentPassword, password, passwordConfirm} = request.body
    const {miceliotoken} = request.cookies

    if (!miceliotoken) {
      return response.status(401).send()
    }

    try {
      const {sub: userId} = decodeUserSession(miceliotoken)

      const currentUser = await knex('MicelioUser').select().where('user_id', userId).first()
      if (!currentUser) {
        return response.status(401).send()
      }

      if (!isPasswordValid(currentUser.password, currentPassword)) {
        return response.status(400).json({error: "Senha atual inválida"})
      }

      await knex('MicelioUser').update({password}).where('user_id', userId)
      return response.status(200).send()

    } catch (e) {
      console.log(e)
      return response.status(500)
    }

  }
}

module.exports = UserController;
