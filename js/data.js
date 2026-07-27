const MAP_THEMES = {
  housing: {
    title: "Housing & Collective Self-Determination",
    color: "#b97f75",
    text: "",
    quote: "",
    attribution: ""
  },
  commons: {
    title: "Commons & Mutual Aid",
    color: "#8fa084",
    text: "",
    quote: "",
    attribution: ""
  },
  institutions: {
    title: "Counter-Institutions",
    color: "#8197a6",
    text: "",
    quote: "",
    attribution: ""
  },
  culture: {
    title: "Culture as Collective Practice",
    color: "#a1849d",
    text: "",
    quote: "",
    attribution: ""
  }
};

const PARK_SITE = {
  id: "tompkins",
  title: "Tompkins Square Park",
  address: "Avenue A–B, East 7th–10th Streets",
  coordinates: [40.72655, -73.98155],
  period: "geographic + symbolic center",
  slides: [
    {
      image: "images/tompkins-wigstock-1988.jpg",
      alt: "Black-and-white photograph of drag performers singing onstage before a crowd at Wigstock in Tompkins Square Park.",
      title: "Wigstock, 1988",
      caption: "Lady Bunny and friends performing at Wigstock in Tompkins Square Park.",
      credit: "Image reproduced via The Bowery Boys; original image credited there to aquaman6 on Flickr.",
      sourceLabel: "The Bowery Boys, “The rebellious history of Tompkins Square Park”",
      sourceUrl: "https://www.boweryboyshistory.com/2023/08/the-ragged-rebellious-history-of.html"
    },
    {
      image: "images/tompkins-living-proof-clayton.jpg",
      alt: "Nighttime crowd at Tompkins Square Park with raised fists and people gathered behind a metal barricade.",
      title: "Tompkins Square Park",
      caption: "A crowd gathered in the park, photographed by Clayton Patterson.",
      credit: "Photograph by Clayton Patterson; reproduced from Living Proof New York.",
      sourceLabel: "Living Proof New York, “Tompkins Square Park: the last 40 Years in New York City”",
      sourceUrl: "https://www.livingproofnewyork.com/tompkins-square-park-the-last-40-years-in-new-york-city/"
    }
  ]
};

