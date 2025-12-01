const CIVILIZATIONS = [
  {
  id: "armenios",
  name: "Armenios",
  region: "asia",
  style: ["infanteria", "naval"],
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
  style: ["infanteria", "monjes"],
  difficulty: "alta",
  image: "src/assets/civ/aztecas.png",
  recommended: "Excelente rush en Feudal y Castillos, infantería muy fuerte.",
  builds: ["Driush", "Águilas FC"],
  bonuses: [
    "Aldeanos llevan +3 recursos",
    "Unidades militares se crean un +15% más rápido",
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
  style: ["elefantes", "naval"],
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
  style: ["camellos", "naval"],
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
  style: ["elefantes", "monjes"],
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
  style: ["polvora", "monjes"],
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
  style: ["infanteria", "asedio"],
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
  style: ["infanteria", "naval"],
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
  style: ["infanteria", "asedio"],
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
  style: ["monjes", "polvora"],
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
  style: ["arqueros", "asedio"],
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
    "Las mejoras para las Granjas son gratis.",
    "Los Castillos son un 15%/25% más baratos en la Edad de los Castillos/Imperial.",
    "La Unidades montadas tiene +20% PR (a partir de la Edad Feudal)",
    "Los aldeanos recogen las bayas un 15% más rápido."
  ],
  uniqueUnits: ["Lanzador de Hachas"],
  uniqueTechs: [
    "Hacha de Arista: Otorga a los Lanzadores de hachas +1 de alcance. (Castillos)",
    "Código Caballeresco: Aumenta la velocidad de trabajo de los Establos en un +40%.(Imperial)"
  ]
},
{
  id: "georgianos",
  name: "Georgianos",
  region: "europa",
  style: ["caballeria", "defensiva"],
  difficulty: "media",
  image: "src/assets/civ/georgianos.png",
  recommended: "Muy buena defensa con unidades únicas anti-caballería.",
  builds: ["Infantería", "Push de fortalezas"],
  bonuses: [
    "Comienzan con una Carreta de Mulas.",
    "Las Iglesias fortificadas proporcionan +10% de trabajo a los aldeanos en un radio de 10 casillas.",
    "Las unidades y edificios reciben -20 % de daño (-40 % en lugar de -25 %) cuando luchan desde mayor altura",
    "La caballería regenera 15% PV por minuto a partir de la Edad Feudal."
  ],
  uniqueUnits: ["Monaspa"],
  uniqueTechs: [
    "Torres Esvanas: Los edificio defensivos reciben +2 de ataque. El ataque de las Torres atraviesa.(Castillos)",
    "Caballería Aznauri: Las unidades de caballería ocupan un 15% menos de espacio de población."
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
    "La infantería es un 20%/25%/30%/35% más barata en la Alta Edad Media/Feudal/Castillo/Imperial.",
    "La infantería tiene +1/+2/+3 de ataque contra edificios estándares en la Edad Feudal/Castillo/Imperial.",
    "Los aldeanos tienen +5 de ataque contra la Caza agresiva (Jabalí, Jabalina, Elefante, Rinoceronte) y llevan +15 alimento de la caza. La caza dura 20% más.",
    "Telar se desarrolla instantáneamente.",
    "+10 de Población máxima en la Edad Imperial."  
  ],
  uniqueUnits: ["Huscarle"],
  uniqueTechs: [
    "Anarquía: Permite la creación de Huscarles en los Cuarteles. (Castillos)",
    "Movilización: Aumenta la velocidad de trabajo de los Cuarteles en un +100%. (Imperial)"
  ]
},
{
  id: "gurjaras",
  name: "Gurjaras",
  region: "asia",
  style: ["caballeria", "camellos"],
  difficulty: "alta",
  image: "src/assets/civ/gurjaras.png",
  recommended: "Un meta muy flexible con unidades montadas y camellos.",
  builds: ["explorador a camello", "Lanzador chakram", "explorador a camello"],
  bonuses: [
    "Comienzan el juego con un Explorador a Camello.",
    "Comienzan con 2 Arbustos de Bayas bajo el Centro Urbano.",
    "Pueden guarecer los Molinos con Ganado para producir comida.",
    "Las unidades montadas hacen un +20%/+30%/+40% daño adicional en la Edad Fedual/Castillos/Imperial.",
    "Pueden guarecer los Muelles con Pesqueros."
  ],
  uniqueUnits: ["Chakram Thrower", "Shrivamsha Rider"],
  uniqueTechs: [
    "Chatrias: Las unidades militares cuestan -25% comida (Castillos)",
    "Guardias Fronterizos: Jinetes a camello y Arqueros en Elefante obtienen +4 de armadura cuerpo a cuerpo. (Imperial)"
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
    "Comienzan con -100 madera, pero su límite de población está al máximo.",
    "En mapas nómadas, el primer Centro Urbano crea un caballo explorador.",
    "Los Arqueros a caballo son 10%/20% más baratos en la Edad de los Castillos/Imperial.",
    "Los Lanzapiedras son un 35% más precisos contra unidades."
  ],
  uniqueUnits: ["Tarquino"],
  uniqueTechs: [
    "Razias: Los tarcanos se pueden crear en el Establo.(Castillos)",
    "Ateísmo: Las victorias por Maravilla o reliquias +100 años y reduce la generación de recursos por Reliquia enemiga en un 50%. (Imperial)"
  ]
},
{
  id: "incas",
  name: "Incas",
  region: "america",
  style: "infanteria",
  difficulty: "media",
  image: "src/assets/civ/incas.png",
  recommended: "Muy versátiles, grandes defensas y buenos pike-men.",
  builds: ["Torre Rush", "Infantería"],
  bonuses: [
    "AUnidades militares cuestan -10%/-15%/-20%/-25% alimento en Alta Edad Media/Feudal/Castillos/Imperial.",
    "Las mejoras de la infantería en la Herrería afectan a los aldeanos a partir de la Edad de los Castillos.",
    "Las casas admiten 10 de población.",
    "Los edificios cuestan un -15% piedra."
  ],
  uniqueUnits: ["Kamayuk", "hondero"],
  uniqueTechs: [
    "Huaracas: Los Honderos +1 ataque y remueve el alacance mínimo de los Hostigadores y Honderos. (Castillos)",
    "Escudos de Tela: Los Kamayuks, los Honderos y los Guerreros Águilas obtienen +1/+2 de armadura. (Imperial)"
  ]
},
{
  id: "indostanos",
  name: "Indostanos",
  region: "asia",
  style: ["caballeria", "polvora"],
  difficulty: "alta",
  image: "src/assets/civ/indostanos.png",
  recommended: "Una de las mejores economías del juego y camellos élite.",
  builds: ["Camellos", "Boom"],
  bonuses: [
    "Los aldeanos cuestan -8/-13/-18/-23% alimento en la Alta Edad Media/Feudal/Castillos/Imperial.",
    "Los camellos atacan un 20% más rápido.",
    "Unidades de pólvora +1/+1 de armadura/anti-proyectiles.",
    "Pueden construir Caravanserai en la Edad Imperial."
  ],
  uniqueUnits: ["Ghulam", "jinete de camello imperial"],
  uniqueTechs: [
    "Camino del Gran Tronco: Toda forma de obtención de oro es de 10% más rápida (Minería, Reliquias, y Comercio). Tarifa comercial reducida al 10%.(Castillos)",
    "Shatagni: Los artilleros manuales obtienen +2 de alcance. (Imperial)"
  ]
},
{
  id: "italianos",
  name: "Italianos",
  region: "europa",
  style: ["arqueros", "naval"],
  difficulty: "media",
  image: "src/assets/civ/italianos.png",
  recommended: "Muy fuertes en mapas de agua y arquería.",
  builds: ["Arqueros", "Naval"],
  bonuses: [
    "Avanzar a la siguiente edad cuesta un 15% más barato.",
    "Las tecnologías del muelle y de la Universidad cuestan un -33%",
    "Los Pesqueros cuestan un -15%.",
    "Las unidades de pólvora cuestan un -20%"
  ],
  uniqueUnits: ["Génova Ballestero", "Condotiero"],
  uniqueTechs: [
    "Escudo Pavés: Los arqueros a pie y Condotieros reciben +1/+1 armadura. (Castillos)",
    "Ruta de la Seda: Carreta de Mercancías y Urca Mercante cuestan -50%. (Imperial)"
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
    "Pesqueros tienen el doble de PR, +2 de armadura anti-proyectil y trabajan un 5%/10%/15%/20% más rápido en la Alta Edad Media/Feudal/Castillos/Imperial.",
    "Molinos, campamentos madereros y mineros son un 50% más baratos.",
    "La infantería ataca un 33% más rápido desde la Edad Feudal."
  ],
  uniqueUnits: ["Samurái"],
  uniqueTechs: [
    "Yasama: Otorga flechas adicionales a las torres. (Castillos)",
    "Kataparuto: Hace que los Lanzapiedras se empaqueten, se armen y disparen más rápido. (Imperial)"
  ]
},
{
  id: "jemeres",
  name: "Jemeres",
  region: "asia",
  style: ["elefantes","asedio"],
  difficulty: "baja",
  image: "src/assets/civ/jemeres.png",
  recommended: "Boom fácil y elefantes muy fuertes.",
  builds: ["Elefantes", "Boom sin requisitos"],
  bonuses: [
    "No requieren edificios para avanzar de edad",
    "Los Elefantes de combate son un 15% más rápido.",
    "Los aldeanos se pueden guarecer en las Casas",
    "Los aldeanos no necesitan depositar el alimento de las Granjas, pero trabajan un 3% más lento."
  ],
  uniqueUnits: ["Elefante con  ballesta"],
  uniqueTechs: [
    "Colmillos de Acero: Otorga a los Elefantes de combate +3 de ataque. (Castillos)",
    "Doble Ballesta: Los Escorpiones y Elefantes con ballesta disparan un segundo proyectil.(Imperial)"
  ]
},
{
  id: "jurchens",
  name: "Jurchens",
  region: "asia",
  style: ["caballeria", "polvora"],
  difficulty: "media",
  image: "src/assets/civ/jurchens.png",
  recommended: "Caballería pesada y arquería montada estable.",
  builds: ["Caballería", "CA"],
  bonuses: [
    "La carne de caza y el ganado no se descompone.",
    "Las unidades montadas y los Lanceros Incendiarios atacan +20% más rápido a partir de la Edad Fedual.",
    "Los Ingenieros de Asedio están dispoibles en la Edad de los Castillos.",
    "Las mejoras de asedio y fortificaciones cuestan -75% de madera y se desarrollan +100% más rápido.",
    "Las unidades reciben -50% de daño por fuego aliado."
  ],
  uniqueUnits: ["Pagoda de hierro", "granadero"],
  uniqueTechs: [
    " Bastiones Fortificados: Las fortificaciones regenran 500 PV por minuto. (Castillos)",
    "Bombas de Trueno: Carretas de Cohetes, Granaderos y Lou Chuans explotan al ser derrotados, los proyectiles producen explosiones adicionales. (Imperial)"
  ]
},
{
  id: "kitan",
  name: "Kitán",
  region: "asia",
  style: ["caballeria","infanteria"],
  difficulty: "media",
  image: "src/assets/civ/kitan.png",
  recommended: "Arquería montada resistente y presión constante.",
  builds: ["CA", "Skirm Rush"],
  bonuses: [
    "Las Pasturas reemplazan a las granjas.",
    "Los pastores generan +10% de alimento adicional.",
    "Los efectos de mejora de ataques cuerpo a cuerpo se duplican.",
    "Hostigadores, lanceros y la línea de caballería de exploración entrenan y mejoran +25% más rápido.",
    "Mejora de Caballería Pesada de Arqueros disponible en la Edad de los Castillos y cuesta -50%."
  ],
  uniqueUnits: ["Liao Dao", "trebuchet montado"],
  uniqueTechs: [
    "Armadura Laminar: Infantería y Hostigadores reflejan 25% de daño cuerpo a cuerpo al atacante. (Castillos)",
    "Caballería Ordo: La Caballería regenera PV en combate. (Imperial)"
  ]
},
// 31–40
{
  id: "lituanos",
  name: "Lituanos",
  region: "europa",
  style: ["caballeria", "monjes"],
  difficulty: "media",
  image: "src/assets/civ/lituanos.png",
  recommended: "Civilización flexible con caballería fuerte y reliquias que potencian mucho su late game.",
  bonuses: [
    "Consiguen +100 de comida por cada centro urbano construido.",
    "Cada reliquia otorga +1 de ataque a la Caballería (hasta +4).",
    "Lanceros y Guerrilleros se mueven 10% más rápido.",
  ],
  uniqueUnits: ["Leitis"],
  uniqueTechs: [
    "Hill Forts: los centros urbanos obtienen +3 de rango(castillos)", 
    "Towershields: los piqueros y ostigadores ganan +2 de armadura anti penetracion(imperial)"
  ],
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
    "Los Aldeanos matan a los animales salvajes de un solo golpe.",
    "Forja, Fundición de Hierro y Alto Horno son gratis.",
    "Caballería de Exploración y subsiguientes son un 10% más baratos.",
  ],
  uniqueUnits: ["Huszar Magiar"],
  uniqueTechs: [
    "Ejército Corviniano: El Huszár Magiar no cuesta oro.(castillos)", 
    "Arco Recurvo: Los arqueros a caballo tienen +1 de alcance.(imperial)"],
  builds: ["Scout Rush", "Knight Rush", "Hussar Spam"],
},

