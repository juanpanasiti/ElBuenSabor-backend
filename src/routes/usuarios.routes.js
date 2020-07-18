const usuariosDomain = require("../services/usuarios.services");

exports.getUsuarios = (req, res) => {
  usuariosDomain
    .getUsuarios()
    .then((usuarios) => {
      res.json(usuarios);
    })
    .catch((err) => {
      console.log("Error -> usuarios.routes -> getUsuarios -> " + err);
      res.json(err);
    });
}; //exports.getUsuarios

exports.getUsuarioByEmail = (req, res) => {
  usuariosDomain
    .getUsuarioByEmail(req.params.email)
    .then((usuario) => {
      res.json(usuario);
    })
    .catch((err) => {
      console.log("Error -> usuarios.routes -> getUsuarioByEmail -> " + err);
      res.json(err);
    });
}; //exports.getUsuarioByEmail

exports.getUsuarioById = (req, res) => {
  usuariosDomain
    .getUsuarioById(req.params.id)
    .then((usuario) => {
      res.json(usuario);
    })
    .catch((err) => {
      console.log("Error -> usuarios.routes -> getUsuarioById -> " + err);
      res.json(err);
    });
}; //exports.getUsuarioById

exports.updateUsuario = (req, res) => {
  const usuarioData = req.body;
  usuariosDomain
    .updateUsuario(req.params.id, usuarioData)
    .then((usuario) => {
      res.json(usuario);
    })
    .catch((err) => {
      console.log("Error -> usuarios.routes -> getUsuarioById -> " + err);
      res.json(err);
    });
}; //exports.updateUsuario

exports.softdeleteUsuario = (req, res) => {
  usuariosDomain
    .setBorradoUsuario(req.params.id, true)
    .then((usuario) => {
      res.json(usuario);
    })
    .catch((err) => {
      console.log("Error -> usuarios.routes -> softdeleteUsuario -> " + err);
      res.json(err);
    });
}; //exports.softdeleteUsuario

exports.softundeleteUsuario = (req, res) => {
  usuariosDomain
    .setBorradoUsuario(req.params.id, false)
    .then((usuario) => {
      res.json(usuario);
    })
    .catch((err) => {
      console.log("Error -> usuarios.routes -> softundeleteUsuario -> " + err);
      res.json(err);
    });
}; //exports.softundeleteUsuario

exports.hardDeleteUsuario = (req, res) => {
  usuariosDomain
    .hardDeleteUsuario(req.params.id)
    .then((usuario) => {
      res.json(usuario);
    })
    .catch((err) => {
      console.log("Error -> usuarios.routes -> hardDeleteUsuario -> " + err);
      res.json(err);
    });
}; //exports.hardDeleteUsuario

exports.getRolesByEmail = (req, res) => {
  usuariosDomain
    .getRolesByEmail(req.params.email)
    .then((roles) => {
      res.json(roles);
    })
    .catch((err) => {
      console.log("Error -> usuarios.routes -> getRolesByEmail -> " + err);
      res.json(err);
    });
}; //getRolesByEmail

exports.getUsuariosByRol = (req, res) => {
  usuariosDomain
    .getUsuarioByRol(req.params.rol)
    .then((usuarios) => {
      console.log(usuarios.length);
      
      res.json(usuarios);
    })
    .catch((err) => {
      console.log("Error -> usuarios.routes -> getUsuariosByRol -> " + err);
      res.json(err);
    });
}; //exports.getUsuariosByRol