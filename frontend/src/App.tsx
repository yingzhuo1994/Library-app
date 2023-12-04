import React from "react";
import "./App.css";

import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Security, LoginCallback, SecureRoute } from "@okta/okta-react";

import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { HomePage } from "./layouts/HomePage/HomePage";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage";
import { ReviewListPage } from "./layouts/BookCheckoutPage/ReviewListPage/ReviewListPage";
import { BookCheckoutPage } from "./layouts/BookCheckoutPage/BookCheckoutPage";
import { ManageLibraryPage } from "./layouts/ManageLibraryPage/ManageLibraryPage";
import { ShelfPage } from "./layouts/ShelfPage/ShelfPage";
import { oktaConfig } from "./lib/oktaConfig";
import { MessagesPage } from "./layouts/MessagesPage/MessagesPage";
import LoginWidget from './Auth/LoginWidget';
import ProtectedRoute from "./layouts/Utils/ProtectedRoute";
import { PaymentPage } from "./layouts/PaymentPage/PaymentPage";

const oktaAuth = new OktaAuth(oktaConfig);

export const App = () => {
  const customAuthHandler = () => {
    navigate("/login");
  };

  const navigate = useNavigate();

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    navigate(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Security
        oktaAuth={oktaAuth}
        restoreOriginalUri={restoreOriginalUri}
        onAuthRequired={customAuthHandler}
      >
        <Navbar />
        <div className="flex-grow-1">
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/search" element={<SearchBooksPage />} />
            <Route path="/reviewList/:bookId" element={<ReviewListPage />} />
            <Route path="/checkout/:bookId" element={<BookCheckoutPage />} />
            <Route
              path="/login"
              element={<LoginWidget config={oktaConfig} />}
            />
            <Route path="/login/callback" element={<LoginCallback />} />
            {/* <Route path="/shelf" element={<ShelfPage />} /> */}
            <Route path="/shelf" element={<ProtectedRoute outlet={<ShelfPage />}/>} />
            {/* <Route path="/messages" element={<MessagesPage />} /> */}
            <Route path="/messages" element={<ProtectedRoute outlet={<MessagesPage />}/>} />
            <Route path="/admin" element={<ProtectedRoute outlet={<ManageLibraryPage />}/>} />
            <Route path="/fees" element={<ProtectedRoute outlet={<PaymentPage />}/>} />
            
          </Routes>
        </div>
        <Footer />
      </Security>
    </div>
  );
};

export default App;
