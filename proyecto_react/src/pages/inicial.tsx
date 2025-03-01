import { Link } from "react-router-dom";
import "../assets/styles.css";

function inicial() {

    return (
        <div className="home-container">
            <h1>Bienvenido a Nuestra Plataforma</h1>
            <p>Únete a nosotros para disfrutar de nuestros servicios.</p>
            <div className="button-group">
                <Link to="/registro" className="btn">Registrarse</Link>
                <Link to="/login" className="btn">Iniciar Sesión</Link>
            </div>
        </div>
    );

}

export default inicial;