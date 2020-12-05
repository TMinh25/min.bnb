import React, {useEffect} from "react";
import "./Card.css";
import Carousel, {CarouselImage} from "./Carousel";
import ImageSlider, {Image} from "./ImageSlider";

const CardCarousel = (props) => {
	const [canClick, setCanClick] = React.useState(false);
	return (
		<>
			<li>
				{/* Vô hiệu hóa link có thể ấn được nút chuyển ảnh */}
				<a href={canClick ? props.path : "javascript:void(0)"}>
					{/* <a href="javascript:void(0)"> */}
					<ImageSlider label={props.label} />
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
				</a>
			</li>
		</>
	);
};

export const CardImage = (props) => {
	return (
		<>
			<li>
				<a href={props.path}>
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
				</a>
			</li>
		</>
	);
};

export default CardCarousel;
