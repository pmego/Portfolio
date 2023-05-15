import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Contacto } from '../components/Contacto';
import { Curriculum } from '../components/Curriculum';
import { Inicio } from '../components/Inicio'
import { Portafolio } from '../components/Portafolio'
import { Footer } from '../layout/Footer';
import { HeaderNav } from '../layout/HeaderNav';


export const MisRutas = () => {
    return (
        <BrowserRouter>
            {/* HEADER Y MENÚ DE NAVEGACIÓN */}
            <HeaderNav />

            {/* CONTENIDO PRINCIPAL */}
            <section className='content'>
                <Routes>
                    <Route path='/' element={<Navigate to="/inicio" />} />
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='/portafolio' element={<Portafolio />} />
                    <Route path='/curriculum' element={<Curriculum />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='*' element={
                        <div className='page'>
                            <h1 className='heading'>Error 404</h1>
                        </div>
                    } />
                </Routes>
            </section>

            {/* FOOTER */}
            <Footer />
        </BrowserRouter>
    )
}
