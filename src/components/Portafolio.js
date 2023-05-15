import React from 'react'
import { Link } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>

      <section className='works'>
        {
          trabajos.map(trabajo => {
            return (
              <article className='work-item' key={trabajo.id}>
                <div className='mask'>
                  <img src={'/images/' + trabajo.id + '.png'} />
                </div>
                <span>{trabajo.categoria}</span>
                <h2>{trabajo.nombre}</h2>
                <h4><Link to={trabajo.url} target='_blank'>Ir al proyecto</Link></h4>
                <h3>{trabajo.teconologias}</h3>
              </article>
            );
          })
        }
      </section>

    </div>
  )
}
