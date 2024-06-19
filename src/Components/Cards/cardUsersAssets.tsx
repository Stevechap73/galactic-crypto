import { PromoCodeProps, UsersAssetsProps } from "@/Utils/type";
import React from "react";

export const CardUsersAssets = ({
  firstName,
  lastName,
  pseudo,
  dollarAvailables,
  UserHasCrypto,
}: UsersAssetsProps) => {
  return (
    <div>
      <div className=" m-3">
        <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
          <h1 className="text-lg text-gray-700">{firstName} </h1>
          <h2 className="text-lg text-gray-700">{lastName} </h2>
          <h2 className="text-lg text-gray-700">{pseudo} </h2>
          <h3 className="text-sm text-gray-400 ">
            Disponiblité : {dollarAvailables.toFixed(2)} $
          </h3>
          <h4 className="text-sm text-gray-400">{""}</h4>
          {/* <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">
            Hire Me
          </button> */}
        </div>
      </div>
    </div>
  );
};
