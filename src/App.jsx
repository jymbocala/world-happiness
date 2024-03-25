import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Rankings from "./pages/Rankings";
import Search from "./pages/Search";
import Factors from "./pages/Factors";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="rankings" element={<Rankings />} />
            <Route path="search" element={<Search />} />
            <Route path="factors" element={<Factors />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
