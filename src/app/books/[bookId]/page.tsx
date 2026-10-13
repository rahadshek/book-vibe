import ReadButtun from "@/components/booksDetails/ReadButtun";
import WishlistButtun from "@/components/booksDetails/WishlistButtun";
import { IBook } from "@/types/books.type";
import Image from "next/image";

interface IBookPromis {
  params: Promise<{ bookId: string }>;
}

const getBookData = async (): Promise<IBook[]> => {
  const res = await fetch("http://localhost:3000/booksData.json", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch books data");
  }

  return res.json();
};

// Generate static pages for all book IDs
export async function generateStaticParams() {
  const booksData = await getBookData();

  return booksData.map((book) => ({
    bookId: String(book.bookId),
  }));
}

const BookDetailsPage = async ({ params }: IBookPromis) => {
  const { bookId } = await params;

  const booksData = await getBookData();

  const book = booksData.find((item) => item.bookId === Number(bookId));

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Book not found!</h2>
      </div>
    );
  }

  const {
    
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {/* Page Title */}
      <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 sm:mb-10 sm:text-4xl">
        Book Details
      </h2>

      {/* Main Card */}
      <div  className="grid grid-cols-1 gap-6 overflow-hidden rounded-2xl border border-gray-200 bg-base-100 p-4 shadow-sm sm:p-6 md:gap-8 lg:grid-cols-2 lg:gap-10 lg:p-10">
        {/* Book Image */}
        <div className="flex min-h-[280px] items-center justify-center rounded-2xl bg-[#f3f3f3] p-6 sm:min-h-[380px] sm:p-10 lg:min-h-[480px]">
          <Image
            src={image}
            alt={bookName}
            width={500}
            height={670}
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 400px"
            className="h-auto max-h-[420px] w-full max-w-[300px] rounded-xl object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Book Information */}
        <div className="flex flex-col justify-center gap-4 py-2 sm:gap-5">
          <div>
            <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700">
              {category}
            </span>

            <h1 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              {bookName}
            </h1>

            <p className="mt-3 text-base font-medium text-gray-600 sm:text-lg">
              By: <span className="text-gray-900">{author}</span>
            </p>
          </div>

          <div className="border-t border-dashed border-gray-300" />

          {/* Review */}
          <div>
            <h3 className="mb-2 text-lg font-bold text-gray-900">
              Book Review
            </h3>

            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              {review}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 font-bold text-gray-900">Tags:</span>

            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#f4fcf3] px-3 py-1.5 text-sm font-medium text-[#23be0a]"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="border-t border-dashed border-gray-300" />

          {/* Book Details */}
          <div className="space-y-4 text-sm sm:text-base">
            <div className="flex flex-wrap justify-between gap-2">
              <span className="text-gray-500">Number of Pages</span>
              <span className="font-semibold text-gray-900">{totalPages}</span>
            </div>

            <div className="flex flex-wrap justify-between gap-2">
              <span className="text-gray-500">Publisher</span>
              <span className="font-semibold text-gray-900">{publisher}</span>
            </div>

            <div className="flex flex-wrap justify-between gap-2">
              <span className="text-gray-500">Year of Publishing</span>
              <span className="font-semibold text-gray-900">
                {yearOfPublishing}
              </span>
            </div>

            <div className="flex flex-wrap justify-between gap-2">
              <span className="text-gray-500">Rating</span>
              <span className="flex items-center gap-2 font-semibold text-gray-900">
                <span className="text-amber-500">★</span>
                {rating}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <ReadButtun book={book} />
            <WishlistButtun book={book} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
