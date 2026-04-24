import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageSquare, Car, ShieldCheck, User, Info, HelpCircle, FileText, Star } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Come Funziona', path: '/come-funziona' },
    { label: 'Servizi', path: '/servizi' },
    { label: 'Storie Vere', path: '/storie' },
    { label: 'Chi Siamo', path: '/chi-siamo' },
    { label: 'FAQ', path: '/faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-border text-primary shadow-premium">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-primary p-2.5 rounded-xl group-hover:bg-accent transition-all duration-500 shadow-lg group-hover:shadow-accent/40">
              <Car size={24} className="text-white" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter uppercase">
              DIAMANTI <span className="text-accent">BROKER</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-accent relative group/link ${
                  location.pathname === item.path ? 'text-accent' : 'text-primary'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-500 group-hover/link:w-full ${location.pathname === item.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}
            <Link to="/contatti" className="btn-primary py-3 px-8 text-[10px] font-black uppercase tracking-widest bg-primary hover:bg-accent border-0">
              Inizia Ora
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 text-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white border-t border-neutral-border shadow-2xl overflow-hidden"
          >
            <div className="container mx-auto px-6 py-12 flex flex-col gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-black uppercase tracking-tighter hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contatti"
                onClick={() => setIsOpen(false)}
                className="btn-primary"
              >
                Parla con un consulente
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-32 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="flex flex-col gap-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-accent p-2 rounded-xl">
                <Car size={24} className="text-white" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">
                Diamanti Broker
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
              L'eccellenza nella consulenza automobilistica. Difendiamo il tuo investimento cercando la perfezione nel mercato europeo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-500">
                <MessageSquare size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-500">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-gray-500">Navigazione</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/come-funziona" className="text-sm font-bold text-gray-400 hover:text-accent transition-colors">Il Nostro Metodo</Link></li>
              <li><Link to="/servizi" className="text-sm font-bold text-gray-400 hover:text-accent transition-colors">I Servizi</Link></li>
              <li><Link to="/storie" className="text-sm font-bold text-gray-400 hover:text-accent transition-colors">Successi & Testimonials</Link></li>
              <li><Link to="/chi-siamo" className="text-sm font-bold text-gray-400 hover:text-accent transition-colors">Azienda & Vision</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-gray-500">Supporto</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/faq" className="text-sm font-bold text-gray-400 hover:text-accent transition-colors">Centro Assistenza</Link></li>
              <li><Link to="/risorse" className="text-sm font-bold text-gray-400 hover:text-accent transition-colors">Guide Anti-Fregatura</Link></li>
              <li><Link to="/contatti" className="text-sm font-bold text-gray-400 hover:text-accent transition-colors">Canali di Contatto</Link></li>
              <li><Link to="/privacy" className="text-sm font-bold text-gray-400 hover:text-accent transition-colors">Note Legali</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-gray-500">Contatti Diretti</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4 items-start">
                <Phone size={18} className="text-accent mt-0.5" />
                <span className="text-gray-200 text-sm font-bold">+39 333 123 4567</span>
              </li>
              <li className="flex gap-4 items-start">
                <MessageSquare size={18} className="text-accent mt-0.5" />
                <span className="text-gray-200 text-sm font-bold">broker@diamanti.it</span>
              </li>
              <li className="bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-4 items-center">
                <ShieldCheck size={28} className="text-accent" />
                <span className="text-[10px] font-black uppercase tracking-widest leading-relaxed">Qualità & Sicurezza <br/>Brokeraggio Certificato</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} Diamanti Broker - P.IVA 01234567890.
          </p>
          <div className="flex gap-8">
             <span className="text-gray-600 text-[10px] uppercase font-bold tracking-widest">Torino</span>
             <span className="text-gray-600 text-[10px] uppercase font-bold tracking-widest">Milano</span>
             <span className="text-gray-600 text-[10px] uppercase font-bold tracking-widest">Monaco</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