{
  id: "malayos",
  name: "Malayos",
  region: "asia",
  style: "naval",
  difficulty: "alta",
  image: "src/assets/civ/malayos.png",
  recommended: "Civilización muy técnica de economía rápida y poder naval fuerte.",
  bonuses: [
    "Avanzan de edad 66% más rápido.",
    "Pescadores trabajan 33% más rápido.",
    "Las Trampas para peces proveen 3 veces más alimento (2145 alimento).",
    "Los Elefantes de Combate son un 30% más baratos.."
  ],
  uniqueUnits: ["Karambit Warrior"],
  uniqueTechs: [
    "Talasocracia: Mejora los Muelles a Puertos, que disparan flechas.(castillos)",
     "Leva en Masa: La Milicia y subsiguientes cambian su coste de oro por alimento.(imperial)"],
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
    "Las unidades del Cuartel obtienen +1/+2/+3 de armadura anti-proyectil en la edad Feudal/Castillos/Imperial.",
    "Minas dan +15% oro.",
  ],
  uniqueUnits: ["Gbeto"],
  uniqueTechs: [
    "Gran Asamblea: El Centro Urbano dispara flechas sin necesidad de que las unidades se guarezcan.(castillos)",
    "Farimba: Unidades de Caballería obtienen +5 de ataque.(imperial)"
    ],
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
    "RComienzan con un Explorador Águila.",
    "AEmpiezan con un aldeano adicional, pero -50 alimento.",
    "Los recursos naturales tardan un 15% más en agotarse.",
    "Las unidades de arqueros (excepto Hostigadores) cuestan -10%/-20%/-30% en la Edad Feudal/Castillos/Imperial."
  ],
  uniqueUnits: ["Plumed Archer"],
  uniqueTechs: [
    "Jabalineros Hul'che: Otorga a los Hostigadores un segundo proyectil.(castillos)", 
    "El Dorado: Los Guerreros Águila obtienen +40 PR.(imperial)"
  ],
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
    "Los cazadores trabajan un 40% más rápido.",
    "La Caballería Ligera, Húsar, y Lancero estepario tienen un +30% de puntos de resistencia.",
    "La Caballería de Arqueros, Caballería Pesada de Arqueros y los Mangudai disparan un +25% más rápido.",
  ],
  uniqueUnits: ["Mangudai"],
  uniqueTechs: [
    "Nómadas: Las casas mantienen su población si han sido destruidas.(castillos)", 
    "Instrucción Militar: Aumenta la velocidad de movimiento de las Armas de Asedio en un +50%.(imperial)"
  ],
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
    "+50 alimento, +50 madera al inicio del juego.",
    "Centro Urbano y Muelle tienen el doble de PR y trabajan un 5%/10%/15%/20% más rápido en la Alta Edad Media/Feudal/Castillos/Imperial.",
    "Tácticas de los Partos disponible en la Edad de los Castillos.",
    "Unidades montadas obtienen 5 oro por cada unidad militar asesinada",
    "Pueden construir Caravanserai en la Edad Imperial."
  ],
  uniqueUnits: ["War Elephant"],
  uniqueTechs: [
    "Kamandaran: El coste en oro del arquero y subsiguientes es remplazado por madera.(castillos)", 
    "Ciudadelas: Los Castillos +4 de ataque, +3 contra Ariete, +3 contra Infantería y reciben -25% de daño adicional.(imperial)"],
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
    "Los Aldeanos regeneran 5/10/15/20 PR por minuto en la Alta Edad Media/Feudal/Castillos/Imperial. En partidas Nómadas, la bonificación sólo afecta si el Centro Urbano ha sido construido o si se comienza en la Edad de los Castillos en adelante. También afecta a los aldeanos guarecidos, aumentando su velocidad de curación (la curación base es 6 PR/minuto).",
    "El Folwark reemplaza al Molino.",
    "El Folwark reemplaza al Molino.",
  ],
  uniqueUnits: ["Obuch"],
  uniqueTechs: [
    "Privilegios de Szlachta: Jinete y subsiguientes cuestan -60% oro.(castillos)", 
    "Legado Lequítico: Caballería de Exploración y subsiguientes hacen Daño arrollador.(imperial)"
  ],
  builds: ["Scout Rush", "Knight Spam", "Obuch Push"],
},

