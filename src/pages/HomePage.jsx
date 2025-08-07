import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Page from '../components/Page';

const HomePage = () => {
  const { books, loading, error } = useContext(BookContext);

  return (
    <Page style={{ padding: '2rem' }}>
      <Header />
      <Hero />
      <h2>Search for Books</h2>
      <SearchBar />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {Array.isArray(books) && books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </Page>
  );
};

export default HomePage;
