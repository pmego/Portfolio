import React from 'react'
import { experiencia } from '../data/experiencia';
import { educacion } from '../data/experiencia';

export const Curriculum = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Curriculum</h1>
      <h2>Experiencia Laboral</h2>
      <section className='exp'>
        {experiencia.map(expe => {
          return (
            <article className='exp-item'>
              <span>{expe.año}</span>
              <h3>{expe.empresa}</h3>
              <h4>{expe.cargo}</h4>
              <p>{expe.tareas}</p>
            </article>
          );
        })
        }
      </section>

      <h2>Educación</h2>
      <section className='edu'>
        {educacion.map(edu => {
          return (
            <article className='exp-item'>
              <span>{edu.año}</span>
              <h3>{edu.institucion}</h3>
              <h4>{edu.curso}</h4>
            </article>
          );
        })
        }
      </section>
    </div>
  )
}
