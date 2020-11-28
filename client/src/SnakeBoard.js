import React, { useState } from "react";
import Blank from "./assets/blank.png";

const SnakeBoard = () => {
  let initialRows = [];
  const [rows, setRows] = useState(initialRows);

  for (let i = 0; i < 11; i += 1) {
    initialRows.push([]);
    for (let j = 0; j < 11; j += 1) {
      initialRows[i].push("blank");
    }
  }

  const displayRows = rows.map((row) => (
    <li>
      {row.map((e) => {
        switch (e) {
          case "blank":
            return <img src={Blank} />;
        }
      })}
    </li>
  ));

  return <div>{displayRows}</div>;
};

export default SnakeBoard;
