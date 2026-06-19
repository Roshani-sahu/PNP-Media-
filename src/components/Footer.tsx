import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook, Youtube, Twitter, ArrowUpRight } from "lucide-react";

const services = [
  { label: "Marketing Campaigns", path: "/services" },
  { label: "Influencer Marketing", path: "/services" },
  { label: "Digital Marketing", path: "/services" },
  { label: "Performance Marketing", path: "/services" },
  { label: "Content Creation", path: "/services" },
  { label: "Brand Strategy", path: "/services" },
  { label: "Paid Media", path: "/services" },
  { label: "Video Production", path: "/services" },
];

const company = [
  { label: "About Us", path: "/about" },
  { label: "Our Process", path: "/about" },
  { label: "Meet the Team", path: "/about" },
  { label: "Case Studies", path: "/portfolio" },
  { label: "Blog & Insights", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Twitter, label: "X / Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#D8C3A5] flex items-center justify-center">
                <span className="text-[#0B0B0B] font-black text-sm">P</span>
              </div>
              <span className="text-[#F7F5F2] font-black text-xl tracking-tight">
                PNP<span className="text-[#D8C3A5]"> Media</span>
              </span>
            </Link>
            <p className="text-[#F7F5F2]/50 text-sm leading-relaxed mb-6 max-w-xs">
              We build brands that dominate markets. Premium creative and performance-driven marketing for ambitious companies.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#F7F5F2]/50 hover:text-[#D8C3A5] hover:border-[#D8C3A5]/30 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#F7F5F2] font-bold text-sm tracking-widest uppercase mb-5">Services</h4>
            <ul className="space-y-2.5">
              {services.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-[#F7F5F2]/50 text-sm hover:text-[#D8C3A5] transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {label}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#F7F5F2] font-bold text-sm tracking-widest uppercase mb-5">Company</h4>
            <ul className="space-y-2.5">
              {company.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-[#F7F5F2]/50 text-sm hover:text-[#D8C3A5] transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {label}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-[#F7F5F2] font-bold text-sm tracking-widest uppercase mb-5">Get In Touch</h4>
            <p className="text-[#F7F5F2]/50 text-sm mb-4">Ready to grow your brand?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#D8C3A5] text-[#0B0B0B] px-5 py-3 text-sm font-bold hover:bg-[#CBB89D] transition-colors duration-200 mb-6"
            >
              Start a Project <ArrowUpRight size={14} />
            </Link>
            <div className="space-y-2">
              <a href="mailto:hello@pnpmedia.com" className="block text-[#F7F5F2]/50 text-sm hover:text-[#D8C3A5] transition-colors">
                hello@pnpmedia.com
              </a>
              <a href="tel:+1234567890" className="block text-[#F7F5F2]/50 text-sm hover:text-[#D8C3A5] transition-colors">
                +1 (234) 567-890
              </a>
              <a href="https://wa.me/1234567890" className="block text-[#F7F5F2]/50 text-sm hover:text-[#D8C3A5] transition-colors">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#F7F5F2]/30 text-xs">
            © {new Date().getFullYear()} PNP Media. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="text-[#F7F5F2]/30 text-xs hover:text-[#D8C3A5] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-[#F7F5F2]/30 text-xs hover:text-[#D8C3A5] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}