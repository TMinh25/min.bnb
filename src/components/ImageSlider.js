import React from "react";
import "react-slideshow-image/dist/styles.css";
import "./ImageSlider.css";
import {Slide} from "react-slideshow-image";
import {images} from "./images";

class ImageSlider extends React.Component {
	constructor(props) {
		super(props);
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
						this.setState({showNav: true});
					}}
					onMouseLeave={() => {
						this.setState({showNav: false});
					}}
				>
					<div className="img-slider-container">
						<Slide ref={this.slideRef} {...properties}>
							{this.props.images
								? this.props.images.map((each, index) => (
										<div key={index} className="slide-container">
											<img
												className="lazy slide-img"
												src={each}
												alt="destination"
											/>
										</div>
								  ))
								: images.map((each, index) => (
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
							alt="left arrow"
						/>
						<img
							src="images/right-arrow.svg"
							onClick={() => this.slideRef.current.goNext()}
							alt="right arrow"
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
				<img src={props.src} className="cards__item__img" alt="" />
			</div>
		</>
	);
};

export default ImageSlider;
