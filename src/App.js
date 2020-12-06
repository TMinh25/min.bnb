import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./components/pages/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Hosts from "./components/pages/Hosts";
import NearBy from "./components/pages/NearBy";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route name="home" path="/" exact component={Home} />
					<Route name="services" path="/services" component={Services} />
					<Route name="products" path="/products" component={Products} />
					<Route name="nearby" path="/near-by" component={NearBy} />
					<Route name="hosts" path="/hosts" component={Hosts} />
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
