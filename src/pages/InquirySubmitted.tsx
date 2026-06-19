import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { CheckCircle, Mail, Phone, MessageCircle, Instagram, Linkedin, Facebook, Youtube, Twitter, Star, ArrowRight } from "lucide-react";

export default function InquirySubmitted() {
  return (
    <PageLayout>
      {/* CONFIRMATION HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 bg-[#0B0B0B] overflow-hidden text-center px-4">
        {/* Decorative orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#D8C3A5]/5 blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#D8C3A5]/3 blur-2xl pointer-events-none animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D8C3A5]/5 pointer-events-none animate-slow-spin" />

        <div className="relative z-10 max-w-2xl mx-auto animate-fade-up">
          {/* Check icon */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-24 h-24 border-2 border-[#D8C3A5]/30 flex items-center justify-center">
              <CheckCircle size={56} className="text-[#D8C3A5]" strokeWidth={1.5} />
            </div>
          </div>

          <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-6">INQUIRY RECEIVED</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F7F5F2] leading-tight tracking-tight mb-6">
            Thank You — We'll<br />Be in Touch
          </h1>
          <p className="text-[#F7F5F2]/60 text-lg leading-relaxed mb-12 max-w-lg mx-auto">
            Your inquiry has been received. Our team will review your project details and get back to you within 24 hours.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/portfolio" className="inline-flex items-center gap-2 bg-[#D8C3A5] text-[#0B0B0B] px-7 py-4 font-black text-sm tracking-wide hover:bg-[#CBB89D] transition-colors group">
              Explore Our Work <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/" className="inline-flex items-center gap-2 border border-[#D8C3A5]/50 text-[#F7F5F2] px-7 py-4 font-bold text-sm hover:border-[#D8C3A5] hover:text-[#D8C3A5] transition-all">
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-[#F7F5F2]">What Happens Next</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "We Review",
                desc: "Our team reviews your inquiry and matches you with the right specialist for your project and goals.",
              },
              {
                num: "02",
                title: "We Reach Out",
                desc: "A senior strategist will contact you within 24 hours to schedule your complimentary discovery call.",
              },
              {
                num: "03",
                title: "We Plan",
                desc: "Your personalized marketing strategy brief is prepared before the first call so we can hit the ground running.",
              },
            ].map((step, i) => (
              <div key={i} className="bg-[#1C1C1C] border border-white/5 border-t-2 border-t-[#D8C3A5] p-8">
                <div className="text-5xl font-black text-transparent mb-5" style={{ WebkitTextStroke: "1px rgba(216,195,165,0.3)" }}>
                  {step.num}
                </div>
                <h3 className="text-[#F7F5F2] font-black text-xl mb-3">{step.title}</h3>
                <p className="text-[#F7F5F2]/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALTERNATE CONTACTS */}
      <section className="py-16 bg-[#0B0B0B]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#F7F5F2]/50 text-base mb-8">In the meantime, feel free to reach us directly:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <a href="mailto:hello@pnpmedia.com" className="flex flex-col items-center gap-3 bg-[#1C1C1C] border border-white/5 p-6 hover:border-[#D8C3A5]/20 transition-colors group">
              <div className="w-10 h-10 border border-[#D8C3A5]/30 flex items-center justify-center group-hover:border-[#D8C3A5] transition-colors">
                <Mail size={16} className="text-[#D8C3A5]" />
              </div>
              <div>
                <p className="text-[#F7F5F2] font-bold text-sm">Email</p>
                <p className="text-[#D8C3A5] text-xs">hello@pnpmedia.com</p>
              </div>
            </a>
            <a href="tel:+12345678900" className="flex flex-col items-center gap-3 bg-[#1C1C1C] border border-white/5 p-6 hover:border-[#D8C3A5]/20 transition-colors group">
              <div className="w-10 h-10 border border-[#D8C3A5]/30 flex items-center justify-center group-hover:border-[#D8C3A5] transition-colors">
                <Phone size={16} className="text-[#D8C3A5]" />
              </div>
              <div>
                <p className="text-[#F7F5F2] font-bold text-sm">Phone</p>
                <p className="text-[#D8C3A5] text-xs">+1 (234) 567-890</p>
              </div>
            </a>
            <a href="https://wa.me/12345678900" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 bg-[#1C1C1C] border border-white/5 p-6 hover:border-[#D8C3A5]/20 transition-colors group">
              <div className="w-10 h-10 border border-[#D8C3A5]/30 flex items-center justify-center group-hover:border-[#D8C3A5] transition-colors">
                <MessageCircle size={16} className="text-[#D8C3A5]" />
              </div>
              <div>
                <p className="text-[#F7F5F2] font-bold text-sm">WhatsApp</p>
                <p className="text-[#D8C3A5] text-xs">Chat Now →</p>
              </div>
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-3">
            {[Instagram, Linkedin, Facebook, Youtube, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#F7F5F2]/50 hover:text-[#D8C3A5] hover:border-[#D8C3A5]/30 transition-all">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF STRIP */}
      <section className="py-12 bg-[#1C1C1C] border-y border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#F7F5F2]/50 text-sm mb-6">Join 500+ brands who trust PNP Media to grow their business</p>
          <div className="flex items-center justify-center gap-4">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
              alt="Sarah Chen"
              className="w-10 h-10 rounded-full object-cover border-2 border-[#D8C3A5]/30"
            />
            <div className="text-left">
              <p className="text-[#F7F5F2] text-sm italic">"Best marketing decision we ever made."</p>
              <p className="text-[#F7F5F2]/40 text-xs mt-0.5">Sarah Chen, CMO — Luminary Brands</p>
            </div>
            <div className="flex gap-0.5 ml-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-[#D8C3A5] fill-[#D8C3A5]" />)}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}