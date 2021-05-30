import React from "react";
import MovieCard from "../MovieCard/MovieCard";




const MovieList = ({movies,titleSearch,rateSearch}) => {
  return (
    <div style={{display:'flex',flexWrap:'wrap', justifyContent:'space-around', marginTop:'5%',alignItems:'space-between'}}>
      {movies
        .filter(
          (el) =>
            el.title.toLowerCase().includes(titleSearch.toLowerCase()) &&
            el.rate >= rateSearch
        )
        .map((el) => (
          <MovieCard key={el.id} movie={el} />
        ))}
    </div>
  );
}
   


export default MovieList;
