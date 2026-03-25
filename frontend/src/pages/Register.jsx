import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost:5000";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccessMessage("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to create your account.");
      }

      setSuccessMessage("Account created successfully. Redirecting to login...");

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-emerald-50 via-white to-green-100 px-4 py-10 sm:px-6 lg:px-8 pt-10">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-[2rem] bg-white p-8 shadow-xl shadow-emerald-100/70 ring-1 ring-emerald-100 sm:p-10">
          <p className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Join Conccie
          </p>
          <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
            Create your account and start booking with confidence.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            Register once to explore events, save your bookings, and manage your
            plans from a single place.
          </p>

          <div className="mt-10 space-y-4">
            <div className="rounded-3xl bg-emerald-50 p-5">
              <p className="text-sm font-semibold text-emerald-700">
                Simple signup
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Just your name, email, and password to get started.
              </p>
            </div>
            <div className="rounded-3xl bg-emerald-50 p-5">
              <p className="text-sm font-semibold text-emerald-700">
                Secure account
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Your password is hashed on the backend before storage.
              </p>
            </div>
            <div className="rounded-3xl bg-emerald-50 p-5">
              <p className="text-sm font-semibold text-emerald-700">
                Ready to explore
              </p>
              <p className="mt-1 text-sm text-slate-600">
                After signup, you can head straight to login and continue.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-emerald-900 p-8 text-white shadow-2xl shadow-emerald-900/10 sm:p-10">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">
              Account Register
            </p>
            <h2 className="mt-3 text-3xl font-black">Create a new account</h2>
            <p className="mt-3 text-sm leading-6 text-emerald-100/80">
              Fill in your details below and we&apos;ll get your account ready.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-emerald-50"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                autoComplete="name"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-emerald-100/60 focus:border-emerald-300 focus:bg-white/15 focus:ring-4 focus:ring-emerald-400/20"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-emerald-50"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-emerald-100/60 focus:border-emerald-300 focus:bg-white/15 focus:ring-4 focus:ring-emerald-400/20"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-emerald-50"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create password"
                  autoComplete="new-password"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-emerald-100/60 focus:border-emerald-300 focus:bg-white/15 focus:ring-4 focus:ring-emerald-400/20"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-semibold text-emerald-50"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Repeat password"
                  autoComplete="new-password"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-emerald-100/60 focus:border-emerald-300 focus:bg-white/15 focus:ring-4 focus:ring-emerald-400/20"
                />
              </div>
            </div>

            {error ? (
              <div className="rounded-2xl border border-red-300/40 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-100">
                {error}
              </div>
            ) : null}

            {successMessage ? (
              <div className="rounded-2xl border border-emerald-300/40 bg-emerald-400/10 px-4 py-3 text-sm font-medium text-emerald-100">
                {successMessage}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50 disabled:cursor-not-allowed disabled:bg-emerald-100"
            >
              {isSubmitting ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <p className="mt-6 text-sm text-emerald-100/80">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-white transition hover:text-emerald-200"
            >
              Login here
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
