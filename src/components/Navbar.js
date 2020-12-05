import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom';
import Logo from "./Logo";
import "./Navbar.css";

const changeLogoColor = (color) => {
	const texts = document.querySelectorAll(".logo-font");
	texts.forEach((text) => text.setAttribute("style", `fill: ${color}`));
};

var isTrans = true;

window.onscroll = () => {
	if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
		// thêm .navbar-transparent khỏi component navbar
		changeLogoColor("#2B3647");
		document.getElementById("navbar").classList.remove("navbar-transparent");
	} else {
		// bỏ .navbar-transparent khỏi component navbar
		changeLogoColor("#FFFFFF");
		document.getElementById("navbar").classList.add("navbar-transparent");
	}
};

function Navbar() {
	const [click, setClick] = useState(false);
	// const [button, setButton] = useState(true);  
	const history = useHistory();
	const [destination, setDestination] = useState("");

	const closeMobileMenu = () => setClick(false);
	const handleChangeDestination = ({target}) => {
		setDestination(target.value);
	};
	// const toProducts = () => {
	// 	window.
	// }
	const handleOnClickSearch = () => history.push("/products");
	return (
		<>
			<nav className="navbar navbar-transparent" id="navbar">
				<div className="navbar-container">
					<a href="/" className="navbar-logo" onClick={closeMobileMenu}>
						<Logo />
					</a>
					<form className="nav-search-box">
						<input
							type="text"
							name="search-value"
							placeholder="Điểm đến mơ ước của bạn?"
							onChange={handleChangeDestination}
						/>
						<button onClick={handleOnClickSearch}>
							<i class="fas fa-search"></i>
						</button>
					</form>
					<div className="nav-item">
						<a href="/hosts" className="nav-links" onClick={closeMobileMenu}>
							Trở thành chủ nhà
						</a>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
