import {Link} from 'react-router-dom'
import Registro from './Registro'

function Login() {
  return (
    <div className="container-Inicio-sesion">
        
      <div className="container-login">
        <input type="checkbox" id="signup_toggle" />
        <form className="form">
        
          <div className="form_front">
          <img className='logo' src="src/assets/img/logo-pagina (2).png" alt="" />
            <div className="form_details">Inicio Sesion</div>
            <input placeholder="Nombre" className="input" type="text" />
            <input placeholder="Contraseña" className="input" type="text" />
            <Link to={"/Inicio"} className="btn">Ingresar</Link>
            <span className="switch">
             No tienes cuenta con nosotros?
              <label className="signup_tog" htmlFor="signup_toggle">
                Registarse
              </label>
            </span>
          </div>
          <Registro/>
        </form>
      </div>
    </div>
  )
}

export default Login