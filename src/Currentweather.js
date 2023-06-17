import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Date from "./Date";
import Forecast from "./Forecast";
import "./Currentweather.css";




export default function Currentweather(props) {
	return (
		<div className="Currentweather">
			<h1 className="mb-0">{props.data.cityName}</h1>
			<ul>
				<li>
			<Date data={props.data.date}/>
			</li>
			<li className="text-capitalize">{props.data.description}</li>
			</ul>
			<div className="row mt-4">
				<div className="col-4">
					<img src={props.data.icon} alt={props.data.description} className="images"/>
				</div>
				<div className="col-4">
					<h2>{Math.round(props.data.temperature)}°</h2>
				</div>
				<div className="col-4">
					<ul className="overview">
						<li>
				  Real feel: {Math.round(props.data.feelsLike)}°
					</li>
					<li>
          Humidity: {props.data.humidity}%
					</li>
					<li>
					Wind: {Math.round(props.data.wind)} km/h
					</li>
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col">
			<Forecast data={props.data.coordinates} />
			</div>
			</div>
		</div>
	);
}