<<<<<<< HEAD
//File name : app.js
//Student name : Akino Kashima 
//Student ID : 301155967
//Date: 10.02.2021 

// For Business Contacts List Page
if(getTitle == "Business Contacts List" || "Edit contact")
{
   // When Delete button clicked on Business Contacts List page
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault(); // Cancel the submit
            }
        });
    }
}


if(getTitle == "Contact")
{



// Validation for Contact form of Contact page 

"use strict";

var formValidity = true;

/* validate required fields */
function validateRequired() {
   var inputElements = document.querySelectorAll("#contactform input, #contactform textarea");
   var errorDiv = document.getElementById("errorText");
   var requiredValidity = true;
   var currentElement;
   try {
      for (var i = 0; i < inputElements.length; i++) 
      { 
         // validate all input elements in fieldset
         currentElement = inputElements[i];
         if (currentElement.value === "") 
         {
            currentElement.style.background = "rgb(255,233,233)";
            requiredValidity = false;
         } else {
            currentElement.style.background = "white";
         }
      }
      if (requiredValidity === false) { 
         throw "Please complete all fields.";
      } 
      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";
   }
   catch(msg) {
      errorDiv.style.display = "block";
      errorDiv.innerHTML = msg; 
      formValidity = false;
   }
}

 // validate entered email
 function validateEmail() {
    var emailInput = document.getElementById("email");
    var errorDiv = document.getElementById("emailError");
    var emailCheck = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
    try {

       if (emailCheck.test(emailInput.value) === false) {
          throw "Please provide a valid email address";
       }
        // remove any email error styling and message
       emailInput.style.background = "";
       errorDiv.innerHTML = "";
       errorDiv.style.display = "none";
       // convert email address to lowercase
       emailInput.value = emailInput.value.toLowerCase();

    }
    catch(msg) {
       // display error message
       errorDiv.innerHTML = msg;
       errorDiv.style.display = "block";
       // change input style
       emailInput.style.background = "rgb(255,233,233)";
       formValidity = false;
    }
 }

 //validate form
 function validateForm(evt) 
 {
    if (evt.preventDefault) {
       evt.preventDefault(); // prevent form from submitting
    } else {
       evt.returnValue = false; // prevent form from submitting in IE8
    }
   formValidity = true; // reset value for revalidation
    validateRequired();
    validateEmail();

    if (formValidity === true) 
   {
      var inputElements = document.querySelectorAll("#contactform input, #contactform textarea"); //Capture user's inputs
      var inputs = [];
      for (var i = 0; i < inputElements.length; i++) {
         inputs.push(inputElements[i].value);
      }
      
      //Show user their inputs in a confirm window
      var r = confirm("Please confirm your inputs.\n\nFirst name: " + inputs[0] + "\nLast name: " + inputs[1] + "\nEmail: " + inputs[2] + "\nMessage: " + inputs[3]);
      if(r==true){
         window.location = '/'; //Redireted to Home
      } else{
         //Stay in contact page
      }  
   }
 } 

 // Create EventListner
function createEventListeners() {
   //Validate fastname, lastname and message
    var register = document.getElementById("submit");
    if (register.addEventListener) {
       register.addEventListener("click", validateForm, false);
    } else if (register.attachEvent) {
       register.attachEvent("onclick", validateForm);
    }
   //Validate email
    var emailInput = document.getElementById("email");
    if (emailInput.addEventListener) {  
       emailInput.addEventListener("change", validateEmail, false); 
    } else if (provinceInput.attachEvent) {
       emailInput.attachEvent("onchange", validateEmail);
    }
    
 }
 
 //Run initial form configuration functions 
 function setUpPage() {
    createEventListeners();
 }
 
  if (window.addEventListener) {
     window.addEventListener("load", createEventListeners, false);
  } else if (window.attachEvent) {
     window.attachEvent("onload", createEventListeners);
  }
}
=======
//File name : app.js
//Student name : Akino Kashima 
//Student ID : 301155967
//Date: 10.02.2021 

