import { useEffect, useState } from 'react';

import pizzaApi from '../api/pizzaApi';

import { ChangeTheme } from '../helpers/changeTheme';
import { useTheme } from '../hooks/useTheme';

import { Carousel } from '../components/homeComponents/Carousel';
import { DivComponent } from '../components/homeComponents/DivComponent';



interface PropsCategoria {
  _id: string;
  nombre: string;
  titulo: string;
  productos: string[];
}

export const HomeScreen = () => {

  const [categorias, setCategorias] = useState([] as PropsCategoria[]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Tema
  ChangeTheme({
    id: ['home'], is: 'div'
  });


  const { setProps } = useTheme();

  window.addEventListener('DOMContentLoad', (e) => {
    setProps({ e, justNow: true });
  });

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
    obtenerCategoria('6297d0b9dc8697bcc42e7f1b');
    obtenerCategoria('6297d40fdc8697bcc42e7f9f');
  }, [])


  return (
    <div id='home'>
      <Carousel />

      {
        categorias.map(categoria => (
          <DivComponent key={categoria._id} categoria={categoria} />
        ))
      }

    </div>
  )
}