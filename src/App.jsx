import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Certifications from "./components/Certifications.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Auth from "./components/Auth.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { useAuth } from "./hooks/useAuth.js";

export default function App() {
  const { user, loading, signup, login, logout } = useAuth();
  const [view, setView] = useState("home");

  const handleAuth = (mode, username, password) => {
    if (mode === "signup") return signup(username, password);
    return login(username, password);
  };

  if (loading) return null;

  // If logged in, show dashboard (covers both direct nav and post-auth)
  if (user && (view === "dashboard" || view === "auth")) {
    return (
      <>
        <Navbar onNavigate={setView} loggedIn={!!user} />
        <div className="container" style={{ paddingTop: "100px" }}>
          <Dashboard user={user} onLogout={logout} />
        </div>
        <Footer />
      </>
    );
  }

  // If viewing auth page
  if (view === "auth") {
    return (
      <>
        <Navbar onNavigate={setView} loggedIn={!!user} />
        <div className="container" style={{ paddingTop: "100px" }}>
          <Auth onAuth={handleAuth} />
        </div>
        <Footer />
      </>
    );
  }

  // Default: portfolio home
  return (
    <>
      <Navbar onNavigate={setView} loggedIn={!!user} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
