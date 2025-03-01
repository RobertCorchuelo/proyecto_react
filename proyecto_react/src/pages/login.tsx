import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../assets/stylesForm.css";


function acceso() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); //Evita que el formulario recargue la pagina al enviarlo
        const savedUser = JSON.parse(localStorage.getItem("user") || "{}");
        // Obtener usuario registrado y convierte la informacion guardada en JSON a un objeto
        if (savedUser && savedUser.email === email && savedUser.password === password) {
            localStorage.setItem("usuario", JSON.stringify(savedUser)); // convierte el objeto user en una cadena de texto para guardarlo en localStorage
            navigate("/dashboard");
        } else {
            alert("Correo o contraseña incorrectos");
        }
    };

    return (
        <div className="form-box">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Ingresar</button>
            </form>
        </div>
    );

}
export default acceso;