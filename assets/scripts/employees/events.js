'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const employeesApi = require('./api')
const employeesUi = require('./ui')

const onDashNav = function (event) {
  event.preventDefault()
  $('#create-employee').delay(100).fadeOut(100)
  $('#dash-nav').delay(100).fadeOut(100)
  $('#dashboard').delay(200).fadeIn(100)
  $('#logo').delay(200).fadeIn(100)
  $('.show-content').delay(100).fadeOut(100)
}

const onCreateEmployeeTab = function (event) {
  event.preventDefault()
  $('#dashboard').delay(100).fadeOut(100)
  $('#create-employee').delay(200).fadeIn(100)
  $('#logo').delay(100).fadeOut(100)
  $('#dash-nav').delay(200).fadeIn(100)
}

const onCreateEmployee = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  employeesApi.createEmployee(data)
    .then(employeesUi.createEmployeeSuccess)
    .catch(employeesUi.createEmployeeError)
}

const onGetEmployees = function (event) {
  event.preventDefault()
  employeesApi.getEmployees()
    .then(employeesUi.getEmployeesSuccess)
    .catch(employeesUi.getEmployeesError)
}

const onRemoveEmployee = function (event) {
  event.preventDefault()
  const employeeId = $(event.target).attr('data-id')
  employeesApi.removeEmployee(employeeId)
    .then(refreshEmployeesOnDelete)
    .catch(employeesUi.removeEmployeeError)
}

const onUpdateEmployee = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const employeeId = $(event.target).attr('data-id')
  employeesApi.updateEmployee(data, employeeId)
    .then(employeesUi.updateEmployeeSuccess)
    .catch(employeesUi.updateEmployeeError)
    .then(refreshEmployees)
}

const refreshEmployees = function (event) {
  $('.show-content').html('')
  employeesApi.getEmployees()
    .then(employeesUi.getUserEmployeesSuccess)
    .catch()
}

const onGetUserEmployees = function (event) {
  event.preventDefault()
  employeesApi.getEmployees()
    .then(employeesUi.getUserEmployeesSuccess)
    .catch(employeesUi.getUserEmployeesError)
}

const refreshEmployeesOnDelete = function (event) {
  $('.show-content').html('')
  employeesApi.getEmployees()
    .then(employeesUi.removeEmployeeSuccess)
    .catch()
}
module.exports = {
  onCreateEmployee,
  onGetEmployees,
  onRemoveEmployee,
  onUpdateEmployee,
  refreshEmployees,
  onCreateEmployeeTab,
  onDashNav,
  onGetUserEmployees
}
