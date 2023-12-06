import "./colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

function Colaborador(props){

    const{nombre,puesto,foto,id, fav}=props.datos
    const{colorPrimario, eliminarColaborador, like}= props
    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={()=>eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src= {foto} alt="harland"></img>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="red" onClick={()=> like(id)}></AiFillHeart>: 
            <AiOutlineHeart onClick={()=> like(id)}  ></AiOutlineHeart>}
            
            
            
        </div>

    </div>
}

export default Colaborador