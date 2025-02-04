// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

// export function Button() {
//   return (
//     <Link to='sign-up'>
//       <button className='btn'>Sign Up</button>
//     </Link>
//   );
// }

import React from "react";
import "./Button.css";
import {Link} from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline", "btn--test", "btn--merge"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
	children,
	type,
	onClick,
	buttonStyle,
	buttonSize,
	color,
	style,
	LinkTo,
}) => {
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];

	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

	return (
		<Link to={LinkTo} className="btn-link">
			<button
				className={`btn ${checkButtonStyle} ${checkButtonSize} ${
					color === "black" ? "btn-black" : "btn-white"
				}`}
				onClick={onClick}
				type={type}
				style={style}
			>
				{children}
			</button>
		</Link>
	);
};
