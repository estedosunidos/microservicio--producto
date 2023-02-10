const servicios=require('../services/services')

module.exports={
    obtenerproducto:  async function (req, res,next) {
        try {
            res.json(await servicios.getproduct())
        }catch (err){
            next(err);

        }  
    },
    insertarproduct: async  function (req, res,next) {
        try{
            res.json(await servicios.insertproduct(Object.values(req.body)))
        }catch (err){
            next(err);
        }
    },
    eliminarproducto: async  function (req, res, next) {
        try {
            res.json(await servicios.deleteproduct(req.params.idproduct));
        } catch (err) {
            next(err);
        }
    },
    actualizarporducto: async function (req, res, next) {
        try {
            res.json(await servicios.updateproduct(req.params.idproduct,req.body.name,req.body.price,req.body.descripcion));
        } catch (err) {
            next(err);
        }
        
    }
}