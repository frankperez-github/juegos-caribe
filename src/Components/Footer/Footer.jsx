import "./Footer.css"
import Image from "next/image"

export default function Footer()
{
    const year = new Date().getFullYear()
    return(
        <div className="Footer MobileView container">
            <div className="FooterHead">
                <div className="Logo">
                    <Image src="/logo.svg" alt="" fill className="image"/>
                </div>
                <div className="socialMedias">

                </div>
            </div>
            <div className="leftColumn">
                <div className="group">
                    <a href="/">Inicio</a>
                    <p>Medallero</p>
                    <p>Deportes del Día</p>
                    <p>Resumen de Noticias</p>
                </div>
                <div className="group">
                    <a href="/Noticias">Noticias</a>
                    <p>Noticias relevantes</p>
                </div>
                <div className="group">
                    <a href="/">Cronograma</a>
                </div>
            </div>
            <div className="rightColumn">
                <div className="group">
                    <a href="/Deportes">Deportes</a>
                    <p>Individuales</p>
                    <p>Colectivos</p>
                </div>
                <div className="group">
                    <a href="/Juegos_Caribe">Juegos Caribe</a>
                    <p>Reglamento</p>
                    <p>Comisión</p>
                </div>
                <div className="group">
                    <a href="/">Facultades</a>
                </div>
            </div>
            <div className="Links">
                <div className="leftColumn">
                    <a href="">Contáctanos</a>
                    <a href="">Sobre Nosotros</a>
                </div>
                <div className="rightColumn">
                    <a href="">Política de Privacidad</a>
                    <a href="">Términos de uso</a>
                </div>
            </div>
            <div className="rights">
                <p>&#169; {year} Juegos Caribe</p>
                <p>Todos los derechos reservados</p>
            </div>
        </div>
    )
}