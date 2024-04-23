import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { Wrapper, Img } from "./UpdateWorker.styled";
import { useGetEmployesQuery } from "../../redux/employesApi";
import { DelBtn, Clue, BtnWrapper } from "./UpdateWorker.styled";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Loader, Modal } from "../../components";
import { notifySuccess } from "../Notify/Notify";
import { Toaster, toast } from "react-hot-toast";
import { useDeleteEmployeeMutation } from "../../redux/employesApi";
import { BtnBox, HeaderBtn } from "../Header/Header.styled";
import { useUpdateEmployeeMutation } from "../../redux/employesApi";

export const UpdateWorker = () => {
  const { _id } = useParams();
  const workers = useGetEmployesQuery();
  const workersList = workers?.data;

  const [update, obj] = useUpdateEmployeeMutation();

  function findPersonById(_id) {
    return workersList?.find((person) => {
      return person._id === _id;
    });
  }
  const onePerson = findPersonById(_id);

  const [formData, setFormData] = useState({
    name: onePerson?.name || "",
    code: onePerson?.code || "",
    imgUrl: onePerson?.imgUrl || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const updatedData = {
    name: formData?.name,
    imgUrl: formData?.imgUrl,
    code: formData?.code,
  };

  const [removePerson, object] = useDeleteEmployeeMutation();
  const deleting = object.isLoading;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleDeletePerson = async (id) => {
    await removePerson(id).unwrap();
    handleCloseModal();
    formData.name = "";
    formData.code = "";
    formData.imgUrl = "";
    setTimeout(() => {
      notifySuccess("Успешно удалено!");
    }, 500);
  };

  const handlerSubmit = () => {
    const data = { ...updatedData, _id };
    const myPromise = update(data);

    toast.promise(
      myPromise,
      {
        loading: "Обновление...",
        success: "Успешно обновлено!",
        error: "Error",
      },
      {
        style: {
          minWidth: "250px",
        },
        success: {
          duration: 2000,
          icon: "✅",
        },
      }
    );
  };

  const values = [onePerson?.name, onePerson?.imgUrl, onePerson?.code];
  const newValues = Object.keys(updatedData).map((key) => updatedData[key]);
  const areEqual = JSON.stringify(values) === JSON.stringify(newValues);

  return (
    <Wrapper>
      <BtnWrapper>
        <DelBtn disabled={!onePerson ? true : false} onClick={handleOpenModal}>
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
        name="name"
        value={formData?.name || ""}
        onChange={handleInputChange}
        autoComplete="off"
        label="Name"
        variant="outlined"
      />
      <TextField
        sx={{ marginBottom: "15px" }}
        type="text"
        name="code"
        value={formData?.code || ""}
        onChange={handleInputChange}
        autoComplete="off"
        disabled={true}
        label="Code"
        variant="outlined"
      />
      <TextField
        sx={{ marginBottom: "15px" }}
        type="text"
        name="imgUrl"
        autoComplete="off"
        value={formData?.imgUrl || ""}
        onChange={handleInputChange}
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
        disabled={areEqual || !onePerson ? true : false}
        onClick={handlerSubmit}
      >
        {obj.isLoading ? <Loader size={20} /> : "Обновить"}
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
      <Toaster />
    </Wrapper>
  );
};
