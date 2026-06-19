import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Mail, Phone, MessageCircle, Instagram, Linkedin, Facebook, Youtube, Twitter, MapPin, ChevronDown } from "lucide-react";

const serviceOptions = [
  "Marketing Campaigns", "Influencer Marketing", "Digital Marketing",
  "Performance Marketing", "Content Creation", "Social Media",
  "Brand Strategy", "Paid Media", "Video Production", "Analytics",
];

const budgetOptions = ["Under $5K", "$5K–$15K", "$15K–$50K", "$50K–$100K", "$100K+", "Let's Discuss"];
const timelineOptions = ["ASAP", "Within 1 Month", "1–3 Months", "3–6 Months", "Flexible"];
const heardOptions = ["Google", "Social Media", "Referral", "LinkedIn", "Conference", "Other"];

const faqs = [
  { q: "How quickly can you start a campaign?", a: "For most projects, we can kick off within 1–2 weeks of signing. Complex campaigns requiring significant asset production may need 3–4 weeks lead time." },
  { q: "What is your minimum project budget?", a: "Our typical minimum engagement starts at $5,000/month for ongoing services and $10,000 for project-based work. We do have flexible options for startups — let's discuss." },
  { q: "Do you work with international brands?", a: "Absolutely. We have experience managing campaigns across North America, Europe, Middle East, and APAC. Our creator network spans 40+ countries." },
  { q: "How do you measure campaign success?", a: "We establish KPIs upfront aligned with your business goals — whether that's brand awareness, engagement, leads, or direct revenue. You get a real-time dashboard and monthly reports." },
];

