import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Linkedin, Twitter, Link2, ArrowUpRight } from "lucide-react";

type ContentSection =
  | { type: "heading"; content: string }
  | { type: "paragraph"; content: string }
  | { type: "pullquote"; content: string }
  | { type: "list"; content: string[] };

const articleData: Record<string, {
  title: string; category: string; date: string; readTime: string;
  authorName: string; authorRole: string; authorAvatar: string; authorBio: string;
  excerpt: string; heroImg: string;
  contentSections: ContentSection[];
}> = {
  "influencer-marketing-2025": {
    title: "The Future of Influencer Marketing: What Every Brand Must Know in 2025",
    category: "Strategy",
    date: "January 15, 2025",
    readTime: "8 min read",
    authorName: "Alexandra Pierce",
    authorRole: "CEO & Founder, PNP Media",
    authorAvatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
    authorBio: "Alexandra Pierce is the CEO and Founder of PNP Media. With 10+ years in marketing strategy, she has led campaigns for Fortune 500 brands and helped hundreds of companies achieve transformational growth.",
    excerpt: "As the creator economy matures, the rules of influencer marketing are being rewritten. Here's what every brand needs to know.",
    heroImg: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1400&h=600&fit=crop",
    contentSections: [
      { type: "paragraph", content: "The influencer marketing landscape has undergone a seismic shift. What began as simple sponsored posts has evolved into a sophisticated ecosystem of creator partnerships, authentic storytelling, and precision performance measurement. For brands still operating with a 2020 playbook, the results — or lack thereof — are becoming increasingly clear." },
      { type: "heading", content: "The Death of Vanity Metrics" },
      { type: "paragraph", content: "For years, brands have chased follower counts like a gold rush. A creator with 5 million followers must reach 5 million people, right? Wrong. The era of using follower count as a primary metric is officially over. What matters now is engagement rate, audience authenticity, and conversion intent." },
      { type: "pullquote", content: "The brands winning in 2025 aren't working with the most popular influencers — they're working with the most relevant ones." },
      { type: "heading", content: "Micro-Creators Are Dominating" },
      { type: "paragraph", content: "Our data across 500+ influencer campaigns in 2024 revealed a consistent pattern: micro-creators (10K–100K followers) consistently outperformed mega-influencers on engagement rate, purchase intent, and cost-per-acquisition. The reasons are intuitive — smaller creators maintain tighter community bonds, post more authentically, and their audiences genuinely trust their recommendations." },
      { type: "list", content: ["Micro-creators average 8.2% engagement vs 1.9% for mega-influencers", "Cost-per-engagement is 60% lower with micro-creators", "Purchase intent is 4x higher from micro-creator content", "Long-term partnerships outperform one-off posts by 3.2x"] },
      { type: "heading", content: "The Rise of Creator Commerce" },
      { type: "paragraph", content: "The line between content and commerce has dissolved completely. TikTok Shop, Instagram Shopping, and creator storefronts have transformed influencers from brand amplifiers into direct sales channels. Brands that understand this shift are building creator commerce programs that generate direct, trackable revenue — not just impressions." },
      { type: "pullquote", content: "In 2025, the best influencer campaigns don't just build awareness — they build revenue." },
      { type: "heading", content: "What This Means for Your Strategy" },
      { type: "paragraph", content: "The brands that will win in influencer marketing over the next 3 years are those investing in long-term creator relationships, diversifying across creator tiers, building robust measurement frameworks, and integrating creator content into their full marketing funnel — not treating it as an isolated channel." },
      { type: "list", content: ["Build a diversified creator portfolio across nano, micro, and macro tiers", "Invest in 6–12 month creator partnerships rather than one-off posts", "Implement last-click and multi-touch attribution for creator campaigns", "Repurpose creator content across paid and owned channels", "Measure creator campaigns with the same rigor as paid media"] },
    ],
  },
  "roi-case-study": {
    title: "How We Generated 340% ROI for a D2C Brand in 90 Days",
    category: "Performance",
    date: "January 8, 2025",
    readTime: "8 min read",
    authorName: "James Okafor",
    authorRole: "Creative Director, PNP Media",
    authorAvatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
    authorBio: "James Okafor is Creative Director at PNP Media, specializing in performance-driven creative strategies that bridge brand storytelling with hard ROI metrics.",
    excerpt: "A deep-dive into the exact performance marketing strategy that delivered 340% returns in just 90 days.",
    heroImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=600&fit=crop",
    contentSections: [
      { type: "paragraph", content: "When GrowthPath came to us, they were spending $30K/month on Meta ads and getting a 1.1x ROAS. They were losing money. The attribution was broken, the creative was stale, and the audience targeting had been essentially untouched for 18 months. Within 90 days, we transformed their performance marketing program into a 340% ROI machine." },
      { type: "heading", content: "The Diagnosis: Three Broken Things" },
      { type: "paragraph", content: "Before touching a single campaign, we spent two weeks auditing everything. We found three critical failure points: a single-segment audience strategy ignoring the full customer journey, creative that was over 18 months old with no testing, and attribution that credited only the last click — making top-of-funnel spend invisible." },
      { type: "pullquote", content: "Most brands don't have a traffic problem. They have a strategy, creative, and attribution problem." },
      { type: "heading", content: "The Strategy: Full-Funnel Architecture" },
      { type: "paragraph", content: "We rebuilt the entire campaign architecture from scratch, mapping creative content and bidding strategies to each stage of the customer journey — from first touch through to repeat purchase. This included separate campaigns for cold audience acquisition, warm retargeting, and loyal customer expansion." },
      { type: "list", content: ["Built 12 audience segments from scratch using first-party and modeled data", "Created 48 unique creative assets across 6 concept territories", "Implemented 7-touch attribution model replacing single-click", "Reduced cost-per-acquisition by 68% through systematic creative testing", "Scaled winning campaigns by 5x while maintaining ROAS"] },
      { type: "heading", content: "The Results" },
      { type: "paragraph", content: "By the end of month one, ROAS had improved from 1.1x to 2.4x. By month two, it was 3.1x. At the 90-day mark, we hit 3.4x ROAS — a 340% return — while simultaneously scaling total spend from $30K to $85K per month. More revenue, better returns, and a sustainable performance marketing program." },
    ],
  },
  "premium-brand-strategy": {
    title: "Building a Brand That Commands Premium Pricing",
    category: "Branding",
    date: "December 28, 2024",
    readTime: "6 min read",
    authorName: "Priya Sharma",
    authorRole: "Head of Digital, PNP Media",
    authorAvatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    authorBio: "Priya Sharma leads digital strategy at PNP Media, with expertise in brand positioning, digital transformation, and market differentiation for premium brands.",
    excerpt: "Why some brands can charge 10x more than competitors and exactly how to build one that does.",
    heroImg: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&h=600&fit=crop",
    contentSections: [
      { type: "paragraph", content: "Apple charges $1,299 for a laptop. Lenovo charges $299 for similar specs. Hermès charges $10,000 for a handbag. H&M charges $30 for a similar bag. The difference isn't in the product — it's in the brand. Understanding how premium brands achieve this pricing power is the foundation of building one." },
      { type: "heading", content: "The Premium Brand Formula" },
      { type: "paragraph", content: "Premium brands share five characteristics: a clear and differentiated positioning, an obsessive focus on quality signals, a carefully curated aesthetic that communicates value, a narrative that makes customers feel something, and a consistency that makes every touchpoint reinforce the brand promise." },
      { type: "pullquote", content: "Premium pricing is not about the product. It's about the story, the signal, and the status your brand confers on its buyer." },
      { type: "heading", content: "The Five Building Blocks" },
      { type: "list", content: ["Positioning: Own a specific idea in the customer's mind — not 'good quality' but 'the most sustainable luxury skincare'", "Visual Identity: Every visual element must signal quality — typography, photography, color, whitespace", "Brand Voice: Speak like you're worth 10x — confident, specific, never desperate", "Social Proof: Curate, not accumulate — one powerful testimonial beats 1,000 mediocre reviews", "Distribution: Where you sell signals what you're worth — premium brands are selective"] },
      { type: "heading", content: "The Premium Brand Journey" },
      { type: "paragraph", content: "Building a premium brand is a 12–18 month journey that requires consistency, patience, and the willingness to say no to anything that dilutes your positioning. The brands that get there — and stay there — are the ones that treat brand building as the strategic asset it is, not a cost center." },
    ],
  },
};

