import React from 'react'
import { Link } from 'react-router-dom';
import Campo from './Campo';
import Carrera from './Carrera';
import Corredor from './Corredor';
import Correr from './Correr';
import Images from './Images';

const Navigation = () => {
  return (
    <div>
        <Link to="/Campo">
            <figure>
                <Campo/>
                <figcaption>Correr en montaña</figcaption>
            </figure>
        </Link>

        <Link to="/Carrera">
            <figure>
                <Carrera/>
                <figcaption>Correr en calles</figcaption>
            </figure>
        </Link>
      
        <Link to="/Corredor">
            <figure>
                <Corredor/>
                <figcaption>Mentor de mi pasión Eliud Kipchoge</figcaption>
            </figure>
        </Link>

        <Link to="/Correr">
            <figure>
                <Correr/>
                <figcaption>Correr en pista</figcaption>
            </figure>
        </Link>

        <Link to="/Images">
            <figure>
                <Images/>
                <figcaption>Amor por running</figcaption>
            </figure>
        </Link>
    </div>
  )
}

export default Navigation
