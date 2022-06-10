import { UserContext } from '../context/UserContext';
import { Routes, Route, Navigate } from 'react-router-dom';

import {
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
import { PagarScreen } from '../screens/PagarScreen';
import { ChangeTheme } from '../helpers/changeTheme';
import { AlertCarrito } from '../components/AlertCarrito';
import { Loading } from '../components/screensComponents/Loading';
import { useContext, useEffect } from 'react';


export const Router = () => {

     const { checkLogin } = useContext(UserContext);

     useEffect(() => {
          checkLogin();
     }, [])


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


                    <Route path='*' element={<Navigate to='/' />} />
               </Routes>

               <Loading />
               <AlertCarrito />

               <Footer />
          </>
     )
}
