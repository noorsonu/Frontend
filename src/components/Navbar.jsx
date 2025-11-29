import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authService } from '../services';
import Notification from './Notification';

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState({ message: '', type: '' });
  const [libraryDropdown, setLibraryDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenNav(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Check authentication status
    const checkAuth = () => {
      const token = authService.getToken();
      if (token) {
        // Extract user info from token or get from localStorage
        const userData = localStorage.getItem('userInfo');
        if (userData) {
          const parsedUser = JSON.parse(userData);
          // Check if user is admin (you can modify this logic based on your backend)
          const isAdmin = parsedUser.email === 'admin@example.com' || parsedUser.role === 'ADMIN';
          setUser({ ...parsedUser, isAdmin });
        } else {
          // If no user data, just show that user is logged in
          setUser({ name: 'User', isAdmin: false });
        }
      } else {
        setUser(null);
      }
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLibraryDropdown(false);
      }
    };

    handleResize();
    handleScroll();
    checkAuth();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener('storage', checkAuth);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('storage', checkAuth);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getNavLinks = () => {
    const baseLinks = [
      { name: "Home", href: "/" },
      { name: "Library", href: "#", dropdown: true },
      { name: "Services", href: "/services" },
    ];
    
    // Add admin link only if user is admin
    if (user && user.isAdmin) {
      baseLinks.splice(1, 0, { name: "Admin", href: "/admin" });
    }
    
    return baseLinks;
  };
  
  const navLinks = getNavLinks();

  return (
    <>
      <Notification 
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: '', type: '' })}
      />
      <nav
      className={`fixed top-0 left-0 right-0 z-[9999] w-full transition-all duration-300 ${scrolled
        ? "bg-gradient-to-b from-black/30 via-black/25 to-black/30 backdrop-blur-xl shadow-2xl border-b border-white/20"
        : "bg-gradient-to-b from-black/20 via-black/15 to-black/20 backdrop-blur-lg shadow-lg border-b border-white/10"
        }`}
      style={{
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'blur(12px) saturate(150%)',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'blur(12px) saturate(150%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20 relative">
          {/* Mobile Menu Button - Left side */}
          <button
            className="xl:hidden cursor-pointer p-2 sm:p-2.5 rounded-lg text-white hover:text-amber-100 hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm z-30"
            onClick={() => setOpenNav(!openNav)}
            aria-label="Toggle menu"
            aria-expanded={openNav}
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5 relative">
              <span
                className={`absolute top-0 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${openNav ? "rotate-45 translate-y-[8px] sm:translate-y-2" : ""
                  }`}
              ></span>
              <span
                className={`absolute top-[8px] sm:top-2 left-0 w-full h-0.5 bg-current transition-all duration-300 ${openNav ? "opacity-0" : "opacity-100"
                  }`}
              ></span>
              <span
                className={`absolute top-4 sm:top-4 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${openNav ? "-rotate-45 -translate-y-[8px] sm:-translate-y-2" : ""
                  }`}
              ></span>
            </div>
          </button>

          {/* Logo - Centered on mobile/tablet/small laptops, left on large desktop */}
          <a
            href="#"
            className="flex items-center space-x-2 sm:space-x-2.5 md:space-x-3 cursor-default absolute left-1/2 transform -translate-x-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 xl:relative xl:left-25 xl:ml-0 xl:transform-none xl:mr-4 z-30"
          >
            <img
              src="/logo.png"
              alt="yaALLAH Logo"
              className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 object-contain drop-shadow-lg"
            />
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] whitespace-nowrap">
              yaALLAH.in
            </span>
          </a>

          {/* Desktop Navigation - Only visible on xl+ screens when logo is on left */}
          <div className="hidden xl:flex xl:items-center xl:flex-1 xl:justify-center xl:mx-8 xl:z-10">
            <ul className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:flex-row lg:items-center lg:gap-4 xl:gap-6 lg:mb-0">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href || 
                  (link.dropdown && (location.pathname === '/durood' || location.pathname === '/dua'));
                return (
                  <li key={link.name}>
                    {link.href === "/" ? (
                      <Link
                        to={link.href}
                        className={`relative flex items-center px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base font-medium transition-all duration-300 group drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] whitespace-nowrap ${
                          isActive 
                            ? 'text-green-400 border-b-2 border-green-400' 
                            : 'text-white hover:text-amber-100'
                        }`}
                      >
                        {link.name}
                        <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                          isActive 
                            ? 'w-full bg-green-400' 
                            : 'w-0 bg-amber-300 group-hover:w-full'
                        }`}></span>
                      </Link>
                    ) : link.dropdown ? (
                      <div className="relative" ref={dropdownRef}>
                        <button
                          onClick={() => setLibraryDropdown(!libraryDropdown)}
                          className={`relative flex items-center px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base font-medium transition-all duration-300 group drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] whitespace-nowrap cursor-pointer ${
                            isActive 
                              ? 'text-green-400 border-b-2 border-green-400' 
                              : 'text-white hover:text-amber-100'
                          }`}
                        >
                          {link.name}
                          <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${libraryDropdown ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                            isActive 
                              ? 'w-full bg-green-400' 
                              : 'w-0 bg-amber-300 group-hover:w-full'
                          }`}></span>
                        </button>
                        {libraryDropdown && (
                          <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-white/20 overflow-hidden z-50">
                            <Link
                              to="/durood"
                              className="block px-4 py-3 text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 border-b border-gray-100 last:border-b-0 cursor-pointer"
                              onClick={() => setLibraryDropdown(false)}
                            >
                              Durood-e-Shareef
                            </Link>
                            <Link
                              to="/dua"
                              className="block px-4 py-3 text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 border-b border-gray-100 last:border-b-0 cursor-pointer"
                              onClick={() => setLibraryDropdown(false)}
                            >
                              Dua
                            </Link>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className={`relative flex items-center px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base font-medium transition-all duration-300 group drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] whitespace-nowrap cursor-pointer ${
                          isActive 
                            ? 'text-green-400 border-b-2 border-green-400' 
                            : 'text-white hover:text-amber-100'
                        }`}
                      >
                        {link.name}
                        <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                          isActive 
                            ? 'w-full bg-green-400' 
                            : 'w-0 bg-amber-300 group-hover:w-full'
                        }`}></span>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* User Info - Always visible on all screens */}
          {location.pathname !== '/login' && location.pathname !== '/register' && (
            <div className="flex items-center space-x-2 z-20 ml-auto">
              {user ? (
                <>
                  <div className="flex  items-center space-x-1 sm:space-x-2 text-white pointer-events-none">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-semibold whitespace-nowrap">
                      Welcome, {user.name.split(' ')[0]}
                    </span>
                  </div>
                  {/* Desktop Logout Icon */}
                  <button
                    onClick={() => {
                      authService.logout();
                      setUser(null);
                      setNotification({ message: 'Logout successful', type: 'success' });
                      navigate('/');
                    }}
                    className="hidden xl:block p-2 text-white hover:text-red-300 transition-all duration-200 rounded-lg hover:bg-red-500/20 backdrop-blur-sm border border-red-400/30 drop-shadow-sm cursor-pointer"
                    title="Logout"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                    </svg>
                  </button>
                </>
              ) : (
                <Link to="/login" className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white hover:text-amber-100 transition-all duration-200 rounded-lg hover:bg-white/10 backdrop-blur-sm border border-white/30 drop-shadow-sm whitespace-nowrap cursor-pointer">
                  Log In
                </Link>
              )}
            </div>
          )}


        </div>

        {/* Mobile Menu - Navigation links + Logout */}
        <div
          className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${openNav ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="py-3 sm:py-4 space-y-2 border-t border-white/20 mt-2 backdrop-blur-md bg-black/10">
            <ul className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:flex-row lg:items-center lg:gap-4 xl:gap-6 lg:mb-0">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href || 
                  (link.dropdown && (location.pathname === '/durood' || location.pathname === '/dua'));
                return (
                  <li key={link.name}>
                    {link.href === "/" ? (
                      <Link
                        to={link.href}
                        className={`relative flex items-center px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base font-medium transition-all duration-300 group drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] whitespace-nowrap cursor-pointer ${
                          isActive 
                            ? 'text-green-400 border-b-2 border-green-400' 
                            : 'text-white hover:text-amber-100'
                        }`}
                      >
                        {link.name}
                        <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                          isActive 
                            ? 'w-full bg-green-400' 
                            : 'w-0 bg-amber-300 group-hover:w-full'
                        }`}></span>
                      </Link>
                    ) : link.dropdown ? (
                      <div className="space-y-2">
                        <div className={`px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base font-medium ${
                          isActive ? 'text-green-400' : 'text-white'
                        }`}>
                          {link.name}
                        </div>
                        <div className="pl-4 space-y-1">
                          <Link
                            to="/durood"
                            className="block px-2 py-1 text-sm text-white hover:text-amber-100 transition-colors cursor-pointer"
                            onClick={() => setOpenNav(false)}
                          >
                            Durood-e-Shareef
                          </Link>
                          <Link
                            to="/dua"
                            className="block px-2 py-1 text-sm text-white hover:text-amber-100 transition-colors cursor-pointer"
                            onClick={() => setOpenNav(false)}
                          >
                            Dua
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className={`relative flex items-center px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base font-medium transition-all duration-300 group drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] whitespace-nowrap cursor-pointer ${
                          isActive 
                            ? 'text-green-400 border-b-2 border-green-400' 
                            : 'text-white hover:text-amber-100'
                        }`}
                      >
                        {link.name}
                        <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                          isActive 
                            ? 'w-full bg-green-400' 
                            : 'w-0 bg-amber-300 group-hover:w-full'
                        }`}></span>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
            {/* Mobile Logout Button */}
            {location.pathname !== '/login' && location.pathname !== '/register' && user && (
              <div className="pt-2 border-t border-white/10">
                <button
                  onClick={() => {
                    authService.logout();
                    setUser(null);
                    setNotification({ message: 'Logout successful', type: 'success' });
                    navigate('/');
                    setOpenNav(false);
                  }}
                  className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base font-medium text-white hover:text-red-300 hover:bg-red-500/20 transition-all duration-300 rounded-lg border border-red-400/30 backdrop-blur-sm cursor-pointer flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                  </svg>
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}