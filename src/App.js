import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Info from "./components/Info";
import Gimn from "./components/Gimn";
import Best from "./components/Best";
import Trophy from "./components/Trophy";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/realmadrid/">
        <Header />
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/gimn" element={<Gimn />} />
          <Route path="/best" element={<Best />} />
          <Route path="/trophy" element={<Trophy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
