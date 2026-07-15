import { Link } from "react-router-dom";

function About() {
  return (
    <>
      {/* Hero */}

      <section className="relative overflow-hidden bg-[#09090B] py-24">

        <div className="absolute -top-32 -left-24 w-80 h-80 bg-white-700/20 blur-3xl rounded-full"></div>

        <div className="absolute -bottom-32 -right-24 w-80 h-80 bg-fuchsia-600/20 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <span className="inline-block px-5 py-2 rounded-full bg-[#18181B] border border-white-600 text-[#A855F7] text-sm font-medium">
            About Techdea Technologies
          </span>

          <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Building Digital Products
            <br />
            That Create Impact
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-slate-300 text-lg leading-8">
            Techdea Technologies is a software company dedicated to building
            websites, applications, enterprise solutions and providing
            industry-oriented training that prepares students for real careers.
          </p>

        </div>

      </section>

      {/* About */}

      <section className="bg-[white] py-24">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
              alt="About Techdea"
              className="rounded-3xl w-full shadow-2xl"
            />

          </div>

          <div>

            <h2 className="text-4xl font-bold text-white">
              Who We Are
            </h2>

            <p className="mt-6 text-slate-300 leading-8">
              Techdea Technologies helps startups, businesses and students by
              delivering high-quality software solutions and practical
              technology training. Our goal is to bridge the gap between
              education and industry.
            </p>

            <p className="mt-6 text-slate-300 leading-8">
              We believe learning should be practical, innovative and focused
              on solving real-world problems.
            </p>

          </div>

        </div>

      </section>

      {/* Mission Vision */}

      <section className="bg-[#09090B] py-24">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-[#18181B] rounded-3xl border border-zinc-800 p-10 hover:border-white-600 transition">

              <h2 className="text-3xl font-bold text-white">
                Our Mission
              </h2>

              <p className="mt-6 text-slate-300 leading-8">
                Deliver innovative technology solutions while providing quality
                education and practical training for future professionals.
              </p>

            </div>

            <div className="bg-[#18181B] rounded-3xl border border-zinc-800 p-10 hover:border-white-600 transition">

              <h2 className="text-3xl font-bold text-white">
                Our Vision
              </h2>

              <p className="mt-6 text-slate-300 leading-8">
                Become one of India's most trusted technology companies by
                empowering businesses and students through innovation.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Why Choose */}

      <section className="bg-[white] py-24">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-center text-4xl font-bold text-white">
            Why Choose Techdea
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {[
              "Real Industry Projects",
              "Experienced Mentors",
              "Internships",
              "Career Guidance",
            ].map((item) => (

              <div
                key={item}
                className="bg-[#18181B] rounded-3xl border border-zinc-800 p-8 hover:border-white-600 hover:-translate-y-2 transition-all duration-300"
              >

                <h3 className="text-xl font-semibold text-white">
                  {item}
                </h3>

                <p className="mt-4 text-slate-300">
                  Learn with practical experience and industry standards.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA]">

        <div className="max-w-5xl mx-auto px-4 text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready To Work With Techdea?
          </h2>

          <p className="mt-6 text-slate-100 text-lg">
            Let's build modern software, innovative products and successful
            careers together.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-10 bg-white text-white-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition"
          >
            Contact Us
          </Link>

        </div>

      </section>
    </>
  );
}

export default About;