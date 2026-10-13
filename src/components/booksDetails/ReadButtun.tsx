"use client";

import { BooksContext } from "@/context/BooksProvider";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";

const ReadButtun = ({ book }: { book: IBook }) => {
  const booksProvider = useContext(BooksContext);

  const { read, setRead } = booksProvider;

  const handlReadBook = () => {
    // console.log("read hit now ", book);
    setRead([...read, book]);
    alert(`add you book is${book.bookName}`);
  };

  return (
    <button
      className="btn min-h-12 flex-1 rounded-xl border border-gray-300 bg-white text-base text-gray-900 hover:bg-gray-100"
      onClick={() => handlReadBook()}
    >
      Read
    </button>
  );
};

export default ReadButtun;
