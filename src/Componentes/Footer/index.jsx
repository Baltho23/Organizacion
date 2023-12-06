import "./Footer.css"

function Footer(){
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/airton.sampayo.9/' target="_blank">
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://github.com/Baltho23' target="_blank">
                <img className="margen"  src="/img/Git.png" alt='twitter' />
            </a>
            <a  href='https://www.instagram.com/airton_sampayo/' target="_blank">
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Airton</strong>
    </footer>
} 

export default Footer