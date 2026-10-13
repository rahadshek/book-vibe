"use client";
import React, { useState } from "react";
import { createContext } from "react";

export const BooksContext = createContext({});

const BooksProvider = ({ children }: { children: React.ReactNode }) => {
  const [read, setRead] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const shearState = {
    read,
    setRead,
    wishlist,
    setWishlist,
  };
  return (
    <div>
      <BooksContext.Provider value={shearState}>
        {children}
      </BooksContext.Provider>
    </div>
  );
};

export default BooksProvider;
