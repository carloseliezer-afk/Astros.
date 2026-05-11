function cosmicImage(label, colorA, colorB, colorC = "ffffff") {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 560">
      <defs>
        <radialGradient id="glow" cx="46%" cy="42%" r="68%">
          <stop offset="0%" stop-color="#${colorC}"/>
          <stop offset="24%" stop-color="#${colorA}"/>
          <stop offset="64%" stop-color="#${colorB}"/>
          <stop offset="100%" stop-color="#040610"/>
        </radialGradient>
        <filter id="blur"><feGaussianBlur stdDeviation="18"/></filter>
      </defs>
      <rect width="900" height="560" fill="#03040d"/>
      <circle cx="450" cy="280" r="235" fill="url(#glow)" opacity="0.84" filter="url(#blur)"/>
      <circle cx="450" cy="280" r="88" fill="#${colorA}" opacity="0.72"/>
      <path d="M95 375 C220 315, 310 350, 430 278 S650 185, 805 242" fill="none" stroke="#ffffff" stroke-opacity="0.18" stroke-width="2"/>
      <g fill="#ffffff" opacity="0.92">
        <circle cx="112" cy="96" r="3"/><circle cx="220" cy="406" r="2"/>
        <circle cx="694" cy="120" r="2"/><circle cx="770" cy="364" r="3"/>
        <circle cx="538" cy="472" r="2"/><circle cx="340" cy="158" r="2"/>
      </g>
      <text x="42" y="500" fill="#ffffff" opacity="0.86" font-size="52" font-family="Segoe UI, Arial, sans-serif" font-weight="700">${label}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const fallbackImage = cosmicImage("COSMOS", "65e4ff", "8f7cff", "ffffff");

const atlasObjects = [
  {
    name: "Nebulosa de Orion",
    query: "Nebulosa de Orion",
    type: "Nebulosa",
    distance: "1.344 anos luz",
    constellation: "Orion",
    image: cosmicImage("ORION", "65e4ff", "8f7cff", "ff5fa2"),
    realImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Orion%20Nebula%20-%20Hubble%202006%20mosaic%201800.jpg?width=1000",
    description: "Region de formacion estelar visible a simple vista, iluminada por estrellas jovenes del cumulo del Trapecio.",
    facts: [
      ["Tipo", "Nebulosa difusa"],
      ["Tamano", "Aprox. 24 anos luz"],
      ["Magnitud", "4,0"],
      ["Constelacion", "Orion"]
    ]
  },
  {
    name: "Galaxia de Andromeda",
    query: "Galaxia de Andromeda",
    type: "Galaxia",
    distance: "2,5 millones de anos luz",
    constellation: "Andromeda",
    image: cosmicImage("ANDROMEDA", "ffd166", "2f6bff", "ffffff"),
    realImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Andromeda%20Galaxy%20%28with%20h-alpha%29.jpg?width=1000",
    description: "La gran galaxia espiral vecina de la Via Lactea, con billones de estrellas y regiones activas de nacimiento estelar.",
    facts: [
      ["Tipo", "Galaxia espiral"],
      ["Diametro", "Aprox. 220.000 anos luz"],
      ["Catalogo", "M31"],
      ["Constelacion", "Andromeda"]
    ]
  },
  {
    name: "Jupiter",
    query: "Jupiter planeta",
    type: "Planeta",
    distance: "5,2 UA del Sol",
    constellation: "Sistema Solar",
    image: cosmicImage("JUPITER", "ffd166", "9f6043", "fff0c8"),
    realImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Jupiter%20by%20Cassini-Huygens.jpg?width=1000",
    description: "Gigante gaseoso dominado por hidrogeno y helio, con tormentas enormes, lunas heladas y una magnetosfera intensa.",
    facts: [
      ["Tipo", "Gigante gaseoso"],
      ["Diametro", "139.820 km"],
      ["Lunas", "Mas de 90 conocidas"],
      ["Rasgo", "Gran Mancha Roja"]
    ]
  },
  {
    name: "Saturno",
    query: "Saturno planeta",
    type: "Planeta",
    distance: "9,5 UA del Sol",
    constellation: "Sistema Solar",
    image: cosmicImage("SATURNO", "f4d28b", "7257ff", "ffffff"),
    realImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Saturn%20during%20Equinox.jpg?width=1000",
    description: "Planeta gigante celebre por su sistema de anillos, compuesto por hielo, polvo y fragmentos rocosos.",
    facts: [
      ["Tipo", "Gigante gaseoso"],
      ["Diametro", "116.460 km"],
      ["Anillos", "Hielo y roca"],
      ["Luna mayor", "Titan"]
    ]
  },
  {
    name: "M87*",
    query: "Agujero negro M87",
    type: "Agujero negro",
    distance: "55 millones de anos luz",
    constellation: "Virgo",
    image: cosmicImage("M87*", "ff8f3d", "050713", "ffd166"),
    realImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Black%20hole%20-%20Messier%2087.jpg?width=1000",
    description: "Agujero negro supermasivo de la galaxia M87, famoso por la primera imagen directa de la sombra de un agujero negro.",
    facts: [
      ["Tipo", "Agujero negro supermasivo"],
      ["Masa", "Miles de millones de masas solares"],
      ["Galaxia", "Messier 87"],
      ["Imagen", "Event Horizon Telescope"]
    ]
  },
  {
    name: "Sagitario A*",
    query: "Sagitario A*",
    type: "Agujero negro",
    distance: "26.000 anos luz",
    constellation: "Sagitario",
    image: cosmicImage("Sgr A*", "ffb14a", "151020", "ffffff"),
    realImage: "https://commons.wikimedia.org/wiki/Special:FilePath/EHT%20Saggitarius%20A%20black%20hole.tif?width=1000",
    description: "Agujero negro supermasivo situado en el centro de la Via Lactea, observado por interferometria de muy larga base.",
    facts: [
      ["Tipo", "Agujero negro supermasivo"],
      ["Masa", "Aprox. 4 millones de masas solares"],
      ["Ubicacion", "Centro galactico"],
      ["Catalogo", "Sgr A*"]
    ]
  },
  {
    name: "Kepler-452b",
    query: "Kepler-452b",
    type: "Exoplaneta",
    distance: "1.800 anos luz",
    constellation: "Cygnus",
    image: cosmicImage("KEPLER", "92f3c7", "235dff", "ffffff"),
    realImage: "https://commons.wikimedia.org/wiki/Special:FilePath/PIA19823-Kepler-452b-ArtistConcept-20150723.jpg?width=1000",
    description: "Exoplaneta descubierto por Kepler, considerado una supertierra candidata en la zona habitable de una estrella similar al Sol.",
    facts: [
      ["Tipo", "Supertierra candidata"],
      ["Orbita", "385 dias"],
      ["Estrella", "Kepler-452"],
      ["Metodo", "Transito"]
    ]
  },
  {
    name: "Pulsar del Cangrejo",
    query: "Pulsar del Cangrejo",
    type: "Objeto compacto",
    distance: "6.500 anos luz",
    constellation: "Tauro",
    image: cosmicImage("PULSAR", "ff5fa2", "65e4ff", "ffffff"),
    realImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Crab%20Nebula.jpg?width=1000",
    description: "Estrella de neutrones giratoria que emite pulsos regulares de radiacion dentro del remanente de la supernova de 1054.",
    facts: [
      ["Tipo", "Estrella de neutrones"],
      ["Periodo", "Aprox. 33 ms"],
      ["Remanente", "Nebulosa del Cangrejo"],
      ["Constelacion", "Tauro"]
    ]
  },
  {
    name: "Proxima Centauri",
    query: "Proxima Centauri",
    type: "Estrella",
    distance: "4,24 anos luz",
    constellation: "Centaurus",
    image: cosmicImage("PROXIMA", "ff5f4d", "2b1020", "ffd166"),
    realImage: "https://commons.wikimedia.org/wiki/Special:FilePath/New%20Shot%20of%20Proxima%20Centauri%2C%20our%20Nearest%20Neighbour.jpg?width=1000",
    description: "Enana roja y estrella mas cercana al Sol, con planetas conocidos orbitando en su sistema.",
    facts: [
      ["Tipo", "Enana roja"],
      ["Sistema", "Alfa Centauri"],
      ["Masa", "Aprox. 0,12 masas solares"],
      ["Planeta", "Proxima b"]
    ]
  },
  {
    name: "Sol",
    query: "Sol estrella",
    type: "Estrella",
    distance: "1 UA de la Tierra",
    constellation: "Sistema Solar",
    image: cosmicImage("SOL", "ffd166", "ff5f4d", "ffffff"),
    realImage: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Sun%20by%20the%20Atmospheric%20Imaging%20Assembly%20of%20NASA%27s%20Solar%20Dynamics%20Observatory%20-%20201102171530.jpg?width=1000",
    description: "Estrella de tipo G que domina gravitatoriamente el Sistema Solar y alimenta el clima espacial con viento solar y radiacion.",
    facts: [
      ["Tipo", "Estrella G2V"],
      ["Diametro", "1,39 millones de km"],
      ["Edad", "Aprox. 4.600 millones de anos"],
      ["Energia", "Fusion de hidrogeno"]
    ]
  },
  {
    name: "Marte",
    query: "Marte planeta",
    type: "Planeta",
    distance: "1,52 UA del Sol",
    constellation: "Sistema Solar",
    image: cosmicImage("MARTE", "ff805d", "40141b", "ffd166"),
    realImage: "https://commons.wikimedia.org/wiki/Special:FilePath/OSIRIS%20Mars%20true%20color.jpg?width=1000",
    description: "Planeta rocoso con casquetes polares, volcanes gigantes y evidencias de agua liquida en su pasado geologico.",
    facts: [
      ["Tipo", "Planeta rocoso"],
      ["Diametro", "6.779 km"],
      ["Lunas", "Fobos y Deimos"],
      ["Rasgo", "Olympus Mons"]
    ]
  },
  {
    name: "Luna",
    query: "Luna satelite",
    type: "Luna",
    distance: "384.400 km de la Tierra",
    constellation: "Sistema Solar",
    image: cosmicImage("LUNA", "d7e3ff", "4e5b72", "ffffff"),
    realImage: "https://commons.wikimedia.org/wiki/Special:FilePath/FullMoon2010.jpg?width=1000",
    description: "Satelite natural de la Tierra, clave para las mareas, la estabilidad axial terrestre y la exploracion espacial humana.",
    facts: [
      ["Tipo", "Satelite natural"],
      ["Diametro", "3.474 km"],
      ["Gravedad", "0,165 g"],
      ["Periodo orbital", "27,3 dias"]
    ]
  },
  {
    name: "Europa",
    query: "Europa luna",
    type: "Luna",
    distance: "Orbita a Jupiter",
    constellation: "Sistema Solar",
    image: cosmicImage("EUROPA", "cfe6ff", "2d4465", "ffffff"),
    realImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Europa-moon.jpg?width=1000",
    description: "Luna helada de Jupiter con una corteza fracturada y un oceano global bajo la superficie, candidata para estudiar habitabilidad.",
    facts: [
      ["Tipo", "Luna helada"],
      ["Diametro", "3.122 km"],
      ["Planeta", "Jupiter"],
      ["Interes", "Oceano interno"]
    ]
  },
  {
    name: "Titan",
    query: "Titan luna",
    type: "Luna",
    distance: "Orbita a Saturno",
    constellation: "Sistema Solar",
    image: cosmicImage("TITAN", "f0b761", "5b3824", "fff4d6"),
    realImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Titan%20in%20true%20color.jpg?width=1000",
    description: "Mayor luna de Saturno, con atmosfera densa, lagos de hidrocarburos y una quimica organica compleja.",
    facts: [
      ["Tipo", "Luna con atmosfera"],
      ["Diametro", "5.150 km"],
      ["Planeta", "Saturno"],
      ["Superficie", "Lagos de metano"]
    ]
  },
  {
    name: "Cometa Halley",
    query: "Cometa Halley",
    type: "Cometa",
    distance: "Orbita periodica",
    constellation: "Sistema Solar",
    image: cosmicImage("HALLEY", "c6fff4", "244a66", "ffffff"),
    realImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Lspn%20comet%20halley.jpg?width=1000",
    description: "Cometa periodico visible desde la Tierra cada 75 a 76 anos, registrado por civilizaciones durante siglos.",
    facts: [
      ["Tipo", "Cometa periodico"],
      ["Periodo", "75-76 anos"],
      ["Ultimo perihelio", "1986"],
      ["Proximo", "2061"]
    ]
  },
  {
    name: "Nebulosa Cabeza de Caballo",
    query: "Nebulosa Cabeza de Caballo",
    type: "Nebulosa",
    distance: "1.375 anos luz",
    constellation: "Orion",
    image: cosmicImage("B33", "ff5fa2", "21113a", "ffd166"),
    realImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Barnard%2033.jpg?width=1000",
    description: "Nebulosa oscura de polvo que recorta una silueta famosa contra el brillo del hidrogeno ionizado en Orion.",
    facts: [
      ["Tipo", "Nebulosa oscura"],
      ["Catalogo", "Barnard 33"],
      ["Region", "Complejo de Orion"],
      ["Constelacion", "Orion"]
    ]
  },
  {
    name: "Pilares de la Creacion",
    query: "Pilares de la Creacion",
    type: "Nebulosa",
    distance: "6.500 anos luz",
    constellation: "Serpens",
    image: cosmicImage("PILARES", "92f3c7", "1c2444", "ffd166"),
    realImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Pillars%20of%20creation%202014%20HST%20WFC3-UVIS%20full-res%20denoised.jpg?width=1000",
    description: "Columnas de gas y polvo dentro de la Nebulosa del Aguila, erosionadas por estrellas jovenes y masivas.",
    facts: [
      ["Tipo", "Region H II"],
      ["Nebulosa", "Aguila / M16"],
      ["Altura", "Varios anos luz"],
      ["Constelacion", "Serpens"]
    ]
  },
  {
    name: "Galaxia del Sombrero",
    query: "Galaxia del Sombrero",
    type: "Galaxia",
    distance: "29 millones de anos luz",
    constellation: "Virgo",
    image: cosmicImage("M104", "ffd166", "263a62", "ffffff"),
    realImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Sombrero%20Galaxy%20in%20infrared%20light%20%28Hubble%20Space%20Telescope%20and%20Spitzer%20Space%20Telescope%29.jpg?width=1000",
    description: "Galaxia con bulbo brillante y una banda de polvo muy marcada que le da su perfil caracteristico.",
    facts: [
      ["Tipo", "Galaxia lenticular"],
      ["Catalogo", "M104"],
      ["Diametro", "Aprox. 50.000 anos luz"],
      ["Constelacion", "Virgo"]
    ]
  },
  {
    name: "Betelgeuse",
    query: "Betelgeuse",
    type: "Estrella",
    distance: "Aprox. 550 anos luz",
    constellation: "Orion",
    image: cosmicImage("BETELGEUSE", "ff5f4d", "39101a", "ffd166"),
    realImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Betelgeuse%20star%20%28Hubble%29.jpg?width=1000",
    description: "Supergigante roja en Orion, enorme y variable, candidata a terminar su vida como supernova en el futuro astronomico.",
    facts: [
      ["Tipo", "Supergigante roja"],
      ["Variabilidad", "Semirregular"],
      ["Constelacion", "Orion"],
      ["Etapa", "Evolucion avanzada"]
    ]
  }
];

const atlasGrid = document.getElementById("atlas-grid");
const atlasTemplate = document.getElementById("atlas-card-template");
const resultTemplate = document.getElementById("result-card-template");
const resultsGrid = document.getElementById("results-grid");
const statusLine = document.getElementById("status-line");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const heroSearchForm = document.getElementById("hero-search-form");
const heroSearchInput = document.getElementById("hero-search-input");
const categoryFilter = document.getElementById("category-filter");
const activeTitle = document.getElementById("active-object-title");
const activeSummary = document.getElementById("active-object-summary");
const activeType = document.getElementById("active-object-type");
const activeDistance = document.getElementById("active-object-distance");
const activeConstellation = document.getElementById("active-object-constellation");
const detailImage = document.getElementById("detail-image");
const detailTitle = document.getElementById("detail-title");
const detailType = document.getElementById("detail-type");
const detailSummary = document.getElementById("detail-summary");
const detailFacts = document.getElementById("detail-facts");
const detailSource = document.getElementById("detail-source");
const starfield = document.getElementById("starfield");
const starContext = starfield.getContext("2d");

let stars = [];
let constellationLines = [];
let animationFrame = null;
let currentResults = [];
let imageObserver = null;

function setStatus(message, tone = "info") {
  statusLine.textContent = message;
  statusLine.dataset.tone = tone;
}

function shortText(text, limit = 220) {
  if (!text) return "No hay descripcion disponible para este objeto.";
  return text.length > limit ? `${text.slice(0, limit).trim()}...` : text;
}

function objectImage(object) {
  return object.realImage || object.image || object.thumbnail?.source || fallbackImage;
}

function normalizeResult(page) {
  return {
    name: page.title || "Resultado astronomico",
    title: page.title || "Resultado astronomico",
    query: page.title || "",
    type: "Resultado",
    distance: "Fuente consultada",
    constellation: "Wikipedia",
    image: page.thumbnail?.source || fallbackImage,
    realImage: page.thumbnail?.source || fallbackImage,
    description: page.extract || "Resultado encontrado en Wikipedia.",
    source: "Wikipedia",
    facts: [
      ["Fuente", "Wikipedia en espanol"],
      ["Tipo", "Resultado consultado"],
      ["Imagen", page.thumbnail?.source ? "Disponible" : "No disponible"],
      ["Lectura", "Resumen integrado"]
    ]
  };
}

function setActiveObject(object, options = {}) {
  const source = options.source || object.source || "Atlas local";
  const immediateImage = object.image || object.thumbnail?.source || fallbackImage;
  const realImage = objectImage(object);

  activeTitle.textContent = object.name || object.title || "Objeto astronomico";
  activeSummary.textContent = shortText(object.description || object.extract || object.summary, 260);
  activeType.textContent = object.type || "Objeto astronomico";
  activeDistance.textContent = object.distance || "Consultar ficha";
  activeConstellation.textContent = object.constellation || "Variable";

  detailTitle.textContent = object.name || object.title || "Objeto astronomico";
  detailType.textContent = object.type || "Objeto astronomico";
  detailSummary.textContent = object.description || object.extract || "Selecciona una tarjeta o realiza una busqueda para ver una ficha completa.";
  detailSource.textContent = source;
  detailImage.src = immediateImage;
  detailImage.dataset.loaded = "false";
  detailImage.dataset.realSrc = realImage;
  detailImage.dataset.fallback = immediateImage;
  detailImage.alt = `Imagen de ${object.name || object.title || "objeto astronomico"}`;
  detailImage.onerror = () => {
    detailImage.src = object.image || fallbackImage;
  };
  hydrateRealImages(document.getElementById("ficha"));

  const facts = object.facts?.length
    ? object.facts
    : [
      ["Tipo", object.type || "Objeto astronomico"],
      ["Distancia", object.distance || "Sin dato local"],
      ["Region", object.constellation || "Sin dato local"],
      ["Fuente", source]
    ];

  detailFacts.innerHTML = facts.map(([label, value]) => `
    <article>
      <span>${label}</span>
      <strong>${value}</strong>
    </article>
  `).join("");
}

function hydrateRealImages(root = document) {
  const loadImage = (image) => {
    const src = image.dataset.realSrc || image.dataset.src;
    if (!src || image.dataset.loaded === "true") return;
    image.dataset.loaded = "true";
    image.src = src;
    image.onerror = () => {
      image.src = image.dataset.fallback || fallbackImage;
    };
  };

  const images = root.querySelectorAll("img[data-real-src], img[data-src]");
  if (!images.length) return;

  if ("IntersectionObserver" in window) {
    if (!imageObserver) {
      imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          loadImage(entry.target);
          imageObserver.unobserve(entry.target);
        });
      }, { rootMargin: "360px" });
    }
    images.forEach((image) => imageObserver.observe(image));
  } else if ("requestIdleCallback" in window) {
    requestIdleCallback(() => images.forEach(loadImage), { timeout: 1200 });
  } else {
    window.setTimeout(() => images.forEach(loadImage), 350);
  }
}

