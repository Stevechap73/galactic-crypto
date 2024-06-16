"use client";

import React, { useEffect, useState } from "react";

import { OfferCard } from "../../Components/Cards/OfferCard";
import { OffersProps } from "@/Utils/type";
import { getAllOffers } from "@/Services/offer";
import { Header } from "@/Components/Header/header";
import { Footer } from "@/Components/Footer/footer";

const page = () => {
  const [offersList, setOffersList] = useState<OffersProps[]>();
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);

  useEffect(() => {
    getAllOffers()
      .then((res) => {
        setOffersList(res.data);
        setIsReloadNeeded(false);
      })
      .catch((e) => {
        setIsReloadNeeded(false);
        console.log(e);
      });
  }, [isReloadNeeded]);

  return (
    <div>
      <Header />
      <div className="border-2 border-gray-400 rounded-lg">
        {offersList &&
          offersList?.map((offer) => {
            return (
              <div
                key={offer.id}
                className="border-2 border-solid w-full rounded-md mt-1 p-2 "
              >
                <OfferCard
                  offer={offer}
                  setIsReloadNeeded={setIsReloadNeeded}
                />
              </div>
            );
          })}
      </div>
      <Footer />
    </div>
  );
};

export default page;
