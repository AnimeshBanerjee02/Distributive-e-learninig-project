const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { ensureAuthenticated } = require('../config/auth');

// welcome page 
router.get('/', (req, res) => res.render("welcome"));


// User model
const User = require('../models/User');



//Dashboard 
router.get('/dashboard', ensureAuthenticated, (req, res) =>
    res.render('dashboard', {
        name: req.user.name
    }));


module.exports = router;

