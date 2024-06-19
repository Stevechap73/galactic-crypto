import {
  CryptoBuyOrOfferOrUpdateProps,
  CryptoCreateOrUpdateProps,
  CryptoDeleteProps,
  CryptoProps,
} from "@/Utils/type";
import axios from "axios";

// All Cryptos
export async function getAllCryptos() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/all`;

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

// Search Crypto
export async function getCryptoSearch(name: string | undefined) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/search/${name}`;
  let axiosConfig = {
    headers: {
      "content-type": "application/json;charset=utf-8",
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

// History Crypto

// Create Crypto
export async function addCrypto(cryptoCreate: CryptoCreateOrUpdateProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/create`;

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
        name: cryptoCreate.name,
        value: Number(cryptoCreate.value),
        quantity: Number(cryptoCreate.quantity),
        image: cryptoCreate.image,
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

// Buy Crypto
// export async function buyCrypto(cryptoBuy: CryptoBuyOrOfferOrUpdateProps) {
//   let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/buy`;

//   let axiosConfig = {
//     headers: {
//       "content-type": "application/x-www-form-urlencoded;charset=utf-8",
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   };
//   return axios
//     .post(
//       url,
//       {
//         id_crypto: cryptoBuy.id_crypto,
//         amount: Number(cryptoBuy.amount),
//       },
//       axiosConfig
//     )
//     .then((res) => {
//       return res;
//     })
//     .catch((e) => {
//       throw new Error(e);
//     });
// }

// Update Crypto par son id
export async function updateCrypto(cryptoUpdate: CryptoProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/update/${cryptoUpdate.id}`;

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
        name: cryptoUpdate.name,
        value: Number(cryptoUpdate.value),
        quantity: Number(cryptoUpdate.quantity),
        image: cryptoUpdate.image,
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

// Delete Crypto par son id
export async function deleteCrypto(cryptoDelete: CryptoDeleteProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/delete/${cryptoDelete.id}`;

  let axiosConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: {
      id: cryptoDelete.id,
    },
  };
  return axios
    .delete(url, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw new Error(e);
    });
}

export async function buyCrypto(cryptoid: string, amount: number) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/buy`;

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
        id_crypto: cryptoid,
        amount: amount,
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
