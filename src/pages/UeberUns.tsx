import { Stethoscope } from "lucide-react";

const UeberUns = () => {
  return (
    <>
      <section className="bg-secondary py-8 md:py-12" aria-label="Über uns">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
            Über <span className="text-primary">uns</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Lernen Sie unser Team kennen.
          </p>
        </div>
      </section>

      {/* Dr. Angrick */}
      <section className="py-16" aria-label="Dr. Julie Charlotte Angrick">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-1">
              Dr. Julie Charlotte Angrick
            </h2>
            <p className="text-muted-foreground font-bold mb-6">
              Fachzahnärztin für Kieferorthopädie · Master of Science Kieferorthopädie
            </p>
            <div className="bg-secondary rounded-2xl shadow-xl max-w-md mx-auto lg:mx-0 flex items-center justify-center p-12">
              <Stethoscope className="text-primary" size={120} />
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-extrabold"><span className="text-primary">Hey :)</span></h2>
              <p>
                schön, dass ich mich vorstellen darf. Ich bin mit Leib und Seele Kieferorthopädin 
                und liebe meinen Beruf. Für mich steht jeder Mensch als Ganzes im Mittelpunkt mit 
                individuellen Bedürfnissen, persönlichen Anliegen und unterschiedlichen Lebenssituationen. 
                Mein Ziel ist es, dass sich alle, die zu mir kommen, sicher, verstanden und wirklich wohlfühlen.
              </p>
              <p>
                Neben meiner Arbeit liebe ich Kunst und Design. An Wochenenden besuche ich gerne 
                Ausstellungen oder Kulturveranstaltungen, lasse mich inspirieren und entdecke neue 
                Perspektiven. Ich lebe in Pankow, gemeinsam mit meinem Mann und unserer wunderbaren 
                Tochter und schätze unseren Kiez mit all seinen Facetten sehr.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">Vita</h3>
              <ul className="space-y-1.5 text-muted-foreground text-sm leading-relaxed list-disc list-inside">
                <li>geboren in Heidelberg</li>
                <li>2008–2014: Studium der Zahnmedizin an der MHH Hannover und Charité Berlin</li>
                <li>2014 Staatsexamen</li>
                <li>2016 Curriculum Kinderzahnheilkunde</li>
                <li>2017–2020 Master of Science Kieferorthopädie, DUK Krems</li>
                <li>2021 Promotion „magna cum laude" an der Charité Berlin</li>
                <li>2020–2023 Weiterbildung zur Fachzahnärztin, Jagiellonen-Universität Krakau und Fachpraxis in Berlin</li>
                <li>2023–2026 Leitung MVZ Ringcenter Dr. Dörfer Kieferorthopädie in Friedrichshain</li>
                <li>2026 Gründung von hey :)</li>
              </ul>
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
