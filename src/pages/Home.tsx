import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import PageLayout from "@/components/PageLayout";
import {
  TrendingUp, Users, Globe, BarChart2, Video, Layers,
  ArrowRight, ArrowUpRight, Star, Quote, ChevronDown
} from "lucide-react";

const services = [
  { icon: TrendingUp, name: "Marketing Campaigns", desc: "End-to-end campaign strategy and execution that drives brand awareness and measurable growth.", slug: "marketing-campaigns" },
  { icon: Users, name: "Influencer Marketing", desc: "Connect with 5,000+ vetted creators to amplify your brand voice authentically.", slug: "influencer-marketing" },
  { icon: Globe, name: "Digital Marketing", desc: "Multi-channel digital strategies spanning SEO, SEM, email, and social for maximum reach.", slug: "digital-marketing" },
  { icon: BarChart2, name: "Performance Marketing", desc: "Data-driven paid media campaigns optimized for ROI at every touchpoint.", slug: "performance-marketing" },
  { icon: Video, name: "Content Creation", desc: "Premium content production from concept to delivery — video, photo, copy, and more.", slug: "content-creation" },
  { icon: Layers, name: "Brand Strategy", desc: "Deep brand identity work: positioning, messaging, visual identity, and architecture.", slug: "brand-strategy" },
];

const campaigns = [
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_2f395637ee_3158463a5b873e08.png", title: "GUCCI RISE Campaign", tag: "Influencer Marketing", metric: "+280% Engagement", slug: "gucci-rise" },
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_e18ef7c824_50f874a04949aaa8.png", title: "Spotify Viral Push", tag: "Digital Marketing", metric: "12M Impressions", slug: "spotify-viral" },
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_af1ae08ffe_0d45a6bf5958ce47.png", title: "Tesla Launch Series", tag: "Performance Marketing", metric: "340% ROI", slug: "tesla-launch" },
];

const whyUs = [
  { title: "Data-Driven Creativity", desc: "We merge art and analytics for campaigns that perform beautifully." },
  { title: "Premium Partnerships", desc: "Access to top-tier influencers and exclusive media networks." },
  { title: "Full-Service Capability", desc: "Strategy to execution all under one roof." },
  { title: "Proven Track Record", desc: "500+ campaigns, 98% client retention across 50+ industries." },
  { title: "Real-Time Reporting", desc: "Live dashboards for complete campaign transparency." },
  { title: "Dedicated Team", desc: "Senior strategists assigned to every account personally." },
];

