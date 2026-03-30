import { Link } from "react-router-dom";
import { ArrowRight, Star, Heart, Shield } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";
import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "hey :) – Fachpraxis für Kieferorthopädie",
            description: "Kieferorthopädische Fachpraxis in Berlin Pankow Niederschönhausen. Dr. Julie Charlotte Angrick – Fachzahnärztin für Kieferorthopädie.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Berlin",
              addressRegion: "Pankow, Niederschönhausen",
            },
            medicalSpecialty: "Orthodontics",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden" aria-label="Willkommen">
        <div className="bg-background">
          <div className="container py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <img src={logo} alt="hey :) Kieferorthopädie Pankow" className="h-20 md:h-28 w-auto" />
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-foreground">
                Fachpraxis für <span className="text-primary">Kieferorthopädie</span> in Pankow
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Herzlich willkommen bei hey :) – Ihre Fachpraxis für Kieferorthopädie in Pankow. 
                Wir bieten das komplette Spektrum der Kieferorthopädie für ein perfektes Lächeln.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.doctolib.de/kieferorthopadie/berlin/julie-angrick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doctolib-btn"
                  aria-label="Termin buchen über Doctolib"
                >
                  Termin buchen <ArrowRight size={20} />
                </a>
                <Link
                  to="/behandlung"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Unsere Behandlungen
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Lächelnde Kinder mit schönen Zähnen"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24" aria-label="Unsere Vorteile">
        <div className="container">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-12">
            Warum <span className="text-primary">hey :)</span> Kieferorthopädie?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Fachkompetenz",
                desc: "Master of Science Kieferorthopädie und Fachzahnärztin. Höchste Qualifikation für Ihre Behandlung.",
                bg: "bg-secondary",
              },
              {
                icon: Heart,
                title: "Ganzheitliches Konzept",
                desc: "Individuelle Behandlungspläne für Kinder, Jugendliche und Erwachsene. Mit Herz und Leidenschaft.",
                bg: "bg-secondary",
              },
              {
                icon: Shield,
                title: "Unsichtbare Zahnspangen",
                desc: "Modernste Methoden für ein strahlendes Lächeln. Wir bieten unsichtbare Zahnspangen und digitale Behandlungsplanung für maximalen Komfort.",
                bg: "bg-secondary",
              },
            ].map((item) => (
              <article
                key={item.title}
                className={`${item.bg} rounded-2xl p-8 transition-transform hover:scale-105`}
              >
                <item.icon className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16" aria-label="Termin vereinbaren">
        <div className="container text-center text-primary-foreground space-y-6">
          <h2 className="text-2xl md:text-4xl font-extrabold">
            Bereit für Ihr schönstes Lächeln?
          </h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Vereinbaren Sie jetzt Ihren Termin – online über Doctolib oder rufen Sie uns an.
          </p>
          <a
            href="https://www.doctolib.de"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-card text-primary font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            aria-label="Jetzt Termin buchen über Doctolib"
          >
            Jetzt Termin buchen <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </>
  );
};

export default Index;
