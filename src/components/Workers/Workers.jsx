import {
  Wrapper,
  DelBtn,
  WorkersList,
  UpdBtn,
  Box,
  Title,
  AddBtn,
  SubTitle,
} from "./Workers.styled";
import { Loader, Filter } from "../../components";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { IoMdPersonAdd } from "react-icons/io";
import {
  useGetEmployesQuery,
  useDeleteEmployeeMutation,
} from "../../redux/employesApi";
import { getFilter } from "../../redux/filter/selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Workers = () => {
  const { data: allPersons, refetch: refetchPersons } = useGetEmployesQuery();
  const [removePerson, object] = useDeleteEmployeeMutation();
  const deleting = object.isLoading;
  const value = useSelector(getFilter);

  const filteredPersons =
    allPersons?.length > 0
      ? allPersons.filter((item) =>
          (item._id + item.name)
            .toLowerCase()
            .includes(value.trim().toLowerCase())
        )
      : [];

  const handleDeletePerson = async (id) => {
    await removePerson(id).unwrap();
    setTimeout(() => {
      refetchPersons();
    }, 700);
  };
  return (
    <Wrapper>
      <Box>
        <Title>Список сотрудников</Title>
        <SubTitle>Кол-во сотрудников - {filteredPersons?.length}</SubTitle>
        <Link to="/new">
          <AddBtn>
            <IoMdPersonAdd />
          </AddBtn>
        </Link>

        <Filter value={value} />

        <WorkersList>
          {!allPersons ? (
            <Loader />
          ) : (
            <table>
              <thead>
                <tr>
                  <th>№</th>
                  <th>Id</th>
                  <th>Имя</th>
                  <th>Удалить</th>
                  <th>Обновить</th>
                </tr>
              </thead>
              <tbody>
                {filteredPersons &&
                  filteredPersons.map((person, index) => (
                    <tr key={person._id}>
                      <td>{index + 1}</td>
                      <td>{person._id}</td>
                      <td>{person.name}</td>
                      <td>
                        <DelBtn onClick={() => handleDeletePerson(person._id)}>
                          {deleting ? (
                            <Loader size={20} />
                          ) : (
                            <RiDeleteBin6Line />
                          )}
                        </DelBtn>
                      </td>
                      <td>
                        <UpdBtn>
                          <BiEditAlt />
                        </UpdBtn>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </WorkersList>
      </Box>
    </Wrapper>
  );
};
