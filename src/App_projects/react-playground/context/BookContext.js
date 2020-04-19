import React from "react";
import { v1 as uuidv1 } from "uuid";

export const BookContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { title: action.book.title, author: action.book.author, id: uuidv1() }
      ];
    case "REMOVE":
      const filter = state.filter(item => {
        return item.id !== action.id;
      });
      return filter;

    default:
      return state;
  }
};
const BookContextProvider = props => {
  const [books, dispatch] = React.useReducer(reducer, []);
  //   React.useEffect(() => {
  //     localStorage.setItem("books", JSON.stringify(books));
  //   }, [books]);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
