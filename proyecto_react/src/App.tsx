import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicial from "./pages/inicial.tsx"
import Dashboard from "./pages/dashboard.tsx"
import Login from "./pages/login.tsx"
import Registro from "./pages/registro.tsx"
 
 
import './App.css'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicial />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/registro" element={<Registro />} /> 
      </Routes>
    </Router>
  );
}

export default App
