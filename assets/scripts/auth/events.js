'use strict'

/*
we are requiring ui.js, api.js,engine.js, and get-form-fields so we can
use thier exported functions in this file.
*/
const ui = require('./ui.js')
const api = require('./api.js')
const store = require('../store.js')
const getFormFields = require('../../../lib/get-form-fields')

/*
The onSignUp function listens to an event then uses the exported signUp function
from the api.js file to sign up/create a user account on the game server.
It will call either the signUpSuccess if the function worked or
call signUpFailure if it didn't work.
*/
const onSignUp = function (event) {
  // stops the page from refreshing when action is called
  event.preventDefault()

  // creates a userData variable by using the get getFormFields function on
  // event.target
  const userData = getFormFields(event.target)

  api.signUp(userData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

/*
The onSignIn function listens to an event then uses the exported signIn function
from the api.js file to sign a user into their account. It will call either
the signIntSuccess if the function worked or call signInFailure if it didn't work.
*/
const onSignIn = function (event) {
  // stops the page from refreshing when action is called
  event.preventDefault()

  // creates a userData variable by using the get getFormFields function on
  // event.target
  const userData = getFormFields(event.target)

  api.signIn(userData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

/*
The onlogout function listens to an event then uses the exported logout function
from the api.js file to log the user out. It will call either the logOutSuccess
if the function worked or call logOutFailure if it didn't work.
*/
const onLogOut = function (event) {
  api.logOut()
    .then(ui.logOutSuccess)
    .catch(ui.logOutFailure)
}

/*
The onChangePassword function listens to an event then uses the exported
changePassword function from the api.js file to change the user's password.
It will call either the changePasswordSuccess if the function worked or call
changePasswordFailure if it didn't work.
*/
const onChangePassword = function (event) {
  // stops the page from refreshing when action is called
  event.preventDefault()

  // creates a password variable by using the get getFormFields function on
  // event.target
  const password = getFormFields(event.target)

  api.changePassword(password)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// we're exporting functions so that they cn be used in other files.
module.exports = {
  onSignUp,
  onSignIn,
  onLogOut,
  onChangePassword
}
