import { Link, useParams } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { ArrowUpRight, Star } from "lucide-react";

const caseData: Record<string, {
  title: string; client: string; category: string; tags: string[];
  heroImg: string; overview: string; objective: string; industry: string; timeline: string; budget: string;
  executionSteps: { title: string; desc: string }[];
  metrics: { value: string; label: string; desc: string }[];
  creativeImgs: string[];
  testimonial: { quote: string; author: string; role: string; avatar: string };
  relatedWork: { slug: string; title: string; tag: string; metric: string; img: string }[];
}> = {
  "gucci-rise": {
    title: "GUCCI RISE Campaign",
    client: "Gucci",
    category: "Influencer Marketing",
    tags: ["Fashion", "Luxury", "Influencer Marketing", "Content Creation"],
    heroImg: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1400&h=700&fit=crop",
    overview: "Gucci needed to reconnect with Gen Z audiences while maintaining their luxury brand positioning. PNP Media built a curated influencer ecosystem pairing heritage with modernity.",
    objective: "Drive brand awareness and engagement among 18-28 year old luxury consumers across Instagram and TikTok, targeting key fashion markets in US, UK, and UAE.",
    industry: "Fashion / Luxury",
    timeline: "Q3 2024 (8 weeks)",
    budget: "$150K–$300K",
    executionSteps: [
      { title: "Creator Curation", desc: "Hand-selected 32 micro and macro influencers spanning fashion, art, and lifestyle niches with genuine audience alignment." },
      { title: "Creative Direction", desc: "Developed a unified visual identity for the campaign maintaining Gucci's luxury aesthetic while feeling native to each creator's feed." },
      { title: "Content Production", desc: "Produced 180+ pieces of content across Instagram Reels, TikTok, and Stories over the 8-week campaign window." },
      { title: "Community Amplification", desc: "Leveraged paid amplification on top-performing organic content to extend reach to new qualified audiences." },
    ],
    metrics: [
      { value: "+280%", label: "Engagement Rate Lift", desc: "vs. previous campaign benchmark" },
      { value: "45M", label: "Total Impressions", desc: "across all platforms and creators" },
      { value: "180+", label: "Content Pieces", desc: "produced across 32 creators" },
      { value: "8.4%", label: "Average Engagement Rate", desc: "vs. industry avg of 2.1%" },
    ],
    creativeImgs: [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=700&h=500&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop",
    ],
    testimonial: {
      quote: "PNP Media truly understood what we needed — authentic luxury, not forced promotion. The campaign results exceeded every benchmark we set. A true partnership.",
      author: "Isabella Romano",
      role: "Global Brand Director, Gucci",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
    },
    relatedWork: [
      { slug: "lumiere", title: "LUMIÈRE COSMETICS", tag: "Influencer Marketing", metric: "600% Revenue", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" },
      { slug: "fitpulse-growth", title: "FITPULSE GROWTH", tag: "Influencer Marketing", metric: "800K Users", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" },
    ],
  },
  "spotify-viral": {
    title: "SPOTIFY VIRAL PUSH",
    client: "Spotify",
    category: "Digital Marketing",
    tags: ["Music", "Tech", "Digital Marketing", "Social Media"],
    heroImg: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1400&h=700&fit=crop",
    overview: "Spotify wanted to drive premium subscription upgrades among millennial music lovers. PNP Media developed a multi-channel digital campaign that turned listeners into brand advocates.",
    objective: "Increase premium subscription sign-ups by 25% through digital and social campaigns targeting 22-35 year olds in major US metros.",
    industry: "Technology / Entertainment",
    timeline: "Q2 2024 (6 weeks)",
    budget: "$75K–$150K",
    executionSteps: [
      { title: "Audience Segmentation", desc: "Identified 12 distinct audience cohorts based on listening behavior, demographics, and digital habits." },
      { title: "Creative Campaign", desc: "Produced a 'Your Soundtrack' campaign concept with personalized ad creatives for each audience segment." },
      { title: "Multi-Channel Launch", desc: "Deployed across Meta, YouTube, TikTok, and programmatic display with tailored messaging per channel." },
      { title: "Viral Mechanism", desc: "Launched shareable 'Your Music Personality' quiz that generated organic virality and UGC content." },
    ],
    metrics: [
      { value: "12M", label: "Total Impressions", desc: "across all digital channels" },
      { value: "+35%", label: "Premium Sign-ups", desc: "vs. target of 25% increase" },
      { value: "2.8M", label: "Quiz Completions", desc: "organic viral engagement" },
      { value: "4.2%", label: "Click-Through Rate", desc: "vs. industry avg 1.1%" },
    ],
    creativeImgs: [
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&h=500&fit=crop",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    ],
    testimonial: {
      quote: "The 'Your Soundtrack' campaign was a genuine cultural moment. PNP Media created something that people genuinely wanted to share. The sign-up numbers spoke for themselves.",
      author: "Marcus Chen",
      role: "VP Growth Marketing, Spotify",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
    },
    relatedWork: [
      { slug: "vault-finance", title: "VAULT FINANCE", tag: "Digital Marketing", metric: "+450% Leads", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" },
      { slug: "nexus-ai", title: "NEXUS AI LAUNCH", tag: "Performance Marketing", metric: "10K Signups", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" },
    ],
  },
  "tesla-launch": {
    title: "TESLA SERIES X LAUNCH",
    client: "Tesla",
    category: "Performance Marketing",
    tags: ["Automotive", "EV", "Performance Marketing", "Paid Media"],
    heroImg: "https://images.unsplash.com/photo-1526628953301-3cd4a9a4e55a?w=1400&h=700&fit=crop",
    overview: "Tesla's Series X launch required a high-impact performance marketing campaign to drive pre-orders and test drive bookings, targeting early adopters and EV enthusiasts.",
    objective: "Generate 5,000 pre-order reservations and 2,000 test drive bookings within the launch quarter through precision paid media.",
    industry: "Automotive / Technology",
    timeline: "Q1 2024 (12 weeks)",
    budget: "$250K–$500K",
    executionSteps: [
      { title: "Precision Targeting", desc: "Built detailed audience segments combining EV interest, income levels, tech-forward behavior, and Tesla competitor ownership." },
      { title: "Creative Testing", desc: "Ran 40+ creative variants across Google, Meta, and programmatic to identify highest-performing combinations." },
      { title: "Landing Page Optimization", desc: "Rebuilt campaign landing pages with conversion-focused design, achieving 28% lift in form completion." },
      { title: "Retargeting Engine", desc: "Multi-stage retargeting sequences guided high-intent users from awareness to reservation completion." },
    ],
    metrics: [
      { value: "340%", label: "Return on Ad Spend", desc: "vs. 200% target" },
      { value: "8,200", label: "Pre-Orders Generated", desc: "vs. target of 5,000" },
      { value: "3,400", label: "Test Drives Booked", desc: "71% conversion from intent" },
      { value: "$28", label: "Cost Per Lead", desc: "vs. $85 benchmark" },
    ],
    creativeImgs: [
      "https://images.unsplash.com/photo-1526628953301-3cd4a9a4e55a?w=700&h=500&fit=crop",
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1539813986965-dbc8ad0f4af0?w=400&h=300&fit=crop",
    ],
    testimonial: {
      quote: "We've worked with large agencies before, but nothing compared to the precision and strategic thinking PNP Media brought. 340% ROAS in a single quarter — outstanding.",
      author: "David Park",
      role: "Head of Growth, Tesla",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
    },
    relatedWork: [
      { slug: "nexus-ai", title: "NEXUS AI LAUNCH", tag: "Performance Marketing", metric: "10K Signups", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" },
      { slug: "gucci-rise", title: "GUCCI RISE", tag: "Influencer Marketing", metric: "+280% Engagement", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" },
    ],
  },
  "botanica-rebrand": {
    title: "BOTANICA REBRAND",
    client: "Botanica",
    category: "Brand Strategy",
    tags: ["Beauty", "Skincare", "Brand Strategy", "Rebranding"],
    heroImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&h=700&fit=crop",
    overview: "Botanica needed a complete brand overhaul to position as a premium sustainable skincare brand competing with luxury players. PNP Media led the full brand strategy and identity project.",
    objective: "Reposition Botanica from a mid-market brand to luxury sustainable skincare, targeting affluent conscious consumers and driving a 3x brand awareness lift.",
    industry: "Beauty / Skincare",
    timeline: "Q4 2023 (16 weeks)",
    budget: "$50K–$150K",
    executionSteps: [
      { title: "Brand Audit", desc: "Comprehensive analysis of current brand perception, competitive landscape, and target audience insights." },
      { title: "Strategy Development", desc: "Defined new brand positioning, messaging pillars, and personality framework for the premium repositioning." },
      { title: "Identity Creation", desc: "Developed new visual identity including logomark, typography, color palette, and photography style guide." },
      { title: "Launch Campaign", desc: "Executed the rebrand launch across all touchpoints with a coordinated influencer and PR campaign." },
    ],
    metrics: [
      { value: "5x", label: "Brand Awareness Lift", desc: "measured via brand tracking study" },
      { value: "+180%", label: "Premium Perception", desc: "vs. pre-rebrand benchmark" },
      { value: "2.3x", label: "Revenue Growth", desc: "in the 6 months post-rebrand" },
      { value: "92%", label: "Brand Recall", desc: "among target demographic" },
    ],
    creativeImgs: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&h=500&fit=crop",
      "https://images.unsplash.com/photo-1570194065650-d99fb4a18a8f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop",
    ],
    testimonial: {
      quote: "PNP Media didn't just redesign our logo. They transformed our entire brand story. We're now competing — and winning — against brands 10x our size.",
      author: "Raj Mehta",
      role: "CEO, Botanica",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
    },
    relatedWork: [
      { slug: "lumiere", title: "LUMIÈRE COSMETICS", tag: "Influencer Marketing", metric: "600% Revenue", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" },
      { slug: "gucci-rise", title: "GUCCI RISE", tag: "Influencer Marketing", metric: "+280% Engagement", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" },
    ],
  },
  "fitpulse-growth": {
    title: "FITPULSE GROWTH CAMPAIGN",
    client: "FitPulse",
    category: "Influencer Marketing",
    tags: ["Fitness", "Health", "Influencer Marketing", "App Growth"],
    heroImg: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1400&h=700&fit=crop",
    overview: "FitPulse needed rapid user acquisition to compete with established fitness apps. PNP Media built a fitness influencer campaign that transformed them from a niche app into a mainstream health brand.",
    objective: "Drive 500,000 new app downloads and build an engaged community of fitness enthusiasts within 90 days through influencer and content marketing.",
    industry: "Fitness / Health Tech",
    timeline: "Q2 2024 (90 days)",
    budget: "$100K–$200K",
    executionSteps: [
      { title: "Influencer Network Build", desc: "Recruited 85 fitness creators across YouTube, TikTok, and Instagram ranging from micro to mega-influencers." },
      { title: "Challenge Campaign", desc: "Created the '30-Day FitPulse Challenge' that generated massive UGC and drove organic virality." },
      { title: "Conversion Optimization", desc: "Optimized app store listings and landing pages to maximize install conversion from influencer traffic." },
      { title: "Community Building", desc: "Built an active Discord and Instagram community that retained users and created word-of-mouth growth." },
    ],
    metrics: [
      { value: "800K", label: "New App Downloads", desc: "60% above target" },
      { value: "4.7★", label: "App Store Rating", desc: "up from 3.2★ pre-campaign" },
      { value: "68%", label: "Day-30 Retention", desc: "vs. industry avg 28%" },
      { value: "12M", label: "Challenge Views", desc: "across TikTok and Instagram" },
    ],
    creativeImgs: [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&h=500&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop",
    ],
    testimonial: {
      quote: "In 90 days, PNP Media turned FitPulse from a startup into a movement. 800K downloads, a thriving community, and an app store feature. Nothing short of remarkable.",
      author: "Alex Morrison",
      role: "Founder & CEO, FitPulse",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg",
    },
    relatedWork: [
      { slug: "gucci-rise", title: "GUCCI RISE", tag: "Influencer Marketing", metric: "+280% Engagement", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" },
      { slug: "lumiere", title: "LUMIÈRE COSMETICS", tag: "Influencer Marketing", metric: "600% Revenue", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" },
    ],
  },
};

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const cs = caseData[slug || ""] || caseData["gucci-rise"];

  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-end pb-16 overflow-hidden">
        <img src={cs.heroImg} alt={cs.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[#F7F5F2]/40 text-xs mb-6">
            <Link to="/" className="hover:text-[#D8C3A5] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/portfolio" className="hover:text-[#D8C3A5] transition-colors">Portfolio</Link>
            <span>/</span>
            <span className="text-[#D8C3A5]">{cs.title}</span>
          </div>
          <span className="inline-block bg-[#D8C3A5] text-[#0B0B0B] text-xs font-bold px-3 py-1 mb-4">{cs.category}</span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#F7F5F2] leading-[0.9] tracking-tight mb-6 max-w-4xl">
            {cs.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {cs.tags.map((tag) => (
              <span key={tag} className="border border-[#F7F5F2]/20 text-[#F7F5F2]/60 text-xs px-3 py-1">{tag}</span>
            ))}
          </div>
          {/* Quick metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {cs.metrics.slice(0, 4).map((m, i) => (
              <div key={i} className="bg-[#0B0B0B]/70 backdrop-blur-sm border border-white/10 px-4 py-3">
                <div className="text-[#D8C3A5] font-black text-xl">{m.value}</div>
                <div className="text-[#F7F5F2]/50 text-xs">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPAIGN OVERVIEW */}
      <section className="py-20 lg:py-28 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-4">THE CHALLENGE</p>
              <h2 className="text-3xl font-black text-[#F7F5F2] mb-6">Campaign Objective</h2>
              <p className="text-[#F7F5F2]/70 text-lg leading-relaxed mb-6">{cs.objective}</p>
              <p className="text-[#F7F5F2]/50 text-base leading-relaxed">{cs.overview}</p>
            </div>
            <div className="bg-[#1C1C1C] border border-white/5 p-8 h-fit">
              <h3 className="text-[#F7F5F2] font-bold text-lg mb-6 pb-4 border-b border-white/5">Campaign Details</h3>
              <div className="space-y-4">
                {[
                  ["Client", cs.client],
                  ["Industry", cs.industry],
                  ["Service", cs.category],
                  ["Timeline", cs.timeline],
                  ["Budget Range", cs.budget],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-start justify-between gap-4">
                    <span className="text-[#F7F5F2]/40 text-sm">{label}</span>
                    <span className="text-[#F7F5F2] text-sm font-medium text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGY */}
      <section className="py-20 lg:py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-4">OUR APPROACH</p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#F7F5F2]">The Strategy<br />That Worked</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cs.executionSteps.map((step, i) => (
              <div key={i} className="bg-[#1C1C1C] border border-white/5 p-8 hover:border-[#D8C3A5]/20 transition-colors">
                <div className="text-5xl font-black text-transparent mb-5" style={{ WebkitTextStroke: "1px rgba(216,195,165,0.25)" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-[#F7F5F2] font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-[#F7F5F2]/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXECUTION COLLAGE */}
      <section className="py-20 lg:py-28 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-4">EXECUTION</p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#F7F5F2]">Bringing the<br />Vision to Life</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="overflow-hidden aspect-[4/3]">
              <img src={cs.creativeImgs[0]} alt="Creative asset 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="overflow-hidden">
                <img src={cs.creativeImgs[1]} alt="Creative asset 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="overflow-hidden">
                <img src={cs.creativeImgs[2]} alt="Creative asset 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE METRICS */}
      <section className="py-20 lg:py-28 bg-[#D8C3A5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#0B0B0B]/60 text-xs font-bold tracking-widest uppercase mb-4">THE RESULTS</p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0B0B0B]">Numbers That Speak</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-[#0B0B0B]/15">
            {cs.metrics.map((m, i) => (
              <div key={i} className="text-center lg:px-8">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B0B0B] mb-2">{m.value}</div>
                <div className="text-[#0B0B0B] font-bold text-base mb-1">{m.label}</div>
                <div className="text-[#0B0B0B]/50 text-xs">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIAL */}
      <section className="py-20 lg:py-28 bg-[#0B0B0B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-8xl font-black text-[#D8C3A5]/10 leading-none mb-6">"</div>
          <p className="text-[#F7F5F2] text-2xl sm:text-3xl font-bold leading-relaxed mb-10 italic">
            "{cs.testimonial.quote}"
          </p>
          <div className="flex items-center justify-center gap-4">
            <img src={cs.testimonial.avatar} alt={cs.testimonial.author} className="w-12 h-12 rounded-full object-cover border-2 border-[#D8C3A5]/30" />
            <div className="text-left">
              <div className="text-[#F7F5F2] font-bold">{cs.testimonial.author}</div>
              <div className="text-[#F7F5F2]/50 text-sm">{cs.testimonial.role}</div>
            </div>
          </div>
          <div className="flex justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-[#D8C3A5] fill-[#D8C3A5]" />)}
          </div>
        </div>
      </section>

      {/* RELATED WORK */}
      <section className="py-20 lg:py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-4">MORE CASE STUDIES</p>
              <h2 className="text-4xl font-black text-[#F7F5F2]">More of Our Work</h2>
            </div>
            <Link to="/portfolio" className="hidden sm:inline-flex items-center gap-2 text-[#D8C3A5] font-bold text-sm hover:gap-3 transition-all">
              View All Work <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cs.relatedWork.map((w, i) => (
              <Link key={i} to={`/portfolio/${w.slug}`} className="group relative overflow-hidden aspect-[16/9]">
                <img src={w.img} alt={w.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="inline-block bg-[#D8C3A5] text-[#0B0B0B] text-xs font-bold px-2 py-0.5 w-fit mb-2">{w.tag}</span>
                  <h3 className="text-[#F7F5F2] font-black text-lg mb-1">{w.title}</h3>
                  <span className="text-[#D8C3A5] font-bold text-sm">{w.metric}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="sm:hidden mt-6 text-center">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-[#D8C3A5] font-bold text-sm">
              View All Work <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}