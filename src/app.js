
/*----------------------------------------------------------------------------------------------------------------- */
/*  CODERHOUSE - CURSO BACKEND - COMISION 50045.
/*  DESAFIO: 3: Servidores con express.
/*  ALUMNO: Guillermo Guardia.
/*  FECHA: 21-01-2024.
/*
/*-------------------------------------------------------------------------------------------------------------------*/


const express = require('express') //Importo express
const PUERTO = 8080 //Declaro constante para puerto.
const app = express() //Creo la app de express

const testPage = require('./testpage.js') //Importo el testpage
const ProductManager = require('./controllers/product-manager.js') //importo el product-manager
const productManager = new ProductManager('./src/models/productslist.json') // Creo la instnacia de productManager con el archivo de productos ya cargados.(Puse 16)


//Endpoints
app.get('/',(req,res)=>{
    //Al ingresar a la ruta '/' el servidor devuelve un string Html que el cliente renderiza para facilitar el test.
    res.send(testPage)
})

app.get('/products', async (req,res)=>{
    /*Al hacer una peticion a '/products' pido los productos al product Manager.
      Si todo sale Ok miro req.query si trajo limit o no trajo. Si trajo limit devuelvo el numero de objetos que me pide en limit.
      SI no trajo limit devuelvo la lista entera de productos.
      Si ocurrio un error doy aviso y devuelvo en la respuesta un status en forma de json.
    */
    try{
        const limit = req.query.limit
        const productos = await productManager.getProducts()

        limit 
        ? res.json(productos.slice(0,limit))
        : res.json(productos)
    }catch(error){
        console.log('Error al obtener productos.', error)
        res.status(500).json({error: 'Error del servidor'})
    }
})

app.get('/products/:pid', async (req,res)=>{
      /*Al hacer una peticion a '/products/:pid' pido los productos al product Manager con el metodo getProductByID y uso de parametro lo que vino en param.
       SI no vino un producto devuelvo un objeto JSON con mensaje de error, si existe el producto lo devuelvo tambien en forma de objeto json.
       Si ocurrio un error doy aviso y devuelvo en la respuesta un status en forma de json.
    */
    try{
        const id = req.params.pid
        const producto = await productManager.getProductById(parseInt(id))
        
        !producto 
        ? res.json({error:'Producto no encontrado.'})
        : res.json(producto)
           
    }catch(error){
        console.log('Error al obtener producto.', error)
        res.status(500).json({error: 'Error del servidor'})
    }
})

//Escucho a travez del puerto 8080.
app.listen(PUERTO, ()=>{console.log('Escuchando por puerto 8080...')})