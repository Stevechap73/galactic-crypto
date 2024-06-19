import React from "react";

export const CardContainerTestAccueil = ({ children }: any) => {
  return (
    <div className="flex flex-col justify-center items-center h-auto mt-5">
      <div className="relative flex max-w-[500px] w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
        <div className="!z-5 relative flex h-full w-full flex-col rounded-[20px] bg-white bg-clip-border p-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none">
          <div className="mb-8 w-full">
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              Top 5 des Cryptos à fort potentiel
            </h4>
            <p className="mt-2 text-base text-gray-600">
              Plongez dans l'univers de Galactic-Crypto et investissez dans les
              meilleures cryptomonnaies du marché. Saisissez l'opportunité de
              multiplier vos gains dès maintenant !
            </p>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
