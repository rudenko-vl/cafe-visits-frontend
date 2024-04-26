import { SubTitle, TopWrap, Container } from "./VisitsList.styled";
import { ExcelBtn } from "../Workers/Workers.styled";
import { useGetVisitsQuery } from "../../redux/visitsApi";
import { Filter, Tooltip } from "../../components";
import { useState, useRef } from "react";
import { utils, writeFileXLSX } from "xlsx";
import { SiMicrosoftexcel } from "react-icons/si";
import { nanoid } from "nanoid";

export const VisitsList = () => {
  const [value, setValue] = useState("");
  const { data: visitsList } = useGetVisitsQuery();

  const tbl = useRef(null);

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
        <div style={{ display: "flex", gap: "20px" }}>
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

          <SubTitle style={{ margin: "0" }}>
            Кол-во записей - {filteredVisits?.length}
          </SubTitle>
        </div>

        <Filter
          value={value}
          clearFilter={clearFilter}
          changeFilter={changeFilter}
        />
      </TopWrap>
      <table ref={tbl}>
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
