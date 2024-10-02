function LogMiddleware(request, response, next) {

    const marker = ' :: ';
    const data = request.method + marker + request.originalUrl + marker +  request.headers.token;

    console.log(data);

    console.log('Request Headers:', request.headers);
    console.log('Request Body:', request.body);

    next();

}


module.exports = LogMiddleware;