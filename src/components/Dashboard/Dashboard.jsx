import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Cars } from "../Cars";
import { Customers } from "../Customers";
import { Sales } from "../Sales";


export const Dashboard = () => {
  return (
    <nav>
    <BrowserRouter>
    <Routes>
      <Route index element = {<div className="dashboard">
      <Link to = "/Cars">Cars</Link>
      <Link to = "/Sales"> Sales </Link>
      <Link to = "/Customers" >Customers</Link>
      </div>}/>
        <Route path ="/Cars" element ={<Cars/>}/>
        <Route path = "/Sales" element = {<Sales/>}/>
        <Route path ="/Customers" element = {<Customers/>}/>
        
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  </BrowserRouter>
  </nav>
  );
};
