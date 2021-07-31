'use strict';


/**
 * Recupera todos os Clientes
 *
 * returns Clientes
 **/
exports.clientesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "password" : "password",
  "nome" : "nome",
  "id" : 0,
  "email" : "email"
}, {
  "password" : "password",
  "nome" : "nome",
  "id" : 0,
  "email" : "email"
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
 * body Cliente Usado para Inserir um novo produto na base de dados
 * returns Produto
 **/
exports.clientesPOST = function(body) {
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
 * Deletar Cliente pelo ID
 * Remover o Cliente com o ID informado
 *
 * clienteID Long ID do cliente a ser retornado
 * returns ClienteFull
 **/
exports.deleteClienteById = function(clienteID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "nome" : "nome",
  "id" : 0,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Procurar Cliente pelo ID
 * Retorna o Cliente com o ID informado
 *
 * clienteID Long ID do Cliente a ser retornado
 * returns ClienteFull
 **/
exports.getClienteById = function(clienteID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "nome" : "nome",
  "id" : 0,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar Cliente
 * Atualiza o Cliente com o ID informado
 *
 * body Cliente Dados (optional)
 * clienteID Long ID do cliente a ser retornado
 * returns ClienteFull
 **/
exports.putClienteById = function(body,clienteID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "nome" : "nome",
  "id" : 0,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

