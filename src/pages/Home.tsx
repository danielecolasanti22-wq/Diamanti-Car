import { motion } from 'motion/react';
import { ShieldCheck, Search, UserCheck, Truck, AlertTriangle, ChevronRight, Star, Quote, BadgeEuro, MessageSquare, ShieldAlert } from 'lucide-react';
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
    <div className="pt-20 bg-slate-50">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1549399542-7e8f2e938b70?auto=format&fit=crop&q=80&w=2200"
            alt="Auto premium in esposizione"
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/40 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40 text-white">
          <div className="max-w-3xl">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-slate-200 mb-6">Diamanti Car Broker</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Troviamo l'auto giusta per te,
              <span className="text-blue-300"> con metodo e trasparenza.</span>
            </h1>
            <p className="text-base md:text-xl text-slate-100/90 max-w-2xl mb-10 leading-relaxed">
              Importazione, verifiche tecniche e trattativa seguite da professionisti: tu scegli l'obiettivo, noi ci occupiamo del resto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Inizia la ricerca <ChevronRight size={18} />
              </button>
              <Link to="/chi-siamo" className="btn-soft">
                Chi siamo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ['100%', 'Broker indipendenti'],
            ['12', 'Mercati monitorati'],
            ['150+', 'Controlli tecnici'],
            ['500+', 'Clienti soddisfatti'],
          ].map(([value, label]) => (
            <div key={label} className="text-center p-4 rounded-xl bg-slate-50 border border-slate-100">
              <p className="text-3xl font-bold text-slate-900">{value}</p>
              <p className="text-sm text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Come lavoriamo</h2>
            <p className="text-slate-600 text-lg">Un percorso semplice, con aggiornamenti chiari in ogni fase.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Search size={20} />, title: 'Ricerca mirata', text: 'Selezioniamo veicoli su canali europei affidabili e verificabili.' },
              { icon: <ShieldCheck size={20} />, title: 'Controllo tecnico', text: 'Analisi documentale, storico manutenzione e verifica meccanica.' },
              { icon: <UserCheck size={20} />, title: 'Trattativa', text: 'Negoziazione trasparente con obiettivi economici concordati.' },
              { icon: <Truck size={20} />, title: 'Consegna', text: 'Gestiamo import, pratiche e consegna del veicolo pronto all’uso.' },
            ].map((item) => (
              <motion.article key={item.title} whileHover={{ y: -4 }} className="card-professional">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5">Perché evitare acquisti improvvisati</h2>
            <p className="text-slate-600 text-lg mb-8">Un supporto professionale riduce i rischi più comuni del mercato usato e import.</p>
            <Link to="/come-funziona" className="btn-soft inline-flex">Scopri le verifiche</Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { t: 'Km scalati', d: 'Controlliamo coerenza storico e database internazionali.', icon: <ShieldAlert size={18} /> },
              { t: 'Vizi occulti', d: 'Identifichiamo danni strutturali e riparazioni critiche.', icon: <AlertTriangle size={18} /> },
              { t: 'Rischi finanziari', d: 'Verifichiamo vincoli, ipoteche e situazioni amministrative.', icon: <BadgeEuro size={18} /> },
              { t: 'Garanzia', d: 'Attiviamo tutele e coperture in base al veicolo scelto.', icon: <ShieldCheck size={18} /> },
            ].map((risk) => (
              <div key={risk.t} className="rounded-xl border border-slate-200 p-5 bg-slate-50">
                <div className="text-blue-700 mb-3">{risk.icon}</div>
                <h4 className="font-semibold text-slate-900 mb-1">{risk.t}</h4>
                <p className="text-sm text-slate-600">{risk.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="trova-auto" ref={formRef} className="section-padding bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3">Parliamo della tua prossima auto</h2>
            <p className="text-slate-600">Compila il configuratore: ti ricontattiamo con una consulenza iniziale gratuita.</p>
          </div>
          <MultiStepForm initialBrand={selectedBrand} />
        </div>
      </section>

      <BrandGrid onSelectBrand={handleSelectBrand} />

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end gap-4 mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Ultimi risultati</h2>
            <Link to="/storie" className="btn-soft">Vedi tutte le storie</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CASE_STUDIES.map((caseStudy) => (
              <article key={caseStudy.id} className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
                <img src={caseStudy.imageUrl} alt={caseStudy.vehicle} className="h-56 w-full object-cover" referrerPolicy="no-referrer" />
                <div className="p-6">
                  <p className="text-xs text-slate-500 mb-2">{caseStudy.vehicle}</p>
                  <h3 className="text-xl font-semibold text-slate-900 mb-5">{caseStudy.title}</h3>
                  <p className="text-sm text-slate-600 mb-2"><strong>Obiettivo:</strong> {caseStudy.goal}</p>
                  <p className="text-sm text-blue-700 mb-4"><strong>Risultato:</strong> {caseStudy.result}</p>
                  <Link to={`/storie/${caseStudy.id}`} className="text-sm font-medium text-slate-800 inline-flex items-center gap-2 hover:text-blue-700">
                    Approfondisci <ChevronRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Cosa dicono i clienti</h2>
            <p className="text-slate-300">Recensioni reali, dopo consegna e utilizzo quotidiano del veicolo.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.n} className="rounded-2xl bg-slate-800/80 border border-slate-700 p-6">
                <Quote className="text-slate-600 mb-3" size={22} />
                <p className="text-slate-100 mb-5">“{t.t}”</p>
                <div className="flex gap-1 mb-4">{[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} className="text-amber-400" fill="#fbbf24" />)}</div>
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.n} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <p className="font-semibold">{t.n}</p>
                    <p className="text-sm text-slate-300">{t.m}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Vuoi iniziare adesso?</h2>
          <p className="text-blue-100 text-lg mb-8">Ti guidiamo dalla scelta alla consegna, in modo chiaro e senza sorprese.</p>
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
