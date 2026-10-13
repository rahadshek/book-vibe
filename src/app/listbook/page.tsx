"use client";

import LiastCard from "@/components/liastCard/LiastCard";
import BookCard from "@/components/shear/BookCard";
import { BooksContext } from "@/context/BooksProvider";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";

const ListBooksPage = () => {
  const { read, wishlist } = useContext(BooksContext);

  return (
    <div className="container mx-auto px-4">
      <p>Total read books: {read.length}</p>
      <p>Total wishlist books: {wishlist.length}</p>

      <h2 className="my-6 rounded-2xl bg-[#f3f3f3] py-6 text-center text-3xl font-bold">
        Books
      </h2>

      {/* Book Tabs */}
      <div className="tabs tabs-lift">
        {/* Read Books Tab */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${read.length})`}
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-6">
          <div className="grid grid-cols-1 gap-6">
            {read.length > 0 ? (
              read.map((book: IBook) => {
                return <LiastCard key={book.bookId} book={book} />;
              })
            ) : (
              <p>No read book found</p>
            )}
          </div>
        </div>

        {/* Wishlist Tab */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist Books(${wishlist.length})`}
        />

        <div className="tab-content border-base-300 bg-base-100 p-6">
          <div className="grid grid-cols-1 gap-6">
            {wishlist.length > 0 ? (
              wishlist.map((book: IBook) => {
                return <LiastCard key={book.bookId} book={book} />;
              })
            ) : (
              <p>No wishlist book found </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBooksPage;
