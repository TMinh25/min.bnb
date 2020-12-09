import React, {useEffect, useState, useRef, useCallback} from "react";
import NavBar from "../Navbar";
import ImageSlider from "../ImageSlider";
import Calendar from "react-date-range-calendar";
import "./RoomDetails.css";
import "./Hosts.css";
import MapGL, {NavigationControl, GeolocateControl} from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import {Link} from "react-router-dom";
import ProgressBar from "../ProgressBar";
import Avatar from "avataaars";
import {Lily, Sextant, CasaIndigo, SaddlePeak} from "../images";
import CardCarousel from "../Card";
// import QRCode from "qrcode.react";
import QRCode from "react-qr-code";

const MAPBOX_TOKEN =
	"pk.eyJ1IjoidHJ1b25nbWluaCIsImEiOiJja2liaDg0OWIwemlrMzF0Z29xODlibXV6In0.EcveCumo02PncrX33I9yDw"; // Set your mapbox token here

const geolocateStyle = {
	top: 0,
	right: 0,
	marginTop: 10,
};

const userReviews = [
	{
		name: "Nguyễn Trường Minh",
		dateReview: "25/10/2020",
		review:
			"Nice stay. If you're looking for quiet place with friendly people, this is the one. I recommend you to ride bike around to see attractions. Spending 1 whole day with a bike, you'll expeirence most of good places in Ninh Binh.",
		avatar: {
			avatarStyle: "Circle",
			topType: "LongHairNotTooLong",
			accessoriesType: "Wayfarers",
			hairColor: "Red",
			facialHairType: "MoustacheFancy",
			facialHairColor: "Black",
			clotheType: "BlazerShirt",
			eyeType: "Squint",
			eyebrowType: "RaisedExcited",
			mouthType: "Serious",
			skinColor: "Brown",
		},
	},
	{
		name: "Vũ Nguyễn Đức Khôi",
		dateReview: "22/2/2020",
		review:
			"This is a great place, central to all the must see locations. It's also very clean and the hosts ate warm and friendly.",

		avatar: {
			avatarStyle: "Circle",
			topType: "WinterHat4",
			accessoriesType: "Blank",
			hatColor: "Pink",
			facialHairType: "MoustacheMagnum",
			facialHairColor: "Red",
			clotheType: "BlazerShirt",
			clotheColor: "Red",
			eyeType: "Default",
			eyebrowType: "Default",
			mouthType: "Tongue",
			skinColor: "Black",
		},
	},
	{
		name: "Lê Mạnh Đức",
		dateReview: "1/11/2020",
		review:
			"Chủ nhà rất nhiệt tình, dễ thương, thân thiện. Vị trí thuận tiện, đẹp.",

		avatar: {
			avatarStyle: "Circle",
			topType: "WinterHat4",
			accessoriesType: "Sunglasses",
			hatColor: "Gray01",
			facialHairType: "BeardMagestic",
			facialHairColor: "BrownDark",
			clotheType: "Overall",
			clotheColor: "PastelRed",
			eyeType: "Dizzy",
			eyebrowType: "UpDown",
			mouthType: "Twinkle",
			skinColor: "Brown",
		},
	},
	{
		name: "Nguyễn Huyền Thư",
		dateReview: "20/3/2020",
		review:
			"We were pleasantly surprised by how quiet and peaceful it was. Ninh binh is so lovely. We slept very well. Loved watching the ducks whilst having breakfast.",

		avatar: {
			avatarStyle: "Circle",
			topType: "ShortHairShortCurly",
			accessoriesType: "Round",
			hairColor: "Black",
			facialHairType: "Blank",
			facialHairColor: "BrownDark",
			clotheType: "Hoodie",
			clotheColor: "PastelRed",
			eyeType: "Close",
			eyebrowType: "RaisedExcited",
			mouthType: "Tongue",
			skinColor: "Pale",
		},
	},
];

const rooms = [
	{
		title: "Lily - LAURA Studio❣️CENTER of BADINH❣️",
		description: "1 Bedroom Private Pool Villa - Entire Villa",
		address: "Thành phố Hạ Long, Quảng Ninh, Việt Nam",
		host: "Trường Minh",
		rating: 4.53,
		reviewQuantity: 67,
		sale: 999,
		price: 10,
		timeStaying: "đêm",
		images: Lily,
	},
	{
		title:
			"Sextant | Waterfront Chateau | Pool + Hot Tub | Directly on the Miami River",
		description: "2 Bedroom with King Bed - Pool - Hot tub",
		address: "Thành phố Miami, Florida, Hoa Kì",
		host: "Trường Minh",
		rating: 4.73,
		reviewQuantity: 69,
		sale: 1299,
		price: 269,
		timeStaying: "đêm",
		images: Sextant,
	},
	{
		title: "Casa Indigo - Costa Rica",
		description: "Spanish Colonial villa on the bay",
		address: "Costa Rica, Tây Ban Nha",
		host: "Trường Minh",
		rating: 4.9,
		reviewQuantity: 2,
		price: 1100,
		timeStaying: "đêm",
		images: CasaIndigo,
	},
	{
		title: "Saddle Peak - California",
		description: "Luxury stay in Topanga, California, United States",
		address: "Topanga, California, Hoa Kỳ",
		host: "Trường Minh",
		rating: 5.0,
		reviewQuantity: 22,
		price: 1200,
		timeStaying: "đêm",
		images: SaddlePeak,
	},
];

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

