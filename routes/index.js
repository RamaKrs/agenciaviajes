import express from 'express'
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimonios, paginaDetalleViaje } from '../controllers/paginasController.js'
import { guardarTestimonio } from '../controllers/testimonioController.js'

const router = express.Router()

router.get('/', paginaInicio)
router.get('/viajes', paginaViajes)
router.get('/viajes/:viaje', paginaDetalleViaje)
router.get('/nosotros', paginaNosotros)
router.get('/testimonios', paginaTestimonios)
router.post('/testimonios', guardarTestimonio)

export default router