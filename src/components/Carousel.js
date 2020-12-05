import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import {images} from "./images";
import {Slide} from "react-slideshow-image";
import "./ImageSlider.css";
import "./Carousel.css";

function Carousel(props) {
	const [showNav, setShowNav] = React.useState(false);
	var slideRef = React.createRef();
	// const [slideRef, setSlideRed] = React.createRef();
	const properties = {
		duration: 5000,
		autoplay: false,
		transitionDuration: 500,
		arrows: true,
		infinite: true,
		easing: "ease",
		canSwipe: true,
		prevArrow: (
			<img
				style={{transform: `translateX(40px)`}}
				src="images/left-arrow.svg"
			/>
		),
		// prevArrow: <p>prev</p>,
		nextArrow: (
			<img
				style={{transform: `translateX(-40px)`}}
				src="images/right-arrow.svg"
			/>
		),
		// nextArrow: <p>next</p>,
		indicators: (i) => <div className="indicator"></div>,
	};
	return (
		<>
			<div
				className="cards__item"
				onMouseEnter={() => {
					setShowNav(true);
				}}
				onMouseLeave={() => {
					setShowNav(false);
				}}
			>
				{props.label ? (
					<figure className="cards__item__pic-wrap" data-category={props.label}>
						{/* <div className="slide-container"> */}
							<Slide ref={slideRef} {...properties}>
								{images.map((each, index) => (
									<div key={index} className="each-slide">
										<img
											className="lazy slide-img"
											src={each}
											alt="destination"
										/>
									</div>
								))}
							</Slide>
						{/* </div> */}
					</figure>
				) : (
					<SimpleImageSlider
						width={"100%"}
						height={"100%"}
						images={images}
						slideDuration={0.33}
						navStyle={2}
						showNavs={showNav}
						showBullets={showNav}
						useGPURender={true}
					/>
				)}
			</div>
		</>
	);
}

export const CarouselImage = (props) => {
	return (
		<>
			<div className="cards__item">
				<figure className="cards__item__pic-wrap" data-category={props.label}>
					{/* <div style={{width: "100%", height: "100%"}}> */}
					<img src={props.src} className="cards__item__img" />
					{/* </div> */}
				</figure>
			</div>
		</>
	);
};
export default Carousel;
