import "./Campo.css"

function Campo(props){

    const placeholderModificado = `${props.placeholder}...`
    
    const {type= "text"}= props

    function manejarCambio(evento){
      props.actualizarvalor(evento.target.value)
    }

      return <div className={`campo campo-${type}`}>
      <label> {props.titulo} </label>
      <input 
      placeholder= {placeholderModificado} 
      required={props.required} 
      value={props.valor} 
      onChange={manejarCambio}
      type={type}
      />
    </div>
 }

 export default Campo