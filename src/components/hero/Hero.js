import React, { useState } from "react";
import { AiFillPlayCircle, AiOutlineHeart } from "react-icons/ai";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsPlayCircle, BsThreeDots } from "react-icons/bs";
import { hero1, hero2 } from "../assets/data/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-[50%] left-0 text-white cursor-pointer"
    >
      <MdKeyboardArrowLeft size={50} />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-[50%] right-0 z-10 text-white cursor-pointer"
    >
      <MdKeyboardArrowRight size={50} />
    </div>
  );
}

export const Hero = () => {
  const [likedItems, setLikedItems] = useState([]);
  const toggleLike = (index) => {
    if (likedItems.includes(index)) {
      setLikedItems(likedItems.filter((itemIndex) => itemIndex !== index));
    } else {
      setLikedItems([...likedItems, index]);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="hero">
      <div className="w-full h-auto md:h-[92vh] md:flex md:justify-between">
        <div className="w-full h-full md:w-1/2">
          <Slider {...settings}>
            {hero1.map((item, index) => (
              <div className="box relative h-[92vh] sm:mt-16 w-full" key={index}>
                <img src={item.cover} alt="cover" className="w-full h-full object-cover" />
                <div className="text absolute top-0 left-0 text-white p-5">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-gray-400">{item.tag}</span>
                </div>
                <div className="overlay icon absolute top-1/2 left-[40%] text-white">
                  <BsPlayCircle size={45} className="show" />
                  <AiFillPlayCircle size={50} className="hide absolute -top-1 -left-1" />
                </div>
                <div className="overlay absolute bottom-0 right-0 text-white">
                  <div className="flex p-3">
                    <AiOutlineHeart
                      size={22}
                      className={`mx-3 ${likedItems.includes(index) ? "text-red-500" : ""}`}
                      onClick={() => toggleLike(index)}
                    />
                    <BsThreeDots size={22} />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full h-full md:w-1/2 grid grid-cols-2 sm:grid-cols-1" style={{ minHeight: "90vh" }}>
          {hero2.map((item, index) => (
            <div className="box relative " key={index}>
              <img src={item.cover} alt="cover" className="w-full h-full object-cover" />
              <div className="text absolute top-0 left-0 text-white p-5">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <span className="text-gray-400">{item.tag}</span>
              </div>
              <div className="overlay icon absolute top-1/2 left-[40%] text-white">
                <BsPlayCircle size={45} className="show" />
                <AiFillPlayCircle size={50} className="hide absolute -top-1 -left-1" />
              </div>
              <div className="overlay absolute bottom-0 right-1 text-white">
                <div className="flex p-3">
                  <AiOutlineHeart
                    size={22}
                    className={`mx-3 ${likedItems.includes(index) ? "text-red-500" : ""}`}
                    onClick={() => toggleLike(index)}
                  />
                  <BsThreeDots size={22} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
