const CIVILIZATIONS = [
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
},
{
  id: "celtas",
  name: "Celtas",
  region: "europa",
  style: "infanteria",
  difficulty: "baja",
  image: "images/celtas.jpg",
  recommended: "Push agresivo con asedio rápido.",
  builds: ["Infantería", "Asedio temprano"],
  bonuses: [
    "Unidades de asedio +25% velocidad",
    "Infantería más rápida",
    "Ovejas bajo control no se pueden robar"
  ],
  uniqueUnits: ["Guerreo Woad"],
  uniqueTechs: [
    "Stronghold (Castillos)",
    "Furor Celtica (Imperial)"
  ]
},
{
  id: "chinos",
  name: "Chinos",
  region: "asia",
  style: "hibrida",
  difficulty: "alta",
  image: "images/chinos.jpg",
  recommended: "Uno de los mejores booms del juego.",
  builds: ["Boom FC", "Arquero Feudal"],
  bonuses: [
    "Comienzan con +3 aldeanos y -200 recursos",
    "Tecnologías de granja más baratas",
    "Tecnologías militares más baratas"
  ],
  uniqueUnits: ["Chu Ko Nu"],
  uniqueTechs: [
    "Great Wall (Castillos)",
    "Rocketry (Imperial)"
  ]
},
{
  id: "coreanos",
  name: "Coreanos",
  region: "asia",
  style: "defensiva",
  difficulty: "media",
  image: "images/coreanos.jpg",
  recommended: "Torres baratas y arquería de montados resistente.",
  builds: ["Torre Rush", "Asedio pesado"],
  bonuses: [
    "Torres +2 alcance",
    "Minadores trabajan más rápido",
    "Galerías de tiro al blanco gratis"
  ],
  uniqueUnits: ["Carro de guerra", "Tortuga"],
  uniqueTechs: [
    "Panokseon (Castillos)",
    "Shinkichon (Imperial)"
  ]
},
{
  id: "cumanos",
  name: "Cumanos",
  region: "asia",
  style: "rush",
  difficulty: "alta",
  image: "images/cumanos.jpg",
  recommended: "El mejor rush de feudal del juego.",
  builds: ["Doble TC Feudal", "Steppe Lancers"],
  bonuses: [
    "Pueden construir TC en feudal",
    "Caballería más rápida",
    "Establos más baratos"
  ],
  uniqueUnits: ["Steppe Lancer", "Kipchak"],
  uniqueTechs: [
    "Steppe Husbandry (Castillos)",
    "Cuman Mercenaries (Imperial)"
  ]
},
{
  id: "dravidos",
  name: "Dravídicos",
  region: "asia",
  style: "infanteria",
  difficulty: "alta",
  image: "images/dravidos.jpg",
  recommended: "Infantería barata y excelente juego acuático.",
  builds: ["Infantería", "Naval"],
  bonuses: [
    "+200 madera al avanzar de edad",
    "Pesqueros más baratos",
    "Arqueros a pie con bonificaciones"
  ],
  uniqueUnits: ["Urumi Swordsman", "Thirisadai"],
  uniqueTechs: [
    "Medical Corps (Castillos)",
    "Wootz Steel (Imperial)"
  ]
},
{
  id: "eslavos",
  name: "Eslavos",
  region: "europa",
  style: "infanteria",
  difficulty: "media",
  image: "images/eslavos.jpg",
  recommended: "Infantería muy fuerte y asedio brutal.",
  builds: ["Asedio pesado", "Infantería"],
  bonuses: [
    "Granjas +15% eficiencia",
    "Infantería más fuerte",
    "Monasterios más baratos"
  ],
  uniqueUnits: ["Boyardo"],
  uniqueTechs: [
    "Orthodoxy (Castillos)",
    "Druzhina (Imperial)"
  ]
},
{
  id: "espanoles",
  name: "Españoles",
  region: "europa",
  style: "hibrida",
  difficulty: "media",
  image: "images/espanoles.jpg",
  recommended: "Muy buenos en pólvora y conquistadores.",
  builds: ["FC Conquistadores", "Pólvora"],
  bonuses: [
    "Construcción más rápida",
    "Pólvora dispara más rápido",
    "Mercados trabajan más rápido"
  ],
  uniqueUnits: ["Conquistador", "Misionero"],
  uniqueTechs: [
    "Inquisition (Castillos)",
    "Supremacy (Imperial)"
  ]
},
{
  id: "etiopes",
  name: "Etíopes",
  region: "africa",
  style: "arqueros",
  difficulty: "media",
  image: "images/etiopes.jpg",
  recommended: "Excelentes arqueros y muy buen timing de castillos.",
  builds: ["Archer Rush", "Fast Imp"],
  bonuses: [
    "+100 comida/oro al avanzar de edad",
    "Arqueros disparan más rápido",
    "Torre vigía gratis"
  ],
  uniqueUnits: ["Shotel Warrior"],
  uniqueTechs: [
    "Royal Heirs (Castillos)",
    "Torsion Engines (Imperial)"
  ]
},
{
  id: "francos",
  name: "Francos",
  region: "europa",
  style: "caballeria",
  difficulty: "baja",
  image: "images/francos.jpg",
  recommended: "Una de las mejores caballerías del juego.",
  builds: ["Scout Rush", "FC Caballeros"],
  bonuses: [
    "Caballería +20% HP",
    "Granjas más baratas",
    "Castillos más baratos"
  ],
  uniqueUnits: ["Lanzador de Hachas"],
  uniqueTechs: [
    "Bearded Axe (Castillos)",
    "Chivalry (Imperial)"
  ]
},
{
  id: "georgianos",
  name: "Georgianos",
  region: "europa",
  style: "defensiva",
  difficulty: "media",
  image: "images/georgianos.jpg",
  recommended: "Muy buena defensa con unidades únicas anti-caballería.",
  builds: ["Infantería", "Push de fortalezas"],
  bonuses: [
    "Monjes convierten más rápido",
    "Edificios defensivos más baratos",
    "Infantería con armadura extra"
  ],
  uniqueUnits: ["Monaspa"],
  uniqueTechs: [
    "Aznauri (Castillos)",
    "Darbas (Imperial)"
  ]
},{
  id: "godos",
  name: "Godos",
  region: "europa",
  style: "infanteria",
  difficulty: "baja",
  image: "images/godos.jpg",
  recommended: "Spam de infantería a gran escala.",
  builds: ["Infantería masiva", "Spam de unidades"],
  bonuses: [
    "Infantería más barata por edades",
    "Pueden crear aldeanos en el centro de población bajo ataque",
    "Caza más eficiente"
  ],
  uniqueUnits: ["Huskarle"],
  uniqueTechs: [
    "Anarchy (Castillos)",
    "Perfusion (Imperial)"
  ]
},
{
  id: "gurjaras",
  name: "Gurjaras",
  region: "asia",
  style: "caballeria",
  difficulty: "alta",
  image: "images/gurjaras.jpg",
  recommended: "Un meta muy flexible con unidades montadas y camellos.",
  builds: ["Camellos", "Chakram Throwers"],
  bonuses: [
    "Pueden guardar ganado en los molinos",
    "Caballería montada más fuerte",
    "Camellos mejorados"
  ],
  uniqueUnits: ["Chakram Thrower", "Shrivamsha Rider"],
  uniqueTechs: [
    "Kshatriyas (Castillos)",
    "Frontier Guards (Imperial)"
  ]
},
{
  id: "hunos",
  name: "Hunos",
  region: "europa",
  style: "caballeria",
  difficulty: "baja",
  image: "images/hunos.jpg",
  recommended: "El rush más agresivo con caballería ligera y arqueros.",
  builds: ["Scout Rush", "CA Rush"],
  bonuses: [
    "No necesitan casas",
    "Caballería más barata",
    "Talleres de asedio más rápidos"
  ],
  uniqueUnits: ["Tarquino"],
  uniqueTechs: [
    "Marauders (Castillos)",
    "Atheism (Imperial)"
  ]
},
{
  id: "incas",
  name: "Incas",
  region: "america",
  style: "hibrida",
  difficulty: "media",
  image: "images/incas.jpg",
  recommended: "Muy versátiles, grandes defensas y buenos pike-men.",
  builds: ["Torre Rush", "Infantería"],
  bonuses: [
    "Aldeanos afectados por mejoras de infantería",
    "Edificios más baratos",
    "Unidades anti-caballería más fuertes"
  ],
  uniqueUnits: ["Kamayuk", "Slinger"],
  uniqueTechs: [
    "Andean Sling (Castillos)",
    "Fabric Shields (Imperial)"
  ]
},
{
  id: "indostanos",
  name: "Indostanos",
  region: "asia",
  style: "caballeria",
  difficulty: "alta",
  image: "images/indostanos.jpg",
  recommended: "Una de las mejores economías del juego y camellos élite.",
  builds: ["Camellos", "Boom"],
  bonuses: [
    "Aldeanos más baratos",
    "Camellos más fuertes",
    "Pólvora más efectiva"
  ],
  uniqueUnits: ["Ghulam"],
  uniqueTechs: [
    "Grand Trunk Road (Castillos)",
    "Shatagni (Imperial)"
  ]
},
{
  id: "italianos",
  name: "Italianos",
  region: "europa",
  style: "arqueros",
  difficulty: "media",
  image: "images/italianos.jpg",
  recommended: "Muy fuertes en mapas de agua y arquería.",
  builds: ["Arqueros", "Naval"],
  bonuses: [
    "Subir de edad más barato",
    "Tecnologías de universidad más baratas",
    "Galeones baratos"
  ],
  uniqueUnits: ["Génova Arquero", "Condotiero"],
  uniqueTechs: [
    "Pavise (Castillos)",
    "Silk Road (Imperial)"
  ]
},
{
  id: "japoneses",
  name: "Japoneses",
  region: "asia",
  style: "infanteria",
  difficulty: "media",
  image: "images/japoneses.jpg",
  recommended: "Excelente infantería y juego de pesca.",
  builds: ["Infantería", "Feudal agresivo"],
  bonuses: [
    "Pescadores más eficientes",
    "Edificios de molino/mina trabajan más rápido",
    "Infantería ataca más rápido"
  ],
  uniqueUnits: ["Samurái"],
  uniqueTechs: [
    "Yasama (Castillos)",
    "Kataparuto (Imperial)"
  ]
},
{
  id: "jemeres",
  name: "Jemeres",
  region: "asia",
  style: "hibrida",
  difficulty: "baja",
  image: "images/jemeres.jpg",
  recommended: "Boom fácil y elefantes muy fuertes.",
  builds: ["Elefantes", "Boom sin requisitos"],
  bonuses: [
    "No requieren edificios para avanzar de edad",
    "Aldeanos pueden entrar a granjas sin casas",
    "Elefantes más rápidos"
  ],
  uniqueUnits: ["Ballestero Montado"],
  uniqueTechs: [
    "Tusk Swords (Castillos)",
    "Double Crossbow (Imperial)"
  ]
},
{
  id: "jurchens",
  name: "Jurchens",
  region: "asia",
  style: "caballeria",
  difficulty: "media",
  image: "images/jurchens.jpg",
  recommended: "Caballería pesada y arquería montada estable.",
  builds: ["Caballería", "CA"],
  bonuses: [
    "Bonificaciones contra caballería",
    "Economía estable con bonificación de pastizales",
    "Caballería resistente"
  ],
  uniqueUnits: ["Rattan Mounted Archer"],
  uniqueTechs: [
    "Steppe Diplomacy (Castillos)",
    "Northern Riders (Imperial)"
  ]
},
{
  id: "kitan",
  name: "Kitán",
  region: "asia",
  style: "arqueros",
  difficulty: "media",
  image: "images/kitan.jpg",
  recommended: "Arquería montada resistente y presión constante.",
  builds: ["CA", "Skirm Rush"],
  bonuses: [
    "Unidades a distancia más rápidas",
    "Monjes más baratos",
    "Arquería montada con resistencia extra"
  ],
  uniqueUnits: ["Khitai Horse Archer"],
  uniqueTechs: [
    "Steppe Arrows (Castillos)",
    "Grand Hunt (Imperial)"
  ]
},
// 31–40
{
  id: "lituanos",
  name: "Lituanos",
  region: "europa",
  style: "caballeria",
  difficulty: "media",
  image: "img/civs/lituanos.png",
  recommended: "Civilización flexible con caballería fuerte y reliquias que potencian mucho su late game.",
  bonuses: [
    "+150 de comida inicial.",
    "Cada reliquia otorga +1 de ataque a la Caballería (hasta +4).",
    "Escaramuzadores de Élite con +2 de armadura pierce.",
    "Monasterios trabajan un 20% más rápido."
  ],
  uniqueUnits: ["Leitis"],
  uniqueTechs: ["Hill Forts", "Towershields"],
  builds: ["Scout Rush", "Knight Rush", "Relic Play", "Fast Castle"],
},

