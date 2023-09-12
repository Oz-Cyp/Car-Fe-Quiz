import React from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Cars } from "../Cars/Cars";
import { Customers } from "../customers/Customers";
import { Sales } from "../sales/Sales";
import "./Navbar.css"

import { useState } from 'react';

function Navbar() {
  const [activeTab, setActiveTab] = useState('Cars'); // Set the default active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div>
        <button
          className={activeTab === 'tab1' ? 'active-tab' : 'inactive-tab'}
          onClick={() => handleTabClick('tab1')}
        >
          Tab 1
        </button>
        <button
          className={activeTab === 'tab2' ? 'active-tab' : 'inactive-tab'}
          onClick={() => handleTabClick('tab2')}
        >
          Tab 2
        </button>
        <button>
            className={activeTab === 'tab3' ? 'active-tab' : 'inactive-tab'}
            onClick={() => handleTabClick('tab3')}
        </button>
        {/* Add more tabs here */}
      </div>
      <div>
        {activeTab === 'tab1' && <Cars/>}
        {activeTab === 'tab2' && <Sales />}
        {activeTab === 'tab3' && <Customers />}
        {/* Add more tab contents here */}
      </div>
    </div>
  );
}

export default Navbar;

// export const Dashboard = () => {
//   return (
//     <nav>
//     <BrowserRouter>
//     <Routes>
//       <Route index element = {<div className="dashboard">
//       <Link className="link" to = "/Cars">Cars</Link>
//       <Link className="link" to = "/Sales"> Sales </Link>
//       <Link className="link" to = "/Customers" >Customers</Link>
//       </div>}/>
//         <Route path ="/Cars" element ={<Cars/>}/>
//         <Route path = "/Sales" element = {<Sales/>}/>
//         <Route path ="/Customers" element = {<Customers/>}/>
        
//       <Route path="*" element={<div>404 Not Found</div>} />
//     </Routes>
//   </BrowserRouter>
//   </nav>
//   );
// };


