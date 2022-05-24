import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import { useAnimation } from '../../hooks/useAnimation';
import { ChangeTheme } from '../../helpers/changeTheme';
import { CardComponent } from '../screensComponents/CardComponent';


import 'animate.css';


export const ShowProducts = () => {

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

                <div style={styles.productsRow}>
                    <h4 id='titlePizzasMenu' style={styles.titleProductsRow}>Pizzas</h4>

                    <div className='menuItemContainerRed' style={styles.cards}>
                        <CardComponent index={'50'} fromMenu={true} />
                        <CardComponent index={'51'} fromMenu={true} />
                        <CardComponent index={'52'} fromMenu={true} />
                        <CardComponent index={'53'} fromMenu={true} />
                        <CardComponent index={'54'} fromMenu={true} />
                    </div>
                </div>

                <div style={styles.productsRow}>
                    <h4 id='titleAcompañamientosMenu' style={styles.titleProductsRow}>Acompañamientos</h4>

                    <div className='menuItemContainerRed' style={styles.cards}>
                        <CardComponent index={'55'} fromMenu={true} />
                        <CardComponent index={'56'} fromMenu={true} />
                        <CardComponent index={'57'} fromMenu={true} />
                        <CardComponent index={'58'} fromMenu={true} />
                        <CardComponent index={'59'} fromMenu={true} />
                    </div>
                </div>

                <div style={styles.productsRow}>
                    <h4 id='titlePostresMenu' style={styles.titleProductsRow}>Postres</h4>

                    <div className='menuItemContainerRed' style={styles.cards}>
                        <CardComponent index={'60'} fromMenu={true} />
                        <CardComponent index={'61'} fromMenu={true} />
                        <CardComponent index={'62'} fromMenu={true} />
                        <CardComponent index={'63'} fromMenu={true} />
                        <CardComponent index={'64'} fromMenu={true} />
                    </div>
                </div>

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
        right: '20px',
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