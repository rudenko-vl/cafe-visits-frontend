import { useState, useEffect } from "react";
import { Header, Footer, Loader } from "../components";
import { getUsers } from "../redux/auth/auth-operations";
import { UserItem } from "../components";
import {
  List,
  Wrapper,
  Box,
  LinkWrapper,
  Link,
} from "../components/UserItem/UserItem.styled";

const UsersPage = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => setusers(data));
  }, []);

  return (
    <>
      <Header />
      {users.length === 0 ? (
        <Loader size={80} />
      ) : (
        <Wrapper>
          <Box>
            <LinkWrapper>
              <Link to="/users">Список пользователей</Link>
              <Link to="/employes">Список сотрудников</Link>
            </LinkWrapper>

            <List>
              {users.map((user) => {
                return <UserItem key={user._id} user={user} />;
              })}
            </List>
          </Box>
        </Wrapper>
      )}
      <Footer />
    </>
  );
};

export default UsersPage;
