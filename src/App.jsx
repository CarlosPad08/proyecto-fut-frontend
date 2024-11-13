import './App.css'

function App() {

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
            <form id="forma" name="forma" method="post">
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
        </div>
      </div>
    </>
  )
}

export default App
