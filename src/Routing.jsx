import React, { lazy } from "react";
let Child = lazy(() => import("./Child"));
let Child1 = lazy(() => import("./Child1"));

let routeArr = [
  {
    path: "/",
    component: Child,
    role: ["admin", "user"],
  },
  {
    path: "/child1",
    component: Child1,
    role: ["user"],
    props: { name: "rohan" },
  },
];

export default routeArr;
