import React from "react";
import "./CityAndState.css";

Array.prototype.shuffle = function () {
	for (var i = 0; i < this.length; i++) {
		var a = this[i];
		var b = Math.floor(Math.random() * this.length);
		this[i] = this[b];
		this[b] = a;
	}
};

// Lấy keys của object ra một array
function getKeys(obj) {
	var arr = new Array();
	for (var key in obj) arr.push(key);
	return arr;
}

// Đỏa lộn vị trí trong object
function shuffleProperties(obj) {
	var shuffledObject = {};
	var keys = getKeys(obj);
	keys.shuffle();
	for (var key in keys) {
		if (key === "shuffle") continue; // skip our prototype method
		shuffledObject[keys[key]] = obj[keys[key]];
	}
	return shuffledObject;
}

const CityAndState = () => {
	const [cityState, setCityState] = React.useState({
		"Hạ Long": "Quảng Ninh",
		"Cẩm Phả": "Quảng Ninh",
		Miami: "Florida",
		"San Diego": "California",
		"San Francisco": "California",
		Nashville: "Tennessee",
		Seattle: "Washington",
		Boston: "Massachusetts",
		Philadelphia: "Pennsylvania",
		Dallas: "Texas",
		Austin: "Texas",
		Washington: "District of Columbia",
		"New Orleans": "Louisiana",
		"San Antonio": "Texas",
		Houston: "Texas",
		"Los Angeles": "California",
		London: "United Kingdom",
		Paris: "France",
		Memphis: "Tennessee",
		Rome: "Italy",
		Barcelona: "Spain",
		Amsterdam: "Netherlands",
		Lexington: "Kentucky",
	});

	// Đảo lộn vị trí của các thành phố trong object
	React.useEffect(() => {
		setCityState((prev) => shuffleProperties(prev));
	}, []);

	return (
		<ul className="city-state-container clearfix">
			{Object.keys(cityState).map((key, index) => {
				return (
					<>
						<li>
							<a href="/products">
								<p className="city">{key}</p>
								<p className="state">{cityState[key]}</p>
							</a>
						</li>
					</>
				);
			})}
		</ul>
	);
};

export default CityAndState;
