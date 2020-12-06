import React from "react";
import NavBar from "../Navbar";

class Hosts extends React.Component {
	render() {
		return (
			<>
				<NavBar isTrans={true} />
				<h1 className="hosts">Làm chủ bản thân bạn</h1>
			</>
		);
	}
}

export default Hosts;
