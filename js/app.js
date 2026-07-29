const DEFAULT_CENTER = PARK_SITE.coordinates;
const DEFAULT_ZOOM = 18;

const map = L.map("map", {
  zoomControl: true,
  minZoom: 12,
  maxZoom: 15
}).setView(DEFAULT_CENTER, 16);

/*
  A nearly label-free, pale CARTO basemap. The additional CSS filter in
  styles.css makes it read more like a quiet planning sheet.
*/
L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
  subdomains: "abcd",
  maxZoom: 20,
  attribution: "&copy; OpenStreetMap contributors &copy; CARTO"
}).addTo(map);

/*
  Direct thematic lens: a real HTML element placed inside Leaflet's map
  container. It sits above all map rendering and remains click-through.
*/

/* A faint outline keeps the park legible even when no theme is selected. */
L.polygon([
  [40.72835, -73.98338],
  [40.72837, -73.97988],
  [40.72468, -73.97983],
  [40.72467, -73.98334]
], {
  color: "#8f9487",
  weight: 1,
  dashArray: "3,5",
  fillColor: "#aeb6a5",
  fillOpacity: .09,
  interactive: false
}).addTo(map);

let activeTheme = null;
let currentSlides = [];
let currentSlideIndex = 0;
const siteMarkers = new Map();

function stableRotation(id) {
  let total = 0;
  for (const char of id) total += char.charCodeAt(0);
  return (total % 19) - 9;
}

function makeIcon(color, id, isPark = false) {
  const rotation = stableRotation(id);
  return L.divIcon({
    className: "",
    iconSize: isPark ? [25, 25] : [18, 18],
    iconAnchor: isPark ? [12, 12] : [9, 9],
    html: `<div class="place-marker ${isPark ? "park-marker" : ""}"
      style="--marker-color:${color};--marker-rotation:${rotation}deg"></div>`
  });
}

const parkMarker = L.marker(PARK_SITE.coordinates, {
  icon: makeIcon("#7e8574", PARK_SITE.id, true),
  keyboard: true,
  title: PARK_SITE.title,
  zIndexOffset: 1000
}).addTo(map);

parkMarker.bindTooltip(PARK_SITE.title, {
  direction: "top",
  offset: [0, -11]
});
parkMarker.on("click", showPark);

MAP_SITES.forEach(site => {
  const marker = L.marker(site.coordinates, {
    icon: makeIcon("#9b958b", site.id),
    keyboard: true,
    title: site.title
  });

  marker.bindTooltip(site.title, {
    direction: "top",
    offset: [0, -8]
  });

  marker.on("click", () => showSite(site));
  siteMarkers.set(site.id, marker);
});

function renderButtons() {
  const root = document.getElementById("theme-buttons");
  root.innerHTML = "";

  Object.entries(MAP_THEMES).forEach(([key, theme], index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "theme-button" + (activeTheme === key ? " active" : "");
    button.style.setProperty("--theme-color", theme.color);
    button.style.setProperty("--dot-rotation", `${[-7, 4, -2, 8][index]}deg`);
    button.innerHTML = `
      <span class="nav-dot" aria-hidden="true"></span>
      <strong>${theme.title}</strong>
    `;
    button.addEventListener("click", () => selectTheme(key));
    root.appendChild(button);
  });
}

function selectTheme(key) {
  hideImageOverlay();
  activeTheme = activeTheme === key ? null : key;
  renderButtons();
  renderThemeCopy();
  renderMarkers();

const themeLens = document.getElementById("theme-lens");

if (activeTheme) {
  themeLens.style.backgroundColor = MAP_THEMES[activeTheme].color;
  themeLens.style.opacity = "0.32";
} else {
  themeLens.style.opacity = "0";
}
}

function renderThemeCopy() {
  const panel = document.getElementById("theme-copy");

  if (!activeTheme) {
    panel.innerHTML = "";
    panel.style.color = "";
    return;
  }

  const theme = MAP_THEMES[activeTheme];
  panel.innerHTML = `
  <h2>${theme.title}</h2>
${theme.vision ? `<p class="theme-vision">${theme.vision}</p>` : ""}
${theme.practices ? `<p class="theme-practices">${theme.practices}</p>` : ""}
  `;
}

function renderMarkers() {
  MAP_SITES.forEach(site => {
    const marker = siteMarkers.get(site.id);
    if (map.hasLayer(marker)) map.removeLayer(marker);

    if (activeTheme && site.themes.includes(activeTheme)) {
      marker.setIcon(makeIcon(MAP_THEMES[activeTheme].color, site.id));
      marker.addTo(map);
    }
  });

  /* The park is always visible and never belongs to a filter. */
  if (!map.hasLayer(parkMarker)) parkMarker.addTo(map);
}

