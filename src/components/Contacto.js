import React from 'react'

export const Contacto = () => {
  return (
    <div className='page-contacto'>
      <div className='page-left'>
        <h1 className='heading'>Contacto</h1>

        <form className='contact'>
          <input type="text" placeholder='Nombre' name='nombre' />
          <input type="text" placeholder='Apellido' name='apellido' />
          <input type="text" placeholder='Email' name='email' />
          <textarea placeholder='Motivo de contacto' />
          <input type="submit" value="enviar" />
        </form>
      </div>

      <div className='page-right'>
        <img src='https://cdn.pixabay.com/photo/2017/05/09/13/33/laptop-2298286_1280.png' />
      </div>
    </div>
  )
}
