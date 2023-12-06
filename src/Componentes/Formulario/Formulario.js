import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo/Campo"
import ListaOpciones from "../ListaOpciones/Index"
import Boton from "../Boton"
function Formulario(props){

    const[nombre,actualizarNombre]=useState("")
    const[puesto,actualizarPuesto]=useState("")
    const[foto,actualizarFoto]=useState("")
    const[equipo,actualizarEquipo]=useState("")

    const[titulo,actualizarTitulo]=useState("")
    const[color,actualizarColor]=useState("")

    const{registrarColaborador, crearEquipo}= props

    function manejarEnvio(event){
        event.preventDefault()
        let datosEnviar ={
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosEnviar)
    }

    function manejarNuevoEquipo(event){

        event.preventDefault()

        crearEquipo({titulo,color})
        
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
            titulo="Nombre" 
            placeholder="Ingresar nombre" 
            required 
            valor={nombre} 
            actualizarvalor={actualizarNombre}/>
            
            <Campo 
            titulo="Puesto" 
            placeholder="Ingresar puesto" 
            required 
            valor={puesto} 
            actualizarvalor={actualizarPuesto}/>

            <Campo 
            titulo="Foto" 
            placeholder="Ingresar enlace de la foto" required 
            valor={foto} 
            actualizarvalor={actualizarFoto}/>

            <ListaOpciones 
            valor={equipo} 
            actualizarvalor={actualizarEquipo} 
            equipos={props.equipo}/>

            <Boton texto="Crear"/>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
            titulo="Titulo" 
            placeholder="Ingresar titulo" 
            required 
            valor={titulo} 
            actualizarvalor={actualizarTitulo}/>
            
            <Campo 
            titulo="Color" 
            placeholder="Color hexadecimal" 
            required 
            valor={color} 
            actualizarvalor={actualizarColor}
            type="Color"/>

            <Boton texto="Registrar equipo"/>

        </form>

    </section>
}

export default Formulario