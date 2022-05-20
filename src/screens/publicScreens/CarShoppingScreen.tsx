import { useState } from 'react';
import { Link } from 'react-router-dom';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CardComponent } from '../../components/screensComponents/CardComponent';
import { ShowProducts } from '../../components/screensComponents/ShowProducts';
import { ChangeTheme } from '../../helpers/changeTheme';


export const CarShoppingScreen = () => {

  ChangeTheme({
    id: ['titleCart'], is: 'title'
  })

  const [askAddProduct, setAskAddProduct] = useState(false);
  const [timesClicked, setTimesClicked] = useState(1);

  const openAddProduct = () => {

    setAskAddProduct(true);
    setTimesClicked(timesClicked + 1);

    if (timesClicked >= 2) {
      const elementToAnimate = document.getElementById('showProducts');

      if (!elementToAnimate) return;

      elementToAnimate.classList.add('animate__animated', 'animate__backInDown');

      elementToAnimate.style.position = 'fixed';
      elementToAnimate.style.display = 'flex';
      elementToAnimate.style.opacity = '1';
    }

  }


  return (
    <div style={styles.container}>
      <h2 id='titleCart' style={styles.title}>Tu carrito de compra</h2>

      <div id='addProductDiv' style={styles.addProductsDiv}>
        <div style={styles.addProduct}>
          <p style={styles.questionAddProduct}>¿Quiéres agregar algún producto al carrito?</p>

          <div style={styles.addProductButtons}>
            <button
              className='btn btn-danger'
              style={styles.button}
              onClick={openAddProduct}
            >
              Si
            </button>
            <Link to='/carrito/pagar' className='btn btn-danger' style={styles.button}>
              Pagar &nbsp; <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

        </div>
      </div>

      <div className='menuItemContainerRed' style={styles.containerProducts}>
        <CardComponent index={'40'} shoppingCart={true} inlineStyles={{ width: '30%', minWidth: '275px' }} />
        <CardComponent index={'41'} shoppingCart={true} inlineStyles={{ width: '30%', minWidth: '275px' }} />
        <CardComponent index={'42'} shoppingCart={true} inlineStyles={{ width: '30%', minWidth: '275px' }} />
      </div>

      {
        (askAddProduct) && (
          <ShowProducts />
        )
      }

    </div>
  )
}


const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    padding: '20px 0',
    marginTop: '20px',
    width: '100%'
  },
  title: {
    fontWeight: 'bold',
    color: 'rgb(145, 14, 14)',
    textShadow: '2px 2px 3px rgba(0, 0, 0, 30%)',
    margin: '10px 0 30px 0'
  },

  addProductsDiv: {
    border: '1px solid rgba(0, 0, 0, 0.5)',
    borderRadius: '5px',
    boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 80%)',
    color: 'white',
    backgroundColor: 'rgb(33, 33, 60)',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px',
    marginBottom: '30px'
  },
  addProduct: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
    marginBottom: '10px'
  },
  questionAddProduct: {
    fontSize: '18px'
  },
  addProductButtons: {
    display: 'flex',
    flexDirection: 'row' as 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  button: {
    backgroundColor: 'rgb(145, 14, 14)'
  },

  containerProducts: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row' as 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap' as 'wrap',
    maxHeight: '750px',
    overflowY: 'auto' as 'auto',
    borderRadius: '5px',
    padding: '15px',
    border: '1px solid rgba(0, 0, 0, 0.5)',
    backgroundColor: 'rgb(33, 33, 60)',
    boxShadow: 'inset 0 0 7px rgba(0, 0, 0, 80%)',

    scrollbarWidth: 'thin' as 'thin',
    scrollbarColor: 'rgb(145, 14, 14) transparent',
  }

}