import React from "react";
import NavBar from "../Navbar";
import "./Hosts.css";
import {Button} from "../Button";

class Hosts extends React.Component {
	constructor() {
		super();
		this.state = {
			estimateEarning: 25,
		};
	}

	handleClickFirst() {
		const btn = document.querySelector("#first-more");
		btn.style.display = "none";
		btn.style.maxHeight = "3px";
		document.querySelector("#first-more-content").style.display = "block";
	}

	handleClickSecond() {
		const btn = document.querySelector("#second-more");
		btn.style.display = "none";
		btn.style.maxHeight = "3px";
		document.querySelector("#second-more-content").style.display = "block";
	}

	scrollToTop() {
		document.body.scrollTo({
			top: 180,
			left: 0,
			behavior: "smooth",
		}); // For Safari
		window.scrollTo({
			top: 180,
			left: 0,
			behavior: "smooth",
		});
	}

	componentDidMount() {
		document.querySelector("#first-more-content").style.display = "none";
		document.querySelector("#second-more-content").style.display = "none";
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<>
				<NavBar transparent={false} />
				<div style={{height: 80}} />
				<div className="host-banner">
					<div className="host-img">
						<img src="/images/host-bgimg.jpg" alt="background" />
					</div>
					<div className="host-form">
						<div className="estimate-earning">
							<h1>
								Kiếm tới{" "}
								<span style={{color: "#0BB5CE"}}>
									${this.state.estimateEarning}
								</span>{" "}
								một tháng khi cho thuê tại Hạ Long
							</h1>
							<p>Số tiền có thể tăng lên tùy thuộc vào khả năng của bạn.</p>
						</div>
						<div className="form-container">
							<div className="form">
								<p>
									Hãy cho chúng tôi biết thêm về địa điểm của bạn và chúng tôi
									sẽ ước tính số tiền kiếm được mỗi tháng cho bạn.
								</p>
								<form>
									<div className="section-form">
										<input
											name="address"
											type="text"
											placeholder="Địa chỉ"
											className=""
										/>
										<select name="room-type">
											<option selected value="2.5">
												Cả căn hộ
											</option>
											<option value="1.5">Phòng riêng</option>
											<option value="1">Phòng chung</option>
										</select>
										<select name="room-capacity">
											<option value="0">0 khách</option>
											<option value="1">1 khách</option>
											<option value="1.1">2 khách</option>
											<option value="1.2">3 khách</option>
											<option selected value="2">
												4 khách
											</option>
											<option value="2.5">5 khách</option>
											<option value="3">6 khách</option>
											<option value="3.5">7 khách</option>
											<option value="4">8 khách</option>
											<option value="4.5">9 khách</option>
											<option value="5">10 khách</option>
											<option value="5.5">11 khách</option>
											<option value="6">12 khách</option>
											<option value="6.5">13 khách</option>
										</select>
									</div>
									<p
										className="more"
										id="first-more"
										onClick={this.handleClickFirst}
									>
										<i class="fas fa-plus" /> Thêm không gian đặc biệt nào mà
										khách có thể truy cập
									</p>
									<div id="first-more-content">
										<div className="section-form">
											<select name="room-type" placeholder="không gian">
												<option disabled selected>
													Không gian
												</option>
												<option value="1">Căn hộ</option>
												<option value="2">Khách sạn nhỏ</option>
												<option value="3">Nhà riêng</option>
												<option value="4">Không gian đặc biệt</option>
											</select>
											<select name="bedroom-count">
												<option disabled selected>
													Phòng ngủ
												</option>
												<option value="0">0 phòng ngủ</option>
												<option value="1">1 phòng ngủ</option>
												<option value="1.1">2 phòng ngủ</option>
												<option value="1.4">3 phòng ngủ</option>
												<option value="2">4 phòng ngủ</option>
												<option value="2.5">5 phòng ngủ</option>
												<option value="3">6 phòng ngủ</option>
												<option value="3.5">7 phòng ngủ</option>
												<option value="4">8 phòng ngủ</option>
												<option value="4.5">9 phòng ngủ</option>
												<option value="5">10 phòng ngủ</option>
												<option value="5.5">11 phòng ngủ</option>
												<option value="6">12 phòng ngủ</option>
												<option value="6.5">13 phòng ngủ</option>
											</select>
											<select name="bathroom-count">
												<option disabled selected>
													Phòng tắm
												</option>
												<option value="0">0 phòng tắm</option>
												<option value="1">1 phòng tắm</option>
												<option value="1.1">2 phòng tắm</option>
												<option value="1.4">3 phòng tắm</option>
												<option value="2">4 phòng tắm</option>
												<option value="2.5">5 phòng tắm</option>
												<option value="3">6 phòng tắm</option>
												<option value="3.5">7 phòng tắm</option>
												<option value="4">8 phòng tắm</option>
												<option value="4.5">9 phòng tắm</option>
												<option value="5">10 phòng tắm</option>
												<option value="5.5">11 phòng tắm</option>
												<option value="6">12 phòng tắm</option>
												<option value="6.5">13 phòng tắm</option>
											</select>
										</div>
										<p
											className="more"
											id="second-more"
											onClick={this.handleClickSecond}
										>
											<i class="fas fa-plus" /> Thêm một số tiện nghi đặc biệt
										</p>
									</div>
									<div id="second-more-content">
										<div className="section-form clearfix">
											<p>
												Hãy cho chúng tôi biết nếu địa điểm của bạn có những
												tiện nghi đặc biệt đang được khách hàng ưu chuộng
											</p>
											<div className="amenities">
												<label>
													<input type="checkbox" name="gym" value="1.3" />
													Gym
												</label>
												<label>
													<input type="checkbox" name="hottub" value="1.4" />
													Bể tắm nóng
												</label>
												<label>
													<input type="checkbox" name="pool" value="1.5" />
													Bể bơi
												</label>
												<label>
													<input
														type="checkbox"
														name="waterfront"
														value="1.3"
													/>
													Bờ sông, hồ
												</label>
												<label>
													<input type="checkbox" name="beachfront" value="2" />
													Bờ biển
												</label>
												<label>
													<input type="checkbox" name="pet" value="1.1" />
													Chấp nhận thú nuôi
												</label>
											</div>
										</div>
									</div>
								</form>
							</div>
							<div className="start-btn">
								<button>Bắt đầu làm chủ nào</button>
							</div>
						</div>
					</div>
				</div>
				<main className="main-content">
					<section className="why">
						<div>
							<h2>Tại sao bạn nên chọn Minbnb?</h2>
							<p>
								Bất kể bạn chia sẻ loại nhà hay phòng nào, Minbnb sẽ giúp việc
								tiếp đón khách du lịch trở nên đơn giản và an toàn. Bạn có toàn
								quyền thay đổi tình trạng nơi ở, giá cả, nội quy và cách bạn
								tương tác với khách.
							</p>
						</div>
						<div>
							<h2>Chúng tôi hỗ trợ bạn</h2>
							<p>
								Để giữ an toàn cho bạn, ngôi nhà của bạn và đồ đạc của bạn,
								chúng tôi chi trả cho mọi phòng đăng kí trên Minbnb $1 triệu USD
								bảo vệ thiệt hại tài sản và $1 triệu USD bảo hiểm chống tai nạn.
							</p>
						</div>
					</section>
					<section className="three-steps">
						<h1 className="section-host-title">Chia sẻ phòng trong 3 bước</h1>
						<ul>
							<li>
								<i class="far fa-check-circle"></i>
								<h3>Kể về địa điểm của bạn miễn phí</h3>
								<p>
									Chia sẻ bất cứ không gian nào mà không bị tính phí đăng ký, từ
									phòng khách chung, ngôi nhà thứ hai hoặc căn Villa của bạn.
								</p>
							</li>
							<li>
								<i class="far fa-check-circle"></i>
								<h3>Lên kế hoạch bạn muốn cho thuê như thế nào</h3>
								<p>
									Tự chọn lịch trình, giá cả và các yêu cầu của khách. Chúng tôi
									luôn sẵn sàng trợ giúp trong suốt chặng đường.
								</p>
							</li>
							<li>
								<i class="far fa-check-circle"></i>
								<h3>Cùng chờ đón vị khách đầu tiên nào.</h3>
								<p>
									Sau khi căn hộ bạn đăng kí xuất hiện, những vị khách bị thu
									hút bởi căn hộ của bạn sẽ xuất hiện. Bạn có thể để lại cho họ
									bất kỳ câu hỏi nào trước khi họ ở lại.
								</p>
							</li>
						</ul>
					</section>
					<section className="how">
						<div>
							{/* <div className="pp">"</div> */}
							<h3>
								Nhờ có bảo hiểm của Minbnb, tôi quyết định tham gia vì tôi có dự
								phòng về hư hỏng hoặc sự cố.
							</h3>
							<p className="how-description">
								Trường Minh một người cho thuê ở Hạ Long vì sự linh hoạt mà
								chúng tôi cung cấp.
							</p>
						</div>
						<div>
							<img
								src="/images/customer-3.jpg"
								className="section-image"
								alt="customer 1"
							/>
						</div>
					</section>
					<section className="covered">
						<h1 className="section-host-title">Chúng tôi đã bảo vệ bạn</h1>
						<div className="covered-content">
							<div>
								<p>
									Chúng tôi biết rằng việc tin tưởng những người ở trong nhà bạn
									là một ưu tiên. Airbnb cho phép bạn đặt ra các yêu cầu nghiêm
									ngặt về những người có thể đặt phòng và làm quen với khách
									trước khi họ lưu trú. <br />
									<br /> Tuy nhiên, nếu có điều gì đó xảy ra, chúng tôi sẽ hỗ
									trợ bạn. Với bảo vệ thiệt hại của chúng tôi bao gồm thiệt hại
									tài sản và Bảo hiểm thiệt hại của chúng tôi đối với trách
									nhiệm pháp lý, bạn được hỗ trợ xuyên suốt.
								</p>
							</div>
							<ul>
								<li>
									<p>
										<i class="fas fa-check" />
										Có quyền được yêu cầu căn cước trước khi đặt phòng
									</p>
								</li>
								<li>
									<p>
										<i class="fas fa-check" />
										Quy tắc tại gia mà khách phải đồng ý
									</p>
								</li>
								<li>
									<p>
										<i class="fas fa-check" />
										Cơ hội được đọc lại bài đánh giá từ các chuyến đi trước
									</p>
								</li>
								<li>
									<p>
										<i class="fas fa-check" />
										Bảo hiểm miễn phí 1 triệu $ cho thiệt hại tài sản
									</p>
								</li>
								<li>
									<p>
										<i class="fas fa-check" />
										Bảo hiểm trách nhiệm miễn phí 1 triệu $
									</p>
								</li>
								<li>
									<p>
										<i class="fas fa-check" />
										Hỗ trợ người dùng toàn cầu 24/
									</p>
								</li>
							</ul>
						</div>
					</section>
					<div style={{height: "60px"}} />
					<img
						src="/images/customer-4.jpg"
						style={{width: "100%"}}
						alt="group me"
					/>
					<div style={{height: "60px"}} />
					<section className="payment">
						<h1 className="section-host-title">Thanh toán đơn giản</h1>
						<ul className="payment-list">
							<li>
								<h4>Tính phí những gì bạn muốn</h4>
								<p>
									Bạn luôn luôn được chọn giá của không gian của bạn. Cần giúp
									đỡ không? Chúng tôi có công cụ để giúp bạn đáp ứng nhu cầu
									trong khu vực của bạn đó.
								</p>
							</li>
							<li>
								<h4>Trả phí cực thấp</h4>
								<p>
									Bạn không phải trả phí đăng kí. Minbnb chỉ yêu cầu 3% mỗi lần
									đặt phòng thành công thôi, một trong các nơi trả phí thấp nhất
									trong nghành du lịch.
								</p>
							</li>
							<li>
								<h4>Thanh toán nhanh chóng</h4>
								<p>
									Ngay khi khách checks in xong, tiền của bạn sẽ được chuyển
									ngay sang tài khoản của bạn trên Paypal, tiền mặt hoặc các
									phương thức bạn muốn.
								</p>
								<div style={{height: "10px"}} />
								<p className="fake-link" onClick={this.scrollToTop}>
									Học cách kiếm tiền trên Minbnb
								</p>
							</li>
						</ul>
					</section>
					<section className="how">
						<div>
							<img
								src="/images/customer-2.jpg"
								className="section-image"
								alt="customer 2"
							/>
						</div>
						<div>
							<h3>
								Cho thuê trên Minbnb giúp tôi có được căn bếp mới và một số nâng
								cấp khác.
							</h3>
							<p>Trường Minh cho thuê tại Hạ Long để kiếm thêm thu nhập phụ.</p>
						</div>
					</section>
					<section className="about">
						<h1 className="section-host-title">Về chúng tôi</h1>
						<ul>
							<li>
								<h4>Minbnb là gì?</h4>
								<p>
									Airbnb kết nối mọi người với những nơi lưu trú và những việc
									cần làm trên khắp thế giới. Cộng đồng được cung cấp bởi những
									người dẫn chương trình, những người cung cấp cho khách của họ
									cơ hội duy nhất để đi du lịch như một người dân địa phương.
								</p>
							</li>
							<li>
								<h4>Lưu trú là gì?</h4>
								<p>
									Nếu bạn có thừa một phòng, một ngôi nhà hoặc kiến ​​thức
									chuyên môn, bạn có thể kiếm tiền bằng cách chia sẻ nó với bất
									kỳ ai trên thế giới. Bạn có thể cho thuê nhà riêng, hoạt động
									của mình hoặc làm cả hai. Thời điểm bắt đầu là tùy thuộc vào
									bạn.
								</p>
								<div style={{height: "10px"}} />
								<p className="fake-link" onClick={this.scrollToTop}>
									Bắt đầu kiếm tiền trên Minbnb
								</p>
							</li>
						</ul>
					</section>
					<div className="ready-to-earn">
						<img src="/images/ready-image.jpg" alt="ready?" />
						<div className="ready-button">
							<h1>Bạn đã sẵn sàng chưa?</h1>
							<Button
								buttonStyle="btn--primary"
								buttonSize="btn--large"
								onClick={this.scrollToTop}
							>
								Bắt đầu kiếm tiền thôi
							</Button>
						</div>
					</div>
				</main>
			</>
		);
	}
}

export default Hosts;
