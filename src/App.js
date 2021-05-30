import React, { useState } from "react";
import {Switch,Route,Link} from 'react-router-dom'
import { moviesData } from "./components/MoviesData";
import MovieList from "./components/MovieList/MovieList";
import AddMovie from "./components/AddMovie/AddMovie";
import Filter from "./components/Filter/Filter";
import MoviesDetails from './components/MoviesDetails/MoviesDetails';
import Video from './components/Video/Video'
import "./App.css";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [titleSearch, setTitleSearch] = useState("");
  const [rateSearch, setRateSearch] = useState(0);
  const handleAdd = (newMovie) => {
    if (
      newMovie.title!=="" &&
      newMovie.description!=="" &&
      newMovie.date!=="" &&
      newMovie.posterUrl!==""&&
      newMovie.rate!==0
    ) {
      setMovies([...movies, newMovie]);
    }else{
      alert('All fields are mandatory!')
    }
   
  };
  return (
    
      <div>
      <div className ="header">
      <Link to="/Home"><img src="https://img.wallpapersafari.com/desktop/1920/1080/30/19/8ahotv.jpg" alt="all anime" className="logotof"/> 
      <h1>Welcome to House Of Anime</h1>
      </Link>
      </div>
      <Switch>
      <Route exact path="/Home">
      <div style={{ display: "flex", justifyContent: "space-around", width: "100%" , background:'black'}}>
      <AddMovie handleAdd={handleAdd} />
        <Filter
          rate={rateSearch}
          setRateSearch={setRateSearch}
          setTitleSearch={setTitleSearch}
        />
      </div>
      <div>
     <Video/>
     </div>
      
      <MovieList
        rateSearch={rateSearch}
        titleSearch={titleSearch}
        movies={movies}
      />
    </Route>

    <Route path={`/Home/:title`} component={MoviesDetails}/>
   

    </Switch>
      </div>
    
  );
}

export default App;
