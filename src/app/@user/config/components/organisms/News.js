"use client";
import { useContext, useEffect } from "react";
import "../../styles/news.css";
import { AuthContext } from "../contexts/AuthContext";

export const NewsForm = () => {
  const { setBreadcrumb } = useContext(AuthContext);
  useEffect(() => {
    setBreadcrumb("News");
  }, []);
  return (
    <div className="content-wrapper">
      <div className="news-card">
        <a href="#" className="news-card__card-link"></a>
        <img
          src="https://i1-vnexpress.vnecdn.net/2024/03/02/VNERobot-1709373998-4810-1709374296.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=HtYLzi-qDzuPv7UYv91ISw"
          alt=""
          className="news-card__image"
        />
        <div className="news-card__text-wrapper">
          <h2 className="news-card__title">
            Robot hình người lập kỷ lục tốc độ
          </h2>
          <div className="news-card__post-date">Jan 29, 2023</div>
          <div className="news-card__details-wrapper">
            <p className="news-card__excerpt">
              TRUNG QUỐC - Công ty Unitree Robotics thông báo robot hình người
              H1 đi bằng hai chân của họ lập kỷ lục tốc độ mới khi di chuyển ở
              vận tốc 3,3 mét/giây (11,9 km/h).&hellip;
            </p>
            <a href="#" className="news-card__read-more">
              Read more <i className="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="news-card">
        <a href="#" className="news-card__card-link"></a>
        <img
          src="https://genk.mediacdn.vn/thumb_w/800/139269124445442048/2024/2/24/gsmarena000-1708758694597-1708758694772103624214-0-0-881-1410-crop-1708758706991950423169.jpg"
          alt=""
          className="news-card__image"
        />
        <div className="news-card__text-wrapper">
          <h2 className="news-card__title">
            Laptop Xiaomi giá rẻ: Chip Intel Core Ultra, màn hình QHD+ 165Hz,
            RAM 32GB
          </h2>
          <div className="news-card__post-date">Jan 29, 2018</div>
          <div className="news-card__details-wrapper">
            <p className="news-card__excerpt">
              Trong sự kiện ra mắt Xiaomi 14 Ultra, Xiaomi cũng đã đồng thời
              giới thiệu những chiếc laptop Redmi đầu tiên được trang bị bộ vi
              xử lý Intel Core Ultra mang tên Redmi Book Pro bao gồm 2 phiên bản
              14 inch và 16 inch&hellip;
            </p>
            <a href="#" className="news-card__read-more">
              Read more <i className="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="news-card">
        <a href="#" className="news-card__card-link"></a>
        <img
          src="https://genk.mediacdn.vn/thumb_w/640/139269124445442048/2024/3/3/genk-redmi-note-13-pro-4g-ph-3-17094374764111057279078.jpg"
          alt=""
          className="news-card__image"
        />
        <div className="news-card__text-wrapper">
          <h2 className="news-card__title">Săn ngay dế sịn</h2>
          <div className="news-card__post-date">Jan 29, 2018</div>
          <div className="news-card__details-wrapper">
            <p className="news-card__excerpt">
            Tháng 3 săn sale ngay top smartphone tầm trung đáng mua: Xiaomi, Samsung, OPPO&hellip;
            </p>
            <a href="#" className="news-card__read-more">
              Read more <i className="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="news-card">
        <a href="#" className="news-card__card-link"></a>
        <img
          src="https://images.pexels.com/photos/248486/pexels-photo-248486.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt=""
          className="news-card__image"
        />
        <div className="news-card__text-wrapper">
          <h2 className="news-card__title">
            Amazing Forth Title that is Quite Long
          </h2>
          <div className="news-card__post-date">Jan 29, 2018</div>
          <div className="news-card__details-wrapper">
            <p className="news-card__excerpt">Lorem ipsum dolor sit amet!</p>
            <a href="#" className="news-card__read-more">
              Read more <i className="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="news-card">
        <a href="#" className="news-card__card-link"></a>
        <img
          src="https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt=""
          className="news-card__image"
        />
        <div className="news-card__text-wrapper">
          <h2 className="news-card__title">Amazing Fifth Title</h2>
          <div className="news-card__post-date">Jan 29, 2018</div>
          <div className="news-card__details-wrapper">
            <p className="news-card__excerpt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              pariatur nemo tempore repellat? Ullam sed officia iure architecto
              deserunt distinctio&hellip;
            </p>
            <a href="#" className="news-card__read-more">
              Read more <i className="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="news-card">
        <a href="#" className="news-card__card-link"></a>
        <img
          src="https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt=""
          className="news-card__image"
        />
        <div className="news-card__text-wrapper">
          <h2 className="news-card__title">
            Amazing 6<sup>th</sup> Title
          </h2>
          <div className="news-card__post-date">Jan 29, 2018</div>
          <div className="news-card__details-wrapper">
            <p className="news-card__excerpt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              pariatur nemo tempore repellat? Ullam sed officia.
            </p>
            <a href="#" className="news-card__read-more">
              Read more <i className="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};
