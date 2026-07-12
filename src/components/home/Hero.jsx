import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>

          <p className="text-purple-400 font-semibold tracking-widest uppercase">
            Where Technology Meets Innovation
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-5 leading-tight">
            Build Your
            <span className="text-purple-400"> Digital Future </span>
            With Techdea
          </h1>

          <p className="text-gray-300 mt-6 text-lg leading-8">
            We provide modern web development, Python solutions,
            career mentoring, technical training, and software
            development services for students, startups, and businesses.
          </p>

          <div className="flex gap-5 mt-8">

            <NavLink
              to="/services"
              className="bg-purple-700 hover:bg-purple-800 px-6 py-3 rounded-lg font-semibold transition"
            >
              Explore Services
            </NavLink>

            <NavLink
              to="/projects"
              className="border border-purple-500 px-6 py-3 rounded-lg hover:bg-purple-700 transition"
            >
              View Projects
            </NavLink>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <img
            src="/src/assets/images/logo.png"
            alt="Techdea"
            className="w-96"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;