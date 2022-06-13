import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons"

import Swal from 'sweetalert2'

import { UserContext } from "../../context/UserContext"

import pizzaApi from "../../api/pizzaApi"
import { ChangeTheme } from "../../helpers/changeTheme"
import { useForm } from "../../hooks/useForm"


export const LoginScreen = () => {

  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate();

  const url = window.location.host;

  ChangeTheme({
    id: ['loginScreenContainer'], is: 'div'
  })
  ChangeTheme({
    id: ['titleLogin'], is: 'title'
  })
  ChangeTheme({
    id: [
      'emailLoginInput',
      'passwordLoginInput'
    ], is: 'input'
  });

  const { email, password, onChange } = useForm({
    email: '',
    password: ''
  });

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setLoading(true);

    const regExp = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

    if (email === '' || password === '') {
      setLoading(false);

      return Swal.fire({
        title: 'Error',
        text: 'Por favor, rellene todos los campos',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }

    if (email !== '') {
      if (!regExp.test(email!)) {
        setLoading(false);

        return Swal.fire({
          title: 'Error',
          text: 'Por favor, introduzca un correo válido',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    }


    await pizzaApi.post('/auth/login', {
      correo: email,
      password: password
    })
      .then(res => {
        setLoading(false);

        setUser(res.data.usuario);
        localStorage.setItem('token', res.data.token);

        Swal.fire({
          title: 'Bienvenido',
          text: 'Has iniciado sesión correctamente',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
          .then(e => {
            e.isConfirmed && (
              navigate('/cuenta/perfil')
            )
            e.isDismissed && (
              navigate('/cuenta/perfil')
            )
          })

      }).catch(err => {
        setLoading(false);

        const msg = err.response.data.msg;
        Swal.fire({
          title: 'Error',
          text: msg,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      })

  }

  useEffect(() => {
    if (loading) {
      document.getElementById('loadingComponent')?.classList.remove('hidden')
    } else {
      document.getElementById('loadingComponent')?.classList.add('hidden')
    }
  }, [loading])



  return (
    <div id='loginScreenContainer' style={styles.container}>
      <h1 id='titleLogin' style={styles.titleForm}>Inicia sesión</h1>

      <div style={styles.formContainer}>

        <div id="loginScreenContent" style={styles.contentCard}>
          <form id="loginForm" style={styles.form}>
            <div id='emailDiv' style={styles.formGroup}>
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                style={styles.formInput}
                id='emailLoginInput'
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Correo electrónico"
                required
              />
            </div>
            <div id='passwordDiv' style={styles.formGroup}>
              <FontAwesomeIcon icon={faLock} />
              <input
                style={styles.formInput}
                id='passwordLoginInput'
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Contraseña"
                required
              />
            </div>

            <button
              className='btn btn-primary'
              type="submit"
              onClick={handleLogin}
            >
              Iniciar sesión
            </button>
          </form>

          <div id='linkLogin' style={styles.goToLogin}>
            <img src='https://chugus.github.io/Pizzacode-Frontend/assets/ingresar-image.jpg' />
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
    minHeight: '100vh'
  },
  formContainer: {
    width: '100%',
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