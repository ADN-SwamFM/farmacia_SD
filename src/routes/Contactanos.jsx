import React from 'react'
import bootstrap from 'bootstrap'

const Contactanos = () => {
  return (
    <div className='container'>
        <h2>Acerca de nosotros</h2>

        
          <p className='fw-bold'>¡Bienvenido! al portal electrónico del hospital privado ERIADA. </p>
          <p className='text-success fst-italic'>"Por una vida prospera y saludable".</p>
          <p>En este espacio encontrarás la información más relevante de esta importante institución médica y farmaceutica.</p>       
          <ul>
            <p>Centro de distribución privado Hospital y farmacia ERIADA</p>
            <p>Carretera Jilotepec a Chapa de Mota km. 6.5, Ejido de Jilotepec, C.P. 54240, Jilotepec de Molina Enríquez</p>
            <p>Tel: 5531367187</p>
            <p className='fw-bold text-center '>Enlaces</p>
            <a href="#" className='text-primary'>tesji.direccion@gmail.com</a> <br />
            <a href="#" className='text-primary'>dir_dejilotepec@tecnm.mx</a> <br />
            <a href="#" className='text-primary'>Ubicación</a>
          </ul>
          
          
    </div>
  )
}

export default Contactanos