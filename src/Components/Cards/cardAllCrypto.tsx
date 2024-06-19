import { CryptoAllProps } from "@/Utils/type";
import React from "react";

type showCryptoProps = {
  cryptoProps: CryptoAllProps;
  setIsReloadNeeded: any;
};

export const CardAllCrypto = ({
  cryptoProps,
  setIsReloadNeeded,
}: showCryptoProps) => {
  return (
    <div className="my-4 ">
      <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-4">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none  h-96 object-contain w-full">
          <img
            src={cryptoProps.image}
            alt="ui/ux review check rounded-t-md"
            className="rounded-t-xl object-cover w-full h-96"
          />
        </div>
        <div className="p-6">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {cryptoProps.name}
          </h4>
          <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            Valeur: {cryptoProps.value.toFixed(2)}
          </p>
          <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            Quantité: {cryptoProps.quantity}
          </p>
          <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            Date de création: {cryptoProps.created_at}
          </p>
        </div>
      </div>
    </div>
  );
};
