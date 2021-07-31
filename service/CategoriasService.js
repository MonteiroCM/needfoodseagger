'use strict';


/**
 * Recupera todos os Categorias
 *
 * returns Categorias
 **/
exports.categoriasGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "estabelecimento_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "ativo" : true,
  "nome" : "nome",
  "id" : 0
}, {
  "estabelecimento_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "ativo" : true,
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
 * Adicionar um novo produto
 *
 * body Categoria Usado para Inserir um novo produto na base de dados
 * returns Produto
 **/
exports.categoriasPOST = function(body) {
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
 * Deletar Categoria pelo ID
 * Remover o Categoria com o ID informado
 *
 * categoriaID Long ID do categoria a ser retornado
 * returns CategoriaFull
 **/
exports.deleteCategoriaById = function(categoriaID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "estabelecimento_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "ativo" : true,
  "nome" : "nome",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Procurar Categoria pelo ID
 * Retorna o Categoria com o ID informado
 *
 * categoriaID Long ID do Categoria a ser retornado
 * returns CategoriaFull
 **/
exports.getCategoriaById = function(categoriaID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "estabelecimento_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "ativo" : true,
  "nome" : "nome",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar Categoria
 * Atualiza o Categoria com o ID informado
 *
 * body Categoria Dados (optional)
 * categoriaID Long ID do categoria a ser retornado
 * returns CategoriaFull
 **/
exports.putCategoriaById = function(body,categoriaID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "estabelecimento_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "ativo" : true,
  "nome" : "nome",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

