"use client";
import { getAllCryptos } from "@/Services/crypto";
import React, { useEffect, useState } from "react";
import SearchCryptos from "../searchCrypto";
import Crypto from "./Crypto";

export type cryptoType = {
  id?: string;
  image: string;
  name: string;
  value: number;
  quantity: number;
};
const ListCryptos = () => {
  const [cryptos, setcryptos] = useState<cryptoType[]>([]);
  console.log(cryptos);

  const [isLoading, setisLoading] = useState(false);

  return (
    <div className="flex flex-col justify-between items-center">
      <SearchCryptos setcryptos={setcryptos} />
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {cryptos &&
          cryptos.map((crypto: any) => {
            return <Crypto key={crypto.name} {...crypto} />;
          })}
      </div>
      <div className="flex justify-center items-center">
        {isLoading ? "chargement des données" : ""}
      </div>
    </div>
  );
};

export default ListCryptos;
