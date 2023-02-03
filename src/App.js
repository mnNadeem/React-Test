import React from "react";
import { Route, Routes } from "react-router-dom";
import Customers from "./components/Customers";
import Contact from "./components/Contact";
import "./Table.css";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Post from "./components/Post";
import NewCustomer from "./components/NewCustomer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/customers">
          <Route index element={<Customers />} />
          {/* <Route path=":id" element={<Book />} /> */}
          <Route path="new" element={<NewCustomer />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </div>
  );
};

export default App;
