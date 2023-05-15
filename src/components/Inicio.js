import React from 'react';
import { Link } from 'react-router-dom';

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy <strong>Paolo Mego</strong>, Estudiante de <strong>Computación e Informática</strong> en CIBERTEC, con ganas de aprender más sobre <strong>programación y desarrollo</strong> en Proyectos Web Frontend con <strong>React</strong>.
      </h1>
      <h2>Aprendo rápido, me gusta todo lo que tenga que ver con la tecnología.</h2>
      <section className='last-works'>
        <h2 className='heading'>Mis proyectos</h2>
        <p>Estos son mis proyectos en Github y mi Linkedin:</p>
        <a href='https://github.com/pmego' target='_blank'><img className='last-works_github' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' /></a>
        <a href='https://www.linkedin.com/in/paolo-mego-taboada-3461b81b6/' target='_blank'><img className='last-works_linkedin' src='https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png' /></a>
      </section>
    </div>
  )
}
