import { StrictMode} from 'react';
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom/client';
import App from './App';
import { BookProvider } from './context/BookContext';

ReactDOM.createRoot(document.getElementById('root')).render(
   <StrictMode>
     <BrowserRouter>
        <BookProvider>
         <App />
        </BookProvider>
      </BrowserRouter>
    </StrictMode>
);
