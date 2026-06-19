import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Portfolio from "./pages/Portfolio";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Blog from "./pages/Blog";
import ArticleDetail from "./pages/ArticleDetail";
import Contact from "./pages/Contact";
import InquirySubmitted from "./pages/InquirySubmitted";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<CaseStudyDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<ArticleDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inquiry-submitted" element={<InquirySubmitted />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}