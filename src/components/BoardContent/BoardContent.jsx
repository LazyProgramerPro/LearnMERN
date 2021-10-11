import Column from 'components/Column/Column';
import React, { useState, useEffect } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import './BoardContent.scss';

import { isEmpty } from 'lodash';

import { initialData } from './../../actions/initialData';
import { mapOrder } from 'utilities/sort';

export default function BoardContent() {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const boadrFromDB = initialData.boards.find(
      (board) => board.id === 'board-1'
    );

    if (boadrFromDB) {
      setBoard(boadrFromDB);

      setColumns(mapOrder(boadrFromDB.columns, boadrFromDB.columnOrder, 'id'));
    }
  }, []);

  const onColumnDrop = (dropResult) => {
    console.log('dropResult:', dropResult);
  };

  if (isEmpty(board)) {
    return <div className="not-found">Not Found Board</div>;
  }

  return (
    <div className="board-content">
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        getChildPayload={(index) => columns[index]}
        dragHandleSelector=".column-drag-handle"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'column-drop-preview',
        }}
      >
        {columns.map((column, index) => (
          <Draggable key={index}>
            <Column column={column} />
          </Draggable>
        ))}
      </Container>
    </div>
  );
}
