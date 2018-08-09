'use strict'
const store = require('../store')
const config = require('../config')

const createEmployee = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/employees',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getEmployees = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/employees',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const removeEmployee = (employeeId) => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/employees/' + employeeId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateEmployee = (data, employeeId) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/employees/' + employeeId,
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createEmployee,
  getEmployees,
  removeEmployee,
  updateEmployee
}
