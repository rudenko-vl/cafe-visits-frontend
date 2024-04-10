// import { useState } from "react";
// import { useGetNamesQuery, useNewOwnerMutation } from "../../redux/optionsApi";
// import { BtnBox } from "../UpdateDevice/UpdateDevice.styled";
// import { Button } from "@mui/material";
// import { Toaster } from "react-hot-toast";
// import { notifyWarning, notifySuccess } from "../Notify/Notify";
// import { Wrapper, Input } from "./CreateOwner.styled";
// import { Loader } from "../Loader/Loader";

// export const CreateOwner = ({ closeModal }) => {
//   const [newName, setNewName] = useState("");
//   const [newOwner, obj] = useNewOwnerMutation();
//   const { data } = useGetNamesQuery();
//   const ownerList = data.map((obj) => obj.name.toLowerCase());
//   const load = obj.isLoading;
//   const handlerInputChange = (e) => {
//     setNewName(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (ownerList.includes(newName.trim().toLowerCase())) {
//       return notifyWarning("Такой сотрудник уже есть!");
//     } else {
//       await newOwner({ name: newName });
//       setTimeout(() => {
//         notifySuccess("Успешно создано");
//       }, 500);
//       setNewName("");
//       setTimeout(() => {
//         closeModal();
//       }, 700);
//     }
//   };
//   return (
//     <Wrapper>
//       <Toaster />
//       <h1>Введите имя сотрудника</h1>
//       <Input type="text" value={newName} onChange={handlerInputChange} />
//       <BtnBox>
//         <Button
//           variant="contained"
//           color="success"
//           type="button"
//           onClick={handleSubmit}
//           disabled={newName === "" ? true : false}
//         >
//           {load ? <Loader size={20} /> : "Добавить"}
//         </Button>
//         <Button
//           sx={{ marginLeft: "15px" }}
//           variant="contained"
//           color="error"
//           onClick={closeModal}
//         >
//           Отмена
//         </Button>
//       </BtnBox>
//     </Wrapper>
//   );
// };
