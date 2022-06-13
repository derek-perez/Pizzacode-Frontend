import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { faCreditCard, faLock, faMapLocationDot, faReceipt, faUser } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../context/UserContext';

import {
  PerfilContent,
  LittleMenuItem,
  ContraseñaContent,
  DireccionesContent,
  TarjetasContent,
  PagosContent,
} from '../../components/perfilScreen';



export const CuentaScreen = () => {

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const { item } = useParams();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token === null || '') {
      localStorage.removeItem('user');
      localStorage.removeItem('token');

      navigate('/join/login');
    }
  }, [item]);

  const handleClick = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    navigate('/join/login');
  }


  return (
    <div id='cuentaDiv' style={styles.container}>
      <div id='littleMenuItem' style={styles.littleMenu}>
        <LittleMenuItem active={(item === 'perfil') ? true : false} name='Perfil' icon={faUser} />
        <LittleMenuItem active={(item === 'contraseña') ? true : false} name='Contraseña' icon={faLock} />
        <LittleMenuItem active={(item === 'direcciones') ? true : false} name='Direcciones' icon={faMapLocationDot} />
        <LittleMenuItem active={(item === 'tarjetas') ? true : false} name='Tarjetas' icon={faCreditCard} />
        <LittleMenuItem active={(item === 'compras') ? true : false} name='Compras' icon={faReceipt} />

        <button
          onClick={handleClick}
          className='btn btn-outline-danger'
          style={{ marginTop: '25px' }}
        >
          Cerrar sesión
        </button>
      </div>

      {
        (item === 'perfil') ? <PerfilContent /> :
          (item === 'contraseña') ? <ContraseñaContent /> :
            (item === 'direcciones') ? <DireccionesContent /> :
              (item === 'tarjetas') ? <TarjetasContent /> :
                (item === 'compras') ? <PagosContent /> :
                  <PerfilContent />
      }

    </div>
  )
}


const styles = {
  container: {
    display: 'flex',
    width: '100%',
    minHeight: '525px',
    borderTop: '1px solid rgb(145, 14, 14)'
  },

  littleMenu: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    width: '30%',
    borderRight: '1px solid rgb(145, 14, 14)',
    minWidth: '250px',
  }
}