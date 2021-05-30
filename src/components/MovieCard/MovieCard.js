import React from "react";
import {Link} from 'react-router-dom'
import { Card, Button } from "react-bootstrap";
import '../MovieCard/MovieCard.css';
import Rate from '../MovieRating/Rate'




const MovieCard = ({movie}) => {
  return (
    
    <Card  style={{ width: '20rem', height :'45rem'  }} key={movie.id} className='movieCard'>
      <Card.Img variant="top" src={movie.posterUrl} height = "400" />
      <Card.Body>
        <Card.Title>{movie.title} <br/>
        <Rate rate={movie.rate}/>
        
        </Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <div className="watchdwnldbtn">
        <Link to={`/Home/${movie.title}`}>
          <Button variant="success">Watch trailer</Button>
          </Link>
          <Button variant="primary">Download</Button>
        </div>
      </Card.Body>
    </Card>
      )}
  





export default MovieCard;
