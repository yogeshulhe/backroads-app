import React from "react";
import about from "../images/about.jpeg";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      {/* <div className="section-title">
        <h2>
          about <span>us</span>
        </h2>
      </div> */}
      <Title title="about" subtitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={about} className="about-photo" alt="awsome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga
            magnam placeat ipsam quasi id fugiat animi vel nemo sequi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi esse
            cupiditate harum ullam facilis, ex impedit porro doloribus deserunt
            quidem.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
