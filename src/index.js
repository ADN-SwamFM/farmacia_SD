import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Inicio from './routes/Inicio'
import Inventario from './routes/Inventario'
import Contactanos from './routes/Contactanos'
import Venta from './routes/Venta'
import Compra from './routes/Compra'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<App />}>
      <Route index element={<Inicio />}/>
      <Route path='Inventario' element={<Inventario />}/>
      <Route path='Venta' element={<Venta />}/>
      <Route path='Compra' element={<Compra />}/>
      <Route path='Contactanos' element={<Contactanos />}/>
    </Route>
  </Routes>
  </BrowserRouter>
);


