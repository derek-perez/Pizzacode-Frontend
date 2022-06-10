import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { faCreditCard, faLock, faMapLocationDot, faReceipt, faUser } from '@fortawesome/free-solid-svg-icons'

import {
  PerfilContent,
  LittleMenuItem,
  ContraseñaContent,
  DireccionesContent,
  TarjetasContent,
  PagosContent,
} from '../../components/perfilScreen';



export const CuentaScreen = () => {

  const [auth, setAuth] = useState(false);
  const { item } = useParams();


  return (
    <div id='cuentaDiv' style={styles.container}>
      <div id='littleMenuItem' style={styles.littleMenu}>
        <LittleMenuItem active={(item === 'perfil') ? true : false} name='Perfil' icon={faUser} />
        <LittleMenuItem active={(item === 'contraseña') ? true : false} name='Contraseña' icon={faLock} />
        <LittleMenuItem active={(item === 'direcciones') ? true : false} name='Direcciones' icon={faMapLocationDot} />
        <LittleMenuItem active={(item === 'tarjetas') ? true : false} name='Tarjetas' icon={faCreditCard} />
        <LittleMenuItem active={(item === 'pagos') ? true : false} name='Pagos' icon={faReceipt} />
      </div>

      {
        (item === 'perfil') ? <PerfilContent /> :
          (item === 'contraseña') ? <ContraseñaContent /> :
            (item === 'direcciones') ? <DireccionesContent /> :
              (item === 'tarjetas') ? <TarjetasContent /> :
                (item === 'pagos') ? <PagosContent /> :
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