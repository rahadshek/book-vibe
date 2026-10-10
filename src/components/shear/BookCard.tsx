import React from 'react';
import Image from 'next/image';
import { FaRegStar } from 'react-icons/fa';

const BookCard = ({ book }) => {
    const { bookName, author, image, rating, tags } = book;

    return (
        <div className="w-full rounded-3xl border border-[#dcdcdc] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5">

            {/* Book Image */}
            <div className="flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-[#f3f3f3] p-5 sm:h-72 ">
                <Image
                    src={image}
                    alt={bookName}
                    width={250}
                    height={280}
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 250px"
                    className="h-full w-full object-contain rounded-md"
                />
            </div>

            {/* Book Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full bg-green-100 px-3 py-2 text-sm font-semibold text-green-600"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Book Name */}
            <h2 className="mt-4 line-clamp-2 text-xl font-bold text-gray-900 sm:text-2xl">
                {bookName}
            </h2>

            {/* Author */}
            <p className="mt-3 text-sm font-medium text-gray-600 sm:text-base">
                By: {author}
            </p>

            <hr className="my-4 border-t-2 border-dashed border-gray-300" />

            {/* Footer */}
            <div className="flex items-center justify-between gap-3 text-sm text-gray-600 sm:text-base">
                <span className="font-medium">Fiction</span>

                <span className="flex shrink-0 items-center gap-2 font-semibold text-gray-800">
                    {rating}
                    <FaRegStar className="text-amber-500" />
                </span>
            </div>

        </div>
    );
};

export default BookCard;