function renderAtlas() {
  const category = categoryFilter.value;
  const objects = atlasObjects.filter((object) => category === "all" || object.type === category);
  atlasGrid.innerHTML = "";

  if (!objects.length) {
    atlasGrid.innerHTML = `
      <div class="empty-state">
        <h3>No hay objetos locales con ese filtro.</h3>
        <p>Prueba otra familia cosmica o usa la busqueda abierta.</p>
      </div>
    `;
    return;
  }

  objects.forEach((object) => {
    const clone = atlasTemplate.content.cloneNode(true);
    const card = clone.querySelector(".atlas-card");
    const image = clone.querySelector(".atlas-image");
    const type = clone.querySelector(".object-type");
    const distance = clone.querySelector(".object-distance");
    const name = clone.querySelector(".object-name");
    const description = clone.querySelector(".object-description");
    const button = clone.querySelector(".inspect-button");

    image.src = object.image;
    image.dataset.realSrc = object.realImage;
    image.dataset.fallback = object.image;
    image.alt = `${object.name}: ${object.type}`;
    type.textContent = object.type;
    distance.textContent = object.distance;
    name.textContent = object.name;
    description.textContent = object.description;
    button.dataset.query = object.query;
    card.dataset.query = object.query;

    atlasGrid.appendChild(clone);
  });

  hydrateRealImages(atlasGrid);
}

