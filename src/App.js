import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Tours from "./components/Tours";
import LikedItems from "./components/LikedItems";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/likedItems" element={<LikedItems/>} />
        <Route
          path="/"
          element={
            <div>
              <Tours />
            </div>
          } 
        />
      </Routes>
    </>
  );
}

export default App;
