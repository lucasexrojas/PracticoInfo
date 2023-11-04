import React from 'react'
import { CardContainer, InfoContainer, MetascoreStyled, Plotstyled, Pstyled, SpanStyled } from './CardMovies'
import movies from './MOVIES_DATA.json'
import {AiFillStar} from "react-icons/ai"

const CardPeliculas = ({
    poster, title, releaseDate, duration, maturity, genres, director, mainActors, plot, rating, metascore}) => {
  return (
    <>
        <CardContainer>
            <img src={poster} alt={`Poster de ${title}`}/>
            <InfoContainer>
                <h2>{title}</h2>
                <h4>{releaseDate} | {duration} | {maturity} | {genres.join(" - ")}</h4>
                <div>
                    <Pstyled>
                        <AiFillStar style={{ color: 'gold' }}/>
                        {rating} 
                    </Pstyled>
                    <SpanStyled>
                        <AiFillStar style={{ color: 'grey' }}/>
                        RATE
                    </SpanStyled>
                    <MetascoreStyled>
                            {metascore}
                    </MetascoreStyled>
                    <Pstyled>
                         Metascore
                    </Pstyled>
                </div>
                <span>{director} | {mainActors}</span>
                <Plotstyled>{plot}</Plotstyled>
            </InfoContainer>
        </CardContainer>
    </>
  )
}

export default CardPeliculas