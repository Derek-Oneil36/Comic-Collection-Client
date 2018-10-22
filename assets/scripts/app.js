'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')

$(() => {
  /* We are using a jQuery call on the sign-up-form class
  to trigger the onSignUp function once submit is heard by the event listener.
  */
  $('#sign-up-form').on('submit', authEvents.onSignUp)

  /* We are using a jQuery call on the sign-in-form class
  to trigger the onSignIn function once submit is heard by the event listener.
  */
  $('#sign-in-form').on('submit', authEvents.onSignIn)

  /* We are using a jQuery call on the sign-in-form class
  to trigger the onSignIn function once submit is heard by the event listener.
  */
  $('#create-comic-form').on('submit', authEvents.onCreateComic)

  /* We are using a jQuery call on the sign-in-form class
  to trigger the onSignIn function once submit is heard by the event listener.
  */
  $('#update-comic-form').on('submit', authEvents.onUpdateComic)

  /* We are using a jQuery call on the sign-in-form class
  to trigger the onSignIn function once submit is heard by the event listener.
  */
  $('#delete-comic-form').on('submit', authEvents.onDeleteComic)

  /* We are using a jQuery call on the change-password-form class
  to trigger the onChangePassword function once submit is heard by the
  event listener.
  */
  $('#change-password-form').on('submit', authEvents.onChangePassword)

  /* We are using a jQuery call on the log-out-button class
  to trigger the onLogOut function once click is heard by the event listener.
  */
  $('#log-out-button').on('click', authEvents.onLogOut)
})
