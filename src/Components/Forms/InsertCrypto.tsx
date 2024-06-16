"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMsg } from "../Error";
import { schemaInsertCrypto } from "@/Validations/validationForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { CryptoCreateOrUpdateProps, CryptoProps } from "@/Utils/type";
import { addCrypto } from "@/Services/crypto";

type InsertCryptoProps = {
  name: string;
  image: string;
  quantity: number;
  value: number;
};
export const InsertCryptoForm = ({
  setIsReloadNeeded,
  handleClose,
}: {
  setIsReloadNeeded: any;
  handleClose: any;
}) => {
  const [error, setError] = useState("");
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InsertCryptoProps>({
    mode: "onChange",
    resolver: yupResolver(schemaInsertCrypto),
    defaultValues: { name: "Bitcoin", image: "url", quantity: 0, value: 0 },
  });

  const onSubmit: SubmitHandler<InsertCryptoProps> = (data) => {
    addCrypto(data)
      .then((res) => {
        if (res.status === 201) {
          setIsReloadNeeded(true);
          push("/admin");
        } else {
          setError("Erreur lors de l'ajout de la crypto.");
        }
      })
      .catch((err) => {
        setError("Une erreur s'est produite. Veuillez réessayer.");
      });
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Inserer une Crypto
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nom de la Crypto
            </label>
            <div className="mt-2">
              <input
                id="name"
                type="text"
                autoComplete="current-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("name")}
              />
              {errors?.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="value"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Valeur
            </label>
            <div className="mt-2">
              <input
                id="value"
                type="number"
                autoComplete="current-value"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("value")}
              />
              {errors?.value && (
                <p className="text-red-500">{errors.value.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Quantité
            </label>
            <div className="mt-2">
              <input
                id="quantity"
                type="number"
                autoComplete="current-quantity"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("quantity")}
              />
              {errors?.quantity && (
                <p className="text-red-500">{errors.quantity.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Image
            </label>
            <div className="mt-2">
              <input
                id="image"
                type="text"
                autoComplete="current-image"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("image")}
              />
              {errors?.image && (
                <p className="text-red-500">{errors.image.message}</p>
              )}
            </div>
          </div>

          <div>
            <p className="text-red-600 text-italic">{error}</p>
            <input
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              value="Valider Crypto"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