// For Business Contacts List Page
if(getTitle == "Business Contacts List" || "Edit contact")
{
   // When Delete button clicked on Business Contacts List page
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault(); // Cancel the submit
            }
        });
    }
}


if(getTitle == "Contact")
{



// Validation for Contact form of Contact page 

"use strict";

var formValidity = true;

/* validate required fields */
function validateRequired() {
   var inputElements = document.querySelectorAll("#contactform input, #contactform textarea");
   var errorDiv = document.getElementById("errorText");
   var requiredValidity = true;
   var currentElement;
   try {
      for (var i = 0; i < inputElements.length; i++) 
      { 
         // validate all input elements in fieldset
         currentElement = inputElements[i];
         if (currentElement.value === "") 
         {
            currentElement.style.background = "rgb(255,233,233)";
            requiredValidity = false;
         } else {
            currentElement.style.background = "white";
         }
      }
      if (requiredValidity === false) { 
         throw "Please complete all fields.";
      } 
      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";
   }
   catch(msg) {
      errorDiv.style.display = "block";
      errorDiv.innerHTML = msg; 
      formValidity = false;
   }
}

 // validate entered email
 function validateEmail() {
    var emailInput = document.getElementById("email");
    var errorDiv = document.getElementById("emailError");
    var emailCheck = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
    try {

       if (emailCheck.test(emailInput.value) === false) {
          throw "Please provide a valid email address";
       }
        // remove any email error styling and message
       emailInput.style.background = "";
       errorDiv.innerHTML = "";
       errorDiv.style.display = "none";
       // convert email address to lowercase
       emailInput.value = emailInput.value.toLowerCase();

    }
    catch(msg) {
       // display error message
       errorDiv.innerHTML = msg;
       errorDiv.style.display = "block";
       // change input style
       emailInput.style.background = "rgb(255,233,233)";
       formValidity = false;
    }
 }

 //validate form
 function validateForm(evt) 
 {
    if (evt.preventDefault) {
       evt.preventDefault(); // prevent form from submitting
    } else {
       evt.returnValue = false; // prevent form from submitting in IE8
    }
   formValidity = true; // reset value for revalidation
    validateRequired();
    validateEmail();

    if (formValidity === true) 
   {
      var inputElements = document.querySelectorAll("#contactform input, #contactform textarea"); //Capture user's inputs
      var inputs = [];
      for (var i = 0; i < inputElements.length; i++) {
         inputs.push(inputElements[i].value);
      }
      
      //Show user their inputs in a confirm window
      var r = confirm("Please confirm your inputs.\n\nFirst name: " + inputs[0] + "\nLast name: " + inputs[1] + "\nEmail: " + inputs[2] + "\nMessage: " + inputs[3]);
      if(r==true){
         window.location = '/'; //Redireted to Home
      } else{
         //Stay in contact page
      }  
   }
 } 

 // Create EventListner
function createEventListeners() {
   //Validate fastname, lastname and message
    var register = document.getElementById("submit");
    if (register.addEventListener) {
       register.addEventListener("click", validateForm, false);
    } else if (register.attachEvent) {
       register.attachEvent("onclick", validateForm);
    }
   //Validate email
    var emailInput = document.getElementById("email");
    if (emailInput.addEventListener) {  
       emailInput.addEventListener("change", validateEmail, false); 
    } else if (provinceInput.attachEvent) {
       emailInput.attachEvent("onchange", validateEmail);
    }
    
 }
 
 //Run initial form configuration functions 
 function setUpPage() {
    createEventListeners();
 }
 
  if (window.addEventListener) {
     window.addEventListener("load", createEventListeners, false);
  } else if (window.attachEvent) {
     window.attachEvent("onload", createEventListeners);
  }
}
>>>>>>> dd6c681507599ea9f1f2adcfbe9aa99cf1ee1b37
