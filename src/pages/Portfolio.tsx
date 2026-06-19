import { Link } from "react-router-dom";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { ArrowRight, ArrowUpRight, Quote, Star } from "lucide-react";

const caseStudies = [
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b20ee6a340_b205d85f92b6b516.png", title: "GUCCI RISE", client: "Gucci", category: "Influencer Marketing", industry: "Fashion", metric: "+280% Engagement", slug: "gucci-rise" },
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_3e33bc860d_be215686183a34c1.png", title: "SPOTIFY VIRAL PUSH", client: "Spotify", category: "Digital Marketing", industry: "Tech", metric: "12M Impressions", slug: "spotify-viral" },
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_0da880c741_37d244964f97ae63.png", title: "TESLA SERIES X", client: "Tesla", category: "Performance Marketing", industry: "Automotive", metric: "340% ROI", slug: "tesla-launch" },
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_67c9966ad4_0d947d37d5befdcb.png", title: "BOTANICA REBRAND", client: "Botanica", category: "Brand Strategy", industry: "Beauty", metric: "5x Awareness", slug: "botanica-rebrand" },
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_44d672e424_2c66a746ca15c0cc.png", title: "FITPULSE GROWTH", client: "FitPulse", category: "Influencer Marketing", industry: "Fitness", metric: "800K Users", slug: "fitpulse-growth" },
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_06eff257a9_fed1a2217538228f.png", title: "SAVEUR LAUNCH", client: "Saveur", category: "Content Creation", industry: "Food", metric: "2M Views", slug: "saveur-launch" },
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_172306dd52_5805883278c6a0e5.png", title: "VAULT FINANCE", client: "Vault", category: "Digital Marketing", industry: "Fintech", metric: "+450% Leads", slug: "vault-finance" },
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_06fedb5701_2deae131a5fce0f2.png", title: "HYPEDROP DROPS", client: "HypeDrop", category: "Content Creation", industry: "Fashion", metric: "500K Followers", slug: "hypedrop" },
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_27f0b733b8_012d8a494d031a0d.png", title: "WANDERLUX TRAVEL", client: "WanderLux", category: "Content Creation", industry: "Travel", metric: "8M Reach", slug: "wanderlux" },
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_e135323553_9b1868ad5351ff26.png", title: "LUMIERE COSMETICS", client: "Lumière", category: "Influencer Marketing", industry: "Beauty", metric: "600% Revenue", slug: "lumiere" },
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_1f369a8a20_123ed323c1230a7d.png", title: "NEXUS AI LAUNCH", client: "Nexus AI", category: "Performance Marketing", industry: "Technology", metric: "10K Signups", slug: "nexus-ai" },
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_2dac9601be_a7a3cefb4a30a988.png", title: "LUXBOX LAUNCH", client: "LuxBox", category: "Content Creation", industry: "Lifestyle", metric: "4M Impressions", slug: "luxbox" },
];

const filters = ["All", "Influencer Marketing", "Digital Marketing", "Performance Marketing", "Content Creation", "Brand Strategy"];

const testimonials = [
  { quote: "Working with PNP Media was transformative. Our brand went from unknown to industry-leading in under a year. The results exceeded every expectation.", name: "Raj Mehta", title: "CEO, Botanica", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg" },
  { quote: "The campaign results were beyond our expectations — 12M impressions and 340% engagement lift. Truly world-class execution from a world-class team.", name: "Claire Dubois", title: "CMO, Lumière", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg" },
];

const images = [
  "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png",
  "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png",
  "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png",
  "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png",
  "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png",
  "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png",
  "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png",
  "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png",
  "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png",
  "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png",
  "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png",
  "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png",
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = caseStudies.filter((cs) => {
    const matchFilter = activeFilter === "All" || cs.category === activeFilter;
    const matchSearch = !search || cs.title.toLowerCase().includes(search.toLowerCase()) || cs.client.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-[#0B0B0B] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D8C3A5]/3 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-6">OUR WORK</p>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-[#F7F5F2] leading-[0.9] tracking-tight mb-8 max-w-4xl">
            Campaigns That<br /><span className="text-[#D8C3A5]">Changed</span> the Game
          </h1>
          <p className="text-[#F7F5F2]/60 text-xl max-w-2xl">
            500+ campaigns. 50+ industries. Millions of people reached.
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="sticky top-[60px] z-40 bg-[#0B0B0B]/95 backdrop-blur-sm border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-1.5 text-xs font-bold tracking-wide transition-all duration-200 ${
                    activeFilter === f
                      ? "bg-[#D8C3A5] text-[#0B0B0B]"
                      : "border border-white/15 text-[#F7F5F2]/60 hover:border-[#D8C3A5]/30 hover:text-[#F7F5F2]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-[#1C1C1C] border border-white/10 px-4 py-2 text-sm text-[#F7F5F2] placeholder-[#F7F5F2]/30 focus:outline-none focus:border-[#D8C3A5]/50 w-full sm:w-52"
            />
          </div>
        </div>
      </div>

      {/* CASE STUDIES GRID */}
      <section className="py-16 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-[#F7F5F2]/40">No projects found matching your criteria.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((cs, i) => {
                const imgIndex = caseStudies.indexOf(cs);
                return (
                  <Link key={cs.slug} to={`/portfolio/${cs.slug}`} className="group relative overflow-hidden aspect-[4/3]">
                    <img
                      src={images[imgIndex] || images[0]}
                      alt={cs.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/20 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="flex items-start justify-between mb-2">
                        <span className="inline-block bg-[#D8C3A5] text-[#0B0B0B] text-xs font-bold px-2 py-0.5">{cs.category}</span>
                        <span className="text-[#D8C3A5] font-black text-sm bg-[#0B0B0B]/60 px-2 py-0.5">{cs.metric}</span>
                      </div>
                      <h3 className="text-[#F7F5F2] font-black text-lg leading-tight">{cs.title}</h3>
                      <p className="text-[#F7F5F2]/50 text-xs mt-1">{cs.client} · {cs.industry}</p>
                      <div className="flex items-center gap-1 text-[#D8C3A5] text-xs font-bold mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        View Case Study <ArrowUpRight size={12} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-8 bg-[#1C1C1C] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[["500+", "Projects"], ["50+", "Industries"], ["$50M+", "Revenue Generated"], ["98%", "Client Retention"]].map(([val, label], i) => (
              <div key={i}>
                <div className="text-3xl font-black text-[#D8C3A5]">{val}</div>
                <div className="text-[#F7F5F2]/40 text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#1C1C1C] border border-white/5 p-8">
                <Quote size={32} className="text-[#D8C3A5]/30 mb-6" />
                <p className="text-[#F7F5F2]/80 text-lg leading-relaxed mb-8 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
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

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-4">NEXT PROJECT</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F7F5F2] mb-4">Have a Project<br />in Mind?</h2>
          <p className="text-[#F7F5F2]/50 text-xl mb-10">Let's create your next award-winning campaign.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#D8C3A5] text-[#0B0B0B] px-8 py-4 font-black text-sm tracking-wide hover:bg-[#CBB89D] transition-colors group">
            Start a Conversation <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}