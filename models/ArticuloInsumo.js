const mongoose = require("mongoose");

const insumoSchema = mongoose.Schema({
  denominacion: {
    type: String,
    required: true,
  },
  precioCompra: {
    type: Number,
    default: 0,
  },
  stockActual: {
    type: Number,
    default: 0,
  },
  stockMinimo: {
    type: Number,
    default: 0,
  },
  stockMaximo: {
    type: Number,
    default: 0,
  },
  unidadMedida: {
    type: String,
    required: true,
  },
  rubro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rubro",
  },
  borrado: {
    type: Boolean,
    default: false,
  },
});

mongoose.model("Insumo", insumoSchema);
