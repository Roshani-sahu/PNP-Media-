import { Link, useParams } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

const serviceData: Record<string, {
  title: string; tagline: string; description: string;
  heroImg: string; deliverables: string[]; processSteps: { num: string; title: string; desc: string }[];
  benefits: string[]; metrics: { value: string; label: string }[];
  relatedWork: { slug: string; title: string; tag: string; metric: string; img: string }[];
}> = {
  "marketing-campaigns": {
    title: "Marketing Campaigns",
    tagline: "End-to-end campaign strategy, creative execution, and measurable results.",
    description: "We build full-scale marketing campaigns from the ground up — starting with deep audience research and strategic positioning through to creative production, multi-channel distribution, and real-time performance optimization. Every campaign is designed to move the needle.",
    heroImg: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&h=700&fit=crop",
    deliverables: ["Campaign Strategy Brief", "Audience Research & Segmentation", "Creative Concept Development", "Multi-Channel Media Plan", "Content Production", "Campaign Launch Management", "Real-Time Performance Dashboard", "Post-Campaign Analysis"],
    processSteps: [
      { num: "01", title: "Discovery & Brief", desc: "We immerse ourselves in your brand, goals, and audience landscape." },
      { num: "02", title: "Strategy Development", desc: "Build a comprehensive campaign blueprint with channels, messaging, and KPIs." },
      { num: "03", title: "Creative Execution", desc: "Produce compelling assets across all required formats and platforms." },
      { num: "04", title: "Launch & Deploy", desc: "Execute across channels with precision timing and audience targeting." },
      { num: "05", title: "Optimize & Report", desc: "Real-time monitoring, optimization, and transparent performance reporting." },
    ],
    benefits: ["Full creative and strategy under one roof", "Data-driven approach for maximum ROI", "Access to premium media partnerships", "Dedicated campaign manager on every project", "Transparent real-time reporting dashboard"],
    metrics: [{ value: "280%", label: "Avg. Engagement Lift" }, { value: "340%", label: "Avg. ROI Delivered" }, { value: "500+", label: "Campaigns Completed" }],
    relatedWork: [
      { slug: "gucci-rise", title: "GUCCI RISE Campaign", tag: "Influencer Marketing", metric: "+280% Engagement", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" },
      { slug: "tesla-launch", title: "Tesla Launch Series", tag: "Performance Marketing", metric: "340% ROI", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" },
    ],
  },
  "influencer-marketing": {
    title: "Influencer Marketing",
    tagline: "Authentic creator partnerships that amplify your brand to millions.",
    description: "Our influencer marketing service connects your brand with hand-picked, vetted creators from our network of 5,000+ influencers across every niche. We handle everything from talent identification and outreach to contract negotiation, brief creation, content approval, and campaign reporting.",
    heroImg: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1400&h=700&fit=crop",
    deliverables: ["Influencer Discovery & Vetting", "Audience Alignment Analysis", "Creator Brief Development", "Contract Negotiation", "Content Review & Approval", "Campaign Coordination", "Performance Tracking", "Detailed Influence Report"],
    processSteps: [
      { num: "01", title: "Brand Alignment", desc: "Understand your brand values and audience to identify perfect creators." },
      { num: "02", title: "Talent Curation", desc: "Source and vet creators from our 5,000+ premium network." },
      { num: "03", title: "Brief & Creative", desc: "Develop detailed creative briefs that inspire authentic content." },
      { num: "04", title: "Campaign Execution", desc: "Coordinate and oversee all creator deliverables and timelines." },
      { num: "05", title: "Report & Scale", desc: "Measure results and identify top performers for future scaling." },
    ],
    benefits: ["Access to 5,000+ vetted premium creators", "Deep audience demographic matching", "End-to-end campaign management", "Full content rights management", "Fraud detection and authenticity verification"],
    metrics: [{ value: "5K+", label: "Creator Network" }, { value: "200M+", label: "Total Audience Reach" }, { value: "8.2%", label: "Avg. Engagement Rate" }],
    relatedWork: [
      { slug: "gucci-rise", title: "GUCCI RISE Campaign", tag: "Influencer Marketing", metric: "+280% Engagement", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" },
      { slug: "fitpulse-growth", title: "FitPulse Growth", tag: "Influencer Marketing", metric: "800K New Users", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" },
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    tagline: "Multi-channel digital strategies that build presence and drive growth.",
    description: "We craft comprehensive digital marketing strategies that span SEO, content marketing, email campaigns, social media, and more. Our data-first approach ensures every channel works in harmony to build your brand's digital presence and convert audiences into customers.",
    heroImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=700&fit=crop",
    deliverables: ["Digital Strategy Blueprint", "SEO Audit & Optimization", "Content Calendar & Production", "Email Marketing Campaigns", "Social Media Management", "PPC Campaign Setup", "Analytics Setup & Tracking", "Monthly Performance Reports"],
    processSteps: [
      { num: "01", title: "Digital Audit", desc: "Comprehensive audit of your existing digital presence and competitors." },
      { num: "02", title: "Channel Strategy", desc: "Identify highest-impact channels and build integrated strategy." },
      { num: "03", title: "Content Creation", desc: "Produce high-quality content tailored for each platform." },
      { num: "04", title: "Distribution", desc: "Execute across channels with optimized timing and targeting." },
      { num: "05", title: "Analytics & Growth", desc: "Track performance and continuously optimize for growth." },
    ],
    benefits: ["Fully integrated multi-channel approach", "SEO-first content strategy", "Marketing automation setup", "Real-time analytics and reporting", "Scalable growth frameworks"],
    metrics: [{ value: "450%", label: "Avg. Lead Increase" }, { value: "180%", label: "Avg. Organic Traffic Lift" }, { value: "60+", label: "Active Clients" }],
    relatedWork: [
      { slug: "spotify-viral", title: "Spotify Viral Push", tag: "Digital Marketing", metric: "12M Impressions", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" },
      { slug: "vault-finance", title: "Vault Finance", tag: "Digital Marketing", metric: "+450% Leads", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" },
    ],
  },
  "performance-marketing": {
    title: "Performance Marketing",
    tagline: "Precision paid media campaigns engineered for measurable ROI.",
    description: "Our performance marketing team builds, manages, and optimizes paid campaigns across Google, Meta, TikTok, and programmatic networks. Every dollar spent is tracked, every audience is tested, and every campaign is engineered to maximize your return on investment.",
    heroImg: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&h=700&fit=crop",
    deliverables: ["Paid Media Strategy", "Google Ads Campaign Setup", "Meta Ads Management", "TikTok Ads Execution", "Audience Segmentation", "A/B Testing Framework", "Conversion Rate Optimization", "Weekly Performance Reports"],
    processSteps: [
      { num: "01", title: "Goal Mapping", desc: "Define KPIs, target CPA, and ROI expectations clearly." },
      { num: "02", title: "Audience Research", desc: "Deep audience analysis and customer journey mapping." },
      { num: "03", title: "Campaign Build", desc: "Structured campaigns with proper tracking and attribution." },
      { num: "04", title: "Test & Learn", desc: "Systematic A/B testing of creative, audience, and bidding." },
      { num: "05", title: "Scale & Optimize", desc: "Scale winning campaigns and continuously improve performance." },
    ],
    benefits: ["Average 3.4x return on ad spend", "Cross-platform attribution modeling", "Creative testing and optimization", "Weekly optimization cycles", "Transparent spend reporting"],
    metrics: [{ value: "340%", label: "Avg. ROI" }, { value: "3.4x", label: "Avg. ROAS" }, { value: "$50M+", label: "Ad Spend Managed" }],
    relatedWork: [
      { slug: "tesla-launch", title: "Tesla Launch Series", tag: "Performance Marketing", metric: "340% ROI", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" },
      { slug: "nexus-ai", title: "Nexus AI Launch", tag: "Performance Marketing", metric: "10K Signups", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" },
    ],
  },
  "content-creation": {
    title: "Content Creation",
    tagline: "Premium content that stops the scroll and converts audiences.",
    description: "From cinematic brand films to social-first video content, photography, and long-form copy — our creative team produces content that captures your brand essence and compels action. We handle everything from concept ideation through to final delivery.",
    heroImg: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&h=700&fit=crop",
    deliverables: ["Content Strategy & Calendar", "Video Production & Editing", "Photography & Art Direction", "Copywriting & Brand Voice", "Social Media Content", "Long-Form Content", "Graphic Design Assets", "Content Distribution Plan"],
    processSteps: [
      { num: "01", title: "Creative Brief", desc: "Define creative direction, brand voice, and content objectives." },
      { num: "02", title: "Concept Development", desc: "Ideate and develop compelling creative concepts for approval." },
      { num: "03", title: "Production", desc: "Execute production with our in-house creative team." },
      { num: "04", title: "Post-Production", desc: "Edit, refine, and finalize all content to premium standards." },
      { num: "05", title: "Delivery & Distribution", desc: "Package and distribute content across all agreed platforms." },
    ],
    benefits: ["In-house creative production team", "Multi-format content delivery", "Platform-optimized creative", "Brand consistency across all formats", "Fast turnaround with no quality compromise"],
    metrics: [{ value: "2M+", label: "Views Generated" }, { value: "10K+", label: "Assets Produced" }, { value: "95%", label: "Client Approval Rate" }],
    relatedWork: [
      { slug: "saveur-launch", title: "Saveur App Launch", tag: "Content Creation", metric: "2M Views", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" },
      { slug: "luxbox", title: "LuxBox Campaign", tag: "Content Creation", metric: "4M Impressions", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" },
    ],
  },
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = serviceData[slug || ""] || serviceData["marketing-campaigns"];

  return (
    <PageLayout>
      {/* HERO BANNER */}
      <section className="relative min-h-[70vh] flex items-end pb-16 overflow-hidden">
        <img src={service.heroImg} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[#F7F5F2]/40 text-xs mb-6">
            <Link to="/" className="hover:text-[#D8C3A5] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#D8C3A5] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#D8C3A5]">{service.title}</span>
          </div>
          <span className="inline-block bg-[#D8C3A5] text-[#0B0B0B] text-xs font-bold px-3 py-1 mb-4">SERVICE</span>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-[#F7F5F2] leading-[0.9] tracking-tight mb-6 max-w-3xl">
            {service.title}
          </h1>
          <p className="text-[#F7F5F2]/70 text-xl max-w-2xl">{service.tagline}</p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 lg:py-32 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-4">OVERVIEW</p>
              <h2 className="text-4xl font-black text-[#F7F5F2] mb-6">What We Do</h2>
              <p className="text-[#F7F5F2]/70 text-lg leading-relaxed mb-8">{service.description}</p>
              <div className="grid grid-cols-3 gap-4">
                {service.metrics.map((m, i) => (
                  <div key={i} className="border border-[#D8C3A5]/20 p-4 text-center">
                    <div className="text-3xl font-black text-[#D8C3A5] mb-1">{m.value}</div>
                    <div className="text-[#F7F5F2]/50 text-xs">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={service.heroImg}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-20 lg:py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-4">DELIVERABLES</p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#F7F5F2]">What You Get</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.deliverables.map((d, i) => (
              <div key={i} className="bg-[#1C1C1C] border border-white/5 p-6 hover:border-[#D8C3A5]/20 transition-colors">
                <div className="w-5 h-5 bg-[#D8C3A5] flex items-center justify-center mb-4">
                  <Check size={11} className="text-[#0B0B0B]" />
                </div>
                <span className="text-[#F7F5F2] text-sm font-medium">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 lg:py-28 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-4">OUR PROCESS</p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#F7F5F2]">How We Execute</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-px bg-[#D8C3A5]/10" />
            <div className="space-y-6">
              {service.processSteps.map((step, i) => (
                <div key={i} className="pl-12 lg:pl-24 relative group">
                  <div className="absolute left-0 lg:left-0 top-4 w-8 h-8 border border-[#D8C3A5]/30 flex items-center justify-center group-hover:border-[#D8C3A5] transition-colors bg-[#0B0B0B]">
                    <span className="text-[#D8C3A5] text-xs font-black">{step.num}</span>
                  </div>
                  <div className="bg-[#1C1C1C] border border-white/5 p-6 group-hover:border-[#D8C3A5]/20 transition-colors">
                    <h3 className="text-[#F7F5F2] font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-[#F7F5F2]/50 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 lg:py-28 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[4/3] overflow-hidden order-2 lg:order-1">
              <img
                src={service.heroImg}
                alt={service.title + " benefits"}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-4">WHY THIS SERVICE</p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#F7F5F2] mb-8">Built for Growth</h2>
              <ul className="space-y-4">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#D8C3A5] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-[#0B0B0B]" />
                    </div>
                    <span className="text-[#F7F5F2]/80 text-base">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED CASE STUDIES */}
      <section className="py-20 lg:py-28 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-4">PROVEN RESULTS</p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#F7F5F2]">See It In Action</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.relatedWork.map((cs, i) => (
              <Link key={i} to={`/portfolio/${cs.slug}`} className="group relative overflow-hidden aspect-[16/9]">
                <img src={cs.img} alt={cs.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="inline-block bg-[#D8C3A5] text-[#0B0B0B] text-xs font-bold px-2 py-0.5 w-fit mb-2">{cs.tag}</span>
                  <h3 className="text-[#F7F5F2] font-black text-xl mb-1">{cs.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-[#D8C3A5] font-bold text-sm">{cs.metric}</span>
                    <span className="text-[#F7F5F2]/60 text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Case Study <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F7F5F2] mb-4">
            Start Your {service.title} Campaign
          </h2>
          <p className="text-[#F7F5F2]/50 text-xl mb-10">Ready to see these results for your brand? Let's talk.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#D8C3A5] text-[#0B0B0B] px-8 py-4 font-black text-sm tracking-wide hover:bg-[#CBB89D] transition-colors group">
              Book a Discovery Call <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 border border-[#D8C3A5]/50 text-[#F7F5F2] px-8 py-4 font-bold text-sm hover:border-[#D8C3A5] hover:text-[#D8C3A5] transition-all">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}