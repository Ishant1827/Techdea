import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/favicon.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Training", path: "/training" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#09090B] border-b border-zinc-800 shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={logo}
            alt="Techdea Logo"
            className="w-10 h-10 md:w-12 md:h-12"
          />

          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white">
              Tech<span className="text-[#A855F7]">dea</span>
            </h1>

            <p className="hidden lg:block text-xs text-slate-400">
              Where Technology Meets Innovation
            </p>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">

          {navLinks.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition duration-300 ${
                    isActive
                      ? "text-[#A855F7]"
                      : "text-slate-300 hover:text-[#A855F7]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}

        </ul>

        {/* Desktop Login */}
        <NavLink
          to="/login"
          className="hidden lg:block bg-[#7C3AED] hover:bg-[#9333EA] text-white px-5 py-2.5 rounded-xl font-semibold transition"
        >
          Login
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="bg-[#111118] border-t border-zinc-800">

          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 transition ${
                  isActive
                    ? "text-[#A855F7] bg-zinc-900"
                    : "text-slate-300 hover:bg-zinc-900 hover:text-[#A855F7]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <div className="p-5">
            <NavLink
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-[#7C3AED] hover:bg-[#9333EA] text-white py-3 rounded-xl font-semibold transition"
            >
              Login
            </NavLink>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Navbar;