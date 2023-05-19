import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import BookList from './components/BookList';
import Categories from './routes/Categories';
import NoMatch from './routes/NoMatch';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BookList />} />
          <Route path="/Categories" element={<Categories />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
