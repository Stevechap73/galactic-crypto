"use client";
import React, { useEffect, useState } from "react";
import { OfferCard } from "../../Components/Cards/OfferCard";
import { OffersProps } from "@/Utils/type";
import { getAllOffers } from "@/Services/offer";
import { Header } from "@/Components/Header/header";
import { Footer } from "@/Components/Footer/footer";
import { Container } from "postcss";
import { CardContainer } from "@/Components/Cards/CardContainer";

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
      <div className=" m-12">
        <CardContainer>
          {offersList &&
            offersList?.map((offer) => {
              return (
                <div
                  key={offer.id}
                  className="border border-stone-950 rounded-3xl mt-1 p-2 m-3 bg-white"
                >
                  <OfferCard
                    offer={offer}
                    setIsReloadNeeded={setIsReloadNeeded}
                  />
                </div>
              );
            })}
        </CardContainer>
      </div>
      <Footer />
    </div>
  );
};

export default page;
