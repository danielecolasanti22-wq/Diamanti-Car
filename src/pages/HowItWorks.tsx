import { motion } from 'motion/react';
import { Search, ShieldCheck, MapPin, BadgeCheck, FileCheck, Truck, ChevronRight, User, CheckCircle2, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-neutral-soft py-24 border-b border-neutral-border overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 overflow-hidden">
           <img 
             src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200" 
             alt="Happy driver" 
             className="w-full h-full object-cover opacity-20 lg:opacity-30 mask-gradient-to-left"
             referrerPolicy="no-referrer"
           />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 mb-6">
              <div className="w-10 h-px bg-accent"></div>
              Il Nostro Metodo
            </span>
            <h1 className="text-5xl md:text-[7rem] font-black text-primary uppercase tracking-tighter mb-8 leading-[0.85]">
              Guida il tuo <span className="text-accent italic font-serif normal-case lowercase">sogno.</span> <br/>Al resto pensiamo noi.
            </h1>
            <p className="text-xl text-text-muted font-medium leading-relaxed max-w-xl">
              Il nostro non è un processo meccanico, ma un percorso condiviso. Dalla prima telefonata alla consegna delle chiavi, sei sempre al centro di ogni decisione.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-padding bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-4">
             {[
              { 
                step: "01", 
                title: "Analisi Strategica del Mercato", 
                text: "Non ci limitiamo a guardare gli annunci. Analizziamo l'andamento dei prezzi, la svalutazione futura del modello e la disponibilità reale in tutta Europa (con focus su Germania e Italia).",
                details: ["Definizione Budget", "Analisi costo/beneficio", "Individuazione canali d'acquisto"],
                icon: <Search size={22} />
              },
              { 
                step: "02", 
                title: "Scouting & Pre-Selezione", 
                text: "Filtriamo centinaia di proposte per trovarne 3 che rispettino i nostri parametri di sicurezza. Ogni auto scartata è un rischio che ti abbiamo evitato.",
                details: ["Verifica cronologia tagliandi", "Database sinistri", "Visura ipoteche"],
                icon: <MapPin size={22} />
              },
              { 
                step: "03", 
                title: "Check Tecnico & Perizia 150 Punti", 
                text: "Un nostro perito certificato esegue un test drive e una diagnosi computerizzata approfondita. Riceverai un report fotografico e video completo prima di procedere.",
                details: ["Diagnosi centralina", "Controllo spessori vernice", "Test drive su strada"],
                icon: <FileCheck size={22} />
              },
              { 
                step: "04", 
                title: "Negoziazione & Protezione Legale", 
                text: "Siamo broker, non venditori. Trattiamo il prezzo con il venditore per ottenere lo sconto massimo. Gestiamo noi i contratti per garantire che ogni clausola ti tuteli.",
                details: ["Massimizzazione sconto", "Revisione legale contratti", "Gestione pagamenti sicuri"],
                icon: <BadgeCheck size={22} />
              },
              { 
                step: "05", 
                title: "Import, Pratiche & Consegna", 
                text: "Se l'auto è all'estero, gestiamo trasporto bisarca e nazionalizzazione. Riceverai l'auto pronta per circolare, direttamente sotto casa tua.",
                details: ["Trasporto assicurato", "Immatricolazione rapida", "Consegna door-to-door"],
                icon: <Truck size={22} />
              },
            ].map((s, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col lg:flex-row gap-8 lg:gap-20 p-10 lg:p-16 rounded-[40px] bg-neutral-soft border border-neutral-border hover:border-accent transition-all duration-700"
              >
                <div className="lg:w-1/4">
                  <div className="text-7xl font-black text-neutral-border group-hover:text-accent/20 transition-colors uppercase italic mb-4">{s.step}</div>
                  <h3 className="text-2xl font-black text-primary uppercase tracking-tighter leading-tight">{s.title}</h3>
                </div>
                <div className="lg:w-2/4">
                  <p className="text-lg text-text-muted leading-relaxed font-medium mb-8">{s.text}</p>
                  <div className="flex flex-wrap gap-3">
                    {s.details.map((d, i) => (
                      <span key={i} className="text-[10px] font-black uppercase tracking-widest py-2 px-4 rounded-full bg-white border border-neutral-border text-primary">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/4 flex items-center justify-end">
                   <div className="w-16 h-16 rounded-2xl bg-white border border-neutral-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-500 shadow-sm">
                      {s.icon}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison - Broker vs Client */}
      <section className="section-padding bg-neutral-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24 max-w-2xl mx-auto">
             <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter mb-6">Chi fa cosa?</h2>
             <p className="text-text-muted font-medium">La nostra missione è farti risparmiare 30 ore di stress. Ecco come ci dividiamo i compiti.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-border overflow-hidden rounded-[40px] border border-neutral-border shadow-premium">
            {/* Column 1 */}
            <div className="bg-white p-12 lg:p-20">
              <div className="flex items-center gap-4 mb-12">
                 <div className="w-10 h-10 rounded-xl bg-accent-secondary flex items-center justify-center text-white">
                    <User size={20} />
                 </div>
                 <h4 className="text-2xl font-black uppercase tracking-tighter text-primary">I tuoi unici compiti</h4>
              </div>
              <ul className="space-y-6">
                {[
                  "Definire il budget e i gusti estetici",
                  "Descrivere come userai l'auto (km/anno, famiglia)",
                  "Scegliere la finalista tra le 3 proposte",
                  "Ritirare le chiavi (sorridendo)"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start font-medium text-text-muted">
                    <CheckCircle2 className="text-accent-secondary shrink-0 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div className="bg-primary p-12 lg:p-20 text-white">
              <div className="flex items-center gap-4 mb-12">
                 <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white">
                    <ShieldCheck size={20} />
                 </div>
                 <h4 className="text-2xl font-black uppercase tracking-tighter text-white">I compiti del Broker</h4>
              </div>
              <ul className="space-y-6">
                {[
                  "Filtrare migliaia di annunci falsi o truffaldini",
                  "Parlare con decine di venditori (anche in tedesco)",
                  "Verificare km e storico meccanico in database ufficiali",
                  "Gestire contratti, documenti e burocrazia d'import",
                  "Organizzare trasporto bisarca assicurato",
                  "Gestire la nazionalizzazione e targhe italiane"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start font-medium text-gray-300">
                    <Plus className="text-accent shrink-0 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter mb-10">Qual è il tuo punto di partenza?</h2>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/#trova-auto" className="btn-primary">
                 Ho già un'auto in mente
                 <ChevronRight size={18} />
              </Link>
              <Link to="/contatti" className="btn-outline">
                 Voglio solo informarmi
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
