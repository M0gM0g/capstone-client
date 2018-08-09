'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./user/events')
const employeeEvents = require('./employees/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#change-pw-error').hide()
  $('#register-error').hide()
  $('#register-success').hide()
  $('#register-form').on('submit', authEvents.onRegister)
  $('#login-error').hide()
  $('#login-form').on('submit', authEvents.onLogIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#login-form-link').on('click', authEvents.onLogInFormLink)
  $('#register-form-link').on('click', authEvents.onRegisterFormLink)
  // clear change pw form
  $('#change-password').click(function () {
    $('#change-password-form')[0].reset()
  })

  // Dashboard
  $('#dash-nav').hide()
  $('#dash-nav').on('click', employeeEvents.onDashNav)
  $('#dashboard').hide()

  // dashboard click handlers
  $('.create').on('click', employeeEvents.onCreateEmployeeTab)
  // $('.your-Employees').on('click', employeeEvents.onYourEmployeesTab)

  $('.your-employees').on('click', employeeEvents.onGetUserEmployees)

  $('#view-your-employees-btn').on('click', employeeEvents.onGetUserEmployees)

  $('.all-employees').on('click', employeeEvents.onGetEmployees)
  $('#view-all-employees-btn').on('click', employeeEvents.onGetEmployees)

  // dashboard hover effect
  $('.create').hover(
    function () {
      $(this).css({'background-color': 'rgba(133, 227, 253, 1)'})
    },
    function () {
      $(this).css({'background-color': 'rgba(133, 227, 253, .6)'})
    })
  $('.your-employees').hover(
    function () {
      $(this).css({'background-color': 'rgba(82, 215, 253, 1)'})
    },
    function () {
      $(this).css({'background-color': 'rgba(82, 215, 253, .6)'})
    })
  $('.all-employees').hover(
    function () {
      $(this).css({'background-color': 'rgba(3, 199, 255, 1)'})
    },
    function () {
      $(this).css({'background-color': 'rgba(3, 199, 255, .6)'})
    })

  // Create Employee
  $('#create-employee').hide()
  $('#create-employee-error').hide()
  $('#create-employee-form').on('submit', employeeEvents.onCreateEmployee)

  // Update Employee
  $('.show-content').on('submit', '.update-employee', employeeEvents.onUpdateEmployee)

  // Remove Employee
  $('.show-content').on('click', '.delete-employee', employeeEvents.onRemoveEmployee)
})
