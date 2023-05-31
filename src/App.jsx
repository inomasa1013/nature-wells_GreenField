import React, { useState } from "react";
// import {Table} from "./components/table"; 
import "./styles/style.css";
import { TableField } from "./components/TableField";

export const App = () => {
  return (
    <div>
      <h1 className="title" >レーヴ日進寮出品一覧</h1>
      <TableField />
    </div>
  );
};
