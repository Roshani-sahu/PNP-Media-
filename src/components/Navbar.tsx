import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0B0B0B]/95 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#D8C3A5] flex items-center justify-center">
              <span className="text-[#0B0B0B] font-black text-sm tracking-tighter">P</span>
            </div>
            <span className="text-[#F7F5F2] font-black text-xl tracking-tight">
              PNP<span className="text-[#D8C3A5]"> Media</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                    isActive ? "text-[#D8C3A5]" : "text-[#F7F5F2]/70 hover:text-[#F7F5F2]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#D8C3A5] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-[#D8C3A5] text-[#0B0B0B] px-5 py-2.5 text-sm font-bold tracking-wide hover:bg-[#CBB89D] transition-colors duration-200"
            >
              Let's Talk
            </Link>
            <button
              className="lg:hidden text-[#F7F5F2] p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-[#0B0B0B] border-t border-white/5`}
      >
        <nav className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-3 text-sm font-medium border-b border-white/5 transition-colors ${
                  isActive ? "text-[#D8C3A5]" : "text-[#F7F5F2]/70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="mt-3 bg-[#D8C3A5] text-[#0B0B0B] px-5 py-3 text-sm font-bold tracking-wide text-center"
          >
            Let's Talk
          </Link>
        </nav>
      </div>
    </header>
  );
}