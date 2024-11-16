import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen p-4 bg-minion-yellow text-dark-charcoal rounded sm:rounded-none">
      <div className="relative flex items-center justify-center min-h-[calc(100vh-2rem)] min-w-full px-6 text-center bg-dark-charcoal md:px-12 rounded-md">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="text-minion-yellow mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
              404
            </h1>
            <p className="mb-4 text-3xl font-bold tracking-tight text-gray-300 md:text-4xl">
              Something&#39;s missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-300">
              Sorry, we can&#39;t find that page. You&#39;ll find lots to
              explore on the home page.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-black rounded-lg hover:bg-minion-yellow hover:text-dark-charcoal focus:ring-4 focus:ring-minion-yellow my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
