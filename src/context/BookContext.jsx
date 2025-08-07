import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = 'http://localhost:5000/api/books';

  // Search books
  const searchBooks = async (queryParams) => { 
  setLoading(true);
  setError(null);
  try {
    const res = await axios.get(`${API_URL}/search`, { params: queryParams });
    console.log('API Response:', res.data); 
    if (Array.isArray(res.data)) {
      setBooks(res.data); 
    } else {
      console.error('Expected an array but got:', typeof res.data);
      setBooks([]); 
    }
  } catch (err) {
    console.error('Search error:', err);
    setError('Failed to fetch books');
    setBooks([]); // fallback to avoid .map crash
  } finally {
    setLoading(false);
  }
};

  // Fetch favorites
  const fetchFavorites = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${API_URL}/favorites`);
      setFavorites(res.data);
    } catch (err) {
      setError('Failed to fetch favorites');
    } finally {
      setLoading(false);
    }
  };

  // Add to favorites
  const addToFavorites = async (bookId) => {
  try {
    const res = await axios.post(`${API_URL}/favorites`, { bookId });
    setFavorites(prev => [...prev, res.data]); // assuming res.data is the favorite book
  } catch (err) {
    console.error('Failed to add favorite:', err);
  }
};


  // Remove from favorites
  const removeFromFavorites = async (bookId) => {
    try {
      await axios.delete(`${API_URL}/favorites/${bookId}`);
      fetchFavorites(); // update local state
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
  axios.get('/api/books') // or backend route
    .then((res) => setBooks(res.data))
    .catch((err) => console.error(err));
}, []);

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        favorites,
        loading,
        error,
        searchBooks,
        addToFavorites,
        removeFromFavorites,
        fetchFavorites,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
