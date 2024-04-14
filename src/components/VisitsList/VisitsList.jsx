import { Container } from "./VisitsList.styled";
import { SubTitle, TopWrap } from "./VisitsList.styled";
import {
  useGetVisitsQuery,
  useDeleteVisitMutation,
} from "../../redux/visitsApi";
import { Filter } from "../../components";
import { getFilter } from "../../redux/filter/selectors";
import { useSelector } from "react-redux";

export const VisitsList = () => {
  const { data: visitsList } = useGetVisitsQuery();
  const [removeVisit] = useDeleteVisitMutation();

  const value = useSelector(getFilter);
  const filteredVisits =
    visitsList?.length > 0
      ? visitsList.filter((visit) =>
          (
            visit.name.split("/")[0] +
            visit.createdAt.split("T")[0] +
            visit.user.name
          )
            .toLowerCase()
            .includes(value.trim().toLowerCase())
        )
      : [];

  const handleDeleteVisit = async (_id) => {
    await removeVisit(_id).unwrap();
  };

  return (
    <Container>
      <TopWrap>
        <SubTitle style={{ margin: "0" }}>
          Кол-во записей - {filteredVisits?.length}
        </SubTitle>
        <Filter value={value} />
      </TopWrap>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Имя</th>
            <th>Дата</th>
            <th>Время</th>
            <th>Место</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>
          {filteredVisits &&
            filteredVisits.map((visit, index) => (
              <tr key={visit._id}>
                <td>{index + 1}</td>
                <td>{visit.name.split("/")[0]}</td>
                <td>{visit.createdAt.split("T")[0]}</td>
                <td>{visit.time}</td>
                <td>{visit.user.name}</td>
                <td>
                  <button
                    disabled={true}
                    onClick={() => {
                      handleDeleteVisit(visit._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
};
