import { useState, useEffect } from "react";
import { useRef } from "react";
import { useNewVisitMutation, useGetVisitsQuery } from "../../redux/visitsApi";
import { useGetEmployesQuery } from "../../redux/employesApi";
import { Toaster } from "react-hot-toast";
import { AiOutlineClear } from "react-icons/ai";
import { notifyWarning, notifySuccess } from "../Notify/Notify";
import {
  Wrapper,
  Input,
  ButtonSubmit,
  SearchInput,
  FormWrapper,
  Image,
  ClearBtn,
} from "./NewVisitForm.styled";
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
  const workers = useGetEmployesQuery();
  const workersList = workers?.data;

  function findPersonByCode(code) {
    return workersList?.find((user) => {
      return user.code === code;
    });
  }

  const listNames = data?.map((obj) => obj.name.toLowerCase());
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
      }, 5000);
      return notifyWarning("Сотрудник не найден");
    } else if (listNames.includes(newVisit.trim().toLowerCase())) {
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
      const finded = findPersonByCode(e.target.value);
      console.log(finded);
      if (!finded) {
        return null;
      } else {
        setSearchedPerson(finded);
        setInputValue(finded.name);
      }
    }
  }, 500);

  if (loading) {
    return <Loader size={80} />;
  } else {
    return (
      <Wrapper>
        <Toaster />
        <h2 style={{ color: "white" }}>Добавить запись</h2>
        <FormWrapper>
          <SearchInput
            type="text"
            placeholder="Поиск"
            onChange={handlerInputChange}
            ref={searchInputRef}
          />
          <ClearBtn onClick={() => location.reload()}>
            <AiOutlineClear />
          </ClearBtn>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              readOnly
              value={inputValue}
              disabled={true}
              ref={inputRef}
            />
            <ButtonSubmit type="submit">Записать</ButtonSubmit>
          </form>
        </FormWrapper>

        {searchedPerson?.name && (
          <div>
            <Image
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
