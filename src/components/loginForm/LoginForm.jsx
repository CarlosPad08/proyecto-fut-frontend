import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const email = event.target.usuario.value;
    const password = event.target.password.value;

    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.message);
      } else {
        setError("");
        alert("¡Inicio de sesión exitoso!");
        // Guarda el token en el almacenamiento local o en el estado de la aplicación
        localStorage.setItem('token', data.token);
      }
    } catch (err) {
      console.error('Error en la solicitud:', err);
      setError('Error en la solicitud');
    }
  };

  return (
    <div className="contenedor">
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
          <input type="submit" value="Ingresar" />
        </div>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default LoginForm;