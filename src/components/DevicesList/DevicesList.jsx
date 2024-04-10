// import { Container, NavLink } from "./DevicesList.styled";
// import { Button } from "@mui/material";

// export const DevicesList = ({ data }) => {
//   return (
//     <Container>
//       <table>
//         <thead>
//           <tr>
//             <th>№</th>
//             <th>Инв. номер</th>
//             <th>СН</th>
//             <th>УЗ</th>
//             <th>Модель</th>
//             <th>Состояние</th>
//             <th>Место</th>
//             <th>Ответственный</th>
//             <th>Ссылка</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data &&
//             data.map((device, index) => (
//               <tr key={device._id}>
//                 <td>{index + 1}</td>
//                 <td>{device.position}</td>
//                 <td>{device.sn}</td>
//                 <td>{device.uz}</td>
//                 <td>{device.model}</td>
//                 <td>{device.state}</td>
//                 <td>{device.place}</td>
//                 <td>{device.owner}</td>
//                 <td>
//                   <NavLink to={`${device._id}`}>
//                     <Button variant="outlined">Открыть</Button>
//                   </NavLink>
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </Container>
//   );
// };
