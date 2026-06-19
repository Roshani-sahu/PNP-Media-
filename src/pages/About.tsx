import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { ArrowRight, ArrowUpRight, Zap, BarChart2, Handshake, Eye, Lightbulb, Award, Linkedin, Instagram } from "lucide-react";

const timeline = [
  { year: "2014", title: "Founded with a Vision", desc: "PNP Media was born from a single belief: every brand deserves world-class marketing. We started with 3 people and one big dream." },
  { year: "2016", title: "First Major Client Win", desc: "Landed our first Fortune 500 partnership and tripled the team within 6 months. The industry took notice." },
  { year: "2018", title: "Going Performance-First", desc: "Pivoted to data-driven campaigns delivering measurable ROI. Our results started speaking for themselves." },
  { year: "2020", title: "Digital Expansion", desc: "Grew our influencer network to 5,000+ creators globally and launched our digital-first service offering." },
  { year: "2024", title: "Industry Leaders", desc: "500+ campaigns, $50M+ in client revenue, 98% retention rate. We're just getting started." },
];

const values = [
  { icon: Zap, title: "Bold Creativity", desc: "We push boundaries and reject mediocrity in every piece of work we create." },
  { icon: BarChart2, title: "Data Obsession", desc: "Every decision is backed by insights and real performance data, not guesswork." },
  { icon: Handshake, title: "Client Partnership", desc: "We treat your brand as our own, with full commitment and personal investment." },
  { icon: Eye, title: "Transparency", desc: "No smoke and mirrors. Clear communication and honest reporting always." },
  { icon: Lightbulb, title: "Innovation", desc: "Constantly evolving with the latest trends, tools, and platforms in marketing." },
  { icon: Award, title: "Excellence", desc: "We settle for nothing less than extraordinary in everything we do." },
];

const team = [
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_d08b7bfe5b_9a5f36f59ea9749c.png", name: "Alexandra Pierce", role: "CEO & Founder", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" },
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_3be339b203_8047439b51ccb6b3.png", name: "James Okafor", role: "Creative Director", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" },
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_90c216ef02_3aa2da23864e0d32.png", name: "Priya Sharma", role: "Head of Digital", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" },
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_c89d8dfd66_5dedb6bd7df3e6f7.png", name: "Ryan Torres", role: "Performance Lead", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" },
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_f2bded31a8_37af1ec2bfff3876.png", name: "Maya Johnson", role: "Influencer Lead", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg" },
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_c5981a3a5e_d7b3b9b59603abfe.png", name: "David Kim", role: "Brand Strategist", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg" },
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_96493bf8fe_be53dde6a209d5fa.png", name: "Sophie Chen", role: "Analytics Lead", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg" },
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_eafb089a39_330dc879dafa0229.png", name: "Marcus Webb", role: "Video Director", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-9.jpg" },
];

const processSteps = [
  { num: "01", title: "Discovery", desc: "Deep dive into your brand, audience, goals, and competitive landscape." },
  { num: "02", title: "Strategy", desc: "Build a bespoke marketing blueprint tailored to your specific objectives." },
  { num: "03", title: "Creative", desc: "Develop bold, compelling assets that capture attention and inspire action." },
  { num: "04", title: "Launch", desc: "Execute campaigns with precision timing and surgical targeting." },
  { num: "05", title: "Optimize", desc: "Real-time monitoring and data-driven optimization for peak performance." },
  { num: "06", title: "Report", desc: "Transparent reporting with full metrics, learnings, and next steps." },
];

