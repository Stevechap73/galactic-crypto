"use client";

import { updateCrypto } from "@/Services/crypto";
import { CryptoProps } from "@/Utils/type";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

type UpdateCryptoProps = {
  cryptoProps: CryptoProps;
  setIsReloadNeeded: any;
  handleClose: any;
};
export const UpdateCryptoForm = ({
  cryptoProps,
  setIsReloadNeeded,
  handleClose,
}: UpdateCryptoProps) => {
  const [name, setName] = useState("");
  const [quantity, setquantity] = useState("");
  const [value, setvalue] = useState("");
  const [image, setImage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const [cryptoData, setCryptoData] = useState<CryptoProps>();

  useEffect(() => {
    if (!isLoaded && cryptoData) {
      setName(cryptoData.name);
      setquantity(cryptoData.quantity);
      setvalue(cryptoData.value);
      setImage(cryptoData.image);

      setIsLoaded(true);
    }
  }, []);

  const [error, setError] = useState("");
  const { push } = useRouter();

  function handleSubmit() {
    if (!name || !image || !quantity || !value || !image) {
      setError("Il manque des champs");
    } else {
      let cryptoUpdateData = {
        id: cryptoProps.id,
        name: name,
        image: image,
        quantity: Number(quantity),
        value: Number(value),
        created_at: cryptoProps.created_at,
        updated_at: cryptoProps.updated_at,
      };

      updateCrypto(cryptoUpdateData)
        .then((res) => {
          console.log(res);
          setIsReloadNeeded(true);
          handleClose();
        })
        .catch((e) => console.log(e));
    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white w-1/2 mx-auto">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Modifer une Crypto
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nom Crypto
            </label>
            <div className="mt-2">
              <input
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                onChange={(e) => setName(e.target.value)}
                defaultValue={cryptoProps?.name}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Image de la Crypto
            </label>
            <div className="mt-2">
              <input
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                onChange={(e) => setImage(e.target.value)}
                defaultValue={cryptoProps?.image}
              />
              <div>
                <p>Preview</p>
                <img
                  src={image || cryptoProps?.image}
                  className="w-32 h-32 object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Quantité
            </label>
            <div className="mt-2">
              <input
                type="number"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                onChange={(e) => setquantity(e.target.value)}
                defaultValue={cryptoProps?.quantity}
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Valeur de la Crypto
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                  onChange={(e) => setvalue(e.target.value)}
                  defaultValue={cryptoProps?.value}
                />
              </div>
            </div>

            <div>
              <p className="text-red-600 text-italic">{error}</p>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Modifier Crypto
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
