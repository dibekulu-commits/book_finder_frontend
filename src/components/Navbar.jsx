import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #6d211cff;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  a {
    color: white;
    text-decoration: none;
    margin-left: 1.5rem;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #38bdf8;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Brand>BookShelf</Brand>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/results">Search</Link>
        <Link to="/favorites">Favorites</Link>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
