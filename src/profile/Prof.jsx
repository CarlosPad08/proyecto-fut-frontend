// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Profiles.css";

const App = () => {
  const plazas = [
    {
      id: 1,
      nombre: "Plaza buga 1",
      precio: "$90.00",
      estado: "Disponible",
      color: "green",
      imagen: "",
    },
    {
      id: 2,
      nombre: "Plaza buga 2",
      precio: "$110.00",
      estado: "Reservada",
      color: "green",
      imagen: "",
    },
    {
      id: 3,
      nombre: "Plaza buga 3",
      precio: "$100.00",
      estado: "Ocupada",
      color: "red",
      imagen: "",
    },
    {
      id: 4,
      nombre: "Plaza buga 4",
      precio: "$95.00",
      estado: "Disponible",
      color: "green",
      imagen: "",
    },
    {
      id: 5,
      nombre: "Plaza buga 5",
      precio: "$105.00",
      estado: "Ocupada",
      color: "red",
      imagen: "",
    },
  ];

  const partidos = [
    { equipo: "Los leones", resultado: "Victoria", color: "green" },
    { equipo: "Los calidosos", resultado: "Empate", color: "orange" },
    { equipo: "Polvora", resultado: "Victoria", color: "green" },
    { equipo: "Americanos", resultado: "Perdido", color: "red" },
  ];

  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">Futnow</h1>
        <nav className="nav">
          <button className="navButton">Reservas</button>
          <button className="navButton">Mi equipo</button>
          <button className="navButton">Mi perfil</button>
          <button className="navButton profileButton">Perfil</button>
        </nav>
      </header>
      <main className="main">
        {/* Lista de plazas */}
        <div className="plazas">
          <h2>Plazas</h2>
          {plazas.map((plaza) => (
            <button
              key={plaza.id}
              className={`plazaButton ${
                plaza.color === "green" ? "disponible" : "ocupada"
              }`}
            >Link de la imagen
              <div className="plazaImage">[https://files.antena2.com/antena2/public/styles/imagen_despliegue/public/2023-04/estadiodeportivocali.jpg.webp?VersionId=4zLNeRUXjonAzehp_dUX0p.peTOFfI4F&itok=JIEcuGpo]</div>
              <h3>{plaza.nombre}</h3>
              <p>{plaza.precio}</p>
              <p className="plazaEstado">{plaza.estado}</p>
            </button>
          ))}
        </div>
        {/* Últimos partidos */}
        <div className="partidos">
          <h2>Últimos partidos</h2>
          <ul className="partidosLista">
            {partidos.map((partido, index) => (
              <li key={index} className={`partido ${partido.color}`}>
                <span>Vs {partido.equipo}</span>
                <span>{partido.resultado}</span>
              </li>
            ))}
          </ul>
          <button className="historyButton">Ver historial completo →</button>
        </div>
      </main>
    </div>
  );
};

export default App;
