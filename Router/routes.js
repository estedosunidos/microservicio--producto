const express = require('express');
const router= express.Router();
const controllers = require('../Controller/ProductController')
//Obtiene todos los productos de las base de datos
router.get('/',controllers.obtenerproducto)
// Inserta los productos ala base de datos
router.post('/insertproduct',controllers.insertarproduct)
//Eliminar los productos de la base de datos
router.delete('/:idproduct',controllers.eliminarproducto)
//Actualizar los productos de la base de datos
router.put('/:idproduct', controllers.actualizarporducto)

module.exports = router