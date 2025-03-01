import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../assets/stylesForm.css"

export default function Registro() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (email && password) {
        const newUser = { email, password };
        localStorage.setItem("user", JSON.stringify(newUser));
        alert("Usuario Registrado");
        navigate("/login");
      } else {
        alert("Faltan campos obligatorios");
      }
    };
  
    return (
      <div className="container">
        <div className="form-box">
          <h2>Registro</h2>
          <form onSubmit={handleRegister}>
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
            <button type="submit">Registrarse</button>
          </form>
        </div>
      </div>
    );
  }
  