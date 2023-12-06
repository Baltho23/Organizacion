import "./MiOrg.css"

function MiOrg(props){

    return <section className="orgSection">
        <h3 className="titulo">Mi Organizaciòn</h3>
        <img src="/img/Añadir.png" alt="Añadir" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg