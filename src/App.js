import React from "react";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./components/pages/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Products from "./components/pages/Products";
import Hosts from "./components/pages/Hosts";
import NearBy from "./components/pages/NearBy";
import RoomDetails from "./components/pages/RoomDetails";
import UserDetails from "./components/pages/UserDetails";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route name="home" path="/" exact component={Home} />
					<Route name="products" path="/products" component={Products} />
					<Route name="near-by" path="/near-by" component={NearBy} />
					<Route name="hosts" path="/hosts" component={Hosts} />
					<Route
						name="room-details"
						path="/room-details"
						component={RoomDetails}
					/>
					<Route
						name="user-details"
						path="/user-details"
						component={UserDetails}
					/>
					<Route name="404-not-found" component={NotFound} />
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
