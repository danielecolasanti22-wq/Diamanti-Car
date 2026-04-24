import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ChevronRight, ChevronLeft, Send, Car, Cpu, MapPin, BadgeEuro, Calendar, Settings, Fuel } from 'lucide-react';
import { BRANDS } from '../constants';

interface FormData {
  vehicleType: string;
  usage: string;
  budget: string;
  fuel: string[];
  gearbox: string;
  maxKm: string;
  minYear: string;
  brands: string[];
  models: string;
  name: string;
  contact: string;
  timing: string;
  notes: string;
}

const INITIAL_DATA: FormData = {
  vehicleType: '',
  usage: '',
  budget: '',
  fuel: [],
  gearbox: 'automatico',
  maxKm: '',
  minYear: '',
  brands: [],
  models: '',
  name: '',
  contact: '',
  timing: '',
  notes: '',
};

export function MultiStepForm({ initialBrand }: { initialBrand?: string }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialBrand) {
      setData(prev => ({ ...prev, brands: [initialBrand] }));
      setStep(3);
    }
  }, [initialBrand]);

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const updateData = (fields: Partial<FormData>) => {
    setData(prev => ({ ...prev, ...fields }));
  };

  const toggleFuel = (f: string) => {
    setData(prev => ({
      ...prev,
      fuel: prev.fuel.includes(f) ? prev.fuel.filter(x => x !== f) : [...prev.fuel, f]
    }));
  };

  const toggleBrand = (brandId: string) => {
    setData(prev => ({
      ...prev,
      brands: prev.brands.includes(brandId) ? prev.brands.filter(x => x !== brandId) : [...prev.brands, brandId]
    }));
  };

  const progress = (step / 4) * 100;

  return (
    <div ref={scrollRef} className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-premium overflow-hidden border border-neutral-border">
      {/* Progress Bar */}
      <div className="h-1 bg-neutral-border w-full">
        <motion.div 
          className="h-full bg-accent"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>

      <div className="p-10 md:p-16">
        <header className="mb-12">
          <span className="text-accent font-black text-[10px] uppercase tracking-[0.3em] block mb-4">Fase {step} di 4</span>
          <h3 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-none">
            {step === 1 && <><span className="font-serif italic lowercase text-accent block text-2xl mb-1">Iniziamo dal</span> tuo desiderio.</>}
            {step === 2 && <><span className="font-serif italic lowercase text-accent block text-2xl mb-1">Diamo</span> forma tecnica.</>}
            {step === 3 && <><span className="font-serif italic lowercase text-accent block text-2xl mb-1">Scegli la tua</span> icona.</>}
            {step === 4 && <><span className="font-serif italic lowercase text-accent block text-2xl mb-1">Siamo pronti</span> a sentirti.</>}
          </h3>
          <p className="text-text-muted mt-4 font-medium">
            {step === 1 && "Raccontaci che tipo di auto immagini e il tuo budget ideale."}
            {step === 2 && "Pochi dettagli tecnici per restringere il campo alla perfezione."}
            {step === 3 && "Seleziona i marchi che ti fanno battere il cuore."}
            {step === 4 && "Come preferisci essere guidato in questo percorso?"}
          </p>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="min-h-[350px]"
          >
            {step === 1 && (
              <div className="space-y-10">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-4 opacity-50">Tipo di carrozzeria</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Citycar', 'SUV', 'Berlina', 'Station Wagon', 'Sportiva', 'Commerciale'].map(t => (
                      <button
                        key={t}
                        onClick={() => updateData({ vehicleType: t })}
                        className={`p-6 rounded-2xl border transition-all text-sm font-bold uppercase tracking-tight text-left flex justify-between items-center ${
                          data.vehicleType === t ? 'border-accent bg-accent/5 text-accent shadow-lg shadow-accent/10' : 'border-neutral-border hover:border-primary/20 bg-neutral-soft'
                        }`}
                      >
                        {t}
                        {data.vehicleType === t && <Check size={16} />}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-4 opacity-50">Budget massimo</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['< 15k €', '15k-30k €', '30k-50k €', '> 50k €'].map(b => (
                      <button
                        key={b}
                        onClick={() => updateData({ budget: b })}
                        className={`p-4 rounded-2xl border transition-all text-sm font-bold uppercase tracking-tight text-center ${
                          data.budget === b ? 'border-accent bg-accent/5 text-accent shadow-lg shadow-accent/10' : 'border-neutral-border hover:border-primary/20 bg-neutral-soft'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-10">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-4 opacity-50">Alimentazione</label>
                  <div className="flex flex-wrap gap-3">
                    {['Benzina', 'Diesel', 'Ibrida', 'Elettrica'].map(f => (
                      <button
                        key={f}
                        onClick={() => toggleFuel(f)}
                        className={`py-4 px-8 rounded-2xl border transition-all text-sm font-bold uppercase tracking-tight ${
                          data.fuel.includes(f) ? 'border-accent bg-accent/5 text-accent shadow-lg shadow-accent/10' : 'border-neutral-border hover:border-primary/20 bg-neutral-soft'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest mb-4 opacity-50">Chilometraggio massimo</label>
                    <input 
                      type="text" 
                      placeholder="es. 50.000 km"
                      value={data.maxKm}
                      onChange={(e) => updateData({ maxKm: e.target.value })}
                      className="w-full p-5 rounded-2xl border border-neutral-border focus:border-accent outline-none bg-neutral-soft font-bold text-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest mb-4 opacity-50">Anno minimo</label>
                    <input 
                      type="text" 
                      placeholder="es. 2022"
                      value={data.minYear}
                      onChange={(e) => updateData({ minYear: e.target.value })}
                      className="w-full p-5 rounded-2xl border border-neutral-border focus:border-accent outline-none bg-neutral-soft font-bold text-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-4 opacity-50">Trasmissione</label>
                  <div className="flex gap-4">
                    {['Automatico', 'Manuale', 'Indifferente'].map(g => (
                      <button
                        key={g}
                        onClick={() => updateData({ gearbox: g })}
                        className={`flex-1 p-4 rounded-2xl border transition-all text-sm font-bold uppercase tracking-tight ${
                          data.gearbox === g ? 'border-accent bg-accent/5 text-accent shadow-lg shadow-accent/10' : 'border-neutral-border hover:border-primary/20 bg-neutral-soft'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-10">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-4 opacity-50">Marchi preferiti</label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    {BRANDS.map(brand => (
                      <button
                        key={brand.id}
                        onClick={() => toggleBrand(brand.id)}
                        className={`p-5 rounded-2xl border transition-all flex flex-col items-center gap-3 group/brand relative ${
                          data.brands.includes(brand.id) ? 'border-accent bg-accent/5 shadow-inner' : 'border-neutral-border hover:border-primary/20 bg-neutral-soft'
                        }`}
                      >
                        <img src={brand.logo} alt={brand.name} className={`h-8 md:h-10 object-contain transition-all duration-300 ${data.brands.includes(brand.id) ? 'grayscale-0' : 'grayscale brightness-0 opacity-40 group-hover/brand:opacity-100'}`} referrerPolicy="no-referrer" />
                        <span className={`text-[10px] uppercase font-black tracking-widest text-center leading-tight transition-colors ${data.brands.includes(brand.id) ? 'text-accent' : 'text-text-muted'}`}>{brand.name}</span>
                        {data.brands.includes(brand.id) && (
                          <div className="absolute -top-1 -right-1 bg-accent text-white p-1 rounded-full border-2 border-white">
                            <Check size={8} strokeWidth={4} />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-4 opacity-50">Modelli specifici o optional</label>
                  <textarea 
                    placeholder="Esempio: Audi A4 Avant S-Line, tetto panoramico, fari LED Matrix..."
                    value={data.models}
                    onChange={(e) => updateData({ models: e.target.value })}
                    className="w-full p-5 rounded-2xl border border-neutral-border focus:border-accent outline-none bg-neutral-soft font-medium text-primary min-h-[120px]"
                  />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-8 max-w-xl">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-4 opacity-50">Il tuo nome</label>
                  <input 
                    type="text" 
                    placeholder="Mario Rossi"
                    value={data.name}
                    onChange={(e) => updateData({ name: e.target.value })}
                    className="w-full p-5 rounded-2xl border border-neutral-border focus:border-accent outline-none bg-neutral-soft font-bold text-primary"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-4 opacity-50">Canale di contatto preferito</label>
                  <input 
                    type="text" 
                    placeholder="Telefono o Email"
                    value={data.contact}
                    onChange={(e) => updateData({ contact: e.target.value })}
                    className="w-full p-5 rounded-2xl border border-neutral-border focus:border-accent outline-none bg-neutral-soft font-bold text-primary"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-4 opacity-50">Urgenza acquisto</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Subito', '1-2 Mesi', 'Più avanti'].map(t => (
                      <button
                        key={t}
                        onClick={() => updateData({ timing: t })}
                        className={`p-4 rounded-2xl border transition-all text-[10px] font-black uppercase tracking-widest ${
                          data.timing === t ? 'border-accent bg-accent/5 text-accent shadow-lg shadow-accent/10' : 'border-neutral-border hover:border-primary/20 bg-neutral-soft'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 flex justify-between items-center pt-10 border-t border-neutral-border">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className={`flex items-center gap-3 font-black text-[10px] uppercase tracking-widest transition-all ${
              step === 1 ? 'text-gray-300 pointer-events-none' : 'text-primary hover:text-accent'
            }`}
          >
            <ChevronLeft size={18} />
            Indietro
          </button>

          {step < 4 ? (
            <button
              onClick={nextStep}
              className="btn-primary"
            >
              Prosegui
              <ChevronRight size={18} />
            </button>
          ) : (
            <button
              onClick={() => alert('Analisi inviata con successo. Verrai ricontattato a breve.')}
              className="btn-primary bg-accent-secondary hover:bg-black ring-4 ring-accent-secondary/10"
            >
              Invia Analisi
              <Send size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function BrandGrid({ onSelectBrand }: { onSelectBrand: (id: string) => void }) {
  const referenceBrands: Array<{ id: string; name: string; logo: string; selectable?: boolean }> = [
    { id: 'abarth', name: 'Abarth', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Abarth-Scorpion-Logo.svg' },
    { id: 'alfaromeo', name: 'Alfa Romeo', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Alfa_Romeo_2015.svg' },
    { id: 'volkswagen', name: 'Volkswagen', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg', selectable: true },
    { id: 'porsche', name: 'Porsche', logo: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Porsche_crest.svg', selectable: true },
    { id: 'honda', name: 'Honda', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg' },
    { id: 'toyota', name: 'Toyota', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_car_logo.svg', selectable: true },
    { id: 'chevrolet', name: 'Chevrolet', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Chevrolet_logo.svg' },
    { id: 'opel', name: 'Opel', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Opel-Logo_2017.svg' },
    { id: 'fiat', name: 'Fiat', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Fiat_logo.svg', selectable: true },
    { id: 'skoda', name: 'Skoda', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/%C5%A0koda_Auto_logo.svg' },
    { id: 'bmw', name: 'BMW', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg', selectable: true },
    { id: 'audi', name: 'Audi', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg', selectable: true },
    { id: 'mercedes', name: 'MERCEDES-BENZ', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg', selectable: true },
    { id: 'ferrari', name: 'FERRARI', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Ferrari-Logo.svg' },
    { id: 'jeep', name: 'Jeep', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Jeep_logo.svg', selectable: true },
    { id: 'ford', name: 'Ford', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Ford_Motor_Company_Logo.svg', selectable: true },
    { id: 'jaguar', name: 'Jaguar', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Jaguar_2012_logo.svg' },
    { id: 'tesla', name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png' },
    { id: 'hyundai', name: 'Hyundai', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg' },
    { id: 'mazda', name: 'Mazda', logo: 'https://upload.wikimedia.org/wikipedia/en/1/18/Mazda_logo_with_emblem.svg' },
    { id: 'peugeot', name: 'Peugeot', logo: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Peugeot_Logo.svg' },
    { id: 'volvo', name: 'Volvo', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Volvo-Iron-Mark-Black.svg' },
    { id: 'landrover', name: 'Land Rover', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Land_Rover_logo.png', selectable: true },
  ];

  return (
    <section className="py-16 bg-[#e9e9e9]">
      <div className="container mx-auto px-4">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-1.5">
          {referenceBrands.map(brand => (
            <button
              key={brand.id}
              onClick={() => brand.selectable && onSelectBrand(brand.id)}
              className={`group bg-[#f1f1f1] min-h-[190px] border border-[#d2d2d2] text-center relative overflow-hidden flex flex-col justify-between px-4 py-5 ${
                brand.selectable ? 'hover:border-accent cursor-pointer' : 'cursor-default'
              }`}
            >
              <div className="h-[110px] flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-[100px] max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-[13px] leading-none font-medium text-[#191919]">{brand.name}</h4>
            </button>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
