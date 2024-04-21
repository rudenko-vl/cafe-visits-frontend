import { NewUserForm, Header, Footer, Loader } from "../components";
import { useSelector } from "react-redux";
import { getIsAuthorizing } from "../redux/auth/auth-selectors";

const RegPage = () => {
  const auth = useSelector(getIsAuthorizing);

  if (auth === "loading") {
    return <Loader size={100} />;
  } else {
    return (
      <>
        <Header />
        <NewUserForm />
        <Footer />
      </>
    );
  }
};

export default RegPage;
