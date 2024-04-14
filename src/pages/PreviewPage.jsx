import { Footer, Header } from "../components";
import { PreviewTitle } from "../components/LoginForm/LoginForm.styled";

const PreviewPage = () => {
  return (
    <>
      <Header />
      <div className="preview">
        <PreviewTitle>Войдите или зарегистрируйтесь!</PreviewTitle>
      </div>
      <Footer />
    </>
  );
};

export default PreviewPage;
