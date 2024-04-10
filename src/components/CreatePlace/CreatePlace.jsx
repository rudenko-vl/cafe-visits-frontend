// import { useState } from "react";
// import { useGetPlacesQuery, useNewPlaceMutation } from "../../redux/optionsApi";
// import { BtnBox } from "../UpdateDevice/UpdateDevice.styled";
// import { Button } from "@mui/material";
// import { Toaster } from "react-hot-toast";
// import { notifyWarning, notifySuccess } from "../Notify/Notify";
// import { Wrapper, Input } from "../CreateOwner/CreateOwner.styled";
// import { Loader } from "../Loader/Loader";

// export const CreatePlace = ({ closeModal }) => {
//   const [newPlace, setNewPlace] = useState("");
//   const [newStorage, obj] = useNewPlaceMutation();
//   const { data } = useGetPlacesQuery();
//   const list = data.map((obj) => obj.place.toLowerCase());
//   const load = obj.isLoading;
//   const handlerInputChange = (e) => {
//     setNewPlace(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (list.includes(newPlace.trim().toLowerCase())) {
//       return notifyWarning("Такое МХ уже создано!");
//     } else {
//       await newStorage({ place: newPlace });
//       setTimeout(() => {
//         notifySuccess("Успешно создано");
//       }, 500);
//       setNewPlace("");
//       setTimeout(() => {
//         closeModal();
//       }, 700);
//     }
//   };
//   return (
//     <Wrapper>
//       <Toaster />
//       <h1>Введите место хранения</h1>
//       <Input type="text" value={newPlace} onChange={handlerInputChange} />
//       <BtnBox>
//         <Button
//           variant="contained"
//           color="success"
//           type="button"
//           onClick={handleSubmit}
//           disabled={newPlace === "" ? true : false}
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
