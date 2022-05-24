import { Link } from "react-router-dom"

import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const RegisterScreen = () => {

  const putOutline = (div: string) => {
    if (div === 'name') {
      document.getElementById("nameDiv")!.style.border = '1px solid blue'
    } else if (div === 'email') {
      document.getElementById("emailDiv")!.style.border = '1px solid blue'
    } else if (div === 'password') {
      document.getElementById("passwordDiv")!.style.border = '1px solid blue'
    } else if (div === 'password2') {
      document.getElementById("password2Div")!.style.border = '1px solid blue'
    }
  }

  const url = window.location.host;


  return (
    <div style={styles.container}>

      <div style={styles.formContainer}>
        <h1 style={styles.titleForm}>Regístrate</h1>

        <div style={styles.contentCard}>
          <form style={styles.form}>

            <div id='nameDiv' style={styles.formGroup}>
              <FontAwesomeIcon onClick={() => putOutline('name')} icon={faUser} />
              <input onClick={() => putOutline('name')} style={styles.formInput} type="text" placeholder="Nombre" required />
            </div>

            <div id='emailDiv' style={styles.formGroup}>
              <FontAwesomeIcon onClick={() => putOutline('email')} icon={faEnvelope} />
              <input onClick={() => putOutline('email')} style={styles.formInput} type="email" placeholder="Correo electrónico" required />
            </div>

            <div id='passwordDiv' style={styles.formGroup}>
              <FontAwesomeIcon onClick={() => putOutline('password')} icon={faLock} />
              <input onClick={() => putOutline('password')} style={styles.formInput} type="password" placeholder="Contraseña" required />
            </div>
            <div id='password2Div' style={styles.formGroup}>
              <FontAwesomeIcon onClick={() => putOutline('password2')} icon={faLock} />
              <input onClick={() => putOutline('password2')} style={styles.formInput} type="password" placeholder="Repite la contraseña" required />
            </div>

            <button className='btn btn-primary' type="submit">Registrarme</button>
          </form>

          <div style={styles.goToLogin}>
            <img src={url === 'chugus.github.io' ? './Pizzacode-Frontend/assets/register-image.jpg' : '../../assets/register-image.jpg'} />
            <p>¿Ya tienes una cuenta? <Link to="/join/login">Inicia sesión</Link></p>
          </div>
        </div>

      </div>
    </div>
  )
}


const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px',
    margin: '0px',
    minHeight: '100vh',
    backgroundColor: 'white',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center' as 'center',
    justifyContent: 'center',
    padding: '20px',
    borderRadius: '5px',
  },
  titleForm: {
    fontWeight: 'bold',
    marginBottom: '50px',
  },

  contentCard: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row' as 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: '25px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    width: 'auto',
  },
  formGroup: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '25px',
    border: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
    padding: '10px',
    borderRadius: '5px',
  },
  formInput: {
    minWidth: '275px',
    width: '100%',
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    marginLeft: '10px',
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: '18px'
  },

  goToLogin: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '75px'
  }

}