import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "modern-normalize";
import SharedLayout from "./components/SharedLayout";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header/Header";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const TrainingPage = lazy(() => import("./pages/TrainingPage/TrainingPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const DictionaryPage = lazy(() =>
  import("./pages/DictionaryPage/DictionaryPage")
);
const RecommendPage = lazy(() => import("./pages/RecommendPage/RecommendPage"));

function App() {
  return (
    <>
      <SharedLayout>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/dictionary"
                element={<LoginPage element={<LoginPage />} />}
              />
            }
          />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/dictionary"
                element={<RegisterPage />}
              />
            }
          />

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
              <PrivateRoute redirectTo="/login" component={<RecommendPage />} />
            }
          />

          <Route
            path="/training"
            element={
              <PrivateRoute redirectTo="/login" component={<TrainingPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SharedLayout>
    </>
  );
}

export default App;
