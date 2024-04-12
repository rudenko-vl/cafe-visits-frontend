import { Container } from "./VisitsList.styled";
import { useGetVisitsQuery } from "../../redux/visitsApi";

export const VisitsList = () => {
  const { data: visitsList } = useGetVisitsQuery();
  // const [removeVisit] = useDeleteVisitMutation();

  // const handleDeleteVisit = async (id) => {
  //   await removeVisit(id).unwrap();
  // };

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Имя</th>
            <th>Дата</th>
            <th>Время</th>
            <th>Место</th>

            {/* <th>Место</th> */}
            {/* <th>Ответственный</th> */}
            {/* <th>Ссылка</th> */}
          </tr>
        </thead>
        <tbody>
          {visitsList &&
            visitsList.map((visit, index) => (
              <tr key={visit._id}>
                <td>{index + 1}</td>
                <td>{visit.name.split("/")[0]}</td>
                <td>{visit.createdAt.split("T")[0]}</td>
                <td>{visit.time}</td>
                <td>{visit.user.name}</td>
                {/* <td>
                  <span
                    onClick={() => {
                      handleDeleteVisit(visit._id);
                    }}
                  >
                    Delete
                  </span>
                </td> */}
                {/* <td>{device.place}</td> */}
                {/* <td>{device.owner}</td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
};
