import { useState } from "react";

export default function Navbar({ onNavigate, loggedIn }) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#home" className="navbar-brand" onClick={(e) => { e.preventDefault(); onNavigate?.("home"); }}>Eis</a>
        <button className="navbar-toggle" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <ul className={`navbar-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li>
            <button
              className="nav-auth-btn btn btn-primary"
              style={{ padding: "6px 18px", fontSize: "0.85rem" }}
              onClick={() => { onNavigate?.(loggedIn ? "dashboard" : "auth"); setOpen(false); }}
            >
              {loggedIn ? "Dashboard" : "Log In"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
