import { NavLink } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function AboutPreview() {
  return (
    <section className="bg-[#0B1120] text-white py-24">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <p className="text-amber-400 uppercase tracking-widest font-semibold">
            About Techdea
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Empowering Future Developers Through Innovation
          </h2>

          <p className="text-gray-300 mt-6 leading-8 text-lg">
            Techdea is an emerging IT solutions and training company focused on
            web development, software solutions, Python projects, technical
            mentoring, and career guidance.
          </p>

          <p className="text-gray-300 mt-4 leading-8 text-lg">
            We believe in practical learning through real-world projects,
            teamwork, and continuous innovation. Our mission is to help
            students, startups, and businesses achieve their technology goals.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-amber-400" />
              <span>100+ Students Mentored</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-amber-400" />
              <span>20+ Live Projects</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-amber-400" />
              <span>Career Guidance</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-amber-400" />
              <span>Industry Training</span>
            </div>

          </div>

          <NavLink
            to="/about"
            className="inline-block mt-10 bg-amber-500 hover:bg-orange-500 px-7 py-3 rounded-lg font-semibold transition"
          >
            Learn More
          </NavLink>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <div className="bg-slate-800 rounded-3xl p-10 shadow-2xl w-full max-w-md">

            <h3 className="text-3xl font-bold text-amber-400">
              Techdea
            </h3>

            <p className="mt-4 text-gray-300">
              Where Technology Meets Innovation
            </p>

            <hr className="my-6 border-slate-600" />

            <div className="space-y-5">

              <div>
                <h4 className="font-semibold">Founded By</h4>
                <p className="text-gray-400">
                  Ishant Srivastava
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Experience</h4>
                <p className="text-gray-400">
                  Web Development, Python, Training & Mentoring
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Mission</h4>
                <p className="text-gray-400">
                  Building technology solutions while empowering beginners.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutPreview;