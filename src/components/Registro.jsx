import { useState } from "react";

function Registro({ onRegistro }) {
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmarPassword, setConfirmarPassword] = useState('');
    const [error, setError] = useState('');
  
    const validarRegistro = (e) => {
      e.preventDefault();
  
      const nombreRegex = /^[a-zA-Z\s]+$/;
      const passwordRegex = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{6,}$/;
      const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
  
  
      if (!nombreRegex.test(nombre)) {
        setError('El nombre solo debe contener letras y espacios');
        return;
      }
      if (!emailRegex.test(email)) {
        setError('El correo no es correcto');
        return;
      }
  
      if (!passwordRegex.test(password)) {
        setError('La contraseña debe tener al menos 6 caracteres, una letra y un número');
        return;
      }
  
      if (password !== confirmarPassword) {
        setError('Las contraseñas no coinciden');
        return;
      }
  
      setError('');
  
      onRegistro(nombre, password,email);
  
      Swal.fire({
          title: "OK",
          text: "Usuario Registrado con exito",
          icon: "success",
        });
    };
  

  return (
    <div className="form_back">
          <img className='logo' src="src/assets/img/logo-pagina (2).png" alt="" />
            <div className="form_details">Registro</div>
            <input placeholder="Nombre" className="input" type="text" value={nombre}onChange={(e) => setNombre(e.target.value)} />
            <input placeholder="Correo" className="input" type="email" value={email}onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="Contraseña" className="input" type="password" value={password}onChange={(e) => setPassword(e.target.value)} />
            <input placeholder="Confirmar Contraseña"className="input"type="text" value={confirmarPassword} onChange={(e) => setConfirmarPassword(e.target.value)}/>
            {error && <p className="error">{error}</p>}
            <button type='submit' className="btn" onClick={validarRegistro}>Registrarse</button>
            <span className="switch">
              Ya tienes cuenta?
              <label className="signup_tog" htmlFor="signup_toggle">
                Iniciar sesion
              </label>
            </span>
          </div>
  )
}

export default Registro