import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-purple-200 p-8 md:p-10">

        {/* Heading */}

        <div className="text-center">

          <h1 className="text-4xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-3">
            Login to your Techdea Dashboard
          </p>

        </div>

        {/* Form */}

        <form className="mt-10 space-y-6">

          <div>

            <label className="block mb-2 font-semibold text-gray-800">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-[#7C3AED]"
            />

          </div>

          <div>

            <label className="block mb-2 font-semibold text-gray-800">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-[#7C3AED]"
            />

          </div>

          <div className="flex items-center justify-between">

            <label className="flex items-center gap-2 text-gray-600">

              <input
                type="checkbox"
                className="accent-[#7C3AED]"
              />

              Remember Me

            </label>

            <a
              href="#"
              className="text-[#7C3AED] hover:underline font-medium"
            >
              Forgot Password?
            </a>

          </div>

          <button
            type="submit"
            className="w-full bg-[#7C3AED] hover:bg-[#9333EA] text-white py-3 rounded-xl font-semibold transition-all duration-300"
          >
            Login
          </button>

        </form>

        {/* Footer */}

        <p className="text-center text-gray-600 mt-8">

          Back to{" "}

          <Link
            to="/"
            className="text-[#7C3AED] font-semibold hover:underline"
          >
            Home
          </Link>

        </p>

      </div>

    </section>
  );
}

export default Login;