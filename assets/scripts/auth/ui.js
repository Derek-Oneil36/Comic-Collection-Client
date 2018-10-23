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
  $('.register-tab').addClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('.sign-in-tab').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('.change-password-tab').removeClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#all-comics-button').removeClass('hidden')
  $('#log-out-button').removeClass('hidden')
  $('.upload-tab').removeClass('hidden')
  $('#create-comic-form').removeClass('hidden')
  $('.update-tab').removeClass('hidden')
  $('#update-comic-form').removeClass('hidden')
  $('.your-comics-tab').removeClass('hidden')
  $('#your-comics-form').removeClass('hidden')
  $('#delete-comic-form').removeClass('hidden')
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
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#delete-comic-form').trigger('reset')
  $('#update-comic-form').trigger('reset')
  $('#create-comic-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#your-comics-form').trigger('reset')
  $('.register-tab').removeClass('hidden')
  $('#sign-up-form').removeClass('hidden')
  $('.sign-in-tab').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('.change-password-tab').addClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#all-comics-button').addClass('hidden')
  $('#log-out-button').addClass('hidden')
  $('.upload-tab').addClass('hidden')
  $('#create-comic-form').addClass('hidden')
  $('.update-tab').addClass('hidden')
  $('#update-comic-form').addClass('hidden')
  $('.your-comics-tab').addClass('hidden')
  $('#your-comics-form').addClass('hidden')
  $('#delete-comic-form').addClass('hidden')
  // $('#get-comic').addClass('hidden')
}

// Will display a red message informing the user the action failed.
const logOutFailure = function () {
  $('#display-message').html('Failed to Logout, Please Try Again.')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#update-comic-form').trigger('reset')
  $('#delete-comic-form').trigger('reset')
  $('#create-comic-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

// Will display a green message informing the user the action was successful.
const getComicSuccess = function (data) {
  $('#display-message').html(`ID: ${data.comic.id} Title: ${data.comic.title} Issue: ${data.comic.issue}`)
  $('#display-message').css('color', 'green')
  $('#your-comics-form').trigger('reset')
  $('#update-comic-form').trigger('reset')
  $('#delete-comic-form').trigger('reset')
  $('#create-comic-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

// Will display a red message informing the user the action failed.
const getComicFailure = function () {
  $('#display-message').html("Try Again, Comic Dosen't Exist.")
  $('#display-message').css('color', 'red')
  $('#your-comics-form').trigger('reset')
  $('#update-comic-form').trigger('reset')
  $('#delete-comic-form').trigger('reset')
  $('#create-comic-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

// Will display a green message informing the user the action was successful.
const allComicsSuccess = function (data) {
  $('#display-message').html(`You have ${data.comics.length} comics in the database.`)
  $('#display-message').css('color', 'green')
  $('#your-comics-form').trigger('reset')
  $('#update-comic-form').trigger('reset')
  $('#delete-comic-form').trigger('reset')
  $('#create-comic-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

// Will display a red message informing the user the action failed.
const allComicsFailure = function () {
  $('#display-message').html('Failed! Please Try Again.')
  $('#display-message').css('color', 'red')
  $('#your-comics-form').trigger('reset')
  $('#update-comic-form').trigger('reset')
  $('#delete-comic-form').trigger('reset')
  $('#create-comic-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

// Will display a green message informing the user the action was successful.
const createComicSuccess = function (response) {
  $('#display-message').html('Comic Saved!')
  $('#display-message').css('color', 'green')
  $('#update-comic-form').trigger('reset')
  $('#delete-comic-form').trigger('reset')
  $('#create-comic-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  store.comic = response.comic
}

// Will display a red message informing the user the action failed.
const createComicFailure = function () {
  $('#display-message').html('Failed! Please Try Again.')
  $('#display-message').css('color', 'red')
  $('#update-comic-form').trigger('reset')
  $('#delete-comic-form').trigger('reset')
  $('#create-comic-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const updateComicSuccess = function () {
  $('#display-message').html('Comic Updated!')
  $('#display-message').css('color', 'green')
  $('#update-comic-form').trigger('reset')
  $('#delete-comic-form').trigger('reset')
  $('#create-comic-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

// Will display a red message informing the user the action failed.
const updateComicFailure = function () {
  $('#display-message').html('Failed! Please Try Again.')
  $('#display-message').css('color', 'red')
  $('#update-comic-form').trigger('reset')
  $('#delete-comic-form').trigger('reset')
  $('#create-comic-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const deleteComicSuccess = function () {
  $('#display-message').html('Comic Removed!')
  $('#display-message').css('color', 'green')
  $('#update-comic-form').trigger('reset')
  $('#delete-comic-form').trigger('reset')
  $('#create-comic-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

// Will display a red message informing the user the action failed.
const deleteComicFailure = function () {
  $('#display-message').html('Failed! Please Try Again.')
  $('#display-message').css('color', 'red')
  $('#update-comic-form').trigger('reset')
  $('#delete-comic-form').trigger('reset')
  $('#create-comic-form').trigger('reset')
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
  getComicSuccess,
  getComicFailure,
  allComicsSuccess,
  allComicsFailure,
  createComicSuccess,
  createComicFailure,
  updateComicSuccess,
  updateComicFailure,
  deleteComicSuccess,
  deleteComicFailure,
  changePasswordSuccess,
  changePasswordFailure
}
