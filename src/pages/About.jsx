import { Link } from "react-router-dom";
import about from "../assets/images/about.jpg";

function About() {
  return (
    <>
      {/* Hero Section */}

      <section className="bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="inline-block px-5 py-2 rounded-full bg-white/20 border border-white/30 text-sm font-semibold">
            About Techdea Technologies
          </span>

          <h1 className="mt-8 text-5xl md:text-6xl font-bold leading-tight">
            Empowering Innovation
            <br />
            Through Technology
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-purple-100 leading-8">
            Techdea Technologies is an emerging IT company committed to
            delivering innovative software solutions, industry-focused
            training, internships and technical mentorship for students,
            startups and businesses.
          </p>

        </div>

      </section>

      {/* About Company */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image */}

            <div>

              <img
                src={about}
                alt="About Techdea"
                className="w-full rounded-3xl shadow-2xl"
              />

            </div>

            {/* Content */}

            <div>

              <p className="text-[#7C3AED] uppercase tracking-[4px] font-semibold">
                Who We Are
              </p>

              <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">

                Building Digital Solutions
                <br />
                That Make A Difference

              </h2>

              <p className="mt-7 text-lg text-gray-600 leading-8">

                Techdea Technologies specializes in modern web development,
                custom software development, Artificial Intelligence,
                Machine Learning, Cloud Computing, mobile applications,
                automation solutions and technical consulting.

              </p>

              <p className="mt-5 text-lg text-gray-600 leading-8">

                Our mission extends beyond software development.
                We prepare students for successful careers through
                practical training, internships, real-world projects,
                mentorship and industry-oriented learning.

              </p>

              <div className="grid grid-cols-2 gap-6 mt-10">

                <div className="bg-[#F8FAFC] border border-purple-200 rounded-2xl p-6">

                  <h3 className="text-3xl font-bold text-[#7C3AED]">
                    25+
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Live Projects
                  </p>

                </div>

                <div className="bg-[#F8FAFC] border border-purple-200 rounded-2xl p-6">

                  <h3 className="text-3xl font-bold text-[#7C3AED]">
                    100+
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Students Mentored
                  </p>

                </div>

                <div className="bg-[#F8FAFC] border border-purple-200 rounded-2xl p-6">

                  <h3 className="text-3xl font-bold text-[#7C3AED]">
                    18+
                  </h3>

                  <p className="mt-2 text-gray-600">
                    IT Services
                  </p>

                </div>

                <div className="bg-[#F8FAFC] border border-purple-200 rounded-2xl p-6">

                  <h3 className="text-3xl font-bold text-[#7C3AED]">
                    100%
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Practical Learning
                  </p>

                </div>

              </div>

              <div className="mt-10">

                <Link
                  to="/contact"
                  className="inline-block bg-[#7C3AED] hover:bg-[#9333EA] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  Get In Touch
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

            {/* Mission & Vision */}

      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-[#7C3AED] uppercase tracking-[4px] font-semibold">
              Our Purpose
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
              Mission & Vision
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Mission */}

            <div className="bg-white border border-purple-200 rounded-3xl shadow-lg p-10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

              <h3 className="text-3xl font-bold text-[#7C3AED]">
                Our Mission
              </h3>

              <p className="mt-6 text-gray-600 leading-8">

                To empower students, startups and businesses by
                providing innovative software solutions, practical
                training, internships and career-oriented mentorship.
                We believe in transforming ideas into scalable digital
                products while preparing learners for the real industry.

              </p>

            </div>

            {/* Vision */}

            <div className="bg-white border border-purple-200 rounded-3xl shadow-lg p-10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

              <h3 className="text-3xl font-bold text-[#7C3AED]">
                Our Vision
              </h3>

              <p className="mt-6 text-gray-600 leading-8">

                To become one of India's most trusted technology and
                training companies by delivering world-class software
                solutions, innovative products and practical education
                that shapes the future of technology professionals.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Technologies */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-[#7C3AED] uppercase tracking-[4px] font-semibold">
              Technologies
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
              Technologies We Work With
            </h2>

            <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
              We build modern software solutions using the latest
              technologies trusted by startups and enterprises.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "MySQL",
              "Python",
              "Java",
              "Artificial Intelligence",
              "Machine Learning",
              "Cloud Computing",
              "Git & GitHub",
              "Docker",
            ].map((tech, index) => (

              <div
                key={index}
                className="bg-[#F8FAFC] border border-purple-200 rounded-2xl p-6 text-center hover:border-[#7C3AED] hover:shadow-lg transition-all duration-300"
              >

                <h3 className="font-semibold text-gray-900">
                  {tech}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Why Choose Techdea */}

      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-[#7C3AED] uppercase tracking-[4px] font-semibold">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
              Why Techdea Technologies?
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Live Industry Projects",
                desc: "Work on real-world software projects that strengthen your practical knowledge.",
              },
              {
                title: "Expert Mentorship",
                desc: "Learn directly from experienced developers and industry professionals.",
              },
              {
                title: "Internships",
                desc: "Gain valuable experience through internships and project-based learning.",
              },
              {
                title: "Career Support",
                desc: "Resume building, LinkedIn optimization, mock interviews and placement guidance.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white border border-purple-200 rounded-2xl p-8 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >

                <h3 className="text-xl font-bold text-[#7C3AED]">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

            {/* Core Values */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-[#7C3AED] uppercase tracking-[4px] font-semibold">
              Our Core Values
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
              The Principles That Drive Us
            </h2>

            <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600">
              Everything we build and every student we mentor is guided
              by these values that define Techdea Technologies.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-[#F8FAFC] border border-purple-200 rounded-2xl p-8 hover:border-[#7C3AED] hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

              <h3 className="text-2xl font-bold text-[#7C3AED]">
                Innovation
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                We embrace modern technologies and innovative thinking
                to deliver impactful digital solutions.
              </p>

            </div>

            <div className="bg-[#F8FAFC] border border-purple-200 rounded-2xl p-8 hover:border-[#7C3AED] hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

              <h3 className="text-2xl font-bold text-[#7C3AED]">
                Excellence
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Quality, performance and reliability remain our highest
                priorities in every project.
              </p>

            </div>

            <div className="bg-[#F8FAFC] border border-purple-200 rounded-2xl p-8 hover:border-[#7C3AED] hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

              <h3 className="text-2xl font-bold text-[#7C3AED]">
                Learning
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                We promote continuous learning through live projects,
                mentorship and practical experience.
              </p>

            </div>

            <div className="bg-[#F8FAFC] border border-purple-200 rounded-2xl p-8 hover:border-[#7C3AED] hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

              <h3 className="text-2xl font-bold text-[#7C3AED]">
                Growth
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Helping students, professionals and businesses achieve
                sustainable growth through technology.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Build Something Amazing Together
          </h2>

          <p className="mt-6 text-lg text-purple-100 leading-8">
            Whether you're looking for innovative software solutions,
            technical training, internships or career mentorship,
            Techdea Technologies is your trusted technology partner.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <Link
              to="/contact"
              className="bg-white text-[#7C3AED] hover:bg-[#22C55E] hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Contact Us
            </Link>

            <Link
              to="/services"
              className="border border-white hover:bg-white hover:text-[#7C3AED] px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Explore Services
            </Link>

          </div>

        </div>

      </section>

    </>
  );
}

export default About;