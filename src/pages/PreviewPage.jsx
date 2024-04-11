import { Footer, Header } from "../components";

const PreviewPage = () => {
  return (
    <>
      <Header />
      <div className="preview">
        <h1 style={{ color: "yellow", marginLeft: "30px" }}>
          Войдите или зарегистрируйтесь!
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default PreviewPage;