{
  id: "portugueses",
  name: "Portugueses",
  region: "europa",
  style: ["naval", "polvora"],
  difficulty: "alta",
  image: "src/assets/civ/portugueses.png",
  recommended: "Naval fuerte y unidades únicas multipropósito.",
  bonuses: [
    "Todas las unidades cuestan -20% oro.",
    "Barcos con +10% HP.",
    "Factoria disponible en imperial.",
    "Los recolectores generan madera además de alimento (0.33 madera por alimento)."
  ],
  uniqueUnits: ["Cañon de salvas", "Caravela"],
  uniqueTechs: [
    "Carracas: Otorga a los barcos +1/+1 de armadura.(castillos)", 
    "Arcabuz: Las unidades de pólvora tienen mayor precisión sobre los objetivos en movimiento."
  ],
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
    "Galera de Guerra +1/+1 de armadura, Galera y Dromones +2/+2 de armadura",
    "Infantería recibe el doble de efecto de las mejoras de armadura de la Herrería",
    "Aldeanos recolectan, construyen y reparan un 5% más rápido",
    "Línea de Galera +1 de ataque",
    "Escorpiones cuestan -60% oro y se benefician de Balística"
  ],
  uniqueUnits: ["Legionary", "centurion"],
  uniqueTechs: [
    "Balistas: Escorpión y Línea de Galera disparan 33% más rápido.(castillos)", 
    "Comitatenses: Línea de Milicia, línea de Jinete y Centuriones se crean un 50% más rápido y reciben ataque de carga.(imperial)"
  ],
  builds: ["Infantry Push", "Fast Castle", "Mixed Army"],
},
{
  id: "sarracenos",
  name: "Sarracenos",
  region: "asia",
  style: ["naval","camellos"],
  difficulty: "media",
  image: "src/assets/civ/sarracenos.png",
  recommended: "Fuerte juego de arqueros y control del mercado. Excelente para estrategias de presión temprana.",
  bonuses: [
    "La tasa del Mercado es sólo del 5%.",
    "Mercado cuesta 75 madera.",
    "Los Barcos de Transporte tienen el doble de PR y pueden llevar +5 unidades.",
    "Las Galeras atacan un 25% más rápido.",
    "Las unidades de la Galería de tiro con arco (excepto el Hostigador y el Artillero Manual) tienen +1/+2/+3 de ataque contra edificios estándares en la Edad Feudal/Castillos/Imperial.",
  ],
  uniqueUnits: ["Mameluco"],
  uniqueTechs: [
    "Fanatismo: Otorga a las unidades en camello +20 PR.(castillos)", 
    "Contrapesos: Lanzapiedras y Manganas +15% de ataque.(imperial)"
  ],
  builds: ["Market Abuse", "Fast Castle", "Camel Archers"],
},

