'use strict';

var utils = require('../utils/writer.js');
var Clientes = require('../service/ClientesService');

module.exports.clientesGET = function clientesGET (req, res, next) {
  Clientes.clientesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientesPOST = function clientesPOST (req, res, next, body) {
  Clientes.clientesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteClienteById = function deleteClienteById (req, res, next, clienteID) {
  Clientes.deleteClienteById(clienteID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getClienteById = function getClienteById (req, res, next, clienteID) {
  Clientes.getClienteById(clienteID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putClienteById = function putClienteById (req, res, next, body, clienteID) {
  Clientes.putClienteById(body, clienteID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