{
  id: "magiares",
  name: "Magiares",
  region: "europa",
  style: "caballeria",
  difficulty: "media",
  image: "img/civs/magiares.png",
  recommended: "Excelentes para rush y para juego agresivo basado en caballería.",
  bonuses: [
    "Forja gratis al pasar a Edad Feudal.",
    "Maestranza gratis en Edad de Castillos.",
    "Arqueros a caballo 10% más baratos (Feudal), 15% (Castillos), 20% (Imperial).",
    "Escaramuzadores +1 pierce armor."
  ],
  uniqueUnits: ["Huszar Magiar"],
  uniqueTechs: ["Recurve Bow", "Corvinian Army"],
  builds: ["Scout Rush", "Knight Rush", "Hussar Spam"],
},

{
  id: "malayos",
  name: "Malayos",
  region: "asia",
  style: "hibrida",
  difficulty: "alta",
  image: "img/civs/malayos.png",
  recommended: "Civilización muy técnica de economía rápida y poder naval fuerte.",
  bonuses: [
    "Avanzan de edad 66% más rápido.",
    "Pescadores trabajan 30% más rápido.",
    "Las casas dan +10 de población.",
    "Las unidades navales cuestan 33% menos."
  ],
  uniqueUnits: ["Karambit Warrior"],
  uniqueTechs: ["Thalassocracy", "Forced Levy"],
  builds: ["Fast Feudal", "Water Control", "Karambit Flood"],
},