{
  id: "shu",
  name: "Shu",
  region: "asia",
  style: ["arqueros", "asedio"],
  difficulty: "media",
  image: "src/assets/civ/shu.png",
  recommended: "Civilización del DLC lords of the west 2024. Enfocados en infantería resistente y asedio eficiente.",
  bonuses: [
    "Los leñadores generan comida adicional, además de madera.",
    "Las tecnologías de arqueroas de la galeria de tiro con arco y del herrrero cuestan 25% menos.",
    "Las armas de asedio y los barcos de guerra de asedio semueven un 10% o 15% más rápido en la edad de los castillos o la edad imperial",
    "Centros urbanos disparan +1 proyectil."
  ],
  uniqueUnits: ["Guardia de la pluma blanca", "carro de guerra", "liu bei"],
  uniqueTechs: [
    "Arsenal de la serpiente enroscada: la linea de lanceros y los guardias de la pluma blanca obtienen PR adicionales cuando están cerca los unos de los otros.(castillos)", 
    "Cargador: La linea de arqueros, los carros de guerra y las unidades de lou Chuan disparan proyectiles adicionales"
  ],
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
    "Castillos y Centros Urbanos se construyen un 100% más rápido.",
    "Unidades militares terrestres absorben el 33% de todo daño adicional.",
    "Cada mejora del molino otorga a los Granjeros +1 de capacidad.",

  ],
  uniqueUnits: ["Serjeant"],
  uniqueTechs: [
    "Primera Cruzada: Aparecen 7 sargentos de cada uno de tus centros urbanos (hasta un máximo de 5) y aumenta la resistencia a la conversión de todas las unidades.(castillos)", 
    "Cota de Malla: Jinete y subsiguientes +1/+2 de armadura.(imperial)"
  ],
  builds: ["Serjeant Rush", "Fast Castle", "Knight Power"],
},

