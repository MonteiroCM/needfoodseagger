'use strict';


/**
 * Deletar Produto pelo ID
 * Remover o Produdo com o ID informado
 *
 * produtoID Long ID do produto a ser retornado
 * returns Produto
 **/
exports.deleteProdutoById = function(produtoID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "estabelecimento_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "ativo" : true,
  "nome" : "nome",
  "categoria_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "descricao" : "descricao"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Procurar Produto pelo ID
 * Retorna o Produdo com o ID informado
 *
 * produtoID Long ID do produto a ser retornado
 * returns Produto
 **/
exports.getProdutoById = function(produtoID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "estabelecimento_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "ativo" : true,
  "nome" : "nome",
  "categoria_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "descricao" : "descricao"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Recupera todos os produtos
 *
 * returns ProdutosFull
 **/
exports.produtosGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "estabelecimento_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "ativo" : true,
  "nome" : "nome",
  "id" : 0,
  "categoria_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "descricao" : "descricao"
}, {
  "estabelecimento_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "ativo" : true,
  "nome" : "nome",
  "id" : 0,
  "categoria_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "descricao" : "descricao"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adicionar um novo produto
 *
 * body Produto Usado para Inserir um novo produto na base de dados
 * returns ProdutoFull
 **/
exports.produtosPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "estabelecimento_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "ativo" : true,
  "nome" : "nome",
  "id" : 0,
  "categoria_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "descricao" : "descricao"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar Produto
 * Atualiza o Produdo com o ID informado
 *
 * body ProdutoFull Dados (optional)
 * produtoID Long ID do produto a ser retornado
 * returns Produto
 **/
exports.putProdutoById = function(body,produtoID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "estabelecimento_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "ativo" : true,
  "nome" : "nome",
  "categoria_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "descricao" : "descricao"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

