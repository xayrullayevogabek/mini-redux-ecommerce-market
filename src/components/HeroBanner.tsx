"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CardType } from "@/interfaces";


const cards: CardType[] = [
  {
    id: 0,
    image:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg",
    describtion: "Health & Personal Care",
  },
  {
    id: 1,
    image:
      "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469391_2584745_379x304_1X_en_US._SY304_CB609304299_.jpg",
    describtion: "Home & Kitchen Under $30",
  },
  {
    id: 2,
    image:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg",
    describtion: "Find your ideal TV",
  },
  {
    id: 3,
    image:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg",
    describtion: "Beauty picks",
  },
];

const HeroBanner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        dynamicHeight={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        <div>
          <img src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/I/717RUPA1bDL._SX3000_.jpg" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" />
        </div>
      </Carousel>
      <div className="hidden py-10 px-10 lg:flex flex-row w-full justify-center space-x-3 absolute mt-2 top-1/3">
        {cards?.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white w-full border shadow-md flex flex-col space-y-3"
          >
            <h1 className="font-bold text-xl">{item?.describtion}</h1>
            <img
              className="object-cover w-full h-80"
              src={item?.image}
              alt={item?.describtion}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
