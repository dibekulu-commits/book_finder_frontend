import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import FavoritesPage from './pages/FavoritesPage';
//import GlobalStyle from './styles/GlobalStyle';
import Navbar from './components/Navbar';


function App() {
  return (
  <div className="App"> 
    {/* <GlobalStyle /> */}
    
    {/* <Navbar/>    */}
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
