import { Viaje } from '../models/Viajes.js'
import { Testimonios } from '../models/Testimonios.js'

const paginaInicio = async (req, res) => {
    // para evitar tener doble await cuando consulte por viajkes y testimonios uso un promise
    const promiseDB = []
    promiseDB.push(Viaje.findAll({limit: 3}))
    promiseDB.push(Testimonios.findAll({limit: 3}))
    try {
        // const viajes = await 
        // const testimonios = await 
        const resultado = await Promise.all(promiseDB)
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimonios: resultado[1]
        })
    } catch (error) {
        
    }

}
const paginaViajes = async (req, res) => {
    // consultar bd
    const viajes = await Viaje.findAll()
    console.log(viajes)
    res.render('viajes', {
        pagina: 'Viajes',
        viajes
    })
}

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const { viaje } = req.params

    try {
        const resultado = await Viaje.findOne({where : { slug: viaje } })
        res.render('viaje', {
            pagina: 'Informacion Viaje',
            resultado
        })
    } catch(error) {
        console.log(error)
    }
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}
const paginaTestimonios = async (req, res) => {
    try {
        const testimonios = await Testimonios.findAll()
        res.render('testimonios', {
            pagina: 'Testimonios',
            testimonios
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio, 
    paginaNosotros,
    paginaTestimonios,
    paginaViajes,
    paginaDetalleViaje
}