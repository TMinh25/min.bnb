import React from "react";
import {Link} from "react-router-dom";
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
		this.handleChangeDestination = this.handleChangeDestination.bind(this);
		// this.handleOnClickSearch = this.handleOnClickSearch.bind(this);
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

	handleChangeDestination({target}) {
		this.setState({destination: target.value});
	}

	// handleOnClickSearch(event) {
	// 	// this.state.history.push("/products");
	// 	this.state.history.push(`/products?search-value=${this.state.destination}`);
	// 	// event.preventDefault();
	// }

	componentDidMount() {
		if (this.props.transparent) {
			window.addEventListener("scroll", this.scrollNavBar, false);
		}
		changeLogoColor("#2B3647");
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.scrollNavBar, false);
	}

	render() {
		return (
			<>
				<nav
					className={`navbar ${
						this.props.transparent ? "navbar-transparent" : ""
					}`}
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
								onChange={this.handleChangeDestination}
							/>
							{/* <button
								type="submit"
								//  onClick={this.handleOnClickSearch}
							> */}
							<Link
								className="search-button"
								type="submit"
								to={{
									pathname: "/near-by",
									state: {city: this.state.destination},
								}}
							>
								<i className="fas fa-search"></i>
							</Link>
							{/* </button> */}
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
