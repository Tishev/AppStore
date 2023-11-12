import Home from './pages/Home';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { store } from './redux';
import { paths } from './paths/paths';
import Catalog from './pages/Catalog';
import Product from './pages/Product';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Routes>
                    <Route path={paths.home} element={<Home />} />
                    <Route path={paths.catalog} element={<Catalog />} />
                    <Route path={paths.product + '/:id'} element={<Product />} />
                </Routes>
                <Footer />
            </Router>
        </Provider>
    );
}

export default App;
// 18:19