{
  id: "malies",
  name: "Malíes",
  region: "africa",
  style: "infanteria",
  difficulty: "media",
  image: "img/civs/malies.png",
  recommended: "Infantería resistente y buena flexibilidad económica.",
  bonuses: [
    "Edificios cuestan 15% menos madera.",
    "Infantería +1 pierce armor por edad (hasta +3).",
    "Minas dan +15% oro.",
    "Universidad trabaja 80% más rápido."
  ],
  uniqueUnits: ["Gbeto"],
  uniqueTechs: ["Farimba", "Tigui"],
  builds: ["Fast Castle", "Infantry Push", "Knight Rush"],
},

{
  id: "mayas",
  name: "Mayas",
  region: "america",
  style: "arqueros",
  difficulty: "alta",
  image: "img/civs/mayas.png",
  recommended: "Probablemente los mejores arqueros del juego. Economía eficiente.",
  bonuses: [
    "Recursos duran 15% más.",
    "Arqueros cuestan 10% menos (Feudal), 20% (Castillos), 30% (Imperial).",
    "Empiezan con +1 aldeano, -50 comida.",
    "Murallas más baratas."
  ],
  uniqueUnits: ["Plumed Archer"],
  uniqueTechs: ["Eldorado", "Hul'che Javelineers"],
  builds: ["Archer Rush", "Plumed Archer Boom"],
},

