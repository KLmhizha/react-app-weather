import React from "react";



export default function Date(props) {

	let currentDate = props.data;
	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	let day = days[currentDate.getDay()];
	let hour = currentDate.getHours();
	let minutes = currentDate.getMinutes();

	if(hour < 10) {
		hour = `0${hour}`;
	}

	if(minutes < 10) {
		minutes = `0${minutes}`;
	}


	return (
		<div className="Date">
			{day} {hour}:{minutes}
		</div>
	);
}