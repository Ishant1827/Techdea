import { NavLink } from "react-router-dom";
import hero from "../../assets/images/hero.png";

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Purple Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10">

        <div className="max-w-2xl">

          <p className="uppercase tracking-[4px] text-purple-300 font-semibold">
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
            modern software development, Artificial Intelligence,
            Cloud Computing, Automation and Industry-focused Training.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <NavLink
              to="/services"
              className="bg-[#7C3AED] hover:bg-[#9333EA] text-white px-7 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Explore Services
            </NavLink>

            <NavLink
              to="/projects"
              className="border border-white text-white hover:bg-white hover:text-[#7C3AED] px-7 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              View Projects
            </NavLink>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;