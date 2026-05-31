
            new Chart(document.getElementById("otro"), {
                type: "scatter",
                data: {
                    datasets: [
                        {
                            label: "Scatter Dataset",
                            data: [
                                { name: "BACHILLERATO EN ARTES, ARQUITECTURA Y DISEÑO EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7200000 },
                                { name: "BACHILLERATO EN DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 10364360 },
                                { name: "DISEÑO EN LA UNIVERSIDAD AUSTRAL DE CHILE", x: 6, y: 5887000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD CATÓLICA DE TEMUCO", x: 5, y: 5276000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE CHILE", x: 7, y: 6486700 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE LA SERENA", x: 5, y: 4071000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMERICAS", x: 5, y: 4730000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE PLAYA ANCHA DE CIENCIAS DE LA EDUCACION", x: 5, y: 4305000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE TALCA", x: 6, y: 5887000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE VALPARAISO", x: 6, y: 5713000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE VIÑA DEL MAR", x: 4, y: 4277000 },
                                { name: "DISEÑO DE EXPERIENCIAS INMERSIVAS Y VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO DE IMAGEN ESPECIALIDAD MODA  EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION", x: 3, y: 4210000},
                                { name: "DISEÑO DE INTERIORES Y AMBIENTES  EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION", x: 3, y: 4030000 },
                                { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7136000 },
                                { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 5069000 },
                                { name: "DISEÑO DE MODA Y MANAGEMENT EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                                { name: "DISEÑO DE VESTUARIO Y TEXTIL EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7148000 },
                                { name: "DISEÑO DE VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO EN ANIMACIÓN DIGITAL  EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO EN COMUNICACIÓN VISUAL  EN LA UTEM - UNIVERSIDAD TECNOLOGICA METROPOLITANA", x: 4, y: 4763300 },
                                { name: "DISEÑO EN COMUNICACION VISUAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 6552000 },
                                { name: "DISEÑO EN INTERACCION DIGITAL  EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE CHILE", x: 7, y: 8080000 },
                                { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE VALPARAÍSO", x: 7, y: 6915000},
                                { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMÉRICAS", x: 5, y: 4730000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 9754692 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 6056038 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DIEGO PORTALES", x: 6, y: 7597000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                                { name: "DISEÑO EN MARKETING DIGITAL EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000},
                                { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7065000 },
                                { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4307000 },
                                { name: "DISEÑO GRÁFICO ESPECIALIDAD MULTIMEDIA EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION", x: 3, y: 4210000},
                                { name: "DISEÑO GRÁFICO MENCIÓN DISEÑO ESTRATÉGICO EN LA UNIVERSIDAD DE ANTOFAGASTA", x: 5, y: 5120000 },
                                { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 4989000 },
                                { name: "DISEÑO INDUSTRIAL EN LA UTEM - UNIVERSIDAD TECNOLOGICA METROPOLITANA", x: 4, y: 4891000},
                                { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4434000 },
                                { name: "DISEÑO MENCION INDUSTRIAL/GRÁFICO/AMBIENTES EN LA UNIVERSIDAD MAYOR", x: 5, y: 7214218},
                                { name: "DISEÑO MULTIMEDIA EN LA UNIVERSIDAD DE TARAPACA", x: 6, y: 6555000 },
                                { name: "DISEÑO TEATRAL EN LA UNIVERSIDAD DE CHILE", x: 7, y: 5492400 },
                                { name: "INGENIERIA EN DISEÑO DE PRODUCTOS EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA", x: 6, y: 6000000 },
                                { name: "INGENIERIA EN DISEÑO EN LA UNIVERSIDAD ADOLFO IBAÑEZ", x: 6, y: 9754692 },
                                { name: "INGENIERIA EN FABRICACION Y DISEÑO INDUSTRIAL EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA", x: 6, y: 5180000 },
                                { name: "INGENIERIA EN REALIDAD VIRTUAL Y DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD BERNARDO O'HIGGINS", x: 5, y: 5900000 },
                            ],
                            backgroundColor: "rgba(241,142,45,.75)",
                            pointRadius: 5,
                            pointHoverRadius: 5,
                        },
                        {
                            label: "Línea de referencia",
                            type: "line",
                            data: [
                                { x: 3, y: 4030000 },
                                { x: 7, y: 8080000 },
                            ],
                            borderColor: "rgba(102,102,102,.2)",
                            borderWidth: 1,
                            pointRadius: 0,
                            pointHoverRadius: 0,
                            fill: false,
                            tension: 0,
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            type: "linear",
                            position: "bottom",
                            grid: { color: "rgba(0,0,0,0.06)" },
                            border: { color: "#ccc" },
                            ticks: {
                                font: { family: "'Georama', sans-serif", size: 11 },
                                color: "#999",
                                callback: function (value) {
                                    return Number.isInteger(value) ? value + " años" : null;
                                },
                            },
                        },
                        y: {
                            grid: { color: "rgba(0,0,0,0.06)" },
                            border: { color: "#bbb", dash: [4, 4] },
                            ticks: {
                                font: { family: "'Georama', sans-serif", size: 11 },
                                color: "#999",
                                callback: function (value) {
                                    return "$ " + value.toLocaleString("es-CL");
                                },
                            },
                        },
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: "#fff",
                            borderColor: "#ddd",
                            borderWidth: 1,
                            titleColor: "#111",
                            bodyColor: "#555",
                            titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                            bodyFont: { family: "'Georama', sans-serif", size: 11 },
                            padding: 10,
                            filter: function (item) {
                                return item.datasetIndex === 0;
                            },
                            callbacks: {
                                label: function (context) {
                                    const point = context.raw;
                                    return [
                                        point.name,
                                        "Universidad acreditada por " + point.x + " años",
                                        "Arancel $ " + point.y.toLocaleString("es-CL"),
                                    ];
                                },
                            },
                        },
                    },
					
                },
            });

// ── Cargar D3 dinámicamente (no interfiere con Chart.js) ──
(function() {
  var script = document.createElement("script");
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js";
  script.onload = function() { initMapaDiseño(); };
  document.head.appendChild(script);
})();
const regionData = [
  {
    name: "Arica y Parinacota", num: 15,
    lat: -18.48, lng: -70.32, count: 2,
    programs: [
      "Diseño Multimedia (U. de Tarapacá)",
      "Diseño Digital Profesional (INACAP Arica)"
    ]
  },
  {
    name: "Tarapacá", num: 1,
    lat: -20.21, lng: -69.30, count: 1,
    programs: [
      "Diseño Digital Profesional (INACAP Iquique)"
    ]
  },
  {
    name: "Antofagasta", num: 2,
    lat: -23.65, lng: -70.40, count: 2,
    programs: [
      "Diseño Gráfico mención Estratégico (U. de Antofagasta)",
      "Diseño Digital Profesional (INACAP Antofagasta)"
    ]
  },
  {
    name: "Atacama", num: 3,
    lat: -27.37, lng: -70.33, count: 0,
    programs: []
  },
  {
    name: "Coquimbo", num: 4,
    lat: -29.95, lng: -71.34, count: 3,
    programs: [
      "Diseño (U. de La Serena)",
      "Diseño Digital Profesional (INACAP La Serena)",
      "Diseño de Moda Profesional (INACAP La Serena)"
    ]
  },
  {
    name: "Valparaíso", num: 5,
    lat: -33.04, lng: -71.63, count: 8,
    programs: [
      "Diseño (U. de Valparaíso)",
      "Diseño (U. de Playa Ancha)",
      "Diseño (PUCV — Viña del Mar)",
      "Diseño (U. de Viña del Mar)",
      "Ingeniería en Diseño de Productos (UTFSM Valparaíso)",
      "Ingeniería en Fabricación y Diseño Industrial (UTFSM Viña del Mar)",
      "Diseño Digital Profesional (INACAP Valparaíso)",
      "Diseño de Vestuario (DUOC UC Viña del Mar)"
    ]
  },
  {
    name: "Metropolitana", num: 13,
    lat: -33.46, lng: -70.65, count: 28,
    programs: [
      "Diseño (U. de Chile)",
      "Diseño en Comunicación Visual (U. de Santiago)",
      "Diseño en Comunicación Visual / Diseño Industrial (UTEM)",
      "Diseño (PUC)",
      "Diseño (U. Diego Portales)",
      "Diseño (U. del Desarrollo)",
      "Diseño Gráfico / Diseño de Juegos Digitales (U. Andrés Bello)",
      "Diseño (U. Finis Terrae)",
      "Diseño de Videojuegos / Animación Digital (U. Gabriela Mistral)",
      "Diseño Mención Industrial/Gráfico/Ambientes (U. Mayor)",
      "Diseño Gráfico Multimedia (UNIACC)",
      "Diseño (U. de Las Américas)",
      "Ingeniería en Diseño (U. Adolfo Ibáñez)",
      "Ingeniería en Diseño de Productos (UTFSM San Joaquín)",
      "Diseño Digital Profesional (INACAP — 6 sedes)",
      "Diseño de Ambientes / Vestuario (DUOC UC — 5 sedes)",
      "+ otros programas afines"
    ]
  },
  {
    name: "Lib. Gral. B. O'Higgins", num: 6,
    lat: -34.17, lng: -70.74, count: 3,
    programs: [
      "Diseño Digital Profesional (INACAP Rancagua)",
      "Diseño Digital y Web (INACAP Rancagua)",
      "Diseño de Vestuario mención Alta Costura (AIEP Rancagua)"
    ]
  },
  {
    name: "Maule", num: 7,
    lat: -35.43, lng: -71.67, count: 3,
    programs: [
      "Diseño (U. de Talca)",
      "Diseño Digital Profesional (INACAP Curicó)",
      "Diseño Digital y Web (INACAP Curicó)"
    ]
  },
  {
    name: "Ñuble", num: 16,
    lat: -36.60, lng: -71.96, count: 2,
    programs: [
      "Diseño Gráfico (U. del Bío-Bío — Sede Chillán)",
      "Diseño Digital Profesional (INACAP Chillán)"
    ]
  },
  {
    name: "Biobío", num: 8,
    lat: -37.47, lng: -72.35, count: 5,
    programs: [
      "Diseño Industrial (U. del Bío-Bío — Concepción)",
      "Diseño (U. del Desarrollo — Concepción)",
      "Diseño de Juegos Digitales (U. Andrés Bello — Concepción)",
      "Diseño Digital Profesional (INACAP Talcahuano)",
      "Diseño de Vestuario mención Alta Costura (AIEP Concepción)"
    ]
  },
  {
    name: "La Araucanía", num: 9,
    lat: -38.95, lng: -72.66, count: 2,
    programs: [
      "Diseño (U. Católica de Temuco)",
      "Diseño Digital Profesional (INACAP Temuco)"
    ]
  },
  {
    name: "Los Ríos", num: 14,
    lat: -39.81, lng: -73.24, count: 2,
    programs: [
      "Diseño (U. Austral de Chile — Valdivia)",
      "Diseño Digital Profesional (INACAP Valdivia)"
    ]
  },
  {
    name: "Los Lagos", num: 10,
    lat: -41.47, lng: -72.93, count: 1,
    programs: [
      "Diseño Digital Profesional (INACAP Osorno)"
    ]
  },
  {
    name: "Aysén", num: 11,
    lat: -45.57, lng: -72.07, count: 0,
    programs: []
  },
  {
    name: "Magallanes", num: 12,
    lat: -51.72, lng: -72.52, count: 0,
    programs: []
  }
];
 
// Posiciones (cx, cy) en el espacio viewBox 260×820
const bubblePos = {
  15: { x: 78, y: 27  },
  1:  { x: 77, y: 53  },
  2:  { x: 78, y: 83  },
  3:  { x: 75, y: 120 },
  4:  { x: 73, y: 157 },
  5:  { x: 72, y: 200 },
  13: { x: 68, y: 246 },
  6:  { x: 65, y: 286 },
  7:  { x: 62, y: 319 },
  16: { x: 59, y: 356 },
  8:  { x: 56, y: 391 },
  9:  { x: 53, y: 432 },
  14: { x: 50, y: 473 },
  10: { x: 47, y: 513 },
  11: { x: 38, y: 563 },
  12: { x: 34, y: 628 }
};
 
// Paths SVG simplificados de cada región (Norte→Sur, viewBox 260×820)
const regionPaths = {
  15: "M60,15 L80,10 L95,18 L90,35 L75,40 L60,35 Z",
  1:  "M65,40 L85,35 L90,45 L88,62 L72,65 L62,55 Z",
  2:  "M68,65 L88,62 L92,80 L90,100 L70,105 L62,88 Z",
  3:  "M65,105 L85,100 L90,118 L85,135 L68,138 L60,122 Z",
  4:  "M63,138 L83,135 L88,155 L84,175 L66,178 L58,160 Z",
  5:  "M60,178 L80,175 L85,200 L80,220 L62,222 L55,202 Z",
  13: "M58,222 L78,220 L82,245 L78,268 L58,270 L52,248 Z",
  6:  "M55,270 L75,268 L79,285 L75,300 L57,302 L50,285 Z",
  7:  "M52,300 L72,298 L76,318 L72,338 L54,340 L47,320 Z",
  16: "M49,340 L69,338 L73,355 L69,370 L51,372 L44,355 Z",
  8:  "M46,372 L66,370 L70,390 L66,408 L48,410 L41,392 Z",
  9:  "M43,410 L63,408 L67,430 L62,452 L44,454 L37,432 Z",
  14: "M40,454 L60,452 L64,472 L59,490 L41,492 L34,472 Z",
  10: "M37,490 L57,488 L61,512 L56,535 L38,537 L31,513 Z",
  11: "M30,535 L52,533 L56,562 L50,590 L30,592 L22,560 Z",
  12: "M18,590 L48,588 L52,625 L46,665 L20,668 L12,630 Z"
};
 
// ──────────────────────────────────────────────────────────────
//  CSS inyectado dinámicamente (puedes moverlo a tu .css)
// ──────────────────────────────────────────────────────────────
const CSS = `
  .mdb-wrapper {
    display: flex;
    gap: 32px;
    align-items: flex-start;
    font-family: system-ui, sans-serif;
    padding: 1.5rem 0;
  }
  .mdb-map-col { flex: 0 0 auto; position: relative; }
  .mdb-info-col { flex: 1; min-width: 0; }
  .mdb-title {
    font-size: 17px;
    font-weight: 500;
    color: #111;
    margin-bottom: 6px;
  }
  .mdb-subtitle {
    font-size: 13px;
    color: #666;
    line-height: 1.55;
    margin-bottom: 1.5rem;
  }
  .mdb-ranking { display: flex; flex-direction: column; gap: 7px; }
  .mdb-rank-row { display: flex; align-items: center; gap: 8px; }
  .mdb-rank-num {
    font-size: 11px; color: #999;
    width: 16px; text-align: right; flex-shrink: 0;
  }
  .mdb-rank-inner { flex: 1; min-width: 0; }
  .mdb-rank-header {
    display: flex; justify-content: space-between; margin-bottom: 3px;
  }
  .mdb-rank-name {
    font-size: 12px; font-weight: 500; color: #222;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .mdb-rank-count { font-size: 12px; color: #1a6fba; font-weight: 500; flex-shrink: 0; margin-left: 8px; }
  .mdb-bar-bg { height: 4px; background: #eee; border-radius: 2px; }
  .mdb-bar-fill { height: 4px; background: #378ADD; border-radius: 2px; opacity: 0.8; }
  .mdb-legend {
    margin-top: 1.8rem;
    padding: 12px 14px;
    background: #f7f6f2;
    border-radius: 8px;
  }
  .mdb-legend-title {
    font-size: 11px; color: #888; font-weight: 500; margin-bottom: 10px;
  }
  .mdb-legend-bubbles { display: flex; align-items: flex-end; gap: 18px; margin-bottom: 10px; }
  .mdb-legend-bubble { display: flex; flex-direction: column; align-items: center; gap: 5px; }
  .mdb-legend-circle { border-radius: 50%; background: #378ADD; opacity: 0.8; }
  .mdb-legend-label { font-size: 10px; color: #888; }
  .mdb-note { font-size: 11px; color: #999; line-height: 1.5; }
 
  .mdb-tooltip {
    position: absolute;
    background: #fff;
    border: 0.5px solid #ccc;
    border-radius: 8px;
    padding: 10px 14px;
    font-size: 13px;
    font-family: system-ui, sans-serif;
    color: #222;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s;
    max-width: 230px;
    line-height: 1.5;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }
  .mdb-tooltip strong { font-weight: 500; }
  .mdb-tooltip hr { border: none; border-top: 0.5px solid #e0e0e0; margin: 6px 0; }
  .mdb-tooltip ul { padding-left: 14px; font-size: 11px; color: #666; }
  .mdb-region-path { stroke: #fff; stroke-width: 0.5; transition: opacity 0.2s; cursor: default; }
  .mdb-region-path:hover { opacity: 0.8; }
  .mdb-bubble { cursor: pointer; }
 
  @media (max-width: 600px) {
    .mdb-wrapper { flex-direction: column; }
    .mdb-map-col { width: 100%; }
    .mdb-map-col svg { width: 100%; max-width: 260px; margin: 0 auto; display: block; }
  }
 
  @media (prefers-color-scheme: dark) {
    .mdb-title  { color: #f0f0f0; }
    .mdb-subtitle { color: #aaa; }
    .mdb-rank-name { color: #e0e0e0; }
    .mdb-bar-bg { background: #333; }
    .mdb-legend { background: #1e1e1e; }
    .mdb-legend-title { color: #aaa; }
    .mdb-legend-label { color: #aaa; }
    .mdb-note { color: #777; }
    .mdb-rank-num { color: #666; }
    .mdb-rank-count { color: #5da8f0; }
    .mdb-bar-fill { background: #5da8f0; }
    .mdb-bubble circle { fill: #5da8f0; }
    .mdb-tooltip { background: #2a2a2a; border-color: #444; color: #e0e0e0; }
    .mdb-tooltip ul { color: #aaa; }
    .mdb-tooltip hr { border-color: #444; }
    .mdb-region-path { stroke: #111; }
  }
`;
 
// ──────────────────────────────────────────────────────────────
//  Función principal — llama con el selector del contenedor
//  Ejemplo: initMapaDiseño('#mi-mapa')
//  Requiere D3 v7 cargado antes (script src en tu HTML)
// ──────────────────────────────────────────────────────────────
function initMapaDiseño(selector) {
  // Inyectar CSS
  if (!document.getElementById("mdb-styles")) {
    const style = document.createElement("style");
    style.id = "mdb-styles";
    style.textContent = CSS;
    document.head.appendChild(style);
  }
 
  const container = document.querySelector(selector);
  if (!container) {
    console.error("initMapaDiseño: no se encontró el selector", selector);
    return;
  }
 
  // Escala de radios (raíz cuadrada → área proporcional al dato)
  const maxCount = Math.max(...regionData.map(d => d.count));
  const rScale = d3.scaleSqrt().domain([0, maxCount]).range([0, 22]);
 
  const isDark = matchMedia("(prefers-color-scheme: dark)").matches;
  const landFill    = isDark ? "#2a2a28" : "#dedad2";
  const noDataFill  = isDark ? "#1a1a18" : "#eceae5";
  const strokeColor = isDark ? "#111"    : "#fff";
 
  // Estructura HTML
  container.innerHTML = `
    <div class="mdb-wrapper">
      <div class="mdb-map-col">
        <svg id="mdb-svg" width="260" viewBox="0 0 260 820"
             role="img"
             aria-label="Mapa de Chile con burbujas por región según oferta de Diseño Gráfico 2026">
          <title>Oferta de Diseño Gráfico por región en Chile 2026</title>
        </svg>
        <div class="mdb-tooltip" id="mdb-tip"></div>
      </div>
      <div class="mdb-info-col">
        <p class="mdb-title">¿Dónde se concentra la oferta de Diseño Gráfico?</p>
        <p class="mdb-subtitle">
          Programas universitarios e institutos profesionales con carreras de
          Diseño Gráfico y afines — Oferta académica 2026 (SIES / MINEDUC)
        </p>
        <div class="mdb-ranking" id="mdb-ranking"></div>
        <div class="mdb-legend">
          <p class="mdb-legend-title">Tamaño de burbuja = N° de programas</p>
          <div class="mdb-legend-bubbles">
            <div class="mdb-legend-bubble">
              <div class="mdb-legend-circle" style="width:10px;height:10px"></div>
              <span class="mdb-legend-label">1–3</span>
            </div>
            <div class="mdb-legend-bubble">
              <div class="mdb-legend-circle" style="width:18px;height:18px"></div>
              <span class="mdb-legend-label">4–10</span>
            </div>
            <div class="mdb-legend-bubble">
              <div class="mdb-legend-circle" style="width:30px;height:30px"></div>
              <span class="mdb-legend-label">20+</span>
            </div>
          </div>
          <p class="mdb-note">
            Incluye: Diseño Gráfico, Diseño Digital, Diseño en Comunicación Visual,
            Diseño Multimedia, Diseño de Juegos/Videojuegos y programas de Diseño
            general con mención Gráfico.
          </p>
        </div>
      </div>
    </div>
  `;
 
  // ── Dibujar regiones ──
  const svg = d3.select("#mdb-svg");
 
  Object.entries(regionPaths).forEach(([num, pathD]) => {
    const region = regionData.find(r => r.num === +num);
    svg.append("path")
      .attr("class", "mdb-region-path")
      .attr("d", pathD)
      .attr("fill", region && region.count > 0 ? landFill : noDataFill)
      .attr("stroke", strokeColor);
  });
 
  // ── Tooltip ──
  const tip = document.getElementById("mdb-tip");
  const mapCol = container.querySelector(".mdb-map-col");
 
  // ── Dibujar burbujas ──
  regionData.forEach(r => {
    const pos = bubblePos[r.num];
    if (!pos || r.count === 0) return;
 
    const radius = Math.max(rScale(r.count), 5);
 
    const g = svg.append("g").attr("class", "mdb-bubble")
      .on("mouseenter", function () {
        const svgRect = document.getElementById("mdb-svg").getBoundingClientRect();
        const colRect = mapCol.getBoundingClientRect();
        const scale   = svgRect.width / 260;
        const tx = pos.x * scale + svgRect.left - colRect.left + 14;
        const ty = pos.y * scale + svgRect.top  - colRect.top  - 12;
 
        tip.style.left    = tx + "px";
        tip.style.top     = ty + "px";
        tip.style.opacity = "1";
        tip.innerHTML = `
          <strong>${r.name}</strong><br>
          <span style="color:#1a6fba;font-weight:500">${r.count} programa${r.count !== 1 ? "s" : ""}</span>
          <hr>
          <ul>
            ${r.programs.slice(0, 6).map(p => `<li>${p}</li>`).join("")}
            ${r.programs.length > 6 ? `<li>+ ${r.programs.length - 6} más...</li>` : ""}
          </ul>
        `;
      })
      .on("mouseleave", () => { tip.style.opacity = "0"; });
 
    g.append("circle")
      .attr("cx", pos.x).attr("cy", pos.y).attr("r", radius)
      .attr("fill", "#378ADD").attr("opacity", 0.85)
      .attr("stroke", isDark ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.6)")
      .attr("stroke-width", 1.2);
 
    g.append("text")
      .attr("x", pos.x).attr("y", pos.y)
      .attr("text-anchor", "middle").attr("dominant-baseline", "central")
      .attr("fill", "#fff")
      .attr("font-size", radius > 12 ? "11" : "9")
      .attr("font-weight", "500")
      .attr("pointer-events", "none")
      .text(r.count);
  });
 
  // ── Ranking lateral ──
  const rankingEl = document.getElementById("mdb-ranking");
  const totalPrograms = regionData.reduce((s, r) => s + r.count, 0);
  const sorted = [...regionData]
    .filter(d => d.count > 0)
    .sort((a, b) => b.count - a.count);
 
  sorted.forEach((r, i) => {
    const pct = Math.round((r.count / totalPrograms) * 100);
    const row = document.createElement("div");
    row.className = "mdb-rank-row";
    row.innerHTML = `
      <span class="mdb-rank-num">${i + 1}</span>
      <div class="mdb-rank-inner">
        <div class="mdb-rank-header">
          <span class="mdb-rank-name">${r.name}</span>
          <span class="mdb-rank-count">${r.count}</span>
        </div>
        <div class="mdb-bar-bg">
          <div class="mdb-bar-fill" style="width:${pct}%"></div>
        </div>
      </div>
    `;
    rankingEl.appendChild(row);
  });
}


