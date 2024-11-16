import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-svh bg-extends-minion-yellow text-extends-dark-charcoal p-4 rounded sm:rounded-none">
      <div className="relative bg-extends-dark-charcoal min-h-[calc(100vh-2rem)] min-w-full flex items-center justify-center text-center px-6 md:px-12 rounded-md">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-extends-minion-yellow dark:text-primary-500">
              ~404~
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-black md:text-4xl">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>
            <Link
              href="/"
              className="inline-flex text-white bg-black hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
