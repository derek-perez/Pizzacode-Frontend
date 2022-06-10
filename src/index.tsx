import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { CartContextProvider } from './context/CartContext';
import { PagarCardsContextProvider } from './context/PagarCardsContext';
import { ThemeContextProvider } from './context/ThemeContext';
import { UserContextProvider } from './context/UserContext';

import './styles.css';


const root = createRoot(
  document.getElementById('root') as HTMLElement
);

const AppContexts = () => (
  <ThemeContextProvider>
    <PagarCardsContextProvider>
      <CartContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </CartContextProvider>
    </PagarCardsContextProvider>
  </ThemeContextProvider>
)

root.render(
  <>
    <BrowserRouter>
      <AppContexts />
    </BrowserRouter>
  </>
);