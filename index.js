import express from 'express'
import router from './routes/index.js'
import db from './config/db.js'

const app = express()

const port = process.env.PORT || 3307

db.authenticate()
    .then(() => console.log('bd conectada'))
    .catch(error => console.log(error))


// Habilitar pug
app.set('view engine', 'pug')


// Obtener año actual
app.use( (req, res, next) => {
    const year = new Date()
    res.locals.actualYear = year.getFullYear()
    res.locals.nombresitio = 'Agencia de Viajes'
    return next()
})

app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(noopServiceWorkerMiddleware('/'));
app.use('/', router)

app.listen(port, () => {
    console.log(`el servidor está funcionando en el puerto ${port}`)
})