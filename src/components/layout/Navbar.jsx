import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

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
    <header className="sticky top-0 z-50 bg-[#0B1120] shadow-lg">
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
              Tech<span className="text-amber-400">dea</span>
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
                      ? "text-amber-400"
                      : "text-white hover:text-amber-400"
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
          className="bg-amber-500 hover:bg-orange-500 px-5 py-2 rounded-lg text-white font-medium transition duration-300"
        >
          Login
        </NavLink>

      </nav>
    </header>
  );
}

export default Navbar;