import React from 'react'
import { NavLink } from 'react-router-dom'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-light'>
        <div className="container-fluid">
        {/*<img src={logoTesji} alt="" width="180" height="150"/>*/}
        <NavLink to ='/' className='navbar-brand'>
            Inicio
        </NavLink>
        <NavLink to ='/carreras' className='navbar-brand'>
            <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Carreras
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="#">Ing. Sistemas</a></li>
            <li><a className="dropdown-item" href="#">Ing. Industrial</a></li>
            <li><a className="dropdown-item" href="#">Ing. Civil</a></li>
            <li><a className="dropdown-item" href="#">Lic. Administración</a></li>
            </ul>
        </div>
        </NavLink>
        <NavLink to ='/talleres' className="navbar-brand">
        <div class="dropdown">
            <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Talleres
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="#">Futbol</a></li>
            <li><a className="dropdown-item" href="#">Basketball</a></li>
            <li><a className="dropdown-item" href="#">Musica</a></li>
            <li><a className="dropdown-item" href="#">Danza</a></li>
            </ul>
        </div>    
        </NavLink>
        
        <NavLink to ='/vision' className="navbar-brand">
            Vision
        </NavLink>
        
       
        <NavLink to ='/contactanos' className='navbar-brand'>
            Contáctanos
        </NavLink>
        {/*<img src={logoTecNM} alt="" width="280" height="150"/>*/}
        </div>
    </nav>
  )
}

export default Navbar