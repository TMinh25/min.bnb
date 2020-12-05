import React, {useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom";
import Logo from "./Logo";
import "./Navbar.css";

const changeLogoColor = (color) => {
	const texts = document.querySelectorAll(".logo-font");
	texts.forEach((text) => text.setAttribute("style", `fill: ${color}`));
};

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

function Navbar(props) {
	// const [button, setButton] = useState(true);
	const history = useHistory();
	const [destination, setDestination] = useState("");

	// const closeMobileMenu = () => setClick(false);
	const handleChangeDestination = ({target}) => {
		setDestination(target.value);
	};

	const handleOnClickSearch = () => history.push("/products");
	return (
		<>
			<nav className="navbar navbar-transparent" id="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo">
						<Logo />
					</Link>
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
						<Link to="/hosts" className="nav-links">
							Trở thành chủ nhà
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
