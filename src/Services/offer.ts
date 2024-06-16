import { CryptoBuyOrOfferOrUpdateProps } from "@/Utils/type";
import axios from "axios";

// All Offer
export async function getAllOffers() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}offer/all`;

  let axiosConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .get(
      url,

      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw new Error(e);
    });
}

// Create Offer
export async function addCrypto(offerCreate: CryptoBuyOrOfferOrUpdateProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}offer/create`;

  let axiosConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(
      url,
      {
        id_crypto: offerCreate.id_crypto,
        amount: Number(offerCreate.amount),
      },
      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw new Error(e);
    });
}

// Update Offer par son id
export async function updateCrypto(offerUpdate: CryptoBuyOrOfferOrUpdateProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}offer/update/${offerUpdate.id}`;

  let axiosConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .patch(
      url,
      {
        id_crypto: offerUpdate.id_crypto,
        amount: Number(offerUpdate.amount),
      },

      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw new Error(e);
    });
}

// Delete Offer par son id

// buy Offer Attention c'est du trade
export async function buyOffer(id_offer: string) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}trade/create`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(url, { id_offer: id_offer }, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw new Error(e);
    });
}
