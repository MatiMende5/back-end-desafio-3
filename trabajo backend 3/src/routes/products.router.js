import { Router } from "express";
import productManager from "../product.manager.js"

const router = Router();

const productos = new productManager("products.json");

//traer productos o productos por cantidad
router.get('/', async (req, res) => {
    try{
        const { limit } = req.query;
        if (limit) {
            const products = await productos.getProducts();
            const productosLimitados = products.slice(0, limit);
            res.send(productosLimitados)
        }
        else {
            const mostrarProductos = await productos.getProducts();
            res.send(mostrarProductos);
        } 
    }
    catch(err){
        res.status(404).send("error al traer productos")
    }
})


//traer productos por id
router.get('/:pid', async (req, res) => {
    try{
        const productoId = req.params.pid;
        if(productoId){
            const mostrarProducto = await productos.getProductById(parseInt(productoId));
            res.send(mostrarProducto);
        }else{
            res.status(404).send("no se encontro el id")
        }
    }
    catch(err){
        res.status(404).send("error al traer porducto por id")
    }
})




export default router