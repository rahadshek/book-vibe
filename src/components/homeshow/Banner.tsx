import React from 'react';
import bannerimg from '@/assets/hero_img.jpg';
import Image from 'next/image';

const Banner = () => {
    return (
        <nav className="container mx-auto my-5 rounded-xl bg-[#f3f3f3] px-4 py-6 sm:my-8 sm:px-6 sm:py-8 md:my-10 md:px-8 lg:px-12 lg:py-10">

            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-6 lg:gap-10">

                <div className="space-y-5 text-center md:space-y-6 md:text-left">
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        Books to freshen up <br className="hidden sm:block" />
                        your bookshelf
                    </h2>

                    <button className="btn btn-secondary border-[#23be0a] bg-[#23be0a] px-6 text-base font-bold text-white shadow-lg shadow-[#23be0a]/30 transition-all duration-300 hover:-translate-y-1 hover:border-[#1da008] hover:bg-[#1da008] hover:shadow-xl">
                        View The List
                    </button>
                </div>

                <div className="mx-auto w-full max-w-md md:max-w-none">
                    <Image
                        src={bannerimg}
                        alt="Books for your bookshelf"
                        width={500}
                        height={500}
                        priority
                        sizes="(max-width: 767px) 100vw, 50vw"
                        className="h-auto w-full rounded-xl object-cover transition-transform duration-300 hover:scale-[1.02]"
                    />
                </div>

            </div>
        </nav>
    );
};

export default Banner;