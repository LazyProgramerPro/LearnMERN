export const initialData = {

  boards: [
    {
      id: "board-1",
      columnOrder: ['column-1', 'column-2', 'column-3'],
      columns: [
        {
          id: 'column-1',
          boardId: 'board-1',
          title: 'Todo ',
          cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6', 'card-7', 'card-8', 'card-9'],
          cards: [
            {
              id: 'card-1',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 1',
              cover: 'data:image/jpeg;base64,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'
            },
            {
              id: 'card-2',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 2',
              cover: null
            },
            {
              id: 'card-3',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 3',
              cover: null
            },
            {
              id: 'card-4',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 4',
              cover: null
            },
            {
              id: 'card-5',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 5',
              cover: null
            },
            {
              id: 'card-6',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 6',
              cover: null
            },
            {
              id: 'card-7',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 7',
              cover: null
            },
            {
              id: 'card-8',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 8',
              cover: null
            }
            ,
            {
              id: 'card-9',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 9',
              cover: null
            }
          ]
        },
        {
          id: 'column-2',
          boardId: 'board-1',
          title: 'Inprogress',
          cardOrder: ['card-10', 'card-11', 'card-12', 'card-13', 'card-14'],
          cards: [
            {
              id: 'card-10',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 10',
              cover: null
            },
            {
              id: 'card-11',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 11',
              cover: null
            },
            {
              id: 'card-12',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 12',
              cover: null
            },
            {
              id: 'card-13',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 13',
              cover: null
            },
            {
              id: 'card-14',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 14',
              cover: null
            }
          ]
        },
        {
          id: 'column-3',
          boardId: 'board-1',
          title: 'Done',
          cardOrder: ['card-15', 'card-16'],
          cards: [
            {
              id: 'card-15',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 15',
              cover: null
            },
            {
              id: 'card-16',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 16',
              cover: null
            },
          ]
        }
      ]
    }
  ]
}