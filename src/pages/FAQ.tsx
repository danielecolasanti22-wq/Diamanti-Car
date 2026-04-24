import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Quanto costa il vostro servizio?",
      a: "Il costo è flat o a percentuale a seconda della tipologia di ricerca e parte da 499€. Questo costo viene spesso ammortizzato grazie alla negoziazione che facciamo con il venditore, riuscendo a farti ottenere sconti che da privato difficilmente otterresti."
    },
    {
      q: "Chi paga l'auto, io o voi?",
      a: "L'auto viene pagata sempre da te direttamente al venditore (o tramite noi in caso di importazione delegata). Noi gestiamo la sicurezza del pagamento e verifichiamo che l'auto sia effettivamente esistente e libera da gravami prima che tu faccia il bonifico."
    },
    {
      q: "Cosa succede se l'auto ha un problema dopo l'acquisto?",
      a: "Tutte le auto selezionate tramite concessionari hanno 12-24 mesi di garanzia legale. Se l'acquisto è tramite privato, verifichiamo la possibilità di sottoscrivere polizze guasti accessorie per darti la massima tranquillità."
    },
    {
      q: "Cercate auto anche in Germania?",
      a: "Assolutamente sì. Siamo esperti di importazione tedesca (mercato più vasto e trasparente). Gestiamo noi tutto il processo: perizia in loco, trasporto con bisarca e immatricolazione con targhe italiane."
    },
    {
      q: "Perché dovrei pagare un broker invece di cercare da solo?",
      a: "Per lo stesso motivo per cui ti affidi a un tecnico per ristrutturare casa. Noi abbiamo accesso a periti, strumenti di diagnosi e database km. Ti salviamo da fregature che potrebbero costarti migliaia di euro in riparazioni impreviste."
    },
    {
      q: "Qual è il budget minimo per una ricerca?",
      a: "Generalmente lavoriamo su ricerche per auto con budget superiore ai 15.000€. Sotto questa soglia, i margini di risparmio e le garanzie qualitative sono più difficili da blindare."
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Domande Frequenti</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tutto quello che devi sapere sul servizio di brokeraggio automobilistico. Trasparenza totale, prima di iniziare.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-neutral-border rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-neutral-soft font-bold text-primary transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={20} className="text-accent" />
                    {faq.q}
                  </span>
                  <ChevronDown className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-text-muted leading-relaxed border-t border-neutral-border/50 italic bg-neutral-soft/30">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-secondary p-8 rounded-3xl text-center border border-neutral-border">
            <MessageSquare size={32} className="text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Non hai trovato la risposta?</h3>
            <p className="text-text-muted mb-6">Siamo pronti a risolvere ogni tuo dubbio specifico.</p>
            <Link to="/contatti" className="btn-primary inline-flex items-center gap-2">
              Scrivimi su WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
