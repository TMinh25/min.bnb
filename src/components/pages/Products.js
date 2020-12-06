import React from "react";
import "../../App.css";
import NavBar from "../Navbar";

export default function products() {
	return (
		<>
			<NavBar isTrans={true} />
			<h1 className="products">PRODUCTS</h1>
		</>
	);
}
