import { motion } from 'motion/react';
import { Users, ShieldCheck, CheckCircle2, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-neutral-soft py-24 border-b border-neutral-border overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 mb-6">
              <div className="w-10 h-px bg-accent"></div>
              Corporate Profile
            </span>
            <h1 className="text-5xl md:text-[7rem] font-black text-primary uppercase tracking-tighter mb-8 leading-[0.85]">
              L'Eccellenza <br/>umana nella <span className="text-accent italic font-serif normal-case lowercase">consulenza.</span>
            </h1>
            <p className="text-xl text-text-muted font-medium leading-relaxed max-w-xl">
              Non siamo solo algoritmi o database. Siamo persone che ascoltano persone, mettendo la propria esperienza al servizio della tua tranquillità.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Philosophy */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
               <div className="absolute inset-0 bg-accent/10 rounded-[40px] rotate-3 -z-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200" 
                 alt="Diamanti Car Broker Team" 
                 className="rounded-[40px] shadow-premium relative z-10 w-full h-[500px] object-cover"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute -bottom-8 -left-8 bg-white text-primary p-8 rounded-3xl shadow-2xl border border-neutral-border hidden md:block z-20">
                  <div className="flex items-center gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" 
                      alt="Thomas - Founder" 
                      className="w-16 h-16 rounded-xl object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="text-2xl font-black mb-1 font-serif">Thomas</div>
                      <div className="text-[10px] uppercase font-bold tracking-widest text-accent">Founder & CEO</div>
                    </div>
                  </div>
               </div>
            </div>
            <div>
              <span className="text-accent-secondary font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 mb-4">
                 Our Mission
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter mb-8 leading-[1]">Oltre l'auto, una <span className="font-serif italic lowercase text-accent">relazione.</span></h2>
              <div className="space-y-6 text-text-muted font-medium text-lg leading-relaxed">
                <p>
                  Diamanti Car Broker nasce dalla passione di <strong>Thomas</strong> per l'eccellenza meccanica e il desiderio di riportare la fiducia al centro del mercato automobilistico.
                </p>
                <p>
                  Siamo cresciuti trasformandoci da un ambizioso progetto individuale a una realtà strutturata, mantenendo l'anima di una boutique: ogni pratica è gestita con la stessa cura che riserveremmo alla nostra auto personale.
                </p>
                <p>
                  Non abbiamo stock, non abbiamo piazzali da svuotare. Abbiamo solo i tuoi interessi. Operiamo come i tuoi consulenti di fiducia, coordinando esperti e logistici in tutta Europa per garantirti un acquisto sicuro, trasparente e senza stress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="section-padding bg-neutral-warm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-border rounded-[40px] overflow-hidden border border-neutral-border shadow-premium">
            {[
              { t: "Indipendenza", d: "La nostra struttura è slegata da qualsiasi mandato di marchio, assicurando una consulenza oggettiva e orientata al miglior rapporto qualità-prezzo.", icon: <Globe size={24} /> },
              { t: "Metodologia Dati", d: "Applichiamo protocolli di verifica rigorosi. Ogni vettura deve superare oltre 150 test prima di essere proposta ai nostri clienti.", icon: <ShieldCheck size={24} /> },
              { t: "Soluzioni Team", d: "Una squadra di specialisti gestisce ogni fase: dalla negoziazione broker-to-dealer alla burocrazia internazionale.", icon: <Users size={24} /> },
            ].map((v, i) => (
              <div key={i} className="bg-white p-12 lg:p-20 group hover:bg-neutral-soft transition-colors duration-500">
                <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-8 group-hover:bg-accent transition-colors">
                  {v.icon}
                </div>
                <h4 className="text-2xl font-black text-primary uppercase tracking-tighter mb-4">{v.t}</h4>
                <p className="text-text-muted font-medium leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* stats section */}
      <section className="py-24 bg-white border-y border-neutral-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { l: "Brokeraggio Certificato", v: "Premium" },
              { l: "Mercati Monitorati", v: "UE + Extra" },
              { l: "Tasso Soddisfazione", v: "99.8%" },
              { l: "Anni di Expertise", v: "+15" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                 <div className="text-4xl font-black text-primary mb-2 italic tracking-tighter">{s.v}</div>
                 <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-text-muted">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