function renderResults(items) {
  currentResults = items;
  resultsGrid.innerHTML = "";

  if (!items.length) {
    resultsGrid.innerHTML = `
      <div class="empty-state">
        <h3>No encontre resultados claros.</h3>
        <p>Intenta con otro nombre, una sigla astronomica o una categoria como "galaxia", "estrella" o "nebulosa".</p>
      </div>
    `;
    return;
  }

  items.forEach((item, index) => {
    const clone = resultTemplate.content.cloneNode(true);
    const image = clone.querySelector(".result-image");
    const title = clone.querySelector(".result-title");
    const extract = clone.querySelector(".result-extract");
    const source = clone.querySelector(".result-source");
    const button = clone.querySelector(".result-button");

    image.src = item.image || fallbackImage;
    image.dataset.realSrc = item.realImage || item.image || fallbackImage;
    image.dataset.fallback = item.image || fallbackImage;
    image.alt = item.name ? `Imagen de ${item.name}` : "Imagen astronomica";
    title.textContent = item.name || item.title || "Resultado astronomico";
    extract.textContent = shortText(item.description || item.extract, 240);
    source.textContent = item.source || item.type || "Atlas";
    button.dataset.index = String(index);

    resultsGrid.appendChild(clone);
  });

  hydrateRealImages(resultsGrid);
}

