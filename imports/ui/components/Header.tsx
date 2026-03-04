import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { MobileNavOverlay } from "./MobileNavOverlay";

export const Header = () => {
  return (
    <header className="site-header">
      {/* Logo */}
      <NavLink to="/" className="site-header__logo">
        Hybrid Hiring
      </NavLink>

      {/* NavLink 
        will switch to NavLink after routing is implemented 
      */}
      <nav className="site-header__nav">
        <NavLink to="/" className="site-header__link">
          Home
        </NavLink>
        <NavLink to="/about" className="site-header__link">
          About
        </NavLink>
        <NavLink to="/contact" className="site-header__link">
          Contact
        </NavLink>
        <NavLink to="/jobs" className="site-header__link">
          Jobs
        </NavLink>
      </nav>

      {/* Auth */}
      <div className="site-header__auth">
        <NavLink to="/login" className="site-header__link">
          Log In
        </NavLink>
        <NavLink to="/signup" className="site-header__link">
          Sign Up
        </NavLink>
      </div>

      {/* Hamburger Button */}
      <button className="site-header__hamburger">=</button>
    </header>
  );
};
