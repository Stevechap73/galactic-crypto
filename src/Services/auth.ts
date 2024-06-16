import { AuthLoginProps, AuthRegisterProps } from "@/Utils/type";
import axios from "axios";

// Register
export async function addRegister(authProps: AuthRegisterProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}auth/signup`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  return axios
    .post(
      url,
      {
        firstName: authProps.firstName,
        lastName: authProps.lastName,
        pseudo: authProps.pseudo,
        age: Number(authProps.age),
        city: authProps.city,
        email: authProps.email,
        password: authProps.password,
        confirmPassword: authProps.confirmPassword,
        prompCode: authProps.prompCode,
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

// Login
export async function login(authProps: AuthLoginProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}auth/signin`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  return axios
    .post(
      url,
      {
        email: authProps.email,
        password: authProps.password,
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
