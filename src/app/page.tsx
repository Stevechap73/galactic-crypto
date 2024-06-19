"use client";
import { AccueilCard } from "@/Components/Cards/Accueil/AccueilCard";
import { CardContainerTestAccueil } from "@/Components/Cards/Accueil/cardContainerTestAccueil";
import { CardTestAccueil } from "@/Components/Cards/Accueil/cardTestAccueil";
import { MainAccueil } from "@/Components/Cards/Accueil/mainAccueil";
import { CardContainer } from "@/Components/Cards/CardContainer";
import { CardAllCrypto } from "@/Components/Cards/cardAllCrypto";
import { CardCrypto } from "@/Components/Cards/cardCrypto";
import { Footer } from "@/Components/Footer/footer";
import { Header } from "@/Components/Header/header";
import { getAllCryptos } from "@/Services/crypto";
import { CryptoAllProps } from "@/Utils/type";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [cryptosList, setCryptosList] = useState<CryptoAllProps[]>([]);

  // useEffect(() => {
  //   getAllCryptos()
  //     .then((res) => setCryptosList(res.data))
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, []);
  // const [cryptoList, setCryptosList] = useState<CryptoAllProps[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchCryptos = async () => {
  //     setIsLoading(true);
  //     setError(null);
  //     try {
  //       const response = await getAllCryptos();
  //       setCryptosList(response.data);
  //     } catch (err) {
  //       setError(
  //         "Une erreur s'est produite lors de la récupération des données."
  //       );
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchCryptos();
  // }, []);

  useEffect(() => {
    getAllCryptos()
      .then((res) => {
        const sortedCryptos = res.data.sort(
          (a: CryptoAllProps, b: CryptoAllProps) => a.value - b.value
        );
        const topFiveCryptos = sortedCryptos.slice(0, 5);
        setCryptosList(topFiveCryptos);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <MainAccueil />
        <CardContainerTestAccueil>
          {cryptosList &&
            cryptosList?.map((crypto: CryptoAllProps) => {
              return (
                <div key={crypto.id}>
                  <CardTestAccueil
                    name={crypto.name}
                    value={crypto.value}
                    image={crypto.image}
                    quantity={0}
                    created_at={""}
                    id={""}
                  />
                </div>
              );
            })}
        </CardContainerTestAccueil>
        {/* <AccueilCard /> */}
      </main>
      <Footer />
    </div>
  );
}

// export default function Home() {
//   const [cryptoList, setCryptosList] = useState<CryptoAllProps[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCryptos = async () => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         const response = await getAllCryptos();
//         setCryptosList(response.data);
//       } catch (err) {
//         setError(
//           "Une erreur s'est produite lors de la récupération des données."
//         );
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchCryptos();
//   }, []);

//   return (
//     <div>
//       <Header />
//       {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
//       <MainAccueil />
//       <CardContainerTestAccueil>
//         <CardTestAccueil
//           id={""}
//           name={""}
//           value={0}
//           image={""}
//           quantity={0}
//           created_at={""}
//         />
//       </CardContainerTestAccueil>
//       <AccueilCard />
//       {/* </main> */}
//       <Footer />
//     </div>
//   );
// }
