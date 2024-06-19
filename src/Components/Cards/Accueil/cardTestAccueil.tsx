import { CryptoAllProps } from "@/Utils/type";
import { useRouter } from "next/navigation";

import React from "react";
import { SlBasket } from "react-icons/sl";
import { cursorTo } from "readline";

export const CardTestAccueil = ({ name, image, value }: CryptoAllProps) => {
  const { push } = useRouter();
  return (
    <div>
      <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <img
              className="h-[83px] w-[83px] rounded-lg"
              src={image}
              alt={name}
            />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Nom : {name}
            </p>
            <p className="mt-2 text-sm text-gray-600">
              {" "}
              Valeur : {value.toFixed(2)} $
            </p>
          </div>
        </div>
        <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
          <SlBasket
            style={{ cursor: "pointer" }}
            onClick={() => {
              push("/register");
            }}
          />
          {/* <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 5.63l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41z"></path>
          </svg> */}
        </div>
      </div>
    </div>
  );
};
