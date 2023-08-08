import React from "react";
import { browse } from "../assets/data/Data";


export const Artist = () => {
  return (
    <>
      <section className="mt-8 sm:mt-20">
        <h1 className="text-5xl font-bold mb-5 text-primary">Artist</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-1 gap-3">
          {browse.map((item, i) => (
            <div className="box card text-center" key={i}>
              <div className="img relative h-40 w-40 m-auto">
                <img
                  src={item.cover}
                  alt="cover"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="text-center">
                  <h3 className="text-md text-gray-500 font-semibold">{item.name}</h3>
                  <span className="text-gray-400">{item.tag}</span>
                </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
