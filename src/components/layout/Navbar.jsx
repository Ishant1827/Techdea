import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

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
    <>
      {/* Navbar */}

      <header className="sticky top-0 z-50 bg-[#09090B]/95 backdrop-blur-md border-b border-purple-900">

        <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">

          {/* Logo */}

          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3"
          >

            <img
              src={logo}
              alt="Techdea"
              className="w-12 h-12 object-contain"
            />

            <div>

              <h1 className="text-2xl font-bold text-white">
                Tech<span className="text-[#A855F7]">dea</span>
              </h1>

              <p className="hidden lg:block text-xs text-slate-400">
                Converts Ideas Into Innovation
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
                    `font-medium transition ${
                      isActive
                        ? "text-[#A855F7]"
                        : "text-white hover:text-[#A855F7]"
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
            className="hidden lg:block bg-[#7C3AED] hover:bg-[#9333EA] text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Login
          </NavLink>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-white text-3xl"
          >
            <FaBars />
          </button>

        </nav>

      </header>
            {/* Mobile Menu Overlay */}

      <div
        className={`fixed inset-0 z-[999] lg:hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >

        {/* Background */}

        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Drawer */}

        <div
          className={`absolute top-0 right-0 w-80 max-w-full h-screen bg-[#11111A] shadow-2xl transition-transform duration-300 overflow-y-auto ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >

          {/* Header */}

          <div className="flex items-center justify-between p-6 border-b border-zinc-800">

            <div className="flex items-center gap-3">

              <img
                src={logo}
                alt="Techdea"
                className="w-11 h-11 object-contain"
              />

              <div>

                <h2 className="text-xl font-bold text-white">
                  Tech<span className="text-[#A855F7]">dea</span>
                </h2>

                <p className="text-xs text-slate-400">
                  Where Technology Meets Innovation
                </p>

              </div>

            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl hover:text-[#A855F7] transition"
            >
              <FaTimes />
            </button>

          </div>

          {/* Navigation */}

          <div className="flex flex-col py-6">

            {navLinks.map((item) => (

              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-7 py-4 text-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-[#7C3AED]/20 text-[#A855F7] border-l-4 border-[#A855F7]"
                      : "text-white hover:bg-zinc-900 hover:text-[#A855F7]"
                  }`
                }
              >
                {item.name}
              </NavLink>

            ))}

            {/* Login Button */}

            <div className="px-6 mt-6">

              <NavLink
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-[#7C3AED] hover:bg-[#9333EA] text-white py-3 rounded-xl font-semibold transition"
              >
                Login
              </NavLink>

            </div>

          </div>
                  </div>

      </div>

    </>
  );
}

export default Navbar;
