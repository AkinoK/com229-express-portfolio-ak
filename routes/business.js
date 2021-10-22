var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let businessController = require('../controller/business');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* READ the list */
router.get('/list', requireAuth, businessController.list);

/* EDIT and UPDATE a contact  */
router.get('/edit/:id', requireAuth, businessController.displayEditPage);
router.post('/edit/:id', requireAuth, businessController.processEditPage);

/* DELETE a contact  */
router.get('/delete/:id', requireAuth, businessController.performDelete);

/* CREATE and ADD a contact*/
router.get('/add', requireAuth, businessController.displayAddPage);
router.post('/add', requireAuth, businessController.processAddPage);



module.exports = router;