{
  id: "tartaros",
  name: "Tártaros",
  region: "asia",
  style: "caballeria",
  difficulty: "media",
  image: "src/assets/civ/tataros.png",
  recommended: "Excelentes con caballería de arqueros, trabajan mejor en terreno elevado.",
  bonuses: [
    "El ganado contiene +50% alimento.",
    "Las unidades hacen +50% de daño por elevación (+25% es daño por elevación regular).",
    "Dactilera y Tácticas de los Partos gratis.",
  ],
  uniqueUnits: ["Keshik", "Camello llameante"],
  uniqueTechs: [
    "Armadura de Seda: +1 de armadura anti-proyectil para Caballería Ligera, Lanceros esteparios y Caballería de Arqueros(castillos)", 
    "Tácticas de Asedio Timúridas: Lanzapiedras obtienen +2 de alcance.(imperial)"
  ],
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
    "Las granjas cuestan un 40% menos.",
    "Las torres pueden guarecer el doble de unidades",
    "Matacanes y Hierbas Medicinales gratis",
    "El Centro Urbano puede guarecer + 10 unidades.",
    "Los monjes pueden curar dos veces más lejos.",
    "Unidades del Cuartel y del Establo reciben +1 de armadura en la Edad de los Castillos y +1 en la Edad Imperial."
  ],
  uniqueUnits: ["Caballero teutonico"],
  uniqueTechs: [
    "Blindaje: Armas de asedio tienen +3 de armadura.(castillos)", 
    "Almenas: +3 alcance de castillos; infantería guarecida dispara flechas.(imperial)"
  ],
  builds: ["Infantry Push", "Castle Drop", "Boom Defensivo"],
},

