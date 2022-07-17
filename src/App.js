import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import { useDispatch } from "react-redux";
import { addInitialUsers } from "./API/store";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((res) => {
      setUsers(res.data.data);
      dispatch(addInitialUsers(res.data.data));
    });
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/user/:id" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
