import React from "react";
import { Card_sm } from "../commen/Card_sm";
import { browse } from "../assets/data/Data";

export const Charts = () => {
  return (
    <>
      <section className=" mt-8 sm:mt-20">
        <h1 className="text-5xl font-bold mb-5 text-primary">Chart</h1>
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-7">
          {browse.map((item, i) => (
            <div className="box card hero" key={i}>
              <Card_sm cover={item.cover} name={item.name} tag={item.tag} show={true} i={i}/>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
