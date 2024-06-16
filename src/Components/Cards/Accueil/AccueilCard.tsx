import { useRouter } from "next/navigation";
import React from "react";

export const AccueilCard = () => {
  const { push } = useRouter();
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <div className="relative flex max-w-[500px] h-[430px] w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
          <div className="flex h-fit w-full items-center justify-between rounded-t-2xl bg-white px-4 pb-[20px] pt-4 shadow-2xl shadow-gray-100 dark:!bg-navy-700 dark:shadow-none">
            <h4 className="text-lg font-bold text-navy-700 dark:text-white">
              Top Crypto
            </h4>
            <button
              type="button"
              className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
              onClick={() => {
                push("/register");
              }}
            >
              Acheter
            </button>
          </div>
          <div className="w-full overflow-x-scroll px-4 md:overflow-x-hidden">
            <table
              role="table"
              className="w-full min-w-[500px] overflow-x-scroll"
            >
              <thead>
                <tr role="row">
                  <th
                    // colspan="1"
                    role="columnheader"
                    title="Toggle SortBy"
                    // style="cursor: pointer"
                  >
                    <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                      Nom
                    </div>
                  </th>
                  <th
                    // colspan="1"
                    role="columnheader"
                    title="Toggle SortBy"
                    // style="cursor: pointer"
                  >
                    <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                      Prix
                    </div>
                  </th>
                  <th
                    // colspan="1"
                    role="columnheader"
                    title="Toggle SortBy"
                    // style="cursor: pointer"
                  >
                    <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                      Quantité
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody role="rowgroup" className="px-4">
                <tr role="row">
                  <td className="py-3 text-sm" role="cell">
                    <div className="flex items-center gap-2">
                      <div className="h-[30px] w-[30px] rounded-full">
                        <img
                          src="https://images.unsplash.com/photo-1605672509921-d577ebf8542f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          className="h-full w-full rounded-full"
                          alt=""
                        />
                      </div>
                      <p className="text-sm font-medium text-navy-700 dark:text-white">
                        1BANANA COIN
                      </p>
                    </div>
                  </td>
                  <td className="py-3 text-sm" role="cell">
                    <p className="text-md font-medium text-gray-600 dark:text-white">
                      100 $
                    </p>
                  </td>
                  <td className="py-3 text-sm" role="cell">
                    <p className="text-md font-medium text-gray-600 dark:text-white">
                      960
                    </p>
                  </td>
                </tr>
                <tr role="row">
                  <td className="py-3 text-sm" role="cell">
                    <div className="flex items-center gap-2">
                      <div className="h-[30px] w-[30px] rounded-full">
                        <img
                          src="https://images.unsplash.com/photo-1639710342143-f87416f1a913?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          className="h-full w-full rounded-full"
                          alt=""
                        />
                      </div>
                      <p className="text-sm font-medium text-navy-700 dark:text-white">
                        A Snow Coin
                      </p>
                    </div>
                  </td>
                  <td className="py-3 text-sm" role="cell">
                    <p className="text-md font-medium text-gray-600 dark:text-white">
                      99 $
                    </p>
                  </td>
                  <td className="py-3 text-sm" role="cell">
                    <p className="text-md font-medium text-gray-600 dark:text-white">
                      960
                    </p>
                  </td>
                </tr>
                <tr role="row">
                  <td className="py-3 text-sm" role="cell">
                    <div className="flex items-center gap-2">
                      <div className="h-[30px] w-[30px] rounded-full">
                        <img
                          src="https://images.unsplash.com/photo-1579267130459-500e662b083a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGN1cnJlbmN5fGVufDB8fDB8fHww"
                          className="h-full w-full rounded-full"
                          alt=""
                        />
                      </div>
                      <p className="text-sm font-medium text-navy-700 dark:text-white">
                        ASteCoin
                      </p>
                    </div>
                  </td>
                  <td className="py-3 text-sm" role="cell">
                    <p className="text-md font-medium text-gray-600 dark:text-white">
                      94 $
                    </p>
                  </td>
                  <td className="py-3 text-sm" role="cell">
                    <p className="text-md font-medium text-gray-600 dark:text-white">
                      10
                    </p>
                  </td>
                </tr>
                <tr role="row">
                  <td className="py-3 text-sm" role="cell">
                    <div className="flex items-center gap-2">
                      <div className="h-[30px] w-[30px] rounded-full">
                        <img
                          src="https://images.unsplash.com/photo-1469598614039-ccfeb0a21111?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RlVOTll8ZW58MHx8MHx8fDA%3D"
                          className="h-full w-full rounded-full"
                          alt=""
                        />
                      </div>
                      <p className="text-sm font-medium text-navy-700 dark:text-white">
                        ANANANANAS
                      </p>
                    </div>
                  </td>
                  <td className="py-3 text-sm" role="cell">
                    <p className="text-md font-medium text-gray-600 dark:text-white">
                      78 $
                    </p>
                  </td>
                  <td className="py-3 text-sm" role="cell">
                    <p className="text-md font-medium text-gray-600 dark:text-white">
                      10
                    </p>
                  </td>
                </tr>
                <tr role="row">
                  <td className="py-3 text-sm" role="cell">
                    <div className="flex items-center gap-2">
                      <div className="h-[30px] w-[30px] rounded-full">
                        <img
                          src="https://images.unsplash.com/photo-1631260603607-b2709653fc65?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          className="h-full w-full rounded-full"
                          alt=""
                        />
                      </div>
                      <p className="text-sm font-medium text-navy-700 dark:text-white">
                        LioCoin
                      </p>
                    </div>
                  </td>
                  <td className="py-3 text-sm" role="cell">
                    <p className="text-md font-medium text-gray-600 dark:text-white">
                      45 $
                    </p>
                  </td>
                  <td className="py-3 text-sm" role="cell">
                    <p className="text-md font-medium text-gray-600 dark:text-white">
                      1000
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <p className="font-normal text-navy-700 mt-20 mx-auto w-max">
          Profile Card component from{" "}
          <a
            href="https://horizon-ui.com?ref=tailwindcomponents.com"
            target="_blank"
            className="text-brand-500 font-bold"
          >
            Horizon UI Tailwind React
          </a>
        </p> */}
      </div>
    </div>
  );
};
