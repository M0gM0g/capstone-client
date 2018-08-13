const store = require('../store.js')
const showAllEmployees = require('../templates/helpers/employee.handlebars')
// const showEmployeesEdit = require('../templates/helpers/showEmployeeEdit.handlebars')

const createEmployeeSuccess = function (createEmployeeResponse) {
  $('#create-employee-form')[0].reset()
  $('#create-employee-error').hide()
  $('#successModal').modal('show')
  $('#success-message').text('You successfully created an direct report.')
}

const createEmployeeError = function (createEmployeeError) {
  $('#create-employee-form')[0].reset()
  $('#create-employee-error').delay(100).fadeIn(100)
}

const getEmployeesSuccess = function (data) {
  store.employees = data.employees
  if (data.employees.length > 0) {
    const showEmployeesHtml = showAllEmployees({
      employees: data.employees
    })
    $('#dashboard').delay(100).fadeOut(100)
    $('#all-employees').delay(200).fadeIn(100)
    $('#logo').delay(100).fadeOut(100)
    $('#dash-nav').delay(200).fadeIn(100)
    $('#create-employee-form')[0].reset()
    $('#create-employee-error').hide()
    $('#create-employee').delay(100).fadeOut(100)
    $('.show-content').delay(100).fadeIn(100)
    $('.show-content').html(showEmployeesHtml)
  } else {
    $('#messageModal').modal('show')
    $('#message').text('Sorry, there are currently no employees')
  }
}

const getEmployeesError = function (data) {}

// const getUserEmployeesSuccess = function (data) {
//   store.employees = data.employees
//   const userEmployees = []
//   for (let i = 0; data.employees.length > i; i++) {
//     if (data.employees[i].owner === store.user._id) {
//       userEmployees.push(data.employees[i])
//     }
//   }
//
//   if (userEmployees.length > 0) {
//     const showUserEmployeesHtml = showUserEmployees({
//       employees: userEmployees
//     })
//
//     $('#create-employee').delay(100).fadeOut(100)
//     $('#dashboard').delay(100).fadeOut(100)
//     $('#logo').delay(100).fadeOut(100)
//     $('#dash-nav').delay(200).fadeIn(100)
//     $('.show-content').delay(200).fadeIn(100)
//     $('.show-content').html(showUserEmployeesHtml)
//   } else {
//     $('#dash-nav').delay(100).fadeOut(100)
//     $('#dashboard').delay(200).fadeIn(100)
//     $('#logo').delay(200).fadeIn(100)
//     $('#messageModal').modal('show')
//     $('#message').text('You have no employees. Please create a employee!')
//   }
// }

const getUserEmployeesError = function (data) {}

// const updateEmployeeSuccess = function (data) {
//   store.employees = data.employees
//   const showEmployeesEditHtml = showEmployeesEdit({
//     employees: data.employees
//   })
//   $('#dashboard').delay(100).fadeOut(100)
//   $('#all-employees').delay(200).fadeIn(100)
//   $('#logo').delay(100).fadeOut(100)
//   $('#dash-nav').delay(200).fadeIn(100)
//   $('#create-employee-form')[0].reset()
//   $('#create-employee-error').hide()
//   $('#create-employee').delay(100).fadeOut(100)
//   $('.show-content').delay(100).fadeIn(100)
//   $('.show-content').html(showEmployeesEditHtml)
// }

const updateEmployeeSuccess = function (updateSurveyResponse) {
  $('#successModal').modal('show')
  $('#success-message').html('Your employee has been updated!')
}

const updateEmployeeError = function (updateEmployeeError) {}

const removeEmployeeSuccess = function (data) {
  store.employees = data.employees
  const userEmployees = []
  for (let i = 0; data.employees.length > i; i++) {
    if (data.employees[i].owner === store.user._id) {
      userEmployees.push(data.employees[i])
    }
  }

  if (userEmployees.length > 0) {
    const showUserEmployeesHtml = showAllEmployees({
      employees: userEmployees
    })
    $('#create-employee').delay(100).fadeOut(100)
    $('#dashboard').delay(100).fadeOut(100)
    $('#logo').delay(100).fadeOut(100)
    $('#dash-nav').delay(200).fadeIn(100)
    $('.show-content').delay(200).fadeIn(100)
    $('.show-content').html(showUserEmployeesHtml)
    $('#successModal').modal('show')
    $('#success-message').html('You successfully removed this employee.')
  } else {
    $('#dash-nav').delay(100).fadeOut(100)
    $('#dashboard').delay(200).fadeIn(100)
    $('#logo').delay(200).fadeIn(100)
    $('#successModal').modal('show')
    $('#success-message').html('You successfully removed this employee!<br> You have no employees. Please create a employee!')
  }
}

const removeEmployeeError = function (removeEmployeeError) {}

module.exports = {
  createEmployeeSuccess,
  createEmployeeError,
  getEmployeesSuccess,
  getEmployeesError,
  removeEmployeeSuccess,
  removeEmployeeError,
  updateEmployeeSuccess,
  updateEmployeeError,
  getUserEmployeesError
}
