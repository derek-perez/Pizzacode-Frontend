

import 'animate.css';
import { Dispatch, SetStateAction, useState } from 'react';
import { PropsUseState, useTheme } from '../hooks/useTheme';


interface Props {
    opened: boolean;
    setOpened: (o: boolean) => void;
}

export const ModalTheme = ({ opened, setOpened }: Props) => {

    const { setProps }: any = useTheme();

    const handleCheckbox = (e: any, justNow?: boolean) => {
        if (justNow) {
            setProps({ e, justNow });
        } else {
            setProps({ e, justNow: true, checkbox: true });
        }
    }


    return (
        <div
            id='modalTheme'
            className='animate__animated animate__fadeIn'
            onMouseEnter={(e) => handleCheckbox(e, true)}
            style={{
                ...styles.container,
                ...(opened) ? { display: 'flex' } : { display: 'none' }
            }}
        >
            <div style={styles.modalContent}>

                <div style={styles.content}>
                    <div style={styles.header}>
                        <h2 style={{ margin: 0 }}>Establece el tema de la aplicacion</h2>
                    </div>

                    <p style={styles.pInfo}>(Por defecto, está establecido el tema de su dispositivo)</p>

                    <div style={styles.body}>
                        <label style={styles.groupSelectTheme}>
                            <input onChange={handleCheckbox} type='radio' id='themePredetermined' />
                            <span style={styles.textCheckbox}>Tema predeterminado</span>
                        </label>
                        <label style={styles.groupSelectTheme}>
                            <input onChange={handleCheckbox} type='radio' id='themeClear' />
                            <span style={styles.textCheckbox}>Tema claro</span>
                        </label>
                        <label style={styles.groupSelectTheme}>
                            <input onChange={handleCheckbox} type='radio' id='themeDark' />
                            <span style={styles.textCheckbox}>Tema oscuro</span>
                        </label>
                    </div>
                </div>

                <button
                    style={{ marginBottom: '20px' }}
                    className='btn btn-outline-primary'
                    onClick={() => {
                        const modal = document.getElementById('modalTheme') as HTMLDivElement;
                        modal.classList.remove('animate__fadeIn');
                        modal.classList.add('animate__fadeOut');

                        setTimeout(() => {
                            setOpened(false);
                        }, 500);
                    }}
                >
                    Cerrar ventana
                </button>

            </div>
        </div>
    )
}

const styles = {
    container: {
        position: 'fixed' as 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '10000',
    },
    modalContent: {
        backgroundColor: 'white',
        width: '500px',
        maxWidth: '90%',
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 0 10px 2px rgb(0 0 0 / 50%)',
        color: 'black',
        position: 'absolute' as 'absolute',
    },

    content: {
        width: '100%'
    },
    header: {
        backgroundColor: 'rgba(145, 14, 14, .9)',
        width: '100%',
        color: 'white',
        padding: '20px',
        textAlign: 'center' as 'center',
    },
    pInfo: {
        fontSize: '18px',
        textAlign: 'center' as 'center',
        marginTop: '10px',
        marginBottom: '0',
        padding: '0 10px'
    },

    body: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'space-between',
        padding: '20px'
    },

    groupSelectTheme: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        alignItems: 'center',
        paddingLeft: '20px',
        marginBottom: '15px',
        cursor: 'pointer'
    },
    textCheckbox: {
        marginLeft: '10px',
        fontSize: '20px'
    },
}

function justNow(e: any, justNow: any) {
    throw new Error('Function not implemented.');
}
