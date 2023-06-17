import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Forecast.css";
import Overview from "./Overview";



export default function Forecast(props) {
	let [data, setData] = useState(null);
	let [loaded, setLoaded] = useState(false);
	



	useEffect(()  => {
		setLoaded(false);
	}, [props.data]);



	function displayForecast(response) {
		setData(response.data.daily);
		setLoaded(true);
	}


	if(loaded) {

	return (
    <div className="Forecast">
      <div className="row mt-4">
        <div className="col-3">
          <Overview forecast={data[1]} />
        </div>
        <div className="col-3">
          <Overview forecast={data[2]} />
        </div>
				<div className="col-3">
        <Overview forecast={data[3]} />
				</div>
				<div className="col-3">
					<Overview forecast={data[4]}/>
					</div>
      </div>
    </div>
  );
		} else {
			let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.lat}&lon=${props.data.lon}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(displayForecast);

	 return null;
		}
} 
