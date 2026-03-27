import drAngrick from "@/assets/dr-angrick.jpg";

const UeberUns = () => {
  return (
    <>
      <section className="bg-accent py-16 md:py-24" aria-label="Über uns">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
            Über <span className="text-primary">uns</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Lernen Sie unser Team kennen – mit Leidenschaft für schöne Zähne und gesunde Kiefer.
          </p>
        </div>
      </section>

      {/* Dr. Angrick */}
      <section className="py-16" aria-label="Dr. Julie Charlotte Angrick">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto lg:mx-0">
            <img
              src={drAngrick}
              alt="Dr. Julie Charlotte Angrick – Fachzahnärztin für Kieferorthopädie"
              width={800}
              height={1000}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold">
              Dr. Julie Charlotte <span className="text-primary">Angrick</span>
            </h2>
            <p className="text-primary font-semibold">
              Master of Science Kieferorthopädie · Fachzahnärztin für Kieferorthopädie
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Dr. Julie Charlotte Angrick ist Fachzahnärztin für Kieferorthopädie und 
                Master of Science in Kieferorthopädie. Mit großer Leidenschaft und Fachkompetenz 
                widmet sie sich der Korrektur von Zahnfehlstellungen bei Kindern, Jugendlichen und Erwachsenen.
              </p>
              <p>
                Nach ihrem Studium der Zahnmedizin und der Weiterbildung zur Fachzahnärztin für 
                Kieferorthopädie hat sie umfangreiche Erfahrung in der Behandlung mit festen und 
                losen Zahnspangen sowie modernen Aligner-Systemen wie Invisalign gesammelt.
              </p>
              <p>
                Ihr ganzheitlicher Ansatz und ihre einfühlsame Art machen den Besuch in der Praxis 
                für Patienten jeden Alters zu einer positiven Erfahrung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary py-16" aria-label="Unser Team">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-center">
            Unser <span className="text-primary">Team</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Unser engagiertes Team freut sich darauf, Sie in unserer Praxis in Berlin Pankow 
            Niederschönhausen willkommen zu heißen. Gemeinsam sorgen wir für Ihr schönstes Lächeln.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["Praxismanagement", "Behandlungsassistenz", "Empfang & Beratung"].map((role) => (
              <div key={role} className="bg-card rounded-2xl p-8 text-center shadow-sm">
                <div className="w-24 h-24 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center text-3xl">
                  😊
                </div>
                <h3 className="font-bold text-lg">{role}</h3>
                <p className="text-muted-foreground text-sm mt-2">Wird bald vorgestellt</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default UeberUns;
