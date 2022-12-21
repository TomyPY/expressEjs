const {Router} = require('express')
const database = require('../database/database_handler')

const router = Router()


router.get('/products', (req, res)=>{

    let products = database.getAll()

    res.render('newProduct', {products: products})
})

router.post('/products', async (req, res)=>{

    let product = req.body

    let productSaved= await database.save(product)

    let products = database.getAll()

    res.render('newProduct', {products: products})
 
})

module.exports = router