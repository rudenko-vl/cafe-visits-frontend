import { Footer, Header } from "../components";
import {
  PreviewTitle,
  PreviewDiv,
  LoginLink,
} from "../components/LoginForm/LoginForm.styled";
import { Link } from "react-router-dom";

const PreviewPage = () => {
  return (
    <>
      <Header />
      <div className="preview">
        <PreviewDiv>
          <PreviewTitle>
            Войдите или зарегистрируйтесь! 👉{" "}
            <LoginLink>
              <Link to="/auth/login">Вход</Link>
            </LoginLink>
          </PreviewTitle>
        </PreviewDiv>
      </div>
      <Footer />
    </>
  );
};

export default PreviewPage;
