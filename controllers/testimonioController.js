import { Testimonios } from "../models/Testimonios.js"

const guardarTestimonio = async (req, res) => {
    // Validar el form
    const {nombre, correo, mensaje} = req.body
    const errores = []
    if(nombre.trim() === '') {
        errores.push({mensaje: 'El nombre está vacio'})
    }
    if(correo.trim() === '') {
        errores.push({mensaje: 'El email está vacio'})
    }
    if(mensaje.trim() === '') {
        errores.push({mensaje: 'El mensanje está vacio'})
    }
    if(errores.length > 0) {
        const testimonios = await Testimonios.findAll()
        // validar
        res.render('testimonios', {
            pagina: 'Testimonios',
            errores,
            nombre,
            correo,
            mensaje,
            testimonios
        })
    } else {
        // almacenar
        try {
            await Testimonios.create({
                nombre, correo, mensaje
            })

            res.redirect('/testimonios')
        } catch (error) {
            console.log(error)
        }
    }
}

export {
    guardarTestimonio
}