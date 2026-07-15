import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/src/assets/images/hero.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Purple Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">

        <div className="max-w-2xl">

          <p className="uppercase tracking-[4px] text-[#C4B5FD] font-semibold">
            Where Technology Meets Innovation
          </p>

          <h1 className="mt-5 text-5xl md:text-7xl font-extrabold leading-tight text-white">
            Build Your
            <br />

            <span className="text-[#A855F7]">
              Digital Future
            </span>

            <br />

            With Techdea
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-300 leading-8">
            Transforming ideas into powerful digital solutions through
            modern software development, AI, cloud technologies,
            automation, and industry-focused training.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <NavLink
              to="/services"
              className="bg-[#7C3AED] hover:bg-[#9333EA] px-7 py-4 rounded-xl text-white font-semibold transition-all duration-300"
            >
              Explore Services
            </NavLink>

            <NavLink
              to="/contact"
              className="border border-white text-white hover:bg-white hover:text-[#7C3AED] px-7 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Contact Us
            </NavLink>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;