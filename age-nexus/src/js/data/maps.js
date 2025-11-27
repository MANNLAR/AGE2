const MAPS = [
  {
    id: 'arabia',
    name: 'Arabia',
    description: 'Mapa abierto, colinas y presión temprana constante.',
    strong: { civ: 'Francos', winrate: 54 },
    weak: { civ: 'Aztecas', winrate: 46 },
    image: 'src/assets/img/maps/map-arabia.jpg',
    builds: ['Scout Rush 20 pop', 'Archer Rush 22 pop']
  },
  {
    id: 'arena',
    name: 'Arena',
    description: 'Mapa cerrado con muros de piedra. Favorece monjes y boom.',
    strong: { civ: 'Aztecas', winrate: 57 },
    weak: { civ: 'Francos', winrate: 48 },
    image: 'src/assets/img/maps/map-arena.jpg',
    builds: ['Drush FC Águilas', 'Fast Castle Caballeros']
  },
  {
    id: 'nomada',
    name: 'Nómada',
    description: 'Inicio disperso en costa. Adaptación y lectura del mapa.',
    strong: { civ: 'Jemeres', winrate: 55 },
    weak: { civ: 'Etíopes', winrate: 49 },
    image: 'src/assets/img/maps/map-nomada.jpg',
    builds: ['Fast Castle Eco']
  }
];
