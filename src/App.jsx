import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Homepage from "./components/Homepage.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Tools from "./components/Tools.jsx";
import Emergency from "./components/Emergency.jsx";
import Expenses from "./components/Expenses.jsx";
import AuthModal from "./components/AuthModal.jsx";
import Profile from "./components/Profile.jsx";
import CreditCardRecommendations from "./components/CreditCardRecommendations.jsx";
import SignupPage from "./components/SignupForm.jsx"; // <-- New import

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authFormType, setAuthFormType] = useState("signup");

  const handleOpenAuthModal = (type) => {
    setAuthFormType(type);
    setShowAuthModal(true);
  };

  const handleCloseAuthModal = () => {
    setShowAuthModal(false);
  };

  const handleToggleForm = () => {
    setAuthFormType((prevType) => (prevType === "login" ? "signup" : "login"));
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    handleCloseAuthModal();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Navbar
        isLoggedIn={isLoggedIn}
        onOpenAuthModal={handleOpenAuthModal}
        onLogout={handleLogout}
      />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup-flow" element={<SignupPage />} />{" "}
        {/* <-- New Route */}
        {isLoggedIn && <Route path="/dashboard" element={<Dashboard />} />}
        {isLoggedIn && <Route path="/expenses" element={<Expenses />} />}
        {isLoggedIn && <Route path="/tools" element={<Tools />} />}
        {isLoggedIn && <Route path="/emergency" element={<Emergency />} />}
        {isLoggedIn && <Route path="/profile" element={<Profile />} />}
        {isLoggedIn && (
          <Route
            path="/recommendations"
            element={<CreditCardRecommendations />}
          />
        )}
        <Route path="*" element={<Homepage />} />
      </Routes>
      <AuthModal
        show={showAuthModal}
        formType={authFormType}
        onClose={handleCloseAuthModal}
        onToggleForm={handleToggleForm}
        onSuccessAuth={handleLogin}
      />
    </Router>
  );
}

export default App;
