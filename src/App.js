import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
	return (
		<div className="App">
			<main>
			<Weather />
			</main>
			<footer>
						<i className="fa-brands fa-react icon"></i> {""}
					<span>
						<a href="https://github.com/KLmhizha/react-app-weather.git" target="_blank" rel="noreferrer">Built by Lucia Mhizha and it is open-sourced.
						</a>
						</span>
			</footer>
			</div>
	);
}