import {
  Wrapper,
  WorkersList,
  Box,
  Title,
  AddBtn,
  SubTitle,
  Clue,
} from "./Workers.styled";
import { Loader, Filter } from "../../components";
import { IoMdPersonAdd } from "react-icons/io";
import { useGetEmployesQuery } from "../../redux/employesApi";
import { getFilter } from "../../redux/filter/selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { WorkerItem } from "../../components";

export const Workers = () => {
  const { data: allPersons } = useGetEmployesQuery();
  const value = useSelector(getFilter);

  const filteredPersons =
    allPersons?.length > 0
      ? allPersons.filter((item) =>
          (item.code + item.name)
            .toLowerCase()
            .includes(value.trim().toLowerCase())
        )
      : [];

  if (!filteredPersons) {
    return <Loader size={80} />;
  } else {
    return (
      <Wrapper>
        <Box>
          <Title>Список сотрудников</Title>
          <SubTitle>Кол-во сотрудников - {filteredPersons?.length}</SubTitle>
          <Link to="/new">
            <AddBtn>
              <IoMdPersonAdd />
              <Clue>Новый сотрудник</Clue>
            </AddBtn>
          </Link>
          <Filter value={value} />
          <WorkersList>
            <table>
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
