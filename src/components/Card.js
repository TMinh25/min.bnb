import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import "./Card.css";
import ImageSlider, {Image} from "./ImageSlider";

const CardCarousel = (props) => {
	const [canClick, setCanClick] = React.useState(false);
	return (
		<>
			<li>
				{/* Vô hiệu hóa link có thể ấn được nút chuyển ảnh */}
				<Link
					to={props.path}
					onClick={canClick ? null : (event) => event.preventDefault()}
				>
					<ImageSlider label={props.label} images={props.images} />
					{props.header ? (
						<h3 className="carousel-header">{props.header}</h3>
					) : (
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
					)}
				</Link>
			</li>
		</>
	);
};

export const CardImage = (props) => {
	return (
		<>
			<li>
				<Link to={props.path}>
					<Image src={props.src} label={props.label} />
					{props.header ? (
						<h3 className="carousel-header">{props.header}</h3>
					) : (
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
					)}
				</Link>
			</li>
		</>
	);
};

export default CardCarousel;
