import React from 'react'
import { Link } from 'react-router-dom';
import Campo from './Campo';
import Carrera from './Carrera';
import Corredor from './Corredor';
import Correr from './Correr';
import Images from './Images';

const Navigation = () => {
  return (
    <div className='container mt-4 father'>
        <Link to="/Campo" className='links'>
            <figure className='imagen-size'>
                <Campo />
                <figcaption>Correr en montaña</figcaption>
            </figure>
        </Link>

        <Link to="/Carrera" className='links'>
            <figure className='imagen-size'>
                <Carrera />
                <figcaption>Correr en calles</figcaption>
            </figure>
        </Link>
      
        <Link to="/Corredor" className='links'>
            <figure className='imagen-size'>
                <Corredor />
                <figcaption>Mentor de mi pasión Eliud Kipchoge</figcaption>
            </figure>
        </Link>

        <Link to="/Correr" className='links'>
            <figure className='imagen-size'>
                <Correr />
                <figcaption>Correr en pista</figcaption>
            </figure>
        </Link>

        <Link to="/Images" className='links'>
            <figure className='imagen-size'>
                <Images />
                <figcaption>Amor por running</figcaption>
            </figure>
        </Link>
    </div>
  )
}

export default Navigation
