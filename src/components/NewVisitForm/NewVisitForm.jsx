import { useRef } from "react";
import { useState } from "react";
import { useNewVisitMutation, useGetVisitsQuery } from "../../redux/visitsApi";
// import { BtnBox } from "../UpdateDevice/UpdateDevice.styled";
import { Button } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { notifyWarning, notifySuccess } from "../Notify/Notify";
import { Wrapper, Input } from "../CreateOwner/CreateOwner.styled";
import { getPerson } from "../../redux/auth/auth-operations";
// import { Loader } from "../Loader/Loader";

export const NewVisitForm = () => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [searchedPerson, setSearchedPerson] = useState({});
  // const [addVisit, object] = useNewVisitMutation();
  const [addVisit] = useNewVisitMutation();
  const { data } = useGetVisitsQuery();
  const list = data?.map((obj) => obj.name.toLowerCase());
  // const loading = object.isLoading;
  // console.log(loading);

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const today = day + "." + "0" + month + "." + year;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = searchedPerson.name;
    let newVisit = name + "/" + today;

    if (newVisit === "" || name === undefined) {
      setSearchedPerson({});
      location.reload();
      return notifyWarning("Сотрудник не найден");
    } else if (list.includes(newVisit.trim().toLowerCase())) {
      setInputValue("");
      setSearchedPerson({});
      location.reload();
      return notifyWarning("Сегодня уже зарегистрирован");
    } else {
      await addVisit({ name: newVisit });
      setTimeout(() => {
        notifySuccess("Успешно создано");
      }, 500);
      setInputValue("");
      setSearchedPerson({});
    }
  };

  const handlerInputChange = (e) => {
    if (e.target.value !== "") {
      getPerson(e.target.value).then((data) => {
        if (!data) {
          return null;
        } else {
          setSearchedPerson(data);
          setInputValue(data.name);
        }
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      inputRef.current.blur();
      handleSubmit(e);
    }
  };

  return (
    <Wrapper>
      <Toaster />
      <h1 style={{ color: "white" }}>New visit</h1>
      <Input
        style={{ width: "350px" }}
        type="text"
        onChange={handlerInputChange}
      />
      <form onSubmit={handleSubmit}>
        <Input
          style={{ width: "350px", color: "white" }}
          type="text"
          readOnly
          value={inputValue}
          disabled={true}
          ref={inputRef}
          keydown={handleKeyPress}
        />
        <Button variant="contained" color="success" type="submit">
          Create
        </Button>
      </form>

      {searchedPerson?.name && (
        <div>
          <img
            style={{ width: "350px", height: "350px", marginTop: "30px" }}
            src={searchedPerson.imgUrl}
            alt="img"
          />
        </div>
      )}
      {/* <BtnBox>
        <Button
          variant="contained"
          color="success"
          type="button"
          onClick={handleSubmit}
        >
          Create
        </Button>
      </BtnBox> */}
    </Wrapper>
  );
};
