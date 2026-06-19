import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import {
  TrendingUp, Users, Globe, BarChart2, Video, Share2,
  Layers, Star, DollarSign, Film, PieChart, ArrowRight,
  ArrowUpRight, Check
} from "lucide-react";

const services = [
  { icon: TrendingUp, name: "Marketing Campaigns", desc: "End-to-end campaign strategy and execution that drives brand awareness and measurable growth.", slug: "marketing-campaigns" },
  { icon: Users, name: "Influencer Marketing", desc: "Connect with 5,000+ vetted creators to amplify your brand voice authentically at scale.", slug: "influencer-marketing" },
  { icon: Globe, name: "Digital Marketing", desc: "Multi-channel digital strategies spanning SEO, SEM, email, and social for maximum reach.", slug: "digital-marketing" },
  { icon: BarChart2, name: "Performance Marketing", desc: "Data-driven paid media and performance campaigns optimized for ROI at every touchpoint.", slug: "performance-marketing" },
  { icon: Video, name: "Content Creation", desc: "Premium content production from concept to delivery — video, photography, copy, and more.", slug: "content-creation" },
  { icon: Share2, name: "Social Media Marketing", desc: "Strategic social media management that builds communities and drives meaningful engagement.", slug: "social-media" },
  { icon: Layers, name: "Brand Strategy", desc: "Deep brand identity work: positioning, messaging, visual identity, and brand architecture.", slug: "brand-strategy" },
  { icon: Star, name: "Creator Management", desc: "End-to-end talent management for content creators and digital influencers.", slug: "creator-management" },
  { icon: DollarSign, name: "Paid Media", desc: "Meta, Google, TikTok, and programmatic advertising with precision targeting.", slug: "paid-media" },
  { icon: Film, name: "Video Production", desc: "Cinematic video production for campaigns, brand films, reels, and commercials.", slug: "video-production" },
  { icon: PieChart, name: "Analytics & Reporting", desc: "Real-time dashboards and detailed reporting to track every metric that matters.", slug: "analytics" },
];

const deliverables = [
  "Dedicated Strategy Team",
  "Custom Campaign Briefs",
  "Creative Asset Production",
  "Multi-Platform Distribution",
  "Real-Time Performance Dashboard",
  "Monthly Strategy Reviews",
  "Influencer Vetting & Management",
  "Detailed ROI Reporting",
];

const processSteps = [
  { num: "01", title: "Brief & Discovery", desc: "We deep-dive into your brand objectives and audience." },
  { num: "02", title: "Strategy & Planning", desc: "Bespoke marketing blueprint crafted for your goals." },
  { num: "03", title: "Creative Execution", desc: "Bold assets brought to life by our creative team." },
  { num: "04", title: "Launch & Optimize", desc: "Precision execution with real-time optimization." },
];

const benefits = [
  "500+ successful campaigns delivered",
  "Average 280% increase in brand engagement",
  "Access to 5,000+ premium creator network",
  "Dedicated senior team on every account",
  "Full-service capability from brief to report",
];

const caseStudies = [
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_9b69dcc303_da2cfa3b5ba081da.png", title: "GUCCI RISE", tag: "Influencer Marketing", metric: "+280% Engagement", slug: "gucci-rise" },
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_c8a3501d0b_dde7c043442ce300.png", title: "SPOTIFY VIRAL", tag: "Digital Marketing", metric: "12M Impressions", slug: "spotify-viral" },
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_1663b6ee4b_43d8bde5539e7d22.png", title: "TESLA LAUNCH", tag: "Performance Marketing", metric: "340% ROI", slug: "tesla-launch" },
];

