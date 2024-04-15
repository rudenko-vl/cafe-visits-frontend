import { LogInForm, Footer, Header, Loader } from "../components";
import { useSelector } from "react-redux";
import { getIsAuthorizing } from "../redux/auth/auth-selectors";

const LoginPage = () => {
  const auth = useSelector(getIsAuthorizing);

  if (auth === "loading") {
    return <Loader size={100} />;
  } else {
    return (
      <>
        <Header />
        <LogInForm />
        <Footer />
      </>
    );
  }
};

export default LoginPage;
