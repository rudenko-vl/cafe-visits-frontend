// import { useState } from "react";
// import { MenuItem, InputLabel, FormControl, Select } from "@mui/material";
// import { AddBtn, Clue } from "../UpdateDevice/UpdateDevice.styled";
// import { IoMdPersonAdd } from "react-icons/io";
// import { Modal, CreateOwner } from "../../components";

// export const Options = ({ value, onChange, listOptions, label, name }) => {
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
//                 <MenuItem key={item._id} value={item.name}>
//                   {item.name}
//                 </MenuItem>
//               );
//             })}
//         </Select>
//         <AddBtn onClick={handleOpenModal}>
//           <IoMdPersonAdd />
//           <Clue>Добавить сотрудника</Clue>
//         </AddBtn>
//       </FormControl>

//       <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
//         <CreateOwner closeModal={handleCloseModal} />
//       </Modal>
//     </>
//   );
// };
