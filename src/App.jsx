import './App.css'
import { useState } from 'react';

function App() {
  {/*Estado para manejar los mensajes de error*/}
  const [error, setError] = useState(""); 

  {/*Función para manejar el envío del formulario*/}
  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    
    const usuario = event.target.usuario.value;
    const password = event.target.password.value;

    {/*Validación de los campos*/}
    if (!usuario && !password) {
      setError("Debes ingresar el usuario y contraseña.");
    } else if (!usuario) {
      setError("Debes ingresar un usuario.");
    } else if (!password) {
      setError("Debes ingresar una contraseña.");
    } else if (usuario !== "usuarioCorrecto" || password !== "contraseñaCorrecta") {
      setError("Contraseña incorrecta.");
    } else {
      setError("");
      alert("¡Inicio de sesión exitoso!");
    }
  };

  return (
    <>
      <div className='body'>
          {/* Barra de navegación */}
        <nav className="navbar">
            {/* Botón de Login que activa el checkbox */}
            <label htmlFor="toggle-login" className="nav-button">Login</label>
            {/* Botón de Register (sin acción asociada por ahora) */}
            <button className="nav-button" /*onClick="location.href='#'"*/>Register</button>
        </nav>

        {/* Checkbox oculto que se usa para mostrar el formulario de login */}
        <input type="radio" id="toggle-login" />
        
        {/* Contenedor que contiene el formulario de login */}
        <div className="contenedor">
            <h2>Iniciar sesión</h2>
            <form id="forma" name="forma" method="post" onSubmit={handleSubmit}>
                <div className="elemento">
                    <label htmlFor="usuario">Usuario</label>
                    <input type="text" id="usuario" name="usuario" /*required="true"*//>
                </div>
                <div className="elemento">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" /*required="true"*//>
                </div>
                <div className="elemento">
                    <input type="submit" value="Ingresar"/>
                </div>
            </form>

            {/* Mostrar el mensaje de error si existe */}
          {error && <div className="error-message">{error}</div>}
        </div>
      </div>
    </>
  )
}

export default App
