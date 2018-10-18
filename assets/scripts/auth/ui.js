'use strict'

/*
we are requiring store.js file so we can use the
exported functions in this file.
*/
// const events = require('./events.js')
const store = require('../store.js')
// const data = require('./api.js')

// Will display a green message informing the user the action was successful.
const signUpSuccess = function () {
  $('#display-message').html('Account Created, Please Sign In.')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
}

// Will display a red message informing the user the action failed.
const signUpFailure = function () {
  $('#display-message').html('Sign Up Failed! Please Try Again.')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
}

// Will display a green message informing the user the action was successful.
const signInSuccess = function (response) {
  store.user = response.user
  $('#display-message').html('Logged in.')
  $('#display-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#log-out-button').removeClass('hidden')
  // $('#upload-comic').removeClass('hidden')
  // $('#get-comic').removeClass('hidden')
}

// Will display a red message informing the user the action failed.
const signInFailure = function () {
  $('#display-message').html('Username and Password Do Not Match! Please Try Again.')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
}

// Will display a green message informing the user the action was successful.
const logOutSuccess = function () {
  $('#display-message').html('You Are Now Logged Out.')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#log-out-button').addClass('hidden')
  // $('#upload-comic').addClass('hidden')
  // $('#get-comic').addClass('hidden')
}

// Will display a red message informing the user the action failed.
const logOutFailure = function () {
  $('#display-message').html('Failed to Logout, Please Try Again.')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
}

// Will display a green message informing the user the action was successful.
const changePasswordSuccess = function () {
  $('#display-message').html('Your Password Has Changed.')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
}

// Will display a red message informing the user the action failed.
const changePasswordFailure = function () {
  $('#display-message').html('Failed to Change Password, Please Try Again.')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
}

// We're exporting functions so they can be used in other files
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  logOutSuccess,
  logOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}