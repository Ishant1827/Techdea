import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <section className="min-h-screen bg-white">

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white py-5 px-8 flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          Techdea Admin Dashboard
        </h1>

        <Link
          to="/"
          className="bg-purple-600 text-black px-5 py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Logout
        </Link>

      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Welcome */}
        <div className="mb-10">

          <h2 className="text-4xl font-bold text-slate-900">
            Welcome, Admin 👋
          </h2>

          <p className="text-gray-700 mt-2">
            Manage your website, projects, services, students, and contact messages.
          </p>

        </div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white shadow-xl hover:shadow-2xl rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-600">
              Projects
            </h3>

            <h1 className="text-4xl font-bold text-[#0B1120] mt-3">
              20+
            </h1>
          </div>

          <div className="bg-white shadow-xl hover:shadow-2xl rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-600">
              Students
            </h3>

            <h1 className="text-4xl font-bold text-[#0B1120] mt-3">
              100+
            </h1>
          </div>

          <div className="bg-white shadow-xl hover:shadow-2xl rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-600">
              Services
            </h3>

            <h1 className="text-4xl font-bold text-[#0B1120] mt-3">
              8
            </h1>
          </div>

          <div className="bg-white shadow-xl hover:shadow-2xl rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-600">
              Messages
            </h3>

            <h1 className="text-4xl font-bold text-[#0B1120] mt-3">
              0
            </h1>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="mt-12">

          <h2 className="text-3xl font-bold mb-6">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <button className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white py-4 rounded-lg hover:bg-purple-700 hover:text-black transition">
              Manage Projects
            </button>

            <button className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white py-4 rounded-lg hover:bg-purple-700 hover:text-black transition">
              Manage Services
            </button>

            <button className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white py-4 rounded-lg hover:bg-purple-700 hover:text-black transition">
              View Messages
            </button>

            <button className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white py-4 rounded-lg hover:bg-purple-700 hover:text-black transition">
              Manage Team
            </button>

          </div>

        </div>

        {/* Recent Activity */}
        <div className="mt-12 bg-white rounded-xl shadow-xl hover:shadow-2xl p-8">

          <h2 className="text-3xl font-bold mb-6">
            Recent Activity
          </h2>

          <ul className="space-y-4 text-gray-700">

            <li>✔ New student enrolled.</li>

            <li>✔ Project added successfully.</li>

            <li>✔ Contact form submitted.</li>

            <li>✔ Website updated.</li>

          </ul>

        </div>

      </div>

    </section>
  );
}

export default Dashboard;