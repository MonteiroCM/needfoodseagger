'use strict';

var utils = require('../utils/writer.js');
var Tamanhos = require('../service/TamanhosService');

module.exports.deleteTamanhoById = function deleteTamanhoById (req, res, next, tamanhoID) {
  Tamanhos.deleteTamanhoById(tamanhoID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTamanhoById = function getTamanhoById (req, res, next, tamanhoID) {
  Tamanhos.getTamanhoById(tamanhoID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putTamanhoById = function putTamanhoById (req, res, next, body, tamanhoID) {
  Tamanhos.putTamanhoById(body, tamanhoID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tamanhosGET = function tamanhosGET (req, res, next) {
  Tamanhos.tamanhosGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tamanhosPOST = function tamanhosPOST (req, res, next, body) {
  Tamanhos.tamanhosPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
