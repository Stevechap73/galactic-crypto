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
                  <Cryptocard crypto={crypto} isBuyVisible={true} />
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

// Code fonctionnel
// "use client";

// import { Cryptocard } from "@/Components/Cards/testCardKevin";
// import { Footer } from "@/Components/Footer/footer";
// import { Header } from "@/Components/Header/header";
// import SearchCryptos from "@/Components/searchCrypto";
// import { getAllCryptos } from "@/Services/crypto";
// import { CryptoProps } from "@/Utils/type";
// import React, { useEffect, useState } from "react";

// const page = () => {
//   const [cryptosList, setCryptosList] = useState<CryptoProps[]>();

//   useEffect(() => {
//     getAllCryptos()
//       .then((res) => setCryptosList(res.data))
//       .catch((e) => {
//         console.log(e);
//       });
//   }, []);

//   return (
//     <div>
//       <Header />
//       <div className="flex flex-col justify-between items-center">
//         {/* <SearchCryptos
//         setcryptos={function (
//           value: React.SetStateAction<CryptoProps[]>
//         ): void {
//           throw new Error("Function not implemented.");
//         }}
//       /> */}
//         <div className="flex flex-wrap items-center">
//           {cryptosList &&
//             cryptosList?.map((crypto) => {
//               return (
//                 <div
//                   key={crypto.id}
//                   className="border-2 border-solid w-80 h-80 rounded-md m-8 p-4 "
//                 >
//                   <Cryptocard crypto={crypto} isBuyVisible={true} />
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default page;