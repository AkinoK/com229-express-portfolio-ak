
// Connect to my model
let Business = require('../models/business');

// send messages back to user by jwt (for transition to API)
let jwt = require('jsonwebtoken');

// Alphabetical order
let mysort = {contactName: 1};

exports.list =  function(req, res, next) {
    Business.find((err, businessList) => {
        
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(businessList);
            res.render('business/businessList', {
                title: 'Business Contacts List', 
                BusinessList: businessList,
                displayName: req.user ? req.user.displayName : ' '
            })            
        }
    }).sort(mysort)
};


exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Business.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('business/add_edit', {
                title: 'Edit Contact', 
                contact: contactToEdit,
                displayName: req.user ? req.user.displayName : ' '
            })
        }
    });
}

exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedContact = Business({
        _id: req.body.id,
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        email: req.body.email,
    });

    //Update the editted contact
    Business.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // redirect to the contacts list
            res.redirect('/business/list');
        }
    });
}

// Add a new contact - display a blank format for user input
exports.displayAddPage = (req, res, next) => {
    let newContact = Business();

    res.render('business/add_edit', {
        title: 'Add a new contact',
        contact: newContact
    })          
}

// Add a new contact - post it to the contact list
exports.processAddPage = (req, res, next) => {
    
    let newContact = Business({
        _id: req.body.id,
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        email: req.body.email,
    });

    // send new contact to creat
    Business.create(newContact, (err, contact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contacts list
            console.log(contact);
            res.redirect('/business/list');
        }
    });

}

// Delete a contact from the list
exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Business.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contacts list
            res.redirect('/business/list');
        }
    });
}