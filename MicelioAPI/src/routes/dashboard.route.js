
/*
// routes/dashboard.route.js
const express = require('express');
const router = express.Router();

// Define the /dashboard/summary endpoint
router.get('/summary', (req, res) => {
  try {
    
    const data = [
      { title: 'Total Games', value: 15, description: 'Number of games in the system' },
      { title: 'Active Sessions', value: 7, description: 'Currently active sessions' },
      { title: 'Total Groups', value: 3, description: 'Total groups created' },
      { title: 'Users Online', value: 12, description: 'Users currently online' },
    ];
    res.json({ data });
  } catch (error) {
    console.error('Error fetching dashboard summary:', error);
    res.status(500).json({ error: 'Failed to fetch dashboard summary' });
  }
});

module.exports = router; 

*/



const express = require('express');
const router = express.Router();
const db = require('../dbConnection'); // Ensure this path is correct

router.get('/summary', async (req, res) => {
  try {
    const [games] = await db.query('SELECT COUNT(*) AS totalGames FROM game');
    console.log('Games Query Result:', games); // Debug output
    const totalGames = games[0].totalGames;

    const [sessions] = await db.query('SELECT COUNT(*) AS activeSessions FROM session ');
    console.log('Sessions Query Result:', sessions); // Debug output
    const activeSessions = sessions[0].activeSessions;

    const [groups] = await db.query('SELECT COUNT(*) AS totalGroups FROM sessiongroup');
    const totalGroups = groups[0].totalGroups;

    const [usersOnline] = await db.query('SELECT COUNT(*) AS usersOnline FROM miceliouser');
    const usersOnlineCount = usersOnline[0].usersOnline;

    res.json({
      data: [
        { title: 'Total Games', value: totalGames, description: 'Number of games in the system' },
        { title: 'Active Sessions', value: activeSessions, description: 'Currently active sessions' },
        { title: 'Total Groups', value: totalGroups, description: 'Total groups created' },
        { title: 'Users Online', value: usersOnlineCount, description: 'Users currently online' }
      ]
    });
  } catch (error) {
    console.error('Error fetching dashboard summary:', error);
    res.status(500).json({ error: 'Failed to fetch dashboard summary' });
  }
});

module.exports = router;
