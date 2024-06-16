"use client";

import { CardContainer } from "@/Components/Cards/CardContainer";
import { Cryptocard } from "@/Components/Cards/testCardKevin";
import { Footer } from "@/Components/Footer/footer";
import { Header } from "@/Components/Header/header";
import SearchCryptos from "@/Components/searchCrypto";
import { getAllCryptos } from "@/Services/crypto";
import { CryptoProps } from "@/Utils/type";
import React, { useEffect, useState } from "react";

const page = () => {
  const [cryptosList, setCryptosList] = useState<CryptoProps[]>();

  useEffect(() => {
    getAllCryptos()
      .then((res) => setCryptosList(res.data))
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <SearchCryptos
        setcryptos={function (
          value: React.SetStateAction<CryptoProps[]>
        ): void {
          throw new Error("Function not implemented.");
        }}
      /> */}
        <CardContainer name={"Toutes les Cryptos"}>
          {cryptosList &&
            cryptosList?.map((crypto) => {
              return (
                <div key={crypto.id}>
                  <Cryptocard crypto={crypto} isBuyVisible={false} />
                </div>
              );
            })}
        </CardContainer>
      </main>
      <Footer />
    </div>
  );
};

export default page;
