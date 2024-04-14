import { useState, useEffect } from "react";
import { useRef } from "react";
import { useNewVisitMutation, useGetVisitsQuery } from "../../redux/visitsApi";
import { Toaster } from "react-hot-toast";
import { notifyWarning, notifySuccess } from "../Notify/Notify";
import {
  Wrapper,
  Input,
  Form,
  ButtonSubmit,
  SearchInput,
} from "./NewVisitForm.styled";
import { getPerson } from "../../redux/auth/auth-operations";
import { debounce } from "lodash";
import { Loader } from "../Loader/Loader";

export const NewVisitForm = () => {
  const inputRef = useRef();
  const searchInputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [searchedPerson, setSearchedPerson] = useState({});

  useEffect(() => {
    searchInputRef.current.focus();
  }, [inputValue]);

  const [addVisit, object] = useNewVisitMutation();
  const { data } = useGetVisitsQuery();
  const list = data?.map((obj) => obj.name.toLowerCase());
  const loading = object.isLoading;

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
      setInputValue("");
      setSearchedPerson({});
    }
  };

  const handlerInputChange = debounce((e) => {
    setSearchedPerson(searchedPerson);
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

  if (loading) {
    return <Loader size={80} />;
  } else {
    return (
      <Wrapper>
        <Toaster />
        <h1 style={{ color: "white" }}>Добавить запись</h1>
        <SearchInput
          type="text"
          onChange={handlerInputChange}
          ref={searchInputRef}
        />
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            readOnly
            value={inputValue}
            disabled={true}
            ref={inputRef}
          />
          <ButtonSubmit type="submit">Записать</ButtonSubmit>
        </Form>
        {searchedPerson?.name && (
          <div>
            <img
              style={{ width: "300px", height: "300px", marginTop: "30px" }}
              src={
                searchedPerson.imgUrl.includes("http")
                  ? searchedPerson.imgUrl
                  : "/avatar.jpg"
              }
              alt="img"
            />
          </div>
        )}
      </Wrapper>
    );
  }
};
