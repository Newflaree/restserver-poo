const { request, response } = require( 'express' );

const getUsers = ( req = request, res = response ) => {
  const { q, nombre = 'Sin nombre', apikey, page = 1, limit } = req.query;

  res.json({
    msg: 'get API - Controller',
    q,
    nombre,
    apikey,
    page,
    limit
  });
}

const postUser = ( req = request, res = response ) => {
  const { nombre, edad } = req.body;

  res.json({
    msg: 'post API - Controller',
    nombre,
    edad
  });
}

const putUser = ( req = request, res = response ) => {
  const { id } = req.params;

  res.json({
    msg: 'put API - Controller',
    id
  });
}

const patchUser = ( req = request, res = response ) => {
  res.json({
    msg: 'patch API - Controller'
  });
}

const deleteUser = ( req = request, res = response ) => {
  res.json({
    msg: 'delete API - Controller'
  });
}

module.exports = {
  getUsers, 
  postUser, 
  putUser, 
  patchUser, 
  deleteUser
}