function localSearch(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return atlasObjects.slice(0, 8);
  return atlasObjects.filter((object) => {
    return (
      object.name.toLowerCase().includes(normalized) ||
      object.type.toLowerCase().includes(normalized) ||
      object.description.toLowerCase().includes(normalized) ||
      object.constellation.toLowerCase().includes(normalized)
    );
  });
}

function renderLocalResults(query) {
  const matches = localSearch(query);
  renderResults(matches);
  if (matches.length) {
    setActiveObject(matches[0]);
  }
}

async function searchWikipedia(query) {
  const params = new URLSearchParams({
    origin: "*",
    action: "query",
    generator: "search",
    gsrsearch: query,
    gsrlimit: "6",
    prop: "pageimages|extracts|info",
    exintro: "1",
    explaintext: "1",
    inprop: "url",
    pithumbsize: "900",
    format: "json"
  });
  const response = await fetch(`https://es.wikipedia.org/w/api.php?${params.toString()}`);
  if (!response.ok) {
    throw new Error("No se pudo consultar Wikipedia.");
  }
  const data = await response.json();
  return Object.values(data.query?.pages || {}).sort((a, b) => (a.index || 0) - (b.index || 0));
}

async function handleSearch(query) {
  const cleanQuery = query.trim();
  if (!cleanQuery) {
    setStatus("Escribe el nombre de un astro o selecciona una tarjeta del atlas.", "warning");
    searchInput.focus();
    return;
  }

  setStatus(`Buscando "${cleanQuery}" en el atlas local...`);
  renderLocalResults(cleanQuery);

  try {
    const pages = await searchWikipedia(cleanQuery);
    const wikiResults = pages.map(normalizeResult);
    if (wikiResults.length) {
      renderResults(wikiResults);
      setActiveObject(wikiResults[0], { source: "Wikipedia" });
      setStatus(`Listo: ${wikiResults.length} resultado(s) integrados en la pagina.`);
    } else {
      setStatus("No hubo coincidencias externas. Mantengo los resultados del atlas local.", "warning");
    }
  } catch (error) {
    setStatus("Sin conexion externa por ahora. Puedes seguir explorando el atlas local.", "warning");
  }
}

