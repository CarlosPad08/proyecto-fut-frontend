// RegisterForm.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import './RegisterForm.css';

const RegisterForm = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.usuario.value;
    const password = event.target.password.value;

    try {
      console.log('Enviando solicitud de registro...');
      const response = await axios.post('http://localhost:3000/api/register', {
        email,
        password
      });

      console.log('Respuesta del servidor:', response.data);
      const data = response.data;

      if (!data.success) {
        setError(data.message);
      } else {
        setError("");
        alert("¡Registro exitoso!");
        // Guarda el token en el almacenamiento local o en el estado de la aplicación
        localStorage.setItem('token', data.token);
      }
    } catch (error) {
      if (error.response) {
        console.error('Error en la solicitud:', error.response.data);
        setError(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        console.error('No se recibió respuesta del servidor:', error.request);
        setError('No se recibió respuesta del servidor.');
      } else {
        console.error('Error al configurar la solicitud:', error.message);
        setError(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="contenedor">
      <h2>Registrar</h2>
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
          <input type="submit" value="Registrar" />
        </div>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default RegisterForm;
