import React, {useState, useRef, useCallback} from "react";
import NavBar from "../Navbar";
import MapGL, {NavigationControl, GeolocateControl} from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import CardCarousel from "../Card";
import "./NearBy.css";
import {Lily, CasaIndigo, SaddlePeak, Sextant} from "../images";
import {Link} from "react-router-dom";

const MAPBOX_TOKEN =
	"pk.eyJ1IjoidHJ1b25nbWluaCIsImEiOiJja2liaDg0OWIwemlrMzF0Z29xODlibXV6In0.EcveCumo02PncrX33I9yDw"; // Set your mapbox token here

const geolocateStyle = {
	top: 0,
	right: 0,
	marginTop: 10,
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
			images: Lily,
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
			images: Sextant,
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
			images: CasaIndigo,
		},
		{
			title: "Saddle Peak - California",
			description: "Luxury stay in Topanga, California, United States",
			rating: 5.0,
			reviewQuantity: 22,
			price: 1200,
			timeStaying: "đêm",
			images: SaddlePeak,
		},
	],
];

const NearBy = () => {
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
	const handleGeocoderViewportChange = useCallback((newViewport) => {
		const geocoderDefaultOverrides = {transitionDuration: 1000};

		return handleViewportChange({
			...newViewport,
			...geocoderDefaultOverrides,
		});
	}, []);
	const [mapStyle, setMapStyle] = useState(
		"mapbox://styles/truongminh/ckicqzsql0bpi1atb3byyzfky"
		// mapbox://styles/truongminh/ckicrgoqu1dfd19n19g949z74
	);

	const changeMapStyle = () => {
		setMapStyle(
			mapStyle == "mapbox://styles/truongminh/ckicqzsql0bpi1atb3byyzfky"
				? "mapbox://styles/truongminh/ckicrgoqu1dfd19n19g949z74"
				: "mapbox://styles/truongminh/ckicqzsql0bpi1atb3byyzfky"
		);
	};
	return (
		<>
			<NavBar isTrans={false} />
			{/* <h1 className="products">Products</h1> */}
			<div style={{height: 80}} />
			{/* <div className="products-container"> */}
			<main>
				<div className="area-container">
					<div className="nearby-title">
						<p>300+ địa điểm</p>
						<h1>Những nơi ở gần bạn</h1>
						<ol>
							<li>
								<Link className="area-show-all filter" to="/products">
									Đặt phòng ngay
								</Link>
							</li>
							<li>
								<Link className="area-show-all filter" to="/products">
									Cả căn hộ
								</Link>
							</li>
							<li>
								<Link className="area-show-all filter" to="/products">
									Villa
								</Link>
							</li>
							<li>
								<Link className="area-show-all filter" to="/products">
									Chấp nhận vật nuôi
								</Link>
							</li>
							<li>
								<Link className="area-show-all filter" to="/products">
									Thêm bộ lọc...
								</Link>
							</li>
						</ol>
					</div>
					<div>
						<div className="area-header">
							<h3 className="area-title">Hạ Long</h3>
							<Link className="area-show-all" to="/products">
								Hiện tất cả
							</Link>
						</div>
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
													images={room.images}
												/>
											);
										})}
									</ul>
								);
							})}
							<ul className="cards__items_verti"></ul>
						</div>
						<div>
							<div className="area-header">
								<h3 className="area-title">Hội An</h3>
								<Link className="area-show-all" to="/products">
									Hiện tất cả
								</Link>
							</div>
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
														images={room.images}
													/>
												);
											})}
										</ul>
									);
								})}
								<ul className="cards__items_verti"></ul>
							</div>
						</div>
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
						mapStyle={mapStyle}
						onViewportChange={handleViewportChange}
						mapboxApiAccessToken={MAPBOX_TOKEN}
					>
						<Geocoder
							mapRef={mapRef}
							containerRef={geocoderContainerRef}
							onViewportChange={handleGeocoderViewportChange}
							// inputValue={this.props.location.query.search-value}
							mapboxApiAccessToken={MAPBOX_TOKEN}
							position="top-left"
						/>

						<div className="map-nav" style={navStyle}>
							<div>
								<NavigationControl onViewportChange={handleViewportChange} />
							</div>
							<div>
								<GeolocateControl
									style={geolocateStyle}
									positionOptions={{enableHighAccuracy: true}}
									trackUserLocation={true}
								/>
							</div>
							<div>
								<button className="change-map-btn" onClick={changeMapStyle}>
									<i class="fas fa-map"></i>
								</button>
							</div>
						</div>
					</MapGL>
				</div>
			</main>
		</>
	);
};

export default NearBy;
const navStyle = {
	position: "absolute",
	top: 0,
	right: 0,
	padding: "20px",
	marginBottom: "20px",
};