const MAP_SITES = [
  {
    id: "east13",
    title: "East 13th Street Squats",
    address: "East 13th Street near Avenues A and B",
    coordinates: [40.72934, -73.97987],
    themes: ["housing"],
    period: "Squatter community, 1980s–1990s",
    description: "A cluster of abandoned buildings occupied, repaired, and made into homes through collective labor. The East 13th Street squats became a major site of neighborhood organizing, collective defense, and conflict over who had the right to determine the use of urban housing.",
    quote: "",
    source: "Amy Starecheski; Seth Tobocman, War in the Neighborhood. Images to be added."
  },
  {
  id: "tent-city",
  title: "Tent City, Tompkins Square Park",
  address: "Tompkins Square Park",
 coordinates: [40.72705, -73.98165],
  themes: ["housing"],
  period: "Homeless encampment, late 1980s",
  description: "As homeless residents were displaced from other parks by curfews and policing, Tompkins Square Park became one of the city's largest encampments. More than a site of deprivation, Tent City became a community organized around mutual aid, political resistance, and the assertion that unhoused New Yorkers had a right to remain in the neighborhood. Its violent removal in 1988 became a defining conflict over who could inhabit and shape urban space.",
  quote: "",
  source: "Neil Smith; Clayton Patterson; Living Proof New York. Image and quotation to be added."
},
  {
    id: "umbrella",
    title: "Umbrella House",
    address: "21–23 Avenue C",
    coordinates: [40.72211, -73.97969],
    themes: ["housing", "commons"],
    period: "Occupied in 1988; later legalized",
    description: "Residents collectively rehabilitated an abandoned building and later negotiated its transformation into limited-equity cooperative housing. The building illustrates both the possibilities and the internal tensions of collective ownership, governance, and institutional recognition.",
    quote: "",
    source: "Amy Starecheski, What Was Squatting, and What Comes Next?"
  },
  {
    id: "csquat",
    title: "C-Squat",
    address: "155 Avenue C",
    coordinates: [40.72583, -73.97753],
    themes: ["housing", "institutions", "culture"],
    period: "Squat founded 1989",
    description: "C-Squat shows housing as more than shelter: it became a site of collective life, decision-making, culture, and neighborhood memory. Its later legalization and the loss of its community room also reveal the costs and compromises involved in becoming a formal cooperative.",
    quote: "",
    source: "Amy Starecheski, What Was Squatting, and What Comes Next?"
  },
  {
    id: "garden-eden",
    title: "Garden of Eden",
    address: "Forsyth Street, between Forsyth and Eldridge Streets",
    coordinates: [40.71855, -73.99213],
    themes: ["commons"],
    period: "Created beginning in 1975; demolished in 1986",
    description: "Adam Purple and neighborhood participants transformed rubble-filled vacant lots into a large circular garden. Its destruction for development illustrates both the power of resident-created urban commons and their vulnerability when official maps continue to define living spaces as vacant land.",
    quote: "",
    image: "images/garden-of-eden-seth-tobocman.jpeg",
    imageAlt: "Black-and-white Seth Tobocman comic panel about the Garden of Eden, showing the circular garden, surrounding buildings, community conflict, a bulldozer, and the destruction of the garden.",
    imageCaption: "Seth Tobocman, War in the Neighborhood, p. 23. Graphic narrative panel depicting the Garden of Eden and its destruction.",
    source: "Seth Tobocman, War in the Neighborhood, p. 23, plus historical sources on Adam Purple’s Garden of Eden."
  },
  {
    id: "laplaza",
    title: "La Plaza Cultural",
    address: "East 9th Street and Avenue C",
    coordinates: [40.72522, -73.97818],
    themes: ["commons", "culture"],
    period: "Community garden founded in the 1970s",
    description: "A resident-created garden and cultural commons built on neglected land and maintained through collective labor, stewardship, and neighborhood participation.",
    quote: "",
    source: "Efrat Eizenberg, “Actually Existing Commons.”"
  },
  {
    id: "charas",
    title: "CHARAS / El Bohío",
    address: "605 East 9th Street",
    coordinates: [40.72752, -73.98036],
    themes: ["commons", "institutions", "culture"],
    period: "Community center, 1979–2001",
    description: "A former public school transformed by neighborhood organizers into a Puerto Rican community and cultural center. Its loss remains central to struggles over community-controlled space.",
    quote: "",
    source: "Nandini Bagchee, Counter Institution."
  },
  {
    id: "abc",
    title: "ABC No Rio",
    address: "156 Rivington Street",
    coordinates: [40.71902, -73.98506],
    themes: ["institutions", "culture"],
    period: "Founded 1980",
    description: "A collectively run art and activist center that developed from an occupation and critique of real-estate policy into durable infrastructure for DIY cultural and political practice.",
    quote: "",
    source: "Nandini Bagchee; Dawson Barrett, “DIY Democracy.”"
  },
  {
    id: "kenkeleba",
    title: "Kenkeleba House",
    address: "214 East 2nd Street",
    coordinates: [40.72154, -73.98292],
    themes: ["culture", "institutions"],
    period: "Community-rooted gallery and artist space",
    description: "Kenkeleba House created durable neighborhood infrastructure for artists—particularly Black artists whose work was often excluded from commercial institutions. It broadens the map’s account of cultural organizing beyond punk and anarchist spaces.",
    quote: "",
    source: "Kenkeleba House. Further quotation and image to be selected."
  },
  {
    id: "peace",
    title: "Peace Pentagon",
    address: "339 Lafayette Street",
    coordinates: [40.72668, -73.99455],
    themes: ["institutions"],
    period: "Activist building, 1969–2016",
    description: "A building that housed anti-war and social-justice organizations at below-market rents, providing durable physical infrastructure for organizing across movements.",
    quote: "",
    source: "Nandini Bagchee, Counter Institution."
  }
];
