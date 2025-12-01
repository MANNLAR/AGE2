const CIVILIZATIONS = [
  {
  id: "armenios",
  name: "Armenios",
  region: "asia",
  style: "infanteria y naval",
  difficulty: "media",
  image: "src/assets/civ/armenios.png",
  recommended: "Muy buenos contra infantería y con unidades únicas resistentes.",
  builds: ["Infantería", "Push de castillos"],
  bonuses: [
    "Las carretas de mulas cuestan -25%",
    "Las tecnologías de la carreta de mulas son un 40% más efectivas",
    "La primera Iglesia Fortificada recibe una reliquia gratis.",
    "Espadachín de Espada Larga en adelante y la línea de Lancero están disponibles una Edad antes.",
    "La línea de Galera y Dromon* disparan dos proyectiles"
  ],
  uniqueUnits: ["Arquero Compuesto", "Sacerdote Guerrero"],
  uniqueTechs: [
    "Flota de cilicia: Buques de demolición +20% para el radio de explosión; la línea de galera de guerra y dromon +1 de rango (Castillos)",
    "Relicarios: Infantería (excepto la línea de Piquero) +30 puntos de vida; Sacerdote Guerrero +100% velocidad de curación.(Imperial)"
  ]
},
{
  id: "aztecas",
  name: "Aztecas",
  region: "america",
  style: "infanteria y monjes",
  difficulty: "alta",
  image: "src/assets/civ/aztecas.png",
  recommended: "Excelente rush en Feudal y Castillos, infantería muy fuerte.",
  builds: ["Driush", "Águilas FC"],
  bonuses: [
    "Aldeanos llevan +3 recursos",
    "Unidades militares se crean un +11% más rápido",
    "Los monjes recibem +5PR por cada tecnología del monasterio desarollada",
    "comienzan con +50 de oro"
  ],
  uniqueUnits: ["Guerrero Águila", "Guerrero Jaguar"],
  uniqueTechs: [
    "Atlatl: Los Guerrilleros obtienen +1 de ataque y alcance. (Castillos)",
    "Guarida: La infantería obtiene +4 de ataque. (Imperial)"
  ]
},
{
  id: "bengalies",
  name: "Bengalíes",
  region: "asia",
  style: "elefantes y Naval",
  difficulty: "alta",
  image: "src/assets/civ/bengalies.png",
  recommended: "Elefantes potentes y economía fuerte con aldeanos extra por edad.",
  builds: ["Elefantes", "Boom económico"],
  bonuses: [
    "+2 aldeanos gratis al avanzar de edad",
    "Barcos regeneran 15 PR/minuto",
    "Elefantes reciben menos -25% de daño y son más resistentes a la conversión",
    "Las unidades de caballeria tienen +2 de ataque contra hostigadores",
    "Los monjes tienen +3/+3 de armadura"
  ],
  uniqueUnits: ["Ratha"],
  uniqueTechs: [
    "Paiks: Rathas y elefantes atacan un 20% más rápido.(Castillos)",
    "Mahayana: Aldeanos y Monjes ocupan -10% de población(Imperial)"
  ]
},
{
  id: "bereberes",
  name: "Bereberes",
  region: "africa",
  style: "camellos y naval",
  difficulty: "media",
  image: "src/assets/civ/bereberes.png",
  recommended: "Caballería barata y camellos de élite muy fuertes.",
  builds: ["Scouts", "Camellos"],
  bonuses: [
    "Caballería cuesta -15/-20% (Castillos/Imperial)",
    "Los barcos se mueven un +10% más rápido.",
    "Aldeanos se mueven un %5 más rapido en la alta edad media y 10% más rapido a partir de feudal"
  ],
  uniqueUnits: ["Escaramuzador Zenete", "Camello Arquero"],
  uniqueTechs: [
    "Alcazabas: Aumenta la velocidad de trabajo de todos los Castillos del equipo en un +25%. (Castillos)",
    "Dromedarios Magrebíes: Las unidades a camello regeneran 0.25 PR/min. (Imperial)"
  ]
},
{
  id: "birmanos",
  name: "Birmanos",
  region: "asia",
  style: "Monjes y Elefantes",
  difficulty: "media",
  image: "src/assets/civ/birmanos.png",
  recommended: "Infantería con ataque extra y monjes potentes.",
  builds: ["Monjes", "Infantería agresiva"],
  bonuses: [
    "La infantería tiene +1/+2/+3 de ataque en la Edad Feudal/Castillos/Imperial.",
    "Las mejoras del campamento maderero son gratis.",
    "Las tecnologías del Monasterio son un 50% más baratas.",
    "Los Elefantes de guerra tienen +1/+1 de armadura."
  ],
  uniqueUnits: ["Arambai"],
  uniqueTechs: [
    "Caballería Manipur: Otorga a la caballería +4 de daño contra arqueros.(Castillos)",
    "Howdah: Otorga a los Elefante de Combate +1/+1 de armadura.(Imperial)"
  ]
},
{
  id: "bizantinos",
  name: "Bizantinos",
  region: "europa",
  style: "defensiva",
  difficulty: "baja",
  image: "src/assets/civ/bizantinos.png",
  recommended: "La mejor civilización defensiva del juego.",
  builds: ["Boom", "Tortugas"],
  bonuses: [
    "Los Edificios, Muros/Puertas, y Granjas tienen +10%/+20%/+30%/+40% Puntos de resistencia en la Alta Edad Media/Feudal/Castillos/Imperial.",
    "Jinetes a camello, Hostigadores y Lanceros cuestan un -25%.",
    "Jinetes a camello, Hostigadores y Lanceros cuestan un -25%.",
    "Avanzar a la Edad Imperial cuesta un -33%.",
    "Guardia Urbana y Patrulla Urbana gratis."
  ],
  uniqueUnits: ["Catafracta"],
  uniqueTechs: [
    "Fuego Griego: Los Brulotes obtienen +1 de alcance; Dromones +0.2 de daño en área; Torres de Bombardeo +0.5 de daño en área [25% de efecto sin daño por fuego amigo].",
    "Logística: Otorga a las Catafractas daño en área en un radio de 0.5 (daño puro de 5); y +6 de ataque contra infantería. (Imperial)"
  ]
},
{
  id: "bohemios",
  name: "Bohemios",
  region: "europa",
  style: "Polvora y monjes",
  difficulty: "alta",
  image: "src/assets/civ/bohemios.png",
  recommended: "Una de las mejores civilizaciones de pólvora.",
  builds: ["Órganos", "Boom fuerte"],
  bonuses: [
    "Herrerías y Universidades cuestan -100 madera.",
    "Química y Artillero Manual disponibles en la Edad de los Castillos",
    "La línea del Lancero infligen un 25% daño adicional.",
    "Fervor y Santidad afecta a los Aldeanos.",
    "Las tecnologías del Campamento Minero son gratis."
  ],
  uniqueUnits: ["Obús", "Carro de guierra husita"],
  uniqueTechs: [
    "Táctica de Fuerte de Carretas: Unidades de pólvora se mueven 15% más rápido.(Castillos)",
    "Reformas Husitas: Monjes y tecnologías del Monasterio tienen su coste en oro sustituido por comida.(Imperial)"
  ]
},
{
  id: "borgonones",
  name: "Borgoñones",
  region: "europa",
  style: "caballería",
  difficulty: "media",
  image: "src/assets/civ/borgoñeses.png",
  recommended: "Economía muy fuerte y caballería excelente.",
  builds: ["FC Caballería", "Boom"],
  bonuses: [
    "Las mejoras económicas (excepto Acuñación y Banca) están disponibles una edad antes y cuestan -33% alimento.",
    "Las tecnologías del Establo son un 50% más baratas. La mejora de Caballero disponible en la Edad de los Castillos.",
    "Las unidades de pólvora infligen +25% de daño."
  ],
  uniqueUnits: ["Coustillier, Milicia flamenca"],
  uniqueTechs: [
    "Viñedos de Borgoña: Los granjeros producen una pequeña cantidad de oro además de comida.(Castillos)",
    "Revolución Flamenca: Mejora todos los Aldeanos existentes en Milicia Flamenca, y habilita la formación de Milicia flamenca en los Cuarteles."
  ]
},
{
  id: "britanos",
  name: "Britanos",
  region: "europa",
  style: "arqueros",
  difficulty: "baja",
  image: "src/assets/civ/britanos.png",
  recommended: "Excelentes arqueros con gran alcance.",
  builds: ["FC Arqueros", "Crossbow Timing"],
  bonuses: [
    "Los arqueros a pie (excepto Hostigadores) tienen +1/+2 de alcance en la Edad de los Castillos/Imperial.",
    "Los Centros Urbanos cuestan -50% madera a partir de la Edad de los Castillos.",
    "Los pastores trabajan un 25% más rápido."
  ],
  uniqueUnits: ["Arquero de Tiro Largo"],
  uniqueTechs: [
    "Yeomen: Los arqueros a pie tienen +1 de alcance y las Torres +2 de ataque.(Castillos)",
    "Warwolf:Los Lanzapiedras obtienen Daño en área y +100% de puntería contra unidades. (Imperial)"
  ]
},
{
  id: "bulgaros",
  name: "Búlgaros",
  region: "europa",
  style: "infanteria",
  difficulty: "media",
  image: "src/assets/civ/bulgaros.png",
  recommended: "Infantería poderosa y konniks muy resistentes.",
  builds: ["Infantería", "Push de Krepost"],
  bonuses: [
    "La línea de Milicia se mejora gratis.",
    "Centros urbanos cuestan -50% piedra (excepto el Centro Urbano inicial).",
    "Las tecnologías de la Herrería y Taller de Maquinaria de Asedio cuestan -50% alimento."
  ],
  uniqueUnits: ["Konnik"],
  uniqueTechs: [
    "stribos: La caballería ataca un 33% más rápido. (Castillos)",
    "Nobles Bagain: La línea de Milicia obtiene +5 de armadura. (Imperial)"
  ]
},
{
  id: "celtas",
  name: "Celtas",
  region: "europa",
  style: "infanteria",
  difficulty: "baja",
  image: "src/assets/civ/celtas.png",
  recommended: "Push agresivo con asedio rápido.",
  builds: ["Infantería", "Asedio temprano"],
  bonuses: [
    "La infantería se mueve un 15% más rápido a partir de la Edad Feudal.",
    "Las Armas de Asedio disparan un 25% más rápido.",
    "Los aldeanos recogen madera un 25% más rápido",
    "El ganado enemigo se puede convertir sin importar si el enemigo tiene visión sobre la unidad"
  ],
  uniqueUnits: ["Invasor de pastos"],
  uniqueTechs: [
    "Bastión: Los Castillos y torres disparan un 33% más rápido; los Castillos pueden curar a las unidades de infantería aliadas cercanas 30 puntos de vida por minuto en un cuadrado de 18 baldosas. (Castillos)",
    "Furor Celta: Las unidades del Taller de Maquinaria de Asedio tienen un +40% de PR.(Imperial)"
  ]
},
{
  id: "chinos",
  name: "Chinos",
  region: "asia",
  style: "Arqueros",
  difficulty: "alta",
  image: "src/assets/civ/chinos.png",
  recommended: "Uno de los mejores booms del juego.",
  builds: ["Boom FC", "Arquero Feudal"],
  bonuses: [
    "Comienzan la partida con +3 Aldeanos, pero con -200 alimento, -50 madera",
    "Los Centros Urbanos soportan 15 de población (en vez de cinco) y tienen +7 de Línea de visión.",
    "Las tecnologías son un 5%/10%/15% más baratas en la Edad Feudal/Castillos/Imperial.",
    "Los Buques de demolición tienen +50% PR."
  ],
  uniqueUnits: ["Chu Ko Nu"],
  uniqueTechs: [
    "Gran Muralla: Aumenta los Puntos de resistencia de los muros y torres en un +30%. (Castillos)",
    "Cohetería: Aumenta el ataque de los Chu Ko Nu en +2 y de los Escorpiones en +4. (Imperial)"
  ]
},
{
  id: "coreanos",
  name: "Coreanos",
  region: "asia",
  style: ["defensiva", "naval"],
  difficulty: "media",
  image: "src/assets/civ/coreanos.png",
  recommended: "Torres baratas y arquería de montados resistente.",
  builds: ["Torre Rush", "Asedio pesado"],
  bonuses: [
    "Aldeanos tiene +3 Línea de visión.",
    "Canteros trabajan 20% más rápido.",
    "Las Torres se mejoran gratis al avanzar de Edad (la Torre de Bombardeo requiere de Química).",
    "Las mejoras para armadura para arqueros son gratis.",
    "Los Barcos cuestan -20% madera.",
    "Los Arqueros y la infantería cuestan -50% madera."
  ],
  uniqueUnits: ["Carro de guerra", "Barco tortuga"],
  uniqueTechs: [
    "Eupseong: Las torres (excepto Torres de Bombardeo) obtienen +2 de alcance. (Castillos)",
    " Shinkichon: Otorga a la línea de Manganas +1 de alcance. (Imperial)"
  ]
},
{
  id: "cumanos",
  name: "Cumanos",
  region: "asia",
  style: "Caballeria",
  difficulty: "alta",
  image: "src/assets/civ/cumanos.png",
  recommended: "El mejor rush de feudal del juego.",
  builds: ["Doble TC Feudal", "Steppe Lancers"],
  bonuses: [
    "Pueden construir TC en feudal",
    "Los Establos y las Galerías de tiro con arco cuestan -75 madera.",
    "El Taller de Maquinaria de Asedio y ariete disponible desde la Edad Feudal; la mejora a Ariete Cubierto disponible en la Edad de los Castillos.",
    "La caballería se mueve un 5%/10%/15% más rápido en la Edad Feudal/Castillos/Imperial."
  ],
  uniqueUnits: ["Kipchak"],
  uniqueTechs: [
    "Ganadería de la Estepa: Caballería de Exploración y subsiguientes, Lancero estepario y Caballería de Arqueros se crean un 100% más rápido. (Castillos)",
    "Mercenariado Cumano: Los miembros del equipo pueden crear hasta 5 Kipchaks de Élite gratis por cada Castillo.(Imperial)"
  ]
},
{
  id: "dravidos",
  name: "Dravídicos",
  region: "asia",
  style: "infanteria y Naval",
  difficulty: "alta",
  image: "src/assets/civ/dravidicos.png",
  recommended: "Infantería barata y excelente juego acuático.",
  builds: ["Infantería", "Naval"],
  bonuses: [
    "+200 madera al avanzar de edad",
    "Pescadores y Pesqueros transportan +15 alimento.",
    "Las tecnologías del Cuartel son 50% más baratas.",
    "Hostigadores y Elefantes arqueros atacan un 25% más rápido.",
    "Armas de Asedio cuestan -33% madera."
  ],
  uniqueUnits: ["Espadachín Urumi", "Thirisadai"],
  uniqueTechs: [
    "Cuerpos de Médicos: Unidades en elefante regeneran +30 PR/minuto. (Castillos)",
    "Acero Wootz: El ataque de la infantería y caballería ignora la armadura. (Imperial)"
  ]
},
{
  id: "eslavos",
  name: "Eslavos",
  region: "europa",
  style: "infanteria y asedio",
  difficulty: "media",
  image: "src/assets/civ/eslavos.png",
  recommended: "Infantería muy fuerte y asedio brutal.",
  builds: ["Asedio pesado", "Infantería"],
  bonuses: [
    "Las Armas de Asedio son un 15% más baratas.",
    "Suministros y Gambesones gratis.",
    "Los Granjeros trabajan un 15% mas rápido.",
    "Los Monjes se mueven un 20% más rápido"
  ],
  uniqueUnits: ["Boyardo"],
  uniqueTechs: [
    "Detinets: Reemplaza el 40% del coste de piedra de los Castillos y torres por madera. (Castillos)",
    "Druzhina Las unidades de infantería dañan a los enemigos adyacentes. (Imperial)"
  ]
},
{
  id: "españoles",
  name: "Españoles",
  region: "europa",
  style: "hibrida",
  difficulty: "media",
  image: "src/assets/civ/españoles.png",
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
  image: "src/assets/civ/etiopes.png",
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
  image: "src/assets/civ/francos.png",
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
  image: "src/assets/civ/georgianos.png",
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
  image: "src/assets/civ/godos.png",
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
  image: "src/assets/civ/gurjaras.png",
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
  image: "src/assets/civ/hunos.png",
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
  image: "src/assets/civ/incas.png",
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
  image: "src/assets/civ/indostanos.png",
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
  image: "src/assets/civ/italianos.png",
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
  image: "src/assets/civ/japoneses.png",
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
  image: "src/assets/civ/jemeres.png",
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
  image: "src/assets/civ/jurchens.png",
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
  image: "src/assets/civ/kitan.png",
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
  image: "src/assets/civ/lituanos.png",
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
  image: "src/assets/civ/magiares.png",
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
  image: "src/assets/civ/malayos.png",
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
  image: "src/assets/civ/malies.png",
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
  image: "src/assets/civ/mayas.png",
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
  image: "src/assets/civ/mongoles.png",
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
  image: "src/assets/civ/persas.png",
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
  image: "src/assets/civ/polacos.png",
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
  image: "src/assets/civ/portugueses.png",
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
  image: "src/assets/civ/romanos.png",
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
  image: "src/assets/civ/sarracenos.png",
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
  image: "src/assets/civ/shu.png",
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
  image: "src/assets/civ/sicilianos.png",
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
  image: "src/assets/civ/tataros.png",
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
  image: "src/assets/civ/teutones.png",
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
  image: "src/assets/civ/turcos.png",
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
  image: "src/assets/civ/vietnamitas.png",
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
  image: "src/assets/civ/vikingos.png",
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
  image: "src/assets/civ/wei.png",
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
  image: "src/assets/civ/wu.png",
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
