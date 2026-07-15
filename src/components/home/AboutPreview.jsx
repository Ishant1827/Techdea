import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
  FaCheckCircle,
  FaUsers,
  FaLaptopCode,
  FaGraduationCap,
  FaRocket,
} from "react-icons/fa";

function AboutPreview() {
  return (
    <section className="py-20 bg-[#F8FAFC]">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}

          <div>

            <p className="text-[#7C3AED] uppercase tracking-[4px] font-semibold">
              About Techdea
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">

              Empowering Future Developers
              <br />

              Through Innovation

            </h2>

            <p className="mt-7 text-gray-600 text-lg leading-8">

              Techdea Technologies is an emerging IT company dedicated to
              providing innovative software solutions, web development,
              AI-powered applications, technical training, and career
              mentorship. We help students, startups, and businesses
              transform ideas into impactful digital products.

            </p>

            <p className="mt-5 text-gray-600 text-lg leading-8">

              Our focus is on practical learning, live industry projects,
              modern technologies, and continuous innovation. Every solution
              we build is designed with performance, scalability, and user
              experience in mind.

            </p>

            {/* Highlights */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="flex items-start gap-3">

                <FaCheckCircle className="text-[#7C3AED] text-xl mt-1" />

                <div>

                  <h4 className="font-semibold text-gray-900">
                    100+ Students Mentored
                  </h4>

                  <p className="text-sm text-gray-600">
                    Industry-oriented practical learning.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-3">

                <FaCheckCircle className="text-[#7C3AED] text-xl mt-1" />

                <div>

                  <h4 className="font-semibold text-gray-900">
                    25+ Live Projects
                  </h4>

                  <p className="text-sm text-gray-600">
                    Real-world development experience.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-3">

                <FaCheckCircle className="text-[#7C3AED] text-xl mt-1" />

                <div>

                  <h4 className="font-semibold text-gray-900">
                    Career Guidance
                  </h4>

                  <p className="text-sm text-gray-600">
                    Resume, portfolio and placement support.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-3">

                <FaCheckCircle className="text-[#7C3AED] text-xl mt-1" />

                <div>

                  <h4 className="font-semibold text-gray-900">
                    Industry Training
                  </h4>

                  <p className="text-sm text-gray-600">
                    Learn modern technologies with experts.
                  </p>

                </div>

              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-10">

              <NavLink
                to="/about"
                className="bg-[#7C3AED] hover:bg-[#9333EA] text-white px-7 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Learn More
              </NavLink>

              <NavLink
                to="/contact"
                className="border border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white px-7 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Contact Us
              </NavLink>

            </div>

          </div>

         {/* Right Side */}

<div className="flex justify-center">

  <div className="w-full max-w-lg bg-white rounded-3xl border border-purple-200 shadow-xl p-8">

    <div className="text-center">
  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-[#7C3AED] to-[#9333EA] flex items-center justify-center shadow-lg p-3">

    <img
  src={logo}
  alt="Techdea Logo"
  className="w-40 h-40 object-contain mx-auto drop-shadow-xl"
/>

  </div>

  <h3 className="mt-6 text-3xl font-bold text-gray-900">
    Techdea Technologies
  </h3>

  <p className="mt-2 text-[#7C3AED] font-medium">
    Where Technology Meets Innovation
  </p>

</div>
                

              <div className="grid grid-cols-2 gap-5 mt-10">

                <div className="bg-[#F8FAFC] rounded-2xl p-5 text-center border border-purple-100">

                  <FaUsers className="mx-auto text-3xl text-[#7C3AED]" />

                  <h4 className="mt-3 text-2xl font-bold text-gray-900">
                    100+
                  </h4>

                  <p className="text-gray-600">
                    Students
                  </p>

                </div>

                <div className="bg-[#F8FAFC] rounded-2xl p-5 text-center border border-purple-100">

                  <FaLaptopCode className="mx-auto text-3xl text-[#7C3AED]" />

                  <h4 className="mt-3 text-2xl font-bold text-gray-900">
                    25+
                  </h4>

                  <p className="text-gray-600">
                    Projects
                  </p>

                </div>

                <div className="bg-[#F8FAFC] rounded-2xl p-5 text-center border border-purple-100">

                  <FaGraduationCap className="mx-auto text-3xl text-[#7C3AED]" />

                  <h4 className="mt-3 text-2xl font-bold text-gray-900">
                    Training
                  </h4>

                  <p className="text-gray-600">
                    Internship
                  </p>

                </div>

                <div className="bg-[#F8FAFC] rounded-2xl p-5 text-center border border-purple-100">

                  <FaRocket className="mx-auto text-3xl text-[#7C3AED]" />

                  <h4 className="mt-3 text-2xl font-bold text-gray-900">
                    Future
                  </h4>

                  <p className="text-gray-600">
                    Innovation
                  </p>

                </div>

              </div>

              <div className="mt-10 border-t border-purple-200 pt-8">

                <div className="mb-6">

                  <h4 className="font-semibold text-gray-900">
                    Founder
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Ishant Srivastava
                  </p>

                </div>

                <div className="mb-6">

                  <h4 className="font-semibold text-gray-900">
                    Expertise
                  </h4>

                  <p className="mt-2 text-gray-600 leading-7">
                    Full Stack Development, Python, Artificial Intelligence,
                    Technical Training, Career Mentoring and Software Solutions.
                  </p>

                </div>

                <div>

                  <h4 className="font-semibold text-gray-900">
                    Our Mission
                  </h4>

                  <p className="mt-2 text-gray-600 leading-7">
                    To empower students, startups and businesses with modern
                    technology solutions, practical learning and innovative
                    digital products that create lasting impact.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutPreview;