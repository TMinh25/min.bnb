import React, {useState, useRef, useCallback, useEffect} from "react";
import NavBar from "../Navbar";
import MapGL, {NavigationControl, GeolocateControl, Marker} from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import "./NearBy.css";
import {Link} from "react-router-dom";
import ProductForNearBy from "../ProductForNearBy";
import axios from "axios";

const MAPBOX_TOKEN =
	"pk.eyJ1IjoidHJ1b25nbWluaCIsImEiOiJja2liaDg0OWIwemlrMzF0Z29xODlibXV6In0.EcveCumo02PncrX33I9yDw"; // Set your mapbox token here

const geolocateStyle = {
	top: 0,
	right: 0,
	marginTop: 10,
};

const LOCATION = {
	lat: 21.018434,
	lng: 106.816845,
};

// const CENTER = [LOCATION.lat, LOCATION.lng];

const DEFAULT_ZOOM = 6;

const NearBy = (props) => {
	const [viewport, setViewport] = useState({
		latitude: LOCATION.lat,
		longitude: LOCATION.lng,
		zoom: DEFAULT_ZOOM,
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
	const mapStyle = "mapbox://styles/truongminh/ckicqzsql0bpi1atb3byyzfky";
	const [toCoronaMap, setToCoronaMap] = useState(false);

	const changeMapStyle = () => {
		setToCoronaMap((prev) => !prev);
	};

	// const handleOnResultsMap = ({results}) => {};

	const locationState = props.location.state;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		while (geocoderContainerRef.current.lastElementChild) {
			geocoderContainerRef.current.removeChild(
				geocoderContainerRef.current.lastElementChild
			);
		}
	}, [toCoronaMap]);

	const [dataCorona, setDataCorona] = useState();
	
	// useEffect(async () => {
	// 	try {
	// 		const result = await axios
	// 			.get("https://corona.lmao.ninja/v3/covid-19/countries")
	// 			.then((response) => {
	// 				const {data = []} = response;
	// 				return data.map((nation) => {
	// 					const {countryInfo} = nation;
	// 					let updatedFormatted;
	// 					let casesString = "";

	// 					const {updated, cases, country} = nation;

	// 					if (updated) {
	// 						updatedFormatted = new Date(updated).toLocaleDateString();
	// 					}

	// 					if (cases > 1000000000) {
	// 						casesString = `${String(cases).slice(0, -9)}B+`;
	// 					} else if (cases > 1000000) {
	// 						casesString = `${String(cases).slice(0, -6)}K+`;
	// 					} else if (cases > 1000) {
	// 						casesString = `${String(cases).slice(0, -3)}M+`;
	// 					}

	// 					return {
	// 						reports: {
	// 							country: country,
	// 							cases: cases,
	// 							casesString: casesString,
	// 							updatedFormatted: updatedFormatted,
	// 						},
	// 						countryInfo: countryInfo,
	// 					};
	// 				});
	// 			});
	// 		setDataCorona(result);
	// 	} catch (error) {
	// 		console.log("Failed to get data from json: " + error.message);
	// 		return;
	// 	}
	// }, []);

	// useEffect(() => {
	// 	console.log("abc");
	// 	console.log(dataCorona);
	// 	if (dataCorona != undefined) {
	// 		dataCorona.map((element) => {
	// 			console.log(element.countryInfo.lat, element.countryInfo.long);
	// 		});
	// 		// console.log(dataCorona[0]);
	// 	}
	// }, [dataCorona]);

	return (
		<>
			<NavBar transparent={false} />
			{/* <h1 className="products">Products</h1> */}
			<div style={{height: 65}} />
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
					<div className="change-map-btn-container">
						<button className="change-map-btn" onClick={changeMapStyle}>
							<i className="fas fa-map"></i>
						</button>
					</div>
					{toCoronaMap ? (
						<iframe
							style={{width: "100%", height: "100%"}}
							src="https://coronavirus.app/map?embed=true"
							frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					) : (
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
							{/* {dataCorona != undefined &&
								dataCorona.map((country) => (
									<Marker
										// coordinates={[
										// 	country.countryInfo.long,
										// 	country.countryInfo.lat,
										// ]}
										coordinates={[-0.2416815, 51.5285582]}
										anchor="bottom"
									></Marker>
								))} */}
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
							</div>
						</MapGL>
					)}
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
