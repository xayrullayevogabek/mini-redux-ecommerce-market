import React, { FC, useState } from "react";
import { ProductType } from "@/interfaces";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/CartReducer";
interface ProductPageType {
  item: ProductType;
}

const Product: FC<ProductPageType> = ({ item }) => {
  const [added, setAdded] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const addItemToCart = (item: ProductType) => {
    dispatch(addToCart(item));
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div className="p-4 w-full shadow-lg rounded-xl group">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-contain object-center w-full h-full block group-hover:scale-105 transition duration-500"
          src={item.image}
        />
      </a>
      <div className="mt-4 w-full ">
        <h3 className="text-gray-500 uppercase text-xs tracking-widest title-font mb-1">
          {item.category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium truncate">
          {item.title}
        </h2>
        <div className="flex items-center justify-between mt-2">
          <p>${item.price}</p>
          <p>{item.rating.rate} ratings</p>
        </div>
        <button
          onClick={() => addItemToCart(item)}
          className="w-full border border-blue-500 hover:bg-blue-100 transition duration-500 py-2 rounded-lg mt-5 "
        >
          {added ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Product;
