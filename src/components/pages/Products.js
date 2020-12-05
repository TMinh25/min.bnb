import React, {useState, useRef, useCallback} from "react";
import MapGL, {NavigationControl, GeolocateControl} from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

const MAPBOX_TOKEN =
	"pk.eyJ1IjoidHJ1b25nbWluaCIsImEiOiJja2liaDg0OWIwemlrMzF0Z29xODlibXV6In0.EcveCumo02PncrX33I9yDw"; // Set your mapbox token here
const geolocateStyle = {
	top: 0,
	right: 0,
	marginTop: 20,
};
// export default class Products extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			viewport: {
// 				latitude: 17.44212,
// 				longitude: 78.391384,
// 				zoom: 14,
// 				bearing: 0,
// 				pitch: 0,
// 				width: "40%",
// 				height: 500,
// 			},
// 		};
// 	}

// 	_onViewportChange = (viewport) => this.setState({viewport});

// 	render() {
// 		const {viewport} = this.state;
// 		return (
// 			<>
// 				<h1 className="products">Products</h1>
// 				<MapGL
// 					{...viewport}
// 					onViewportChange={(viewport) => this.setState({viewport})}
// 					mapStyle="mapbox://styles/mapbox/light-v10"
// 					mapboxApiAccessToken={MAPBOX_TOKEN}
// 				>
// 					<div className="map-nav" style={navStyle}>
// 						<div>
// 							<NavigationControl
// 								onViewportChange={(viewport) => this.setState({viewport})}
// 							/>
// 						</div>
// 						<div>
// 							<GeolocateControl
// 								style={geolocateStyle}
// 								positionOptions={{enableHighAccuracy: true}}
// 								trackUserLocation={true}
// 							/>
// 						</div>
// 					</div>
// 				</MapGL>
// 			</>
// 		);
// 	}
// }

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
			<h1 className="products">Products</h1>
			<div className="map-container" style={{height: "100vh"}}>
				<div
					ref={geocoderContainerRef}
					className="map-searchbox"
					style={{
						position: "absolute",
						zIndex: 1,
						transform: "translate(50px, 20px)",
						// width: "50%",
					}}
				/>
				<MapGL
					ref={mapRef}
					{...viewport}
					width="50%"
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
