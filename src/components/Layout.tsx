import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone, MapPin, TrainFront } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/praxis", label: "Praxis" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/behandlung", label: "Behandlung" },
  { to: "/termin", label: "Termin buchen" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Zum Inhalt springen
      </a>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm shadow-sm" role="banner">
        <div className="container flex items-center justify-between py-3">
          <Link to="/" aria-label="Startseite">
            <img src={logo} alt="hey :) Kieferorthopädie Pankow Logo" className="h-14 md:h-16 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Hauptnavigation">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  location.pathname === item.to
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden border-t bg-card px-4 pb-4" role="navigation" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg font-semibold ${
                  location.pathname === item.to
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Main */}
      <main id="main-content" className="flex-1" role="main">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12" role="contentinfo">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="hey :) Logo" className="h-12 mb-4" />
            <p className="text-sm opacity-80">
              Fachpraxis für Kieferorthopädie in Berlin Pankow Niederschönhausen
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-lg">Kontakt</h3>
            <div className="space-y-2 text-sm opacity-80">
              <p className="flex items-center gap-2"><Phone size={14} /> Telefon: folgt</p>
              <a
                href="https://www.google.com/maps/place/Pastor-Niem%C3%B6ller-Platz+6A,+13156+Berlin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <MapPin size={14} /> Pastor-Niemöller-Platz 6A, 13156 Berlin
              </a>
              <p className="flex items-center gap-2 text-sm opacity-80"><TrainFront size={14} /> Haltestelle M1 Pastor-Niemöller-Platz · 50 m</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-lg">Rechtliches</h3>
            <div className="space-y-2 text-sm opacity-80">
              <p><Link to="/impressum" className="hover:underline">Impressum</Link></p>
              <p><Link to="/datenschutz" className="hover:underline">Datenschutz</Link></p>
            </div>
          </div>
          <div className="md:col-span-3">
            <a
              href="https://www.google.com/maps/place/Pastor-Niem%C3%B6ller-Platz+6,+13156+Berlin"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden hover:opacity-90 transition-opacity"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2425.5!2d13.3833!3d52.5833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8527b1c8b1b1b%3A0x0!2sPastor-Niem%C3%B6ller-Platz%206%2C%2013156%20Berlin!5e0!3m2!1sde!2sde!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort hey :) Kieferorthopädie Pankow"
              />
            </a>
          </div>
        </div>
        <div className="container mt-8 pt-4 border-t border-background/20 text-sm opacity-60 text-center">
          © {new Date().getFullYear()} hey :) – Fachpraxis für Kieferorthopädie. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
