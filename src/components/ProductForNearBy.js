import React from "react";
import {Lily, CasaIndigo, SaddlePeak, Sextant} from "./images";
import CardCarousel from "./Card";
import "../App.css";

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

const roomsArr = [
	[
		{
			title: "Lily - LAURA Studio❣️CENTER of BADINH❣️",
			description: "1 Bedroom Private Pool Villa - Entire Villa",
			address: "Thành phố Hạ Long, Quảng Ninh, Việt Nam",
			host: "Trường Minh",
			rating: 4.53,
			reviewQuantity: 67,
			sale: 999,
			price: 10,
			timeStaying: "đêm",
			images: Lily,
		},
		{
			title:
				"Sextant | Waterfront Chateau | Pool + Hot Tub | Directly on the Miami River",
			description: "2 Bedroom with King Bed - Pool - Hot tub",
			address: "Thành phố Miami, Florida, Hoa Kì",
			host: "Trường Minh",
			rating: 4.73,
			reviewQuantity: 69,
			sale: 1299,
			price: 269,
			timeStaying: "đêm",
			images: Sextant,
		},
	],
	[
		{
			title: "Casa Indigo - Costa Rica",
			description: "Spanish Colonial villa on the bay",
			address: "Costa Rica, Tây Ban Nha",
			host: "Trường Minh",
			rating: 4.9,
			reviewQuantity: 2,
			price: 1100,
			timeStaying: "đêm",
			images: CasaIndigo,
		},
		{
			title: "Saddle Peak - California",
			description: "Luxury stay in Topanga, California, United States",
			address: "Topanga, California, Hoa Kỳ",
			host: "Trường Minh",
			rating: 5.0,
			reviewQuantity: 22,
			price: 1200,
			timeStaying: "đêm",
			images: SaddlePeak,
		},
	],
];

class ProductForNearBy extends React.Component {
	constructor() {
		super();
		this.state = {
			hidden: "hidden",
		};
	}

	componentWillMount() {
		setTimeout(() => {
			this.show();
		}, 2000);
	}

	show() {
		this.setState({hidden: ""});
	}

	render() {
		return (
			<div className={`cards__wrapper ${this.state.hidden}`}>
				{shuffle(roomsArr).map((rooms) => {
					return (
						<ul className="cards__items_verti">
							{shuffle(rooms).map((room) => {
								return (
									<CardCarousel
										path="/room-details"
										title={room.title}
										description={room.description}
										address={room.address}
										host={room.host}
										rating={room.rating}
										reviewQuantity={room.reviewQuantity}
										sale={room.sale}
										price={room.price}
										timeStaying={room.timeStaying}
										images={room.images}
									/>
								);
							})}
						</ul>
					);
				})}
			</div>
		);
	}
}

export default ProductForNearBy;
