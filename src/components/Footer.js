import React from "react";
import "./Footer.css";
import {Button} from "./Button";
import Logo from "./Logo";
import {Link} from "react-router-dom";
import "../App.css";

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
							buttonStyle="btn--primary btn"
							color="black"
							onClick={() => alert(`Đăng kí thành công: ${email}`)}
							LinkTo="/"
						>
							Subscribe
						</Button>
					</form>
				</div>
			</section>
			<div className="footer-links">
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>Về Chúng Tôi</h2>
						<Link to="/hosts">Cách thức hoạt động</Link>
						<Link to="/">Tin Tức</Link>
						<Link to="/">Minbnb Gold</Link>
						<Link to="/">Minbnb Silver</Link>
						<Link to="/">Sự nghiệp</Link>
					</div>
					<div className="footer-link-items">
						<h2>Cộng Đồng</h2>
						<Link to="/">Tiếp cận khách hàng</Link>
						<Link to="/hosts">Cộng sự cùng Minbnb</Link>
						<Link to="/hosts">Mời bạn bè</Link>
						<Link to="/hosts">Gift cards</Link>
					</div>
				</div>
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>Chủ Nhà</h2>
						<Link to="/hosts">Cho thuê phòng, căn hộ</Link>
						<Link to="/">Trải nghiệm trực tuyến</Link>
						<Link to="/">Chủ nhà có trách nhiệm</Link>
						<Link to="/">Trung tâm cộng đồng</Link>
					</div>
					<div className="footer-link-items">
						<h2>Hỗ Trợ</h2>
						<Link to="/">Phản ứng với COVID-19</Link>
						<Link to="/">Trung tâm hỗ trợ</Link>
						<Link to="/">Tùy chọn hủy đặt phòng</Link>
						<Link to="/">Tin cậy và an toàn</Link>
					</div>
				</div>
			</div>
			<section className="social-media">
				<div className="social-media-wrap">
					<div className="footer-logo">
						<a
							className="social-logo"
							onClick={() => window.scrollTo(0, 0)}
							title="scroll to top"
						>
							<Logo />
						</a>
					</div>
					<small className="website-rights">MIN.BNB © 2020</small>
					<div className="social-icons">
						<a
							className="social-icon-link facebook"
							href="https://www.facebook.com/sipp.minhh"
							target="_blank"
							aria-label="Facebook"
						>
							<i className="fab fa-facebook-f" />
						</a>
						<a
							className="social-icon-link instagram"
							href="https://www.instagram.com/hnim.gnourt/"
							target="_blank"
							aria-label="Instagram"
						>
							<i className="fab fa-instagram" />
						</a>
						<a
							className="social-icon-link youtube"
							href="https://www.youtube.com/"
							target="_blank"
							aria-label="Youtube"
						>
							<i className="fab fa-youtube" />
						</a>
						<a
							className="social-icon-link twitter"
							href="https://twitter.com/?lang=en"
							target="_blank"
							aria-label="Twitter"
						>
							<i className="fab fa-twitter" />
						</a>
						<a
							className="social-icon-link twitter"
							href="https://www.linkedin.com/login"
							target="_blank"
							aria-label="LinkedIn"
						>
							<i className="fab fa-linkedin" />
						</a>
					</div>
				</div>
			</section>
		</footer>
	);
}

export default Footer;
