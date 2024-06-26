import { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import PublicRoute from "./components/Routes/PublicRoute";
import PrivateRoute from "./components/Routes/PrivateRoute";
import { refreshUser } from "./redux/auth/auth-operations";
import { getIsRefreshing } from "./redux/auth/auth-selectors";

import MainPage from "./pages/MainPage";
import PreviewPage from "./pages/PreviewPage";
import RegPage from "./pages/RegPage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import HistoryPage from "./pages/HistoryPage";
import NewEmployeePage from "./pages/NewEmployeePage";
import AdminPage from "./pages/AdminPage";
import UpdatePage from "./pages/UpdatePage";
import UsersPage from "./pages/UsersPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <PublicRoute restricted>
            <PreviewPage />
          </PublicRoute>
        }
        errorElement={<ErrorPage />}
      ></Route>
      <Route
        path="/auth/register"
        element={
          <PublicRoute restricted>
            <RegPage />
          </PublicRoute>
        }
        errorElement={<ErrorPage />}
      ></Route>
      <Route
        path="/auth/login"
        element={
          <PublicRoute restricted>
            <LoginPage />
          </PublicRoute>
        }
        errorElement={<ErrorPage />}
      ></Route>
      <Route
        path="/new"
        element={
          <PrivateRoute restricted>
            <NewEmployeePage />
          </PrivateRoute>
        }
        errorElement={<ErrorPage />}
      ></Route>
      <Route
        path="/main"
        element={
          <PrivateRoute restricted>
            <MainPage />
          </PrivateRoute>
        }
        errorElement={<ErrorPage />}
      ></Route>
      <Route
        path="/history"
        element={
          <PrivateRoute restricted>
            <HistoryPage />
          </PrivateRoute>
        }
        errorElement={<ErrorPage />}
      ></Route>
      <Route
        path="/users"
        element={
          <PrivateRoute restricted>
            <UsersPage />
          </PrivateRoute>
        }
        errorElement={<ErrorPage />}
      ></Route>
      <Route>
        <Route
          path="/employes"
          element={
            <PrivateRoute restricted>
              <AdminPage />
            </PrivateRoute>
          }
          errorElement={<ErrorPage />}
        />
        <Route
          path="/employes/:_id"
          element={
            <PrivateRoute restricted>
              <UpdatePage />
            </PrivateRoute>
          }
          errorElement={<ErrorPage />}
        />
      </Route>
    </Route>
  )
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback={"loading..."}>
      {isRefreshing ? null : <RouterProvider router={router} />}
    </Suspense>
  );
}

export default App;
