// import { useState } from "react";
// import { MenuItem, InputLabel, FormControl, Select } from "@mui/material";
// import { AddBtn, Clue } from "../UpdateDevice/UpdateDevice.styled";
// import { IoMdAddCircleOutline } from "react-icons/io";
// import { Modal, CreatePlace } from "../../components";

// export const OptionPlace = ({ value, onChange, listOptions, label, name }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const handleOpenModal = () => setIsModalOpen(true);
//   const handleCloseModal = () => setIsModalOpen(false);

//   return (
//     <>
//       <FormControl sx={{ marginBottom: "15px" }}>
//         <InputLabel>{label}</InputLabel>
//         <Select name={name} value={value} label={label} onChange={onChange}>
//           {listOptions &&
//             listOptions.map((item) => {
//               return (
//                 <MenuItem key={item._id} value={item.place}>
//                   {item.place}
//                 </MenuItem>
//               );
//             })}
//         </Select>
//         <AddBtn onClick={handleOpenModal}>
//           <IoMdAddCircleOutline />
//           <Clue>Добавить место</Clue>
//         </AddBtn>
//       </FormControl>
//       <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
//         <CreatePlace closeModal={handleCloseModal} />
//       </Modal>
//     </>
//   );
// };