export default function Services() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#0B0B0B] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-[#D8C3A5]/3 blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-6">OUR SERVICES</p>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-[#F7F5F2] leading-[0.9] tracking-tight mb-8 max-w-4xl">
            Full-Spectrum<br />Marketing <span className="text-[#D8C3A5]">Built</span><br />to Scale
          </h1>
          <p className="text-[#F7F5F2]/60 text-xl leading-relaxed max-w-2xl">
            From bold creative campaigns to precision performance marketing — everything your brand needs to dominate markets and minds.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 lg:py-28 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-4">WHAT WE OFFER</p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#F7F5F2]">11 Ways We Grow Your Brand</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group bg-[#1C1C1C] border border-white/5 p-7 hover:border-[#D8C3A5]/30 transition-all duration-300 hover:bg-[#222]"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 border border-[#D8C3A5]/30 flex items-center justify-center group-hover:border-[#D8C3A5] transition-colors">
                    <s.icon size={18} className="text-[#D8C3A5]" />
                  </div>
                  <ArrowUpRight size={16} className="text-[#D8C3A5]/0 group-hover:text-[#D8C3A5] transition-colors" />
                </div>
                <h3 className="text-[#F7F5F2] font-bold text-lg mb-3">{s.name}</h3>
                <p className="text-[#F7F5F2]/50 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-20 lg:py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-black text-[#F7F5F2] mb-4">What's Included in<br />Every Engagement</h2>
            <p className="text-[#F7F5F2]/50 max-w-xl mx-auto">Every client partnership comes with a comprehensive suite of services and support designed for maximum impact.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliverables.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#1C1C1C] border border-white/5 p-5">
                <div className="w-5 h-5 rounded-full bg-[#D8C3A5]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={11} className="text-[#D8C3A5]" />
                </div>
                <span className="text-[#F7F5F2] text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 lg:py-28 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-4">HOW IT WORKS</p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#F7F5F2]">From Brief to Brilliant</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {processSteps.map((step, i) => (
              <div key={i} className="border border-white/5 p-8 relative group hover:bg-[#1C1C1C] transition-colors">
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-4 h-px bg-[#D8C3A5]/30" />
                )}
                <div className="text-6xl font-black text-transparent mb-6" style={{ WebkitTextStroke: "1px rgba(216,195,165,0.2)" }}>
                  {step.num}
                </div>
                <h3 className="text-[#F7F5F2] font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-[#F7F5F2]/50 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 lg:py-28 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-4">WHY CHOOSE US</p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#F7F5F2] mb-8">Results-First.<br />Always.</h2>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#D8C3A5] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-[#0B0B0B]" />
                    </div>
                    <span className="text-[#F7F5F2]/80 text-base">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#D8C3A5] text-[#0B0B0B] px-7 py-4 font-bold text-sm tracking-wide hover:bg-[#CBB89D] transition-colors group">
                  Start a Campaign <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png"
                alt="Marketing results"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY PREVIEWS */}
      <section className="py-20 lg:py-28 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div>
              <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-4">PROVEN RESULTS</p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#F7F5F2]">A Few of Our Wins</h2>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-[#D8C3A5] font-bold text-sm hover:gap-3 transition-all group shrink-0">
              View All Work <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {caseStudies.map((cs, i) => (
              <Link key={i} to={`/portfolio/${cs.slug}`} className="group relative overflow-hidden aspect-[4/3]">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png"
                  alt={cs.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="inline-block bg-[#D8C3A5] text-[#0B0B0B] text-xs font-bold px-2 py-0.5 w-fit mb-2">{cs.tag}</span>
                  <h3 className="text-[#F7F5F2] font-black text-lg mb-1">{cs.title}</h3>
                  <span className="text-[#D8C3A5] font-bold text-sm">{cs.metric}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#D8C3A5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#0B0B0B]/60 text-xs font-bold tracking-widest uppercase mb-4">GET STARTED</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B0B0B] mb-6">Ready to Start<br />Your Campaign?</h2>
          <p className="text-[#0B0B0B]/70 text-xl mb-10">Book a free discovery call and let's build something remarkable.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0B0B0B] text-[#F7F5F2] px-8 py-4 font-black text-sm tracking-wide hover:bg-[#1C1C1C] transition-colors group">
            Book a Discovery Call <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}