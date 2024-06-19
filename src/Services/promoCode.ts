import { PromoCodeProps, PromoCodeType } from "@/Utils/type";
import axios from "axios";

// All PromoCode
export async function getAllPromoCode() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/all`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json",
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

// Create PromoCode
export async function addPromoCode(promoCodeCreate: PromoCodeProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/create`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(
      url,
      {
        name: promoCodeCreate.name,
        value: Number(promoCodeCreate.value),
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

// Update PromoCode par son id
export async function updateCrypto(promoCodeUpdate: PromoCodeType) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/update/${promoCodeUpdate.id}`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .patch(
      url,
      {
        name: promoCodeUpdate.name,
        value: Number(promoCodeUpdate.value),
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

// Delete PromoCode
