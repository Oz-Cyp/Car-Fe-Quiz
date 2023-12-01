import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Cars } from "./components/Cars/Cars";
import { Sales } from "./components/sales/Sales";
import { Customers } from "./components/Customers/Customers";
import { useState } from "react";

function App() {
  const [activeTab2, setActiveTab2] = useState("cars");
  const navigate = useNavigate();
  return (
    <div className="App">
      <nav className="Navbar">
        <div
          className={activeTab2 === "Cars" ? "activeSearchbox2" : "search-box2"}
        >
          <div
            className="text2"
            onClick={() => {
              navigate("/Cars");
              setActiveTab2("Cars");
            }}
          >
            Cars
          </div>
        </div>
        <div
          className={
            activeTab2 === "Sales" ? "activeSearchbox2" : "search-box2"
          }
        >
          <div
            className="text2"
            onClick={() => {
              navigate("/Sales");
              setActiveTab2("Sales");
            }}
          >
            Sales
          </div>
        </div>
        <div
          className={
            activeTab2 === "Customers" ? "activeSearchbox2" : "search-box2"
          }
        >
          <div
            className="text2"
            onClick={() => {
              navigate("/Customers");
              setActiveTab2("Customers");
            }}
          >
            Customers
          </div>
        </div>
      </nav>
      {console.log(activeTab2)}
      <Routes>
        <Route path="/Cars" element={<Cars />} />
        <Route path="/Sales" element={<Sales />} />
        <Route path="/Customers" element={<Customers></Customers>} />
        <Route index element={<Cars />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
