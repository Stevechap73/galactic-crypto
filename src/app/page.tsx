"use client";
import { AccueilCard } from "@/Components/Cards/Accueil/AccueilCard";
import { CardContainer } from "@/Components/Cards/CardContainer";
import { CardAllCrypto } from "@/Components/Cards/cardAllCrypto";
import { CardCrypto } from "@/Components/Cards/cardCrypto";
import { Footer } from "@/Components/Footer/footer";
import { Header } from "@/Components/Header/header";
import { getAllCryptos } from "@/Services/crypto";
import { CryptoAllProps } from "@/Utils/type";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [cryptoList, setCryptosList] = useState<CryptoAllProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
  }, []);

  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Accueil</h1>
        <AccueilCard />
      </main>
      <Footer />
    </div>
  );
}
