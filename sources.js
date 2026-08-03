const sourcesContainer = document.getElementById("sources-list");

function createSourceLink(label, url) {
  if (!url) return "";

  const safeLabel = label || url;

  return `
    <a href="${url}" target="_blank" rel="noopener noreferrer">
      ${safeLabel}
    </a>
  `;
}

function createSourceEntry(slide) {
  const hasImageSource = slide.sourceUrl;
  const hasQuoteSource = slide.quoteSourceUrl;

  if (!hasImageSource && !hasQuoteSource && !slide.credit) {
    return "";
  }

  let html = `<li class="source-entry">`;

  if (slide.title) {
    html += `<h3>${slide.title}</h3>`;
  }

  if (slide.caption) {
    html += `<p>${slide.caption}</p>`;
  }

  if (slide.credit) {
    html += `<p>${slide.credit}</p>`;
  }

  if (hasImageSource) {
    html += `
      <p>
        ${createSourceLink(
          slide.sourceLabel || "Image source",
          slide.sourceUrl
        )}
      </p>
    `;
  }

  if (hasQuoteSource) {
    html += `
      <p>
        ${createSourceLink(
          slide.quoteSourceLabel || "Quotation source",
          slide.quoteSourceUrl
        )}
      </p>
    `;
  }

  html += `</li>`;

  return html;
}

function createSiteSection(site) {
  const sourceEntries = [];

  if (site.source) {
    sourceEntries.push(`
      <li class="source-entry">
        <p>${site.source}</p>
      </li>
    `);
  }

  if (site.slides && Array.isArray(site.slides)) {
    site.slides.forEach((slide) => {
      const entry = createSourceEntry(slide);

      if (entry) {
        sourceEntries.push(entry);
      }
    });
  }

  if (sourceEntries.length === 0) {
    return "";
  }

  return `
    <section class="source-site">
      <h2>${site.title}</h2>

      ${site.address ? `<p>${site.address}</p>` : ""}

      <ul>
        ${sourceEntries.join("")}
      </ul>
    </section>
  `;
}

function renderSources() {
  if (!sourcesContainer) return;

  const allSites = [];

  if (typeof PARK_SITE !== "undefined") {
    allSites.push(PARK_SITE);
  }

  allSites.push(...MAP_SITES);

  sourcesContainer.innerHTML = allSites
    .map(createSiteSection)
    .join("");
}

renderSources();