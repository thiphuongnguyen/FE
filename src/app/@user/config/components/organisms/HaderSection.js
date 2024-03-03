"use client";
import { useEffect } from "react";
import "../../styles/header.css";

import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

export const HaderSection = () => {
  useEffect(() => {
    const activate = (e) => {
      const slider = document.querySelector(".slider");
      if (slider) {
        const items = document.querySelectorAll(".item_header");
        e.target.matches(".next") && slider.append(items[0]);
        e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
      }
    };

    document.addEventListener("click", activate, false);

    return () => {
      document.removeEventListener("click", activate, false);
    };
  }, []);

  const [items, setItems] = useState([
    {
      backgroundImage:
        "https://laptop88.vn/media/news/2910_hinhanhmaytinhxachtay4.jpg",
      title: "Lossless Youths",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    {
      backgroundImage:
        "https://laptop88.vn/media/news/1237_man_hinh_laptop_lenovo.jpg",
      title: "Estrange Bond",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    {
      id: 3,
      backgroundImage:
        "https://dac.com.vn/upload//Laptop%20Lenovo%20Ideapad%205.jpg",
      title: "The Gate Keeper",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      buttonText: "Read More",
    },
    {
      id: 4,
      backgroundImage:
        "https://laptop88.vn/media/news/1406_laptop-van-phong-25-trieu-2.jpg",
      title: "Last Trace Of Us",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      buttonText: "Read More",
    },
    {
      id: 5,
      backgroundImage:
        "https://laptop88.vn/media/news/0607_my-tnh-gi-r-cho-sinh-vin-5.jpg",
      title: "Urban Decay",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      buttonText: "Read More",
    },
    {
      id: 6,
      backgroundImage:
        "https://laptop88.vn/media/news/2812_lenovoideapad3ryzen54.jpg",
      title: "The Migration",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      buttonText: "Read More",
    },
  ]);

  return (
    <>
      <div className="main_header">
        <ul className="slider">
          {items.map((item, index) => (
            <li
              key={index}
              className="item_header"
              style={{ backgroundImage: `url(${item.backgroundImage})` }}
            >
              <div className="content">
                <h2 className="title">{item.title}</h2>
                <p className="description">{item.description}</p>
                <button>Read More</button>
              </div>
            </li>
          ))}
        </ul>
        <nav className="nav_button">
          <div className="btn prev" name="arrow-forward-outline">
            <FaAngleLeft className="prev" style={{ fontSize: "30px" }} />
          </div>
          <div className="btn next" name="arrow-forward-outline">
            <FaAngleRight className="next" style={{ fontSize: "30px" }} />
          </div>
        </nav>
      </div>
    </>
  );
};
