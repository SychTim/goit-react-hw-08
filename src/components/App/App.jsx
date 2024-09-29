import { useDispatch } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import Loyout from "../Layout/Layout";
import "./App.module.css";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "../../redux/auth/operations";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const RestrictedRoute = lazy(() =>
  import("../../pages/RestrictedRoute/RestrictedRoute")
);
const RegisterForm = lazy(() => import("../RegisterForm/RegisterForm"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Loyout>
      <Suspense fallback={<>Loading page...</>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={<RegisterForm />} redirectTo="/" />
            }
          />
        </Routes>
      </Suspense>
    </Loyout>
  );
}

export default App;
