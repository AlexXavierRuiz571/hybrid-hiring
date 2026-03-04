import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { MobileNavOverlay } from './MobileNavOverlay';
import './Header.css';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isLoggedIn, isAdmin } = useTracker(() => {
    const userId = typeof Meteor.userId === 'function' ? Meteor.userId() : null;
    const user =
      typeof Meteor.user === 'function'
        ? (Meteor.user() as (Meteor.User & { isAdmin?: boolean }) | null)
        : null;
    return {
      isLoggedIn: !!userId,
      isAdmin: !!user?.isAdmin,
    };
  });

  const handleLogOut = () => {
    if (typeof Meteor.logout === 'function') {
      Meteor.logout();
    }
  };

  return (
    <header className="site-header">
      <NavLink to="/" className="site-header__logo">
        Hybrid Hiring
      </NavLink>

      <nav className="site-header__nav">
        <NavLink to="/users/list">Users List</NavLink>
        <NavLink to="/users/manage">Users Manager</NavLink>
      </nav>

      <button
        className="site-header__hamburger"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-nav"
      >
        <span className="site-header__hamburger-bar" />
        <span className="site-header__hamburger-bar" />
        <span className="site-header__hamburger-bar" />
      </button>

      <MobileNavOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        isLoggedIn={isLoggedIn}
        isAdmin={isAdmin}
        onLogOut={handleLogOut}
      />
    </header>
  );
};
