import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 text-lg max-w-3xl mx-auto text-white-100">
            We'd love to hear from you. Whether you have a project,
            business inquiry, internship question or collaboration idea,
            our team is ready to help.
          </p>

        </div>
      </section>

      {/* Contact Cards */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#F8FAFC] p-8 rounded-2xl shadow hover:shadow-xl transition">

              <FaPhoneAlt className="text-3xl text-[#7C3AED]" />

              <h3 className="mt-5 text-2xl font-semibold">
                Call Us
              </h3>

              <a
                href="tel:+919369907885"
                className="block mt-4 text-gray-600 hover:text-[#7C3AED]"
              >
                +91 9369907885
                
              </a>
              
              <a
                href="tel:+919411862576"
                className="block mt-4 text-gray-600 hover:text-[#7C3AED]"
              >
                +91 9411862576
                
              </a>

            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-2xl shadow hover:shadow-xl transition">

              <FaEnvelope className="text-3xl text-[#7C3AED]" />

              <h3 className="mt-5 text-2xl font-semibold">
                Email
              </h3>

              <a
                href="mailto:contact.techdea@gmail.com"
                className="block mt-4 text-gray-600 hover:text-[#7C3AED]"
              >
                contact.techdea@gmail.com
              </a>

              <a
                href="mailto:manager.techdea@gmail.com"
                className="block mt-2 text-gray-600 hover:text-[#7C3AED]"
              >
                manager.techdea@gmail.com
              </a>

            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-2xl shadow hover:shadow-xl transition">

              <FaMapMarkerAlt className="text-3xl text-[#7C3AED]" />

              <h3 className="mt-5 text-2xl font-semibold">
                Office
              </h3>

              <p className="mt-4 text-gray-600">
                Ghaziabad, Uttar Pradesh, India
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Contact Form */}

      <section className="bg-[#F8FAFC] py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">

          <div>

            <h2 className="text-4xl font-bold">
              Send a Message
            </h2>

            <p className="mt-5 text-gray-600">
              Fill out the form and our team will contact you as soon as possible.
            </p>

            <form className="mt-10 space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full border rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              ></textarea>

              <button
                className="bg-[#7C3AED] hover:bg-[#9333EA] text-white px-8 py-3 rounded-xl transition"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Social */}

          <div>

            <h2 className="text-4xl font-bold">
              Connect With Us
            </h2>

            <p className="mt-5 text-gray-600">
              Follow us on social media and stay updated with our latest
              projects, internships and training programs.
            </p>

            <div className="flex gap-5 mt-10">

              <a
                href="https://github.com/techdea-technologies"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-white shadow flex items-center justify-center hover:bg-[#7C3AED] hover:text-white transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.instagram.com/tech_dea/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-white shadow flex items-center justify-center hover:bg-[#7C3AED] hover:text-white transition"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="https://www.linkedin.com/company/techdea/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-white shadow flex items-center justify-center hover:bg-[#7C3AED] hover:text-white transition"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://whatsapp.com/channel/0029VbD90E2IyPtMvouUGP0w"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-white shadow flex items-center justify-center hover:bg-[#7C3AED] hover:text-white transition"
              >
                <FaWhatsapp size={22} />
              </a>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Contact;