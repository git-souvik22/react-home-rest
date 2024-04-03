import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Restaurant from "./components/Restaurant";
import Home from "./components/Home";

function App() {
  return (
    <>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:id/:name" element={<Search />} />
          <Route path="/restaurant-details/:id" element={<Restaurant />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
