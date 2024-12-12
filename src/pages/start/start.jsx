import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function start () {
  return (
    <>
        {/* Navbar */}
        <nav className="navbar-start">
            <div className="navbar-izq">
                <div className="contenedor-img">
                    <img className="logo-navbar" src="../../../public/logo2.png" alt="FutNow" />
                </div>
                <h1 className="navbar-titulo">FutNow</h1>
            </div>
            <div className="navbar-der">
                <Link to="/login">
                    <button>Iniciar sesion</button>
                </Link>
                <Link to="/register">
                    <button>Registrarse</button>
                </Link>
            </div>
        </nav>
        {/* Main */}
        <main className="main-start">
            <div className="main-izq">
                <div className="contenedor-vista">
                    <h2>¡Bienvenido a FutNow!</h2>
                    <p>Para comenzar a disfrutar de FutNow, inicia sesión o regístrate.</p>
                </div>
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
        <footer className="footer-start">
            <p>© 2020 FutNow. Todos los derechos reservados.</p>
        </footer>
    </>
  );
}

export default start;