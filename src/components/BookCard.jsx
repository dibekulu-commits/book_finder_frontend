import React, { useContext } from 'react';
import styled from 'styled-components';
import { BookContext } from '../context/BookContext';
import { useNavigate } from 'react-router-dom';


const Card = styled.div`
  display: flex;
  gap: 1rem;
  background: #fff;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  max-width: 320px;
`;

const Cover = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
`;

const Info = styled.p`
  margin: 0.15rem 0;
  font-size: 0.9rem;
  color: #555;
`;

const Button = styled.button`
  background-color: #6d211cff
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 0.8rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const BookCard = ({ book, isFavorite = false, onRemove }) => {
  const { addToFavorites } = useContext(BookContext);
  const navigate = useNavigate();

  return (
    <Card>
  <div>
      {book.coverImage && <Cover src={book.coverImage}  />}
  </div>
  <div>    
      <Title>{book.title}</Title>
      <Info><strong>Author:</strong> {book.author}</Info>
      <Info><strong>Year:</strong> {book.year}</Info>
      <Info><strong>Description:</strong> {book.description?.slice(0, 100)}...</Info>
      {isFavorite ? (
        <Button onClick={onRemove}>Remove</Button>
      ) : (
        <Button onClick={async () => {
          await addToFavorites(book.id);
            navigate('/favorites');
          }}>
            Add to Favorites
          </Button>
      )}
  </div>
    </Card>
  );
};

export default BookCard;
