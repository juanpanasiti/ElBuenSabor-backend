const mongoose = require("mongoose");
require("../models/DetalleIngrediente");

//Registrar Schema
const Ingrediente = mongoose.model("DetalleIngrediente");

exports.Ingrediente = Ingrediente;

//Crear
exports.saveIngrediente = (ingredienteData) => {
  return new Promise((resolve, reject) => {
    const ingrediente = new Ingrediente(ingredienteData);
    ingrediente
      .save()
      .then((ingrediente) => {
        console.log("ingrediente guardado");
        resolve(ingrediente);
      })
      .catch((err) => {
        console.log("Error -> ingredientes.db -> saveIngrediente -> " + err);
        reject(err);
      });
  });
}; //exports.saveIngrediente

//Obtener no borrados
exports.getIngredientes = () => {
  return new Promise((resolve, reject) => {
    Ingrediente.find({ borrado: false })
      .then((ingredientes) => {
        console.log(`Encontrados ${ingredientes.length} ingredientes`);
        resolve(ingredientes);
      })
      .catch((err) => {
        console.log("Error -> ingredientes.db -> getIngredientes -> " + err);
        reject(err);
      });
  });
}; //exports.getIngredientes

//Obtener uno
exports.getIngredienteById = (id) => {
  return new Promise((resolve, reject) => {
    Ingrediente.findById(id)
      .then((ingrediente) => {
        resolve(ingrediente);
      })
      .catch((err) => {
        console.log("Error -> ingredientes.db -> getIngredienteById -> " + err);
        reject(err);
      });
  });
}; //exports.getIngredienteById

//Actualizar uno
exports.updateIngrediente = (id, ingredienteData) => {
  return new Promise((resolve, reject) => {
    Ingrediente.findByIdAndUpdate(id, ingredienteData, { new: true })
      .then((ingrediente) => {
        resolve(ingrediente);
      })
      .catch((err) => {
        console.log("Error -> ingredientes.db -> updateIngrediente " + err);
        reject(err);
      });
  });
}; //exports.updateIngrediente

//Borrado lógico de uno
exports.setBorradoIngrediente = (id, borrado) => {
  return new Promise((resolve, reject) => {
    Ingrediente.findByIdAndUpdate(id, { borrado: borrado }, { new: true })
      .then((ingrediente) => {
        resolve(ingrediente);
      })
      .catch((err) => {
        console.log(
          "Error -> ingredientes.db -> setBorradoIngrediente -> " + err
        );
        reject(err);
      });
  });
}; //exports.setBorradoIngrediente

//Borrado físico de uno
exports.hardDeleteIngrediente = (id) => {
  return new Promise((resolve, reject) => {
    Ingrediente.findByIdAndDelete({ _id: id })
      .then((ingrediente) => {
        resolve(ingrediente);
      })
      .catch((err) => {
        console.log("Error -> ingredientes.db -> hardDeleteIngrediente -> " + err);
        reject(err);
      });
  });
}; //exports.hardDeleteIngrediente