"use client";
import { CardContainer } from "@/Components/Cards/CardContainer";
import { CardUsersAssets } from "@/Components/Cards/cardUsersAssets";
import { Footer } from "@/Components/Footer/footer";
import { Header } from "@/Components/Header/header";
import { AddCryptoModal } from "@/Components/Modals/addCryptoModal";
import { getAllUsersAssets } from "@/Services/user";
import { UsersAssetsProps } from "@/Utils/type";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { ThreeDots } from "react-loader-spinner";

export default function page() {
  const [userAssetsList, setUserAssetsList] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isReloadNeeded, setIsReloadNeeded] = useState(true);

  useEffect(() => {
    const fetchUsersAssets = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await getAllUsersAssets();
        setUserAssetsList(response.data);
      } catch (err) {
        setError(
          "Une erreur s'est produite lors de la récupération des données."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsersAssets();
  }, [isReloadNeeded]);

  const { push } = useRouter();

  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <button
          className="w-32 bg-pink-300 rounded-md border-indigo-500 text-black flex items-center justify-evenly h-8 mb-20"
          onClick={() => {
            push("/admin");
          }}
        >
          Admin
        </button>
        {/* <AddCryptoModal setIsReloadNeeded={setIsReloadNeeded} /> */}
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
            {userAssetsList.map((usersAssets: UsersAssetsProps) => (
              <CardUsersAssets
                firstName={usersAssets.firstName}
                lastName={usersAssets.lastName}
                pseudo={usersAssets.pseudo}
                dollarAvailables={usersAssets.dollarAvailables}
                UserHasCrypto={{
                  created_at: "",
                  id: "",
                  image: "",
                  name: "",
                  quantity: 0,
                  updated_at: "",
                  value: 0,
                }}
              />
            ))}
          </CardContainer>
        )}
      </main>
      <Footer />
    </div>
  );
}
