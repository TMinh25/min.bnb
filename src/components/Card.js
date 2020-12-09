import React from "react";
import "./Card.css";
import ImageSlider, {Image} from "./ImageSlider";
import {Link} from "react-router-dom";

const CardCarousel = (props) => {
	return (
		<>
			<li>
				<ImageSlider images={props.images} />
				{props.header ? (
					<Link
						to={{
							pathname: props.path,
							state: props,
						}}
					>
						<h3 className="carousel-header">{props.header}</h3>
					</Link>
				) : (
					<Link
						to={{
							pathname: props.path,
							state: props,
						}}
					>
						<div className="carousel-content">
							<p>
								<i className="fas fa-star" />
								{props.rating && props.reviewQuantity
									? ` ${props.rating.toFixed(1)} (${props.reviewQuantity})`
									: " Chưa có review"}
							</p>
							<h4 className="carousel-title">{props.title}</h4>
							{props.description && (
								<p className="carousel-description">
									{props.description + "..."}
								</p>
							)}
							<p className="carousel-price">
								<strong>
									{props.sale && (
										<span className="price-sale">${props.sale}</span>
									)}
									{props.price && ` $${props.price} `}
								</strong>
								{props.timeStaying && `/ ${props.timeStaying}`}
							</p>
						</div>
					</Link>
				)}
			</li>
		</>
	);
};

export const CardImage = (props) => {
	return (
		<>
			<li>
				<Image src={props.src} />
				{props.header ? (
					<Link to={props.path}>
						<h3 className="carousel-header">{props.header}</h3>
					</Link>
				) : (
					<Link to={props.path}>
						<div className="carousel-content">
							<p>
								<i className="fas fa-star" />
								{props.rating && props.reviewQuantity
									? ` ${props.rating.toFixed(1)} (${props.reviewQuantity})`
									: " Chưa có review"}
							</p>
							<h4 className="carousel-title">{props.title}</h4>
							<p className="carousel-description">{props.description}</p>
							<p className="carousel-price">
								<strong>
									{props.sale && (
										<span className="price-sale">`$${props.sale}`</span>
									)}
									{props.price && `$${props.price} `}
								</strong>{" "}
								{props.timeStaying && `/ ${props.timeStaying}`}
							</p>
						</div>
					</Link>
				)}
			</li>
		</>
	);
};

export default CardCarousel;
