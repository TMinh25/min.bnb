import React, {useEffect} from "react";
import NavBar from "../Navbar";
import CardCarousel from "../Card";
import "./Products.css";
import {Lily, CasaIndigo, SaddlePeak, Sextant} from "../images";
import {Link} from "react-router-dom";

const rooms = [
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
];

const productList = [];
for (let i = 0; i < 3; i++) {
	productList.push(
		<div className="cards__wrapper">
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
		</div>
	);
}

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

const Products = (props) => {
	const locationState = props.location.state;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<NavBar transparent={false} />
			{/* <h1 className="products">Products</h1> */}
			<div style={{height: 80}} />
			{/* <div className="products-container"> */}
			<main className="products-main">
				<div className="products-container">
					<div className="nearby-title">
						<p>300+ địa điểm</p>
						<h1>Gợi ý</h1>
						<ol>
							<li>
								<Link
									className="area-show-all filter"
									to={{
										pathname: "/products",
										state: locationState,
									}}
								>
									Đặt phòng ngay
								</Link>
							</li>
							<li>
								<Link
									className="area-show-all filter"
									to={{
										pathname: "/products",
										state: locationState,
									}}
								>
									Cả căn hộ
								</Link>
							</li>
							<li>
								<Link
									className="area-show-all filter"
									to={{
										pathname: "/products",
										state: locationState,
									}}
								>
									Villa
								</Link>
							</li>
							<li>
								<Link
									className="area-show-all filter"
									to={{
										pathname: "/products",
										state: locationState,
									}}
								>
									Chấp nhận vật nuôi
								</Link>
							</li>
							<li>
								<Link
									className="area-show-all filter"
									to={{
										pathname: "/products",
										state: locationState,
									}}
								>
									Thêm bộ lọc...
								</Link>
							</li>
						</ol>
					</div>
					<div>
						<div className="area-header">
							{locationState && locationState.city ? (
								<h3 className="area-title">{locationState.city}</h3>
							) : (
								<h3 className="area-title">Hạ Long</h3>
							)}
						</div>
						{productList}
					</div>
				</div>
			</main>
		</>
	);
};

export default Products;
