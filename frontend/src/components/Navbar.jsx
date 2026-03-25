import { useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const baseLinkClass =
  "rounded-full px-4 py-2 text-sm font-medium transition duration-200";

const getNavLinkClass = ({ isActive }) =>
  `${baseLinkClass} ${
    isActive
      ? "bg-white text-orange-600 shadow-sm"
      : "text-green hover:bg-white/15 hover:text-white"
  }`;

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const navLinks = useMemo(() => {
    const links = [
      { to: "/", label: "Discover" },
      { to: "/properties", label: "Properties" },
      { to: "/services", label: "Services" },
      { to: "/help", label: "Help" },
    ];

    if (token) {
      links.push({ to: "/my-bookings", label: "My Bookings" });
    }

    if (role === "admin") {
      links.push({ to: "/admin", label: "Admin Dashboard" });
    }

    return links;
  }, [role, token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsOpen(false);
    navigate("/login");
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-orange-200/60 bg-white via-amber-500 to-orange-500 text-blue/10 shadow-lg shadow-blue/20 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={handleMenuClose}>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur-sm">
            <span className="text-lg font-black tracking-wide">EB</span>
          </div>
          <div>
            <p className="text-lg font-black leading-none tracking-wide">
              Conccie
            </p>
            <p className="text-xs text-green">
              Discover, book, and manage in one place
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={getNavLinkClass}
              onClick={handleMenuClose}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {!token ? (
            <>
              <NavLink
                to="/login"
                onClick={handleMenuClose}
                className={`${baseLinkClass} border border-white/30 text-slate-700 hover:bg-orange/80`}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                onClick={handleMenuClose}
                className={({ isActive }) =>
                  `${baseLinkClass} ${
                    isActive
                      ? "bg-white text-black"
                      : "bg-white text-green hover:bg-green"
                  }`
                }
              >
                Register
              </NavLink>
            </>
          ) : (
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-full bg-green px-5 py-2 text-sm font-semibold text-black transition hover:bg-orange-50"
            >
              Logout
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/25 bg-white/10 transition hover:bg-white/20 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/15 bg-orange-950/20 px-4 pb-4 pt-3 backdrop-blur md:hidden">
          <div className="space-y-2 rounded-3xl bg-white/10 p-3 shadow-lg ring-1 ring-white/15">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={handleMenuClose}
                className={({ isActive }) =>
                  `block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-white text-orange-600"
                      : "text-white hover:bg-white/10"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {!token ? (
              <>
                <NavLink
                  to="/login"
                  onClick={handleMenuClose}
                  className="block rounded-2xl border border-white/30 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  onClick={handleMenuClose}
                  className="block rounded-2xl bg-orange-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange"
                >
                  Register
                </NavLink>
              </>
            ) : (
              <button
                type="button"
                onClick={handleLogout}
                className="block w-full rounded-2xl bg-white px-4 py-3 text-left text-sm font-semibold text-orange-600 transition hover:bg-orange-50"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
