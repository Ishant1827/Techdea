function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            Contact <span className="text-purple-400">Techdea</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Have a project, training inquiry, or collaboration idea?
            We'd love to hear from you.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div>

            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Get In Touch
            </h2>

            <div className="space-y-8">

              <div className="bg-[#09090B] p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold">Phone</h3>
                <p className="mt-2 text-slate-400">
                  +91 9369907885
                </p>
                <p className="text-slate-400">
                  +91 9411862576
                </p>
              </div>

              <div className="bg-[#09090B] p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold">Email</h3>
                <p className="mt-2 text-slate-400">
                  ishantsri1827@gmail.com
                </p>
              </div>

              <div className="bg-[#09090B] p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold">GitHub</h3>
                <a
                  href="https://github.com/techdea-technologies"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  github.com/techdea-technologies
                </a>
              </div>

              <div className="bg-[#09090B] p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/ishantsrivastava/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  linkedin.com/in/ishantsrivastava
                </a>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-[#09090B] rounded-2xl shadow-xl hover:shadow-2xl p-8">

            <h2 className="text-3xl font-bold mb-8">
              Send Us a Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white py-3 rounded-lg hover:bg-[#7C3AED] hover:text-black transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-10">
            Business Hours
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#09090B] p-8 rounded-xl shadow">
              <h3 className="text-xl font-bold">Monday - Friday</h3>
              <p className="mt-3 text-slate-400">
                9:00 AM - 7:00 PM
              </p>
            </div>

            <div className="bg-[#09090B] p-8 rounded-xl shadow">
              <h3 className="text-xl font-bold">Saturday</h3>
              <p className="mt-3 text-slate-400">
                10:00 AM - 5:00 PM
              </p>
            </div>

            <div className="bg-[#09090B] p-8 rounded-xl shadow">
              <h3 className="text-xl font-bold">Sunday</h3>
              <p className="mt-3 text-slate-400">
                Available by Appointment
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Let's Build Something Great Together
          </h2>

          <p className="mt-5 text-gray-300">
            Whether it's a website, software project, technical training,
            or career guidance, Techdea is ready to help.
          </p>

        </div>
      </section>
    </>
  );
}

export default Contact;