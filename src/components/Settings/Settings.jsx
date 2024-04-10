// import { useState } from "react";
// import { useGetNamesQuery, useGetPlacesQuery, useDeletePlaceMutation, useDeleteOwnerMutation } from "../../redux/optionsApi";
// import { Wrapper, DelBtn, OwnersList, PlacesList, Item, UpdBtn, Box, Title, AddBtn } from "./Settings.styled";
// import {Loader, Modal, CreatePlace, CreateOwner, UpdateName} from '../../components';
// import {RiDeleteBin6Line} from 'react-icons/ri';
// import {BiEditAlt} from 'react-icons/bi';
// import {IoMdPersonAdd} from 'react-icons/io';
// import {BsFillHouseAddFill} from 'react-icons/bs';
 

// export const Settings = () => {

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const handleOpenModal = () => setIsModalOpen(true);
//   const handleCloseModal = () => setIsModalOpen(false);

//   const [isModalOpen2, setIsModalOpen2] = useState(false);
//   const handleOpenModal2 = () => setIsModalOpen2(true);
//   const handleCloseModal2 = () => setIsModalOpen2(false);

//   const [isModalUpdOpen, setIsModalUpdOpen] = useState(false);
//   const handleOpenModalUpd = () => setIsModalUpdOpen(true);
//   const handleCloseModalUpd = () => setIsModalUpdOpen(false);

//   const { data: owners, refetch: refetchOwners } = useGetNamesQuery();
//   const { data: placesList, refetch } = useGetPlacesQuery();
//   const [deletePlace, isFetching] = useDeletePlaceMutation();
//   const [deleteOwner, isFetch] = useDeleteOwnerMutation();
//   const load = isFetching.status === 'pending';
//   const loading = isFetch.status === 'pending';

//   const handleDeletePlace = async (id) => {
//     await deletePlace(id).unwrap();
//     setTimeout(() => {
//         refetch()
//     }, 700);
//   };

//   const handleDeleteOwner = async (id) => {
//     await deleteOwner(id).unwrap();
//     setTimeout(() => {
//         refetchOwners()
//     }, 700);
//   };

//   if (load || loading) {
// return <Loader size={100}/>
// } else {
// return (
//     <Wrapper>
//     <Box>
//       <Title>Список сотрудников</Title>
//        <AddBtn onClick={handleOpenModal2}><IoMdPersonAdd/></AddBtn>
//       <OwnersList>
//        {!owners ? <Loader/> : owners.map((owner) => {
//     return (<Item key={owner._id}>{owner.name}<div style={{marginLeft: "auto"}}><DelBtn onClick={() => handleDeleteOwner(owner._id)}><RiDeleteBin6Line/></DelBtn><UpdBtn id={owner._id} onClick={handleOpenModalUpd}><BiEditAlt/></UpdBtn></div></Item>)
//     })}

//     </OwnersList>
    
//     </Box>

//      <Box style={{marginLeft: "30px"}}>
//       <Title>Список мест хранения</Title>
//          <AddBtn onClick={handleOpenModal}><BsFillHouseAddFill/></AddBtn>
//     <PlacesList>
//        {!placesList ? <Loader/> : placesList.map((place) => {
//     return (<Item key={place._id}>{place.place}<div style={{marginLeft: "auto"}}><DelBtn onClick={() => handleDeletePlace(place._id)}><RiDeleteBin6Line/></DelBtn><UpdBtn><BiEditAlt/></UpdBtn></div></Item>)
//     })} 
//     </PlacesList>
//      </Box>

//     <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
//         <CreatePlace closeModal={handleCloseModal} />
//       </Modal>
//       <Modal isOpen={isModalOpen2} onClose={handleCloseModal2}>
//         <CreateOwner closeModal={handleCloseModal2} />
//       </Modal>

//       <Modal isOpen={isModalUpdOpen} onClose={handleCloseModalUpd}>
//        <UpdateName owners={owners} />
//       </Modal>

//     </Wrapper>
    
//     )
// }
// };