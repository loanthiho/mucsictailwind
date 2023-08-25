import React from "react";
import { AiFillApple } from "react-icons/ai";
import { IoPlaySharp } from "react-icons/io5";
import { recommand } from "../assets/data/Data";
import { Card_sm } from "./Card_sm";

export const Sidebar = () => {
  return (
    <>
      <section className="sidebar hero">
        <h1 className="mb-4 text-lg font-semibold text-gray-600">5 Likes</h1>
        {recommand.slice(0, 5).map((item, i) => (
          <div className="mb-3" key={i}>
            <Card_sm cover={item.cover} name={item.name} tag={item.tag} i={i} />
          </div>
        ))}

        <h1 className="mb-3 text-lg font-semibold text-gray-600 mt-4">
          Go Mobile
        </h1>
        <div className="flex">
        <a
            href="https://www.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-white flex center py-0.5 rounded-md"
            style={{ marginRight: "10px" }}
          >
            <div>
              <AiFillApple size={30} />
            </div>
            <div className="ml-2">
              <span className="text-gray-300 text-[12px]">Download on the</span>
              <h1 className="text-md font-semibold">App Store</h1>
            </div>
          </a>
          <a
            href="https://play.google/play-pass/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-white flex center  py-0.5 rounded-md"
            style={{ marginLeft: "10px" }}
          >
            <div>
              <IoPlaySharp size={30}  />
            </div>
            <div className="ml-2">
              <span className="text-gray-300 text-[11px]">Download on the</span>
              <h1 className="text-md font-semibold">Google Play</h1>
            </div>
          </a>
        </div>
        <p className="text-sm mt-2">About Contact Legal Policy</p>
        <span className="text-gray-500 text-[11px]">© Copyright 2022</span>
      </section>
    </>
  );
};
