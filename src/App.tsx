import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';
import { PrivacyPage } from './pages/PrivacyPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App bg-[#0D0D0E] min-h-screen">
        <NavBar/>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={
            <ContactPage 
              title="Contact Me"
              subtitle="Let's get in touch!"
            />
          } />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>

        <Footer/>
        
      </div>
    </BrowserRouter>
  );
}