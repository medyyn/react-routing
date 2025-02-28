import React from "react";
import { Route, Routes } from 'react-router'
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Users from "../../Pages/Users";
import NotFound from "../NotFound";
import UserDetail from "../../Pages/Users/UserDetail";

const WebRoutes = () => {
  const routes = [
    { id: 0, path: "/", element: <Home/> },
    { id: 1, path: "/about", element: <About/> },
    { id: 2, path: "/users", element: <Users/> },
    { id: 3, path: "/users/:id", element: <UserDetail/> },
    { id: 4, path: "/*", element: <NotFound/> }
  ]
  return (
    <Routes>
      {routes.map(({id, path, element}) => {
        return <Route key={id} path={path} element={element} />
      })}
    </Routes>
  );
};

export default WebRoutes;
