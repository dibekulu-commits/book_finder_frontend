import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import FavoritesPage from './pages/FavoritesPage';
import GlobalStyle from './styles/GlobalStyle';
//import Navbar from './components/Navbar';

function App() {
  return (
  <div className="App"> 
    {/* <Navbar />  */}
    <GlobalStyle />
    {/* <div className="nav">
     <Link to="/">Home</Link>
     <Link to="/results">SearchResults</Link> 
     <Link to="/favorites">Favorites</Link>     
    </div> */}
    <Router>    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<SearchResultsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>  
  </div>
  );
}

export default App;
