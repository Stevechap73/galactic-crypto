// "use client";

// import { updateCrypto } from "@/Services/crypto";
// import { CryptoProps } from "@/Utils/type";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// type UpdateCryptoProps = {
//   cryptoProps?: CryptoProps;
//   setIsReloadNeeded: any;
//   handleClose: any;
// };
// export const UpdateCryptoForm = ({
//   cryptoProps,
//   setIsReloadNeeded,
//   handleClose,
// }: UpdateCryptoProps) => {
//   const [name, setName] = useState("");
//   const [value, setValue] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [image, setImage] = useState("");
//   const [updated_at, setUpdated_at] = useState("");

//   const [isLoaded, setIsLoaded] = useState(false);

//   const [cryptoData, setCryptoData] = useState<CryptoProps>();

//   // useEffect(() => {
//   //   getAllBoxes().then((res) => {
//   //     setBoxesList(res.data);
//   //   });

//   //   getAllCategories().then((res) => {
//   //     setcategoriesList(res.data);
//   //   });

//   //   getAllUsers().then((res) => {
//   //     setUsersList(res.data);
//   //   });
//   // }, []);

//   useEffect(() => {
//     if (!isLoaded && cryptoData) {
//       setName(cryptoData.name);
//       setValue(cryptoData.value);
//       setQuantity(cryptoData.quantity);
//       setImage(cryptoData.image);
//       setUpdated_at(cryptoData.created_at);
//       setIsLoaded(true);
//     }
//   }, []);

//   const [error, setError] = useState("");
//   const { push } = useRouter();

//   function handleSubmit() {
//     if (!name || !image || !value || !quantity || !updated_at) {
//       setError("Tous les champs sont obligatoires");
//     } else {
//       let CryptoUpdateData = {
//         id: cryptoProps?.id,
//         name: name,
//         image: image,
//         value: value,
//         quantity: quantity,
//         updated_at: new Date(),
//       };

//       updateCrypto(CryptoUpdateData)
//         .then((res) => {
//           setIsReloadNeeded(true);
//           handleClose();
//         })
//         .catch((e) => console.log(e));
//     }
//   }

//   return (
//     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white w-1/2 mx-auto">
//       <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//         <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//           Update animal
//         </h2>
//       </div>

//       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//         <div className="space-y-6">
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               Animal name
//             </label>
//             <div className="mt-2">
//               <input
//                 type="text"
//                 required
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
//                 onChange={(e) => setName(e.target.value)}
//                 defaultValue={animalProps?.name}
//               />
//             </div>
//           </div>
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               Animal image
//             </label>
//             <div className="mt-2">
//               <input
//                 type="text"
//                 required
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
//                 onChange={(e) => setImage(e.target.value)}
//                 defaultValue={animalProps?.image}
//               />
//               <div>
//                 <p>Preview</p>
//                 <img
//                   src={image || animalProps?.image}
//                   className="w-32 h-32 object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               Animal arrival
//             </label>
//             <div className="mt-2">
//               <input
//                 type="text"
//                 required
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
//                 onChange={(e) => setArrival(e.target.value)}
//                 defaultValue={new Date(animalProps.arrival).toLocaleDateString(
//                   "FR"
//                 )}
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Animal departure
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
//                   onChange={(e) => setDeparture(e.target.value)}
//                   defaultValue={new Date(
//                     animalProps.departure
//                   ).toLocaleDateString("FR")}
//                 />
//               </div>
//             </div>
//             <div>
//               <div className="flex items-center justify-between">
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Category
//                 </label>
//               </div>
//               <div className="mt-2">
//                 <select
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
//                   onChange={(e) => setCategoryId(e.target.value)}
//                 >
//                   {categoriesList &&
//                     categoriesList.map((category) => {
//                       return (
//                         <option
//                           selected={animalProps.category.id === category.id}
//                           key={category.id}
//                           value={category.id}
//                         >
//                           {category.name}
//                         </option>
//                       );
//                     })}
//                 </select>
//               </div>
//             </div>
//             <div>
//               <div className="flex items-center justify-between">
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Box
//                 </label>
//               </div>
//               <div className="mt-2">
//                 <select
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
//                   onChange={(e) => setBoxId(e.target.value)}
//                   defaultValue={animalProps.box.id}
//                 >
//                   {boxesList &&
//                     boxesList.map((boxData) => {
//                       return (
//                         <option
//                           selected={animalProps.box.id === boxData.id}
//                           value={boxData.id}
//                           key={boxData.id}
//                         >
//                           {boxData.name}
//                         </option>
//                       );
//                     })}
//                 </select>
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   User
//                 </label>
//               </div>
//               <div className="mt-2">
//                 <select
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
//                   onChange={(e) => setUserId(e.target.value)}
//                 >
//                   {usersList &&
//                     usersList.map((user) => {
//                       return (
//                         <option
//                           selected={animalProps.user.id === user.id}
//                           key={user.id}
//                           value={user.id}
//                         >
//                           {user.name}
//                         </option>
//                       );
//                     })}
//                 </select>
//               </div>
//             </div>

//             <div>
//               <p className="text-red-600 text-italic">{error}</p>
//               <button
//                 type="submit"
//                 className="mt-8 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 onClick={() => {
//                   handleSubmit();
//                 }}
//               >
//                 Edit animal
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