function generateReserveNumber() {
	var length = 16,
		charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
		retVal = "";
	for (var i = 0, n = charset.length; i < length; ++i) {
		retVal += charset.charAt(Math.floor(Math.random() * n));
	}
	return retVal;
}

const RoomDetails = (props) => {
	const roomDetails = props.location.state;

	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
	const [timeRange, setTimeRange] = useState();
	const [guests, setGuests] = useState(1);

	const valueQRCode = generateReserveNumber();

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

	// const handleClickAddress = () => {};

	const handleOnSelectCalendar = (startDate, endDate, validDateRange) => {
		// console.log(startDate, endDate, validDateRange.length);
		setStartDate(startDate);
		setEndDate(endDate);
		setTimeRange(validDateRange.length);
		console.log(startDate, endDate);
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

	const randomIntFromInterval = (min, max) => {
		// min and max included
		return Math.random() * (max - min) + min;
	};

	// useEffect(() => {
	// 	// window.scrollTo(0, 0);
	// 	console.log("room details:");
	// 	console.log(roomDetails);
	// }, [roomDetails]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		var modal = document.getElementById("myModal");
		var btn = document.getElementById("reserve-btn");
		var span = document.getElementsByClassName("close")[0];
		// When the user clicks the button, open the modal
		btn.onclick = function () {
			modal.style.display = "block";
		};
		// When the user clicks on <span> (x), close the modal
		span.onclick = function () {
			modal.style.display = "none";
		};
		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function (event) {
			if (event.target === modal) {
				modal.style.display = "none";
			}
		};
	}, []);

	useEffect(() => {
		console.log(valueQRCode);
	}, [valueQRCode]);

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
								<span className="address-link"> · {roomDetails.address}</span>
							) : (
								<span className="address-link">
									{" "}
									· Thành phố Hạ Long, Quảng Ninh, Việt Nam
								</span>
							)}
						</p>
						<div className="images-container">
							<ImageSlider
								autoplay={true}
								duration={3000}
								images={roomDetails.images}
							/>
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
										<img
											src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Sunglasses&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=CollarSweater&clotheColor=Gray01&eyeType=Cry&eyebrowType=SadConcernedNatural&mouthType=Eating&skinColor=Light"
											alt="avatar"
										/>
									) : Math.floor(Math.random() * 2) === 0 ? (
										<img
											src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Sunglasses&hairColor=Black&facialHairType=Blank&facialHairColor=Platinum&clotheType=ShirtVNeck&clotheColor=Blue02&graphicType=Resist&eyeType=Side&eyebrowType=AngryNatural&mouthType=Serious&skinColor=Black"
											alt="avatar"
										/>
									) : (
										<img
											src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShaggyMullet&accessoriesType=Blank&hatColor=Black&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=Red&clotheType=GraphicShirt&clotheColor=Black&graphicType=Cumbia&eyeType=Dizzy&eyebrowType=RaisedExcitedNatural&mouthType=Tongue&skinColor=Tanned"
											alt="avatar"
										/>
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
								tdCssObj={{
									fontSize: "14px",
									width: "14.29%",
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
										{timeRange && (
											<>
												<div className="fee">
													<p>
														${roomDetails.price} x {timeRange}{" "}
														{roomDetails.timeStaying}
													</p>
													<p>${timeRange * roomDetails.price}</p>
												</div>
												<div className="fee">
													<p>Phí dịch vụ</p>
													<p>$0</p>
												</div>
												<div className="total-cost">
													<p>Tổng Cộng: </p>
													<p>${timeRange * roomDetails.price}</p>
												</div>
											</>
										)}
										<div className="start-btn" id="reserve-btn">
											Đặt Phòng
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
				<div className="review">
					<h5>
						<i style={{color: "#0BB5CE"}} className="fas fa-star" />
						{roomDetails.rating && roomDetails.reviewQuantity
							? ` ${roomDetails.rating.toFixed(1)} (${
									roomDetails.reviewQuantity
							  } đánh giá)`
							: " Chưa có review"}
					</h5>
					<div className="review-container clearfix">
						<li>
							<div>Độ sạch sẽ</div>
							<div>
								<ProgressBar
									bgcolor="#0BB5CE"
									completed={randomIntFromInterval(4, 5) / 0.06}
								/>
							</div>
						</li>
						<li>
							<div>Thái độ giao tiếp</div>
							<div>
								<ProgressBar
									bgcolor="#0BB5CE"
									completed={randomIntFromInterval(4, 5) / 0.06}
								/>
							</div>
						</li>
						<li>
							<div>Check-in</div>
							<div>
								<ProgressBar
									bgcolor="#0BB5CE"
									completed={randomIntFromInterval(4, 5) / 0.06}
								/>
							</div>
						</li>
						<li>
							<div>Miêu tả chính xác</div>
							<div>
								<ProgressBar
									bgcolor="#0BB5CE"
									completed={randomIntFromInterval(4, 5) / 0.06}
								/>
							</div>
						</li>
						<li>
							<div>Không gian</div>
							<div>
								<ProgressBar
									bgcolor="#0BB5CE"
									completed={randomIntFromInterval(4, 5) / 0.06}
								/>
							</div>
						</li>
						<li>
							<div>Giá trị</div>
							<div>
								<ProgressBar
									bgcolor="#0BB5CE"
									completed={randomIntFromInterval(4, 5) / 0.06}
								/>
							</div>
						</li>
					</div>
					<div className="review-details clearfix">
						{userReviews.map((userReview) => {
							return (
								<li>
									<Link
										to={{
											pathname: "/user-details",
											state: userReview,
										}}
									>
										<div className="review-detail-avatar">
											<div>
												<Avatar
													{...userReview.avatar}
													style={{width: "70px", height: "70px"}}
												/>
											</div>
											<div>
												<h4>{userReview.name}</h4>
												<p>{userReview.dateReview}</p>
											</div>
										</div>
									</Link>
									<div>
										<p>{userReview.review}</p>
									</div>
								</li>
							);
						})}
					</div>
				</div>
				<div className="things-to-know">
					<h3 className="things-to-know-title">Điều cần biết</h3>
					<div className="things-know">
						<li>
							<h6>Gia quy</h6>
							<li>
								<i className="far fa-clock"></i> Checkin sau 2:00 PM.
							</li>
						</li>
						<li>
							<h6>An toàn và sức khỏe</h6>
							<li>
								<i className="fas fa-spray-can"></i> Giãn cách xã hội của Minbnb
								và một số hướng dẫn liên quan đến COVID-19 được áp dụng.
							</li>
							<li>
								<i className="fas fa-question-circle"></i> Báo động khói không
								được báo cáo.
							</li>
						</li>
						<li>
							<h6>Chính sách hủy đặt</h6>
							<li>
								<i className="fas fa-question-circle"></i> Thêm ngày đi của bạn
								để biết thêm về chính sách hủy đặt phòng.
							</li>
						</li>
					</div>
				</div>
				<div style={{padding: "0 20px"}}>
					<div className="area-header">
						<h3 className="area-title">Gợi ý thêm cho bạn</h3>
					</div>
					<div className="cards__wrapper">
						<ul className="cards__items_verti">
							{shuffle(rooms).map((room) => {
								return (
									<CardCarousel
										path="/room-details"
										title={room.title}
										description={room.description}
										address={room.address}
										host={room.host}
										rating={room.rating}
										reviewQuantity={room.reviewQuantity}
										sale={room.sale}
										price={room.price}
										timeStaying={room.timeStaying}
										images={room.images}
									/>
								);
							})}
						</ul>
					</div>
				</div>

				<div id="myModal" class="modal">
					{/* <!-- Modal content --> */}
					<div className="modal-content">
						<div className="modal-header">
							<span class="close">&times;</span>
						</div>
						<div className="modal-body">
							<div className="modal-QR-content">
								{startDate && endDate ? (
									<>
										<h5>Mã QR này dùng để check-in</h5>
										<p>Hãy lưu hoặc chụp lại mã này</p>
										<p className="note">
											Lưu ý: không được chia sẻ cho ai mã này
										</p>
										<QRCode value={valueQRCode} />
										{startDate && endDate && (
											<p className="note">
												{startDate} - {endDate}
											</p>
										)}
									</>
								) : (
									<h4 style={{margin: "30px 0"}}>
										Vui lòng chọn ngày đến và ngày đi của bạn để bắt đầu đặt
										phòng
									</h4>
								)}
							</div>
						</div>
					</div>
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
