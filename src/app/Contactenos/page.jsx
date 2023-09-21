import Footer from "@/Components/Footer/Footer";
import "../globals.css"
import "./contact.css"
import Layout from "@/Components/Layout/Layout";

export default function Contactenos()
{
    return(
        <Layout>
            <div className="MobileView ">
                <div className="container ContactUs">
                    <h2>Contáctenos</h2>
                    
                    <h3>¿Cómo reportar un nombre ofensivo de algún equipo?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem beatae veniam animi voluptatum! Velit, deserunt eum voluptatum nesciunt exercitationem aperiam corrupti dicta ea dignissimos assumenda aspernatur laudantium quisquam numquam facere. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi necessitatibus odio vitae officiis? Expedita, reprehenderit optio suscipit adipisci sed unde. Rem, deleniti. Temporibus consequuntur error eligendi perspiciatis, doloremque assumenda ratione!</p>
                    
                    <h3>¿Cómo encontrar ayuda en la página?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem beatae veniam animi voluptatum! Velit, deserunt eum voluptatum nesciunt exercitationem aperiam corrupti dicta ea dignissimos assumenda aspernatur laudantium quisquam numquam facere. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi necessitatibus odio vitae officiis? Expedita, reprehenderit optio suscipit adipisci sed unde. Rem, deleniti. Temporibus consequuntur error eligendi perspiciatis, doloremque assumenda ratione!</p>
                    
                    <h3>Requerimientos generales</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem beatae veniam animi voluptatum! Velit, deserunt eum voluptatum nesciunt exercitationem aperiam corrupti dicta ea dignissimos assumenda aspernatur laudantium quisquam numquam facere. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi necessitatibus odio vitae officiis? Expedita, reprehenderit optio suscipit adipisci sed unde. Rem, deleniti. Temporibus consequuntur error eligendi perspiciatis, doloremque assumenda ratione!</p>

                    <div className="Form">
                        <form action="">
                            <h3>Formulario de ayuda</h3>
                            <p>Nombre y Apellidos</p>
                            <input type="text" name="name" id="username" />
                            <p>Correo electrónico</p>
                            <input type="mail" name="email" id="usermail" />
                            <p>Comentario</p>
                            <textarea type="text" name="comment" id="comment"/>
                        </form>
                        <div className="buttonsRow">
                            <button>Cancelar</button>
                            <button>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}