'use client'; // Mark this component as a client-side component

import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState(''); // Default active tab

  return (
    <nav>
      <div className="navbar bg-base-100 h-12">
        <Link
          href="/movies"
          className={`btn btn-ghost text-xl ${activeTab === 'movies' ? 'text-primary' : ''}`}
          onClick={() => setActiveTab('movies')} // Set active tab on click
        >
          Movies
        </Link>
        <Link
          href="/shows"
          className={`btn btn-ghost text-xl ${activeTab === 'shows' ? 'text-primary' : ''}`}
          onClick={() => setActiveTab('shows')}
        >
          Shows
        </Link>
        <Link
          href="/books"
          className={`btn btn-ghost text-xl ${activeTab === 'books' ? 'text-primary' : ''}`}
          onClick={() => setActiveTab('books')}
        >
          Books
        </Link>
        <Link
          href="/music"
          className={`btn btn-ghost text-xl ${activeTab === 'music' ? 'text-primary' : ''}`}
          onClick={() => setActiveTab('music')}
        >
          Music
        </Link>
        <Link
          href="/recipes"
          className={`btn btn-ghost text-xl ${activeTab === 'recipes' ? 'text-primary' : ''}`}
          onClick={() => setActiveTab('recipes')}
        >
          Cook Book
        </Link>
      </div>
    </nav>
  );
}
