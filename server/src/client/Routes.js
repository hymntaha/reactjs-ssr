import React from "react";
import HomePage from "./pages/Home";
import UsersListPage, { loadData } from "./pages/UsersList";

export default [
  {
    ...HomePage,
    path: "/",
    exact: true
  },
  {
    ...UsersListPage,
    path: "/users",
  }
];