function showPark() {
  activeTheme = null;
  renderButtons();
  renderThemeCopy();
  renderMarkers();
  document.getElementById("theme-lens").style.opacity = "0";
  const mapWrap = document.getElementById("map-wrap");
  mapWrap.classList.remove("theme-lens-active");
  mapWrap.style.removeProperty("--active-theme-color");
  document.getElementById("site-detail").innerHTML = "";
  map.flyTo(PARK_SITE.coordinates, DEFAULT_ZOOM, { duration: .55 });

  if (PARK_SITE.slides?.length) {
    showSlideshow(PARK_SITE.slides, 0);
  }
}
function goHome() {
  activeTheme = null;
  renderButtons();
  renderThemeCopy();
  renderMarkers();

  document.getElementById("theme-lens").style.opacity = "0";

  const mapWrap = document.getElementById("map-wrap");
  mapWrap.classList.remove("theme-lens-active");
  mapWrap.style.removeProperty("--active-theme-color");

  document.getElementById("site-detail").innerHTML = "";

  closeSlideshow();

  map.flyTo(PARK_SITE.coordinates, DEFAULT_ZOOM, { duration: .55 });
}

function showSite(site) {
  const themeForColor = activeTheme && site.themes.includes(activeTheme)
    ? activeTheme
    : site.themes[0];

  const color = MAP_THEMES[themeForColor].color;
  const tags = site.themes.map(key =>
    `<span class="theme-tag" style="--tag-color:${MAP_THEMES[key].color}">${MAP_THEMES[key].title}</span>`
  ).join("");

  const detail = document.getElementById("site-detail");
  detail.style.setProperty("--site-color", color);
  detail.innerHTML = `
    <h3>${site.title}</h3>
    <div class="site-meta">${site.address}<br>${site.period}</div>
    <p>${site.description}</p>
    ${site.quote ? `<blockquote>“${site.quote}”</blockquote>` : ""}
    <div class="theme-tags">${tags}</div>
    <p class="source-note"><strong>Working source note:</strong> ${site.source}</p>
  `;

if (site.slides?.length) {

  showSlideshow(site.slides, 0);

} else if (site.image) {

  showImageOverlay(site);

} else {

  hideImageOverlay();

}

  map.flyTo(site.coordinates, Math.max(map.getZoom(), 16), {
    duration: .5
  });
}

function showImageOverlay(site) {
  const slide = {
    image: site.image,
    alt: site.imageAlt || "",
    title: site.title,
    caption: site.imageCaption || "",
    credit: "",
    sourceLabel: "",
    sourceUrl: ""
  };
  showSlideshow([slide], 0);
}

function showSlideshow(slides, startIndex = 0) {
  currentSlides = slides;
  currentSlideIndex = startIndex;
  renderCurrentSlide();

  const overlay = document.getElementById("image-overlay");
  overlay.classList.add("visible");
  overlay.setAttribute("aria-hidden", "false");
}

function renderCurrentSlide() {
  const slide = currentSlides[currentSlideIndex];
  if (!slide) return;

   const image = document.getElementById("overlay-image");
  const quotePanel = document.getElementById("overlay-quote");
  const quoteText = document.getElementById("overlay-quote-text");
  const quoteAttribution = document.getElementById("overlay-quote-attribution");

  const isQuoteSlide = slide.type === "quote";

  if (isQuoteSlide) {
    image.hidden = true;
    quotePanel.hidden = false;

    quoteText.textContent = slide.quote || "";
    quoteAttribution.textContent = slide.attribution || "";
  } else {
    image.hidden = false;
    quotePanel.hidden = true;

    image.src = slide.image || "";
    image.alt = slide.alt || "";

    quoteText.textContent = "";
    quoteAttribution.textContent = "";
  }

  document.getElementById("overlay-title").textContent = slide.title || "";
  document.getElementById("overlay-caption").textContent = slide.caption || "";
  document.getElementById("overlay-credit").textContent = slide.credit || "";

  const source = document.getElementById("overlay-source");
  if (slide.sourceUrl) {
    source.href = slide.sourceUrl;
    source.textContent = slide.sourceLabel || "View source";
    source.hidden = false;
  } else {
    source.hidden = true;
  }

  document.getElementById("slide-counter").textContent =
    currentSlides.length > 1 ? `${currentSlideIndex + 1} / ${currentSlides.length}` : "";

  const multiple = currentSlides.length > 1;
  document.getElementById("previous-slide").hidden = !multiple;
  document.getElementById("next-slide").hidden = !multiple;
}

function changeSlide(direction) {
  if (currentSlides.length < 2) return;
  currentSlideIndex =
    (currentSlideIndex + direction + currentSlides.length) % currentSlides.length;
  renderCurrentSlide();
}

function hideImageOverlay() {
  const overlay = document.getElementById("image-overlay");
  overlay.classList.remove("visible");
  overlay.setAttribute("aria-hidden", "true");
  currentSlides = [];
  currentSlideIndex = 0;
}

document.getElementById("close-image").addEventListener("click", hideImageOverlay);
document.getElementById("previous-slide").addEventListener("click", () => changeSlide(-1));
document.getElementById("next-slide").addEventListener("click", () => changeSlide(1));
document.addEventListener("keydown", (event) => {
  if (!document.getElementById("image-overlay").classList.contains("visible")) return;
  if (event.key === "ArrowLeft") changeSlide(-1);
  if (event.key === "ArrowRight") changeSlide(1);
  if (event.key === "Escape") hideImageOverlay();
});

document
  .getElementById("site-title-home")
  .addEventListener("click", goHome);

renderButtons();
renderThemeCopy();
renderMarkers();
map.setView(DEFAULT_CENTER, DEFAULT_ZOOM);
hideImageOverlay();
