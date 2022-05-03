import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
//components
import LoginPanel from "./components/LoginPanel/LoginPanel";
import SingUpPanel from "./components/SignUpPanel/SignUpPanel";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Archiv from "./components/Menu/Archiv/Archiv";
import Profil from "./components/Menu/Profil/Profil";
import Menu from "./components/Menu/Menu";

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
            <Route path="/login" element={<LoginPanel />}></Route>
            <Route path="/rejestracja" element={<SingUpPanel />}></Route>
            {user && <Route path="/zadania" element={<Tasks />}></Route>}
            {user && <Route path="/archiwum" element={<Archiv />}></Route>}
            {user && <Route path="/profil" element={<Profil />}></Route>}
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
