'use strict';


/**
 * Deletar Tamanho pelo ID
 * Remover o Produdo com o ID informado
 *
 * tamanhoID Long ID do tamanho a ser retornado
 * returns Tamanho
 **/
exports.deleteTamanhoById = function(tamanhoID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "estabelecimento_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "ativo" : true,
  "porcentagem" : 0.8008281904610115,
  "nome" : "nome"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Procurar Tamanho pelo ID
 * Retorna o Produdo com o ID informado
 *
 * tamanhoID Long ID do tamanho a ser retornado
 * returns Tamanho
 **/
exports.getTamanhoById = function(tamanhoID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "estabelecimento_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "ativo" : true,
  "porcentagem" : 0.8008281904610115,
  "nome" : "nome"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar Tamanho
 * Atualiza o Produdo com o ID informado
 *
 * body TamanhoFull Dados (optional)
 * tamanhoID Long ID do tamanho a ser retornado
 * returns Tamanho
 **/
exports.putTamanhoById = function(body,tamanhoID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "estabelecimento_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "ativo" : true,
  "porcentagem" : 0.8008281904610115,
  "nome" : "nome"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Recupera todos os tamanhos
 *
 * returns Tamanhos
 **/
exports.tamanhosGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "estabelecimento_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "ativo" : true,
  "porcentagem" : 6.027456183070403,
  "nome" : "nome",
  "id" : 0
}, {
  "estabelecimento_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "ativo" : true,
  "porcentagem" : 6.027456183070403,
  "nome" : "nome",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adicionar um novo tamanho
 *
 * body Tamanho Usado para Inserir um novo tamanho na base de dados
 * returns Tamanhos
 **/
exports.tamanhosPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "estabelecimento_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "ativo" : true,
  "porcentagem" : 6.027456183070403,
  "nome" : "nome",
  "id" : 0
}, {
  "estabelecimento_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "ativo" : true,
  "porcentagem" : 6.027456183070403,
  "nome" : "nome",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