const testimonials = [
  { quote: "PNP Media transformed our brand presence completely. Our campaigns went from average to award-winning in just 6 months.", name: "Sarah Chen", title: "CMO, Luminary Brands", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" },
  { quote: "The ROI was beyond anything we'd experienced. 340% return in Q1 alone. These guys are the real deal.", name: "Marcus Rodriguez", title: "Founder, GrowthPath", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" },
  { quote: "Their influencer network is unmatched. We scaled from 10K to 500K followers in just 90 days.", name: "Priya Kapoor", title: "Director, StyleForward", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" },
];

const blogPosts = [
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_667eac7a8c_3f20e857d45e471f.png", tag: "Strategy", title: "The Future of Influencer Marketing in 2025", date: "Jan 15, 2025", read: "5 min read", slug: "influencer-marketing-2025" },
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_e58748cc4c_23ca8039e142d3de.png", tag: "Performance", title: "How We Generated 340% ROI for a D2C Brand", date: "Jan 8, 2025", read: "8 min read", slug: "roi-case-study" },
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_5a308b6042_29ad8327f8ac8746.png", tag: "Branding", title: "Building a Brand That Commands Premium Pricing", date: "Dec 28, 2024", read: "6 min read", slug: "premium-brand-strategy" },
];

const stats = [
  { value: 500, suffix: "+", label: "Campaigns Delivered" },
  { value: 98, suffix: "%", label: "Client Retention Rate" },
  { value: 50, suffix: "M+", label: "Revenue Generated", prefix: "$" },
  { value: 10, suffix: "+", label: "Years of Excellence" },
];

function AnimatedCounter({ target, suffix, prefix = "" }: { target: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function Home() {
  const marqueeItems = ["NIKE", "SAMSUNG", "SPOTIFY", "AMAZON", "GUCCI", "NETFLIX", "TESLA", "AIRBNB"];

  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0B0B0B] pt-20">
        {/* Decorative orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#D8C3A5]/5 blur-3xl animate-pulse-glow pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-[#D8C3A5]/3 blur-2xl animate-pulse-glow pointer-events-none" style={{ animationDelay: "2s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 border border-[#D8C3A5]/30 px-3 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8C3A5] animate-pulse" />
                <span className="text-[#D8C3A5] text-xs font-medium tracking-widest uppercase">Premium Marketing Agency</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-[#F7F5F2] leading-[0.9] tracking-tight mb-6">
                We Build<br />
                <span className="text-[#D8C3A5]">Brands</span> That<br />
                Dominate.
              </h1>
              <div className="w-16 h-px bg-[#D8C3A5] mb-6" />
              <p className="text-[#F7F5F2]/60 text-lg leading-relaxed mb-10 max-w-lg">
                Premium creative and performance-driven marketing for ambitious companies that refuse to blend in.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#D8C3A5] text-[#0B0B0B] px-7 py-4 font-bold text-sm tracking-wide hover:bg-[#CBB89D] transition-all duration-200 group">
                  Start Your Campaign
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/portfolio" className="inline-flex items-center gap-2 border border-[#D8C3A5]/50 text-[#F7F5F2] px-7 py-4 font-bold text-sm tracking-wide hover:border-[#D8C3A5] hover:text-[#D8C3A5] transition-all duration-200">
                  View Our Work
                </Link>
              </div>
            </div>

            {/* Right: Image Collage */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[500px]">
                {/* Floating badge */}
                <div className="absolute top-4 left-0 z-20 bg-[#D8C3A5] text-[#0B0B0B] px-4 py-2 font-black text-sm animate-float">
                  ↑ 340% Avg. ROI
                </div>
                <div className="absolute top-8 right-8 w-64 h-80 overflow-hidden" style={{ transform: "rotate(2deg)" }}>
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" alt="Creative team" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-32 left-4 w-48 h-60 overflow-hidden border-2 border-[#D8C3A5]/20" style={{ transform: "rotate(-3deg)" }}>
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" alt="Campaign visual" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-8 right-16 w-40 h-52 overflow-hidden" style={{ transform: "rotate(1deg)" }}>
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" alt="Brand strategy" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#F7F5F2]/30 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} />
        </div>
      </section>

      {/* TRUSTED BY MARQUEE */}
      <section className="border-y border-white/5 bg-[#0B0B0B] py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-4">
          <p className="text-center text-[#F7F5F2]/30 text-xs tracking-widest uppercase">Trusted by leading brands worldwide</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-0">
            {[...marqueeItems, ...marqueeItems].map((brand, i) => (
              <span key={i} className="inline-flex items-center gap-8 px-8">
                <span className="text-[#D8C3A5]/50 font-black text-lg tracking-widest">{brand}</span>
                <span className="text-[#F7F5F2]/10 text-2xl">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* AGENCY INTRO */}
      <section className="py-20 lg:py-32 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-4">WHO WE ARE</p>
              <div className="text-7xl lg:text-9xl font-black text-transparent" style={{ WebkitTextStroke: "1px rgba(216,195,165,0.2)" }}>10+</div>
              <p className="text-[#F7F5F2]/70 text-lg leading-relaxed mb-6 max-w-lg">
                PNP Media is a full-service marketing powerhouse. We combine bold creative thinking with data-driven performance to deliver campaigns that move markets and minds.
              </p>
              <p className="text-[#F7F5F2]/50 text-base leading-relaxed mb-8 max-w-lg">
                Founded in 2014, we've worked with over 200 brands across 50+ industries — from startups to global giants — delivering results that matter.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-[#D8C3A5] font-bold text-sm tracking-wide hover:gap-3 transition-all duration-200 group">
                Discover Our Story <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png"
                  alt="PNP Media workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#D8C3A5] text-[#0B0B0B] px-4 py-2 font-black text-sm">
                Est. 2014
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 lg:py-32 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div>
              <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-4">WHAT WE DO</p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F7F5F2] leading-tight">
                Full-Spectrum<br />Marketing Excellence
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-[#D8C3A5] font-bold text-sm tracking-wide hover:gap-3 transition-all group shrink-0">
              Explore All Services <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group bg-[#1C1C1C] border border-white/5 p-7 hover:border-[#D8C3A5]/30 transition-all duration-300 hover:bg-[#222]"
              >
                <div className="w-10 h-10 border border-[#D8C3A5]/30 flex items-center justify-center mb-5 group-hover:border-[#D8C3A5] transition-colors">
                  <s.icon size={18} className="text-[#D8C3A5]" />
                </div>
                <h3 className="text-[#F7F5F2] font-bold text-lg mb-3">{s.name}</h3>
                <p className="text-[#F7F5F2]/50 text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="flex items-center gap-2 text-[#D8C3A5] text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CAMPAIGNS */}
      <section className="py-20 lg:py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div>
              <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-4">FEATURED WORK</p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F7F5F2] leading-tight">
                Campaigns That<br />Moved Needles
              </h2>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-[#D8C3A5] font-bold text-sm tracking-wide hover:gap-3 transition-all group shrink-0">
              View All Work <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {campaigns.map((c, i) => (
              <Link
                key={c.slug}
                to={`/portfolio/${c.slug}`}
                className={`group relative overflow-hidden ${i === 0 ? "lg:row-span-2" : ""}`}
              >
                <div className={`relative overflow-hidden ${i === 0 ? "h-80 lg:h-full min-h-[500px]" : "h-56 sm:h-64"}`}>
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png"
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="inline-block bg-[#D8C3A5] text-[#0B0B0B] text-xs font-bold px-3 py-1 mb-3 w-fit">{c.tag}</span>
                    <h3 className="text-[#F7F5F2] font-black text-xl mb-2">{c.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-[#D8C3A5] font-bold text-sm">{c.metric}</span>
                      <span className="text-[#F7F5F2]/60 text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        View Case Study <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 lg:py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-4">WHY PNP MEDIA</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F7F5F2] leading-tight">
              The Agency Built<br />for Results
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <div key={i} className="border border-white/5 p-7 hover:border-[#D8C3A5]/20 transition-colors">
                <div className="w-8 h-px bg-[#D8C3A5] mb-5" />
                <h3 className="text-[#F7F5F2] font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-[#F7F5F2]/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE STATS */}
      <section className="py-20 lg:py-28 bg-[#D8C3A5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#0B0B0B]/20">
            {stats.map((s, i) => (
              <div key={i} className="text-center lg:px-8">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#0B0B0B] mb-2">
                  <AnimatedCounter target={s.value} suffix={s.suffix} prefix={s.prefix} />
                </div>
                <p className="text-[#0B0B0B]/60 text-sm font-medium tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-32 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-4">CLIENT LOVE</p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#F7F5F2]">Trusted by Ambitious Brands</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#1C1C1C] border border-white/5 p-8">
                <Quote size={32} className="text-[#D8C3A5]/30 mb-6" />
                <p className="text-[#F7F5F2]/80 text-base leading-relaxed mb-8 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3 border-t border-white/5 pt-6">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="text-[#F7F5F2] font-bold text-sm">{t.name}</div>
                    <div className="text-[#F7F5F2]/40 text-xs">{t.title}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, j) => <Star key={j} size={12} className="text-[#D8C3A5] fill-[#D8C3A5]" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEWS */}
      <section className="py-20 lg:py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div>
              <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-4">INSIGHTS</p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#F7F5F2]">Thought Leadership</h2>
            </div>
            <Link to="/blog" className="inline-flex items-center gap-2 text-[#D8C3A5] font-bold text-sm tracking-wide hover:gap-3 transition-all group shrink-0">
              Read All Articles <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <Link key={i} to={`/blog/${post.slug}`} className="group">
                <div className="overflow-hidden mb-5 aspect-[16/10]">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="inline-block bg-[#D8C3A5]/10 text-[#D8C3A5] text-xs font-bold px-3 py-1 mb-3 border border-[#D8C3A5]/20">{post.tag}</span>
                <h3 className="text-[#F7F5F2] font-bold text-lg leading-tight mb-3 group-hover:text-[#D8C3A5] transition-colors">{post.title}</h3>
                <div className="flex items-center gap-3 text-[#F7F5F2]/40 text-xs">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.read}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 lg:py-40 bg-[#0B0B0B] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-[20vw] font-black text-white/[0.02] leading-none select-none tracking-tighter">GROW</div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-6">READY TO START?</p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#F7F5F2] leading-tight mb-6">
            Ready to Grow<br />Your Brand?
          </h2>
          <p className="text-[#F7F5F2]/50 text-xl mb-12">Let's build something extraordinary together.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#D8C3A5] text-[#0B0B0B] px-8 py-4 font-black text-sm tracking-wide hover:bg-[#CBB89D] transition-colors group">
              Book a Discovery Call <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center gap-2 border border-[#D8C3A5]/50 text-[#F7F5F2] px-8 py-4 font-bold text-sm tracking-wide hover:border-[#D8C3A5] hover:text-[#D8C3A5] transition-all">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}