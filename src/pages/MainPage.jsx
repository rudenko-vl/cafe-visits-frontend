import { Header, Footer } from "../components";
// import { useEffect } from "react";
// import { Outlet } from "react-router-dom";

const MainPage = () => {
  // useEffect(() => {
  //   // refetch();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      <Header />
      <p>Main</p>
      <Footer />
      {/* <Header devices={data} />
      {isFetching && <Loader />}
      <Footer />
      <Outlet /> */}
    </>
  );
};

export default MainPage;
