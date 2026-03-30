import { Helmet } from "react-helmet-async";

const Datenschutz = () => {
  return (
    <>
      <Helmet>
        <title>Datenschutz – hey :) Kieferorthopädie Pankow</title>
        <meta name="description" content="Datenschutzerklärung der Fachpraxis für Kieferorthopädie hey :) in Berlin Pankow." />
      </Helmet>

      <section className="bg-secondary py-8 md:py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Datenschutzerklärung</h1>
        </div>
      </section>

      <section className="container py-12 md:py-16 max-w-3xl">
        <div className="space-y-8 text-foreground leading-relaxed">
          <p>
            Wir freuen uns über Ihr Interesse an unserer kieferorthopädischen Praxis. Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir Sie gemäß Art. 13, 14 DSGVO über die Verarbeitung personenbezogener Daten auf unserer Website.
          </p>

          {/* 1 */}
          <div>
            <h2 className="text-xl font-bold mb-3">1. Verantwortliche Stelle</h2>
            <p>
              hey :) – Kieferorthopädie<br />
              Dr. Julie Charlotte Angrick<br />
              Pastor-Niemöller-Platz 6a<br />
              13156 Berlin<br />
              E‑Mail: <a href="mailto:info@hey-kieferorthopaedie.de" className="text-primary hover:underline">info@hey-kieferorthopaedie.de</a>
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl font-bold mb-3">2. Datenschutzbeauftragte</h2>
            <p>
              Dr. Julie Charlotte Angrick<br />
              Pastor-Niemöller-Platz 6a<br />
              13156 Berlin<br />
              E‑Mail: <a href="mailto:info@hey-kieferorthopaedie.de" className="text-primary hover:underline">info@hey-kieferorthopaedie.de</a>
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl font-bold mb-3">3. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>Wir verarbeiten personenbezogene Daten, wenn Sie unsere Website besuchen, unser Kontaktformular nutzen oder einen Termin anfragen.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">Verarbeitete Datenkategorien</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Bestandsdaten (Name, Kontaktdaten)</li>
              <li>Kommunikationsdaten (E‑Mail, Telefon)</li>
              <li>Gesundheitsdaten (nur im Rahmen der Behandlung, nicht über die Website)</li>
              <li>Nutzungsdaten (Server-Logfiles, IP-Adresse, Browserdaten)</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl font-bold mb-3">4. Zwecke und Rechtsgrundlagen der Verarbeitung</h2>
            <ul className="space-y-3">
              <li><strong>Kontaktaufnahme / Terminanfragen</strong><br />Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)</li>
              <li><strong>Behandlungsvertrag / medizinische Versorgung</strong><br />Art. 9 Abs. 2 lit. h DSGVO (Gesundheitsdaten)</li>
              <li><strong>Websitebetrieb &amp; Sicherheit</strong><br />Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</li>
              <li><strong>Einwilligung</strong> für optionale Dienste (z. B. Tracking)<br />Art. 6 Abs. 1 lit. a DSGVO</li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl font-bold mb-3">5. Hosting</h2>
            <p>Unsere Website wird bei einem externen Dienstleister gehostet. Dabei werden Server-Logfiles verarbeitet:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit</li>
              <li>Browsertyp und -version</li>
              <li>Betriebssystem</li>
              <li>Referrer-URL</li>
            </ul>
            <p className="mt-2">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-xl font-bold mb-3">6. Kontaktformular / E‑Mail</h2>
            <p>Wenn Sie uns kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage.<br />Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-xl font-bold mb-3">7. Terminbuchung</h2>
            <p>Für die Online-Terminbuchung nutzen wir den Dienst Doctolib. Es gelten die Datenschutzbestimmungen des Anbieters.</p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-xl font-bold mb-3">8. Cookies &amp; Tracking</h2>
            <p>Unsere Website verwendet nur technisch notwendige Cookies. Tracking- oder Marketing-Cookies werden nicht eingesetzt.</p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-xl font-bold mb-3">9. Auftragsverarbeitung</h2>
            <p>Mit allen Dienstleistern bestehen Auftragsverarbeitungsverträge, u. a. für:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Hosting</li>
              <li>Praxissoftware (teemer)</li>
              <li>Nelly (digitale Formulare)</li>
              <li>Onyx Ceph</li>
              <li>Medit Scanner-Cloud</li>
            </ul>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-xl font-bold mb-3">10. Weitergabe von Daten</h2>
            <p>Eine Weitergabe erfolgt nur, wenn gesetzlich erlaubt oder zur Behandlung erforderlich.</p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-xl font-bold mb-3">11. Speicherdauer</h2>
            <p>Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist. Patientenakten: mindestens 10 Jahre gemäß § 630f BGB.</p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="text-xl font-bold mb-3">12. Rechte der betroffenen Personen</h2>
            <p className="mb-2">Sie haben folgende Rechte:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Auskunft</li>
              <li>Berichtigung</li>
              <li>Löschung</li>
              <li>Einschränkung</li>
              <li>Widerspruch</li>
              <li>Datenübertragbarkeit</li>
              <li>Widerruf erteilter Einwilligungen</li>
              <li>Beschwerde bei der Berliner Beauftragten für Datenschutz</li>
            </ul>
          </div>

          {/* 13 */}
          <div>
            <h2 className="text-xl font-bold mb-3">13. Datensicherheit</h2>
            <p>Wir verwenden technische und organisatorische Maßnahmen (z. B. TLS-Verschlüsselung), um Ihre Daten zu schützen.</p>
          </div>

          {/* 14 */}
          <div>
            <h2 className="text-xl font-bold mb-3">14. Änderungen dieser Datenschutzerklärung</h2>
            <p>Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Datenschutz;
