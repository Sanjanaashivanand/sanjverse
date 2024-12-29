'use client'; // Mark this as a client-side component

import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      <div className="navbar bg-base-100">
        {/* Directly apply className to the Link component */}
        <Link href="/movies" className="btn btn-ghost text-xl">
          Movies
        </Link>
        <Link href="/shows" className="btn btn-ghost text-xl">
          Shows
        </Link>
        <Link href="/books" className="btn btn-ghost text-xl">
          Books
        </Link>
        <Link href="/music" className="btn btn-ghost text-xl">
          Music
        </Link>
        <Link href="/recipes" className="btn btn-ghost text-xl">
          Cook Book
        </Link>
      </div>
    </nav>
  );
}