const relatedArticles = [
  { img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png", category: "Performance", title: "How We Generated 340% ROI", slug: "roi-case-study", date: "Jan 8, 2025", readTime: "8 min" },
  { img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png", category: "Branding", title: "Building a Premium Brand", slug: "premium-brand-strategy", date: "Dec 28, 2024", readTime: "6 min" },
  { img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png", category: "Influencer", title: "Creator Economy Trends", slug: "creator-economy", date: "Dec 20, 2024", readTime: "5 min" },
];

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = articleData[slug || ""] || articleData["influencer-marketing-2025"];
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageLayout>
      {/* ARTICLE HERO */}
      <section className="pt-32 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[#F7F5F2]/40 text-xs mb-6">
            <Link to="/" className="hover:text-[#D8C3A5] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-[#D8C3A5] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#D8C3A5] truncate max-w-xs">{article.title}</span>
          </div>
          <span className="inline-block bg-[#D8C3A5] text-[#0B0B0B] text-xs font-bold px-3 py-1 mb-6">{article.category}</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F7F5F2] leading-tight tracking-tight mb-8 max-w-4xl">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 mb-10">
            <img src={article.authorAvatar} alt={article.authorName} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <div className="text-[#F7F5F2] font-bold text-sm">{article.authorName}</div>
              <div className="text-[#F7F5F2]/40 text-xs">{article.authorRole}</div>
            </div>
            <div className="ml-4 text-[#F7F5F2]/30 text-xs">
              {article.date} · {article.readTime}
            </div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden max-h-[500px]">
            <img src={article.heroImg} alt={article.title} className="w-full h-[400px] sm:h-[500px] object-cover" />
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="py-16 bg-[#0B0B0B]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
          {/* Share sidebar */}
          <div className="hidden lg:flex flex-col gap-3 absolute -left-24 top-0 sticky top-32">
            <p className="text-[#F7F5F2]/30 text-xs font-bold tracking-widest uppercase mb-1 rotate-0">Share</p>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer"
              className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#F7F5F2]/50 hover:text-[#D8C3A5] hover:border-[#D8C3A5]/30 transition-all">
              <Linkedin size={14} />
            </a>
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}`} target="_blank" rel="noreferrer"
              className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#F7F5F2]/50 hover:text-[#D8C3A5] hover:border-[#D8C3A5]/30 transition-all">
              <Twitter size={14} />
            </a>
            <button onClick={handleCopyLink}
              className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#F7F5F2]/50 hover:text-[#D8C3A5] hover:border-[#D8C3A5]/30 transition-all">
              <Link2 size={14} />
            </button>
            {copied && <span className="text-[#D8C3A5] text-xs">Copied!</span>}
          </div>

          <article className="space-y-7">
            {article.contentSections.map((section, i) => {
              if (section.type === "heading") {
                return <h2 key={i} className="text-2xl sm:text-3xl font-black text-[#D8C3A5] mt-12 mb-4">{section.content}</h2>;
              } else if (section.type === "paragraph") {
                return <p key={i} className="text-[#F7F5F2]/75 text-lg leading-[1.8]">{section.content}</p>;
              } else if (section.type === "pullquote") {
                return (
                  <blockquote key={i} className="border-l-4 border-[#D8C3A5] pl-6 py-2 my-10">
                    <p className="text-[#F7F5F2] text-xl sm:text-2xl font-bold italic leading-relaxed">{section.content}</p>
                  </blockquote>
                );
              } else if (section.type === "list" && Array.isArray(section.content)) {
                return (
                  <ul key={i} className="space-y-3 ml-4">
                    {(section.content as string[]).map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-[#F7F5F2]/70 text-base">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D8C3A5] shrink-0 mt-2.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </article>

          {/* Mobile share */}
          <div className="flex lg:hidden items-center gap-3 mt-12 pt-6 border-t border-white/5">
            <span className="text-[#F7F5F2]/40 text-sm">Share:</span>
            <a href="#" className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#F7F5F2]/50 hover:text-[#D8C3A5] transition-all"><Linkedin size={14} /></a>
            <a href="#" className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#F7F5F2]/50 hover:text-[#D8C3A5] transition-all"><Twitter size={14} /></a>
            <button onClick={handleCopyLink} className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#F7F5F2]/50 hover:text-[#D8C3A5] transition-all"><Link2 size={14} /></button>
          </div>
        </div>
      </section>

      {/* AUTHOR BIO */}
      <section className="py-12 bg-[#111111]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-[#1C1C1C] border border-white/5 p-8 flex flex-col sm:flex-row gap-6">
            <img src={article.authorAvatar} alt={article.authorName} className="w-20 h-20 rounded-full object-cover shrink-0" />
            <div>
              <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-2">About the Author</p>
              <h3 className="text-[#F7F5F2] font-black text-xl mb-1">{article.authorName}</h3>
              <p className="text-[#D8C3A5] text-sm mb-3">{article.authorRole}</p>
              <p className="text-[#F7F5F2]/50 text-sm leading-relaxed mb-4">{article.authorBio}</p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-8 h-8 border border-white/10 flex items-center justify-center text-[#F7F5F2]/50 hover:text-[#D8C3A5] transition-all"><Linkedin size={13} /></a>
                <a href="#" className="w-8 h-8 border border-white/10 flex items-center justify-center text-[#F7F5F2]/50 hover:text-[#D8C3A5] transition-all"><Twitter size={13} /></a>
                <Link to="/blog" className="text-[#D8C3A5] text-xs font-bold hover:underline ml-2">More by {article.authorName.split(" ")[0]} →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD GEN CTA */}
      <section className="py-16 bg-[#0B0B0B]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-3xl font-black text-[#F7F5F2] mb-3">Like What You're Reading?</h3>
          <p className="text-[#F7F5F2]/50 mb-8">Get expert marketing insights delivered to your inbox weekly.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
            <input type="email" placeholder="Your email address" className="flex-1 bg-[#1C1C1C] border border-white/10 px-4 py-3 text-sm text-[#F7F5F2] placeholder-[#F7F5F2]/30 focus:outline-none focus:border-[#D8C3A5]/50" />
            <button type="submit" className="bg-[#D8C3A5] text-[#0B0B0B] px-6 py-3 text-sm font-bold hover:bg-[#CBB89D] transition-colors">Subscribe</button>
          </form>
          <Link to="/contact" className="inline-flex items-center gap-1 text-[#D8C3A5] text-sm font-bold hover:gap-2 transition-all">
            Work With Us <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-8">YOU MIGHT ALSO LIKE</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedArticles.map((a, i) => (
              <Link key={i} to={`/blog/${a.slug}`} className="group">
                <div className="overflow-hidden aspect-[16/10] mb-4">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <span className="inline-block bg-[#D8C3A5] text-[#0B0B0B] text-xs font-bold px-2 py-0.5 mb-2">{a.category}</span>
                <h4 className="text-[#F7F5F2] font-bold text-base leading-tight group-hover:text-[#D8C3A5] transition-colors">{a.title}</h4>
                <p className="text-[#F7F5F2]/40 text-xs mt-2">{a.date} · {a.readTime} read</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER STRIP */}
      <section className="py-10 bg-[#1C1C1C] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#F7F5F2]/70 text-sm font-medium">Want more insights? Subscribe to <span className="text-[#D8C3A5] font-bold">The PNP Brief</span></p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input type="email" placeholder="Your email" className="bg-[#0B0B0B] border border-white/10 px-4 py-2 text-sm text-[#F7F5F2] placeholder-[#F7F5F2]/30 focus:outline-none focus:border-[#D8C3A5]/50 w-52" />
              <button type="submit" className="bg-[#D8C3A5] text-[#0B0B0B] px-5 py-2 text-sm font-bold hover:bg-[#CBB89D] transition-colors">→</button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}