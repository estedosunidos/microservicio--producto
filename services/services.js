const conection=require('../config/conexion.js')
const mysql2 = require('mysql2/promise');
//Esta funcion hacer se conectar ala base de datos y traer los producto  de la tabla producto
async function getproduct() {
    const sql = 'SELECT * FROM store.product'
    const conexion = await  mysql2.createConnection(conection.db)
    const [resul,]=await conexion.execute(sql)
    return resul 
}
//Esta funcion inserta cada producto ala base de datos y los alamacenas
async function insertproduct(id){
    const sql = 'INSERT INTO store.product (name,price,descripcion)VALUES (?,?,?)'
    const conexion = await  mysql2.createConnection(conection.db)
    const [resul,]=await conexion.execute(sql,id)
    if(resul.affectedRows){
        return{codigo: 'OK',mensaje:"El producto fue creado exitosamente"}
    }else{
        return {codigo:'error',mensaje:"El producto no fue creado exitosamente"}
    }
}
//Esta funcion actualizar cada producto de la tabla producto
async function updateproduct(idproduct,name,price,descripcion){
    const sql = 'UPDATE store.product set name=?,price=? ,descripcion=? WHERE idproduct=?'
    const conexion = await  mysql2.createConnection(conection.db)
    const [resul,]=await conexion.execute(sql,[name,price,descripcion,idproduct])
    if(resul.affectedRows){
        return{codigo: 'OK',mensaje:"El producto fue actualizado exitosamente"}
    }else{
        return {codigo:'error',mensaje:"El producto no fue actualizado exitosamente"}
    }
}
//Esta funcion  eliminar cada producto de la tabla de producto por su idproduct
async function deleteproduct(idproduct){
    const sql = 'DELETE FROM store.product WHERE idproduct=?'
    //const sql = 'UPDATE store.product set name=?,price=? ,descripcion=? WHERE idproduct=?'
    const conexion = await  mysql2.createConnection(conection.db)
    const [resul,]=await conexion.execute(sql,[idproduct])
    if(resul.affectedRows){
        return{codigo: 'OK',mensaje:"El producto fue eliminado exitosamente"}
    }else{
        return {codigo:'error',mensaje:"El producto no fue eliminado exitosamente"}
    }
}
module.exports = {getproduct,insertproduct,updateproduct,deleteproduct}