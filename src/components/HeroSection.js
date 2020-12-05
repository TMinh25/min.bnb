import React from "react";
import "../App.css";
import {Button} from "./Button";
import "./HeroSection.css";

function HeroSection() {
	return (
		<div className="hero-container">
			<video src="/videos/hero-video.mp4" autoPlay loop muted />
			<h1>Đến nơi nào đó gần</h1>
			<p>
				Khám phá các địa điểm gần bạn để sống, làm việc hoặc chỉ để thư giãn.
			</p>
			<div className="hero-btns">
				<Button
					className="btns"
					buttonStyle="btn--outline"
					buttonSize="btn--large"
				>
					Khám phá gần bạn
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;
