import Image from "next/image";
import { FaRegStar, FaMapMarkerAlt } from "react-icons/fa"; // অথবা প্রয়োজনীয় আইকন
import { HiOutlineUsers, HiOutlineDocumentText } from "react-icons/hi2";
import { IBook } from "@/types/books.type";
import Link from "next/link";

interface IBookPromis {
  book: IBook;
}

const LiastCard = ({ book }: IBookPromis) => {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    tags,
    category,
    yearOfPublishing,
    publisher,
    totalPages,
  } = book;

  return (
    <div className="grid grid-cols-1 items-center gap-6 rounded-3xl border border-[#dcdcdc] bg-white p-4 transition-all duration-300 hover:shadow-lg sm:p-6 md:grid-cols-[220px_1fr] md:gap-8">
      {/* Book Image */}
      <div className="flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-[#f3f3f3] p-5 sm:h-72 md:h-64">
        <Image
          src={image}
          alt={bookName}
          width={250}
          height={280}
          sizes="(max-width: 768px) 80vw, 220px"
          className="h-full w-full rounded-md object-contain"
        />
      </div>

      {/* Book Information */}
      <div className="flex min-w-0 flex-col">
        {/* Book Name */}
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          {bookName}
        </h2>

        {/* Author */}
        <p className="mt-2 text-sm font-medium text-gray-600 sm:text-base">
          By : {author}
        </p>

        {/* Tags and Year of Publishing */}
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-600">
          <span className="font-semibold text-gray-900">Tag</span>
          <div className="flex flex-wrap gap-2">
            {(tags ?? []).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          {yearOfPublishing && (
            <span className="ml-auto flex items-center gap-1.5 text-gray-500">
              📍 Year of Publishing: {yearOfPublishing}
            </span>
          )}
        </div>

        {/* Publisher and Page Info */}
        <div className="mt-3 flex flex-wrap items-center gap-6 text-sm text-gray-500">
          {publisher && (
            <span className="flex items-center gap-2">
              <HiOutlineUsers className="text-lg" /> Publisher: {publisher}
            </span>
          )}
          {totalPages && (
            <span className="flex items-center gap-2">
              <HiOutlineDocumentText className="text-lg" /> Page {totalPages}
            </span>
          )}
        </div>

        <hr className="my-4 border-t border-gray-200" />

        {/* Category, Rating, and View Details Button */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {category && (
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
                Category: {category}
              </span>
            )}
            {rating && (
              <span className="flex items-center gap-1.5 rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-600">
                Rating: {rating} <FaRegStar className="text-amber-500" />
              </span>
            )}
          </div>

          <Link
            href={`/books/${bookId}`}
            className="flex items-center justify-center rounded-full bg-green-600 px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-green-700 hover:shadow-md active:scale-95"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LiastCard;
