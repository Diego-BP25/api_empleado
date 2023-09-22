const {Router} = require('express')
//Desestructuracion. EXtrar un atributo de un objeto

const route = Router()

//importar metodos del controlador
const {empleadoGet, empleadoPost, empleadoPut, empleadoDelete} = require('../controllers/empleado')

route.get('/',empleadoGet) //Listar datos

route.post('/',empleadoPost)

route.put('/',empleadoPut)

route.delete('/',empleadoDelete)


module.exports = route

//APP - SERVER - ROUTE - CONTROLLADOR - MODELO