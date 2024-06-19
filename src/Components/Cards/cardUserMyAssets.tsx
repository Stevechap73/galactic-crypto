import {
  PromoCodeProps,
  UserMyAssetsProps,
  UsersAssetsProps,
} from "@/Utils/type";
import React from "react";

export const CardUserMyAssets = ({
  userMyassets,
}: {
  userMyassets: UserMyAssetsProps;
}) => {
  return (
    <div>
      <div className=" m-3">
        <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
          <h1 className="text-lg text-gray-700">MES ACTIFS</h1>
          <h2 className="text-lg text-gray-700">
            Nom : {userMyassets.firstName}{" "}
          </h2>
          <h4 className="text-sm text-gray-400">
            Prenon : {userMyassets.lastName}{" "}
          </h4>
          <h4 className="text-sm text-gray-400">
            Pseudo : {userMyassets.pseudo}{" "}
          </h4>
          <h4 className="text-sm text-gray-400">
            Age : {userMyassets.age} ans
          </h4>
          <h4 className="text-sm text-gray-400">
            Disponiblité : {userMyassets.dollarAvailables.toFixed(2)} $
          </h4>
          <h4 className="text-sm text-gray-400">{""}</h4>
          {/* <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">
            Hire Me
          </button> */}
        </div>
      </div>
    </div>
  );
};
