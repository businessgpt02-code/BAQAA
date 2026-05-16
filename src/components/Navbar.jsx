import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
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
        
        <ul className="nav-links">
          {['Home', 'About', 'Weddings', 'Destinations', 'Journal', 'BAQAA BAZAR', 'Contact'].map((item) => {
            const isHome = location.pathname === '/';
            let href = isHome ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`;
            
            if (item === 'BAQAA BAZAR') href = '#';
            if (item === 'Home') href = '/';
            if (item === 'About') href = '/about';

            return (
              <li key={item}>
                {item === 'Home' || item === 'About' ? (
                  <Link 
                    to={href}
                    className="nav-link text-editorial"
                  >
                    {item}
                    <span className="underline" />
                  </Link>
                ) : (
                  <a 
                    href={href}
                    className="nav-link text-editorial"
                    onClick={item === 'BAQAA BAZAR' ? (e) => e.preventDefault() : undefined}
                    style={item === 'BAQAA BAZAR' ? { cursor: 'default' } : {}}
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
