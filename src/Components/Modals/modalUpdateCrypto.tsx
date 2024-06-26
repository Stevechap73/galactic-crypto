// import { CryptoProps } from "@/Utils/type";
// import { Box, Modal } from "@mui/material";
// import { useState } from "react";
// import { IoIosCloseCircleOutline } from "react-icons/io";
// import { UpdateCryptoForm } from "./updateCryptoModal";

// type ModalUpdateProps = {
//   cryptoProps: CryptoProps;
//   setIsReloadNeeded: any;
// };

// export const ModalComponent = ({
//   cryptoProps,
//   setIsReloadNeeded,
// }: ModalUpdateProps) => {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const style = {
//     position: "absolute" as "absolute",
//     top: "40%",
//     left: "20%",
//     transform: "translate(-50%, -50%)",
//     width: "60%",

//     bgcolor: "background.paper",
//     border: "2px solid #000",
//     boxShadow: 24,
//     p: 4,
//   };

//   return (
//     <div className="h-full  overflow-scroll">
//       <button onClick={handleOpen}>Edit animal</button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <div>
//             <span
//               className="absolute right-10 top-10 cursor-pointer"
//               onClick={handleClose}
//             >
//               <IoIosCloseCircleOutline color="#000" size={48} />
//             </span>
//             <UpdateCryptoForm
//               cryptoProps={cryptoProps}
//               setIsReloadNeeded={setIsReloadNeeded}
//               handleClose={handleClose}
//             />
//           </div>
//         </Box>
//       </Modal>
//     </div>
//   );
// };
