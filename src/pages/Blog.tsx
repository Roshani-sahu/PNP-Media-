import { Link } from "react-router-dom";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Search, ArrowUpRight } from "lucide-react";

const featuredArticle = {
  img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_667eac7a8c_80c623f4a0b35e93.png",
  tag: "Strategy",
  title: "The Future of Influencer Marketing: What Every Brand Must Know in 2025",
  excerpt: "As the creator economy matures, the rules of influencer marketing are being rewritten. Authenticity now outperforms reach, micro-creators beat mega influencers, and brands that understand this shift are winning. Here's what's changing and how to stay ahead...",
  author: "Alexandra Pierce",
  authorRole: "CEO & Founder",
  authorAvatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
  date: "January 15, 2025",
  readTime: "8 min read",
  slug: "influencer-marketing-2025",
};

const articles = [
  { img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png", category: "Performance", title: "How We Generated 340% ROI for a D2C Brand in 90 Days", excerpt: "A deep-dive into the exact performance marketing strategy that delivered 340% returns for a direct-to-consumer brand.", author: "James Okafor", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg", date: "Jan 8, 2025", readTime: "8 min", slug: "roi-case-study" },
  { img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png", category: "Branding", title: "Building a Brand That Commands Premium Pricing", excerpt: "Why some brands can charge 10x more than competitors and exactly how to build one that does.", author: "Priya Sharma", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg", date: "Dec 28, 2024", readTime: "6 min", slug: "premium-brand-strategy" },
  { img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png", category: "Influencer", title: "Creator Economy Trends Reshaping Brand Partnerships", excerpt: "The creator landscape is shifting fast. Here's what forward-thinking brands are doing differently to stay relevant.", author: "Maya Johnson", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg", date: "Dec 20, 2024", readTime: "5 min", slug: "creator-economy" },
  { img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png", category: "Paid Media", title: "Meta vs Google: Where Should Your Ad Budget Go in 2025?", excerpt: "The age-old debate, finally settled with real data from 200+ campaigns across both platforms.", author: "Ryan Torres", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg", date: "Dec 15, 2024", readTime: "7 min", slug: "meta-vs-google" },
  { img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png", category: "Content", title: "Why Video Content Dominates Every Algorithm in 2025", excerpt: "Short-form, long-form, and everything in between — here's how to build a video content strategy that wins.", author: "Marcus Webb", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-9.jpg", date: "Dec 10, 2024", readTime: "4 min", slug: "video-content-2025" },
  { img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png", category: "Analytics", title: "The 10 KPIs Every CMO Should Be Tracking Right Now", excerpt: "Most marketing teams track the wrong metrics. Here are the 10 that actually predict growth.", author: "Sophie Chen", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg", date: "Dec 5, 2024", readTime: "9 min", slug: "marketing-kpis" },
  { img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png", category: "Strategy", title: "Email Marketing in the AI Age: Still the Highest ROI Channel?", excerpt: "Despite all the new channels, email still delivers. But not the way it used to. Here's the modern approach.", author: "Alexandra Pierce", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg", date: "Nov 28, 2024", readTime: "6 min", slug: "email-marketing-ai" },
  { img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png", category: "Content", title: "Reels vs TikTok: The Definitive Creative Strategy Guide", excerpt: "Two platforms, two very different algorithms. Master both with this comprehensive breakdown.", author: "Maya Johnson", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg", date: "Nov 20, 2024", readTime: "5 min", slug: "reels-vs-tiktok" },
  { img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png", category: "Strategy", title: "How to Choose the Right Marketing Agency: A Brand's Guide", excerpt: "Not all agencies are created equal. Here's the framework top CMOs use when making the most important hire.", author: "David Kim", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg", date: "Nov 15, 2024", readTime: "7 min", slug: "choosing-agency" },
];

const categories = ["All", "Strategy", "Performance", "Branding", "Influencer", "Content", "Paid Media", "Analytics"];

const categoryColors: Record<string, string> = {
  Strategy: "#D8C3A5", Performance: "#CBB89D", Branding: "#D8C3A5",
  Influencer: "#CBB89D", Content: "#D8C3A5", "Paid Media": "#CBB89D", Analytics: "#D8C3A5",
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");

  const filtered = articles.filter((a) => {
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    const matchSearch = !searchTerm || a.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#0B0B0B] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[#D8C3A5]/3 blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-6">INSIGHTS & PERSPECTIVES</p>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-[#F7F5F2] leading-[0.9] tracking-tight mb-8 max-w-4xl">
            Thought Leadership<br />for <span className="text-[#D8C3A5]">Bold Brands</span>
          </h1>
          <p className="text-[#F7F5F2]/60 text-xl max-w-2xl">
            Marketing intelligence, campaign breakdowns, and industry insights from the PNP Media team.
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="py-6 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={`/blog/${featuredArticle.slug}`} className="group relative overflow-hidden block">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png"
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#D8C3A5] text-[#0B0B0B] text-xs font-black px-3 py-1">FEATURED</span>
                  <span className="border border-[#D8C3A5]/40 text-[#D8C3A5] text-xs font-bold px-3 py-1">{featuredArticle.tag}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F7F5F2] leading-tight max-w-3xl mb-4 group-hover:text-[#D8C3A5] transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-[#F7F5F2]/60 text-base max-w-2xl mb-6 hidden sm:block">{featuredArticle.excerpt}</p>
                <div className="flex items-center gap-4">
                  <img src={featuredArticle.authorAvatar} alt={featuredArticle.author} className="w-9 h-9 rounded-full object-cover" />
                  <div>
                    <div className="text-[#F7F5F2] text-sm font-bold">{featuredArticle.author}, {featuredArticle.authorRole}</div>
                    <div className="text-[#F7F5F2]/40 text-xs">{featuredArticle.date} · {featuredArticle.readTime}</div>
                  </div>
                  <span className="ml-auto flex items-center gap-1 text-[#D8C3A5] text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Read Full Article <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* FILTERS + SEARCH */}
      <section className="py-8 bg-[#0B0B0B] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 text-xs font-bold tracking-wide transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-[#D8C3A5] text-[#0B0B0B]"
                      : "border border-white/15 text-[#F7F5F2]/60 hover:border-[#D8C3A5]/30 hover:text-[#F7F5F2]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F7F5F2]/30" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-[#1C1C1C] border border-white/10 pl-8 pr-4 py-2 text-sm text-[#F7F5F2] placeholder-[#F7F5F2]/30 focus:outline-none focus:border-[#D8C3A5]/50 w-full sm:w-52"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="py-16 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-[#F7F5F2]/40">No articles found.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((article, i) => (
                <Link key={i} to={`/blog/${article.slug}`} className="group">
                  <div className="overflow-hidden aspect-[16/10] mb-5">
                    <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-[#0B0B0B] text-xs font-black px-3 py-1"
                      style={{ backgroundColor: categoryColors[article.category] || "#D8C3A5" }}
                    >
                      {article.category}
                    </span>
                    <span className="text-[#F7F5F2]/40 text-xs">{article.readTime} read</span>
                  </div>
                  <h3 className="text-[#F7F5F2] font-bold text-lg leading-tight mb-3 group-hover:text-[#D8C3A5] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-[#F7F5F2]/40 text-sm leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                    <img src={article.avatar} alt={article.author} className="w-7 h-7 rounded-full object-cover" />
                    <span className="text-[#F7F5F2]/60 text-xs">{article.author}</span>
                    <span className="text-[#F7F5F2]/20 text-xs">·</span>
                    <span className="text-[#F7F5F2]/40 text-xs">{article.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 lg:py-28 bg-[#D8C3A5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#0B0B0B]/60 text-xs font-bold tracking-widest uppercase mb-4">NEWSLETTER</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0B0B0B] mb-4">Stay Ahead of the Curve</h2>
          <p className="text-[#0B0B0B]/70 text-lg mb-8">Weekly marketing insights, campaign breakdowns, and industry intelligence straight to your inbox.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/60 border border-[#0B0B0B]/20 px-4 py-3 text-sm text-[#0B0B0B] placeholder-[#0B0B0B]/40 focus:outline-none focus:border-[#0B0B0B]/60"
            />
            <button type="submit" className="bg-[#0B0B0B] text-[#F7F5F2] px-6 py-3 text-sm font-bold tracking-wide hover:bg-[#1C1C1C] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-[#0B0B0B]/40 text-xs mt-4">Join 12,000+ marketers. No spam, unsubscribe anytime.</p>
        </div>
      </section>
    </PageLayout>
  );
}