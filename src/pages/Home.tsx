import { motion } from 'motion/react';
import { ShieldCheck, Search, UserCheck, Truck, AlertTriangle, ChevronRight, Star, Quote, BadgeEuro, MessageSquare, ShieldAlert, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MultiStepForm, BrandGrid } from '../components/InteractiveModule';
import { CASE_STUDIES } from '../constants';
import { useRef, useState } from 'react';

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState<string | undefined>(undefined);
  const formRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    { n: 'Alessandro R.', m: 'BMW X5 xDrive', t: "Senza Diamanti avrei comprato un'auto con 80.000km scalati. Mi hanno salvato letteralmente l'acquisto.", img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300' },
    { n: 'Martina V.', m: 'Porsche Macan S', t: 'Velocità e professionalità incredibili. Mi sono sentita tutelata in ogni fase.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=300&h=300' },
    { n: 'Luca F.', m: 'Audi RS3', t: 'Puntigliosi al millimetro. Non avrei mai trovato una vettura così perfetta da solo.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=300&h=300' },
  ];

  const handleSelectBrand = (id: string) => {
    setSelectedBrand(id);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="pt-20 bg-neutral-soft">
      <section className="relative min-h-[85vh] overflow-hidden text-white">
        <img
          src="https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80&w=2400"
          alt="Mercedes sportiva in primo piano"
          className="absolute inset-0 h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-transparent" />

        <div className="absolute top-0 left-0 right-0 z-20 border-b border-white/20 bg-black/30 backdrop-blur-sm">
          <p className="text-center text-xs md:text-sm py-2.5 text-white/95">
            Leggi le nostre <span className="font-bold text-accent">170 recensioni</span> su Trustpilot
          </p>
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-28 md:pt-36 pb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 bg-black/40 border-l-4 border-accent px-5 py-3 mb-7 uppercase tracking-[0.16em] text-xs font-semibold">
              L'usato da sogno
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">Berline</h1>
            <p className="text-2xl md:text-4xl font-light mb-4">Qualsiasi sia il tuo sogno o necessità</p>
            <p className="text-2xl md:text-4xl font-light mb-10">Potrai realizzarlo a prezzi vantaggiosi!</p>
            <p className="text-2xl md:text-6xl font-bold mb-8">Fai la tua richiesta:</p>
            <button onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary text-base md:text-lg px-8 py-4">
              Inizia la ricerca <ChevronRight size={20} />
            </button>
          </div>

          <button className="absolute left-6 top-1/2 -translate-y-1/2 p-2 rounded-full border border-white/50 bg-black/25 hover:bg-black/45 transition-colors">
            <ChevronLeft size={36} />
          </button>
          <button className="absolute right-6 top-1/2 -translate-y-1/2 p-2 rounded-full border border-white/50 bg-black/25 hover:bg-black/45 transition-colors">
            <ChevronRight size={36} />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 60%, 50% 100%, 100% 60%, 100% 100%, 0 100%)' }} />
      </section>

      <section className="py-8 bg-white border-b border-neutral-border">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ['100%', 'Broker indipendenti'],
            ['12', 'Mercati monitorati'],
            ['150+', 'Controlli tecnici'],
            ['500+', 'Clienti soddisfatti'],
          ].map(([value, label]) => (
            <div key={label} className="text-center p-4 rounded-xl bg-neutral-soft border border-neutral-border">
              <p className="text-3xl font-bold text-primary">{value}</p>
              <p className="text-sm text-text-muted">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-neutral-soft">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Come lavoriamo</h2>
            <p className="text-text-muted text-lg">Un percorso semplice, con aggiornamenti chiari in ogni fase.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Search size={20} />, title: 'Ricerca mirata', text: 'Selezioniamo veicoli su canali europei affidabili e verificabili.' },
              { icon: <ShieldCheck size={20} />, title: 'Controllo tecnico', text: 'Analisi documentale, storico manutenzione e verifica meccanica.' },
              { icon: <UserCheck size={20} />, title: 'Trattativa', text: 'Negoziazione trasparente con obiettivi economici concordati.' },
              { icon: <Truck size={20} />, title: 'Consegna', text: 'Gestiamo import, pratiche e consegna del veicolo pronto all’uso.' },
            ].map((item) => (
              <motion.article key={item.title} whileHover={{ y: -4 }} className="card-professional">
                <div className="w-10 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-5">Perché evitare acquisti improvvisati</h2>
            <p className="text-text-muted text-lg mb-8">Un supporto professionale riduce i rischi più comuni del mercato usato e import.</p>
            <Link to="/come-funziona" className="btn-soft inline-flex">Scopri le verifiche</Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { t: 'Km scalati', d: 'Controlliamo coerenza storico e database internazionali.', icon: <ShieldAlert size={18} /> },
              { t: 'Vizi occulti', d: 'Identifichiamo danni strutturali e riparazioni critiche.', icon: <AlertTriangle size={18} /> },
              { t: 'Rischi finanziari', d: 'Verifichiamo vincoli, ipoteche e situazioni amministrative.', icon: <BadgeEuro size={18} /> },
              { t: 'Garanzia', d: 'Attiviamo tutele e coperture in base al veicolo scelto.', icon: <ShieldCheck size={18} /> },
            ].map((risk) => (
              <div key={risk.t} className="rounded-xl border border-neutral-border p-5 bg-neutral-soft">
                <div className="text-accent mb-3">{risk.icon}</div>
                <h4 className="font-semibold text-primary mb-1">{risk.t}</h4>
                <p className="text-sm text-text-muted">{risk.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="trova-auto" ref={formRef} className="section-padding bg-neutral-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-3">Parliamo della tua prossima auto</h2>
            <p className="text-text-muted">Compila il configuratore: ti ricontattiamo con una consulenza iniziale gratuita.</p>
          </div>
          <MultiStepForm initialBrand={selectedBrand} />
        </div>
      </section>

      <BrandGrid onSelectBrand={handleSelectBrand} />

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end gap-4 mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Ultimi risultati</h2>
            <Link to="/storie" className="btn-soft">Vedi tutte le storie</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CASE_STUDIES.map((caseStudy) => (
              <article key={caseStudy.id} className="rounded-2xl border border-neutral-border overflow-hidden bg-white shadow-sm">
                <img src={caseStudy.imageUrl} alt={caseStudy.vehicle} className="h-56 w-full object-cover" referrerPolicy="no-referrer" />
                <div className="p-6">
                  <p className="text-xs text-text-muted mb-2">{caseStudy.vehicle}</p>
                  <h3 className="text-xl font-semibold text-primary mb-5">{caseStudy.title}</h3>
                  <p className="text-sm text-text-muted mb-2"><strong>Obiettivo:</strong> {caseStudy.goal}</p>
                  <p className="text-sm text-accent mb-4"><strong>Risultato:</strong> {caseStudy.result}</p>
                  <Link to={`/storie/${caseStudy.id}`} className="text-sm font-medium text-primary inline-flex items-center gap-2 hover:text-accent">
                    Approfondisci <ChevronRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Cosa dicono i clienti</h2>
            <p className="text-white/70">Recensioni reali, dopo consegna e utilizzo quotidiano del veicolo.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.n} className="rounded-2xl bg-black/40 border border-white/10 p-6">
                <Quote className="text-accent mb-3" size={22} />
                <p className="text-white mb-5">“{t.t}”</p>
                <div className="flex gap-1 mb-4">{[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} className="text-accent" fill="#b68a35" />)}</div>
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.n} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <p className="font-semibold">{t.n}</p>
                    <p className="text-sm text-white/70">{t.m}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Vuoi iniziare adesso?</h2>
          <p className="text-white/85 text-lg mb-8">Ti guidiamo dalla scelta alla consegna, in modo chiaro e senza sorprese.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-white">
              Richiedi consulenza
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3 hover:bg-white/10 transition-colors">
              <MessageSquare size={18} /> WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
