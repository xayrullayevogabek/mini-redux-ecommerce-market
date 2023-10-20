import Link from "next/link";
import React from "react";

const SeccessPayment = () => {
  return (
    <div className="w-full h-full flex justify-center flex-col items-center ">
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/order-placed-4283423-3581435.png"
        alt=""
      />
      <Link href={"/"}>
        <button className=" bg-blue-500 text-white p-4 mt-5 rounded-lg hover:text-black hover:bg-transparent border hover:border-blue-500 transition duration-500">
          Back to Buy
        </button>
      </Link>
    </div>
  );
};

export default SeccessPayment;
