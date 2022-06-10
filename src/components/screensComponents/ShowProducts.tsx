import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import { useAnimation } from '../../hooks/useAnimation';
import { ChangeTheme } from '../../helpers/changeTheme';

import { ItemAddProduct } from './ItemAddProduct';

import 'animate.css';
import pizzaApi from '../../api/pizzaApi';


interface PropsCategoria {
    _id: string;
    nombre: string;
    titulo: string;
    productos: string[];
  }

export const ShowProducts = () => {

    const [categorias, setCategorias] = useState([] as PropsCategoria[]);

    ChangeTheme({
        id: ['showProducts'], is: 'div'
    });

    ChangeTheme({
        id: [
            'titleProducts',
            'titlePizzasMenu',
            'titleAcompañamientosMenu',
            'titlePostresMenu',
            'closeWindow',
        ], is: 'title'
    })

    useAnimation({
        element: ['showProducts'],
        name: ['animate__backInDown'],
        staticElement: true
    });

    const closeWindow = () => {
        document.getElementById('showProducts')!.classList.add('animate__animated', 'animate__backOutUp');

        setTimeout(() => {
            document.getElementById('showProducts')!.style.opacity = '0';
            document.getElementById('showProducts')!.style.position = 'relative';
            document.getElementById('showProducts')!.style.display = 'none';

            document.getElementById('showProducts')!.classList.remove('animate__animated', 'animate__backOutUp');

        }, 500);
    }

    const obtenerCategoria = async (id = '') => {
        const { data } = await pizzaApi.get('/categorias/' + id);

        categorias.filter(ctg => {
            (ctg._id === data._id)
                ? categorias.splice(categorias.indexOf(ctg), 1)
                : console.log();
        })

        return setCategorias(ctg => [...ctg, data]);
    }

    useEffect(() => {
        obtenerCategoria('62944a912d2cf8cfb17e0bba');
        obtenerCategoria('62943d80c3e39e6ae55afee3');
        obtenerCategoria('62943df8c3e39e6ae55afee7');
        obtenerCategoria('62943e0ec3e39e6ae55afee9');
    }, [])



    return (
        <div id='showProducts' style={styles.showProducts}>
            <FontAwesomeIcon
                id='closeWindow'
                style={styles.close}
                onClick={closeWindow}
                icon={faClose}
            />
            <h3 id='titleProducts' style={styles.showProductsTitle}>Escoje algún producto</h3>

            <div className='menuItemContainerRed' style={styles.products}>

                {
                    categorias.map(ctg => (
                        <ItemAddProduct key={ctg._id} nombre={ctg.nombre} titulo={ctg.titulo} productosID={ctg.productos} />
                    ))
                }

            </div>
        </div>
    )
}


const styles = {
    showProducts: {
        position: 'fixed' as 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        padding: '30px',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '1000',
        overflow: 'auto',
        opacity: 0,

        scrollbarWidth: 'thin' as 'thin',
        scrollbarColor: 'rgb(145, 14, 14) transparent'
    },
    close: {
        position: 'fixed' as 'fixed',
        top: '30px',
        right: '40px',
        cursor: 'pointer',
        fontSize: '30px'
    },
    showProductsTitle: {
        position: 'relative' as 'relative',
        margin: '20px 0',
        color: 'rgb(145, 14, 14)',
        fontWeight: 'bold',
    },

    products: {
        position: 'relative' as 'relative',
        border: '1px solid rgb(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%',
        overflowY: 'auto' as 'auto',
        overflowX: 'hidden' as 'hidden',
        boxShadow: 'inset 0 0 7px rgb(0, 0, 0)',
    },

    productsRow: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        margin: '30px auto',
        paddingBottom: '25px'
    },
    titleProductsRow: {
        color: 'rgb(145, 14, 14)',
        fontWwight: 'bold',
        fontSize: '30px',
        marginBottom: '20px'
    },
    cards: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row' as 'row',
        alignItems: 'center',
        overflowX: 'auto' as 'auto',
        overflowY: 'hidden' as 'hidden',
        maxHeight: '600px',
        padding: '0 20px',

        scrollbarWidth: 'thin' as 'thin',
        scrollbarColor: 'rgb(145, 14, 14) transparent'
    }
}