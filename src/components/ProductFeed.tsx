"use client";
import React, { useEffect, useState } from "react";
import { ProductType } from "@/interfaces";
import { getProducts } from "@/api";
import Product from "./Product";

const ProductFeed = () => {
  const [product, setProduct] = useState<ProductType[]>([]);

  console.log(product);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getProducts();
        setProduct(res);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="mt-20 mx-8">
      <h1 className="ml-4 font-bold text-2xl">Related Products</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {product?.map((item) => (
          <Product item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductFeed;
