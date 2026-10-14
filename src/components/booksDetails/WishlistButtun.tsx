"use client";

import { BooksContext } from "@/context/BooksProvider";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishlistButtun = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(BooksContext);

  const isAlreadyAdded = wishlist.some(
    (item: IBook) => item.bookId === book.bookId,
  );

  const handlWishlistBook = () => {
    if (isAlreadyAdded) {
      return;
    }
    // console.log(" wishlist hit now ", book);
    setWishlist([...wishlist, book]);

    toast.success(`you add a${book.bookName} book in your wishlist`);
  };

  return (
    <button
       className="btn min-h-12 flex-1 rounded-xl border-0 bg-[#50b1c9] text-base text-white hover:bg-[#399bb3] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
      onClick={() => handlWishlistBook()}
      disabled={isAlreadyAdded}
    >
      {isAlreadyAdded ? " Add to Wishlist" : "wishlist"}
    </button>
  );
};

export default WishlistButtun;
