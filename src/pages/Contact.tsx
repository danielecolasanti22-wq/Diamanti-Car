import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-neutral-soft py-24 border-b border-neutral-border overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-accent/5 -skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 mb-6">
              <div className="w-10 h-px bg-accent"></div>
              Direct Line
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-primary uppercase tracking-tighter mb-8 leading-[0.9]">
              Parliamo <br/>di <span className="text-accent italic">Auto.</span>
            </h1>
            <p className="text-lg text-text-muted font-medium leading-relaxed max-w-xl">
               Siamo pronti ad ascoltare le tue esigenze. Ogni grande acquisto inizia con una conversazione chiara.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Info */}
            <div className="space-y-16">
              <div>
                <h3 className="text-3xl font-black text-primary uppercase tracking-tighter mb-10">I Nostri Uffici</h3>
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-neutral-soft border border-neutral-border flex items-center justify-center text-accent shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h5 className="font-black uppercase tracking-tight text-primary mb-1">HQ & Showroom</h5>
                      <p className="text-text-muted font-medium">Via delle Scoperte 12, 20121 Milano (Italy)</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-neutral-soft border border-neutral-border flex items-center justify-center text-accent shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h5 className="font-black uppercase tracking-tight text-primary mb-1">Telefono Primario</h5>
                      <p className="text-text-muted font-medium">+39 02 123 4567</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-neutral-soft border border-neutral-border flex items-center justify-center text-accent shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h5 className="font-black uppercase tracking-tight text-primary mb-1">Email Specialistica</h5>
                      <p className="text-text-muted font-medium">consulenza@diamanticarbroker.it</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-black text-primary uppercase tracking-tighter mb-10">Orari Operativi</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div className="p-6 rounded-2xl border border-neutral-border bg-neutral-soft">
                      <span className="text-[10px] uppercase font-black tracking-widest text-text-muted block mb-2">Lun - Ven</span>
                      <p className="font-bold text-primary">09:00 - 19:30</p>
                   </div>
                   <div className="p-6 rounded-2xl border border-neutral-border bg-neutral-soft">
                      <span className="text-[10px] uppercase font-black tracking-widest text-text-muted block mb-2">Sabato</span>
                      <p className="font-bold text-primary">10:00 - 13:00</p>
                   </div>
                </div>
              </div>

              <div className="p-10 rounded-[40px] bg-primary text-white relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-20 blur-3xl rounded-full"></div>
                 <h4 className="text-xl font-black uppercase tracking-tighter mb-4">Supporto WhatsApp H24</h4>
                 <p className="text-gray-400 text-sm mb-8 leading-relaxed">Preferisci una chat rapida? Il nostro team risponde in tempo reale per domande veloci sulle auto.</p>
                 <button className="btn-primary w-full group-hover:bg-accent transition-colors">
                    Apri Chat
                 </button>
              </div>
            </div>

            {/* Form */}
            <div className="bg-neutral-soft p-10 md:p-16 rounded-[40px] border border-neutral-border shadow-premium">
              <h3 className="text-3xl font-black text-primary uppercase tracking-tighter mb-4">Analisi Preliminare.</h3>
              <p className="text-text-muted font-medium mb-12">Compila il modulo per essere ricontattato da un Broker dedicato entro 12 ore lavorative.</p>
              
              <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert('Messaggio ricevuto!'); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest mb-4 opacity-50">Nome Completo</label>
                    <input className="w-full p-5 rounded-2xl bg-white border border-neutral-border focus:border-accent outline-none font-bold text-primary" placeholder="Mario Rossi" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest mb-4 opacity-50">Email</label>
                    <input className="w-full p-5 rounded-2xl bg-white border border-neutral-border focus:border-accent outline-none font-bold text-primary" placeholder="mario@esempio.it" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-4 opacity-50">Motivo del Contatto</label>
                  <select className="w-full p-5 rounded-2xl bg-white border border-neutral-border focus:border-accent outline-none font-bold text-primary appearance-none">
                    <option>Ricerca Nuova Auto</option>
                    <option>Importazione Germania</option>
                    <option>Soluzioni Business</option>
                    <option>Altro / Informazioni</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-4 opacity-50">Tuo Messaggio</label>
                  <textarea className="w-full p-5 rounded-2xl bg-white border border-neutral-border focus:border-accent outline-none font-medium text-primary min-h-[150px]" placeholder="Descrivi brevemente cosa cerchi o come possiamo aiutarti..." />
                </div>
                <div className="flex items-center gap-4 py-4">
                  <input type="checkbox" id="privacy" className="w-5 h-5 accent-accent" required />
                  <label htmlFor="privacy" className="text-xs text-text-muted font-medium">Dichiaro di aver letto e accettato la <span className="underline cursor-pointer">Privacy Policy</span>.</label>
                </div>
                <button type="submit" className="btn-primary w-full py-6 text-sm uppercase tracking-widest">
                  Invia Messaggio
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-neutral-border relative overflow-hidden">
         <div className="absolute inset-0 flex items-center justify-center italic text-text-muted font-black uppercase tracking-[0.5em] opacity-20">
            Interactive Map Area
         </div>
      </section>
    </div>
  );
}
