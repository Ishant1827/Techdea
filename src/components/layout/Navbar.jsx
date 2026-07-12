import { NavLink } from "react-router-dom";
import logo from "../../assets/images/favicon.svg";

function Navbar() {
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
    <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 shadow-xl hover:shadow-2xl">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-8">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">

          <img
            src={logo}
            alt="Techdea Logo"
            className="w-12 h-12 rounded-full"
          />

          <div>
            <h1 className="text-2xl font-bold text-white">
              Tech<span className="text-purple-700">dea</span>
            </h1>

            <p className="text-xs text-gray-400">
              Where Technology Meets Innovation
            </p>
          </div>

        </NavLink>

        {/* Navigation */}

        <ul className="flex items-center gap-8">

          {navLinks.map((item) => (

            <li key={item.name}>

              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition duration-300 font-medium ${
                    isActive
                      ? "text-purple-600"
                      : "text-white hover:text-purple-600"
                  }`
                }
              >
                {item.name}
              </NavLink>

            </li>

          ))}

        </ul>

        {/* Button */}

        <NavLink
          to="/login"
          className="bg-purple-700 hover:bg-purple-800 px-5 py-2 rounded-lg text-white font-medium transition duration-300"
        >
          Login
        </NavLink>

      </nav>
    </header>
  );
}

export default Navbar;