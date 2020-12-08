import React, {useEffect, useState, useRef, useCallback} from "react";
import NavBar from "../Navbar";
import ImageSlider from "../ImageSlider";
import Calendar from "react-date-range-calendar";
import "./RoomDetails.css";
import "./Hosts.css";
import MapGL, {NavigationControl, GeolocateControl} from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import {Link} from "react-router-dom";

const MAPBOX_TOKEN =
	"pk.eyJ1IjoidHJ1b25nbWluaCIsImEiOiJja2liaDg0OWIwemlrMzF0Z29xODlibXV6In0.EcveCumo02PncrX33I9yDw"; // Set your mapbox token here

const geolocateStyle = {
	top: 0,
	right: 0,
	marginTop: 10,
};

const RoomDetails = (props) => {
	const roomDetails = props.location.state;

	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
	const [timeRange, setTimeRange] = useState();
	const [total, setTotal] = useState();
	const [guests, setGuests] = useState(1);

	const [viewport, setViewport] = useState({
		latitude: 21.018434,
		longitude: 106.816845,
		zoom: 8,
	});
	const geocoderContainerRef = useRef();
	const mapRef = useRef();
	const handleViewportChange = useCallback(
		(newViewport) => setViewport(newViewport),
		[]
	);
	const handleGeocoderViewportChange = useCallback((newViewport) => {
		const geocoderDefaultOverrides = {transitionDuration: 1000};

		return handleViewportChange({
			...newViewport,
			...geocoderDefaultOverrides,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const [mapStyle, setMapStyle] = useState(
		"mapbox://styles/truongminh/ckicqzsql0bpi1atb3byyzfky"
		// mapbox://styles/truongminh/ckicrgoqu1dfd19n19g949z74
	);

	const changeMapStyle = () => {
		setMapStyle(
			mapStyle === "mapbox://styles/truongminh/ckicqzsql0bpi1atb3byyzfky"
				? "mapbox://styles/truongminh/ckicrgoqu1dfd19n19g949z74"
				: "mapbox://styles/truongminh/ckicqzsql0bpi1atb3byyzfky"
		);
	};

	const handleClickAddress = () => {};

	const handleOnSelectCalendar = (startDate, endDate, validDateRange) => {
		// console.log(startDate, endDate, validDateRange.length);
		setStartDate(startDate);
		setEndDate(endDate);
		setTimeRange(validDateRange.length);
		setTotal(roomDetails.price * validDateRange.length);
		console.log(startDate, endDate, total);
	};

	const handleMinusGuests = () => {
		setGuests((prev) => {
			if (prev === 1) {
				return;
			}
			if (prev > 1) {
				return prev - 1;
			}
			return;
		});
	};

	const handlePlusGuests = () => {
		setGuests((prev) => prev + 1);
	};

	useEffect(() => {
		console.log("room details:");
		console.log(roomDetails);
		console.log(total);
	}, [total]);

	return (
		<>
			<NavBar transparent={false} />
			<div style={{height: "100px"}} />
			<main>
				<div id="room-brief-details" className="room-brief-images">
					<div>
						<h2 className="room-title">{roomDetails.title}</h2>
						<p>
							<i style={{color: "#0BB5CE"}} className="fas fa-star" />
							{roomDetails.rating && roomDetails.reviewQuantity
								? ` ${roomDetails.rating.toFixed(1)} (${
										roomDetails.reviewQuantity
								  })`
								: " Chưa có review"}

							{roomDetails.address ? (
								<span onClick={handleClickAddress} className="address-link">
									{" "}
									· {roomDetails.address}
								</span>
							) : (
								<span onClick={handleClickAddress} className="address-link">
									{" "}
									· Thành phố Hạ Long, Quảng Ninh, Việt Nam
								</span>
							)}
						</p>
						<div className="images-container">
							<ImageSlider images={roomDetails.images} />
							<div className="host-brief">
								<div className="room-brief">
									<div>
										<h2 className="room-title">
											Cả căn hộ do{" "}
											{roomDetails.host ? roomDetails.host : "Trường Minh"} chủ
											trì
										</h2>
										{/* <h2>Cả căn hộ do Trường Minh chủ trì</h2> */}
										<p>
											{Math.ceil(Math.random() * 15)} khách ·{" "}
											{Math.ceil(Math.random() * 7)} phòng ngủ ·{" "}
											{Math.ceil(Math.random() * 10)} giường ·{" "}
											{Math.ceil(Math.random() * 9)} bồn tắm
										</p>
									</div>
								</div>
								<div className="avatar-host">
									<span class="helper"></span>
									{Math.floor(Math.random() * 3) === 0 ? (
										<img src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Sunglasses&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=CollarSweater&clotheColor=Gray01&eyeType=Cry&eyebrowType=SadConcernedNatural&mouthType=Eating&skinColor=Light" />
									) : Math.floor(Math.random() * 2) === 0 ? (
										<img src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Sunglasses&hairColor=Black&facialHairType=Blank&facialHairColor=Platinum&clotheType=ShirtVNeck&clotheColor=Blue02&graphicType=Resist&eyeType=Side&eyebrowType=AngryNatural&mouthType=Serious&skinColor=Black" />
									) : (
										<img src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShaggyMullet&accessoriesType=Blank&hatColor=Black&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=Red&clotheType=GraphicShirt&clotheColor=Black&graphicType=Cumbia&eyeType=Dizzy&eyebrowType=RaisedExcitedNatural&mouthType=Tongue&skinColor=Tanned" />
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="room-details">
					<div className="room-amenities">
						<div className="you-have">
							<li>
								<div>
									<i className="fas fa-home"></i>
								</div>
								<div>
									<h3>Cả căn hộ</h3>
									<p>Bạn sẽ có cả căn hộ tùy ý sử dụng</p>
								</div>
							</li>
							<li>
								<div>
									<i className="fas fa-hand-sparkles"></i>
								</div>
								<div>
									<h3>Được tăng cường làm sạch</h3>
									<p>
										Người chủ xác nhận hoàn thành 5 bước làm sạch tăng cường của
										Minbnb
									</p>
								</div>
							</li>
							<li>
								<div>
									<i className="fas fa-door-open"></i>
								</div>
								<div>
									<h3>Tự check-in</h3>
									<p>Bạn có thể check-in ngay cả với người giữ cửa</p>
								</div>
							</li>
							<li>
								<div>
									<i class="far fa-calendar"></i>
								</div>
								<div>
									<h3>Chính sách hủy đặt phòng</h3>
									<p>
										Chọn ngày đi của bạn để biết thêm về chính sách hủy bỏ đặt
										phòng
									</p>
								</div>
							</li>
							<li>
								<div>
									<i class="fas fa-book"></i>
								</div>
								<div>
									<h3>Gia quy</h3>
									<p>Người chủ không chấp nhận hút thuốc trong nhà</p>
								</div>
							</li>
						</div>
						<div>
							<p>
								Bạn được thuê 2 tòa nhà với sân vườn và hồ bơi lớn, bao gồm một
								nhà bếp được bài trí tươm tất, mọi thứ đều rất riêng tư với hàng
								rào bao quanh, lãng mạn và mới được xây dựng bởi một kiến ​​trúc
								sư người Bỉ có tình yêu với Hội An. Phía trước là không gian
								ruộng lúa bạt ngàn, sát sông Đế Võng mà bạn có thể đi bộ, 5 phút
								đến các bãi biển An Bàng, Cửa Đại, 8 phút đến trung tâm thành
								phố. Đây là những biệt thự riêng, không phải khách sạn, hoàn hảo
								cho những bữa tiệc bên hồ bơi, BBQ ngoài trời hay thư giãn giữa
								thiên nhiên.
							</p>
						</div>
						<div>
							<h3>Tiện nghi ngủ zzz</h3>
							<div className="bed-amenities">
								<li>
									<div>
										<i className="fas fa-bed"></i>
										<i className="fas fa-bed"></i>
									</div>
									<h4>Phòng ngủ 1</h4>
									<p>1 king bed, 1 queen bed</p>
								</li>
								<li>
									<div>
										<i className="fas fa-bed"></i>
										<i className="fas fa-couch"></i>
									</div>
									<h4>Phòng ngủ 2</h4>
									<p>1 king bed, 1 sofa bed</p>
								</li>
								<li>
									<div>
										<i className="fas fa-bed"></i>
									</div>
									<h4>Phòng ngủ 3</h4>
									<p>1 king bed</p>
								</li>
							</div>
						</div>
						<div>
							<h3>Tiện nghi của nhà</h3>
							<div className="house-amenities clearfix">
								<li>
									<p>
										<i className="fas fa-utensils"></i> Nhà bếp
									</p>
								</li>
								<li>
									<p>
										<i class="fas fa-thermometer-three-quarters"></i> Lò sưởi
									</p>
								</li>
								<li>
									<p>
										<i class="fas fa-eye"></i> Máy quay an ninh
									</p>
								</li>
								<li>
									<p>
										<i class="fas fa-wifi"></i> Wifi miễn phí
									</p>
								</li>
								<li>
									<p>
										<i class="fas fa-parking"></i> Khu đỗ xe được bảo vệ
									</p>
								</li>
								<li>
									<p>
										<i class="fas fa-swimmer"></i> Bể bơi
									</p>
								</li>
							</div>
						</div>

						<div className="checkin-date">
							<h3>Chọn ngày check-in và check-out của bạn</h3>
							<Calendar
								onHoverTdCssObj={{
									backgroundColor: "#0BB5CE",
									color: "white",
									cursor: "pointer",
								}}
								inRangedTdCssObj={{
									backgroundColor: "#dddddd",
									fontSize: "14px",
									color: "black",
								}}
								startDateTdCssObj={{
									backgroundColor: "#555555",
								}}
								endDateTdCssObj={{
									backgroundColor: "#555555",
								}}
								onSelect={handleOnSelectCalendar}
								leftArrowCss="background: #dddddd; &:hover {background: #0BB5CE}"
							/>
						</div>
					</div>
					<div className="check">
						<div className="check-availability">
							<div className="check-availability-card">
								<div className="available-card-header">
									<div>
										{roomDetails && roomDetails.price && roomDetails.timeStaying
											? `$${roomDetails.price} / ${roomDetails.timeStaying}`
											: "Liên hệ với người chủ"}
									</div>
									<div>
										{roomDetails &&
											roomDetails.rating &&
											roomDetails.reviewQuantity && (
												<>
													<i
														style={{color: "#0BB5CE"}}
														className="fas fa-star"
													/>
													{roomDetails.rating && roomDetails.reviewQuantity
														? ` ${roomDetails.rating.toFixed(1)} (${
																roomDetails.reviewQuantity
														  })`
														: " Chưa có review"}
												</>
											)}
									</div>
								</div>
								<div className="select-date-guest">
									<form>
										<div className="select-date">
											<div>
												<label htmlFor="startDate">Checkin</label>
												<input id="startDate" type="date" value={startDate} />
											</div>
											<div>
												<label htmlFor="endDate">Checkout</label>
												<input id="endDate" type="date" value={endDate} />
											</div>
										</div>
										<div className="select-guests">
											<label htmlFor="guests">Số khách</label>
											<input id="guests" type="text" value={guests} />
											<div className="minus-plus-guests">
												<p onClick={handleMinusGuests}>-</p>
												<p onClick={handlePlusGuests}>+</p>
											</div>
										</div>
										{total && (
											<>
												<div className="fee">
													<p>
														${roomDetails.price} x {timeRange}{" "}
														{roomDetails.timeStaying}
													</p>
													<p>${total}</p>
												</div>
												<div className="fee">
													<p>Phí dịch vụ</p>
													<p>$0</p>
												</div>
												<div className="total-cost">
													<p>Tổng Cộng: </p>
													<p>${total}</p>
												</div>
											</>
										)}
										<div className="start-btn">
											<Link>Đặt Phòng</Link>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="map-container-room-details">
					<h2
						style={{
							margin: "30px 0",
							borderTop: "1px solid #bbbbbb !important",
						}}
					>
						Địa chỉ:{" "}
						<span style={{fontSize: "30px", fontWeight: 400}}>
							{roomDetails.address}
						</span>
					</h2>
					<div
						ref={geocoderContainerRef}
						className="map-searchbox"
						style={{
							position: "absolute",
							zIndex: 1,
							transform: "translate(50px, 20px)",
							width: "50%",
						}}
					/>
					<MapGL
						ref={mapRef}
						{...viewport}
						width="100%"
						height="100%"
						mapStyle={mapStyle}
						onViewportChange={handleViewportChange}
						mapboxApiAccessToken={MAPBOX_TOKEN}
					>
						<Geocoder
							mapRef={mapRef}
							containerRef={geocoderContainerRef}
							onViewportChange={handleGeocoderViewportChange}
							inputValue={
								roomDetails && roomDetails.address ? roomDetails.address : null
							}
							clearOnBlur={true}
							clearAndBlurOnEsc={true}
							limit={6}
							marker={true}
							mapboxApiAccessToken={MAPBOX_TOKEN}
							position="top-left"
							// onResults={handleOnResultsMap}
						/>
						<div className="map-nav" style={navStyle}>
							<div>
								<NavigationControl onViewportChange={handleViewportChange} />
							</div>
							<div>
								<GeolocateControl
									style={geolocateStyle}
									positionOptions={{enableHighAccuracy: true}}
									trackUserLocation={true}
								/>
							</div>
							<div>
								<button className="change-map-btn" onClick={changeMapStyle}>
									<i className="fas fa-map"></i>
								</button>
							</div>
						</div>
					</MapGL>
				</div>
			</main>
		</>
	);
};

export default RoomDetails;

const navStyle = {
	position: "absolute",
	top: 0,
	right: 0,
	padding: "20px",
	marginBottom: "20px",
};