{
  id: "turcos",
  name: "Turcos",
  region: "asia",
  style: "polvora",
  difficulty: "alta",
  image: "src/assets/civ/turcos.png",
  recommended: "Los mejores cañones y pólvora del juego. Excelente late game.",
  bonuses: [
    "Unidades de pólvora +25% HP.",
    "Las tecnologías de pólvora son 50% más baratas.",
    "Química gratis.",
    "Los minadores trabajan un 20% más rápido.",
    "La mejora a Caballería Ligera y Húsar son gratis."
  ],
  uniqueUnits: ["Jenízaro"],
  uniqueTechs: [
    "Sipahi: Otorga a la Caballería de Arqueros +20 de PR.(castillos)", 
    "Artillería: Otorga a los cañones de asedio, galeones artillados y Torres de Bombardeo +2 de alcance.(artilleria)"],
  builds: ["Fast Imp", "Gunpowder Push", "Jenízaro"],
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
    "Las unidades de la Galería de tiro con arco tienen +20% PR.",
    "Leva gratis.",
    "Las mejoras económicas no cuestan madera."
  ],
  uniqueUnits: ["Arquero de ratán", "hostigador imperial"],
  uniqueTechs: [
    "Chatras: Otorga a los Elefante de Combate +50 PR.(castillos)", 
    "Papel Moneda: Los aldeanos producen oro además de madera.(imperial)"
  ],
  builds: ["Archer Rush", "Rattan Push", "Fast Castle"],
},

