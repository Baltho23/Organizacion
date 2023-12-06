import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './Componentes/Header/header';
import Formulario from './Componentes/Formulario/Formulario';
import MiOrg from './Componentes/MiOrg';
import Equipo from './Componentes/Equipo';
import Footer from './Componentes/Footer';

function App() {

  const[mostrarFormulario, actualizarMostar]= useState(true)

  const[colaboradores, actualizarColaboradores]= useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://i.pinimg.com/564x/87/20/df/8720df08b078c667608664c270a988cd.jpg",
    nombre: "Miles Morales",
    puesto: "Instructor",
    fav: false,
  },

  {
    id: uuid(),
    equipo: "Programacion",
    foto: "https://i.pinimg.com/736x/cf/16/62/cf166220c38b412bf91721a07f48426c.jpg",
    nombre: "Gwen Stacy",
    puesto: "Desarrolladora de software e instructora",
    fav: true,
  },

  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://i.pinimg.com/564x/85/f5/4f/85f54f0c0fedcc626d91d42313290572.jpg",
    nombre: "Cindy moon",
    puesto: "Instructora en Alura Latam",
    fav: false,
  },
  
  {
    id: uuid(),
    equipo: "Programacion",
    foto: "https://i.pinimg.com/564x/eb/ff/73/ebff732d090107ad0f84548bc7cea275.jpg",
    nombre: "Miguel O'hara",
    puesto: "Head de Alura e Instructor",
    fav: true,
  },
  {
    id: uuid(),
    equipo: "Innovacion y Gestion",
    foto: "https://i.pinimg.com/564x/fd/1e/fe/fd1efef4839949e0163ad45c51829271.jpg",
    nombre: "Peter Parker",
    puesto: "Dev FullStack",
    fav: false,
  }])

  const[equipos, actualizarEquipos]= useState([
    {
      id: uuid(),
      titulo:"Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },

    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },

    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },

    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },

    {
      id: uuid(),
      titulo:"Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },

    {
      id: uuid(),
      titulo:"Innovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },

    
])
  
  function cambiarMostrar(){
    actualizarMostar(!mostrarFormulario)
  }

  function registrarColaborador(colaborador){
     console.log(colaborador)
     actualizarColaboradores([...colaboradores, colaborador])
  }

  function eliminarColaborador(id){
    console.log("Eliminado", id)
    const nuevosColaboradores= colaboradores.filter((colaborador)=> colaborador.id !== id)

    actualizarColaboradores(nuevosColaboradores)
  }

  function actualizarColor(color, id){
    const equiposActualizados= equipos.map((equipo)=>{
      if(equipo.id=== id){
        equipo.colorPrimario=color

      }
      return equipo

    })

    actualizarEquipos(equiposActualizados)

  }

  function crearEquipo(nuevoEquipo){
    console.log(nuevoEquipo)

    actualizarEquipos([...equipos,{...nuevoEquipo,id:uuid()}])

  }

  function like(id){
    const colaboradoresFav= colaboradores.map((colaborador)=>{
      if(colaborador.id===id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresFav)

  }


  return (
    <div>

      <Header/>
      {/*mostrarFormulario && <Formulario/>*/}
      
      {mostrarFormulario === true ? 
      <Formulario 
      equipo= {equipos.map((equipos)=> equipos.titulo)}
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo} /> : <></>}
      
      
      <MiOrg cambiarMostrar={cambiarMostrar} />
      
      {
        equipos.map( (equipo)=> {
          return<Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador=> colaborador.equipo=== equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like} />
        })
      }

      <Footer/>

    </div>
  );
}

export default App;
