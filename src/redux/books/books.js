import uuidv4 from 'react-uuid';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [
  { id: uuidv4(), title: 'The Da Vinci Code', author: 'Robert Langdon' },
  { id: uuidv4(), title: 'The Girl with the Dragon Tattoo', author: 'Millennium' },
  { id: uuidv4(), title: 'The Help', author: 'Hardcover' },
];

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
  return {
    type: ADD,
    payload: {
      ...newBook,
      id: uuidv4(),
    },
  };
}

export function remove(id) {
  return {
    type: REMOVE,
    payload: id,
  };
}
