import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import BookCard from '../components/BookCard';
import Page from '../components/Page';

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
`;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResultsPage = () => {
  const query = useQuery();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);

      const params = {};
      if (query.get('title')) params.title = query.get('title');
      if (query.get('author')) params.author = query.get('author');
      if (query.get('genre')) params.genre = query.get('genre');

      try {
        const response = await axios.get('http://localhost:5000/api/books/search', {
          params,
        });
        setBooks(response.data);
      } catch (err) {
        setError('Failed to load search results.');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [query.toString()]); // Re-run when query string changes

  return (
    <Page>
    <Container>
      <Title>Search Results</Title>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && books.length === 0 && <p>No results found.</p>}
      <Flex>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Flex>
    </Container>
    </Page>
  );
};

export default SearchResultsPage;
