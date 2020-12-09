import React, {useState, useRef, useCallback, useEffect} from "react";
import NavBar from "../Navbar";
import MapGL, {NavigationControl, GeolocateControl} from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import "./NearBy.css";
import {Link} from "react-router-dom";
import ProductForNearBy from "../ProductForNearBy";

const MAPBOX_TOKEN =
	"pk.eyJ1IjoidHJ1b25nbWluaCIsImEiOiJja2liaDg0OWIwemlrMzF0Z29xODlibXV6In0.EcveCumo02PncrX33I9yDw"; // Set your mapbox token here

const geolocateStyle = {
	top: 0,
	right: 0,
	marginTop: 10,
};

const NearBy = (props) => {
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const [mapStyle, setMapStyle] = useState(
		"mapbox://styles/truongminh/ckicqzsql0bpi1atb3byyzfky"
		// mapbox://styles/truongminh/ckicrgoqu1dfd19n19g949z74
	);

	const changeMapStyle = () => {
		setMapStyle(
			mapStyle === "mapbox://styles/truongminh/ckicqzsql0bpi1atb3byyzfky"
				? "mapbox://styles/truongminh/ckicrgoqu1dfd19n19g949z74"
				: "mapbox://styles/truongminh/ckicqzsql0bpi1atb3byyzfky"
		);
	};

	const handleOnResultsMap = ({results}) => {};

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
			<main className="near-by-main">
				<div className="area-container">
					<div className="nearby-title">
						<p>300+ địa điểm</p>
						{locationState && locationState.city ? (
							<h1>{locationState.city}</h1>
						) : (
							<h1>Những địa điểm gần bạn</h1>
						)}
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
							{locationState && locationState.city ? (
								<h3 className="area-title">{locationState.city}</h3>
							) : (
								<h3 className="area-title">Hạ Long</h3>
							)}
							<Link
								className="area-show-all"
								to={{
									pathname: "/products",
									state: locationState,
								}}
							>
								Hiện tất cả
							</Link>
						</div>
						<ProductForNearBy />
						<ProductForNearBy />
						<ProductForNearBy />
					</div>

					<Link
						className="area-show-all"
						style={{
							margin: "20px auto",
							display: "block",
							width: "230px",
							textAlign: "center",
						}}
						to={{
							pathname: "/products",
							state: locationState,
						}}
					>
						Xem tất cả tại{" "}
						{locationState && locationState.city
							? locationState.city
							: "Hạ Long"}
					</Link>
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
							inputValue={
								locationState && locationState.city ? locationState.city : ""
							}
							clearOnBlur={true}
							clearAndBlurOnEsc={true}
							limit={6}
							marker={true}
							mapboxApiAccessToken={MAPBOX_TOKEN}
							position="top-left"
							// onResults={handleOnResultsMap}
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
									<i className="fas fa-map"></i>
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
