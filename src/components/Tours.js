import React from "react";
import { toursImg } from "../data";
import HeadTitle from "./HeadTitle";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <HeadTitle title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursImg.map((card) => {
          const { id, imag, date, info, country, days, salary } = card;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={imag} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{info}</h4>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque vitae tempore voluptatum maxime reprehenderit eum quod
                  exercitationem fugit, qui corporis.
                </p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {country}
                  </p>
                  <p>{days}</p>
                  <p>{salary}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
