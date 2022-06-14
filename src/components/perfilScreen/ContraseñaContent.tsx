import { useContext, useState } from "react";

import { faEye, faEyeSlash, faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import pizzaApi from "../../api/pizzaApi";
import { ChangeTheme } from "../../helpers/changeTheme";
import { UserContext } from "../../context/UserContext";
import Swal from "sweetalert2";


export const ContraseñaContent = () => {

  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  ChangeTheme({
    id: ['contraseñaContentTitle'], is: 'title'
  });

  ChangeTheme({
    id: ['contraseña', 'contraseña2'], is: 'input'
  });


  const aparecer = (esteOjo = '', id = '', otroOjo = '') => {
    const input = document.getElementById(id)! as HTMLInputElement;
    input.type = 'text';

    document.getElementById(esteOjo)!.style.display = 'none';
    document.getElementById(otroOjo)!.style.display = 'block';
  }

  const desaparecer = (esteOjo = '', id = '', otroOjo = '') => {
    const input = document.getElementById(id)! as HTMLInputElement;
    input.type = 'password';

    document.getElementById(esteOjo)!.style.display = 'none';
    document.getElementById(otroOjo)!.style.display = 'block';
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const inputContraseña = document.getElementById('contraseña')! as HTMLInputElement;
    const inputContraseñaAMandar = document.getElementById('contraseña2')! as HTMLInputElement;
    const token = localStorage.getItem('token')!;

    if (inputContraseñaAMandar.value !== inputContraseña.value) {
      return Swal.fire({
        title: 'Error',
        text: 'Las contraseñas no coinciden',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    } else {
      await pizzaApi.put('/usuarios/' + user._id, {
        password: inputContraseñaAMandar.value
      }, { headers: { 'x-token': `${token}` } })
        .then(res => {
          setLoading(false);

          res.status === 200 && (
            Swal.fire({
              title: 'Contraseña actualizada',
              text: 'Se ha actualizado la contraseña correctamente',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
              .then(e => {
                if (e.isConfirmed) {
                  inputContraseña.value = '';
                  inputContraseñaAMandar.value = '';
                } 
                if (e.isDismissed) {
                  inputContraseña.value = '';
                  inputContraseñaAMandar.value = '';
                } 
              })
          )
        })
        .catch(err => {
          setLoading(false);
          console.log(err)
        });
    }


  }

  if (loading) {
    document.getElementById('loadingComponent')?.classList.remove('hidden');
  } else {
    document.getElementById('loadingComponent')?.classList.add('hidden');
  }


  return (
    <div style={styles.content}>
      <h2 id='contraseñaContentTitle' style={styles.title}>
        <FontAwesomeIcon
          icon={faLockOpen}
          style={{ marginRight: '10px' }}
        />
        Cambiar contraseña:
      </h2>
      <p>(Aquí puedes cambiar la contraseña de tu cuenta)</p>

      <form onSubmit={handleSubmit} style={styles.infoContent}>
        <div style={styles.cambioContraseñaItem}>
          <FontAwesomeIcon icon={faLock} />
          <input
            onKeyDown={(e) => {
              document.getElementById('ver')!.style.display = 'block';
            }}
            style={styles.input}
            type='password'
            id='contraseña'
            name='contraseña'
            placeholder="Nueva contraseña"
          />
          <FontAwesomeIcon
            style={styles.icon}
            id='ver'
            icon={faEye}
            onClick={() => aparecer('ver', 'contraseña', 'noVer')}
          />
          <FontAwesomeIcon
            style={styles.icon}
            id='noVer'
            icon={faEyeSlash}
            onClick={() => desaparecer('noVer', 'contraseña', 'ver')}
          />
        </div>

        <div style={styles.cambioContraseñaItem}>
          <FontAwesomeIcon icon={faLock} />
          <input
            onKeyDown={(e) => {
              document.getElementById('ver1')!.style.display = 'block';
            }}
            style={styles.input}
            type='password'
            id='contraseña2'
            name='contraseña2'
            placeholder="Repetir contraseña"
          />
          <FontAwesomeIcon
            style={styles.icon}
            id='ver1'
            icon={faEye}
            onClick={() => aparecer('ver1', 'contraseña2', 'noVer1')}
          />
          <FontAwesomeIcon
            style={styles.icon}
            id='noVer1'
            icon={faEyeSlash}
            onClick={() => desaparecer('noVer1', 'contraseña2', 'ver1')}
          />
        </div>

        <button className="btn btn-primary">Guardar cambios</button>
      </form>

    </div>
  )
}


const styles = {
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    marginBottom: '50px'
  },
  title: {
    color: 'rgb(145, 14, 14)',
    margin: '35px 0 10px 0',
    padding: '0 20px'
  },
  infoContent: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: '20px'
  },

  cambioContraseñaItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid rgb(145, 14, 14)',
    marginBottom: '20px',
    minWidth: '300px'
  },
  labelContraseña: {
    fontSize: '18px',
    color: 'rgb(145, 14, 14)'
  },
  input: {
    width: '100%',
    padding: '5px',
    outline: 'none',
    border: 'none',
    marginLeft: '10px'
  },
  icon: {
    display: 'none',
    cursor: 'pointer'
  }

}