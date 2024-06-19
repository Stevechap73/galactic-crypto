"use client";
import { CardContainer } from "@/Components/Cards/CardContainer";
import { CardCrypto } from "@/Components/Cards/cardCrypto";
import { Footer } from "@/Components/Footer/footer";
import { Header } from "@/Components/Header/header";
import { AddCryptoModal } from "@/Components/Modals/addCryptoModal";
import { getAllCryptos } from "@/Services/crypto";
import { CryptoAllProps } from "@/Utils/type";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";

export default function page() {
  const [cryptoList, setCryptosList] = useState<CryptoAllProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isReloadNeeded, setIsReloadNeeded] = useState(true);

  useEffect(() => {
    const fetchCryptos = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await getAllCryptos();
        setCryptosList(response.data);
      } catch (err) {
        setError(
          "Une erreur s'est produite lors de la récupération des données."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchCryptos();
  }, [isReloadNeeded]);

  const { push } = useRouter();

  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <button
          className="w-32 bg-pink-300 rounded-md border-indigo-500 text-black flex items-center justify-evenly h-8 mb-5"
          onClick={() => {
            push("/promoCode");
          }}
        >
          PromoCode
        </button>
        <button
          className="w-32 bg-pink-300 rounded-md border-indigo-500 text-black flex items-center justify-evenly h-8 mb-5"
          onClick={() => {
            push("/usersAssets");
          }}
        >
          Users Assets
        </button>
        <AddCryptoModal setIsReloadNeeded={setIsReloadNeeded} />
        {isLoading ? (
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <CardContainer name={"Toutes les Cryptos"}>
            {cryptoList.map((crypto: CryptoAllProps) => (
              <CardCrypto
                key={crypto.id}
                name={crypto.name}
                value={crypto.value}
                image={crypto.image}
                quantity={crypto.quantity}
                created_at={crypto.created_at}
                id={crypto.id}
              />
            ))}
          </CardContainer>
        )}
      </main>
      <Footer />
    </div>
  );
}
