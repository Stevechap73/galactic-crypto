import { addRegister } from "@/Services/auth";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMsg } from "../Error";
import { schemaRegister } from "@/Validations/validationForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthRegisterProps } from "@/Utils/type";

export const RegisterForm = () => {
  const [error, setError] = useState("");
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AuthRegisterProps>({
    mode: "onChange",
    // resolver: yupResolver(schemaRegister),
    defaultValues: { firstName: "steve" },
  });

  const onSubmit: SubmitHandler<AuthRegisterProps> = (data) => {
    if (data.password === data.confirmPassword) {
      addRegister(data).then((res) => {
        push("/login");
      });
    } else {
      alert("Le mot de passe n'est pas indentique !!");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Créer votre compte
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nom
            </label>
            <div className="mt-2">
              <input
                id="firstName"
                type="text"
                autoComplete="current-firstName"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("firstName")}
              />
              {errors?.firstName && (
                <p className="text-red-500">{errors.firstName.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Prénom
            </label>
            <div className="mt-2">
              <input
                id="lastName"
                type="text"
                autoComplete="current-lastName"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("lastName", {
                  required: "Ce champs est obligatoire",
                  minLength: 3,
                  maxLength: 20,
                })}
              />
              {errors?.lastName && (
                <p className="text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="pseudo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Pseudo
            </label>
            <div className="mt-2">
              <input
                id="pseudo"
                type="text"
                autoComplete="current-pseudo"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("pseudo", {
                  required: "Ce champs est obligatoire",
                  minLength: { value: 3, message: "mini : 3 caractères" },
                  maxLength: { value: 20, message: "max : 20 caractères" },
                })}
              />
              {errors?.pseudo && (
                <p className="text-red-500">{errors.pseudo.message}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="pseudo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Age
            </label>
            <div className="mt-2">
              <input
                id="age"
                type="number"
                autoComplete="current-age"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("age", {
                  required: "Ce champs est obligatoire",
                  minLength: { value: 3, message: "mini : 3 caractères" },
                  maxLength: { value: 20, message: "max : 20 caractères" },
                })}
              />
              {errors?.age && (
                <p className="text-red-500">{errors.age.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Ville
            </label>
            <div className="mt-2">
              <input
                id="city"
                type="text"
                autoComplete="current-city"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("city", {
                  required: "Ce champs est obligatoire",
                  minLength: { value: 3, message: "mini : 3 caractères" },
                  maxLength: { value: 20, message: "max : 20 caractères" },
                })}
              />
              {errors?.city && (
                <p className="text-red-500">{errors.city.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("email")}
              />
              {errors?.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("password")}
              />
              {errors?.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="confirmPassword"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("confirmPassword")}
              />
              {errors?.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="prompCode"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Code promo
            </label>
            <div className="mt-2">
              <input
                id="prompCode"
                type="text"
                autoComplete="current-prompCode"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("prompCode", {
                  required: "Ce champs est obligatoire",
                  maxLength: { value: 20, message: "max : 20 caractères" },
                })}
              />
              {errors?.prompCode && (
                <p className="text-red-500">{errors.prompCode.message}</p>
              )}
            </div>
          </div>

          <div>
            <p className="text-red-600 text-italic">{error}</p>
            <input
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              value="Singn up"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
