import { CryptoAllProps } from "@/Utils/type";
import React from "react";

export const CardCrypto = ({
  name,
  image,
  value,
  quantity,
  created_at,
}: CryptoAllProps) => {
  return (
    <div>
      <div className=" m-3">
        <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
          <img
            className="mb-3 w-auto h-40  shadow-lg mx-auto rounded-2xl"
            src={image}
            alt="product designer"
          />
          <h1 className="text-lg text-gray-700">{name} </h1>
          <h3 className="text-sm text-gray-400 ">Valeur : {value} $</h3>
          <p className="text-xs text-gray-400 mt-4">
            Quantité disponible : {quantity}
          </p>
          <p className="text-xs text-gray-400 mt-4">
            Date de création : {created_at}
          </p>
          {/* <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">
            Hire Me
          </button> */}
        </div>
      </div>
    </div>
  );
};
