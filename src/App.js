import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
//components
import LoginForm from "./components/LoginPanel/LoginForm/LoginForm";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Archiv from "./components/Menu/Archiv/Archiv";
import Profil from "./components/Menu/Profil/Profil";
import Menu from "./components/Menu/Menu";
import SignUpForm from "./components/SignUpPanel/SignUpForm/SignUpForm";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <>
      {authIsReady && (
        <BrowserRouter>
          {" "}
          <Header />
          {user && <Menu />}
          <Routes>
            <Route path="*" element={<Navigate to={"/"} replace />} />
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/rejestracja" element={<SignUpForm />} />
            {user && <Route path="/zadania" element={<Tasks />} />}
            {user && <Route path="/archiwum" element={<Archiv />} />}
            {user && <Route path="/profil" element={<Profil />} />}
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
