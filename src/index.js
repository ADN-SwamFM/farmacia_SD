import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Inicio from './routes/Inicio'
import Carreras from './routes/Carreras'
import Contactanos from './routes/Contactanos'
import Talleres from './routes/Talleres'
import Vision from './routes/Vision'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<App />}>
      <Route index element={<Inicio />}/>
      <Route path='Carreras' element={<Carreras />}/>
      <Route path='Talleres' element={<Talleres />}/>
      <Route path='Vision' element={<Vision />}/>
      <Route path='Contactanos' element={<Contactanos />}/>
    </Route>
  </Routes>
  </BrowserRouter>
);


