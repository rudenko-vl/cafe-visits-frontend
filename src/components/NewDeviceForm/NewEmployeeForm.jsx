import { Button, TextField } from "@mui/material";
import { useNewEmployeeMutation } from "../../redux/employesApi";
import { Wrapper, Form, Title } from "./NewDeviceForm.styled";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
// import { notifyWarning, notifySuccess } from "../Notify/Notify";
import { Toaster } from "react-hot-toast";
import { AddBtn, Clue } from "../UpdateDevice/UpdateDevice.styled";
import { ImInfo } from "react-icons/im";
import { Loader } from "../Loader/Loader";

export const NewEmployeeForm = () => {
  const [newPerson, isError] = useNewEmployeeMutation();
  const location = useLocation();
  const query = isError.isLoading;
  const [formData, setFormData] = useState({
    name: "",
    sk: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const { data: allDevices } = useGetDevicesQuery();
  // const InvNumberList = allDevices.map((obj) => obj.position);
  // const SnList = allDevices.map((obj) => obj.sn);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const person = {
      name: formData.name,
      sk: formData.sk,
    };
    await newPerson(person);
    // if (InvNumberList.includes(formData.position.trim())) {
    //   return notifyWarning("Запись с таким инв. уже есть!");
    // } else if (SnList.includes(formData.sn.trim())) {
    //   return notifyWarning("Запись с таким SN уже есть!");
    // } else {
    //   await newPerson(person);
    //   setTimeout(() => {
    //     notifySuccess("Успешно создано");
    //   }, 500);
    //   setTimeout(() => {
    //     window.location.reload();
    //   }, 700);
    // }
  };

  return (
    <Wrapper>
      <Toaster />
      <Link to={location?.state ?? "/"}>
        <Button variant="contained">Назад</Button>
      </Link>
      <Title>Создать новую запись</Title>
      <Form onSubmit={handlerSubmit} style={{ position: "relative" }}>
        <AddBtn>
          <ImInfo />
          <Clue>
            Инв. номер и СН обязательно к заполнению! Минимум три символа.
          </Clue>
        </AddBtn>
        <TextField
          sx={{ marginBottom: "15px" }}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          autoComplete="off"
          label="Name"
          variant="outlined"
        />
        <TextField
          sx={{ marginBottom: "15px" }}
          type="text"
          sn="sk"
          name="sk"
          value={formData.sk}
          onChange={handleInputChange}
          autoComplete="off"
          label="Barcode"
        />

        <Button
          // disabled={
          //   formData.position.length < 3 || formData.sn.length < 3
          //     ? true
          //     : false
          // }
          type="submit"
          variant="contained"
          color="success"
        >
          {query ? <Loader size={20} /> : "Создать"}
        </Button>
      </Form>
    </Wrapper>
  );
};
