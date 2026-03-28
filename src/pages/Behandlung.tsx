import { Link } from "react-router-dom";
import { Euro } from "lucide-react";
import kinderImg from "@/assets/kinder-zahnspange.jpg";
import jugendlicheImg from "@/assets/jugendliche-zahnspange.jpg";
import erwachseneImg from "@/assets/erwachsene-zahnspange.jpg";

const treatments = [
  {
    title: "Kinder",
    image: kinderImg,
    imagePosition: "center 30%",
    sections: [
      {
        content: <>Eine kieferorthopädische Behandlung kann bereits ab dem Alter von vier Jahren im Rahmen einer sogenannten Frühbehandlung sinnvoll sein. <span className="font-bold">In diesem jungen Alter geht es vor allem darum, das Wachstum des Gesichtes und der Zähne in die richtige Richtung zu lenken.</span> Dabei betrachten wir nicht nur die Zahnstellung, sondern auch wichtige funktionelle Aspekte wie Schlucken, Zungenlage und Körperhaltung.{"\n\n"}In den meisten Fällen kommt eine lose Zahnspange zum Einsatz, gelegentlich auch eine festsitzende Apparatur im Oberkiefer. <span className="font-bold">Ziel ist es, frühzeitig Einfluss auf die Entwicklung zu nehmen und spätere, umfangreichere Behandlungen zu vermeiden oder zu erleichtern.</span></>,
      },
    ],
    color: "bg-secondary",
  },
  {
    image: jugendlicheImg,
    imagePosition: "center 50%",
    title: "Jugendliche",
    sections: [
      {
        content: <>In diesem Alter sprechen wir von einer Hauptbehandlung. <span className="font-bold">Sie ist wie eine gemeinsame Reise, die in mehreren Schritten verläuft.</span> Häufig beginnt sie mit einer losen Zahnspange, um Platz zu schaffen, das Wachstum zu lenken oder erste Korrekturen vorzunehmen.{"\n\n"}Sobald alle bleibenden Zähne durchgebrochen sind, kann die Behandlung mit einer festen Zahnspange fortgesetzt werden. Sind sowohl die Zahnstellung als auch die Bisslage korrigiert, folgt die Retentionsphase. In dieser Phase stabilisieren wir das erreichte Ergebnis, damit das schöne Lächeln langfristig erhalten bleibt.{"\n\n"}<span className="font-bold">Eine Hauptbehandlung bei Jugendlichen ist selbstverständlich auch mit unsichtbaren, herausnehmbaren Alignern möglich.</span> Eine moderne, ästhetische Alternative zur klassischen festen Zahnspange.</>,
      },
    ],
    color: "bg-secondary",
  },
  {
    image: erwachseneImg,
    imagePosition: "center 30%",
    title: "Erwachsene",
    sections: [
      {
        content: <>Kieferorthopädie ist in jedem Alter möglich, egal ob es um eine kleine Korrektur der Schneidezähne oder um eine kombiniert kieferorthopädisch kieferchirurgische Bisslageumstellung geht. <span className="font-bold">Entscheidend ist, dass wir gemeinsam ein Ziel definieren und darauf aufbauend eine passende, individuelle Therapie planen.</span></>,
      },
    ],
    color: "bg-secondary",
  },
  {
    icon: Euro,
    title: "Kosten",
    sections: [
      {
        subtitle: "Gesetzlich Versicherte",
        content: <><span className="font-bold">Die gesetzlichen Krankenkassen übernehmen bei Kindern und Jugendlichen bis zum 18. Geburtstag eine kieferorthopädische Behandlung, sofern ein bestimmter Schweregrad vorliegt.</span> Es gilt die sogenannte 80/20‑Regelung:</>,
        list: [
          "80 % der Kosten übernimmt die Krankenkasse sofort.",
          "20 % zahlen die Eltern zunächst selbst.",
        ],
        after: <>Nach erfolgreichem Abschluss der Behandlung werden diese 20 % vollständig zurückerstattet.{"\n\n"}Bei Erwachsenen übernehmen die Krankenkassen die Kosten, wenn eine schwerwiegende Bissfehlstellung vorliegt, die eine <span className="font-bold">kombiniert kieferorthopädisch‑kieferchirurgische Therapie</span> notwendig macht.{"\n\n"}<span className="font-bold">Wenn zusätzlicher Komfort gewünscht wird, zum Beispiel durchsichtige Brackets, professionelle Zahnreinigungen oder andere Extras, entstehen private Zusatzkosten.</span> Diese besprechen wir im Voraus transparent und halten sie vertraglich fest. Auf Wunsch ist eine Ratenzahlung möglich.</>,
      },
      {
        subtitle: "Privat Versicherte",
        content: `Ob eine Behandlung bei Ihnen oder Ihrem Kind übernommen wird, hängt vom jeweiligen Tarif ab. Gerne prüfen wir das gemeinsam und unterstützen Sie bei der Klärung.`,
      },
    ],
    color: "bg-accent",
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
            Von der losen Zahnspange bis zum unsichtbaren Aligner: Wir bieten das gesamte Spektrum 
            moderner Kieferorthopädie. <span className="font-bold text-muted-foreground">Jeder Erstberatungstermin ist kostenlos, für Kinder, 
            Jugendliche und Erwachsene gleichermaßen.</span>
          </p>
        </div>
      </section>

      <section className="py-16" aria-label="Behandlungsübersicht">
        <div className="container flex flex-col gap-6">
          {treatments.map((t) => (
            <article
              key={t.title}
              className={`${t.color} rounded-2xl p-8 md:p-10`}
            >
              {t.image ? (
                <div className="mb-6">
                  <img
                    src={t.image}
                    alt={t.title}
                    className="w-full h-64 object-cover rounded-2xl"
                    style={{ filter: "saturate(0.85) brightness(1.05)", objectPosition: t.imagePosition || "center" }}
                  />
                  <h2 className="text-2xl md:text-3xl font-bold mt-5">{t.title}</h2>
                </div>
              ) : (
                <div className="flex items-center gap-4 mb-6">
                  {t.icon && <t.icon className="text-primary shrink-0" size={40} />}
                  <h2 className="text-2xl md:text-3xl font-bold">{t.title}</h2>
                </div>
              )}
              {t.sections.map((section, i) => (
                <div key={i} className={i > 0 ? "mt-6" : ""}>
                  {section.subtitle && (
                    <h3 className="text-lg font-bold mb-2">{section.subtitle}</h3>
                  )}
                  {section.content && (
                    <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                      {section.content}
                    </p>
                  )}
                  {section.list && (
                    <ul className="list-disc list-inside text-muted-foreground my-3 space-y-1">
                      {section.list.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.after && (
                    <p className="text-muted-foreground whitespace-pre-line leading-relaxed mt-3">
                      {section.after}
                    </p>
                  )}
                </div>
              ))}
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
