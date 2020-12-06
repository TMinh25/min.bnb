import React, {useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom";
import Logo from "./Logo";
import "./Navbar.css";

const changeLogoColor = (color) => {
	const texts = document.querySelectorAll(".logo-font");
	texts.forEach((text) => text.setAttribute("style", `fill: ${color}`));
};

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			destination: "",
		};
		this.scrollNavBar = this.scrollNavBar.bind(this);
	}

	scrollNavBar() {
		if (
			document.body.scrollTop > 10 ||
			document.documentElement.scrollTop > 10
		) {
			// thêm .navbar-transparent khỏi component navbar
			changeLogoColor("#2B3647");
			document.getElementById("navbar").classList.remove("navbar-transparent");
		} else {
			// bỏ .navbar-transparent khỏi component navbar
			changeLogoColor("#FFFFFF");
			document.getElementById("navbar").classList.add("navbar-transparent");
		}
	}

	componentDidMount() {
		if (this.props.isTrans) {
			window.addEventListener("scroll", this.scrollNavBar, false);
		}
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.scrollNavBar, false);
	}

	render() {
		function handleChangeDestination(event) {
			this.setState({destination: event.target.value});
		}

		function handleOnClickSearch(event) {
			this.state.history.push("/products");
			event.preventDefault();
		}

		return (
			<>
				<nav
					className={`navbar ${this.props.isTrans && "navbar-transparent"}`}
					id="navbar"
				>
					<div className="navbar-container">
						<Link to="/" className="navbar-logo">
							<Logo />
						</Link>
						<form className="nav-search-box">
							<input
								type="text"
								name="search-value"
								value={this.state.destination}
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
}

export default Navbar;
