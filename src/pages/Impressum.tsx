import { Helmet } from "react-helmet-async";

const Impressum = () => {
  return (
    <>
      <Helmet>
        <title>Impressum – hey :) Kieferorthopädie Pankow</title>
        <meta name="description" content="Impressum der Fachpraxis für Kieferorthopädie hey :) in Berlin Pankow." />
      </Helmet>

      <section className="bg-secondary py-8 md:py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Impressum</h1>
        </div>
      </section>

      <section className="container py-12 md:py-16 max-w-3xl">
        <div className="space-y-8 text-foreground">
          {/* Angaben */}
          <div>
            <h2 className="text-xl font-bold mb-3">Angaben gemäß § 5 DDG</h2>
            <p className="font-semibold">hey :) – Kieferorthopädie<br />Dr. Julie Charlotte Angrick</p>
            <p className="mt-2">
              Pastor-Niemöller-Platz 6a<br />
              13156 Berlin
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h2 className="text-xl font-bold mb-3">Kontakt</h2>
            <p>Telefon: <span className="italic text-muted-foreground">[bitte ergänzen]</span></p>
            <p>E‑Mail: <a href="mailto:info@hey-kieferorthopaedie.de" className="text-primary hover:underline">info@hey-kieferorthopaedie.de</a></p>
            <p>Website: <a href="https://www.hey-kieferorthopaedie.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.hey-kieferorthopaedie.de</a></p>
          </div>

          {/* Inhaberin */}
          <div>
            <h2 className="text-xl font-bold mb-3">Inhaberin</h2>
            <p>Dr. Julie Charlotte Angrick</p>
          </div>

          {/* Berufsbezeichnung */}
          <div>
            <h2 className="text-xl font-bold mb-3">Berufsbezeichnung</h2>
            <p>Zahnärztin, Fachzahnärztin für Kieferorthopädie<br />(verliehen in Deutschland)</p>
          </div>

          {/* Zuständige Kammer */}
          <div>
            <h2 className="text-xl font-bold mb-3">Zuständige Kammer</h2>
            <p>
              Zahnärztekammer Berlin<br />
              Stallstraße 1<br />
              10585 Berlin<br />
              <a href="https://www.zaek-berlin.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.zaek-berlin.de</a>
            </p>
          </div>

          {/* Aufsichtsbehörde */}
          <div>
            <h2 className="text-xl font-bold mb-3">Aufsichtsbehörde</h2>
            <p>
              Landesamt für Gesundheit und Soziales Berlin (LAGeSo)<br />
              Fehrbelliner Platz 1<br />
              10707 Berlin
            </p>
          </div>

          {/* Berufsrechtliche Regelungen */}
          <div>
            <h2 className="text-xl font-bold mb-3">Berufsrechtliche Regelungen</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Zahnheilkundegesetz (ZHG)</li>
              <li>Berliner Heilberufsgesetz</li>
              <li>Berufsordnung der Zahnärztekammer Berlin</li>
              <li>Gebührenordnung für Zahnärzte (GOZ)</li>
            </ul>
            <p className="mt-3">
              Die berufsrechtlichen Regelungen sind einsehbar unter:{" "}
              <a href="https://www.zaek-berlin.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.zaek-berlin.de</a>
            </p>
          </div>

          {/* Verantwortlich */}
          <div>
            <h2 className="text-xl font-bold mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              Dr. Julie Charlotte Angrick<br />
              Pastor-Niemöller-Platz 6a<br />
              13156 Berlin
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Impressum;
