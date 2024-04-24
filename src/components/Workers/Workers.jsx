import {
  Wrapper,
  WorkersList,
  Box,
  AddBtn,
  SubTitle,
  TopWrapper,
  LinkWrapper,
  Navigate,
  ExcelBtn,
} from "./Workers.styled";
import { Link } from "react-router-dom";
import { Loader, Filter, WorkerItem, Tooltip } from "../../components";
import { IoMdPersonAdd } from "react-icons/io";
import { useGetEmployesQuery } from "../../redux/employesApi";
import { useState, useRef } from "react";
import { utils, writeFileXLSX } from "xlsx";
import { SiMicrosoftexcel } from "react-icons/si";
import { nanoid } from "nanoid";

export const Workers = () => {
  const { data: allPersons } = useGetEmployesQuery();
  const [value, setValue] = useState("");

  const tbl = useRef(null);

  const filteredPersons =
    allPersons?.length > 0
      ? allPersons.filter((item) =>
          (item.code + item.name)
            .toLowerCase()
            .includes(value.trim().toLowerCase())
        )
      : [];

  const changeFilter = (e) => {
    setValue(e.target.value);
  };
  const clearFilter = () => {
    setValue("");
  };

  if (!allPersons) {
    return <Loader size={80} />;
  } else {
    return (
      <Wrapper>
        <Box>
          <Tooltip text="Импорт в Excel">
            <ExcelBtn
              onClick={() => {
                const fileName = nanoid(5);
                const wb = utils.table_to_book(tbl.current);
                writeFileXLSX(wb, `${fileName}.xlsx`);
              }}
            >
              <SiMicrosoftexcel />
            </ExcelBtn>
          </Tooltip>

          <LinkWrapper>
            <Navigate to="/users">Список пользователей</Navigate>
            <Navigate to="/employes">Список сотрудников</Navigate>
          </LinkWrapper>
          <TopWrapper>
            <Tooltip text="Добавить сотрудника">
              <Link to="/new">
                <AddBtn>
                  <IoMdPersonAdd />
                </AddBtn>
              </Link>
            </Tooltip>

            <SubTitle>Кол-во сотрудников - {filteredPersons?.length}</SubTitle>
          </TopWrapper>

          <Filter
            value={value}
            clearFilter={clearFilter}
            changeFilter={changeFilter}
          />
          <WorkersList>
            <table ref={tbl}>
              <thead>
                <tr>
                  <th>№</th>
                  <th>Код</th>
                  <th>Имя</th>
                  <th>Ссылка</th>
                </tr>
              </thead>
              <tbody>
                {filteredPersons
                  .sort(function (a, b) {
                    const nameA = a.name.toUpperCase();
                    const nameB = b.name.toUpperCase();

                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
                    return 0;
                  })
                  .map((person, index) => (
                    <WorkerItem
                      key={person._id}
                      id={person._id}
                      index={index}
                      name={person.name}
                      code={person.code}
                    />
                  ))}
              </tbody>
            </table>
          </WorkersList>
        </Box>
      </Wrapper>
    );
  }
};
