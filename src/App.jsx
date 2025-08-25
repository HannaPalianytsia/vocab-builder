import { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "modern-normalize";
import SharedLayout from "./components/SharedLayout";
import MainLayout from "./components/MainLayout";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import { useDispatch } from "react-redux";
import { currentUser } from "./redux/auth/operations";
import Loader from "./components/Loader/Loader";

const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const TrainingPage = lazy(() => import("./pages/TrainingPage/TrainingPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const DictionaryPage = lazy(() =>
  import("./pages/DictionaryPage/DictionaryPage")
);
const RecommendPage = lazy(() => import("./pages/RecommendPage/RecommendPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      <SharedLayout>
        <Routes>
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/"
                element={<LoginPage element={<LoginPage />} />}
              />
            }
          />

          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/" element={<RegisterPage />} />
            }
          />

          <Route
            path="/"
            element={
              <PrivateRoute redirectTo="/login" component={<MainLayout />} />
            }
          >
            <Route index element={<Navigate to="/dictionary" />} />
            <Route
              path="/dictionary"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<DictionaryPage />}
                />
              }
            />

            <Route
              path="/recommend"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<RecommendPage />}
                />
              }
            />

            <Route
              path="/training"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<TrainingPage />}
                />
              }
            />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SharedLayout>
    </>
  );
}

export default App;
