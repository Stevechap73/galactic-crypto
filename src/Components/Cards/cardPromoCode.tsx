import { PromoCodeProps } from "@/Utils/type";
import React from "react";

export const CardPromoCode = ({ name, value }: PromoCodeProps) => {
  return (
    <div>
      <div className=" m-3">
        <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs w-80">
          <h1 className="text-lg text-gray-700">{name} </h1>
          <h3 className="text-sm text-gray-400 ">
            Valeur : {value.toFixed(2)} $
          </h3>
        </div>
      </div>
    </div>
  );
};
