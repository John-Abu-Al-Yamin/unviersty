import React, { useRef } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Slider.css";

// Import the images you want to use for the slider
import image1 from "../asstes/slid.jpg";
import image2 from "../asstes/slid1.jpg";
import image3 from "../asstes/slid2.jpg";
import image4 from "../asstes/slid3.jpg";
import image5 from "../asstes/slid4.jpg";
import image6 from "../asstes/slid5.jpg";

// Install the navigation module for swiper
SwiperCore.use([]);

// Define the component for the slider
const Slider = () => {
  // Create a reference for the swiper instance
  const swiperRef = useRef(null);

  // Define the slides with the images
  const slides = [
    <SwiperSlide key={1}>
      <img src={image1} alt="Image 1" />
      <h5 className="secon-text line-height h5"><span className="orange-text">%</span> 58.7</h5>
      <h2 className="primary-text line-height h2"> Social Work</h2>
      <p className="secon-text line-height p">It Aims to Help The Community and Children and Solve Problems</p>
    </SwiperSlide>,
    <SwiperSlide key={2}>
      <img src={image2} alt="Image 2" />
      <h5 className="secon-text line-height h5"><span className="orange-text">%</span>62.4</h5>
      <h2 className="primary-text line-height h2">College of Law</h2>
      <p className="secon-text line-height p">It Aims To Restore people's Rights </p>

    </SwiperSlide>,
    <SwiperSlide key={3}>
      <img src={image3} alt="Image 3" />
      <h5 className="secon-text line-height h5"><span className="orange-text">%</span>68.2</h5>
      <h2 className="primary-text line-height h2">Commerce College</h2>
      <p className="secon-text line-height p">Specialized in Accounts, Currencies and Stock exchange</p>

    </SwiperSlide>,
    <SwiperSlide key={4}>
      <img src={image4} alt="Image 4" />
      <h5 className="secon-text line-height h5"><span className="orange-text">%</span> 63.6</h5>
      <h2 className="primary-text line-height h2">College of Literature</h2>
      <p className="secon-text line-height p">Specialized in History, litersture, journalism and media</p>

    </SwiperSlide>,
    <SwiperSlide key={5}>
      <img src={image5} alt="Image 5" />
      <h5 className="secon-text line-height h5"><span className="orange-text">%</span> 70</h5>
      <h2 className="primary-text line-height h2">College Education</h2>
      <p className="secon-text line-height p">Specialized in Teachimg children and a New Generation</p>

    </SwiperSlide>,
    <SwiperSlide key={6}>
      <img src={image6} alt="Image 6" />
      <h5 className="secon-text line-height h5"><span className="orange-text">%</span> 74.8</h5>
      <h2 className="primary-text line-height h2">College of Nursing</h2>
      <p className="secon-text line-height p">Specialized in Treating illness And Giving Medicine, And Following Up on Cases</p>

    </SwiperSlide>,
  ];

  // Define the handler for the next button
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // Define the handler for the prev button
  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Return the JSX code for the slider component
  return (
    <section>
      
      <div className="container slid-container">
        <h4 className="orange-text">Best Choices</h4>
        <h1 className="primary-text">Colleges</h1>
      </div>

      <div className="slider-container">
        <Swiper
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          // You can customize the breakpoints for different screen sizes
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {slides}
        </Swiper>
        <div className="slider-buttons">
          <button className="btn-slider" onClick={goNext}>
            &lt;
          </button>
          <button className="btn-slider" onClick={goPrev}>
            &gt;
          </button>
        </div>
      </div>

    </section>
  );
};

export default Slider;
