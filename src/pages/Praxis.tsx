import baustelleImg from "@/assets/praxis-baustelle.jpg";

const Praxis = () => {
  return (
    <>
      <section className="bg-secondary py-16 md:py-24" aria-label="Unsere Praxis">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
            Unsere <span className="text-primary">Praxis</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            Moderne Kieferorthopädie in angenehmer Atmosphäre – mitten in Berlin Pankow Niederschönhausen.
          </p>
        </div>
      </section>

      <section className="py-16" aria-label="Praxis Vorstellung">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={praxisImage}
              alt="Moderne Behandlungsräume der Kieferorthopädie Praxis in Pankow"
              width={1920}
              height={1080}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold">
              <span className="text-primary">Hey :)</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              In unserer Fachpraxis für Kieferorthopädie verbinden wir modernste Behandlungsmethoden 
              mit einer herzlichen, persönlichen Atmosphäre. Wir nehmen uns Zeit für Dich und Deine Familie, 
              denn ein schönes Lächeln beginnt mit Vertrauen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Unser ganzheitliches Konzept umfasst die komplette kieferorthopädische Versorgung – 
              von der Erstberatung über die individuelle Behandlungsplanung bis hin zur Nachsorge. 
              Ob Behandlung im Kindes- und Jugendalter, eine kleine ästhetische Korrektur oder eine 
              umfassende Bisslageeinstellung bei Erwachsenen: Wir finden gemeinsam die beste Lösung.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Bei Kindern und Jugendlichen legen wir besonderen Wert auf eine umfassende Diagnostik. 
              Dafür nutzen wir modernste Technik und arbeiten eng mit Logopäd:innen, Physiotherapeut:innen 
              und Osteopath:innen zusammen.
            </p>
            <p className="text-muted-foreground leading-relaxed font-semibold">
              Den heranwachsenden Menschen von Kopf bis Fuß zu verstehen, ist unser persönlicher Anspruch.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                "Abdruckfreie Praxis",
                "Unsichtbare Zahnspange",
                "Kinder und Jugendliche",
                "Erwachsene",
              ].map((item) => (
                <div key={item} className="bg-accent/50 rounded-xl p-4 text-center font-semibold text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Praxis;
