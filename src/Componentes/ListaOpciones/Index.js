import "./ListaOpciones.css"

function ListaOpciones(props){


    function manejarCambio(evento){
        props.actualizarvalor(evento.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" 
            disabled 
            defaultValue=""
            hidden>
            Selecionar equipo</option>
            {props.equipos.map((equipo, index)=>{
                return <option value={equipo} key={index}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones