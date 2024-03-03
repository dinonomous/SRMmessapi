const express = require('express');
const router = express.Router();
const { daysOfWeek , getmeals } = require('../modules/Mess')

router.get('/', (req, res) => {
    let currentDayIndex = new Date().getDay();
    let currentDay = daysOfWeek[currentDayIndex];
    let currentmeal = getmeals();
    let currentMeals = currentDay.meals[currentmeal];

    res.json({ currentMeals });
  });
  
  // Define route for '/about' path
  router.get('/about', (req, res) => {
    res.send('About page');
  });

module.exports = router;