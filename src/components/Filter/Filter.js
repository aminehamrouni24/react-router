import React from "react";
import Rate from '../MovieRating/Rate';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormControl,InputGroup} from 'react-bootstrap';
function Filter({ setTitleSearch, setRateSearch, rate }) {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-evenly", width: "30%" , background:'black'}}
    >
     <div className="w-1/2 sm:auto md:auto lg:auto shadow-2xl h-screen flex flex-col items-center">
        <InputGroup >
            <FormControl
              placeholder="Search for a movie..."
              aria-label="Title"
              aria-describedby="basic-addon1"
              onChange={(e)=>setTitleSearch(e.target.value)}
            />
        </InputGroup>
        
      </div>
      <Rate setRateSearch={setRateSearch} rate={rate} />
      
    </div>
  );
}

export default Filter;
