import React from 'react'
import { NavLink } from 'react-router-dom'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import hospital1 from 'C:/Users/franc/OneDrive/Escritorio/Sistemas Distribuidos/Proyecto Final/farmacia/src/images/hospital1.jpg'
import medicamentos from 'C:/Users/franc/OneDrive/Escritorio/Sistemas Distribuidos/Proyecto Final/farmacia/src/images/medicamentos.jpg'


const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-primary'>
        <div className="container-fluid">
        <img src={hospital1} alt="" width="180" height="140"/>
        <NavLink to ='/' className='navbar-brand btn btn-outline-warning'>
            Inicio
        </NavLink>
        <NavLink to ='/carreras' className='navbar-brand btn btn-outline-warning'>
            Carreras
        </NavLink>
        <NavLink to ='/talleres' className="navbar-brand btn btn-outline-warning">
            Talleres    
        </NavLink>
        
        <NavLink to ='/vision' className="navbar-brand btn btn-outline-warning">
            Comprar Medicamento
        </NavLink>
        <NavLink to ='/contactanos' className='navbar-brand btn btn-outline-warning'>
            Contáctanos
        </NavLink>
        <img src={medicamentos} alt="" width="280" height="140"/>
        </div>
    </nav>
  )
}

export default Navbar