import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import './App.css';

const url = 'https://community-open-weather-map.p.rapidapi.com/forecast?q=Bangkok%2Cth';
const data = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "88f281211bmsha09ee93c939d6d3p19a0edjsn8b40c077f04b"
  }
}

const App = () =>  {
  const [forecastList, setForecastList] = useState([]);

  useEffect(() => {
    const getForecastList = async () => {
      const { data: response } = await axios.get(url, data);
      setForecastList(response.list);
    };
    getForecastList();
  }, []);

  const renderForecastList = () => {
    return forecastList.map(forecast => {
      return (
        <div key={forecast.dt_txt}>
          <p className="forecast_txt">${forecast.dt_txt}</p>
          <p className="forecast_weather">${forecast.weather[0].description}</p>
        </div>
      );
    })
  }

  return (
    <div className="App">
      <h2>Whether Forecast</h2>
      {renderForecastList()}
    </div>
  );
}

export default App;
