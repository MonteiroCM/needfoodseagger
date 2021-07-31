'use strict';

var utils = require('../utils/writer.js');
var Categorias = require('../service/CategoriasService');

module.exports.categoriasGET = function categoriasGET (req, res, next) {
  Categorias.categoriasGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.categoriasPOST = function categoriasPOST (req, res, next, body) {
  Categorias.categoriasPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCategoriaById = function deleteCategoriaById (req, res, next, categoriaID) {
  Categorias.deleteCategoriaById(categoriaID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCategoriaById = function getCategoriaById (req, res, next, categoriaID) {
  Categorias.getCategoriaById(categoriaID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putCategoriaById = function putCategoriaById (req, res, next, body, categoriaID) {
  Categorias.putCategoriaById(body, categoriaID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
