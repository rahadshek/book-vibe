
import React from 'react';
import BookCard from '../shear/BookCard';

const getBookData = async () => {
  const res = await fetch('http://localhost:3000/booksData.json');
  const books = await res.json();
  return books;
};

const Books = async () => {
  const books = await getBookData();

  return (
    <div className="container mx-auto my-10 px-4 sm:my-14 md:my-20">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">
        Books
      </h2>

      <div className="grid grid-cols-1 gap-7 py-7 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
