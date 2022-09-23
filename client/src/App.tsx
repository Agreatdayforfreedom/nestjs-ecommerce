import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { BookProvider } from './context/BookProvider';
import { CartProvider } from './context/CartProvider';
import { AdminLayout } from './layouts/AdminLayout';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import { Admin } from './pages/Admin';
import { AdminBooks } from './pages/AdminBooks';
import { Book } from './pages/Book';
import { Books } from './pages/Books';
import { Cart } from './pages/Cart';
import { Categories } from './pages/Categories';
import { CreateBook } from './pages/CreateBook';
import { CreateCategory } from './pages/CreateCategory';
import Home from './pages/Home';
import { Login } from './pages/Login';
import MyData from './pages/MyData';
import MyOrders from './pages/MyOrders';
import { News } from './pages/News';
import { Order } from './pages/Order';
import { Signup } from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <BookProvider>
            <Routes>
              <Route path="/" element={<AuthLayout />}>
                <Route index element={<Home />} />
                <Route path="book/:id" element={<Book />} />
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
                <Route path="cart" element={<Cart />} />
                <Route path="categories" element={<Categories />} />
                <Route path="books" element={<Books />} />
                <Route path="news" element={<News />} />
              </Route>
              <Route path="/" element={<MainLayout />}>
                <Route path="my-data" element={<MyData />} />
                <Route path="order/:id" element={<Order />} />
                <Route path="orders" element={<MyOrders />} />
              </Route>
              <Route path="/" element={<AdminLayout />}>
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/books" element={<AdminBooks />} />
                <Route path="/admin/create-book" element={<CreateBook />} />
                <Route
                  path="admin/create-category"
                  element={<CreateCategory />}
                />
              </Route>
            </Routes>
          </BookProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
