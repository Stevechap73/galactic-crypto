import { CryptoProps } from "@/Utils/type";
import React from "react";
import { BuyCryptoModal } from "../Modals/buyCryptoModal";

export const Cryptocard = ({
  crypto,
  isBuyVisible,
}: {
  crypto: CryptoProps;
  isBuyVisible: boolean;
}) => {
  return (
    <div>
      <div className=" m-3">
        <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
          <img
            className="mb-3 w-auto h-40  shadow-lg mx-auto rounded-2xl"
            src={crypto.image}
            alt={crypto.name}
          />
          <h1 className="text-lg text-gray-700">{crypto.name}</h1>
          <h3 className="text-sm text-gray-400 ">Valeur : {crypto.value} $</h3>
          <p className="text-xs text-gray-400 mt-4">
            Quantité restante sur le serveur : {crypto.quantity}
          </p>
          <p className="text-xs text-gray-400 mt-4">
            Date de création : {crypto.created_at}
          </p>
          <BuyCryptoModal crypto={crypto} isBuyVisible={isBuyVisible} />
        </div>
      </div>
    </div>
  );
};

// Code focntionnel
// import { CryptoProps } from "@/Utils/type";
// import React from "react";
// import { BuyCryptoModal } from "../Modals/buyCryptoModal";

// export const Cryptocard = ({
//   crypto,
//   isBuyVisible,
// }: {
//   crypto: CryptoProps;
//   isBuyVisible: boolean;
// }) => {
//   return (
//     <div>
//       <div className="flex flex-row flex-end"></div>
//       <img
//         src={crypto.image}
//         alt={crypto.name}
//         className="w-full h-48 object-cover"
//       />
//       <p>{crypto.name}</p>

//       <p className="text-sm">Value: {crypto.value}</p>
//       <p className="text-sm">Remaining Quantity on server: {crypto.quantity}</p>
//       <BuyCryptoModal crypto={crypto} isBuyVisible={isBuyVisible} />
//     </div>
//   );
// };