export default function Contact() {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [heard, setHeard] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", message: ""
  });

  const toggleService = (s: string) => {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/inquiry-submitted");
  };

  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#0B0B0B] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#D8C3A5]/4 blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-6">GET IN TOUCH</p>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-[#F7F5F2] leading-[0.9] tracking-tight mb-8 max-w-4xl">
            Let's Build Something<br /><span className="text-[#D8C3A5]">Extraordinary</span>
          </h1>
          <p className="text-[#F7F5F2]/60 text-xl max-w-2xl">
            Tell us about your brand and goals. Our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* CONTACT FORM */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#F7F5F2]/60 text-xs font-bold tracking-widest uppercase mb-2">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#1C1C1C] border border-white/10 px-4 py-3.5 text-sm text-[#F7F5F2] placeholder-[#F7F5F2]/30 focus:outline-none focus:border-[#D8C3A5]/50 transition-colors"
                      placeholder="Alexandra Pierce"
                    />
                  </div>
                  <div>
                    <label className="block text-[#F7F5F2]/60 text-xs font-bold tracking-widest uppercase mb-2">Company Name *</label>
                    <input
                      required
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#1C1C1C] border border-white/10 px-4 py-3.5 text-sm text-[#F7F5F2] placeholder-[#F7F5F2]/30 focus:outline-none focus:border-[#D8C3A5]/50 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#F7F5F2]/60 text-xs font-bold tracking-widest uppercase mb-2">Email Address *</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1C1C1C] border border-white/10 px-4 py-3.5 text-sm text-[#F7F5F2] placeholder-[#F7F5F2]/30 focus:outline-none focus:border-[#D8C3A5]/50 transition-colors"
                      placeholder="hello@yourcompany.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[#F7F5F2]/60 text-xs font-bold tracking-widest uppercase mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#1C1C1C] border border-white/10 px-4 py-3.5 text-sm text-[#F7F5F2] placeholder-[#F7F5F2]/30 focus:outline-none focus:border-[#D8C3A5]/50 transition-colors"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                </div>

                {/* Services */}
                <div>
                  <label className="block text-[#F7F5F2]/60 text-xs font-bold tracking-widest uppercase mb-3">Services Interested In *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2">
                    {serviceOptions.map((s) => (
                      <label key={s} className="flex items-center gap-2.5 cursor-pointer group">
                        <div
                          onClick={() => toggleService(s)}
                          className={`w-4 h-4 border flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                            selectedServices.includes(s)
                              ? "bg-[#D8C3A5] border-[#D8C3A5]"
                              : "border-white/20 group-hover:border-[#D8C3A5]/50"
                          }`}
                        >
                          {selectedServices.includes(s) && (
                            <svg className="w-2.5 h-2.5 text-[#0B0B0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className="text-[#F7F5F2]/70 text-sm">{s}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Budget */}
                  <div>
                    <label className="block text-[#F7F5F2]/60 text-xs font-bold tracking-widests uppercase mb-2">Budget Range *</label>
                    <div className="relative">
                      <select
                        required
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full bg-[#1C1C1C] border border-white/10 px-4 py-3.5 text-sm text-[#F7F5F2] focus:outline-none focus:border-[#D8C3A5]/50 appearance-none"
                      >
                        <option value="">Select budget range</option>
                        {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#F7F5F2]/40 pointer-events-none" />
                    </div>
                  </div>
                  {/* Timeline */}
                  <div>
                    <label className="block text-[#F7F5F2]/60 text-xs font-bold tracking-widest uppercase mb-2">Project Timeline *</label>
                    <div className="relative">
                      <select
                        required
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full bg-[#1C1C1C] border border-white/10 px-4 py-3.5 text-sm text-[#F7F5F2] focus:outline-none focus:border-[#D8C3A5]/50 appearance-none"
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#F7F5F2]/40 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[#F7F5F2]/60 text-xs font-bold tracking-widest uppercase mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#1C1C1C] border border-white/10 px-4 py-3.5 text-sm text-[#F7F5F2] placeholder-[#F7F5F2]/30 focus:outline-none focus:border-[#D8C3A5]/50 transition-colors resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>

                {/* How did you hear */}
                <div>
                  <label className="block text-[#F7F5F2]/60 text-xs font-bold tracking-widest uppercase mb-2">How Did You Hear About Us?</label>
                  <div className="relative">
                    <select
                      value={heard}
                      onChange={(e) => setHeard(e.target.value)}
                      className="w-full bg-[#1C1C1C] border border-white/10 px-4 py-3.5 text-sm text-[#F7F5F2] focus:outline-none focus:border-[#D8C3A5]/50 appearance-none"
                    >
                      <option value="">Select an option</option>
                      {heardOptions.map((h) => <option key={h} value={h}>{h}</option>)}
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#F7F5F2]/40 pointer-events-none" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D8C3A5] text-[#0B0B0B] py-4 text-sm font-black tracking-wide hover:bg-[#CBB89D] transition-colors"
                >
                  Send Your Inquiry →
                </button>
                <p className="text-[#F7F5F2]/30 text-xs text-center">
                  By submitting, you agree to our Privacy Policy. We never share your information.
                </p>
              </form>
            </div>

            {/* CONTACT INFO */}
            <div className="space-y-6">
              <h3 className="text-[#F7F5F2] font-bold text-xl mb-6">Other Ways to Reach Us</h3>
              {/* Contact cards */}
              <div className="bg-[#1C1C1C] border border-white/5 p-6 flex items-start gap-4 hover:border-[#D8C3A5]/20 transition-colors">
                <div className="w-10 h-10 border border-[#D8C3A5]/30 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-[#D8C3A5]" />
                </div>
                <div>
                  <p className="text-[#F7F5F2] font-bold text-sm mb-0.5">Email</p>
                  <a href="mailto:hello@pnpmedia.com" className="text-[#D8C3A5] text-sm hover:underline">hello@pnpmedia.com</a>
                  <p className="text-[#F7F5F2]/40 text-xs mt-1">We respond within 24 hours</p>
                </div>
              </div>
              <div className="bg-[#1C1C1C] border border-white/5 p-6 flex items-start gap-4 hover:border-[#D8C3A5]/20 transition-colors">
                <div className="w-10 h-10 border border-[#D8C3A5]/30 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-[#D8C3A5]" />
                </div>
                <div>
                  <p className="text-[#F7F5F2] font-bold text-sm mb-0.5">Phone</p>
                  <a href="tel:+12345678900" className="text-[#D8C3A5] text-sm hover:underline">+1 (234) 567-890</a>
                  <p className="text-[#F7F5F2]/40 text-xs mt-1">Mon–Fri, 9am–6pm EST</p>
                </div>
              </div>
              <div className="bg-[#1C1C1C] border border-white/5 p-6 flex items-start gap-4 hover:border-[#D8C3A5]/20 transition-colors">
                <div className="w-10 h-10 border border-[#D8C3A5]/30 flex items-center justify-center shrink-0">
                  <MessageCircle size={16} className="text-[#D8C3A5]" />
                </div>
                <div>
                  <p className="text-[#F7F5F2] font-bold text-sm mb-1">WhatsApp</p>
                  <a href="https://wa.me/12345678900" target="_blank" rel="noreferrer"
                    className="inline-block bg-[#D8C3A5] text-[#0B0B0B] px-4 py-1.5 text-xs font-bold hover:bg-[#CBB89D] transition-colors">
                    Open WhatsApp
                  </a>
                </div>
              </div>
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#D8C3A5] shrink-0 mt-0.5" />
                <p className="text-[#F7F5F2]/60 text-sm">123 Creative District,<br />New York, NY 10001</p>
              </div>
              {/* Social */}
              <div>
                <p className="text-[#F7F5F2]/40 text-xs font-bold tracking-widest uppercase mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {[Instagram, Linkedin, Facebook, Youtube, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#F7F5F2]/50 hover:text-[#D8C3A5] hover:border-[#D8C3A5]/30 transition-all">
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34209532394!2d-74.03927096942894!3d40.759040704268545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
            className="w-full h-72 md:h-80 border border-white/10"
            loading="lazy"
            allowFullScreen
            title="PNP Media Location"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-black text-[#F7F5F2] mb-10">Common Questions</h3>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/5">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left gap-4"
                >
                  <span className="text-[#F7F5F2] font-bold text-base">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#D8C3A5] shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-48 pb-5" : "max-h-0"}`}>
                  <p className="text-[#F7F5F2]/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}