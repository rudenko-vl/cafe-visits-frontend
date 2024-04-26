import { useState, useEffect } from "react";
import { Header, Footer, Loader, UserItem, Tooltip } from "../components";
import { getUsers } from "../redux/auth/auth-operations";
import {
  List,
  Wrapper,
  Box,
  LinkWrapper,
  Link,
  UserNumber,
  Clue,
} from "../components/UserItem/UserItem.styled";
import { FaRegQuestionCircle } from "react-icons/fa";

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
            <Tooltip text="Вы можете изменить имя пользователя и состояние Admin. Для сохранения нажмите кнопку Save">
              <Clue>
                <FaRegQuestionCircle />
              </Clue>
            </Tooltip>

            <LinkWrapper>
              <Link to="/users">Список пользователей</Link>
              <Link to="/employes">Список сотрудников</Link>
            </LinkWrapper>

            <List>
              {users.map((user, index) => {
                return (
                  <div key={user._id}>
                    <UserNumber>User {index + 1}</UserNumber>
                    <UserItem user={user} />
                  </div>
                );
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
