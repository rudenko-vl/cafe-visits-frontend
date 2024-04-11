import { Button, TextField } from "@mui/material";
import { useNewEmployeeMutation } from "../../redux/employesApi";
import { Wrapper, Form, Title } from "./NewEmployeeForm.styled";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { notifyWarning, notifySuccess } from "../Notify/Notify";
import { Toaster } from "react-hot-toast";
// import { Loader } from "../Loader/Loader";
import { useGetEmployesQuery } from "../../redux/employesApi";

export const NewEmployeeForm = () => {
  const [newPerson, isError] = useNewEmployeeMutation();
  const location = useLocation();
  const query = isError.isLoading;
  console.log(query);
  const [formData, setFormData] = useState({
    name: "",
    imgUrl: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { data: allPersons } = useGetEmployesQuery();
  const personsList = allPersons?.map((obj) => obj.name);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const person = {
      name: formData.name,
      imgUrl: formData.imgUrl,
    };

    if (personsList.includes(formData.name.trim())) {
      return notifyWarning("Такой сотрудник уже есть!");
    } else {
      await newPerson(person);
      setTimeout(() => {
        notifySuccess("Успешно создано");
      }, 500);
      setTimeout(() => {
        setFormData({
          name: "",
          imgUrl: "",
        });
      }, 700);
    }
  };

  return (
    <Wrapper>
      <Toaster />
      <Link to={location?.state ?? "/"}>
        <Button variant="contained">Назад</Button>
      </Link>
      <Title>Создать новую запись</Title>
      <Form onSubmit={handlerSubmit} style={{ position: "relative" }}>
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
          name="imgUrl"
          value={formData.imgUrl}
          onChange={handleInputChange}
          autoComplete="off"
          label="Photo link"
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
          Создать
          {/* {query ? <Loader size={20} /> : "Создать"} */}
        </Button>
      </Form>
    </Wrapper>
  );
};
