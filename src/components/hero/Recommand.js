import React from "react";
import { Card_sm } from "../commen/Card_sm";
import { Title } from "../commen/Title";
import { recommand } from "../assets/data/Data";

export const Recommand = () => {
  return (
    <>
      <section className="treading hero mt-7 pb-32">
        <Title title="Recommand for you" />
        <div className="grid grid-cols-2 gap-5">
          {recommand.map((item, i) => (
            <div className="box card hero" key={i}>
              <Card_sm cover={item.cover} name={item.name} tag={item.tag} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
