"use client";

import { BooksContext } from "@/context/BooksProvider";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadButtun = ({ book }: { book: IBook }) => {
  const { read, setRead } = useContext(BooksContext);
  const isAlreadyAdded = read.some(
    (item: IBook) => item.bookId === book.bookId,
  );

  const handlReadBook = () => {
    // console.log("read hit now ", book);

    if (isAlreadyAdded) {
      return;
    }
    setRead([...read, book]);
    toast.success(`you add a${book.bookName} book in your wishlist`);
  };

  return (
    <button
      className="btn min-h-12 flex-1 rounded-xl border-0 bg-[#50b1c9] text-base text-white hover:bg-[#399bb3] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
      onClick={() => handlReadBook()}
      disabled={isAlreadyAdded}
    >
      {isAlreadyAdded ? "Add to Read" : "Read"}
    </button>
  );
};

export default ReadButtun;
