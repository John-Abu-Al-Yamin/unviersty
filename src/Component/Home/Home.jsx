import React from "react";
import home from "../asstes/home.jpg";
import { FaLocationDot } from "react-icons/fa6";
import "./Home.css";
import CountUp from "react-countup";
const Home = () => {
  return (
    <section className="main-home">
      <div className="container home-container">
        <div className="h-left">
          <div className="home-title">
            <div className="orange-c"></div>
            <h1>
              Discover <br /> Most Subitable <br /> College
            </h1>
          </div>
          <div className="home-des">
            <p className="secon-text">
              Find Avariety of Colleges that Suit You With Ease
            </p>
            <p className="secon-text">
              Forget all The difficulties in finding Your College Seek
            </p>
          </div>
          <div className="serach-bar">
            <FaLocationDot />
            <input type="text" />
            <button className="btn">Search</button>
          </div>

          <div className="stats">
            <div className="stat">
              <span>
                <CountUp start={8800} end={9000} duration={10} />
                <span className="orange-text">+</span>
              </span>
              <span className="secon-text  count">The Students</span>
            </div>
            <div className="stat">
              <span>
                <CountUp start={1800} end={2000} duration={10} />
                <span className="orange-text">+</span>
              </span>
              <span className="secon-text count">Expatriate Students</span>
            </div>
            <div className="stat">
              <span>
                <CountUp end={28} duration={5} />
                <span className="orange-text">+</span>
              </span>
              <span className="secon-text count">Colleges</span>
            </div>
          </div>
        </div>

        <div className="h-right">
          <div className="image-container">
            <img src={home} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
