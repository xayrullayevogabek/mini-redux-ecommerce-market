"use client";
import Link from "next/link";
import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useAppSelector } from "@/redux/hooks";

const Header = () => {
  const cartLength = useAppSelector((state) => state.cart.cart).length;

  return (
    <header className="text-gray-400 shadow-md body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-bold text-xl items-center text-black mb-4 md:mb-0"
        >
          Ecommerce <span className=" ml-2 text-blue-600">Market</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 cursor-pointer hover:text-black transition duration-500">
            Offers
          </a>
          <a className="mr-5 cursor-pointer hover:text-black transition duration-500">
            Products
          </a>
          <a className="mr-5 cursor-pointer hover:text-black transition duration-500">
            Deals
          </a>
        </nav>
        <div className="flex space-x-5 items-center">
          <Link href={"/cart"}>
            <button className=" hidden md:flex border p-2 rounded-lg hover:text-white hover:bg-blue-500 transition duration-400 border-blue-500">
              Your Cart{" "}
              {cartLength ? (
                <span className=" bg-red-500 text-white ml-2 w-6 rounded-full">
                  {cartLength}
                </span>
              ) : (
                ""
              )}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
