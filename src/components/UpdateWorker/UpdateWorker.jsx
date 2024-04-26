import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { DelBtn, BtnWrapper, Wrapper, Img } from "./UpdateWorker.styled";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Loader, Modal, Tooltip, notifySuccess } from "../../components";
import { Toaster, toast } from "react-hot-toast";
import {
  useDeleteEmployeeMutation,
  useUpdateEmployeeMutation,
  useGetEmployesQuery,
} from "../../redux/employesApi";
import { BtnBox, HeaderBtn } from "../Header/Header.styled";

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
        <Tooltip text="Удалить">
          <DelBtn
            disabled={!onePerson ? true : false}
            onClick={handleOpenModal}
          >
            <RiDeleteBin6Line />
          </DelBtn>
        </Tooltip>

        <Link to={"/employes"} style={{ color: "blue" }}>
          Назад
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
