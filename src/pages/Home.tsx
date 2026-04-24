import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Search, Handshake, Truck, AlertTriangle, Clock, UserCheck, ShieldAlert, Award, ChevronRight, ChevronLeft, Star, Quote, BadgeEuro, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MultiStepForm, BrandGrid } from '../components/InteractiveModule';
import { CASE_STUDIES } from '../constants';
import { useState, useRef } from 'react';

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState<string | undefined>(undefined);
  const formRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    { n: "Alessandro R.", m: "BMW X5 xDrive", t: "Senza Diamanti avrei comprato un'auto con 80.000km scalati. Mi hanno salvato letteralmente l'acquisto.", size: "large", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300" },
    { n: "Martina V.", m: "Porsche Macan S", t: "Velocità e professionalità incredibili. Mi sono sentita tutelata in ogni fase.", size: "small", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=300&h=300" },
    { n: "Luca F.", m: "Audi RS3", t: "Puntigliosi al millimetro. Non avrei mai trovato una vettura così perfetta da solo.", size: "small", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=300&h=300" },
    { n: "Giorgio B.", m: "Mercedes G63 AMG", t: "La trasparenza che cercavo. Hanno gestito l'import dalla Germania in tempi record e col sorriso.", size: "medium", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=300&h=300" },
  ];

  const handleSelectBrand = (id: string) => {
    setSelectedBrand(id);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="pt-20">
      {/* Hero Section - Full Page Background with Multi-Car Image */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-primary pt-24 pb-12">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=2400" 
            alt="Human-centered consultancy" 
            className="w-full h-full object-cover opacity-50 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-8 uppercase tracking-[0.3em] text-[10px] font-black text-accent">
               <div className="w-8 h-[2px] bg-accent"></div>
               Elite Automotive Brokerage
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-black leading-[0.85] mb-8 text-white uppercase tracking-tighter">
              La Tua Prossima <br/>
              <span className="text-accent italic font-serif lowercase">esperienza.</span> <br/>
              <span className="text-white/90">Certificata.</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-12 max-w-xl leading-relaxed font-medium">
              Siamo consulenti al servizio delle persone. Cerchiamo la perfezione tecnica tra i migliori stock europei per far sì che il tuo unico pensiero sia guidare.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary py-5 px-10 text-sm ring-4 ring-accent/20"
              >
                Configura la tua ricerca 
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link to="/chi-siamo" className="flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white font-black py-5 px-10 rounded-lg transition-all text-sm uppercase tracking-widest bg-white/5 backdrop-blur-sm">
                Il Nostro Approccio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="py-12 bg-white border-y border-neutral-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Broker Indipendenti", val: "100%" },
              { label: "Mercati Monitorati", val: "12" },
              { label: "Controlli Tecnici", val: "150+" },
              { label: "Clienti Soddisfatti", val: "500+" },
            ].map((p, i) => (
              <div key={i} className="text-center group">
                <div className="text-3xl font-black text-primary mb-1 group-hover:text-accent transition-colors">{p.val}</div>
                <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-text-muted">{p.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works - Redesigned for Premium Look */}
      <section className="section-padding bg-neutral-warm relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-xl">
               <span className="text-accent-secondary font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 mb-4">
                  <div className="w-10 h-px bg-accent-secondary"></div>
                  Il Nostro Valore
               </span>
               <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter">Come rendiamo semplice <br/>ciò che è complesso.</h2>
            </div>
            <p className="text-text-muted lg:max-w-md font-medium text-lg leading-relaxed">
              Dall'analisi iniziale alla consegna a domicilio. Un processo trasparente, sicuro e chiavi in mano.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Search size={22} />, title: "Ricerca Strategica", text: "Non usiamo solo i portali pubblici. Abbiamo accesso a canali B2B riservati e aste europee.", step: "01" },
              { icon: <ShieldCheck size={22} />, title: "Check Meccanico", text: "Ogni auto subisce una diagnosi elettronica e perizia manuale prima di essere proposta.", step: "02" },
              { icon: <UserCheck size={22} />, title: "Negoziazione d'Elite", text: "Trattiamo al posto tuo. Spesso riusciamo a coprire il costo della nostra parcella con lo sconto ottenuto.", step: "03" },
              { icon: <Truck size={22} />, title: "Consegna Premium", text: "Gestiamo immatricolazione e trasporto. Ricevi l'auto pronta per strada, sotto casa tua.", step: "04" },
            ].map((s, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                className="card-premium group h-full flex flex-col pt-12 relative"
              >
                <div className="absolute top-8 right-8 text-4xl font-black text-neutral-border group-hover:text-accent/10 transition-colors uppercase italic">{s.step}</div>
                <div className="bg-primary group-hover:bg-accent w-12 h-12 rounded-xl flex items-center justify-center mb-8 border border-white/10 shadow-lg transition-all duration-500">
                  <div className="text-white">{s.icon}</div>
                </div>
                <h4 className="text-xl font-black mb-4 uppercase tracking-tighter text-primary">{s.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed font-medium">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risks - Using Red Accent */}
      <section className="section-padding bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { t: "Km Scalati", d: "La frode più comune. Scopriamo la verità tramite database centralizzati.", icon: <ShieldAlert className="text-accent-secondary" /> },
                { t: "Vizi Occulti", d: "Auto incidentate e riparate male. Le scartiamo in fase di perizia.", icon: <AlertTriangle className="text-accent-secondary" /> },
                { t: "Truffe Finanziarie", d: "Ipotecate o con leasing non estinti. Tuteliamo ogni tuo centesimo.", icon: <BadgeEuro className="text-accent-secondary" /> },
                { t: "No Garanzia", d: "Comprare da privati è un rischio. Noi attiviamo coperture certificate.", icon: <ShieldCheck className="text-accent-secondary" /> },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl border border-neutral-border bg-neutral-soft hover:border-accent-secondary transition-all group">
                   <div className="w-10 h-10 rounded-lg bg-accent-secondary/5 flex items-center justify-center mb-4 group-hover:bg-accent-secondary group-hover:text-white transition-all">
                      {item.icon}
                   </div>
                   <h5 className="font-black uppercase tracking-tight mb-2 text-primary">{item.t}</h5>
                   <p className="text-xs text-text-muted font-medium leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-accent-secondary font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 mb-6">
                 Warning Zone
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter mb-8 leading-[0.9]">
                Perché non <br/>rischiare da soli?
              </h2>
              <p className="text-lg text-text-muted leading-relaxed font-medium mb-10">
                L'acquisto di un'auto usata è la seconda spesa più importante di una vita. Non permettere che diventi un incubo. Il mercato della compravendita è pieno di insidie legali e meccaniche che solo un occhio esperto può smascherare.
              </p>
              <Link to="/come-funziona" className="btn-secondary group">
                 Come ti proteggiamo
                 <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Multi Step Form Anchor */}
      <section id="trova-auto" ref={formRef} className="section-padding bg-neutral-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
             <span className="text-accent font-black text-[10px] uppercase tracking-[0.3em] block mb-4">Configuratore</span>
             <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter">Inizia il tuo viaggio.</h2>
             <p className="text-text-muted font-medium mt-4">Compila i dettagli e ricevi una consulenza preliminare gratuita.</p>
          </div>
          <MultiStepForm initialBrand={selectedBrand} />
        </div>
      </section>

      {/* Brand Selection */}
      <BrandGrid onSelectBrand={handleSelectBrand} />

      {/* Case Studies */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter">Risultati <br/>Tangibili.</h2>
            <Link to="/storie" className="btn-outline">
              Vedi tutte le storie
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map(caseStudy => (
              <div key={caseStudy.id} className="group bg-neutral-soft rounded-[32px] overflow-hidden border border-neutral-border flex flex-col lg:flex-row transition-all duration-700 hover:border-accent">
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img src={caseStudy.imageUrl} alt={caseStudy.vehicle} className="h-[300px] lg:h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-6 left-6">
                    <span className="badge-tag bg-primary text-white">{caseStudy.vehicle}</span>
                  </div>
                </div>
                <div className="lg:w-1/2 p-10 flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl font-black mb-6 uppercase tracking-tighter text-primary leading-tight">{caseStudy.title}</h4>
                    <div className="space-y-6">
                      <div>
                        <span className="text-[10px] font-black text-text-muted uppercase tracking-widest block mb-2 opacity-50">Obiettivo</span>
                        <p className="text-sm text-primary font-bold">{caseStudy.goal}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-text-muted uppercase tracking-widest block mb-2 opacity-50">Risultato</span>
                        <p className="text-sm text-accent font-black uppercase tracking-tight">{caseStudy.result}</p>
                      </div>
                    </div>
                  </div>
                  <Link to={`/storie/${caseStudy.id}`} className="mt-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:text-accent transition-colors">
                    Dettagli Tecnici <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Premium Grid Redesign */}
      <section className="section-padding bg-white overflow-hidden relative border-y border-neutral-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-24">
             <span className="text-accent font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 mb-4">
                <div className="w-10 h-px bg-accent"></div>
                Trust Metrics
             </span>
             <h2 className="text-4xl md:text-7xl font-black text-primary uppercase tracking-tighter leading-[0.9]">La Parola a chi ha già <br/><span className="text-accent italic font-serif normal-case">cambiato vita.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[350px]">
            {/* Large Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 md:row-span-2 bg-neutral-warm rounded-[48px] p-12 lg:p-20 relative overflow-hidden group border border-neutral-border shadow-soft hover:shadow-premium transition-all duration-500"
            >
              <Quote className="text-primary/5 absolute -top-10 -right-10 w-96 h-96 -z-10 group-hover:text-accent/5 transition-colors" />
              <div className="flex gap-1 mb-10">
                {[1,2,3,4,5].map(j => <Star key={j} size={20} fill="#FF6B35" className="text-accent" />)}
              </div>
              <p className="text-3xl md:text-5xl font-black text-primary leading-[1.1] uppercase tracking-tighter mb-12">
                "{testimonials[0].t}"
              </p>
              <div className="flex items-center gap-6">
                 <img src={testimonials[0].img} alt={testimonials[0].n} className="w-20 h-20 rounded-2xl object-cover shadow-lg" referrerPolicy="no-referrer" />
                 <div>
                    <h5 className="text-xl font-black text-primary uppercase tracking-tighter">{testimonials[0].n}</h5>
                    <p className="text-sm font-bold text-accent uppercase tracking-widest">{testimonials[0].m}</p>
                 </div>
              </div>
            </motion.div>

            {/* Medium Card - Giorgio */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:row-span-2 bg-primary rounded-[48px] p-12 relative overflow-hidden flex flex-col justify-between group shadow-soft hover:shadow-premium transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-20 blur-3xl rounded-full"></div>
              <div>
                <div className="flex gap-1 mb-8">
                  {[1,2,3,4,5].map(j => <Star key={j} size={14} fill="#FF6B35" className="text-accent" />)}
                </div>
                <p className="text-2xl font-black text-white leading-tight uppercase tracking-tighter">
                  "{testimonials[3].t}"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                 <img src={testimonials[3].img} alt={testimonials[3].n} className="w-12 h-12 rounded-xl object-cover" referrerPolicy="no-referrer" />
                 <div>
                    <h5 className="text-lg font-black text-white uppercase tracking-tighter">{testimonials[3].n}</h5>
                    <p className="text-xs font-bold text-accent uppercase tracking-widest">{testimonials[3].m}</p>
                 </div>
              </div>
            </motion.div>

            {/* Small Cards */}
            {testimonials.slice(1, 3).map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white rounded-[40px] p-10 border border-neutral-border shadow-soft hover:shadow-premium transition-all duration-500 flex flex-col justify-between"
              >
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(j => <Star key={j} size={12} fill="#FF6B35" className="text-accent" />)}
                </div>
                <p className="text-lg font-bold text-primary leading-tight">
                  "{t.t}"
                </p>
                <div className="flex items-center gap-4 mt-8">
                   <img src={t.img} alt={t.n} className="w-10 h-10 rounded-lg object-cover" referrerPolicy="no-referrer" />
                   <div>
                      <h5 className="text-xs font-black text-primary uppercase tracking-tighter">{t.n}</h5>
                      <p className="text-[10px] font-bold text-accent uppercase tracking-widest">{t.m}</p>
                   </div>
                </div>
              </motion.div>
            ))}

            {/* Extra Stats Card */}
            <div className="bg-accent rounded-[40px] p-10 text-white flex flex-col justify-center items-center text-center">
               <div className="text-4xl font-black mb-2 italic tracking-tighter">4.9/5</div>
               <div className="text-[10px] font-black uppercase tracking-widest opacity-80">Media Valutazioni Google</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-accent text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-secondary opacity-20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-7xl font-black mb-10 uppercase tracking-tighter leading-none">Prendi il controllo del <br/>tuo prossimo acquisto.</h2>
          <p className="text-lg md:text-xl font-bold mb-16 max-w-2xl text-white/90">
            Smetti di essere un cliente passivo. Diventa un acquirente consapevole con il supporto di un professionista dedicato.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 w-full justify-center">
             <button 
              onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary-light text-white font-black py-6 px-12 rounded-2xl transition-all duration-300 uppercase tracking-[0.2em] text-sm shadow-2xl"
            >
              Prenota Sessione Strategica
            </button>
             <button className="flex items-center justify-center gap-4 bg-white/10 border-2 border-white/20 hover:bg-white/20 px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm transition-all">
                <MessageSquare size={20} />
                WhatsApp Direct
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}
