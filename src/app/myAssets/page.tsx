"use client";
import { CardContainer } from "@/Components/Cards/CardContainer";
import { CardCrypto } from "@/Components/Cards/cardCrypto";
import { CardUserMyAssets } from "@/Components/Cards/cardUserMyAssets";
import { CardUsersAssets } from "@/Components/Cards/cardUsersAssets";
import { Footer } from "@/Components/Footer/footer";
import { Header } from "@/Components/Header/header";
import { AddCryptoModal } from "@/Components/Modals/addCryptoModal";
import { getAllUsersAssets, getMyAssetsUser } from "@/Services/user";
import { CryptoProps, UserMyAssetsProps, UsersAssetsProps } from "@/Utils/type";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { ThreeDots } from "react-loader-spinner";

export default function page() {
  const [userMyAssetsList, setUserMyAssetsList] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isReloadNeeded, setIsReloadNeeded] = useState(true);

  useEffect(() => {
    const fetchUserMyAssets = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await getMyAssetsUser();
        console.log(response.data);
        setUserMyAssetsList(response.data);
      } catch (err) {
        setError(
          "Une erreur s'est produite lors de la récupération des données."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserMyAssets();
  }, [isReloadNeeded]);

  const { push } = useRouter();

  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <button
          className="w-32 bg-pink-300 rounded-md border-indigo-500 text-black  flex items-center justify-evenly h-8"
          onClick={() => {
            push("/admin");
          }}
        >
          Vers Admin
        </button>
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
          <CardContainer>
            <div>
              <CardUserMyAssets userMyassets={userMyAssetsList} />
            </div>
            <div className="w-full h-[200px ]   border-2 border-black">
              {isReloadNeeded &&
                userMyAssetsList.UserHasCrypto.map((element: any) => {
                  return (
                    <CardCrypto
                      key={element.Crypto.id}
                      name={element.Crypto.name}
                      id={""}
                      value={element.Crypto.value}
                      image={element.Crypto.image}
                      quantity={element.Crypto.quantity}
                      created_at={""}
                    />
                  );
                })}
            </div>
          </CardContainer>
        )}
      </main>
      <Footer />
    </div>
  );
}
