import Column from "components/Column/Column";
import React, { useState, useEffect } from "react";
import "./BoardContent.scss";

import { isEmpty } from "lodash";

import { initialData } from "./../../actions/initialData";
import { mapOrder } from "utilities/sort";

export default function BoardContent() {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);

  useEffect(() => {

    const boadrFromDB = initialData.boards.find(
      (board) => (board.id === "board-1")
    );

    if (boadrFromDB) {
      setBoard(boadrFromDB);


      setColumns(mapOrder(boadrFromDB.columns,boadrFromDB.columnOrder,'id'));
    }
  }, []);

  if (isEmpty(board)) {
    return <div className="not-found">Not Found Board</div>;
  }

  return (
    <div className="board-content">
     {
       columns.map((column,index)=><Column key={index} column={column} />)
     }
    </div>
  );
}
