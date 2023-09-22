const {Schema, model} = require('mongoose')

const EmpleadoSchema = Schema({
    idEmpleado: {
        type: String,
        required:[true, "El id es obligatorio"]
    },

    usuario: {
        type: String,
        required:[true, "El usuario es obligatoria"]
    },

    nombreCompleto: {
        type: String,
        required:[true, "El nombre es obligatoria"]
    },

    direccion: {
        type: String,
        required:[true, "La direccion es obligatoria"]
    },

    correo: {
        type: String,
        required:[true, "El correo es obligatoria"]
    },

    telefono: {
        type: String,
        required:[true, "El telefono es obligatoria"]
    },

    estado: {
        type: String,
        required:[true, "El estado es obligatoria"]
    },


})

//Exportar la función UsuarioSchema
module.exports = model('Empleado',EmpleadoSchema)

