import React, {useEffect} from "react";
import NavBar from "../Navbar";
import Avatar from "avataaars";
import "./UserDetails.css";
import ProductForNearBy from "../ProductForNearBy";

const UserDetails = (props) => {
	const userState = props.location.state;
	const userLastName = userState.name.split(" ")[
		userState.name.split(" ").length - 1
	];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleShowMoreLess = () => {
		var dots = document.getElementById("dots");
		var moreText = document.getElementById("more");
		var btnText = document.getElementById("show-more-less-btn");

		if (dots.style.display === "none") {
			dots.style.display = "inline";
			btnText.innerHTML = "Thêm";
			moreText.style.display = "none";
		} else {
			dots.style.display = "none";
			btnText.innerHTML = "Bớt";
			moreText.style.display = "inline";
		}
	};

	// useEffect(() => {
	// 	var text = document.getElementById("user-bio-detail").innerHTML;
	// 	var textArr = text.split(" ");
	// 	var defaultText = textArr.slice(0, 20).join(" ");
	// 	var moreText = textArr.slice(20).join(" ");
	// 	var bioNode = document.getElementById("user-bio-detail");
	// 	bioNode.innerHTML = defaultText;
	// 	bioNode.appendChild(
	// 		document.createElement("span").appendChild(document.createTextNode("..."))
	// 	);
	// }, []);

	return (
		<>
			<NavBar transparent={false} />
			<div style={{height: "80px"}} />
			<main className="main-user-details">
				<div className="left-card">
					{/* <div className="left-card-avatar"> */}
					<Avatar
						style={{
							width: "140px",
							height: "140px",
							display: "block",
							margin: "auto",
						}}
						{...userState.avatar}
					/>
					{/* </div> */}
					<div className="left-card-info">
						<div>
							<li>
								<i className="far fa-star"></i> 301 phản hồi
							</li>
							<li>
								<i className="fas fa-user-shield"></i> Đã xác minh danh tính
							</li>
						</div>
						<div className="confirmed">
							<h4>{userLastName} đã xác minh</h4>
							<div className="user-confirmed">
								<li>
									<i class="fas fa-check"></i> Danh tính
								</li>
								<li>
									<i class="fas fa-check"></i> Email
								</li>
								<li>
									<i class="fas fa-check"></i> Số điện thoại
								</li>
							</div>
						</div>
						<p style={{fontSize: "14px"}}>
							Tìm hiểu thêm về cách xác nhận thông tin tài khoản giúp bảo mật
							cộng đồng Minbnb.
						</p>
					</div>
				</div>
				<div className="main-content-user-details">
					<div className="user-hello">
						<h2>Xin chào, tôi là {userLastName}</h2>
						<p>Đã tham gia vào 2020</p>
					</div>
					<div className="user-bio">
						<h5>Tiểu sử</h5>
						<p className="user-bio-detail" id="user-bio-detail">
							Hi my friends! <br /> I’m so happy to invite you to enjoy our
							home. We wanted to create a space<span id="dots">...</span>
							<span id="more">
								{" "}
								where people feel completely comfortable and at home. <br />{" "}
								Each studio apartment is located in the mini building so near
								old quarter and downtown. This building was built and is
								operated by own family. We'll try to account for every detail,
								big and small to delight you and give you a neat, clean, safe,
								affordable, cozy environment. <br /> We hope that the studio
								apartments make your experience unforgettable.
							</span>{" "}
							<span id="show-more-less-btn" onClick={handleShowMoreLess}>
								Thêm
							</span>
						</p>
						<li>
							<i class="fas fa-home"></i> Sống tại Hạ Long
						</li>
						<li>
							<i class="far fa-comment-dots"></i> Nói tiếng anh, tiếng việt
						</li>
						<li>
							<i class="fas fa-briefcase"></i> Công việc: IT
						</li>
					</div>
					<div className="user-listing">
						<h5>Danh sách cho thuê của {userLastName}</h5>
						<ProductForNearBy host={userState.name} />
					</div>
				</div>
			</main>
		</>
	);
};

export default UserDetails;
