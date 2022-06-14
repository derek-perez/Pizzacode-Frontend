import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { faEnvelope, faLock, faPhone, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Swal from "sweetalert2"

import { ChangeTheme } from "../../helpers/changeTheme"
import { useForm } from "../../hooks/useForm"
import pizzaApi from "../../api/pizzaApi"

import { UserContext } from "../../context/UserContext"



export const RegisterScreen = () => {

  const { setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const url = window.location.host;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  ChangeTheme({
    id: ['registerScreenContainer'], is: 'div'
  })
  ChangeTheme({
    id: [
      'nameRegisterInput',
      'emailRegisterInput',
      'passwordRegisterInput',
      'password2RegisterInput',
      'telephoneRegisterInput',
    ], is: 'input'
  });

  const { name, email, telephone, password, password2, onChange } = useForm({
    name: '',
    email: '',
    telephone: '',
    password: '',
    password2: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (name === '' || email === '' || telephone === '' || password === '' || password2 === '') {
      setLoading(false);
      return Swal.fire({
        title: 'Error',
        text: 'Todos los campos son obligatorios',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }

    if (password !== password2) {
      setLoading(false);
      return Swal.fire({
        title: 'Error',
        text: 'Las contraseñas no coinciden',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }

    await pizzaApi.post('/usuarios', {
      nombre: name,
      correo: email,
      telefono: telephone,
      password: password2
    })
      .then(res => {
        setLoading(false);

        setUser(res.data.usuario);
        
        localStorage.setItem('user', JSON.stringify(res.data.usuario.email));
        localStorage.setItem('token', res.data.token);

        Swal.fire({
          title: 'Bienvenido',
          text: 'Te has registrado correctamente',
          icon: 'success',
          confirmButtonText: 'Continuar'
        })
        .then(e => {
          e.isConfirmed || e.isDismissed && (
            navigate('/cuenta/perfil')
          )
        })

      })
      .catch(err => {
        setLoading(false);

        const errors = err.response.data.errors;

        errors.forEach((element: any) => {
          Swal.fire({
            title: 'Error',
            text: element.msg,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
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
    <div id='registerScreenContainer' style={styles.container}>

      <div style={styles.formContainer}>
        <h1 style={styles.titleForm}>Regístrate</h1>

        <div id='registerScreenContainer' style={styles.contentCard}>
          <form id='registerForm' onSubmit={handleSubmit} style={styles.form}>

            <div style={styles.formGroup}>
              <FontAwesomeIcon icon={faUser} />
              <input
                style={styles.formInput}
                id='nameRegisterInput'
                type="text"
                placeholder="Nombre"
                name='name'
                value={name}
                onChange={onChange}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                style={styles.formInput}
                id='emailRegisterInput'
                type="email"
                placeholder="Correo electrónico"
                name='email'
                value={email}
                onChange={onChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <FontAwesomeIcon icon={faPhone} />
              <input
                style={styles.formInput}
                id='telephoneRegisterInput'
                type="tel"
                placeholder="Teléfono"
                name='telephone'
                value={telephone}
                onChange={onChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <FontAwesomeIcon icon={faLock} />
              <input
                style={styles.formInput}
                id='passwordRegisterInput'
                type="password"
                placeholder="Contraseña"
                name='password'
                value={password}
                onChange={onChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <FontAwesomeIcon icon={faLock} />
              <input
                style={styles.formInput}
                id='password2RegisterInput'
                type="password"
                placeholder="Repite la contraseña"
                name='password2'
                value={password2}
                onChange={onChange}
                required
              />
            </div>

            <button className='btn btn-primary' type="submit">Registrarme</button>
          </form>

          <div id="linkRegister" style={styles.goToLogin}>
            <img src='https://chugus.github.io/Pizzacode-Frontend/assets/register-image.jpg' />
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
    width: '100%',
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