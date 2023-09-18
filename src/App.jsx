import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Cars } from "./components/Cars/Cars";
import { Sales } from "./components/sales/Sales";
import { Customers } from "./components/customers/Customers";
import Modal from "./components/sales/Modal";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="Navbar">
          <div className="Navbar">
            <Link className="link" to="/Cars">
              Cars
            </Link>
            <Link className="link" to="/Sales">
              Sales
            </Link>
            <Link className="link" to="/Customers">
              Customers
            </Link>
          </div>
        </nav>
        <Routes>
          <Route index element={<Cars />} />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/Sales" element={<Sales />} />
          <Route path="/Customers" element={<Customers />} />
          <Route path="*" element={<div>404 Not Found</div>} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// A dashboard that displays all cars, customers and sales in the system.
// A navigation menu that allows users to navigate to different sections of the application.
// The ability to view details of a specific car, customer or sale.
// The ability to add, update, or delete a car, customer or sale.
// A search bar that allows users to search a specific customer or sale.
