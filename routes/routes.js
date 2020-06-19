//urls base
const URL_BASE = "/api";
const URL_INSUMOS = URL_BASE + "/insumos";
const URL_ROLES = URL_BASE + "/roles";
const URL_RUBROS = URL_BASE + "/rubros";
const URL_USUARIOS = URL_BASE + "/usuarios";

//implementaciones de los endpoints
//const rolesRoutes = require("./roles.routes");
const rubrosRoutes = require("./rubro.routes");
//const insumosRoutes = require("./insumos.routes");
const usuariosRoutes = require("./usuarios.routes");

exports.assignRoutes = (app) => {
  //ENDPOINTS
  //Articulos Insumo
  //app.post(URL_INSUMOS + "/", insumosRoutes.createInsumo); //Crear insumo
  //app.get(URL_INSUMOS + '/') //Obtener todos los insumos no borrados
  //app.get(URL_INSUMOS + '/') //

  //Articulos Reventa
  //Detalle Ingredientes
  //Domicilios
  //Platos

  //Roles
  //app.get(URL_ROLES + "/", rolesRoutes.getRoles); //Roles no borrados

  //Rubros
  app.post(URL_RUBROS + "/", rubrosRoutes.createRubro); //Crear un rubro
  app.get(URL_RUBROS + "/", rubrosRoutes.getRubros); //Obtener rubros no borrados
  app.get(URL_RUBROS + "/raices", rubrosRoutes.getRubrosRaiz); //Obtener rubros raíz (no borrados)
  app.get(URL_RUBROS + "/:id/subrubros", rubrosRoutes.getRubrosHijos); //Obtener subrubros (no borrados)
  app.get(URL_RUBROS + "/borrados", rubrosRoutes.getRubrosBorrados); //Obtener rubros borrados
  app.get(URL_RUBROS + "/deInsumo", rubrosRoutes.getRubrosInsumo); //obtener rubros de insumos
  app.get(URL_RUBROS + "/deCatalogo", rubrosRoutes.getRubrosCatalogo); //obtener rubros de catalogo
  app.get(URL_RUBROS + "/:id", rubrosRoutes.getRubro); //obtener un rubro
  app.put(URL_RUBROS + "/:id", rubrosRoutes.updateRubro); //actualizar un rubro
  app.put(URL_RUBROS + "/softdelete/:id", rubrosRoutes.softDeleteRubro); //borrado lógico de un rubro
  app.put(URL_RUBROS + "/softundelete/:id", rubrosRoutes.softUndeleteRubro); //restaurado lógico de un rubro
  app.delete(URL_RUBROS + "/harddelete/:id", rubrosRoutes.hardDeleteRubro); //borrado fisico de un rubro

  //Usuarios
  //app.post(URL_USUARIOS + '/'); //Crear usuario
  app.get(URL_USUARIOS + '/', usuariosRoutes.getUsuarios); //Obtener todos los usuarios (borrados o no)
  app.get(URL_USUARIOS + '/:email', usuariosRoutes.getUsuario) //Obtener usuario por email
  
};
