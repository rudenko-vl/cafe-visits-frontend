import { Container } from "./VisitsList.styled";
import { SubTitle, TopWrap } from "./VisitsList.styled";
import { useGetVisitsQuery } from "../../redux/visitsApi";
import { Filter } from "../../components";
import { useState } from "react";

export const VisitsList = () => {
  const [value, setValue] = useState("");
  const { data: visitsList } = useGetVisitsQuery();

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

  const changeFilter = (e) => {
    setValue(e.target.value);
  };
  const clearFilter = () => {
    setValue("");
  };

  return (
    <Container>
      <TopWrap>
        <SubTitle style={{ margin: "0" }}>
          Кол-во записей - {filteredVisits?.length}
        </SubTitle>
        <Filter
          value={value}
          clearFilter={clearFilter}
          changeFilter={changeFilter}
        />
      </TopWrap>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Имя</th>
            <th>Дата</th>
            <th>Время</th>
            <th>Место</th>
          </tr>
        </thead>
        <tbody>
          {filteredVisits &&
            filteredVisits.reverse().map((visit, index) => (
              <tr key={visit._id}>
                <td>{index + 1}</td>
                <td>{visit.name.split("/")[0]}</td>
                <td>{visit.createdAt.split("T")[0]}</td>
                <td>{visit.time}</td>
                <td>{visit.user.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
};
