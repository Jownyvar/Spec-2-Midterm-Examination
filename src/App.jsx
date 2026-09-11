import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./laouts/MainLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="/Movies/:id" element={<Movie />} /> */}
          <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
