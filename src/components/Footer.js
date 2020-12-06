import React from "react";
import "./Footer.css";
import {Button} from "./Button";
import Logo from "./Logo";
import {Link} from "react-router-dom";

function Footer() {
	const [email, setEmail] = React.useState("");

	const handleChange = ({target}) => {
		setEmail(target.value);
	};
	return (
		<footer className="footer-container">
			<section className="footer-subscription">
				<p className="footer-subscription-heading">
					Tham gia bản tin để nhận các ưu đãi kỳ nghỉ tốt nhất của chúng tôi
				</p>
				<p className="footer-subscription-text">
					Bạn có thể hủy đăng kí bất cứ lúc nào{" "}
				</p>
				<div className="input-areas">
					<form>
						<input
							className="footer-input"
							name="email"
							type="email"
							placeholder="example@me.com"
							onChange={handleChange}
						/>
						<Button
							type="submit"
							buttonStyle="btn--primary"
							color="black"
							onClick={() => alert(`Đăng kí thành công: ${email}`)}
							LinkTo="/"
						>
							Subscribe
						</Button>
					</form>
				</div>
			</section>
			<div class="footer-links">
				<div className="footer-link-wrapper">
					<div class="footer-link-items">
						<h2>Về Chúng Tôi</h2>
						<Link
							to={{
								pathname: "/near-by",
								query: {abc: "asdf"},
							}}
						>
							Cách thức hoạt động
						</Link>
						<Link to="/">Tin Tức</Link>
						<Link to="/">Minbnb Gold</Link>
						<Link to="/">Minbnb Silver</Link>
						<Link to="/">Sự nghiệp</Link>
					</div>
					<div class="footer-link-items">
						<h2>Cộng Đồng</h2>
						<Link to="/">Tiếp cận khách hàng</Link>
						<Link to="/">Cộng sự cùng Minbnb</Link>
						<Link to="/">Mời bạn bè</Link>
						<Link to="/">Gift cards</Link>
					</div>
				</div>
				<div className="footer-link-wrapper">
					<div class="footer-link-items">
						<h2>Chủ Nhà</h2>
						<Link to="/">Cho thuê phòng, căn hộ</Link>
						<Link to="/">Trải nghiệm trực tuyến</Link>
						<Link to="/">Chủ nhà có trách nhiệm</Link>
						<Link to="/">Trung tâm cộng đồng</Link>
					</div>
					<div class="footer-link-items">
						<h2>Hỗ Trợ</h2>
						<Link to="/">Phản ứng với COVID-19</Link>
						<Link to="/">Trung tâm hỗ trợ</Link>
						<Link to="/">Tùy chọn hủy đặt phòng</Link>
						<Link to="/">Tin cậy và an toàn</Link>
					</div>
				</div>
			</div>
			<section class="social-media">
				<div class="social-media-wrap">
					<div class="footer-logo">
						<a href="/" className="social-logo">
							<Logo />
						</a>
					</div>
					<small class="website-rights">MIN.BNB © 2020</small>
					<div class="social-icons">
						<Link
							class="social-icon-link facebook"
							to="/"
							target="_blank"
							aria-label="Facebook"
						>
							<i class="fab fa-facebook-f" />
						</Link>
						<Link
							class="social-icon-link instagram"
							to="/"
							target="_blank"
							aria-label="Instagram"
						>
							<i class="fab fa-instagram" />
						</Link>
						<Link
							class="social-icon-link youtube"
							to="/"
							target="_blank"
							aria-label="Youtube"
						>
							<i class="fab fa-youtube" />
						</Link>
						<Link
							class="social-icon-link twitter"
							to="/"
							target="_blank"
							aria-label="Twitter"
						>
							<i class="fab fa-twitter" />
						</Link>
						<Link
							class="social-icon-link twitter"
							to="/"
							target="_blank"
							aria-label="LinkedIn"
						>
							<i class="fab fa-linkedin" />
						</Link>
					</div>
				</div>
			</section>
		</footer>
	);
}

export default Footer;
