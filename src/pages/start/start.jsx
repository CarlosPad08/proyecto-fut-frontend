import './styles.css';

function start () {
  return (
    <div>
        {/* Navbar */}
        <nav>
            <div className="navbar-izq">
                <img src="/assets/logo.png" alt="FutNow" />
                <h1>FutNow</h1>
            </div>
            <div className="navbar-der">
                <a href="/login">Iniciar sesión</a>
                <a href="/register">Registrarse</a>
            </div>
        </nav>
        {/* Main */}
        <main>
            <div className="main-izq">
                <h2>¡Bienvenido a FutNow!</h2>
                <p>Para comenzar a disfrutar de FutNow, inicia sesión o regístrate.</p>
            </div>
            <div className="main-der">
                <div className="contenedor-registro">
                    <h3>Regístrate</h3>
                    <form action="/register" method="POST" className="form-registro">
                        <label htmlFor="username">Nombre:</label>
                        <input type="text" id="username" name="username" required />
                        
                        <label htmlFor="email">Correo electrónico:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="phone">telefono:</label>
                        <input type="text" id="phone" name="phone" required />
                        
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" name="password" required />
                        
                        <label htmlFor="confirm-password">Confirmar contraseña:</label>
                        <input type="password" id="confirm-password" name="confirm-password" required />
                        
                        <button type="submit">Registrarse</button>
                    </form>
                </div>
            </div>
        </main>
        {/* Footer */}
        <footer>
            <p>© 2020 FutNow. Todos los derechos reservados.</p>
        </footer>
    </div>
  );
}

export default start;