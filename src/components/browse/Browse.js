import React from "react"
import { browse } from "../assets/data/Data"
import { Card_lg } from "../commen/Card_lg"


export const Browse = () => {
  return (
    <>
      <section className='mt-8 sm:mt-20'>
        <h1 className="text-5xl font-bold mb-5 text-primary">Browse</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-1  gap-5'>
          {browse.map((item, i) => (
            <div className='box card hero' key={i}>
              <Card_lg cover={item.cover} name={item.name} tag={item.tag} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}