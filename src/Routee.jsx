import React from "react";
import { Route, Routes } from "react-router-dom";
import routeArr from "./Routing";
import Login from "./Login";

function Routee() {
  return (
    <Routes>
      <Route path={"/login"} element={<Login />} />
      {routeArr.map((elem, index) => {
        return (
          <Route
            key={index}
            path={elem.path}
            element={<elem.component role={elem.role} props={elem.props} />}
          />
        );
      })}
    </Routes>
  );
}

export default Routee;
