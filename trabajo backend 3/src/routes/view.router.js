
import { Router } from "express";
const route = Router();


route.get('/' , (req , res) => {
    try{
        res.render('home');
    }
    catch(err){
        res.send({status:"error", message:"error en realtimeproducts"}, err.message)
    }
})

route.get('/realtimeproducts' , (req , res) => {
    try{
        res.render('realTimeProducts');
    }
    catch(err){
        res.send({status:"error", message:"error en realtimeproducts"}, err.message)
    }
})

export default route;