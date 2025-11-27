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
  },
  {
  id: "armenios",
  name: "Armenios",
  region: "asia",
  style: "infanteria",
  difficulty: "media",
  image: "images/armenios.jpg",
  recommended: "Muy buenos contra infantería y con unidades únicas resistentes.",
  builds: ["Infantería", "Push de castillos"],
  bonuses: [
    "Milicia y líneas de espadachines más baratas",
    "Castillos crean unidades únicas más rápido",
    "Tecnologías de herrería más baratas"
  ],
  uniqueUnits: ["Arquero de Nakharar", "Kleth"],
  uniqueTechs: [
    "Azat (Castillos)",
    "Nakharar Training (Imperial)"
  ]
},
{
  id: "aztecs",
  name: "Aztecas",
  region: "america",
  style: "infanteria",
  difficulty: "alta",
  image: "images/aztecas.jpg",
  recommended: "Excelente rush en Feudal y Castillos, infantería muy fuerte.",
  builds: ["Driush", "Águilas FC"],
  bonuses: [
    "Aldeanos llevan +5 recursos",
    "Unidades militares generan +33% de fe extra",
    "Monjes más fuertes por tecnologías gratis"
  ],
  uniqueUnits: ["Guerrero Águila", "Guerrero Jaguar"],
  uniqueTechs: [
    "Atlatl (Castillos)",
    "Guarida (Imperial)"
  ]
},
{
  id: "bengalies",
  name: "Bengalíes",
  region: "asia",
  style: "elefantes",
  difficulty: "alta",
  image: "images/bengalies.jpg",
  recommended: "Elefantes potentes y economía fuerte con aldeanos extra por edad.",
  builds: ["Elefantes", "Boom económico"],
  bonuses: [
    "+2 aldeanos gratis al avanzar de edad",
    "Barcos regeneran HP",
    "Elefantes reciben menos daño"
  ],
  uniqueUnits: ["Ratha"],
  uniqueTechs: [
    "Paiks (Castillos)",
    "Mahouts (Imperial)"
  ]
},
{
  id: "bereberes",
  name: "Bereberes",
  region: "africa",
  style: "caballeria",
  difficulty: "media",
  image: "images/bereberes.jpg",
  recommended: "Caballería barata y camellos de élite muy fuertes.",
  builds: ["Scouts", "Camellos"],
  bonuses: [
    "Caballería cuesta -15/-20% (Castillos/Imperial)",
    "Naves rápidas",
    "Aldeanos se mueven más rápido"
  ],
  uniqueUnits: ["Genitour", "Camello Arquero"],
  uniqueTechs: [
    "Kasbah (Castillos)",
    "Maghrebi Camels (Imperial)"
  ]
},
{
  id: "birmanos",
  name: "Birmanos",
  region: "asia",
  style: "infanteria",
  difficulty: "media",
  image: "images/birmanos.jpg",
  recommended: "Infantería con ataque extra y monjes potentes.",
  builds: ["Monjes", "Infantería agresiva"],
  bonuses: [
    "+1 ataque a infantería por edad",
    "Tecnologías de monasterio más baratas",
    "Lumber Camp gratis"
  ],
  uniqueUnits: ["Arambai"],
  uniqueTechs: [
    "Howdah (Castillos)",
    "Manipur Cavalry (Imperial)"
  ]
},
{
  id: "bizantinos",
  name: "Bizantinos",
  region: "europa",
  style: "defensiva",
  difficulty: "baja",
  image: "images/bizantinos.jpg",
  recommended: "La mejor civilización defensiva del juego.",
  builds: ["Boom", "Tortugas"],
  bonuses: [
    "Edificios más resistentes",
    "Contracabaliería más barata",
    "Barcos con fuego griego"
  ],
  uniqueUnits: ["Catafracta"],
  uniqueTechs: [
    "Logística (Castillos)",
    "Greek Fire (Imperial)"
  ]
},
{
  id: "bohemios",
  name: "Bohemios",
  region: "europa",
  style: "arcabuz",
  difficulty: "alta",
  image: "images/bohemios.jpg",
  recommended: "Una de las mejores civilizaciones de pólvora.",
  builds: ["Órganos", "Boom fuerte"],
  bonuses: [
    "Mejoras económicas más baratas",
    "Química gratis",
    "Monjes potentes"
  ],
  uniqueUnits: ["Húsares de la Ville", "Hussite Wagon"],
  uniqueTechs: [
    "Wagenburg Tactics (Castillos)",
    "Hussite Reforms (Imperial)"
  ]
},
{
  id: "borgonones",
  name: "Borgoñones",
  region: "europa",
  style: "economia",
  difficulty: "media",
  image: "images/borgonones.jpg",
  recommended: "Economía muy fuerte y caballería excelente.",
  builds: ["FC Caballería", "Boom"],
  bonuses: [
    "Tecnologías económicas disponibles 1 edad antes",
    "Caballería más barata",
    "Conversión de comida en oro (Viñedos)"
  ],
  uniqueUnits: ["Coustillier"],
  uniqueTechs: [
    "Burgundian Vineyards (Castillos)",
    "Flemish Revolution (Imperial)"
  ]
},
{
  id: "britanos",
  name: "Britanos",
  region: "europa",
  style: "arqueros",
  difficulty: "baja",
  image: "images/britanos.jpg",
  recommended: "Excelentes arqueros con gran alcance.",
  builds: ["FC Arqueros", "Crossbow Timing"],
  bonuses: [
    "Arqueros +1/+2 alcance (Castillos/Imperial)",
    "Centros urbanos trabajan más rápido",
    "Granjas más baratas"
  ],
  uniqueUnits: ["Arquero de Tiro Largo"],
  uniqueTechs: [
    "Yeomen (Castillos)",
    "Warwolf (Imperial)"
  ]
},
{
  id: "bulgaros",
  name: "Búlgaros",
  region: "europa",
  style: "infanteria",
  difficulty: "media",
  image: "images/bulgaros.jpg",
  recommended: "Infantería poderosa y konniks muy resistentes.",
  builds: ["Infantería", "Push de Krepost"],
  bonuses: [
    "Mejora de espadachines gratis",
    "Forjas más rápidas",
    "Kreposts reemplazan castillos"
  ],
  uniqueUnits: ["Konnik"],
  uniqueTechs: [
    "Stirrups (Castillos)",
    "Bagains (Imperial)"
  ]
}

];
