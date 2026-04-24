export type VehicleType = 'citycar' | 'suv' | 'sedan' | 'station' | 'sportive' | 'commercial';
export type FuelType = 'benzina' | 'diesel' | 'ibrida' | 'elettrica';
export type GearboxType = 'manuale' | 'automatico';

export interface CarBrand {
  id: string;
  name: string;
  logo: string;
  note?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  vehicle: string;
  initialSituation: string;
  goal: string;
  action: string;
  result: string;
  imageUrl: string;
}

export const BRANDS: CarBrand[] = [
  { id: 'audi', name: 'Audi', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg', note: 'Premium Tedesche' },
  { id: 'bmw', name: 'BMW', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg', note: 'Sportività Premium' },
  { id: 'mercedes', name: 'Mercedes-Benz', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg', note: 'Eleganza e Comfort' },
  { id: 'volkswagen', name: 'Volkswagen', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg', note: 'Affidabilità Totale' },
  { id: 'fiat', name: 'Fiat', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Fiat_logo.svg', note: 'Ideali per Città' },
  { id: 'ford', name: 'Ford', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Ford_Motor_Company_Logo.svg', note: 'Versatilità' },
  { id: 'toyota', name: 'Toyota', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_car_logo.svg', note: 'Ibride d\'Eccellenza' },
  { id: 'jeep', name: 'Jeep', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Jeep_logo.svg', note: 'Pronto Avventura' },
  { id: 'porsche', name: 'Porsche', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Porsche_logo.svg', note: 'Performance Pure' },
  { id: 'landrover', name: 'Land Rover', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Land_Rover_logo.png', note: 'Icone Fuoristrada' }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'Da caos annunci a SUV perfetto in 3 settimane',
    vehicle: 'Volkswagen Tiguan 2022',
    initialSituation: 'Il cliente cercava da mesi tra privati e concessionari, esausto per annunci falsi e km dubbi.',
    goal: 'SUV spazioso, meno di 50k km, garanzia ufficiale.',
    action: 'Ricerca cross-border in Germania, verifica storica completa e perizia tecnica in loco.',
    result: 'Auto consegnata a domicilio, risparmio di 4.000€ rispetto ai prezzi medi Italia.',
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Seconda auto per la famiglia senza pensieri',
    vehicle: 'Fiat 500 Hybrid 2023',
    initialSituation: 'Professionista impegnata che non ha tempo di gestire burocrazia e visite.',
    goal: 'Citycar affidabile, condizioni pari al nuovo.',
    action: 'Selezione di un lotto aziendale certificato, negoziazione prezzo bloccato.',
    result: 'Pratiche gestite in 48h, consegna con tagliando e revisione appena eseguiti.',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800'
  }
];
