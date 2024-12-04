// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';

const LoginForm = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const email = event.target.usuario.value;
    const password = event.target.password.value;

    try {
      console.log('Enviando solicitud de inicio de sesión...');
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password
      });

      console.log('Respuesta del servidor:', response.data);
      const data = response.data;

      if (!data.success) {
        setError(data.message);
      } else {
        setError("");
        alert("¡Inicio de sesión exitoso!");
        // Guarda el token en el almacenamiento local o en el estado de la aplicación
        localStorage.setItem('token', data.token);
      }
    } catch (error) {
      if (error.response) {
        // El servidor respondió con un código de estado fuera del rango 2xx
        console.error('Error en la solicitud:', error.response.data);
        setError(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        // La solicitud fue hecha pero no se recibió respuesta
        console.error('No se recibió respuesta del servidor:', error.request);
        setError('No se recibió respuesta del servidor.');
      } else {
        // Algo sucedió al configurar la solicitud
        console.error('Error al configurar la solicitud:', error.message);
        setError(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="contenedorLogin">
      <h2>Iniciar sesión</h2>
      <form id="forma" name="forma" method="post" onSubmit={handleSubmit}>
        <div className="elemento">
          <label htmlFor="usuario">Usuario</label>
          <input type="text" id="usuario" name="usuario" />
        </div>
        <div className="elemento">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="elemento">
          < a href='../../pages/home/home.html'>
            <input type="submit" value="Ingresar" />
          </a>
        </div>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default LoginForm;