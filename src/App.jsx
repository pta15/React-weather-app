import React, {useState} from 'react';
import axios from 'axios';


function App() {

  //const url = 'https://api.openweathermap.org/data/2.5/weather?q=birmingham,uk&appid=4f318c295b3aa42d94315eacbbf5ade9'

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Birmingham</p>
          </div>
          <div className="temp">
            <h1>60&deg;F</h1>
          </div>
          <div className="description">
            <p>clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65&deg;F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            <p>12 MPH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
