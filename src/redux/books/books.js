const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [
  { id: 0, title: 'The Da Vinci Code', author: 'Robert Langdon' },
  { id: 1, title: 'The Girl with the Dragon Tattoo', author: 'Millennium' },
  { id: 2, title: 'The Help', author: 'Hardcover' },
];

let currentId = 2;

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE:
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
}

export function add(newBook) {
  const action = {
    type: ADD,
    payload: {
      ...newBook,
      id: currentId,
    },
  };

  currentId += 1;

  return action;
}

export function remove(id) {
  return {
    type: REMOVE,
    payload: id,
  };
}
