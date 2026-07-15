function Team() {
  const teamMembers = [
    {
      name: "Ishant Srivastava",
      role: "Founder & Manager",
      description:
        "Founder of Techdea, responsible for project management, client communication, full-stack development, technical mentoring, and business strategy.",
    },
    {
      name: "Frontend Developer",
      role: "UI Development",
      description:
        "Builds responsive, modern, and user-friendly interfaces using HTML, CSS, JavaScript, React, and the latest frontend technologies.",
    },
    {
      name: "Backend Developer",
      role: "Server & Database",
      description:
        "Develops secure APIs, databases, authentication systems, and scalable backend applications.",
    },
    {
      name: "Digital Marketing Executive",
      role: "Marketing",
      description:
        "Handles SEO, branding, social media marketing, and online promotional campaigns.",
    },
    {
      name: "QA Tester",
      role: "Quality Assurance",
      description:
        "Tests applications thoroughly to ensure quality, security, performance, and bug-free delivery.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-white-700 via-white-600 to-white-500 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            Meet Our <span className="text-white-400">Team</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            A passionate team of developers, designers, testers, and mentors
            dedicated to building innovative digital solutions and empowering
            future technology professionals.
          </p>

        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-[#09090B] rounded-2xl shadow-xl hover:shadow-2xl p-10 text-center">

            <div className="w-36 h-36 mx-auto rounded-full bg-white-600 flex items-center justify-center text-5xl font-bold text-white">
              IS
            </div>

            <h2 className="text-4xl font-bold mt-8">
              Ishant Srivastava
            </h2>

            <p className="text-white-600 text-xl mt-2">
              Founder & Manager
            </p>

            <p className="text-slate-400 mt-6 leading-8 max-w-3xl mx-auto">
              Passionate Full Stack Developer, Technical Mentor, and Entrepreneur.
              Successfully mentored 100+ students while building websites,
              software solutions, and real-world projects for businesses and learners.
            </p>

          </div>

        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Our Team
            </h2>

            <p className="mt-4 text-slate-400">
              Young professionals learning, collaborating, and growing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#09090B] rounded-xl shadow-xl hover:shadow-2xl p-8 hover:shadow-2xl transition"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-white-700 via-white-600 to-white-500 text-white flex items-center justify-center text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {member.name}
                </h3>

                <p className="text-white-600 font-semibold mt-2">
                  {member.role}
                </p>

                <p className="text-slate-400 mt-5 leading-7">
                  {member.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Why Work With Techdea?
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-14">

            <div className="bg-[#09090B] rounded-xl p-8 shadow">
              <h3 className="font-bold text-xl mb-3">
                Real Projects
              </h3>
              <p>Gain practical experience through industry-level development.</p>
            </div>

            <div className="bg-[#09090B] rounded-xl p-8 shadow">
              <h3 className="font-bold text-xl mb-3">
                Learning Culture
              </h3>
              <p>Continuous learning and collaboration with experienced mentors.</p>
            </div>

            <div className="bg-[#09090B] rounded-xl p-8 shadow">
              <h3 className="font-bold text-xl mb-3">
                Innovation
              </h3>
              <p>Build creative solutions using modern technologies.</p>
            </div>

            <div className="bg-[#09090B] rounded-xl p-8 shadow">
              <h3 className="font-bold text-xl mb-3">
                Career Growth
              </h3>
              <p>Develop technical skills while building a strong portfolio.</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-white-700 via-white-600 to-white-500 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Want to Join Our Team?
          </h2>

          <p className="mt-5 text-gray-300">
            We welcome passionate beginners, students, and developers who are
            eager to learn, collaborate, and build impactful technology solutions.
          </p>

          <button className="mt-8 bg-white-600 text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#7C3AED] transition">
            Join Techdea
          </button>

        </div>
      </section>
    </>
  );
}

export default Team;