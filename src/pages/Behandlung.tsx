import { Link } from "react-router-dom";
import { Baby, SmilePlus, User, Eye, Users } from "lucide-react";

const treatments = [
  {
    icon: Baby,
    title: "Braucht mein Kind eine Zahnspange?",
    desc: "Erste Anzeichen erkennen – wann ist der richtige Zeitpunkt für einen Besuch beim Kieferorthopäden?",
    color: "bg-secondary",
  },
  {
    icon: SmilePlus,
    title: "Kieferorthopädie für Kinder",
    desc: "Frühe Behandlung für gesunde Zahnentwicklung. Lose und feste Zahnspangen als Kassenleistung.",
    color: "bg-accent",
  },
  {
    icon: Users,
    title: "Kieferorthopädie für Jugendliche",
    desc: "Moderne Behandlungsmethoden für Teenager – diskret und effektiv gegen schiefe Zähne.",
    color: "bg-secondary",
  },
  {
    icon: User,
    title: "Kieferorthopädie für Erwachsene",
    desc: "Auch im Erwachsenenalter können Zahnfehlstellungen erfolgreich korrigiert werden.",
    color: "bg-accent",
  },
  {
    icon: Eye,
    title: "Unsichtbare Zahnspange",
    desc: "Aligner und Invisalign – die transparente Alternative zur klassischen Zahnspange. Nahezu unsichtbar.",
    color: "bg-secondary",
  },
];

const Behandlung = () => {
  return (
    <>
      <section className="bg-secondary py-16 md:py-24" aria-label="Behandlungen">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
            Unsere <span className="text-primary">Behandlungen</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Von der losen Zahnspange bis zum unsichtbaren Aligner: wir bieten das volle Spektrum 
            moderner Kieferorthopädie. Jeder Erstberatungstermin ist kostenlos, egal ob Kind, 
            Jugendlicher oder Erwachsener.
          </p>
        </div>
      </section>

      <section className="py-16" aria-label="Behandlungsübersicht">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t) => (
            <article
              key={t.title}
              className={`${t.color} rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer`}
            >
              <t.icon className="text-primary mb-4" size={48} />
              <h2 className="text-xl font-bold mb-3">{t.title}</h2>
              <p className="text-muted-foreground">{t.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary py-16" aria-label="Termin CTA">
        <div className="container text-center text-primary-foreground space-y-6">
          <h2 className="text-2xl md:text-4xl font-extrabold">Welche Behandlung passt zu Ihnen?</h2>
          <p className="text-lg max-w-xl mx-auto opacity-90">
            Vereinbaren Sie eine Beratung – wir finden gemeinsam die optimale Lösung.
          </p>
          <Link
            to="/termin"
            className="inline-flex items-center gap-2 bg-card text-primary font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Termin vereinbaren
          </Link>
        </div>
      </section>
    </>
  );
};

export default Behandlung;
