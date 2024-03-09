import React from "react";
import { serviceCard } from "../data";
import HeadTitle from "./HeadTitle";
const Services = () => {
  return (
    <section className="section services" id="services">
      <HeadTitle title="our" subTitle="services" />

      <div className="section-center services-center">
        {serviceCard.map((card) => {
          const { id, icon, title } = card;
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, officia.
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
