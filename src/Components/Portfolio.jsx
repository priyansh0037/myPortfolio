import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import travel from "../Assets/travel.jpeg"
import food from "../Assets/food.jpeg"
import youtube from "../Assets/yt.mp4"
import youtubethum from "../Assets/ytthumbnail.jpg"
import blog from "../Assets/blog.mp4"
import blogthumb from "../Assets/blogthuumbnail.jpeg"


const Portfolio = () => {
  return (
    <div id="Portfolio" className=" portfolio flex items-center justify-center flex-col h-[90vh]    text-center  pt-[5rem] mb-6 sm:mb-0 ">
      <span className="text-blackPrimary  text-[3rem] font-bold dark:text-white ">
        Recent Projects
      </span>
      <span className="text-[2.5rem] text-red-500 font-semibold dark:text-red-400">
        Portfolio
      </span>

      {/* slider */}

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        grabCursor={true}
        className="portfolio-slider"
        
        breakpoints={{
          380:{
            slidesPerView: 1,
          },
          // when window width is >= 768px
          600: {
            slidesPerView: 2,
          },
          // when window width is >= 992px
          992: {
            slidesPerView: 2,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 2,
          },
        }}        
      >


<SwiperSlide>
          <video controls className="rounded-lg" poster={blogthumb}>
            <source src={youtube} type="video/mp4"  />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>

        <SwiperSlide>
          <video controls className="rounded-lg" poster={youtubethum}>
            <source src={blog} type="video/mp4"  />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>

        </Swiper>





    </div>



        
  );
};

export default Portfolio;