{
  id: "mongoles",
  name: "Mongoles",
  region: "asia",
  style: "caballeria",
  difficulty: "media",
  image: "img/civs/mongoles.png",
  recommended: "Los mejores arqueros a caballo del juego. Muy agresivos.",
  bonuses: [
    "Cazadores trabajan 50% más rápido.",
    "Arqueros a Caballo disparan 25% más rápido.",
    "Mangudai eficientes contra maquinaria.",
    "Caballería ligera +30% HP."
  ],
  uniqueUnits: ["Mangudai"],
  uniqueTechs: ["Drill", "Nomads"],
  builds: ["Scout Rush", "Archer Cavalry Spam", "Mangudai Boom"],
},

{
  id: "persas",
  name: "Persas",
  region: "asia",
  style: "caballeria",
  difficulty: "media",
  image: "img/civs/persas.png",
  recommended: "Excelente economía y elefantes extremadamente poderosos.",
  bonuses: [
    "+50 comida y oro inicial.",
    "Centro urbano y muelle trabajan 10% más rápido (Feudal), 15% (Castillos), 20% (Imperial).",
    "Caballería tiene +1 ataque vs arqueros.",
    "Elefante de guerra muy poderoso."
  ],
  uniqueUnits: ["War Elephant"],
  uniqueTechs: ["Boiling Oil", "Mahouts"],
  builds: ["Fast Castle", "Knight Rush", "Elephant Push"],
},

