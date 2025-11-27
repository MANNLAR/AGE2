const CIVILIZATIONS = [
  {
    id: 'khmer',
    name: 'Jemeres',
    region: 'asia',
    style: 'eco',
    difficulty: 'media',
    bonuses: ['No requieren edificios para avanzar', 'Elefantes con +15% velocidad', 'Granjas no necesitan molino'],
    uniqueUnits: ['Elefante de Batalla'],
    uniqueTechs: ['Tusk Swords', 'Double Crossbow'],
    recommended: 'Boom agresivo con transición a elefantes + arqueros',
    image: 'src/assets/img/civs/jemeres.png',
    builds: ['Elefante Feudal', 'Fast Castle Eco']
  },
  {
    id: 'franks',
    name: 'Francos',
    region: 'europa',
    style: 'rush',
    difficulty: 'baja',
    bonuses: ['Caballería con +20% HP', 'Granjas más baratas', 'Castillos más baratos'],
    uniqueUnits: ['Lanzador de Hachas'],
    uniqueTechs: ['Bearded Axe', 'Chivalry'],
    recommended: 'Escouts tempranos y transición a caballeros',
    image: 'src/assets/img/civs/francos.png',
    builds: ['Scout Rush', 'FC Caballeros']
  },
  {
    id: 'aztecs',
    name: 'Aztecas',
    region: 'america',
    style: 'rush',
    difficulty: 'alta',
    bonuses: ['Recolectores cargan +3', 'Monjes +5 HP por tecnología', 'Militar se crea más rápido'],
    uniqueUnits: ['Guerrero Jaguar'],
    uniqueTechs: ['Atlatl', 'Garland Wars'],
    recommended: 'Presión de águilas y monjes con reliquias',
    image: 'src/assets/img/civs/aztecas.png',
    builds: ['Drush FC', 'Agujas Feudal']
  },
  {
    id: 'ethiopians',
    name: 'Etíopes',
    region: 'africa',
    style: 'hibrida',
    difficulty: 'media',
    bonuses: ['+100 de comida y oro al avanzar', 'Arqueros disparan más rápido', 'Torre vigía gratis'],
    uniqueUnits: ['Shotel'],
    uniqueTechs: ['Royal Heirs', 'Torsion Engines'],
    recommended: 'Arqueros agresivos y cierres con asedio',
    image: 'src/assets/img/civs/etiopes.png',
    builds: ['Archer Rush', 'Fast Imp Arquería']
  }
];
