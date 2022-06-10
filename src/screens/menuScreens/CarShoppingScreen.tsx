import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PagarCardsContext } from '../../context/PagarCardsContext';
import { ChangeTheme } from '../../helpers/changeTheme';

import { CardCheckout } from '../../components/screensComponents/CardCheckout';
import { ShowProducts } from '../../components/screensComponents/ShowProducts';
import { Productos } from '../../interfaces/interfaces';



export const CarShoppingScreen = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { setUpdate, productos, clicked, setClicked } = useContext(PagarCardsContext);

  useEffect(() => {
    if (productos.length > 0) {
      document.getElementById('noProducts')?.classList.add('hidden');
      document.getElementById('productsContext')?.classList.remove('hidden');
    }
  }, [productos]);


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
            {
              productos.length > 0 && (
                <Link
                  to='/carrito/pagar'
                  className='btn btn-danger'
                  style={styles.button}
                  onClick={() => {
                    setUpdate(3);
                    setClicked(clicked + 1);
                  }}
                >
                  Pagar &nbsp; <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              )
            }
          </div>

        </div>
      </div>

      <div className='menuItemContainerRed' style={styles.containerProducts}>
        <div
          id='noProducts'
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px 0'
          }}
        >
          <p
            style={{
              textAlign: 'center',
              fontSize: '20px',
              fontWeight: 'bold',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
            }}
          >
            Aún no hay artículos en tu carrito
          </p>
          <button onClick={openAddProduct} className='btn btn-outline-danger'>Agregar artículo</button>
        </div>
        <div
          id='productsContext'
          className='carritoProductos hidden'
          style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}
        >
          {
            productos && (
              productos.map((producto: Productos) => (
                <CardCheckout
                  key={producto.producto._id}
                  productoID={producto.producto._id}
                  cantidad={producto.cantidad}
                />
              ))
            )
          }
        </div>
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
    boxShadow: 'inset 0 0 7px rgba(0, 0, 0, 80%)',

    scrollbarWidth: 'thin' as 'thin',
    scrollbarColor: 'rgb(145, 14, 14) transparent',
  }

}