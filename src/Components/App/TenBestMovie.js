import React, { useEffect, useState } from 'react';
import { getBestMovies } from '../../services/client';
import {
  BestMoviesContainer, H1, Arrow
} from '../StyledComponents/TenBestMovies/TenBestMovieStyles';
import { ThumbMovie } from '../StyledComponents/Commons/Commons';

const TenBestMovies = () => {
  const [bestMovies, setBestMovies] = useState();
  const [startIndex, setStartIndex ] = useState(0);

  useEffect(() => {
    getBestMovies().then(setBestMovies);
  }, []);

  const getFour = (firstIndex) => {
    const endIndex = firstIndex + 4;
    if (firstIndex === -1) {
      setStartIndex(4);
    } else if (endIndex === 11) {
      setStartIndex(0);
    }
    return bestMovies.slice(firstIndex, firstIndex + 4);
  };

  return (
    <>
      <H1>Les 10 meilleurs films</H1>
      <BestMoviesContainer>
        <Arrow src="/icons-img/sliderpreviousarrow.svg" onClick={() => setStartIndex(startIndex - 1)} />
        {bestMovies && getFour(startIndex).map((movie) => (
          <>
            <ThumbMovie marginRight="4rem" marginLeft="4rem" src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.backdrop_path}`} />
          </>
        ))}
        <Arrow src="/icons-img/slidernextarrow.svg" onClick={() => setStartIndex(startIndex + 1)} />
      </BestMoviesContainer>
    </>
  );
};


export default TenBestMovies;
