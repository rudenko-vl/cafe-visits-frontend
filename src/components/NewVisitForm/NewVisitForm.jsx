import { useState, useEffect, useRef } from "react";
import { useNewVisitMutation, useGetVisitsQuery } from "../../redux/visitsApi";
import { useGetEmployesQuery } from "../../redux/employesApi";
import { Toaster } from "react-hot-toast";
import { AiOutlineClear } from "react-icons/ai";
import { notifyWarning, notifySuccess, Loader } from "../../components";
import {
  Wrapper,
  ButtonSubmit,
  SearchInput,
  FormWrapper,
  Image,
  ClearBtn,
  Name,
} from "./NewVisitForm.styled";
import { debounce } from "lodash";

export const NewVisitForm = () => {
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
  const today = day + "." + month + "." + year;

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  const time = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = searchedPerson.name;
    let newVisit = name + "/" + today;

    if (newVisit === "" || name === undefined) {
      setSearchedPerson({});
      setTimeout(() => {
        location.reload();
      }, 3000);
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

        <FormWrapper>
          <ButtonSubmit type="button" onClick={handleSubmit}>
            Записать
          </ButtonSubmit>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SearchInput
              type="text"
              placeholder="Поиск"
              onChange={handlerInputChange}
              ref={searchInputRef}
            />
            <ClearBtn onClick={() => location.reload()}>
              <AiOutlineClear />
            </ClearBtn>
          </div>
          {searchedPerson?.name && (
            <div>
              <Name>{searchedPerson.name}</Name>
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
        </FormWrapper>
      </Wrapper>
    );
  }
};
