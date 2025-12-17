const MAPS = [
  // ===== ABIERTOS =====
  {
    id: 'arabia',
    name: 'Arabia',
    type: 'abierto',
    competitive: true,
    description: 'Mapa abierto con colinas. Presión temprana constante.',
    image: 'src/assets/img/maps/map-arabia.jpg',
    strong: { civ: 'Francos', winrate: 54 },
    weak: { civ: 'Aztecas', winrate: 46 },
    builds: ['Scout Rush', 'Archer Rush']
  },
  {
    id: 'acropolis',
    name: 'Acropolis',
    type: 'abierto',
    competitive: true,
    description: 'Abierto con elevaciones. Control de colinas.',
    image: 'src/assets/img/maps/map-acropolis.jpg',
    strong: { civ: 'Hunos', winrate: 53 },
    weak: { civ: 'Bengalíes', winrate: 47 },
    builds: ['Scouts → Knights', 'Archers']
  },
  {
    id: 'serengeti',
    name: 'Serengeti',
    type: 'abierto',
    competitive: false,
    description: 'Abierto con fauna agresiva. Decisiones rápidas.',
    image: 'src/assets/img/maps/map-serengeti.jpg',
    strong: { civ: 'Magiares', winrate: 52 },
    weak: { civ: 'Godos', winrate: 48 },
    builds: ['Scout Rush']
  },
  {
    id: 'atacama',
    name: 'Atacama',
    type: 'abierto',
    competitive: false,
    description: 'Abierto con recursos dispersos.',
    image: 'src/assets/img/maps/map-atacama.jpg',
    strong: { civ: 'Mayas', winrate: 53 },
    weak: { civ: 'Persas', winrate: 47 },
    builds: ['Archer Rush']
  },
  {
    id: 'land-madness',
    name: 'Land Madness',
    type: 'abierto',
    competitive: false,
    description: 'Terreno caótico y agresivo.',
    image: 'src/assets/img/maps/map-landmadness.jpg',
    strong: { civ: 'Aztecas', winrate: 52 },
    weak: { civ: 'Godos', winrate: 48 },
    builds: ['Drush']
  },
  {
    id: 'gold-rush',
    name: 'Gold Rush',
    type: 'abierto',
    competitive: true,
    description: 'Oro central. Peleas tempranas.',
    image: 'src/assets/img/maps/map-goldrush.jpg',
    strong: { civ: 'Lituanos', winrate: 54 },
    weak: { civ: 'Godos', winrate: 46 },
    builds: ['Fast Castle Knights']
  },
  {
    id: 'gold-pit',
    name: 'Gold Pit',
    type: 'abierto',
    competitive: true,
    description: 'Oro central rodeado de colinas.',
    image: 'src/assets/img/maps/map-goldpit.jpg',
    strong: { civ: 'Lituanos', winrate: 54 },
    weak: { civ: 'Godos', winrate: 46 },
    builds: ['Fast Castle Knights']
  },
  {
    id: 'runestones',
    name: 'Runestones',
    type: 'abierto',
    competitive: true,
    description: 'Mapa abierto con piedra cercana.',
    image: 'src/assets/img/maps/map-runestones.jpg',
    strong: { civ: 'Britanos', winrate: 54 },
    weak: { civ: 'Godos', winrate: 46 },
    builds: ['Archer Rush']
  },
  {
    id: 'valley',
    name: 'Valley',
    type: 'abierto',
    competitive: false,
    description: 'Valles y colinas pronunciadas.',
    image: 'src/assets/img/maps/map-valley.jpg',
    strong: { civ: 'Incas', winrate: 52 },
    weak: { civ: 'Hunos', winrate: 48 },
    builds: ['Defensive Boom']
  },
  {
    id: 'steppe',
    name: 'Steppe',
    type: 'abierto',
    competitive: false,
    description: 'Terreno plano con colinas aisladas.',
    image: 'src/assets/img/maps/map-steppe.jpg',
    strong: { civ: 'Cumanos', winrate: 53 },
    weak: { civ: 'Teutones', winrate: 47 },
    builds: ['Double Stable Scouts']
  },

  // ===== SEMI-CERRADOS =====
  {
    id: 'hideout',
    name: 'Hideout',
    type: 'semi-cerrado',
    competitive: true,
    description: 'Bosques cerrando el mapa. Boom seguro.',
    image: 'src/assets/img/maps/map-hideout.jpg',
    strong: { civ: 'Mayas', winrate: 54 },
    weak: { civ: 'Hunos', winrate: 46 },
    builds: ['Fast Castle', 'Boom 3 TC']
  },
  {
    id: 'hill-fort',
    name: 'Hill Fort',
    type: 'semi-cerrado',
    competitive: false,
    description: 'Bases elevadas con muros naturales.',
    image: 'src/assets/img/maps/map-hillfort.jpg',
    strong: { civ: 'Teutones', winrate: 53 },
    weak: { civ: 'Hunos', winrate: 47 },
    builds: ['Fast Castle']
  },
  {
    id: 'lombardia',
    name: 'Lombardia',
    type: 'semi-cerrado',
    competitive: false,
    description: 'Mapa amplio con rutas largas.',
    image: 'src/assets/img/maps/map-lombardia.jpg',
    strong: { civ: 'Persas', winrate: 52 },
    weak: { civ: 'Mayas', winrate: 48 },
    builds: ['Boom']
  },
  {
    id: 'bog-islands',
    name: 'Bog Islands',
    type: 'semi-cerrado',
    competitive: false,
    description: 'Tierra separada por agua.',
    image: 'src/assets/img/maps/map-bogislands.jpg',
    strong: { civ: 'Vikingos', winrate: 53 },
    weak: { civ: 'Godos', winrate: 47 },
    builds: ['Water Feudal']
  },
  {
    id: 'crater',
    name: 'Crater',
    type: 'semi-cerrado',
    competitive: false,
    description: 'Jugadores alrededor de un cráter.',
    image: 'src/assets/img/maps/map-crater.jpg',
    strong: { civ: 'Etíopes', winrate: 52 },
    weak: { civ: 'Persas', winrate: 48 },
    builds: ['Archers']
  },
  {
    id: 'fortress',
    name: 'Fortress',
    type: 'semi-cerrado',
    competitive: false,
    description: 'Inicio con murallas y castillos.',
    image: 'src/assets/img/maps/map-fortress.jpg',
    strong: { civ: 'Teutones', winrate: 54 },
    weak: { civ: 'Hunos', winrate: 46 },
    builds: ['Fast Imperial']
  },

  // ===== CERRADOS =====
  {
    id: 'arena',
    name: 'Arena',
    type: 'cerrado',
    competitive: true,
    description: 'Muros de piedra. Boom y monjes.',
    image: 'src/assets/img/maps/map-arena.jpg',
    strong: { civ: 'Aztecas', winrate: 57 },
    weak: { civ: 'Francos', winrate: 48 },
    builds: ['Drush FC', 'Monks + Siege']
  },
  {
    id: 'black-forest',
    name: 'Black Forest',
    type: 'cerrado',
    competitive: true,
    description: 'Pasillos cerrados y choke points.',
    image: 'src/assets/img/maps/map-blackforest.jpg',
    strong: { civ: 'Teutones', winrate: 54 },
    weak: { civ: 'Hunos', winrate: 46 },
    builds: ['Boom 4 TC']
  },
  {
    id: 'michi',
    name: 'Michi',
    type: 'cerrado',
    competitive: false,
    description: 'Ultra cerrado, late game.',
    image: 'src/assets/img/maps/map-michi.jpg',
    strong: { civ: 'Teutones', winrate: 53 },
    weak: { civ: 'Hunos', winrate: 47 },
    builds: ['Full Boom']
  },

  // ===== HÍBRIDOS =====
  {
    id: 'nomad',
    name: 'Nomad',
    type: 'hibrido',
    competitive: true,
    description: 'Inicio disperso. Adaptación constante.',
    image: 'src/assets/img/maps/map-nomad.jpg',
    strong: { civ: 'Jemeres', winrate: 55 },
    weak: { civ: 'Etíopes', winrate: 49 },
    builds: ['Fast Castle']
  },
  {
    id: 'four-lakes',
    name: 'Four Lakes',
    type: 'hibrido',
    competitive: true,
    description: 'Control de lagos tempranos.',
    image: 'src/assets/img/maps/map-fourlakes.jpg',
    strong: { civ: 'Vikingos', winrate: 55 },
    weak: { civ: 'Búlgaros', winrate: 47 },
    builds: ['Water Feudal']
  },
  {
    id: 'golden-swamp',
    name: 'Golden Swamp',
    type: 'hibrido',
    competitive: false,
    description: 'Pantanos y oro disputado.',
    image: 'src/assets/img/maps/map-goldenswamp.jpg',
    strong: { civ: 'Incas', winrate: 52 },
    weak: { civ: 'Godos', winrate: 48 },
    builds: ['Archers']
  },
  {
    id: 'scandinavia',
    name: 'Scandinavia',
    type: 'hibrido',
    competitive: true,
    description: 'Rutas terrestres y agua.',
    image: 'src/assets/img/maps/map-scandinavia.jpg',
    strong: { civ: 'Vikingos', winrate: 55 },
    weak: { civ: 'Burmese', winrate: 47 },
    builds: ['Water Feudal']
  },
  {
    id: 'baltic',
    name: 'Baltic',
    type: 'hibrido',
    competitive: false,
    description: 'Islas y costas amplias.',
    image: 'src/assets/img/maps/map-baltic.jpg',
    strong: { civ: 'Vikingos', winrate: 54 },
    weak: { civ: 'Godos', winrate: 46 },
    builds: ['Galleys']
  },
  {
    id: 'mediterranean',
    name: 'Mediterranean',
    type: 'hibrido',
    competitive: false,
    description: 'Agua central con costas.',
    image: 'src/assets/img/maps/map-mediterranean.jpg',
    strong: { civ: 'Italianos', winrate: 55 },
    weak: { civ: 'Godos', winrate: 45 },
    builds: ['Water Control']
  },
  {
    id: 'migration',
    name: 'Migration',
    type: 'hibrido',
    competitive: true,
    description: 'Migración a nuevas tierras.',
    image: 'src/assets/img/maps/map-migration.jpg',
    strong: { civ: 'Portugués', winrate: 54 },
    weak: { civ: 'Godos', winrate: 45 },
    builds: ['Dock temprano']
  },

  // ===== AGUA =====
  {
    id: 'islands',
    name: 'Islands',
    type: 'agua',
    competitive: true,
    description: 'Naval puro.',
    image: 'src/assets/img/maps/map-islands.jpg',
    strong: { civ: 'Italianos', winrate: 56 },
    weak: { civ: 'Godos', winrate: 45 },
    builds: ['Fast Feudal Water']
  },
  {
    id: 'archipelago',
    name: 'Archipelago',
    type: 'agua',
    competitive: false,
    description: 'Múltiples islas pequeñas.',
    image: 'src/assets/img/maps/map-archipelago.jpg',
    strong: { civ: 'Italianos', winrate: 55 },
    weak: { civ: 'Godos', winrate: 45 },
    builds: ['Dock → Galleys']
  },
  {
    id: 'continental',
    name: 'Continental',
    type: 'agua',
    competitive: false,
    description: 'Continentes separados por mar.',
    image: 'src/assets/img/maps/map-continental.jpg',
    strong: { civ: 'Portugués', winrate: 54 },
    weak: { civ: 'Godos', winrate: 46 },
    builds: ['Water Control']
  },

  // ===== ESPECIALES / TEAM =====
  {
    id: 'team-islands',
    name: 'Team Islands',
    type: 'agua',
    competitive: true,
    description: 'Naval por equipos.',
    image: 'src/assets/img/maps/map-teamislands.jpg',
    strong: { civ: 'Italianos', winrate: 55 },
    weak: { civ: 'Godos', winrate: 45 },
    builds: ['Team Water']
  },
  {
    id: 'yucatan',
    name: 'Yucatan',
    type: 'especial',
    competitive: false,
    description: 'Selva densa y rutas cerradas.',
    image: 'src/assets/img/maps/map-yucatan.jpg',
    strong: { civ: 'Mayas', winrate: 54 },
    weak: { civ: 'Persas', winrate: 46 },
    builds: ['Boom']
  },
  {
    id: 'amazon-tunnel',
    name: 'Amazon Tunnel',
    type: 'especial',
    competitive: false,
    description: 'Camino central estrecho.',
    image: 'src/assets/img/maps/map-amazontunnel.jpg',
    strong: { civ: 'Teutones', winrate: 54 },
    weak: { civ: 'Hunos', winrate: 46 },
    builds: ['Boom']
  },
  {
    id: 'coastal',
    name: 'Coastal',
    type: 'especial',
    competitive: false,
    description: 'Costa con expansión terrestre.',
    image: 'src/assets/img/maps/map-coastal.jpg',
    strong: { civ: 'Italianos', winrate: 53 },
    weak: { civ: 'Godos', winrate: 47 },
    builds: ['Hybrid Play']
  },
  {
    id: 'rivers',
    name: 'Rivers',
    type: 'especial',
    competitive: false,
    description: 'Ríos separando territorios.',
    image: 'src/assets/img/maps/map-rivers.jpg',
    strong: { civ: 'Vikingos', winrate: 53 },
    weak: { civ: 'Godos', winrate: 47 },
    builds: ['Water Control']
  },
  {
    id: 'salt-marsh',
    name: 'Salt Marsh',
    type: 'especial',
    competitive: false,
    description: 'Pantanos con rutas mixtas.',
    image: 'src/assets/img/maps/map-saltmarsh.jpg',
    strong: { civ: 'Incas', winrate: 52 },
    weak: { civ: 'Godos', winrate: 48 },
    builds: ['Archers']
  }
];
