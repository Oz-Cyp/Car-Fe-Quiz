import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Searchcar } from "./components/Searchcar";
import { Addcar } from "./components/Addcar";
import { Inventory } from "./components/Invertory";
import { Cars } from "./components/Cars";
import car from "./img/Car.jpg"
function App() {
  return (
    <>
      <div className="App">
        <div  className="dashboard">
        <Dashboard />
        </div>

        <div className="navmenu">
          <Searchcar className="Searchcar" />
          <Addcar className="Addcar" />
          <Inventory className="Inventory" />
          <Cars></Cars>
        </div>

        <div className="flex-container">
          <img className="img-left" src={car} alt="logo" />
          <form className="form">
            <h1 className="search auto">Search Auto</h1>
            <label for="Brand">Brand</label>
            <br />
            <input id="Brand" type="text" required />
            <label>Model</label>
            <br />
            <input type="text" required />
            <label>Year</label>
            <br />
            <input type="text" required />
            <label>Price</label>
            <br />
            <input type="text" required />
            <div>
              <button type="submit">Search</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

// A dashboard that displays all cars, customers and sales in the system.
// A navigation menu that allows users to navigate to different sections of the application.
// The ability to view details of a specific car, customer or sale.
// The ability to add, update, or delete a car, customer or sale.
// A search bar that allows users to search a specific customer or sale.
