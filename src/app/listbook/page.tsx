"use client";
import { BooksContext } from "@/context/BooksProvider";

import React, { useContext } from "react";

const ListBooksPage = () => {
  const { read, wishlist } = useContext(BooksContext);
  console.log(read," read books is there");
  console.log(wishlist," wishlist books is there");
  return (
    <div>
      <h1>rthj5nldk</h1>
    </div>
  );
};

export default ListBooksPage;
