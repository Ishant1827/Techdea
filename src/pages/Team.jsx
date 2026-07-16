import { FaLinkedin, FaUsers } from "react-icons/fa";

// Team Images
import ishant from "../assets/team/ishant.png";
import faisal from "../assets/team/faisal.jpg";
import nishant from "../assets/team/nishant.png";
import anchal from "../assets/team/anchal.jpg";
import shivanshi from "../assets/team/shivanshi.png";
import amit from "../assets/team/amit.png";
import shubham from "../assets/team/shubham.jpg";
import ayush from "../assets/team/ayush.jpg";
import misthi from "../assets/team/misthi.png";
import anandi from "../assets/team/anandi.png";
import ananya from "../assets/team/ananya.png";
import shashi from "../assets/team/shashi.png";

function Team() {

  const members = [

    
    {
      name: "Ishant Srivastava",
      role: "Founder & CEO",
      image: ishant,
      linkedin: "https://www.linkedin.com/in/ishantsrivastava?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      featured: true,
    },

    {
      name: "Misthi Yadav",
      role: "Assistant Manager",
      image: misthi,
      linkedin: "https://www.linkedin.com/in/misthi-yadav-0a964041a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },

    {
      name: "Anandi Mishra",
      role: "Technical Manager",
      image: anandi,
      linkedin: "https://www.linkedin.com/in/anandi-mishra-2b3a28342?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },

    {
      name: "Shubham Maurya",
      role: "Business Manager",
      image: shubham,
      linkedin: "https://www.linkedin.com/in/shubham-maurya-b59363371?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },

    {
      name: "Abdul Faisal",
      role: "Database Manager",
      image: faisal,
      linkedin: "https://www.linkedin.com/in/abdul-faisal-aa81353b2?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },

    {
      name: "Ayush Kumar",
      role: "Documentation Manager",
      image: ayush,
      linkedin: "https://www.linkedin.com/in/gamxxaa?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },

    {
      name: "Love",
      role: "UI / UX Designer",
      image: nishant,
      linkedin: "https://www.linkedin.com/in/love-a074a93ba?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },

    {
      name: "Amit Yadav",
      role: "Backend Developer",
      image: amit,
      linkedin: "https://www.linkedin.com/in/amit-yadav-75040a392?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },

    {
      name: "Shivanshi Chaurasiya",
      role: "Social Media Manager",
      image: shivanshi,
      linkedin: "https://www.linkedin.com/in/shivanshi-chaurasiya-1aa21a420?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    
    {
      name: "Ananya Awasthi",
      role: "Technical Associate",
      image: ananya,
      linkedin: "https://www.linkedin.com/in/ananya-awasthi-bb4a813ba?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },

    {
      name: "Anchal Singh",
      role: "AIML Technical Assistant",
      image: anchal,
      linkedin: "https://www.linkedin.com/in/anchal-singh-5b2517397?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },

    {
      name: "Shashi Singh",
      role: "Frontend Developer",
      image: shashi,
      linkedin: "https://www.linkedin.com/in/shashi-singh-6a6141363/",
    },

  ];

  return (
    <>
      {/* Hero Section */}

      <section className="bg-gradient-to-r from- from-[#2c0c61] via-[#2c0c61] to-[#2c0c61] text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="flex justify-center mb-6">
            <FaUsers className="text-6xl" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold">
            Meet Our Team
          </h1>

          <p className="mt-6 text-lg md:text-xl text-purple-500 max-w-3xl mx-auto leading-8">
            Behind every successful project is a passionate team.
            Meet the talented professionals of Techdea who are committed
            to innovation, quality and excellence.
          </p>

        </div>

      </section>
            {/* Founder Section */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-[#F8FAFC] border border-purple-200 rounded-3xl shadow-lg p-10 lg:p-12">

            <div className="grid lg:grid-cols-2 gap-10 items-center">

              <div className="flex justify-center">

                <img
                  src={ishant}
                  alt="Ishant Srivastava"
                  className="w-72 h-72 rounded-full object-cover border-8 border-[#7C3AED] shadow-xl"
                />

              </div>

              <div>

                <span className="inline-block bg-[#bcabdb] text-[#7C3AED] px-4 py-2 rounded-full font-semibold">
                  Founder & CEO
                </span>

                <h2 className="mt-5 text-4xl font-bold text-gray-900">
                  Ishant Srivastava
                </h2>

                <p className="mt-6 text-gray-600 leading-8 text-lg">

                  Passionate Full Stack Developer, AI Enthusiast and
                  Entrepreneur dedicated to building innovative digital
                  products and empowering students through practical
                  learning, internships, mentorship and industry-focused
                  training.

                </p>

                <a
                  href="https://www.linkedin.com/in/ishantsrivastava?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 mt-8 bg-[#0077B5] hover:bg-[#005F91] text-white px-7 py-3 rounded-xl font-semibold transition"
                >
                  <FaLinkedin />
                  Connect on LinkedIn
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Team Members */}

      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-[#7C3AED] uppercase tracking-[4px] font-semibold">
              Our Professionals
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
              Meet The Amazing Team
            </h2>

            <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-lg">
              Our talented professionals work together to deliver
              innovative solutions, exceptional learning experiences,
              and world-class technology services.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            {members
              .filter((member) => !member.featured)
              .map((member, index) => (

                <div
                  key={index}
                  className="bg-white rounded-3xl border border-purple-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >

                  <div className="flex justify-center pt-8">

                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-36 h-36 rounded-full object-cover border-4 border-[#7C3AED]"
                    />

                  </div>

                  <div className="p-6 text-center">

                    <h3 className="text-2xl font-bold text-gray-900">
                      {member.name}
                    </h3>

                    <p className="mt-2 text-[#7C3AED] font-semibold">
                      {member.role}
                    </p>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 mt-6 bg-[#0077B5] hover:bg-[#005F91] text-white px-5 py-3 rounded-xl transition"
                    >
                      <FaLinkedin />
                      LinkedIn
                    </a>

                  </div>

                </div>

            ))}
                      </div>

        </div>

      </section>

      {/* Join Our Team CTA */}

      <section className="py-24 bg-gradient-to-r from-[#2c0c61] via-[#2c0c61] to-[#2c0c61] text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Want To Become A Part Of Techdea?
          </h2>

          <p className="mt-6 text-lg text-purple-100 leading-8">
            We are always looking for passionate developers, designers,
            AI enthusiasts and creative minds who want to learn,
            innovate and build impactful technology solutions together.
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 bg-white text-[#7C3AED] hover:bg-[#22C55E] hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            Join Our Team
          </a>

        </div>

      </section>

    </>
  );
}

export default Team;