function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            About <span className="text-purple-400">Techdea</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Where Technology Meets Innovation. We build modern digital
            solutions while empowering students and businesses through
            practical learning and technology.
          </p>
        </div>
      </section>

      {/* About Company */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Who We Are
            </h2>

            <p className="text-slate-400 leading-8 mb-5">
              Techdea is an IT company specializing in website development, web applications, custom software, and Python-based solutions. We also provide practical technical training to help students build real-world skills. Our mission is to deliver quality, innovation, and reliable technology solutions for businesses and individuals.</p>

            <p className="text-slate-400 leading-8">
            
            </p>
          </div>

          <div className="bg-[#09090B] rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-6">Quick Highlights</h3>

            <ul className="space-y-4 text-slate-400">
              <li>100+ Students Mentored</li>
              <li>20+ Real Projects Completed</li>
              <li>Industry-Oriented Training</li>
              <li>Web & Software Development</li>
              <li>Career Guidance & Mentorship</li>
              <li>Beginner Friendly Learning</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-[#09090B] shadow-xl hover:shadow-2xl rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-[#0B1120]">
              Our Mission
            </h2>

            <p className="text-slate-400 leading-8">
              To deliver high-quality technology solutions while mentoring
              students through practical learning, real-world projects,
              and career-focused training.
            </p>
          </div>

          <div className="bg-[#09090B] shadow-xl hover:shadow-2xl rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-[#0B1120]">
              Our Vision
            </h2>

            <p className="text-slate-400 leading-8">
              To become a trusted technology and training company that
              empowers students, businesses, and aspiring developers
              through innovation and practical skills.
            </p>
          </div>

        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-10">
            Founder
          </h2>

          <div className="max-w-3xl mx-auto">

            <h3 className="text-3xl font-semibold text-purple-600">
              Ishant Srivastava
            </h3>

            <p className="text-slate-400 mt-4 leading-8">
              Founder of Techdea and passionate Full Stack Developer,
              Technical Mentor, and Project Builder. Responsible for
              project management, client communication, software
              development, and mentoring over 100 students in the
              technology field.
            </p>

          </div>

        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-10">
            Technologies We Use
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">

            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React",
              "Python",
              "Flask",
              "Node.js",
              "Express",
              "MongoDB",
              "MySQL",
              "Git",
              "GitHub",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-[#09090B] rounded-lg shadow p-5 font-semibold"
              >
                {tech}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Let's Build Something Amazing Together
          </h2>

          <p className="mt-5 text-gray-300">
            Whether you're looking for a website, software solution,
            technical training, or career guidance, Techdea is here to
            help you achieve your goals.
          </p>

          <button className="mt-8 bg-[#7C3AED] hover:bg-purple-600 px-8 py-3 rounded-lg font-semibold transition">
            Contact Us
          </button>

        </div>
      </section>
    </>
  );
}

export default About;