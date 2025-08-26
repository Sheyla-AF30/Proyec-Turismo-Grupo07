// Importa React para poder usar JSX
import React from 'react'

// Importa los estilos CSS específicos para este componente
import './Contactenos.css'

// Importa funciones de react-hook-form para manejar formularios
import { useForm } from 'react-hook-form'

// Importa yup para definir reglas de validación
import * as yup from 'yup'

// Conecta yup con react-hook-form usando yupResolver
import { yupResolver } from '@hookform/resolvers/yup'

// Importa useNavigate para redirigir al usuario después de enviar el formulario
import { useNavigate } from 'react-router-dom'

// Define el esquema de validación con yup
const schema = yup.object().shape({
    name: yup.string()
        .required('El campo nombre y apellido no debe estar vacío')
        .min(5, 'Debe tener al menos 5 caracteres')
        .max(40, 'Debe tener como máximo 40 caracteres'),

    email: yup.string()
        .required('El campo correo no debe estar vacío')
        .email('No tiene formato de correo'),

    telefono: yup.string()
        .required('El campo teléfono no debe estar vacío')
        .min(9, 'Debe tener 9 dígitos')
        .max(9, 'Debe tener 9 dígitos como máximo'),

    mensaje: yup.string()
        .required('El campo descripción no debe estar vacío')
        .min(10, 'Debe tener al menos 10 caracteres')
})

// Componente funcional Contactenos
export const Contactenos = () => {
    // Inicializa el formulario con validación usando el esquema definido
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })

    // Hook para redireccionar al usuario
    const navigate = useNavigate()

    // Función que se ejecuta al enviar el formulario
    const onProcess = (data) => {
        console.log(data) // Muestra los datos en consola
        navigate('/')     // Redirige a la página principal
    }

    // Renderiza el formulario de contacto
    return (
        <section id="contacto" className="bloque seccion activa">
            <div className="contacto-contenedor">
                <h2>Contáctanos</h2>
                <p>Estamos aquí para ayudarte, completa el formulario o usa los medios de contacto directo.</p>
                
                {/* Formulario con validación */}
                <form className="form-contacto" onSubmit={handleSubmit(onProcess)}>
                    
                    {/* Campo: Nombre */}
                    <label>Nombres y Apellidos:</label>
                    <input type="text" name="nombre" {...register('name')} />
                    {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}

                    {/* Campo: Correo */}
                    <label>Correo:</label>
                    <input type="text" name="correo" {...register('email')} />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}

                    {/* Campo: Teléfono */}
                    <label>Teléfono:</label>
                    <input type="tel" name="telefono" {...register('telefono')} />
                    {errors.telefono && <span style={{ color: 'red' }}>{errors.telefono.message}</span>}

                    {/* Campo: Mensaje */}
                    <label>Mensaje:</label>
                    <textarea name="mensaje" rows="5" {...register('mensaje')} ></textarea>
                    {errors.mensaje && <span style={{ color: 'red' }}>{errors.mensaje.message}</span>}

                    {/* Botón de envío */}
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    )
}