import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';
import { PrivacyPage } from './pages/PrivacyPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SameHereLayout } from './pages/samehere/SameHereLayout';
import { SameHereHome } from './pages/samehere/SameHereHome';
import { SameHereTerms } from './pages/samehere/SameHereTerms';
import { SameHerePrivacy } from './pages/samehere/SameHerePrivacy';

/** The portfolio's dark chrome. App pages (e.g. /samehere) bring their own. */
const SiteLayout = () => (
  <div className="App bg-[#0D0D0E] min-h-screen">
    <NavBar />
    <Outlet />
    <Footer />
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={
            <ContactPage
              title="Contact Me"
              subtitle="Let's get in touch!"
            />
          } />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          {/* Anything that matches no route above (and isn't under /samehere) */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/*
          Same Here. Route matching is case-insensitive, so /sameHere/terms and
          /sameHere/privacy — the URLs hard-coded in the app's AppLinks.swift —
          resolve here as well as the lowercase versions.
        */}
        <Route path="/samehere" element={<SameHereLayout />}>
          <Route index element={<SameHereHome />} />
          <Route path="terms" element={<SameHereTerms />} />
          <Route path="privacy" element={<SameHerePrivacy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
