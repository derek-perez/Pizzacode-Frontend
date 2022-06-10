import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useForm } from '../../hooks/useForm';
import { ChangeTheme } from '../../helpers/changeTheme';
import pizzaApi from '../../api/pizzaApi';

import { ItemMenu } from '../../components/screensComponents/ItemMenu';
import { Producto } from '../../interfaces/interfaces';
import { CardComponent } from '../../components/screensComponents/CardComponent';


export const BuscarScreen = () => {

  const { search } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([] as Producto[]);
  const { formData, onChange } = useForm({
    searchInput: search
  });

  const { searchInput }: any = formData;

  useEffect(() => {
    if (search === undefined) {
      navigate('/');
    } else {
      getProducts();
    }
  }, [search]);

  const getProducts = async () => {
    await pizzaApi.get('/productos/search/' + search)
      .then(res => {
        setProducts(res.data.productos);
      })
      .catch(err => {
        console.log(err);
      })
  }


  const handlerChange = (e: any) => {
    e.preventDefault();
    onChange(e);

    const buscarInput = document.getElementById('searcher');

    if (buscarInput) {
      buscarInput.addEventListener('keyup', (e) => {
        let search = e.target as HTMLInputElement;

        if (e.key === 'Enter') {
          navigate('/buscar/' + search.value);
        }
      })
    }

  }

  ChangeTheme({
    id: ['textSearch'], is: 'title'
  })


  return (
    <div style={styles.container}>

      <div style={styles.divSearcher}>
        <input
          id='searcher'
          style={styles.inputSearcher}
          value={searchInput}
          onChange={handlerChange}
          type="text"
          name='searchInput'
          placeholder="Buscar algún producto"
        />
        <FontAwesomeIcon
          style={{
            marginLeft: '10px',
            color: 'white',
            fontSize: '20px',
            cursor: 'pointer'
          }}
          onClick={() => {
            navigate(`/buscar/${searchInput}`);
          }}
          icon={faSearch}
        />
      </div>

      <div style={styles.divResults}>
        <h3 id='textSearch' style={styles.title}> {search} </h3>

        <div style={styles.containerCards}>

          <div className='menuItemContainerRed' style={styles.cards}>
            {
              products && (
                products.map((product: Producto) => (
                  <CardComponent
                    key={product._id}
                    productoID={product._id}
                    nombre={product.nombre}
                    imagen={product.imagen}
                    descripcion={product.descripcion}
                    precio={product.precio}
                    fromSearch
                    fromMenu
                  />
                ))
              )
            }
          </div>
        </div>

      </div>

    </div>
  )
}


const styles = {
  container: {
    width: '80%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 0',
    marginTop: '20px',
    minHeight: '100vh'
  },
  divSearcher: {
    display: 'flex',
    flexDirection: 'row' as 'row',
    alignItems: 'center' as 'center',
    justifyContent: 'space-between' as 'space-between',
    marginBottom: '20px',
    border: '1px solid rgb(154, 14, 14)',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: 'rgb(145, 14, 14)',
    minWidth: '50%'
  },
  inputSearcher: {
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    color: 'white',
    flex: 1,
    fontSize: '20px'
  },

  divResults: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '20px'
  },
  title: {
    fontWeight: 'bold',
    color: 'rgb(145, 14, 14)',
    textShadow: '2px 2px 3px rgba(0, 0, 0, 50%)',
    marginTop: '30px'
  },
  containerCards: {
    th: '90%',
    display: 'flex',
    flexDirection: 'row' as 'row',
    alignItems: 'center',
    marginTop: '30px',
    marginBottom: '60px',
    padding: '20px 0',
    boxShadow: 'inset 0px 0px 7px 5px rgba(0, 0, 0, 0.5)'
  },
  cards: {
    display: 'flex',
    flexDirection: 'row' as 'row',
    alignItems: 'center',
    overflowX: 'auto' as 'auto',

    scrollbarWidth: 'thin' as 'thin',
    scrollbarColor: 'rgb(145, 14, 14) transparent',
  }

};