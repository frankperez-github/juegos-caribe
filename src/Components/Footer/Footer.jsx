import "./Footer.css"
import Image from "next/image"

export default function Footer()
{
    const year = new Date().getFullYear()
    return(
        <div className="Footer MobileView container">
            <div>
                <div className="Logo">
                    <Image src="/logo.svg" alt="" fill className="image"/>
                </div>
                <div className="socialMedias">
                
                </div>
            </div>
            <div className="columns">
                <div className="footerRow">
                    <div className="group">
                        <a href="/">Inicio</a><br /><br />
                        <div className="groupInfo">
                            <p  className="groupHead" >Medallero</p>
                            <p>Deportes del Día</p>
                            <p>Resumen de Noticias</p>
                        </div>
                    </div>
                    <div className="group">
                        <a href="/Deportes">Deportes</a><br /><br />
                        <div className="groupInfo">
                            <p  className="groupHead" >Individuales</p>
                            <p>Colectivos</p>
                        </div>
                    </div>
                </div>
                <div className="footerRow">
                    <div className="group">
                        <a href="/Noticias">Noticias</a><br /><br />
                        <div className="groupInfo">
                            <p  className="groupHead">Noticias relevantes</p>
                        </div>
                    </div>
                    
                    <div className="group">
                        <a href="/Juegos_Caribe">Juegos Caribe</a><br /><br />
                        <div className="groupInfo">
                            <p  className="groupHead" >Reglamento</p>
                            <p>Comisión</p>
                        </div>
                    </div>
                </div>
                <div className="footerRow">
                    <div className="group">
                        <a href="/">Cronograma</a><br /><br />
                    </div>
                    <div className="group">
                        <a href="/">Facultades</a><br /><br />
                    </div>
                </div>
            </div>
            <div className="Links">
                <div className="leftLinks">
                    <a href="">Contáctanos</a><br /><br />
                    <a href="">Sobre Nosotros</a>
                </div>
                <div className="rightLinks">
                    <a href="">Política de Privacidad</a><br /><br />
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