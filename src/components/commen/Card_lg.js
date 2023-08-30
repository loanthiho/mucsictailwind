import React, { useState } from "react";
import { AiFillPlayCircle, AiOutlineHeart } from "react-icons/ai";
import { BsPlayCircle, BsThreeDots, BsPlus, BsDownload, BsClipboard, BsShare } from "react-icons/bs";

export const Card_lg = ({ cover, name, tag }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="img relative h-72 overflow-hidden">
        <img
          src={cover}
          alt="cover"
          className="w-full h-full object-cover rounded-md transition-transform duration-300 transform hover:scale-110"
        />
        <div className="overlay icon absolute top-1/2 left-[40%] text-white">
          <div className="flex justify-center items-center">
            <AiFillPlayCircle size={50} className={`hide absolute -top-1 -left-1`} />
            <BsPlayCircle size={45} className="show" />
          </div>
        </div>
        <div className="overlay absolute bottom-0 right-0 text-white">
          <div className="flex p-3">
            <div className="flex justify-center items-center">
              <AiOutlineHeart
                size={22}
                className={`mx-3 ${isLiked ? "text-red-500" : ""}`}
                onClick={handleLikeClick}
              />
              <BsThreeDots size={22} onClick={handleMenuClick} />
            </div>
          </div>
          {isMenuOpen && (
            <div className="bg-black shadow-md p-2 rounded-md absolute top-full right-0 mt-2 w-[180px]">
              <ul className="text-white space-y-2">
                <li className="flex items-center text-sm">
                  <BsPlus size={14} className="mr-2" />
                  Add to Playlist
                </li>
                <li className="flex items-center text-sm">
                  <BsDownload size={14} className="mr-2" />
                  Download
                </li>
                <li className="flex items-center text-sm">
                  <BsClipboard size={14} className="mr-2" />
                  Copy Link
                </li>
                <li className="flex items-center text-sm">
                  <BsShare size={14} className="mr-2" />
                  Share
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="text">
        <h3 className="text-md text-gray-500 font-semibold">{name}</h3>
        <span className="text-gray-400">{tag}</span>
      </div>
    </>
  );
};
