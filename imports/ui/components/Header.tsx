export const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <a href="/" className="header__logo">
        Hybrid Hiring
      </a>

      {/* NavLink 
        will switch to NavLink after routing is implemented 
      */}
      <nav className="header__nav">
        <a href="/" className="header__link">
          Home
        </a>
        <a href="/about" className="header__link">
          About
        </a>
        <a href="/contact" className="header__link">
          Contact
        </a>
        <a href="/jobs" className="header__link">
          Jobs
        </a>
      </nav>

      {/* Auth */}
      <div className="header__auth">
        <a href="/login" className="header__link">
          Log In
        </a>
        <a href="/signup" className="header__link">
          Sign Up
        </a>
      </div>

      {/* Hamburger Button */}
      <button className="header__menu">=</button>
    </header>
  );
};
