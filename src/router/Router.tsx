import { Routes, Route } from 'react-router-dom';

import {
     Screen404,
     HomeScreen,
     MenuScreen,
     ContactoScreen,
     BuscarScreen,
     CarShoppingScreen,
     CuentaScreen,
     LoginScreen,
     RegisterScreen,
} from '../screens/';

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PagarScreen } from '../screens/publicScreens/PagarScreen';
import { ChangeTheme } from '../helpers/changeTheme';


export const Router = () => {

     ChangeTheme({
          id: ['root'], is: 'div'
     })

     return (
          <>
               <Navbar />

               <Routes>

                    <Route path="/" element={<HomeScreen />} />
                    <Route path='/menu' element={<MenuScreen />} />
                    <Route path='/contacto' element={<ContactoScreen />} />
                    <Route path='/buscar/:search' element={<BuscarScreen />} />
                    <Route path='/carrito' element={<CarShoppingScreen />} />
                    <Route path='/carrito/pagar' element={<PagarScreen />} />
                    <Route path='/cuenta/:item' element={<CuentaScreen />} />
                    <Route path='/join/login' element={<LoginScreen />} />
                    <Route path='/join/register' element={<RegisterScreen />} />


                    <Route path='*' element={<Screen404 />} />
               </Routes>

               <Footer />
          </>
     )
}
