const {response}= require('express')

//Importancia de los modelos
const Empleado = require('../models/empleado')

//Metodo GET de la API
const empleadoGet = async (req, res = response) =>{
    //const {nombre} = req.query //Desestructuracion

    //Consultar todos los Vehiculos
    const empleado = await Empleado.find()

    res.json({ //RESPUESTA EN JSOn
        empleado
    })
   
}
//Método POST de la api
const empleadoPost = async(req, res) => {
    let mensaje = 'Inserción Exitosa'
    const body = req.body //Captura de atributos
    //console.log(body);
    try {
        const empleado = new Empleado(body) //Instanciando el objeto
        await empleado.save() //Inserta en la colección
    } catch (error) {
        mensaje = error
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}


//Método Put de la api
const empleadoPut = async(req, res = response) => {

    const {idEmpleado, usuario, nombreCompleto, direccion, correo, telefono, estado} = req.body
    let mensaje = 'Modificación exitosa'
    try{
         await Empleado.findOneAndUpdate({idEmpleado:idEmpleado}, 
            {idEmpleado:idEmpleado, usuario:usuario, nombreCompleto:nombreCompleto, direccion:direccion, correo:correo, telefono:telefono, estado:estado})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación.'
    }

    res.json({
        msg: mensaje
    })
}
//Método DELETE de la api
const empleadoDelete = async(req, res) => {

    const {_id} = req.body
    let mensaje = 'La eliminiación se efectuó exitosamente.'

    try{
        const empleado = await Empleado.deleteOne({_id: _id})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación.'
    }

    res.json({
        msg: mensaje
    })
}


module.exports= {
    empleadoGet, 
    empleadoPost,
    empleadoPut,
    empleadoDelete
}