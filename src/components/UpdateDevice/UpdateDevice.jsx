// import PropTypes from "prop-types";
// import { useState } from "react";
// import { Wrapper, Title } from "./UpdateDevice.styled";
// import { Button, TextField } from "@mui/material";
// import { Toaster } from "react-hot-toast";

// export const UpdateDevice = ({ device, onUpdate }) => {
//   const { name, sk, } = device;
//   const [formData, setFormData] = useState({
//     name,
//     sk,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const newDevice = {
//     name: formData.name,
//     sk: formData.sk,
//   };

//   const values = Object.keys(device)
//     .filter(
//       (key) =>
//         key !== "_id" &&
//         key !== "user" &&
//         key !== "createdAt" &&
//         key !== "updatedAt" &&
//         key !== "__v"
//     )
//     .map((key) => device[key]);

//   const newValues = Object.keys(newDevice).map((key) => newDevice[key]);
//   const areEqual = JSON.stringify(values) === JSON.stringify(newValues);

//   const handlerSubmit = async (e) => {
//     e.preventDefault();
//     await onUpdate(newDevice);
//     setTimeout(() => {
//       window.location.reload();
//     }, 2000);
//   };

//   return (
//     <Wrapper>
//       <Toaster />
//       <Title>{}</Title>
//       <TextField
//         sx={{ marginBottom: "15px" }}
//         type="text"
//         position="position"
//         name="position"
//         value={formData.name}
//         onChange={handleInputChange}
//         autoComplete="off"
//         label="name"
//         variant="outlined"
//       />
//       <TextField
//         sx={{ marginBottom: "15px" }}
//         type="text"
//         sn="sk"
//         name="sk"
//         value={formData.sk}
//         onChange={handleInputChange}
//         autoComplete="off"
//         label="sk"
//       />
//       <Button
//         sx={{ marginTop: "30px" }}
//         variant="contained"
//         color="success"
//         type="button"
//         onClick={handlerSubmit}
//         disabled={areEqual ? true : false}
//       >
//         Обновить
//       </Button>
//     </Wrapper>
//   );
// };

// UpdateDevice.propTypes = {
//   device: PropTypes.string.isRequired,
//   onUpdate: PropTypes.string.isRequired,
// };
