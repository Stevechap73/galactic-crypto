"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { schemaInsertPromoCode } from "@/Validations/validationForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { addPromoCode } from "@/Services/promoCode";

type InsertPromoCodeProps = {
  name: string;
  value: number;
};
export const InsertPromoCodeForm = ({
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
  } = useForm<InsertPromoCodeProps>({
    mode: "onChange",
    resolver: yupResolver(schemaInsertPromoCode),
    defaultValues: { name: "Promo", value: 0 },
  });

  const onSubmit: SubmitHandler<InsertPromoCodeProps> = (data) => {
    addPromoCode(data)
      .then((res) => {
        if (res.status === 201) {
          setIsReloadNeeded(false);
          handleClose();
          push("/promoCode");
        } else {
          setError("Erreur lors de l'ajout du PromoCode.");
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
          Inserer un PromoCode
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nom du PromoCode
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
            <p className="text-red-600 text-italic">{error}</p>
            <input
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              value="Valider PromoCode"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
