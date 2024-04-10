// import { getDevice } from "../../redux/auth/auth-operations";
// import { useEffect, useState } from "react";
// import {
//   useDeleteDeviceMutation,
//   useUpdateDeviceMutation,
// } from "../../redux/employesApi";
// import { Button } from "@mui/material";
// import { BtnBox } from "./DeviceItem.styled";
// import { Loader, Modal, UpdateDevice } from "../../components";
// import {
//   Container,
//   DelBtn,
//   BtnWrapper,
// } from "../UpdateDevice/UpdateDevice.styled";
// import { Link, useLocation, useParams } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import { notifySuccess } from "../Notify/Notify";

// export const DeviceItem = () => {
//   const [device, setDevice] = useState(null);
//   const { _id } = useParams();
//   const location = useLocation();

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [deleteDevice, isFetching] = useDeleteDeviceMutation();
//   const query = isFetching.isLoading;
//   const [updateDevice, isLoading] = useUpdateDeviceMutation();

//   const updQuery = isLoading.isLoading;
//   const handleOpenModal = () => setIsModalOpen(true);
//   const handleCloseModal = () => setIsModalOpen(false);

//   const handleDeleteContact = async (id) => {
//     await deleteDevice(id).unwrap();
//     notifySuccess("Удалено!");
//     setTimeout(() => {
//       handleCloseModal();
//       window.location.reload();
//     }, 700);
//   };

//   const handleDeviceUpdate = (device) => {
//     const data = { ...device, _id };
//     updateDevice(data);
//   };
//   if (isLoading.status === "fulfilled") {
//     setTimeout(() => {
//       notifySuccess("Успешно обновлено!");
//     }, 1000);
//   }

//   useEffect(() => {
//     getDevice(_id).then((data) => {
//       setDevice(data);
//     });
//   }, [_id]);

//   if (device) {
//     return (
//       <>
//         <Container>
//           <Toaster />
//           <BtnWrapper>
//             <Link to={location?.state ?? "/"}>
//               <Button variant="contained">Назад</Button>
//             </Link>
//             <DelBtn onClick={handleOpenModal}>
//               {query ? <Loader size={20} /> : "Удалить запись"}
//             </DelBtn>
//           </BtnWrapper>
//           {updQuery ? (
//             <Loader size={70} />
//           ) : (
//             <UpdateDevice device={device} onUpdate={handleDeviceUpdate} />
//           )}
//           <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
//             <h1>Удалить эту запись?</h1>
//             <h2 style={{ textAlign: "center", marginTop: "20px" }}>
//               {device.position}
//             </h2>
//             <BtnBox>
//               <Button
//                 variant="contained"
//                 color="error"
//                 onClick={() => handleDeleteContact(_id)}
//               >
//                 {query ? <Loader size={20} /> : "Да"}
//               </Button>
//               <Button
//                 sx={{ marginLeft: "15px" }}
//                 variant="contained"
//                 color="success"
//                 onClick={handleCloseModal}
//               >
//                 Нет
//               </Button>
//             </BtnBox>
//           </Modal>
//         </Container>
//       </>
//     );
//   }
//   return <Loader size={100} />;
// };
