import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './context/auth.jsx'
import { SearchProvider } from './context/search.jsx';
import { CartProvider } from './context/cart.jsx';


createRoot(document.getElementById('root')).render(
<AuthProvider>
  <SearchProvider>
    <CartProvider>
<BrowserRouter>
  <App/>
  </BrowserRouter>
  </CartProvider>
  </SearchProvider>
</AuthProvider>
)
 
