// import { useDispatch } from "react-redux";
// import { Box, TextField } from "@mui/material";
// import { inputСhange } from "../../redux/filter/action";
// import { TopWrapper } from "./Filter.styled";

// export const Filter = ({ value }) => {
//   const dispatch = useDispatch();

//   const changeFilter = ({ target: { value } }) => dispatch(inputСhange(value));
//   return (
//     <>
//       <TopWrapper>
//         <Box
//           component="form"
//           sx={{
//             "& .MuiTextField-root": { m: 1, width: "35ch" },
//           }}
//           noValidate
//           autoComplete="off"
//           type="text"
//           name="filter"
//           value={value}
//           onChange={changeFilter}
//         >
//           <TextField
//             size="small"
//             label="Поиск"
//             variant="filled"
//             color="success"
//             sx={{ backgroundColor: "white", borderRadius: "5px" }}
//           />
//         </Box>
//       </TopWrapper>
//     </>
//   );
// };
