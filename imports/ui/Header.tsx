import { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { MobileNavOverlay } from './MobileNavOverlay';
import './Header.css';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isLoggedIn, isAdmin } = useTracker(() => {
    const userId = Meteor.userId();
    const user = Meteor.user() as (Meteor.User & { isAdmin?: boolean }) | null;
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
      <div className="site-header__logo">Hybrid Hiring</div>

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
