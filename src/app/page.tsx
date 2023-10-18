"use client";
import React from "react";
import HeroBanner from "@/components/HeroBanner";
import ProductFeed from "@/components/ProductFeed";
import { useAppSelector } from "@/redux/hooks";

const Home = () => {
  
  return (
    <div>
      <HeroBanner />
      <ProductFeed />
    </div>
  );
};

export default Home;
