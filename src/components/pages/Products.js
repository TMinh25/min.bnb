import React, {useState, useRef, useCallback} from "react";
import NavBar from "../Navbar";
import MapGL, {NavigationControl, GeolocateControl} from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import CardCarousel from "../Card";
import "./Products.css";

const MAPBOX_TOKEN =
	"pk.eyJ1IjoidHJ1b25nbWluaCIsImEiOiJja2liaDg0OWIwemlrMzF0Z29xODlibXV6In0.EcveCumo02PncrX33I9yDw"; // Set your mapbox token here
const geolocateStyle = {
	top: 0,
	right: 0,
	marginTop: 20,
};

const roomsArr = [
	[
		{
			title: "Lily - LAURA Studio❣️CENTER of BADINH❣️",
			description: "1 Bedroom Private Pool Villa - Entire Villa",
			rating: 4.53,
			reviewQuantity: 67,
			sale: 999,
			price: 10,
			timeStaying: "đêm",
		},
		{
			title:
				"Sextant | Waterfront Chateau | Pool + Hot Tub | Directly on the Miami River",
			description: "2 Bedroom with King Bed - Pool - Hot tub",
			rating: 4.73,
			reviewQuantity: 69,
			sale: 1299,
			price: 269,
			timeStaying: "đêm",
		},
	],
	[
		{
			title: "Casa Indigo - Costa Rica",
			description: "Spanish Colonial villa on the bay",
			rating: 4.9,
			reviewQuantity: 2,
			price: 1100,
			timeStaying: "đêm",
		},
		{
			title: "Saddle Peak - California",
			description: "Luxury stay in Topanga, California, United States",
			rating: 5.0,
			reviewQuantity: 22,
			price: 1200,
			timeStaying: "đêm",
		},
	],
];

const Products = () => {
	const [viewport, setViewport] = useState({
		latitude: 21.018434,
		longitude: 106.816845,
		zoom: 8,
	});
	const geocoderContainerRef = useRef();
	const mapRef = useRef();
	const handleViewportChange = useCallback(
		(newViewport) => setViewport(newViewport),
		[]
	);

	return (
		<>
			<NavBar isTrans={false} />
			{/* <h1 className="products">Products</h1> */}
			<div style={{height: 80}} />
			{/* <div className="products-container"> */}
			<main className="clearfix">
				<div className="area-container">
					<h3 className="area-title">Hội An</h3>
					<div className="cards__wrapper">
						{roomsArr.map((rooms) => {
							return (
								<ul className="cards__items_verti">
									{rooms.map((room) => {
										return (
											<CardCarousel
												path="/products"
												title={room.title}
												description={room.description}
												rating={room.rating}
												reviewQuantity={room.reviewQuantity}
												sale={room.sale}
												price={room.price}
												timeStaying={room.timeStaying}
											/>
										);
									})}
								</ul>
							);
						})}
						<ul className="cards__items_verti"></ul>
					</div>
				</div>
				<div className="map-container">
					<div
						ref={geocoderContainerRef}
						className="map-searchbox"
						style={{
							position: "absolute",
							zIndex: 1,
							transform: "translate(50px, 20px)",
							width: "50%",
						}}
					/>
					<MapGL
						ref={mapRef}
						{...viewport}
						width="100%"
						height="100%"
						onViewportChange={handleViewportChange}
						mapboxApiAccessToken={MAPBOX_TOKEN}
					>
						<Geocoder
							mapRef={mapRef}
							containerRef={geocoderContainerRef}
							onViewportChange={handleViewportChange}
							mapboxApiAccessToken={MAPBOX_TOKEN}
							position="top-left"
						/>

						<div className="map-nav" style={navStyle}>
							<div>
								<NavigationControl
									onViewportChange={(viewport) => this.setState({viewport})}
								/>
							</div>
							<div>
								<GeolocateControl
									style={geolocateStyle}
									positionOptions={{enableHighAccuracy: true}}
									trackUserLocation={true}
								/>
							</div>
						</div>
					</MapGL>
				</div>
			</main>
		</>
	);
};

export default Products;
const navStyle = {
	position: "absolute",
	top: 0,
	right: 0,
	padding: "20px",
	marginBottom: "20px",
};
