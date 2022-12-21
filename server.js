const express = require('express')
const baseRoutes = require('./routers/base')
const path = require('path')
const ejs = require('ejs')

const app = express()

//VARIABLES STUFF
app.set('PORT', process.env.PORT || 8080)

//EXPRESS CONFIG
app.use(express.json())
app.use(express.urlencoded({"extended":true}))
app.use(express.static(path.join(__dirname, '/public')))

//ENGINE
app.set('views', './views')
app.set('view engine', 'ejs')

//ROUTES
app.use('/api', baseRoutes)
app.use('/static', express.static('public'))

//STARTING SERVER
app.listen(app.get('PORT'), (err) => {
    if(err){
        console.log(`Error en el inicio del servidor: ${err}`)
        return
    }

    console.log(`Servidor escuchando el puerto ${app.get('PORT')}`)

})