{
  id: "polacos",
  name: "Polacos",
  region: "europa",
  style: "caballeria",
  difficulty: "media",
  image: "img/civs/polacos.png",
  recommended: "Gran economía mediante las arboledas y caballería barata.",
  bonuses: [
    "Aldeanos regeneran HP.",
    "Caballería ligera y escaramuzadores en establo.",
    "Caballería cuesta -20% oro.",
    "Folwarks reemplazan molinos y dan comida adicional."
  ],
  uniqueUnits: ["Obuch"],
  uniqueTechs: ["Szlachta Privileges", "Lechitic Legacy"],
  builds: ["Scout Rush", "Knight Spam", "Obuch Push"],
},

{
  id: "portugueses",
  name: "Portugueses",
  region: "europa",
  style: "naval",
  difficulty: "alta",
  image: "img/civs/portugueses.png",
  recommended: "Naval fuerte y unidades únicas multipropósito.",
  bonuses: [
    "Todas las unidades cuestan -20% oro.",
    "Barcos con +10% HP.",
    "Mejoras de ballesta más baratas.",
    "Tecnologías de universidad 30% más baratas."
  ],
  uniqueUnits: ["Organ Gun", "Caravel"],
  uniqueTechs: ["Carrack", "Arquebus"],
  builds: ["Water Boom", "Organ Gun Push", "Fast Castle"],
},

{
  id: "romanos",
  name: "Romanos",
  region: "europa",
  style: "infanteria",
  difficulty: "media",
  image: "img/civs/romanos.png",
  recommended: "Infantería reforzada y economía sólida. Nueva civ del DLC.",
  bonuses: [
    "Infantería cuesta 10% menos (Feudal), 15% (Castillos), 20% (Imperial).",
    "Edificios militares +50% HP.",
    "Aldeanos construyen 10% más rápido.",
    "Monjes +1 armadura cuerpo a cuerpo."
  ],
  uniqueUnits: ["Legionary"],
  uniqueTechs: ["Centurion", "Ballistaria"],
  builds: ["Infantry Push", "Fast Castle", "Mixed Army"],
},
// 41–50
{
  id: "sarracenos",
  name: "Sarracenos",
  region: "medio_oriente",
  style: "arqueros",
  difficulty: "media",
  image: "img/civs/sarracenos.png",
  recommended: "Fuerte juego de arqueros y control del mercado. Excelente para estrategias de presión temprana.",
  bonuses: [
    "Mercado con tarifas mucho más favorables.",
    "Arqueros a caballo +10 HP.",
    "Barcos de transporte con capacidad duplicada.",
    "Arqueros a caballo generan +50% de daño extra a edificios."
  ],
  uniqueUnits: ["Mameluco"],
  uniqueTechs: ["Zealotry", "Counterweights"],
  builds: ["Market Abuse", "Fast Castle", "Camel Archers"],
},

{
  id: "shu",
  name: "Shu",
  region: "asia",
  style: "infanteria",
  difficulty: "media",
  image: "img/civs/shu.png",
  recommended: "Civilización del DLC lords of the west 2024. Enfocados en infantería resistente y asedio eficiente.",
  bonuses: [
    "Infantería +1 de ataque contra estructuras.",
    "Monjes convierten maquinaria más rápido.",
    "Ganadería más barata.",
    "Centros urbanos disparan +1 proyectil."
  ],
  uniqueUnits: ["Tiger Guard"],
  uniqueTechs: ["Imperial Registers", "Warrior Monks"],
  builds: ["Infantry Push", "Fast Castle", "Siege Follow-up"],
},

{
  id: "sicilianos",
  name: "Sicilianos",
  region: "europa",
  style: "infanteria",
  difficulty: "alta",
  image: "img/civs/sicilianos.png",
  recommended: "Infantería muy resistente, donjons y caballería poderosa en late game.",
  bonuses: [
    "Reciben 50% menos daño bonus.",
    "Donjons disponibles en Feudal.",
    "Granjeros trabajan 100% más rápido.",
    "Caballeros +1/+2 armadura en edades avanzadas."
  ],
  uniqueUnits: ["Serjeant"],
  uniqueTechs: ["First Crusade", "Scutage"],
  builds: ["Serjeant Rush", "Fast Castle", "Knight Power"],
},

{
  id: "tataros",
  name: "Tátaros",
  region: "asia",
  style: "caballeria",
  difficulty: "media",
  image: "img/civs/tataros.png",
  recommended: "Excelentes con caballería de arqueros, trabajan mejor en terreno elevado.",
  bonuses: [
    "Unidades tienen +50% de daño desde colina.",
    "Caballos obtienen +2 flechas adicionales al avanzar.",
    "Animales cazados proporcionan +50% comida.",
    "Arquero a caballo +1 rango en Imperial."
  ],
  uniqueUnits: ["Keshik", "Flaming Camel"],
  uniqueTechs: ["Silk Armor", "Timurid Siegecraft"],
  builds: ["Cavalry Archer Boom", "Keshik Spam", "Hills Control"],
},

