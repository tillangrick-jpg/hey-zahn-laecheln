import { useState } from "react";
import { ArrowRight, Phone, MapPin, Clock } from "lucide-react";

const Termin = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefon: "",
    nachricht: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-secondary py-8 md:py-12" aria-label="Termin buchen">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
            Termin <span className="text-primary">buchen</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Buchen Sie Ihren Termin direkt online über Doctolib oder kontaktieren Sie uns per Formular.
          </p>
        </div>
      </section>

      <section className="py-16" aria-label="Online Terminbuchung">
        <div className="container">
          {/* Doctolib prominent */}
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-primary-foreground text-center mb-16 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Online-Termin über Doctolib</h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
              Am schnellsten geht es über Doctolib – wählen Sie einfach Ihren Wunschtermin.
            </p>
            <a
              href="https://www.doctolib.de/kieferorthopadie/berlin/julie-angrick"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-card text-primary font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
              aria-label="Termin über Doctolib buchen"
            >
              Auf Doctolib buchen <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-extrabold mb-6">Kontaktformular</h2>
              {submitted ? (
                <div className="bg-accent rounded-2xl p-8 text-center">
                  <p className="text-xl font-bold mb-2">Vielen Dank! 😊</p>
                  <p className="text-muted-foreground">Wir melden uns schnellstmöglich bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-1">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      maxLength={100}
                      className="w-full rounded-xl border bg-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-1">
                      E-Mail *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      maxLength={255}
                      className="w-full rounded-xl border bg-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="telefon" className="block text-sm font-semibold mb-1">
                      Telefon
                    </label>
                    <input
                      id="telefon"
                      type="tel"
                      maxLength={30}
                      className="w-full rounded-xl border bg-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.telefon}
                      onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="nachricht" className="block text-sm font-semibold mb-1">
                      Nachricht *
                    </label>
                    <textarea
                      id="nachricht"
                      required
                      maxLength={1000}
                      rows={4}
                      className="w-full rounded-xl border bg-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      value={formData.nachricht}
                      onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                    />
                  </div>
                  <button
                    type="submit"
                    className="doctolib-btn w-full justify-center"
                  >
                    Nachricht senden <ArrowRight size={20} />
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold mb-6">So finden Sie uns</h2>
              <div className="bg-secondary rounded-2xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-muted-foreground">Pastor-Niemöller-Platz 6A<br />13156 Berlin Pankow, Niederschönhausen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Telefon</p>
                    <p className="text-muted-foreground">folgt</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Sprechzeiten</p>
                    <div className="text-muted-foreground space-y-0.5">
                      <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-0.5">
                        <span>Mo</span><span>9:00–19:00</span>
                        <span>Di</span><span>9:00–19:00</span>
                        <span>Mi</span><span>9:00–19:00</span>
                        <span>Do</span><span>9:00–19:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Termin;
