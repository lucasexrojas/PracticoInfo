import React from 'react'
import CardPeliculas from './CardPeliculas'
import movies from './MOVIES_DATA.json';

const Peliculas = () => {
  return (
  <>
    <h2>Peliculas</h2>
        <div>
            {
                movies.map((pelicula) => {
                    return <CardPeliculas key={pelicula.id} {...pelicula}/>
                })
            }
        </div>
    </>
  )
}

export default Peliculas