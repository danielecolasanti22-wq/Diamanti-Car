import { motion } from 'motion/react';
import { Search, Globe, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: "personal",
      title: "Ricerca Su Misura",
      subtitle: "Full Outsourcing",
      desc: "Il nostro servizio core. Ci occupiamo di tutto noi, dalla ricerca alla consegna door-to-door. Ideale per chi vuole la massima sicurezza senza perdere tempo.",
      features: [
        "Accesso a canali B2B e aste",
        "Perizia tecnica certificata",
        "Negoziazione prezzo broker-to-dealer",
        "Gestione burocrazia e import",
        "Trasporto assicurato"
      ],
      icon: <Search size={32} />,
      accent: "accent",
      price: "Commissione fissa"
    },
    {
      id: "import",
      title: "Premium Import",
      subtitle: "Focus Germania",
      desc: "Specializzati nel mercato tedesco (BMW, Audi, Porsche, Mercedes). Troviamo vetture con allestimenti superiori e prezzi più competitivi rispetto all'Italia.",
      features: [
        "Check storico tagliandi esteri",
        "Gestione IVA e F24",
        "Traduzione documenti tecnici",
        "Nazionalizzazione rapida",
        "Logistica internazionale"
      ],
      icon: <Globe size={32} />,
      accent: "primary",
      price: "Contattaci per preventivo"
    },
    {
      id: "business",
      title: "Business / Fleet",
      subtitle: "Soluzioni Aziendali",
      desc: "Supportiamo professionisti e piccole aziende nella ricerca di veicoli affidabili, gestendo la deducibilità fiscale e la verifica dell'IVA esposta.",
      features: [
        "Verifica IVA 22%",
        "Consulenza leasing/finanziamenti",
        "Analisi TCO (Total Cost of Ownership)",
        "Ricerca veicoli commerciali",
        "Gestione parco auto ridotto"
      ],
      icon: <Briefcase size={32} />,
      accent: "accent-secondary",
      price: "Piani personalizzati"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-neutral-soft py-24 border-b border-neutral-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-accent font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 mb-6">
              <div className="w-10 h-px bg-accent"></div>
              Soluzioni di Consulenza
            </span>
            <h1 className="text-5xl md:text-[7rem] font-black text-primary uppercase tracking-tighter mb-8 leading-[0.85]">
              Servizi pensati per <span className="text-accent italic font-serif normal-case lowercase">persone.</span>
            </h1>
            <p className="text-xl text-text-muted font-medium leading-relaxed max-w-xl">
              Non vendiamo stock. Offriamo una consulenza individuale e indipendente per assicurarti che il tuo prossimo acquisto sia una fonte di gioia, non di stress.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((s, idx) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col bg-neutral-soft rounded-[40px] border border-neutral-border p-12 hover:border-accent hover:shadow-premium transition-all duration-700 relative overflow-hidden"
              >
                {/* Accent Background */}
                <div className={`absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-all duration-700 rounded-bl-full bg-accent`}></div>

                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 bg-primary group-hover:bg-accent text-white shadow-lg`}>
                   {s.icon}
                </div>

                <div className="mb-10">
                   <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-accent mb-2">{s.subtitle}</h4>
                   <h3 className="text-3xl font-black text-primary uppercase tracking-tighter mb-4">{s.title}</h3>
                   <p className="text-text-muted font-medium leading-relaxed">{s.desc}</p>
                </div>

                <div className="flex-grow">
                   <ul className="space-y-4 mb-12">
                      {s.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-primary group-hover:translate-x-1 transition-transform">
                          <CheckCircle2 size={16} className="text-accent shrink-0" />
                          {f}
                        </li>
                      ))}
                   </ul>
                </div>

                <div className="pt-8 border-t border-neutral-border flex items-center justify-between">
                   <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">{s.price}</span>
                   <Link to="/contatti" className="text-primary hover:text-accent transition-colors">
                      <ArrowRight size={24} />
                   </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Extra */}
      <section className="section-padding bg-neutral-warm">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[40px] p-12 lg:p-24 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="max-w-3xl relative z-10">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">Oltre la semplice ricerca.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div>
                      <h4 className="text-accent font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                         <div className="w-4 h-px bg-accent"></div>
                         Consulenza Tecnica
                      </h4>
                      <p className="text-gray-300 font-medium leading-relaxed">
                         Supportiamo i nostri clienti nell'analisi dell'affidabilità a lungo termine, verificando richiami ufficiali e criticità tecniche dei modelli.
                      </p>
                   </div>
                   <div>
                      <h4 className="text-accent font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                         <div className="w-4 h-px bg-accent"></div>
                         Ottimizzazione Fiscale
                      </h4>
                      <p className="text-gray-300 font-medium leading-relaxed">
                         Massimizziamo il risparmio gestendo correttamente l'IVA intracomunitaria e verificando la correttezza fiscale del venditore estero.
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
