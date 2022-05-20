import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export const LoginScreen = () => {

  const putOutline = (email: boolean) => {

    if (email) {
      const emailDiv = document.getElementById('emailDiv');
      emailDiv!.style.border = '1px solid red';
    } else {
      const passwordDiv = document.getElementById('passwordDiv');
      passwordDiv!.style.border = '1px solid red';
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.titleForm}>Inicia sesión</h1>

      <div style={styles.formContainer}>

        <div style={styles.contentCard}>
          <form style={styles.form}>
            <div id='emailDiv' style={styles.formGroup}>
              <FontAwesomeIcon onClick={() => putOutline(true)} icon={faEnvelope} />
              <input onClick={() => putOutline(true)} style={styles.formInput} type="email" placeholder="Correo electrónico" required />
            </div>
            <div id='passwordDiv' style={styles.formGroup}>
              <FontAwesomeIcon onClick={() => putOutline(false)} icon={faLock} />
              <input onClick={() => putOutline(false)} style={styles.formInput} type="password" placeholder="Contraseña" required />
            </div>

            <button className='btn btn-primary' type="submit">Iniciar sesión</button>
          </form>

          <div style={styles.goToLogin}>
            <img src='../../assets/ingresar-image.jpg' />
            <p>¿No tienes una cuenta? <Link to="/join/register">Regístrate</Link></p>
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
    fontWeight: 'bold'
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