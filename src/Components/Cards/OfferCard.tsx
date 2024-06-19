import { buyOffer } from "@/Services/offer";
import { OffersProps } from "@/Utils/type";
import React, { Dispatch, SetStateAction } from "react";

import toast from "react-hot-toast";
import { Cryptocard } from "./testCardKevin";

export const OfferCard = ({
  offer,
  setIsReloadNeeded,
}: {
  offer: OffersProps;
  setIsReloadNeeded: Dispatch<SetStateAction<boolean>>;
}) => {
  function handleCryptoBuyViaOffer(offerId: string) {
    buyOffer(offerId)
      .then((res) => {
        if (res.data) {
          if (res.status === 204) {
            toast.error("Item already sold");
          }

          if (res.status === 201) {
            toast.success("Success");
            setIsReloadNeeded(true);
          }
        }
      })
      .catch((e) => {
        if (e) {
          toast.error("Plus d'argent");
          console.log(e);
        }
      });
  }

  return (
    <div>
      <div className="text-center">
        <p>Nombre de jetons: {offer.amount}</p>
        <p>Vendeur: {offer.User.pseudo}</p>
      </div>
      <Cryptocard crypto={offer.Crypto} isBuyVisible={false} />
      <div className="w-full flex justify-center">
        <button
          className="bg-gray-200 text-center rounded-lg text-indigo-600 w-20 p-1 text-sm mt-1"
          onClick={() => {
            handleCryptoBuyViaOffer(offer.id);
          }}
        >
          Achat
        </button>
      </div>{" "}
    </div>
  );
};