function syncSearch(query) {
  searchInput.value = query;
  heroSearchInput.value = query;
  document.getElementById("explorar").scrollIntoView({ behavior: "smooth", block: "start" });
  handleSearch(query);
}

function openLocalObject(query) {
  const object = atlasObjects.find((item) => item.query === query || item.name === query);
  if (!object) return;
  setActiveObject(object);
  document.getElementById("ficha").scrollIntoView({ behavior: "smooth", block: "start" });
}

function attachEvents() {
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    handleSearch(searchInput.value);
  });

  heroSearchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    syncSearch(heroSearchInput.value);
  });

  document.querySelectorAll("[data-query]").forEach((button) => {
    button.addEventListener("click", () => {
      syncSearch(button.dataset.query);
    });
  });

  atlasGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".inspect-button");
    if (!button) return;
    openLocalObject(button.dataset.query);
  });

  resultsGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".result-button");
    if (!button) return;
    const object = currentResults[Number(button.dataset.index)];
    if (!object) return;
    setActiveObject(object, { source: object.source || "Resultado" });
    document.getElementById("ficha").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  categoryFilter.addEventListener("change", () => {
    renderAtlas();
    const selected = categoryFilter.value;
    const visible = selected === "all" ? atlasObjects : atlasObjects.filter((object) => object.type === selected);
    renderResults(visible.slice(0, 6));
    setStatus(selected === "all" ? "Mostrando una seleccion del atlas." : `Filtro activo: ${selected}.`);
  });
}