{
  id: "vikingos",
  name: "Vikingos",
  region: "europa",
  style: ["naval", "infanteria"],
  difficulty: "alta",
  image: "src/assets/civ/vikingos.png",
  recommended: "Fuerte economía y dominio naval temprano.",
  bonuses: [
    "La infantería tiene +10%/+15%/+20% PR en la Edad Feudal/Castillos/Imperial.",
    "Los barcos de guerra son un 15%/15%/20% más baratos en la Edad Feudal/Castillos/Imperial.",
    "Carretilla y Carro de Mano gratis.",
  ],
  uniqueUnits: ["Berserk", "drakkar"],
  uniqueTechs: [
    "Hérsires: Otorga a la infantería +5 de ataque contra caballería y +4 de ataque contra camellos.(castillos)", 
    "Trance Frenético: Aumenta la velocidad de regeneración de los Berserkers.(imperial)"
  ],
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
    "Recibe un aldeano gratis por cada mejora de economía investigada",
    "La caballería de Hei Guang y el saqueador Xianbei obienen un 20/30 %  más de PR en la edad de los castillos y en la edad imperial resprectivamente.",
    "Los mangoneles y las unidades de Losu Chuan cuestan  un 25% menos"
  ],
  uniqueUnits: ["Caballería tigresa", "Saqueador Xianbei", "Cao Cao"],
  uniqueTechs: [
    "Tuntian: Los soldados producen alimentos de forma pasiva.(castillos)", 
    "Armadura de Ming Guang: las unidades montadas obtienen +4 de armadura cuerpo a cuerpo.(imperial)"
  ],
  builds: ["Knight Rush", "Fast Castle", "Mounted Archers"],
},

{
  id: "wu",
  name: "Wu",
  region: "asia",
  style: ["infanteria", "naval"],
  difficulty: "media",
  image: "src/assets/civ/wu.png",
  recommended: "Civilización versátil del DLC Dynasties of China con buen equilibrio militar.",
  bonuses: [
    "Los muelles y los edificios de producción militar proporcionan +65 de comida",
    "La infantería se regenera 10/20/30 PR por minuto en la Edad Feudal, de los Castillos o Imperial",
    "Los espadachines de Jian y la caballería de Hei Guang obtienen +2 de ataque en la Edad Imperial",
    "Carenado y Dique seco están disponibles una edad antes, y su coste y tiempo de investigación se reducen un 75 %"
  ],
  uniqueUnits: ["Arquero de fuego", "espadachín de jian, Sun Juan"],
  uniqueTechs: [
    "Tácticas de los acantilados rojos: Los barcos de demolición y los arqueros de fuego infligen daño por fuego a los barcos y edificios", 
    "Tigre sentado: Los mangoneles y los trebuchets de Lou Chuan disparan proyectiles adicionales"
  ],
  builds: ["Archer Rush", "Fast Castle", "Mixed Composition"],
}
];
