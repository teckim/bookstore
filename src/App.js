import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Layout from './components/Layout';
import BooksView from './components/BooksView';
import CategoriesView from './components/CategoriesView';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<BooksView />} />
            <Route path="/categories" element={<CategoriesView />} />
          </Route>
        </Routes>
      </div>
    </Router>
  </Provider>
);

export default App;
