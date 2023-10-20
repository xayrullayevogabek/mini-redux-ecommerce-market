"use client";
import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "@/redux/CartReducer";
import { ProductType } from "@/interfaces";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  const router = useRouter();
  const stripePromise = loadStripe(
    "pk_test_51O3HGmAXTgBzwtX0Ag0IQjtlDmvcskTH0jRjcGbt6r2xjwvPMG92tuQhjt7gJBHmCE6UiBVfBZFeKnw4c6bisipG00oqJXVBv9"
  );
  console.log("cart", cart);
  const total = cart
    ?.map((item) => item.quantity * item.price)
    .reduce((prev, curr) => prev + curr, 0);
  const grantTotal = total + 35;

  const dispatch = useAppDispatch();

  const increaseQuantity = (item: ProductType) => {
    dispatch(incrementQuantity(item));
  };

  const deacreaseQuantity = (item: ProductType) => {
    dispatch(decrementQuantity(item));
  };

  const removeItem = (item: ProductType) => {
    dispatch(removeFromCart(item));
    toast.success("Product successfully deleted");
  };

  const handlePay = () => {
    router.replace("/success");
    toast.success(" Successfully Payment ");
  };

  return (
    <div>
      {cart.length > 0 ? (
        <div className="w-full h-screen p-10">
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="md:flex items-start md:space-x-6 justify-between">
            <div className="rounded-lg w-full">
              {cart?.map((item) => (
                <div
                  key={item.id}
                  className="justify-between  mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                >
                  <img
                    src={item?.image}
                    alt="product-image"
                    className="w-full h-36 object-contain rounded-lg sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {item?.title}
                      </h2>
                      <p className="mt-1 text-xs text-gray-700">
                        {item?.category}
                      </p>
                      <p className=" line-clamp-2">{item?.description}</p>
                      <p className="text-sm mt-4 font-semibold text-green-500">
                        <span className="text-black mr-3 font-semibold">
                          Price:
                        </span>
                        $ {item?.price}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <span
                          onClick={() => deacreaseQuantity(item)}
                          className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          -
                        </span>
                        <span className="w-10 text-center">
                          {item?.quantity}
                        </span>
                        <span
                          onClick={() => increaseQuantity(item)}
                          className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 mr-5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          +
                        </span>
                        <TrashIcon
                          onClick={() => removeItem(item)}
                          className="h-6 w-6 text-red-500 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 h-full w-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/2">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">${total.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">$35</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">
                    ${grantTotal.toFixed(2)} USD
                  </p>
                </div>
              </div>
              <button
                onClick={handlePay}
                className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
              >
                Check out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full items-center justify-center">
          <img
            src={
              "https://img.freepik.com/free-vector/man-shopping-supermarket_74855-7612.jpg?size=626&ext=jpg&uid=R115605209&ga=GA1.1.971318784.1692102805&semt=ais"
            }
            alt=""
            className="h-96 w-96 mt-24"
          />
          <Link href={"/"}>
            <button className=" bg-blue-500 text-white p-4 mt-5 rounded-lg hover:text-black hover:bg-transparent border hover:border-blue-500 transition duration-500">
              Back to Buy
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
