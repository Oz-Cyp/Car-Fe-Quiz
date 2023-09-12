import "./App.css";
import { Searchcar } from "./components/searchcar/searchcar";
import { Addcar } from "./components/addcar/Addcar";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import { Cars } from "./components/Cars/Cars";
import { Sales } from "./components/sales/Sales";
import { Customers } from "./components/customers/Customers";
import { Inventory } from "./components/Inventory/Inventory";
// import car from "./img/Car.jpg";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  // const [activeTab, setActiveTab] = useState("search");

  return (
    <div className="App">
      <nav className="Navbar">
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={
                <div className="Navbar">
                  <Link className="link" to="/Cars">
                    Cars
                  </Link>
                  <Link className="link" to="/Sales">
                    {" "}
                    Sales{" "}
                  </Link>
                  <Link className="link" to="/Customers">
                    Customers
                  </Link>
                </div>
              }
            />
            <Route path="/Cars" element={<Cars />} />
            <Route path="Search" element={Searchcar}></Route>
            <Route path="Search" element={Addcar}></Route>
            <Route path="Search" element={Inventory}></Route>
            <Route path="/Sales" element={<Sales />} />
            <Route path="/Customers" element={<Customers />} />

            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </nav>
      
    </div>
  );
}

export default App;

// A dashboard that displays all cars, customers and sales in the system.
// A navigation menu that allows users to navigate to different sections of the application.
// The ability to view details of a specific car, customer or sale.
// The ability to add, update, or delete a car, customer or sale.
// A search bar that allows users to search a specific customer or sale.
