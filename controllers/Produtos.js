'use strict';

var utils = require('../utils/writer.js');
var Produtos = require('../service/ProdutosService');

module.exports.deleteProdutoById = function deleteProdutoById (req, res, next, produtoID) {
  Produtos.deleteProdutoById(produtoID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProdutoById = function getProdutoById (req, res, next, produtoID) {
  Produtos.getProdutoById(produtoID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.produtosGET = function produtosGET (req, res, next) {
  Produtos.produtosGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.produtosPOST = function produtosPOST (req, res, next, body) {
  Produtos.produtosPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putProdutoById = function putProdutoById (req, res, next, body, produtoID) {
  Produtos.putProdutoById(body, produtoID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
