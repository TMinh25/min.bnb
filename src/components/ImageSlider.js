import React from "react";
import "react-slideshow-image/dist/styles.css";
import "./ImageSlider.css";
import {Slide} from "react-slideshow-image";
import {images} from "./images";

class ImageSlider extends React.Component {
	constructor() {
		super();
		this.slideRef = React.createRef();
		this.back = this.goback.bind(this);
		this.next = this.goNext.bind(this);
		this.state = {
			current: 0,
			showNav: false,
		};
	}
	goback() {
		this.slideRef.current.goBack();
	}

	goNext() {
		this.slideRef.current.goNext();
	}
	render() {
		const properties = {
			duration: 5000,
			autoplay: false,
			transitionDuration: 500,
			arrows: false,
			infinite: true,
			easing: "ease",
			canSwipe: true,
			indicators: (i) => <div className="indicator"></div>,
		};
		return (
			<>
				<div
					className="slider-wrap"
					onMouseEnter={() => {
						this.state.showNav = true;
					}}
					onMouseLeave={() => {
						this.state.showNav = false;
					}}
				>
					<div className="img-slider-container">
						<Slide ref={this.slideRef} {...properties}>
							{images.map((each, index) => (
								<div key={index} className="slide-container">
									<img
										className="lazy slide-img"
										src={each}
										alt="destination"
									/>
								</div>
							))}
						</Slide>
					</div>
					<div
						// style={{visibility: this.state.showNav ? "visible" : "hidden"}}
						className="navigation-button"
					>
						<img
							src="images/left-arrow.svg"
							onClick={() => this.slideRef.current.goBack()}
						/>
						<img
							src="images/right-arrow.svg"
							onClick={() => this.slideRef.current.goNext()}
						/>
					</div>
				</div>
			</>
		);
	}
}

export const Image = (props) => {
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

export default ImageSlider;
