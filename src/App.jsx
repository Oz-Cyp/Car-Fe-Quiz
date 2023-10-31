import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cars } from "./components/Cars/Cars";
import { Sales } from "./components/sales/Sales";
import { Customers } from "./components/Customers/Customers";
import { useState } from "react";

function App() {
  const [activeTab2, setActiveTab2] = useState("cars");

  return (
    <BrowserRouter>
      <div className="App">
        <nav className="Navbar">
          <div
            className={
              activeTab2 === "cars" ? "activeSearchbox2" : "search-box2"
            }
          >
            <div
              className="text2"
              onClick={() => {
                setActiveTab2("cars");
              }}
            >
              Cars
            </div>
          </div>
          <div
            className={
              activeTab2 === "sales" ? "activeSearchbox2" : "search-box2"
            }
          >
            <div
              className="text2"
              onClick={() => {
                setActiveTab2("sales");
              }}
            >
              Sales
            </div>
          </div>
          <div
            className={
              activeTab2 === "customers" ? "activeSearchbox2" : "search-box2"
            }
          >
            <div
              className="text2"
              onClick={() => {
                setActiveTab2("customers");
              }}
            >
              Customers
            </div>
          </div>
        </nav>
        {activeTab2 === "cars" && <Cars />}
        {activeTab2 === "sales" && <Sales></Sales>}
        {activeTab2 === "customers" && <Customers></Customers>}
        <Routes>
          <Route path="/Cars" element={<Cars />} />
          <Route path="/Sales" element={<Sales />} />
          <Route path="/customers" element={<Customers></Customers>} />
          <Route index element={<Cars />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