export default function About() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#0B0B0B] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[#D8C3A5]/4 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-6">ABOUT PNP MEDIA</p>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-[#F7F5F2] leading-[0.9] tracking-tight mb-8 max-w-4xl">
            We Are The Agency<br /><span className="text-[#D8C3A5]">Behind</span> Your Growth
          </h1>
          <p className="text-[#F7F5F2]/60 text-xl leading-relaxed max-w-2xl">
            A team of creative strategists, performance marketers, and brand builders obsessed with one thing — your results.
          </p>
        </div>
        <div className="mt-16 overflow-hidden">
          <img
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png"
            alt="PNP Media team"
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover opacity-60"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 lg:py-32 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-4">OUR STORY</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F7F5F2] leading-tight max-w-2xl">
              A Decade of Building<br />Legendary Brands
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-[#D8C3A5]/15 transform lg:-translate-x-1/2 ml-4 lg:ml-0" />
            <div className="space-y-12 lg:space-y-0">
              {timeline.map((item, i) => (
                <div key={i} className={`relative lg:grid lg:grid-cols-2 lg:gap-12 mb-12 lg:mb-16 ${i % 2 === 0 ? "" : "lg:text-right"}`}>
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 top-6 w-3 h-3 rounded-full bg-[#D8C3A5] transform -translate-x-1/2 border-2 border-[#0B0B0B] z-10" />

                  {i % 2 === 0 ? (
                    <>
                      <div className="pl-12 lg:pl-0 lg:pr-16 lg:text-right">
                        <span className="text-[#D8C3A5] font-black text-4xl lg:text-5xl block mb-2">{item.year}</span>
                        <h3 className="text-[#F7F5F2] font-bold text-xl mb-3">{item.title}</h3>
                        <p className="text-[#F7F5F2]/50 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="hidden lg:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden lg:block" />
                      <div className="pl-12 lg:pl-16">
                        <span className="text-[#D8C3A5] font-black text-4xl lg:text-5xl block mb-2">{item.year}</span>
                        <h3 className="text-[#F7F5F2] font-bold text-xl mb-3">{item.title}</h3>
                        <p className="text-[#F7F5F2]/50 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 lg:py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Mission - beige bg */}
            <div className="bg-[#D8C3A5] p-10 lg:p-14">
              <p className="text-[#0B0B0B]/60 text-xs font-bold tracking-widest uppercase mb-6">OUR MISSION</p>
              <p className="text-[#0B0B0B] text-xl lg:text-2xl font-bold leading-relaxed">
                "To empower brands with bold creativity and performance-driven strategies that generate real, measurable growth in an ever-evolving digital landscape."
              </p>
              <div className="w-12 h-px bg-[#0B0B0B]/30 mt-8" />
            </div>
            {/* Vision - dark border */}
            <div className="bg-[#1C1C1C] border border-white/5 p-10 lg:p-14">
              <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-6">OUR VISION</p>
              <p className="text-[#F7F5F2] text-xl lg:text-2xl font-bold leading-relaxed">
                "To be the most trusted creative and performance marketing agency globally, known for transforming brands into cultural icons and market leaders."
              </p>
              <div className="w-12 h-px bg-[#D8C3A5]/30 mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 lg:py-32 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-4">OUR VALUES</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F7F5F2]">The Principles<br />That Drive Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-[#1C1C1C] border border-white/5 p-8 hover:border-[#D8C3A5]/20 transition-colors">
                <div className="w-10 h-10 border border-[#D8C3A5]/30 flex items-center justify-center mb-6">
                  <v.icon size={18} className="text-[#D8C3A5]" />
                </div>
                <h3 className="text-[#F7F5F2] font-bold text-lg mb-3">{v.title}</h3>
                <p className="text-[#F7F5F2]/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section id="team" className="py-20 lg:py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-4">THE TEAM</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F7F5F2]">Meet the Minds<br />Behind the Magic</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {team.map((member, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden aspect-square mb-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0B0B0B]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a href="#" className="w-9 h-9 bg-[#D8C3A5] flex items-center justify-center hover:bg-[#CBB89D] transition-colors">
                      <Linkedin size={15} className="text-[#0B0B0B]" />
                    </a>
                    <a href="#" className="w-9 h-9 bg-[#D8C3A5] flex items-center justify-center hover:bg-[#CBB89D] transition-colors">
                      <Instagram size={15} className="text-[#0B0B0B]" />
                    </a>
                  </div>
                </div>
                <h3 className="text-[#F7F5F2] font-bold text-sm">{member.name}</h3>
                <p className="text-[#D8C3A5] text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section id="process" className="py-20 lg:py-32 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#D8C3A5] text-xs font-bold tracking-widest uppercase mb-4">HOW WE WORK</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F7F5F2]">Our Proven<br />6-Step Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {processSteps.map((step, i) => (
              <div key={i} className="border border-white/5 p-8 relative group hover:bg-[#1C1C1C] transition-colors">
                <div className="text-6xl lg:text-7xl font-black text-transparent mb-6" style={{ WebkitTextStroke: "1px rgba(216,195,165,0.3)" }}>
                  {step.num}
                </div>
                <h3 className="text-[#F7F5F2] font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-[#F7F5F2]/50 text-sm leading-relaxed">{step.desc}</p>
                <div className="absolute bottom-0 left-0 w-0 h-px bg-[#D8C3A5] group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#D8C3A5] text-[#0B0B0B] px-8 py-4 font-black text-sm tracking-wide hover:bg-[#CBB89D] transition-colors group">
              Start Your Journey <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}