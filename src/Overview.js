import React from "react";



export default function Overview(props) {

	function date(time) {
		let now = new Date(time);
		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		let day = days[now.getDay()];

		return day;
	}


	return (
		<div className="Overview">
			<ul>
				<li>{date(props.forecast.dt * 1000)}</li>
				<li>
					<img src={`https://openweathermap.org/img/wn/${props.forecast.weather[0].icon}@2x.png`} alt={props.forecast.weather[0].description}/>
				</li>
				<li>{Math.round(props.forecast.temp.max)}° <span className="opacity-75">{Math.round(props.forecast.temp.min)}°</span></li>
			</ul>
		</div>
	);
}