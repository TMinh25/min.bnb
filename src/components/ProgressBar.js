/* eslint-disable react/react-in-jsx-scope */

import React from "react";

const ProgressBar = (props) => {
	const {bgcolor, completed} = props;

	const containerStyles = {
		height: 6,
		width: "100%",
		backgroundColor: "#e0e0de",
		borderRadius: 50,
		// margin: 50,
	};

	const fillerStyles = {
		height: "100%",
		width: `${completed}%`,
		backgroundColor: bgcolor,
		borderRadius: "inherit",
		textAlign: "right",
	};

	return (
		<div style={containerStyles}>
			<div style={fillerStyles}></div>
		</div>
	);
};

export default ProgressBar;
