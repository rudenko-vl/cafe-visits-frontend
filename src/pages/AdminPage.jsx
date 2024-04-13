import { Header, Footer } from "../components";
import { Link } from "react-router-dom";
import {
  useGetEmployesQuery,
  useDeleteEmployeeMutation,
} from "../redux/employesApi";

const AdminPage = () => {
  const { data: allPersons, refetch: refetchPersons } = useGetEmployesQuery();
  const [removePerson] = useDeleteEmployeeMutation();

  const handleDeletePerson = async (id) => {
    await removePerson(id).unwrap();
    setTimeout(() => {
      refetchPersons();
    }, 700);
  };

  return (
    <>
      <Header />
      <div>
        <h1>Admin Page</h1>
        <nav>
          <Link
            style={{ color: "red", fontSize: "28px", marginRight: "20px" }}
            to="/new"
          >
            New
          </Link>
          <Link style={{ color: "red", fontSize: "28px" }} to="/history">
            History
          </Link>
        </nav>
        <ul>
          {allPersons &&
            allPersons.map((item) => {
              return (
                <li key={item._id}>
                  <p>{item._id}</p>
                  <p>{item.name}</p>
                  <p>{item.code}</p>
                  <img
                    style={{ width: "200px", height: "200px" }}
                    src={
                      item.imgUrl.includes("http") ? item.imgUrl : "/avatar.jpg"
                    }
                    alt="img"
                  />
                  <span
                    onClick={() => {
                      handleDeletePerson(item._id);
                    }}
                  >
                    Delete
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default AdminPage;
