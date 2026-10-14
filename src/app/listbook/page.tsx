"use client";

import LiastCard from "@/components/liastCard/LiastCard";
import { BooksContext } from "@/context/BooksProvider";
import { IBook } from "@/types/books.type";
import { useContext, useState } from "react";

type shortByType = "shortby" | "rating" | "page" | "year";

const ListBooksPage = () => {
  const { read, wishlist } = useContext(BooksContext) as {
    read: IBook[];
    wishlist: IBook[];
  };

  const [shortBy, setShortBy] = useState<shortByType>("shortby");

  const shortBooks = (books: IBook[]): IBook[] => {
    const shortedBooks = [...books];

    if (shortBy === "rating") {
      shortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (shortBy === "page") {
      shortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (shortBy === "year") {
      shortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    return shortedBooks;
  };

  const readShortBy = shortBooks(read);
  const wishlistShortBy = shortBooks(wishlist);

  return (
    <div className="container mx-auto px-4">
      <h2 className="my-6 rounded-2xl bg-[#f3f3f3] py-6 text-center text-3xl font-bold">
        Books
      </h2>



      <div className="my-10 flex justify-center">
        <select
          className="select select-accent bg-gree-500"
          value={shortBy}
          onChange={(e) => setShortBy(e.target.value as shortByType)}
        >
          <option disabled value="shortby">
            Sort By
          </option>
          <option value="rating">Rating</option>
          <option value="page">Number of Pages</option>
          <option value="year">Publisher Year</option>
        </select>
      </div>

      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${read.length})`}
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-6">
          <div className="grid grid-cols-1 gap-6">
            {readShortBy.length > 0 ? (
              readShortBy.map((book: IBook) => (
                <LiastCard key={book.bookId} book={book} />
              ))
            ) : (
              <p>No read book found</p>
            )}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
        />

        <div className="tab-content border-base-300 bg-base-100 p-6">
          <div className="grid grid-cols-1 gap-6">
            {wishlistShortBy.length > 0 ? (
              wishlistShortBy.map((book: IBook) => (
                <LiastCard key={book.bookId} book={book} />
              ))
            ) : (
              <p>No wishlist book found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBooksPage;
