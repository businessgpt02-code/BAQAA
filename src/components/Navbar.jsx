import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on link click
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" onClick={closeMenu}>
            <img 
              src="/logo/BAQAA.png" 
              alt="BAQAA" 
              className={`logo-img logo-default ${!scrolled ? 'visible' : ''}`} 
            />
            <img 
              src="/logo/BAQAA1.png" 
              alt="BAQAA" 
              className={`logo-img logo-scrolled ${scrolled ? 'visible' : ''}`} 
            />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div 
          className={`nav-hamburger ${menuOpen ? 'open' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          role="button"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
        
        <ul className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
          {['Home', 'About', 'Weddings', 'Events', 'Portfolio', 'Blogs', 'BAQAA BAZAR', 'Contact'].map((item) => {
            const isHome = location.pathname === '/';
            let sectionId = item === 'Blogs' ? 'journal' : item.toLowerCase();
            let href = isHome ? `#${sectionId}` : `/#${sectionId}`;
            
            if (item === 'BAQAA BAZAR') href = '#';
            if (item === 'Home') href = '/';
            if (item === 'About') href = '/about';
            if (item === 'Contact') href = '/contact';
            if (item === 'Blogs') href = '/blog';

            const isComingSoon = ['Weddings', 'Events', 'Portfolio', 'BAQAA BAZAR'].includes(item);

            const isActive =
              (item === 'Home' && location.pathname === '/' && !location.hash) ||
              (item === 'About' && location.pathname === '/about') ||
              (item === 'Contact' && location.pathname === '/contact') ||
              (item === 'Blogs' && location.pathname === '/blog') ||
              (!['Home', 'About', 'Contact', 'Blogs', 'BAQAA BAZAR', 'Weddings'].includes(item) &&
                location.pathname === '/' &&
                location.hash === `#${sectionId}`);

            return (
              <li key={item} onClick={closeMenu}>
                {['Home', 'About', 'Contact', 'Blogs'].includes(item) ? (
                  <Link 
                    to={href}
                    className={`nav-link text-editorial ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item}
                    <span className="underline" />
                  </Link>
                ) : (
                  <a 
                    href={href}
                    className={`nav-link text-editorial ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={(e) => {
                      if (isComingSoon) {
                        e.preventDefault();
                        if (window.showComingSoon) {
                          window.showComingSoon();
                        }
                      }
                    }}
                    style={isComingSoon ? { cursor: 'pointer' } : {}}
                  >
                    {item}
                    <span className="underline" />
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
