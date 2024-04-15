import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { Wrapper, Img } from "./UpdateWorker.styled";
import { useGetEmployesQuery } from "../../redux/employesApi";
import { DelBtn, Clue, BtnWrapper } from "./UpdateWorker.styled";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Loader, Modal } from "../../components";
import { useDeleteEmployeeMutation } from "../../redux/employesApi";
import { BtnBox, HeaderBtn } from "../Header/Header.styled";

export const UpdateWorker = () => {
  const { _id } = useParams();
  const workers = useGetEmployesQuery();
  const workersList = workers?.data;

  function findPersonById(_id) {
    return workersList?.find((person) => {
      return person._id === _id;
    });
  }
  const onePerson = findPersonById(_id);

  const [removePerson, object] = useDeleteEmployeeMutation();
  const deleting = object.isLoading;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleDeletePerson = async (id) => {
    await removePerson(id).unwrap();
    handleCloseModal();
  };

  return (
    <Wrapper>
      <BtnWrapper>
        <DelBtn onClick={handleOpenModal}>
          <RiDeleteBin6Line />
          <Clue>Удалить запись</Clue>
        </DelBtn>
        <Link to={"/employes"}>
          <Button sx={{ fontWeight: "700" }} variant="contained">
            Назад
          </Button>
        </Link>
      </BtnWrapper>

      <TextField
        sx={{ marginBottom: "15px" }}
        type="text"
        name="Name"
        value={onePerson?.name || ""}
        // onChange={handleInputChange}
        autoComplete="off"
        label="Name"
        variant="outlined"
      />
      <TextField
        sx={{ marginBottom: "15px" }}
        type="text"
        name="code"
        value={onePerson?.code || ""}
        autoComplete="off"
        label="Code"
        variant="outlined"
      />
      <TextField
        sx={{ marginBottom: "15px" }}
        type="text"
        name="link"
        autoComplete="off"
        value={onePerson?.imgUrl || ""}
        label="Link"
        variant="outlined"
      />
      {onePerson && (
        <Img
          src={
            onePerson.imgUrl.includes("http") ? onePerson.imgUrl : "/avatar.jpg"
          }
          alt="img"
        />
      )}
      <Button
        sx={{ marginTop: "30px" }}
        variant="contained"
        color="success"
        type="button"
        disabled={true}
        // onClick={handlerSubmit}
      >
        Обновить
      </Button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h3>Хотите удалить {onePerson?.name}?</h3>
        <BtnBox>
          <HeaderBtn
            variant="contained"
            color="success"
            onClick={() => handleDeletePerson(_id)}
          >
            {deleting ? <Loader size={20} /> : "Да"}
          </HeaderBtn>
          <HeaderBtn
            sx={{ marginLeft: "15px" }}
            variant="contained"
            color="error"
            onClick={handleCloseModal}
          >
            Нет
          </HeaderBtn>
        </BtnBox>
      </Modal>
    </Wrapper>
  );
};
