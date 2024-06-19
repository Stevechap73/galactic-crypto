"use client";
import { CardContainer } from "@/Components/Cards/CardContainer";
import { CardPromoCode } from "@/Components/Cards/cardPromoCode";
import { Footer } from "@/Components/Footer/footer";
import { Header } from "@/Components/Header/header";
import { AddPromoCodeModal } from "@/Components/Modals/addPromoCode";
import { getAllPromoCode } from "@/Services/promoCode";
import { PromoCodeProps } from "@/Utils/type";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function page() {
  const [promoCodeList, setPromoCodeList] = useState<PromoCodeProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isReloadNeeded, setIsReloadNeeded] = useState(true);

  useEffect(() => {
    const fetchPromoCode = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await getAllPromoCode();
        setPromoCodeList(response.data);
      } catch (err) {
        setError(
          "Une erreur s'est produite lors de la récupération des données."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchPromoCode();
  }, [isReloadNeeded]);

  const { push } = useRouter();

  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <button
          className="w-32 bg-pink-300 rounded-md border-indigo-500 text-black  flex items-center justify-evenly h-8 mb-5"
          onClick={() => {
            push("/usersAssets");
          }}
        >
          User Assets
        </button>
        <AddPromoCodeModal setIsReloadNeeded={setIsReloadNeeded} />
        {isLoading ? (
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <CardContainer name={"Toutes les Cryptos"}>
            {promoCodeList.map((promoCode: PromoCodeProps) => (
              <CardPromoCode name={promoCode.name} value={promoCode.value} />
            ))}
          </CardContainer>
        )}
      </main>
      <Footer />
    </div>
  );
}
