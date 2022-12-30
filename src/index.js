import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './componentes/Footer/Footer';
import NavbarGmi from '../src/componentes/NavBarGmi/NavbarGmi';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <BrowserRouter>
    <NavbarGmi />
    <App />
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);


