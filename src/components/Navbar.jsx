import React from 'react'
import { NavLink } from 'react-router-dom'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import hospital1 from 'C:/Users/franc/OneDrive/Escritorio/Sistemas Distribuidos/Proyecto Final/farmacia/src/images/hospital1.jpg'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-primary'>
        <div className="container-fluid">
        <img src={hospital1} alt="" width="180" height="140"/>
        <NavLink to ='/' className='navbar-brand btn btn-outline-warning'>
            Inicio
        </NavLink>
        <NavLink to ='/Inventario' className='navbar-brand btn btn-outline-warning'>
            Inventario de Medicamento
        </NavLink>
        <NavLink to ='/Venta' className="navbar-brand btn btn-outline-warning">
            Venta de Medicamento
        </NavLink>
        
        <NavLink to ='/Compra' className="navbar-brand btn btn-outline-warning">
            Comprar Medicamento
        </NavLink>
        <NavLink to ='/contactanos' className='navbar-brand btn btn-outline-warning'>
            Contáctanos
        </NavLink>
        </div>
    </nav>
  )
}

export default Navbar