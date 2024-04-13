import { useState, useEffect } from "react";
import { useRef } from "react";
import { useNewVisitMutation, useGetVisitsQuery } from "../../redux/visitsApi";
// import { BtnBox } from "../UpdateDevice/UpdateDevice.styled";
import { Button } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { notifyWarning, notifySuccess } from "../Notify/Notify";
import { Wrapper, Input } from "../CreateOwner/CreateOwner.styled";
import { getPerson } from "../../redux/auth/auth-operations";
import { debounce } from "lodash";
// import { Loader } from "../Loader/Loader";

export const NewVisitForm = () => {
  const inputRef = useRef();
  const searchInputRef = useRef();

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

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

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const time = `${hours}:${minutes}:${seconds}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = searchedPerson.name;
    let newVisit = name + "/" + today;

    if (newVisit === "" || name === undefined) {
      setSearchedPerson({});
      setTimeout(() => {
        location.reload();
      }, 2000);
      return notifyWarning("Сотрудник не найден");
    } else if (list.includes(newVisit.trim().toLowerCase())) {
      setInputValue("");
      setSearchedPerson({});
      setTimeout(() => {
        location.reload();
      }, 2000);
      return notifyWarning("Сегодня уже зарегистрирован");
    } else {
      await addVisit({ name: newVisit, time });
      setTimeout(() => {
        notifySuccess("Успешно создано");
      }, 500);
      setTimeout(() => {
        location.reload();
      }, 2000);
      setInputValue("");
      setSearchedPerson({});
    }
  };

  const handlerInputChange = debounce((e) => {
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
  }, 500);

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      inputRef.current.blur();
      // handleSubmit(e);
      console.log("press Enter");
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
        ref={searchInputRef}
      />
      <form onSubmit={handleSubmit}>
        <Input
          style={{ width: "350px", color: "white" }}
          type="text"
          readOnly
          value={inputValue}
          disabled={true}
          ref={inputRef}
          onKeyDown={handleKeyPress}
        />
        <Button variant="contained" color="success" type="submit">
          Create
        </Button>
      </form>
      {searchedPerson?.name && (
        <div>
          <img
            style={{ width: "350px", height: "350px", marginTop: "30px" }}
            src={
              searchedPerson.imgUrl.includes("http")
                ? searchedPerson.imgUrl
                : "/avatar.jpg"
            }
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