{
  id: "teutones",
  name: "Teutones",
  region: "europa",
  style: "infanteria",
  difficulty: "media",
  image: "img/civs/teutones.png",
  recommended: "Defensivos con infantería extremadamente fuerte y caballería de élite.",
  bonuses: [
    "Monjes tienen +1 rango de conversión por edad.",
    "Cuarteles y establos más baratos.",
    "Torres y castillos con mayor rango.",
    "Gran resistencia contra conversiones."
  ],
  uniqueUnits: ["Teutonic Knight"],
  uniqueTechs: ["Ironclad", "Crenellations"],
  builds: ["Infantry Push", "Castle Drop", "Boom Defensivo"],
},

{
  id: "turcos",
  name: "Turcos",
  region: "medio_oriente",
  style: "gunpowder",
  difficulty: "alta",
  image: "img/civs/turcos.png",
  recommended: "Los mejores cañones y pólvora del juego. Excelente late game.",
  bonuses: [
    "Unidades de pólvora +25% HP.",
    "Tecnologías de pólvora más baratas.",
    "Minado de oro 20% más rápido.",
    "Camellos y Hussares gratuitos en Imperial."
  ],
  uniqueUnits: ["Janissary"],
  uniqueTechs: ["Sipahi", "Artillery"],
  builds: ["Fast Imp", "Gunpowder Push", "Janissary Rush"],
},

{
  id: "vietnamitas",
  name: "Vietnamitas",
  region: "asia",
  style: "arqueros",
  difficulty: "alta",
  image: "img/civs/vietnamitas.png",
  recommended: "Arqueros de élite y economía basada en información del enemigo.",
  bonuses: [
    "Revelas la posición de los enemigos desde el inicio.",
    "Unidades de arqueros tienen +1/+2 HP por edad.",
    "Impulso económico por aldeanos más baratos.",
    "Elefantes de arqueros disponibles."
  ],
  uniqueUnits: ["Rattan Archer"],
  uniqueTechs: ["Chatras", "Paper Money"],
  builds: ["Archer Rush", "Rattan Push", "Fast Castle"],
},

{
  id: "vikingos",
  name: "Vikingos",
  region: "europa",
  style: "naval",
  difficulty: "alta",
  image: "img/civs/vikingos.png",
  recommended: "Fuerte economía y dominio naval temprano.",
  bonuses: [
    "Infantería más barata (-15/ -20/ -25%).",
    "Barcos de guerra +20% HP.",
    "Carretilla y carreta gratis.",
    "Docas más baratas."
  ],
  uniqueUnits: ["Berserk", "Longboat"],
  uniqueTechs: ["Chieftains", "Berserkergang"],
  builds: ["Water Control", "Fast Castle", "Berserk Push"],
},

{
  id: "wei",
  name: "Wei",
  region: "asia",
  style: "caballeria",
  difficulty: "media",
  image: "img/civs/wei.png",
  recommended: "Civilización del DLC Dynasties of China. Caballería móvil y economía de pastos.",
  bonuses: [
    "Granjas generan comida extra periódicamente.",
    "Caballería +1 de armadura.",
    "Los establos trabajan 20% más rápido.",
    "Arqueros montados más baratos."
  ],
  uniqueUnits: ["Tiger Knight"],
  uniqueTechs: ["Imperial Examinations", "Heavenly Cavalry"],
  builds: ["Knight Rush", "Fast Castle", "Mounted Archers"],
},

{
  id: "wu",
  name: "Wu",
  region: "asia",
  style: "hibrida",
  difficulty: "media",
  image: "img/civs/wu.png",
  recommended: "Civilización versátil del DLC Dynasties of China con buen equilibrio militar.",
  bonuses: [
    "Granjas 10% más baratas.",
    "Mejoras de herrería 25% más baratas.",
    "Edificios militares construidos 20% más rápido.",
    "Barcos de fuego +1 rango."
  ],
  uniqueUnits: ["Tiger Archer"],
  uniqueTechs: ["Imperial Bureaucracy", "Yangtze Armor"],
  builds: ["Archer Rush", "Fast Castle", "Mixed Composition"],
}
];
