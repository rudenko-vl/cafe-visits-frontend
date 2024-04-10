// import { useState } from "react";
// import { TextField, Button } from "@mui/material";
// import { useUpdateOwnerMutation } from "../../redux/optionsApi";

// export const UpdateName = () => {

//     const [updName] = useUpdateOwnerMutation();
//     const [formData, setFormData] = useState("owner");

//     const handleInputChange = (e) => {
//     const value = e.target.value;
//     setFormData(value);
// };

//   const updatedName = {name: formData};

//    const handlerSubmit = async (e) => {
//     e.preventDefault();
//     const data = { ...updatedName, _id };
//     await updName(data);
//   };

//     return (
//         <div style={{display: "flex", flexDirection: "column"}}>
//         <TextField
//         type="text"
//         sx={{width: "340px"}}
//         name="owner"
//         value={formData}
//         onChange={handleInputChange}
//         autoComplete="off"
//         label="Имя"
//         variant="outlined"
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
//         </div>
//         )

// }