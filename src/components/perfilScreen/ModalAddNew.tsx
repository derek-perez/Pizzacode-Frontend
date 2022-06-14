import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { faCheck, faClose, faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Swal from "sweetalert2";

import { UserContext } from "../../context/UserContext";
import { ChangeTheme } from "../../helpers/changeTheme"
import { useForm } from "../../hooks/useForm";

import { Card, Direccion } from "../../interfaces/interfaces";
import pizzaApi from "../../api/pizzaApi";


interface Props {
    whatIS: string,
    opened: boolean,

    setOpened: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalAddNew = ({ whatIS, opened, setOpened }: Props) => {

    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    // Tarjeta
    const [tarjeta, setTarjeta] = useState({ numero: '', cvv: '', fechaExpiracion: '', nombre: `${user.nombre}` } as Card);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (tarjeta.nombre.length >= 4 && tarjeta.numero.length === 16 && tarjeta.cvv.length === 3 && tarjeta.fechaExpiracion.length >= 4) {
            document.getElementById('addBtn')?.classList.remove('hidden');
        } else {
            document.getElementById('addBtn')?.classList.add('hidden');
        }
    }, [tarjeta]);

    const { numero, fechaExpiracion, nombre, cvv, onChange } = useForm({
        numero: '',
        fechaExpiracion: '',
        nombre: `${user.nombre}`,
        cvv: ''
    });
    // Fin tarjeta

    // Direccion
    const [direccion, setDireccion] = useState({ calle: '', numeroCalle: '', colonia: '', ciudad: '', estado: '', codigoPostal: '' } as Direccion);

    useEffect(() => {
        if (direccion.calle.length && direccion.numeroCalle.length && direccion.colonia.length && direccion.ciudad.length && direccion.estado.length > 0 && direccion.codigoPostal.length === 5) {
            document.getElementById('addBtnDrt')?.classList.remove('hidden');
        } else {
            document.getElementById('addBtnDrt')?.classList.add('hidden');
        }
    }, [direccion]);

    const { calle, numeroCalle, colonia, ciudad, estado, codigoPostal, onChange: onChange2 } = useForm({
        calle: '',
        numeroCalle: '',
        colonia: '',
        ciudad: '',
        estado: '',
        codigoPostal: ''
    });
    // Fin direccion

    if (opened) {
        document.querySelector('body')!.style.overflow = 'hidden';
        document.getElementById('navBar')!.style.zIndex = '0';
    }

    let numberCard1 = tarjeta.numero.substring(0, 4);
    let numberCard2 = tarjeta.numero.substring(4, 8);
    let numberCard3 = tarjeta.numero.substring(8, 12);
    let numberCard4 = tarjeta.numero.substring(12, 16);

    let numberCard = `${numberCard1} ${numberCard2} ${numberCard3} ${numberCard4}`;
    let fechaExpiracionFormat = tarjeta.fechaExpiracion?.includes('/')
        ? tarjeta.fechaExpiracion
        : tarjeta.fechaExpiracion.substring(0, 2) + '/' + tarjeta.fechaExpiracion.substring(2, 4)

    ChangeTheme({
        id: ['modalAddNewContainer'], is: 'div'
    })
    ChangeTheme({
        id: [
            'titleModalAdd',
            'titleDirectionAdd',
            'textItemCalleAdd',
            'textItemNumeroAdd',
            'textItemColoniaAdd',
            'textItemCiudadAdd',
            'textItemEstadoAdd',
            'textItemCPAdd'
        ], is: 'title'
    });
    ChangeTheme({
        id: [
            'numeroInput',
            'vencimientoInput',
            'nombreInput',
            'cvvInput',
            'calleInput',
            'numeroInput',
            'coloniaInput',
            'ciudadInput',
            'estadoInput',
            'cpInput'
        ], is: 'input'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^[0-9]*$/;
        const regexText = /[A-Za-z\s]/g;

        if (whatIS === 'tarjeta') {
            if (e.target.name === 'numero') {
                if (!regex.test(e.target.value)) {
                    return;
                } else {
                    onChange(e);
                    setTarjeta({ ...tarjeta, [e.target.name]: e.target.value });
                }

            } else if (e.target.name === 'fechaExpiracion') {
                if (regexText.test(e.target.value)) {
                    return;
                } else {
                    onChange(e);
                    setTarjeta({ ...tarjeta, [e.target.name]: e.target.value });
                }

            } else if (e.target.name === 'cvv') {
                if (!regex.test(e.target.value)) {
                    return;
                } else {
                    onChange(e);
                    setTarjeta({ ...tarjeta, [e.target.name]: e.target.value });
                }

            } else {
                onChange(e);
                setTarjeta({ ...tarjeta, [e.target.name]: e.target.value });
            }

        } else if (whatIS === 'dirección') {
            if (e.target.name === 'numeroCalle') {
                if (!regex.test(e.target.value)) {
                    return;
                } else {
                    onChange2(e);
                    setDireccion({ ...direccion, [e.target.name]: e.target.value });
                }

            } else if (e.target.name === 'codigoPostal') {
                if (!regex.test(e.target.value)) {
                    return;
                } else {
                    onChange2(e);
                    setDireccion({ ...direccion, [e.target.name]: e.target.value });
                }

            } else {
                onChange2(e);
                setDireccion({ ...direccion, [e.target.name]: e.target.value });
            }
        }

    };

    const handleClick = async () => {
        if (whatIS === 'tarjeta') {
            if (tarjeta.nombre.length >= 4 && tarjeta.numero.length === 16 && tarjeta.fechaExpiracion.length === 4 && tarjeta.cvv.length === 3) {
                setLoading(true);
                const token = localStorage.getItem('token');

                await pizzaApi.post('/tarjetas', {
                    numero: tarjeta.numero,
                    cvv: tarjeta.cvv,
                    fechaExpiracion: tarjeta.fechaExpiracion,
                    nombre: tarjeta.nombre,
                    usuario: user._id
                }, { headers: { 'x-token': `${token?.split('"')[1]}` } })
                    .then(res => {
                        setLoading(false);
                        document.getElementById('loadingComponent')?.classList.add('hidden');

                        if (res.status === 200) {
                            setOpened(false);
                            document.getElementById('modalAddNew')!.style.display = 'none';
                            document.querySelector('body')!.style.overflow = 'auto';
                            document.getElementById('navBar')!.style.zIndex = '999';

                            Swal.fire({
                                title: '¡Listo!',
                                text: 'Se ha agregado la tarjeta',
                                icon: 'success',
                                confirmButtonText: 'Ok'
                            })
                                .then(e => {
                                    if (e.isConfirmed) {
                                        navigate('/cuenta/perfil');
                                        window.location.reload();
                                    }
                                    if (e.isDismissed) {
                                        navigate('/cuenta/perfil');
                                        window.location.reload();
                                    }
                                })
                        }
                    })
                    .catch(err => {
                        setLoading(false);
                        console.log(err);
                    });
            }
        } else if (whatIS === 'dirección') {
            if (direccion.calle.length > 1 && direccion.numeroCalle.length > 1 && direccion.colonia.length > 1 && direccion.ciudad.length > 1 && direccion.estado.length > 1 && direccion.codigoPostal.length === 5) {
                setLoading(true);
                const token = localStorage.getItem('token');

                await pizzaApi.post('/direcciones', {
                    calle: direccion.calle,
                    numero: direccion.numeroCalle,
                    colonia: direccion.colonia,
                    ciudad: direccion.ciudad,
                    estado: direccion.estado,
                    codigoPostal: direccion.codigoPostal,
                    usuario: user._id
                }, { headers: { 'x-token': `${token?.split('"')[1]}` } })
                    .then(res => {
                        setLoading(false);
                        document.getElementById('loadingComponent')?.classList.add('hidden');

                        if (res.status === 200) {
                            setOpened(false);
                            document.getElementById('modalAddNew')!.style.display = 'none';
                            document.querySelector('body')!.style.overflow = 'auto';
                            document.getElementById('navBar')!.style.zIndex = '999';

                            Swal.fire({
                                title: '¡Listo!',
                                text: 'Se ha agregado la dirección',
                                icon: 'success',
                                confirmButtonText: 'Ok'
                            })
                                .then(e => {
                                    if (e.isConfirmed) {
                                        navigate('/cuenta/perfil');
                                        window.location.reload();
                                    }
                                    if (e.isDismissed) {
                                        navigate('/cuenta/perfil');
                                        window.location.reload();
                                    }
                                })
                        }
                    })
                    .catch(err => {
                        setLoading(false);
                        console.log(err);
                    });
            }
        }
    }

    useEffect(() => {
        console.log(loading)
        if (loading) {
            document.getElementById('loadingComponent')?.classList.remove('hidden');
        } else {
            document.getElementById('loadingComponent')?.classList.add('hidden');
        }
    }, [loading])




    return (
        <div
            id='modalAddNew'
            style={{
                ...styles.container,
                display: opened ? 'flex' : 'none'
            }}>
            <div id="modalAddNewContainer" style={styles.content}>
                <h3 id="titleModalAdd">Agregar {whatIS}</h3>
                <FontAwesomeIcon
                    style={styles.icon}
                    icon={faClose}
                    onClick={() => {
                        setOpened(false);
                        document.getElementById('modalAddNew')!.style.display = 'none';
                        document.querySelector('body')!.style.overflow = 'auto';
                        document.getElementById('navBar')!.style.zIndex = '999';
                    }}
                />

                {
                    whatIS === 'tarjeta'
                        ? <div title="addTarjetaContainer">
                            <div
                                id="tarjetaContainer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                }}
                            >
                                <div className="cardContent" style={styles.card}>
                                    <div style={styles.topCard}>
                                        <p style={styles.titleCard}>Tarjeta de crédito</p>
                                    </div>

                                    <img
                                        src='https://chugus.github.io/Pizzacode-Frontend/assets/chip-card.png'
                                        style={styles.chipImg}
                                    />

                                    <p
                                        className="numberCard"
                                        id="numeroDesdeInput"
                                        style={styles.cardNumber}
                                    >
                                        {
                                            tarjeta.numero.length > 0
                                                ? numberCard
                                                : '**** **** **** ****'
                                        }
                                    </p>
                                    <div style={styles.sectionCardNumbers}>
                                        <span id="cvvDesdeInput" style={{ margin: '5px 0' }}>
                                            {
                                                tarjeta.cvv !== ''
                                                    ? `${tarjeta.cvv}`
                                                    : '000'
                                            }
                                        </span>
                                        <span id="vencimientoDesdeInput" style={{ margin: '5px 0' }}>
                                            {
                                                tarjeta.fechaExpiracion !== ''
                                                    ? fechaExpiracionFormat
                                                    : 'MM/AA'
                                            }
                                        </span>
                                    </div>
                                    <p id="nombreDesdeInput" style={{ marginBottom: '0' }}>
                                        {
                                            tarjeta.nombre !== ''
                                                ? `${tarjeta.nombre}`
                                                : '---- ---- ---- ----'
                                        }
                                    </p>
                                </div>
                                <button onClick={handleClick} id="addBtn" className="hidden btn btn-success">
                                    <FontAwesomeIcon icon={faCheck} /> &nbsp;
                                    Agregar
                                </button>
                            </div>

                            {/* Editar tarjeta */}
                            <p style={styles.editCardP}>
                                Editar tarjeta
                            </p>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >

                                <div style={styles.divEditCard}>
                                    <label htmlFor="numero">Número de tarjeta:</label>
                                    <input
                                        style={styles.input}
                                        id='numeroInput'
                                        type="tel"
                                        placeholder="**** **** **** ****"
                                        maxLength={16}
                                        name="numero"
                                        onChange={handleChange}
                                        value={numero}
                                    />
                                </div>
                                <div style={styles.divEditCard}>
                                    <label htmlFor="numero">Vencimiento:</label>
                                    <input
                                        style={styles.input}
                                        id='vencimientoInput'
                                        type="text"
                                        placeholder="MM/AA"
                                        maxLength={fechaExpiracion?.includes('/') ? 5 : 4}
                                        name="fechaExpiracion"
                                        onChange={handleChange}
                                        value={fechaExpiracion}
                                    />
                                </div>
                                <div style={styles.divEditCard}>
                                    <label htmlFor="numero">Nombre del titular:</label>
                                    <input
                                        style={styles.input}
                                        id='nombreInput'
                                        type="text"
                                        placeholder="---- ---- ---- ----"
                                        minLength={16}
                                        name="nombre"
                                        onChange={handleChange}
                                        value={nombre}
                                    />
                                </div>
                                <div style={styles.divEditCard}>
                                    <label htmlFor="numero">CVV:</label>
                                    <input
                                        style={styles.input}
                                        id='cvvInput'
                                        type="text"
                                        placeholder="000"
                                        maxLength={3}
                                        name="cvv"
                                        onChange={handleChange}
                                        value={cvv}
                                    />
                                </div>
                            </div>
                        </div>
                        : <div title="addDireccionContainer">
                            <div
                                id="direccionContainer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                }}
                            >
                                <div className='directionCardAdd' style={styles.directionContainer}>
                                    <span id="titleDirectionAdd" style={styles.titleDirectionContainer}>Dirección: <FontAwesomeIcon icon={faHome} /></span>
                                    <div style={styles.directionText}>
                                        <span id="textItemCalleAdd" style={styles.strong}>Calle:</span> &nbsp;
                                        <span style={styles.normal}>
                                            {
                                                direccion.calle.length > 0
                                                    ? calle
                                                    : '---- ---- ---- ----'
                                            }
                                        </span>
                                    </div>
                                    <div style={styles.directionText}>
                                        <span id="textItemNumeroAdd" style={styles.strong}>Número:</span> &nbsp;
                                        <span style={styles.normal}>
                                            {
                                                direccion.numeroCalle.length > 0
                                                    ? numeroCalle
                                                    : '****'
                                            }
                                        </span>
                                    </div>
                                    <div style={styles.directionText}>
                                        <span id="textItemColoniaAdd" style={styles.strong}>Colonia:</span> &nbsp;
                                        <span style={styles.normal}>
                                            {
                                                direccion.colonia.length > 0
                                                    ? colonia
                                                    : '---- ----'
                                            }
                                        </span>
                                    </div>
                                    <div style={styles.directionText}>
                                        <span id="textItemCiudadAdd" style={styles.strong}>Ciudad:</span> &nbsp;
                                        <span style={styles.normal}>
                                            {
                                                direccion.ciudad.length > 0
                                                    ? ciudad
                                                    : '---- ----'
                                            }
                                        </span>
                                    </div>
                                    <div style={styles.directionText}>
                                        <span id="textItemEstadoAdd" style={styles.strong}>Estado:</span> &nbsp;
                                        <span style={styles.normal}>
                                            {
                                                direccion.estado.length > 0
                                                    ? estado
                                                    : '---- ----'
                                            }
                                        </span>
                                    </div>
                                    <div style={styles.directionText}>
                                        <span id="textItemCPAdd" style={styles.strong}>Código postal:</span> &nbsp;
                                        <span style={styles.normal}>
                                            {
                                                direccion.codigoPostal.length > 0
                                                    ? codigoPostal
                                                    : '******'
                                            }
                                        </span>
                                    </div>
                                </div>
                                <button onClick={handleClick} id="addBtnDrt" className="hidden btn btn-success">
                                    <FontAwesomeIcon icon={faCheck} /> &nbsp;
                                    Agregar
                                </button>
                            </div>

                            {/* Editar tarjeta */}
                            <p style={styles.editCardP}>
                                Editar tarjeta
                            </p>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-around',
                                }}
                            >

                                <div style={styles.divEditCard}>
                                    <label htmlFor="calle">Calle:</label>
                                    <input
                                        style={styles.input}
                                        id='calleInput'
                                        type="text"
                                        placeholder="---- ---- ---- ----"
                                        name="calle"
                                        onChange={handleChange}
                                        value={calle}
                                    />
                                </div>
                                <div style={styles.divEditCard}>
                                    <label htmlFor="numeroCalle">Número:</label>
                                    <input
                                        style={styles.input}
                                        id='numeroInput'
                                        type="text"
                                        placeholder="****"
                                        name="numeroCalle"
                                        onChange={handleChange}
                                        value={numeroCalle}
                                    />
                                </div>
                                <div style={styles.divEditCard}>
                                    <label htmlFor="colonia">Colonia:</label>
                                    <input
                                        style={styles.input}
                                        id='coloniaInput'
                                        type="text"
                                        placeholder="---- ---- ---- ----"
                                        name="colonia"
                                        onChange={handleChange}
                                        value={colonia}
                                    />
                                </div>
                                <div style={styles.divEditCard}>
                                    <label htmlFor="ciudad">Ciudad:</label>
                                    <input
                                        style={styles.input}
                                        id='ciudadInput'
                                        type="text"
                                        placeholder="----- -----"
                                        name="ciudad"
                                        onChange={handleChange}
                                        value={ciudad}
                                    />
                                </div>
                                <div style={styles.divEditCard}>
                                    <label htmlFor="estado">Estado:</label>
                                    <input
                                        style={styles.input}
                                        id='estadoInput'
                                        type="text"
                                        placeholder="-------"
                                        name="estado"
                                        onChange={handleChange}
                                        value={estado}
                                    />
                                </div>
                                <div style={styles.divEditCard}>
                                    <label htmlFor="codigoPostal">Código postal:</label>
                                    <input
                                        style={styles.input}
                                        id='cpInput'
                                        type="text"
                                        maxLength={5}
                                        placeholder="*****"
                                        name="codigoPostal"
                                        onChange={handleChange}
                                        value={codigoPostal}
                                    />
                                </div>
                            </div>

                        </div>

                }

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
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: '20px 0',
        overflowY: 'auto' as 'auto',
        zIndex: 99999
    },
    content: {
        position: 'relative' as 'relative',
        height: '100%',
        maxWidth: '90%',
        display: 'flex',
        flexDirection: 'column' as 'column',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        border: '3px solid rgb(145, 14, 14)',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.7)',
        overflowY: 'auto' as 'auto'
    },
    icon: {
        position: 'absolute' as 'absolute',
        top: '15px',
        right: '15px',
        cursor: 'pointer',
        fontSize: '25px',
        color: 'inherit'
    },

    // Tarjeta
    card: {
        width: '425px',
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'space-between' as 'space-between',
        alignSelf: 'center',
        backgroundColor: 'rgba(145,14,14,0.9)',
        border: 'none',
        borderRadius: '5px',
        padding: '20px',
        margin: '10px',
        color: 'white',
        fontSize: '18px',
        boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.5)'
    },
    titleCard: {
        fontSize: '20px',
        fontWeight: 'bold' as 'bold',
    },
    topCard: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-between' as 'space-between',
        alignItems: 'center' as 'center'
    },

    chipImg: {
        width: '65px',
        marginTop: '20px'
    },
    cardNumber: {
        width: '100%',
        letterSpacing: '2px',
        fontSize: '23px',
        textAlign: 'justify' as 'justify',
        marginBottom: '0'
    },
    sectionCardNumbers: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-around' as 'space-around',
        alignItems: 'left' as 'left',
        fontSize: '17px'
    },

    // Editar tarjeta
    editCardP: {
        fontSize: '20px',
        fontWeight: 'bold' as 'bold',
        margin: '20px 0',
        borderTop: '2px solid rgb(145, 14, 14)',
        paddingTop: '10px'
    },
    divEditCard: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignSelf: 'flex-start',
        width: '300px',
        margin: '0 10px 15px 10px'
    },
    input: {
        width: '100%',
        border: '1px solid rgb(145, 14, 14)',
        padding: '2px 5px'
    },


    // Direccion
    directionContainer: {
        width: '47%',
        minWidth: '390px',
        margin: '15px 10px',
        border: '2px solid rgb(145, 14, 14)',
        borderRadius: '5px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '3px 3px 7px rgba(0, 0, 0, 0.3)'
    },
    titleDirectionContainer: {
        borderBottom: '1px solid rgb(145, 14, 14)',
        padding: '5px 0 10px 0',
        width: '100%',
        textAlign: 'center' as 'center',
        fontSize: '20px',
        fontWeight: 'bold' as 'bold',
        color: 'rgb(145, 14, 14)'
    },
    directionText: {
        width: '100%',
        padding: '10px'
    },
    strong: {
        fontWeight: 'bold' as 'bold',
        fontSize: '18px',
        color: 'rgb(145, 14, 14)'
    },
    normal: {
        fontSize: '17px'
    }
}