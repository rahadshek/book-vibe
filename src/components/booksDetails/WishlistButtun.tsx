"use client";

import { BooksContext } from "@/context/BooksProvider";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishlistButtun = ({ book }: { book: IBook }) => {
  const booksProvider = useContext(BooksContext);

  const { wishlist, setWishlist } = booksProvider;

  const handlWishlistBook = () => {
    console.log(" wishlist hit now ", book);
    setWishlist([...wishlist, book]);

    toast.success(`you add a${book.bookName} book in your wishlist`);
  };

  return (
    <button
      className="btn min-h-12 flex-1 rounded-xl border-0 bg-[#50b1c9] text-base text-white hover:bg-[#399bb3]"
      onClick={() => handlWishlistBook()}
    >
      Wishlist
    </button>
  );
};

export default WishlistButtun;
