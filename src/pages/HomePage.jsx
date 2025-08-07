import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';

const HomePage = () => {
  const { books, loading, error } = useContext(BookContext);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Search for Books</h2>
      <SearchBar />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {Array.isArray(books) && books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
