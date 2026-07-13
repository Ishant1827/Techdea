import { FaCode, FaPython, FaLaptopCode, FaUserTie } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function TrainingPreview() {
  const trainings = [
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "HTML, CSS, JavaScript, React.js, Node.js and complete website development."
    },
    {
      icon: <FaPython />,
      title: "Python Programming",
      desc: "Python from beginner to advanced with automation and real projects."
    },
    {
      icon: <FaLaptopCode />,
      title: "Project Based Learning",
      desc: "Build real-world projects and strengthen your portfolio."
    },
    {
      icon: <FaUserTie />,
      title: "Career Mentorship",
      desc: "Resume building, LinkedIn optimization, interview preparation and career guidance."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">
          <p className="text-purple-400 uppercase tracking-widest font-semibold">
            Training & Mentorship
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Learn From Real Industry Experience
          </h2>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            Techdea focuses on practical learning through real-world projects,
            industry guidance and one-to-one mentoring to prepare students
            for internships and full-time careers.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">

          {trainings.map((item, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 hover:-translate-y-2 transition duration-300"
            >

              <div className="text-5xl text-purple-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-300 mt-4 leading-7">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

        <div className="text-center mt-14">

          <NavLink
            to="/training"
            className="bg-[#7C3AED] hover:bg-[#9333EA] px-8 py-3 rounded-lg font-semibold transition"
          >
            Explore Training
          </NavLink>

        </div>

      </div>
    </section>
  );
}

export default TrainingPreview;