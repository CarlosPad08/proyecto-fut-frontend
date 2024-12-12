import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
    return (
        <>
        <nav className="navbar-start">
            <div className="navbar-izq">
                <div className="contenedor-img">
                    <img className="logo-navbar" src="../../../public/logo2.png" alt="FutNow" />
                </div>
                <h1 className="navbar-titulo">FutNow</h1>
            </div>
            <div className="navbar-der">
                <Link to="/login">
                    <button>Equipo</button>
                </Link>
                <Link to="/register">
                    <button>Reservas</button>
                </Link>
                <Link to="/register">
                    <button>Usuario</button>
                </Link>
            </div>
        </nav>
        <main className="main-start-home">
            <div className="main-izq-canchas">
                <div className="cancha">
                    <h2>Cancha 1</h2>
                    <p>Estado: Disponible</p>
                    <p>Precio: $90.00</p>
                </div>
                <div className="cancha">
                    <h2>Cancha 2</h2>
                    <p>Estado: Reservada</p>
                    <p>Precio: $110.00</p>
                </div>
                <div className="cancha">
                    <h2>Cancha 3</h2>
                    <p>Estado: Ocupada</p>
                    <p>Precio: $100.00</p>
                </div>
            </div>
            <div className="main-der-info">
                <div className="estadisticas-equipo">
                    <h2 className="titulo-main-der">Estadisticas del equipo</h2>
                    <p className="cuadro-info">Partidos ganados: 3</p>
                    <p className="cuadro-info">Partidos perdidos: 1</p>
                </div>
                <div className="proximos-partidos">
                    <h2 className="titulo-main-der">Proximos partidos</h2>
                    <p className="cuadro-info">Equipo: Los leones</p>
                    <p> className="cuadro-info"Resultado: Victoria</p>
                </div>
                <div className="horarios-disponibles">
                    <h2 className="titulo-main-der">Horarios disponibles</h2>
                    <p className="cuadro-info">Horario 1</p>
                    <p className="cuadro-info">Horario 2</p>
                    <p className="cuadro-info">Horario 3</p>
                </div>
            </div>
        </main>
        </>
    );
}

export default Home;