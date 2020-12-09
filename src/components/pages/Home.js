import React, {useEffect} from "react";
import NavBar from "../Navbar";
import "../../App.css";
import "../Card.css";
import HeroSection from "../HeroSection";
import {Button} from "../Button";
import {CardImage} from "../Card";
import CityAndState from "../CityAndState";
import Tabs from "../Tabs";

function Home() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<NavBar transparent={true} />
			<HeroSection />
			<section>
				<div className="cards__container">
					<h3 className="section-title">Sống ở mọi nơi</h3>
					<div className="cards__wrapper">
						<div className="section-content">
							<ul className="cards__items_verti">
								<CardImage
									src="images/entire-home.jpg"
									header="Cả căn hộ"
									path="/near-by"
								/>
								<CardImage
									src="images/cabin&cattage.jpg"
									header="Cabin & mái nhà tranh"
									path="/near-by"
								/>
								<CardImage
									src="images/unique-stays.jpg"
									header="Các nơi ở độc nhất"
									path="/near-by"
								/>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<div className="cards__container" style={{padding: 10, height: 420}}>
				<img
					src="images/giftcard.jpg"
					style={{borderRadius: 15}}
					alt="gift card"
				/>
				<div className="giftcard-content">
					<h3>
						Món quà hoàn hảo <br /> cho mùa lễ hội?
					</h3>
					<p>Bất ngờ người thân bằng một giftcard của Minbnb</p>
					<Button>Tìm hiểu thêm</Button>
				</div>
			</div>
			<section className>
				<div className="cards__container">
					<h3 className="section-title">
						Tham gia cùng hàng triệu người dùng trên Min.bnb
					</h3>
					<div className="cards__wrapper">
						<ul className="cards__items_verti">
							<CardImage
								src="images/host-your-house.jpg"
								header="Cho thuê nhà bạn"
								path="/hosts"
							/>
							<CardImage
								src="images/host-online-exp.jpg"
								header="Dẫn buổi trải nghiệm trực tuyến"
								path="/hosts"
							/>
							<CardImage
								src="images/host-exp.jpg"
								header="Dẫn một trải nghiệm"
								path="/hosts"
							/>
						</ul>
					</div>
				</div>
			</section>
			<section>
				<div className="cards__container">
					<h3 className="section-title">
						Cảm hứng cho những nơi nghỉ ngơi trong tương lai
					</h3>
					<Tabs>
						<div label="Điểm đến cho nghệ thuật và văn hóa">
							<CityAndState />
						</div>
						<div label="Điểm đến cho các cuộc phiêu lưu">
							<CityAndState />
						</div>
						<div label="Điểm đến với bãi biển">
							<CityAndState />
						</div>
						<div label="Điểm đến nổi tiếng">
							<CityAndState />
						</div>
					</Tabs>
				</div>
			</section>
		</>
	);
}

export default Home;
