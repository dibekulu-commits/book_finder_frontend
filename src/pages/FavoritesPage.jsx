import React, { useEffect, useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookCard from '../components/BookCard';

const FavoritesPage = () => {
  const { favorites, fetchFavorites, removeFromFavorites } = useContext(BookContext);

  useEffect(() => {
    fetchFavorites(); 
  }, []);

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map(book => (
          <BookCard
            key={book.id}
            book={book}
            isFavorite
            onRemove={() => removeFromFavorites(book.id)}
          />
        ))
      ) : (
        <p>No favorites added yet</p>
      )}
    </div>
  );
};

export default FavoritesPage;
