import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

export default function PageLayout({ children, showFooter = true }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F7F5F2] flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
}