function resizeStarfield() {
  const dpr = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;
  starfield.width = Math.floor(width * dpr);
  starfield.height = Math.floor(height * dpr);
  starfield.style.width = `${width}px`;
  starfield.style.height = `${height}px`;
  starContext.setTransform(dpr, 0, 0, dpr, 0, 0);

  const starCount = Math.min(150, Math.floor((width * height) / 7600));
  stars = Array.from({ length: starCount }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.8 + 0.4,
    vx: (Math.random() - 0.5) * 0.16,
    vy: (Math.random() - 0.5) * 0.16,
    glow: Math.random() * 0.7 + 0.3
  }));

  constellationLines = Array.from({ length: 18 }, () => {
    const start = Math.floor(Math.random() * stars.length);
    const end = Math.floor(Math.random() * stars.length);
    return [start, end];
  });
}

function drawStarfield() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  starContext.clearRect(0, 0, width, height);

  constellationLines.forEach(([start, end]) => {
    const a = stars[start];
    const b = stars[end];
    if (!a || !b) return;
    const distance = Math.hypot(a.x - b.x, a.y - b.y);
    if (distance > 210) return;
    starContext.beginPath();
    starContext.moveTo(a.x, a.y);
    starContext.lineTo(b.x, b.y);
    starContext.strokeStyle = `rgba(101, 228, 255, ${Math.max(0.04, 0.22 - distance / 1000)})`;
    starContext.lineWidth = 1;
    starContext.stroke();
  });

  stars.forEach((star) => {
    star.x += star.vx;
    star.y += star.vy;

    if (star.x < 0) star.x = width;
    if (star.x > width) star.x = 0;
    if (star.y < 0) star.y = height;
    if (star.y > height) star.y = 0;

    starContext.beginPath();
    starContext.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    starContext.fillStyle = `rgba(255, 255, 255, ${star.glow})`;
    starContext.shadowBlur = 12;
    starContext.shadowColor = "rgba(101, 228, 255, 0.8)";
    starContext.fill();
    starContext.shadowBlur = 0;
  });

  animationFrame = requestAnimationFrame(drawStarfield);
}

function initStarfield() {
  resizeStarfield();
  if (animationFrame) cancelAnimationFrame(animationFrame);
  drawStarfield();
  window.addEventListener("resize", resizeStarfield);
}

document.querySelectorAll(".real-image").forEach((image) => {
  image.src = fallbackImage;
  image.dataset.fallback = fallbackImage;
});

renderAtlas();
renderResults(atlasObjects.slice(0, 6));
setActiveObject(atlasObjects[0]);
setStatus("Selecciona un astro del atlas o busca uno por nombre.");
attachEvents();
hydrateRealImages(document);
initStarfield();
