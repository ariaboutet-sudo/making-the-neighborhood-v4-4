const MAP_THEMES = {
  housing: {
    title: "Housing & Collective Self-Determination",
    color: "#CB4154",
    vision: "HOUSING BEYOND PROFIT",
    practices: "Squatting • Encampments • Rent strikes • Direct Action • Coalition Building • Mutual Defense"
  },

   mutualAid: {
    title: "Mutual Aid",
    color: "#C97A3A",
    vision: "CARE BEYOND INSTITUTIONS",
    practices: "Community-Controlled Institutions • Harm Reduction • Collective Care • Resource Re/Distribution • Housing Justice • Self Governance • Commons Stewardship • DIY Infrastructure"
  },

   queer: {
    title: "Queer Liberation",
    color: "#C9A0DC",
    vision: "QUEER WORLD-MAKING",
    practices: "Mutual Aid • Cultural Production • Visibility • Chosen Family • Political Education • Public Celebration • Direct Action • Coalition Building"
  },

    culture: {
    title: "Cultural Resistance",
    color: "#68C2C2",
    vision: "CULTURE AS COLLECTIVE / POLITICAL PRACTICE",
    practices: "Murals • Bomba y plena • DIY Publishing & Zines • Public Performance • Graffiti • Wheatpasting / Flyering • Community Venues"
  },

    place: {
    title: "Collective Place-Making",
    color: "#78B96B",
    vision: "MAKING THE NEIGHBORHOOD",
    practices: "Reclaiming Vacant Lots & Buildings • Self-Built Spaces • Collective Maintenance • Community Design • Neighborhood Beautification"
  }
};

const PARK_SITE = {
  id: "tompkins",
  title: "Tompkins Square Park",
  address: "Avenue A–B, East 7th–10th Streets",
  coordinates: [40.72655, -73.98155],
};

const MAP_SITES = [
  {
  id: "bandshell",
  title: "Tompkins Square Park Bandshell",
  address: "Tompkins Square Park",
  coordinates: [40.72663, -73.98130],
  themes: ["culture", "place", "housing"],
  period: "c. 1966–1991",
  description: "The Tompkins Square Park bandshell served for decades as one of the Lower East Side's principal gathering places for concerts, political rallies, poetry readings, festivals, and community meetings. By the late 1980s it had also become an important gathering space for unhoused residents and neighborhood activists. After years of conflict over policing, homelessness, and the future of the park, the city demolished the bandshell during the park's 1991 renovation. Its destruction became a powerful symbol of the broader transformation of Tompkins Square Park from a contested commons into a more tightly regulated public space.",
  quote: "",
  source: "Tobocman; Kifner; Bellafante; Patterson.",
  slides: [
    {
  type: "quote",
  title: "",
  quote: "The protesting and rioting against gentrification and in support of community values continued for years; finally, the park was ordered closed by the city in June of 1991. Bulldozers were sent in to destroy the park’s bandshell in an act of psychological violence meant to strip away the essential community bond of music. The city knew that it would be able to weaken the community if it could stop their creation of music and art.",
  attribution: "Bill DePaolo & Jem Stern",
  sourceLabel: "MoRUS archival zine, 2020",
  sourceUrl: ""
},
    {
      image: "images/Bandshell/bird.png",
      alt: "",
      title: "Bird's love for the bandshell.",
      caption: "",
      credit: "Seth Tobocman, War in the Neighborhood, p. 277.",
      sourceLabel: "",
      sourceUrl: ""
    },
{
      image: "images/Bandshell/mike-evans.png",
      alt: "",
      title: "Memorial Day Weekend, 1991, shortly before the bandshell was demolished.",
      caption: "",
      credit: "Photograph by Mike Evans.",
      sourceLabel: "Village Preservation",
      sourceUrl: "https://villagepreservation.org/2023/06/01/signaling-change-remembering-the-tompkins-square-park-bandshell/"
    },
    {
      image: "images/Bandshell/ginsberg.png",
      alt: "",
      title: "Allen Ginsberg reads a poem demanding affordable housing at the bandshell as part of 'Resist to Exist', May 1991.",
      caption: "",
      credit: "Photgraph by Q. Sakamaki.",
      sourceLabel: "Mother Jones",
      sourceUrl: "https://www.motherjones.com/media/2008/09/tompkins-square-park-gentrification-q-sakamaki//"
    },
    {

  image: "images/Bandshell/false-prophet.png",

  alt: "",

  title: "False Prophets performs at the bandshell during the 'Resist to Exist' event, May 1, 1991.",

  caption: "",

  credit: "Photograph by Q. Sakamaki.",

  sourceLabel: "Vice",

  sourceUrl: "https://www.vice.com/en/article/q-sakamaki-photographer-tompkins-square-park-riots-1988/"

},
  ]
},
{
  id: "bullet-space",
  title: "Bullet Space",
  address: "292 East 3rd Street",
  coordinates: [40.72288, -73.98217],
  themes: ["housing", "culture", "mutualAid", "place"],
  period: "Occupied 1983; legalized 2002",
  description: "Occupied by a group of artist squatters in 1986, Bullet Space transformed an abandoned building at 292 East 3rd Street into both collective housing and a center for politically engaged art. Residents rehabilitated the building while using its exhibition and printmaking spaces to produce work responding directly to struggles over housing, gentrification, drugs, AIDS, and neighborhood displacement. Bullet Space’s most ambitious project, Your House Is Mine, brought together Lower East Side artists to create prints that circulated first as street posters before being assembled into an artists' book, collapsing the distinction between gallery exhibition, political communication, and direct action. The building eventually transitioned from a squat into resident-controlled housing, while Bullet Space continued as a nonprofit artist collective and gallery committed to work outside the commercial gallery system.",
  quote: "",
  source: "Bullet Space; Miller & Wolf.",
  slides: [
{
      image: "images/Bullet Space/your-house-is-mine.png",
      alt: "",
      title: "Exterior of Bullet Space plastered with flyers as part of the 'Your House Is Mine' project (1988-1992), date unknown.",
      caption: "'Your House Is Mine' grew out of a street-poster campaign launched by Bullet Space artists in the aftermath of the 1988 Tompkins Square Park riot. Artists posted political prints on gentrification, housing, policing, AIDS, racism, and displacement, using the neighborhood itself as a space for political art and communication. The project eventually became the 1992 collaborative artists' book 'Your House Is Mine'.",
      credit: "",
      sourceLabel: "Gallery 98",
      sourceUrl: "https://gallery98.org/collection/castrucci-bullet-space-your-house-is-mine/"
    },
    {
      image: "images/Bullet Space/your-house-is-mine-2.png",
      alt: "",
      title: "'You House is Mine', large format artists' book, project spearheaded by Andrew Castrucci and Nadia Coën.",
      caption: "",
      credit: "",
      sourceLabel: "Manhattan Sideways",
      sourceUrl: "https://sideways.nyc/discover/6uSHI4GkUkWPfopW5YWrmx/bullet-space"
    },
    {
      image: "images/Bullet Space/mystery.png",
      alt: "",
      title: "Melvin Way [1954-2024]",
      caption: "Visionary artist Melvin Way displays one of his dense ink-and-tape drawings, which Bullet Space co-founder Andrew Castrucci called “talismans of protection” (Brooklyn Rail, 2010). Way’s debut exhibition ‘Resistance of Memory’ opened at Bullet Space in 1991. Castrucci went on to serve as a translator between Way , who was schizophrenic, and the art world; and Bullet Space hosted two more shows of his work: ‘a continuation of something else’ (1996) and the retrospective ‘…And One More Thing’ (2024).",
      credit: "Photograph by Andrew Castrucci, courtesy of Edline Gallery, New York.",
      sourceLabel: "New York Times",
      sourceUrl: "https://www.nytimes.com/2024/02/27/arts/melvin-way-dead.html"
    },
    {
      image: "images/Bullet Space/melvin.png",
      alt: "",
      title: "Melvin Way artwork, 1989",
      caption: "",
      credit: "Melvin Way Estate/ARS via Andrew Edlin Gallery, New York.",
      sourceLabel: "New York Times",
      sourceUrl: "https://www.nytimes.com/2024/02/27/arts/melvin-way-dead.html"
    },
    {
      image: "images/Bullet Space/bullet-space.png",
      alt: "",
      title: "Exterior of Bullet Space, date unknown.",
      caption: "",
      credit: "",
      sourceLabel: "Manhattan Sideways",
      sourceUrl: "https://sideways.nyc/discover/6uSHI4GkUkWPfopW5YWrmx/bullet-space"
    },
    {
      image: "images/Bullet Space/resistance.png",
      alt: "",
      title: "'Bullet: An Act of Resistance', xeroxed zine, 1986-1989.",
      caption: "Contributors included: Sebastien Schroder, Andrea Neumann, Maggie Wrigley, Paul Castrucci, Andrew Castrucci, Wes Power, Thom Corn, Tenesh Webber, Grady Alexis, and others.",
      credit: "",
      sourceLabel: "Gallery 98",
      sourceUrl: "https://gallery98.org/2016/bullet-an-act-of-resistance/"
    },
     {
      image: "images/Bullet Space/bullet.png",
      alt: "",
      title: "'Bullet: An Artist Collaborative'",
      caption: "Back cover of xeroxed 'zine 'Bullet: An Act of Resistance'.",
      credit: "",
      sourceLabel: "Gallery 98",
      sourceUrl: "https://gallery98.org/2016/bullet-an-act-of-resistance/",
    },
    {
      image: "images/Bullet Space/resistance-1.png",
      alt: "",
      title: "Inside pages of 'Bullet: An Act of Resistance'.",
      caption: "",
      credit: "",
      sourceLabel: "Gallery 98",
      sourceUrl: "https://gallery98.org/2016/bullet-an-act-of-resistance/",
    },
     {
      image: "images/Bullet Space/slowdown.png",
      alt: "",
      title: "'Slowdown Children Growing', silkscreen print from 'Your House Is Mine', John Fekner, 1990",
      caption: "",
      credit: "",
      sourceLabel: "Gallery 98",
      sourceUrl: "https://gallery98.org/2016/bullet-an-act-of-resistance/"
    },
    {
      image: "images/Bullet Space/survival.png",
      alt: "",
      title: "'Survival of the Fittest?', screenprint from 'Your House Is Mine', Nadia Coën, 1989",
      caption: "",
      credit: "",
      sourceLabel: "Gallery 98",
      sourceUrl: "https://gallery98.org/2016/bullet-an-act-of-resistance/"
    },
       {

      image: "images/Bullet Space/trumps-america.png",

      alt: "",

      title: "'Untitled (Poster Painting)', Klara Lidén, at Bullet Space, date unknown.",

      caption: "",

      credit: "",

      sourceLabel: "Manhattan Sideways",

      sourceUrl: "https://sideways.nyc/discover/6uSHI4GkUkWPfopW5YWrmx/bullet-space"

    }
  ]
},
{
    id: "east13",
    title: "East 13th Street Squats",
    address: "East 13th Street near Avenues A and B",
    coordinates: [40.72934, -73.97987],
    themes: ["housing", "place", "mutualAid"],
    period: "Squatter community, 1980s–1990s",
    description: "The East 13th Street squats were a cluster of city-owned tenements that residents occupied and rebuilt after years of abandonment. Through collective labor, squatters restored apartments, created homes and community spaces, and argued that their long-term residence and rehabilitation of the buildings gave them a legitimate claim to remain. By the mid-1990s, however, the city planned to clear the buildings for a federally subsidized low-income housing project. The residents organized the East 13th Street Homesteaders’ Coalition, pursued an adverse-possession claim, and initially secured court protection against eviction. City inspectors subsequently declared several buildings dangerously unstable and issued emergency vacate orders—findings the squatters disputed, viewing them as a way to circumvent the unresolved property case. On May 30, 1995, hundreds of police officers in riot gear, accompanied by an armored vehicle, removed residents from 541 and 545 East 13th Street and arrested dozens of squatters and supporters. The highly militarized eviction made the block a defining symbol of the conflict between resident-created housing and the city’s authority to determine how abandoned property would be used.",
    quote: "",
    source: "East 13th St. Homesteader's Coalition; Axel-Lute; Starecheski; Tobocman.",

  slides: [
  {
    image: "images/E 13th St Squats/neighborhood-defense.png",
    alt: "Residents gather outside the East 13th Street squats during the 1995 eviction.",
    title: "The neighborhood attempts to defend the East 13th Street squats from eviction",
    caption: "The night before the planned eviction, May 30, 1995, residents created makeshift barricades using furniture, trash cans, appliances, and an overturned car. ",
    credit: "Photograph by Clayton Patterson.",
    sourceLabel: "amNY",
    sourceUrl: "https://www.amny.com/news/defending-their-homes-on-e-13th-st-homeless-on-a/"
  },
  {
    image: "images/E 13th St Squats/squatters-standoff.png",
    alt: "Squatters confront NYPD officers during the East 13th Street eviction (1995).",
    title: "Confrontation",
    caption: "Squatters block the entrance to a building as NYPD uses a militarized surplus tank to clear barricades erected by residents in self defense (1995).",
    credit: "Photograph by John Penley, via the Tamiment Library, New York University.",
    sourceLabel: "Curbed",
    sourceUrl: "https://www.curbed.com/2023/01/east-village-squatters-standoff-1995.html"
  },
  {
    image: "images/E 13th St Squats/squatters-standoff-2.png",
    alt: "Squatters confront NYPD officers during the East 13th Street eviction (1995).",
    title: "Home Sweet Home",
    caption: "Squatters attempt to defend their homes against eviction, (1995).",
    credit: "Photograph by John Penley, via the Tamiment Library, New York University.",
    sourceLabel: "Curbed",
    sourceUrl: "https://www.curbed.com/2023/01/east-village-squatters-standoff-1995.html"
  },
  {
    image: "images/E 13th St Squats/eviction.png",
    alt: "Comic panel depicting the eviction of the East 13th Street squats.",
    title: "Eviction",
    caption: "Seth Tobocman's account of the eviction of the East 13th Street squats in 'War in the Neighborhood', a graphic history of this period.",
    credit: "Photos from unknown local sources, published in Seth Tobocman, War in the Neighborhood, p. 315."
  },
  {
    image: "images/E 13th St Squats/eviction-1.png",
    alt: "Comic panel from War in the Neighborhood.",
    title: "Eviction",
    caption: "From the East 13th Street eviction sequence.",
    credit: "Photos from unknown local sources, published in Seth Tobocman, War in the Neighborhood, p. 316."
  },
  {
    image: "images/E 13th St Squats/eviction-2.png",
    alt: "Comic panel from War in the Neighborhood.",
    title: "Eviction",
    caption: "From the East 13th Street eviction sequence.",
    credit: "Photos from unknown local sources, published in Seth Tobocman, War in the Neighborhood, p. 317."
  },
  {
    image: "images/E 13th St Squats/eviction-3.png",
    alt: "Comic panel from War in the Neighborhood.",
    title: "Eviction",
    caption: "From the East 13th Street eviction sequence.",
    credit: "Photos from unknown local sources, published in Seth Tobocman, War in the Neighborhood, p. 318."
  },
  {
    image: "images/E 13th St Squats/eviction-4.png",
    alt: "Comic panel from War in the Neighborhood.",
    title: "Eviction",
    caption: "From the East 13th Street eviction sequence.",
    credit: "Photos from unknown local sources, published in Seth Tobocman, War in the Neighborhood, p. 319."
  },
  {
    image: "images/E 13th St Squats/18-since-13.png",
    alt: "Flyer commemorating the East 13th Street squat eviction.",
    title: "Commemoration",
    caption: "Flyer for a commemoration of the eviction of the East 13th Street squats held at C-Squat / MoRUS.",
    credit: "",
    sourceLabel: "EV Grieve",
    sourceUrl: "https://evgrieve.com/2013/05/commemorating-east-13th-street-squat.html"
   }
]
},
{
  id: "christodora",
  title: "Christodora House",
  address: "143 Avenue B",
  coordinates: [40.72474, -73.97856],
  themes: ["housing"],
  period: "Settlement house (1897) → luxury condominiums (1986)",
  description: "Built in 1897 as a settlement house serving immigrant and working-class residents, Christodora House later fell into decline and stood largely vacant. Its conversion into luxury condominiums in 1986 became one of the Lower East Side's earliest and most visible symbols of gentrification. During the Tompkins Square Park struggles, the building emerged as a focal point for neighborhood anger over displacement and the transformation of housing from a social good into a luxury commodity.",
  quote: "",
source: "Mele; Smith; Tobocman; The New Urban Frontier.",
slides: [
  {
    image: "images/Christadora House/christadora-house-2.png",
    alt: "Historical image of Christodora House in the East Village.",
    title: "Christadora House, 1976.",
    caption: "The Christadora was condemned during this period due to water damage.",
    credit: "Photographer unknown.",
    sourceLabel: "EV Grieve, January 31, 2014.",
    sourceUrl: "https://evgrieve.com/2014/01/9-photos-showing-east-village-of-1970s.html",
  },
  {
    type: "quote",
    title: "",
    quote: "People really did feel that the neighborhood had been invaded and occupied by an enemy force. For there to be a building in the neighborhood that had a doorman and an elevator was pretty shocking. It was looked at as an interloper and a harbinger of things to come. And lo and behold, things did come.",
    attribution: "— Roland Legiardi-Laura, neighborhood resident since 1978",
    sourceLabel: "The New York Times, August 3, 2008",
    sourceUrl: "https://www.nytimes.com/2008/08/03/nyregion/thecity/04disp.html"
  },
  {
    type: "quote",
    title: "",
    quote: "It was horrific for me, to walk outside and have people yell: ‘Pig! Yuppie scum!’ I wanted to say, ‘I’m no yuppie, I’m broke!’ My phone was turned off. But you can’t do that, because you’ve come out of this sacred address, this building that is a symbol.",
    attribution: "— Jerry Saltz, former Christodora House resident",
    sourceLabel: "The New York Times, September 1, 2016",
    sourceUrl: "https://www.nytimes.com/2016/09/01/fashion/christodora-house-east-village-book.html"
  },
  {
    image: "images/Christadora House/christadora.png",
    alt: "Seth Tobocman comic panels depicting the Memorial Day riot and anger at a luxury condominium near Tompkins Square Park.",
    title: "Memorial Day Riot",
    caption: "Seth Tobocman illustrates the Memorial Day riot of 1991, sparked by police brutality and plans to demolish the Tompkin's Square Park bandshell. The “luxury condo” referenced may be Christodora House, located directly across from Tompkins Square Park.",
    credit: "Seth Tobocman, War in the Neighborhood, p. 111."
  },
  {
    type: "quote",
    title: "",
    quote: "We were yuppie scum—that’s what they called us. We were gentrifying; let’s be honest.",
    attribution: "— Victoria Irwin, neighborhood resident during the 1980s",
    sourceLabel: "The New York Times, August 3, 2008",
    sourceUrl: "https://www.nytimes.com/2008/08/03/nyregion/thecity/04disp.html"
  },
  {
    type: "quote",
    title: "",
    quote: "When people sit there today and say, ‘Well, it’s a symbol’—well, it’s time to grow up. Your symbol 20 years ago isn’t who we are today.",
    attribution: "— Michael Rosen, who moved into Christodora House shortly after the 1988 riot",
    sourceLabel: "The New York Times, August 3, 2008",
    sourceUrl: "https://www.nytimes.com/2008/08/03/nyregion/thecity/04disp.html"
  },
  {
    image: "images/Christadora House/present!.jpg",
    alt: "",
    title: "Christadora House in the Present",
    caption: "A present day zillow listing for a luxury condo in the christadora house.",
    credit: "",
sourceLabel: "zillow.com, retrieved Aug. 3, 2026",
sourceUrl: "https://www.zillow.com/b/143-avenue-b-new-york-ny-23bT/"
  },
{
  image: "images/Christadora House/christadora-present!.jpg",
  alt: "",
  title: "Christodora House in the Present",
  caption: "A present-day Zillow listing for a luxury condo in Christodora House.",
  credit: "",
  sourceLabel: "Zillow, retrieved August 3, 2026",
  sourceUrl: "https://www.zillow.com/homedetails/143-Avenue-B-9FG-New-York-NY-10009/2109174699_zpid/"
}
]
},
{
  id: "dinkinsville",
  title: "Dinkinsville",
  address: "East 7th Street & Avenue D",
  coordinates: [40.72370, -73.97550],
  themes: ["housing", "mutualAid", "place"],
  period: "1990–1991",
  description: "Dinkinsville emerged after the city’s eviction of unhoused residents from Tompkins Square Park - just as tent city at Tompkins emerged via displacement from other city parks, demonstrating that eviction does not resolve homelessness but instead displaces it / alters to whom it is visible. Residents established a shantytown on vacant lots near Tompkins & named their encampment (derogatorily) after Mayor David Dinkins. Community members asserted their right to stay in the neighborhood, constructing shelters from found materials and (re)creating living space outside of both the municipal shelter system and conventional private property.",
  quote: "",
  source: "Garb; Rosen.",

  slides: [
    {
      image: "images/Dinkinsville/dinkinsville.png",
      alt: "",
      title: "Dinkinsville encampment",
      caption: "",
      credit: "Andrew Lichtenstein / Corbis via Getty Images.",
      sourceLabel: "In These Times",
      sourceUrl: "https://inthesetimes.com/article/squatters-60-year-war-against-private-property-autonomous-city-vasudevan"
    },
    {
  image: "images/Dinkinsville/man.png",
  alt: "",
  title: "A homeless man in front of his encampment in Dinkinsville, 1991.",
  caption: "",
  credit: "Photograph by Q. Sakamaki.",
  sourceLabel: "Vice",
  sourceUrl: "https://www.vice.com/en/article/q-sakamaki-photographer-tompkins-square-park-riots-1988/"
},
{
  image: "images/Dinkinsville/destroyed.png",
  alt: "",
  title: "Residents’ belongings were flattened & destroyed after their eviction from Dinkinsville encampments, October 15, 1991.",
  caption: "",
  credit: "Photograph by Q. Sakamaki.",
  sourceLabel: "Vice",
  sourceUrl: "https://www.vice.com/en/article/q-sakamaki-photographer-tompkins-square-park-riots-1988/"
},
  ]
},
{
  id: "goles",
  title: "GOLES (Good Old Lower East Side)",
  address: "169 Avenue B",
  coordinates: [40.72727, -73.97941],
  themes: ["housing", "mutualAid"],
  period: "Founded 1977",
  description: "Founded amid the arson, abandonment, and disinvestment of the late 1970s, GOLES (Good Old Lower East Side) organized tenants building-by-building to defend affordable housing and preserve the neighborhood's diverse communities. Over nearly five decades, the organization has combined direct services, tenant organizing, political education, and coalition-building to fight displacement, expand low-income housing, and strengthen community self-determination. GOLES represents an ongoing tradition of grassroots neighborhood organizing connecting the struggles over abandonment and homesteading in the 1970s and 1980s to contemporary fights against gentrification, eviction, and environmental injustice.",
  quote: "",
  source: "GOLES; Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side.",
  slides: [
    {
      image: "images/GOLES/GOLES-1.png",
      alt: "",
      title: "GOLES Office on Avenue B, with traffic signage proclaiming solidarity with the Black Lives Matter Movement.",
      credit: "",
      sourceLabel: "Collective for Community, Culture, & Environment",
      sourceUrl: "https://collectiveforcce.com/project/goles-office-renovation/"
    },
    {
      image: "images/GOLES/GOLES-2.png",
      alt: "",
      title: "GOLES' Mission, published by Village Preservation, 2017.",
      caption: "",
      credit: "",
      sourceLabel: "Village Preservation",
      sourceUrl: "https://villagepreservation.org/2017/05/31/2017-village-awardee-goles/"
    },
    {
      image: "images/GOLES/GOLES-3.png",
      alt: "",
      title: "GOLES Organizing: Stand Up to Landlords!",
      caption: "",
      credit: "",
      sourceLabel: "GOLES",
      sourceUrl: "https://www.goles.org/gallery"
    },
    {
      image: "images/GOLES/GOLES-4.png",
      alt: "",
      title: "We Resist Fossil Fuels",
      caption: "The Smith Houses are a NYCHA public-housing complex on the Lower East Side. GOLES and tenant organizers from the development have often collaborated; here, organizers call for climate resiliency.",
      credit: "",
      sourceLabel: "GOLES",
      sourceUrl: "https://www.goles.org/gallery"
    },
    {
      image: "images/GOLES/GOLES-5.png",
      alt: "",
      title: "GOLES Organizing",
      caption: "",
      credit: "",
      sourceLabel: "GOLES",
      sourceUrl: "https://www.goles.org/gallery"
    },
    {
      image: "images/GOLES/GOLES-6.png",
      alt: "",
      title: "Mural Honoring Gil Scott-Heron at GOLES' Offices",
      caption: "",
      credit: "",
      sourceLabel: "GOLES",
      sourceUrl: "https://www.goles.org/gallery"
    }
  ]
},
{
  id: "memorial-day-riot",
  title: "Memorial Day Riot, 1991",
  address: "Tompkins Square Park",
  coordinates: [40.72635, -73.98110],
  themes: ["housing", "place"],
  period: "May 27, 1991",
  description: "",
  quote: "",
  source: "",

  slides: [
    {
  image: "images/Memorial Day Riot/memorial-265.png",
  alt: "",
  title: "",
  caption: "",
  credit: "Seth Tobocman, War in the Neighborhood, p. 265.",
  sourceLabel: "",
  sourceUrl: ""
},
{
  image: "images/Memorial Day Riot/memorial-266.png",
  alt: "",
  title: "",
  caption: "",
  credit: "Seth Tobocman, War in the Neighborhood, p. 266.",
  sourceLabel: "",
  sourceUrl: ""
},
{
  image: "images/Memorial Day Riot/memorial-267.png",
  alt: "",
  title: "",
  caption: "",
  credit: "Seth Tobocman, War in the Neighborhood, p. 267.",
  sourceLabel: "",
  sourceUrl: ""
},
{
  image: "images/Memorial Day Riot/memorial-268.png",
  alt: "",
  title: "",
  caption: "",
  credit: "Seth Tobocman, War in the Neighborhood, p. 268.",
  sourceLabel: "",
  sourceUrl: ""
},
{
  image: "images/Memorial Day Riot/memorial-269.png",
  alt: "",
  title: "",
  caption: "",
  credit: "Seth Tobocman, War in the Neighborhood, p. 269.",
  sourceLabel: "",
  sourceUrl: ""
},
{
  image: "images/Memorial Day Riot/memorial-270.png",
  alt: "",
  title: "",
  caption: "",
  credit: "Seth Tobocman, War in the Neighborhood, p. 270.",
  sourceLabel: "",
  sourceUrl: ""
},
{
  image: "images/Memorial Day Riot/memorial-271.png",
  alt: "",
  title: "",
  caption: "",
  credit: "Seth Tobocman, War in the Neighborhood, p. 271.",
  sourceLabel: "",
  sourceUrl: ""
},
{
  image: "images/Memorial Day Riot/memorial-272.png",
  alt: "",
  title: "",
  caption: "",
  credit: "Seth Tobocman, War in the Neighborhood, p. 272.",
  sourceLabel: "",
  sourceUrl: ""
},
{
  image: "images/Memorial Day Riot/memorial-274.png",
  alt: "",
  title: "",
  caption: "",
  credit: "Seth Tobocman, War in the Neighborhood, p. 274.",
  sourceLabel: "",
  sourceUrl: ""
},
{
  image: "images/Memorial Day Riot/memorial-275.png",
  alt: "",
  title: "",
  caption: "",
  credit: "Seth Tobocman, War in the Neighborhood, p. 275.",
  sourceLabel: "",
  sourceUrl: ""
},
    {
      image: "images/Memorial Day Riot/riot.png",
      alt: "",
      title: "Protesters prepping to confront police, May 27, 1991.",
      caption: "",
      credit: "Photograph by Q. Sakamaki.",
      sourceLabel: "Vice",
      sourceUrl: "https://www.vice.com/en/article/q-sakamaki-photographer-tompkins-square-park-riots-1988/"
    },
    {
      image: "images/Memorial Day Riot/bottles.png",
      alt: "",
      title: "Protesters throw bottles at police, May 27, 1991.",
      caption: "",
      credit: "Photograph by Q. Sakamaki.",
      sourceLabel: "Vice",
      sourceUrl: "https://www.vice.com/en/article/q-sakamaki-photographer-tompkins-square-park-riots-1988/"
    }
  ]
},

{
  id: "tent-city",

  title: "Tent City, Tompkins Square Park",

  address: "Tompkins Square Park",

  coordinates: [40.72705, -73.98165],

  themes: ["housing", "mutualAid", "place"],

  period: "Homeless encampment, late 1980s–1991",

  description: "As unhoused New Yorkers were displaced from other public spaces by policing and curfews, Tompkins Square Park became one of the city’s largest encampments and a center of homeless self-organization. Residents established mutual-aid networks, organized protests, negotiated directly with the Dinkins' administration, and built alliances with neighborhood squatters, activists, and community organizations. In 1990, Tent City residents marched from New York to Washington, D.C. to demand housing, dignity, and an end to policies that criminalized homelessness. Rather than simply a site of deprivation, Tent City became a militant experiment in collective survival that challenged dominant assumptions about who had the right to occupy urban space. Its eventual destruction in 1991 became a defining moment in the city’s broader struggle over homelessness, public space, and gentrification.",
  quote: "",
  source: "Bellafante; Eisenberg; New York Times, 1991; Tobocman.",

 slides: [

  {

    image: "images/Tent City Images/tent-city-clayton-patterson.jpg",

    alt: "A Tent City resident grilling outside his shelter in Tompkins Square Park.",

    title: "Tent City",

    caption: "A resident outside his shelter in Tompkins Square Park.",

    credit: "Photograph by Clayton Patterson; published by VICE in 2015.",
    sourceLabel: "Vice",
    sourceUrl: "https://www.vice.com/en/article/clayton-patterson-photographed-the-best-of-the-lower-east-side/",

  },

    {
    image: "images/Tent City Images/tent-city-nathaniel-margaret-morton.png",

    alt: "Nathaniel beside his rebuilt home in Tompkins Square Park.",

    title: "Nathaniel",

    caption: "Nathaniel, known as the Mayor of Tompkins Square Park, beside the home he rebuilt after his tent and garden were destroyed.",

    credit: "Photograph by Margaret Morton, courtesy of the Margaret Morton Archive.",
    sourceLabel: "Margaret Morton Archive",
    sourceUrl: "https://margaretmorton.org/mma-biography.html",

  },
   {title: "",
  type: "quote",
  quote: "I woke up with 10 cops standing over me, telling me it's time to go. I dropped my heart on the way out of there.",
  attribution: "— James Smith, 33-year-old park resident, New York Times, June 4, 1991"
},
   {
  image: "images/Tent City Images/tent-city-nyt-protest-1988.jpg",
  alt: "Demonstration in Tompkins Square Park on August 6, 1988.",
  title: "Gentrification is Class War",
  caption: "Demonstrators confront police during the Tompkins Square Park uprising in 1988.",
  credit: "Photograph by Ángel Franco / The New York Times.",
  sourceLabel: "https://www.nytimes.com/2016/09/01/fashion/christodora-house-east-village-book.html",
    sourceUrl: "NY Times",
  
},
   {title: "",
  type: "quote",
  quote: "We'll take it back... We took it back three times before and we'll take it back again. The people in this neighborhood will do whatever they have to do to get this park. If they throw people out of the park, they let slip the dogs of hell.",
    attribution: "— Seth Blood, cartoonist and protester, New York Times, June 4, 1991"
},
   {
  image: "images/Tent City Images/dismantling-encampment.png",
  alt: "Police officers dismantling the Tompkins Square Park encampment.",
  title: "Dismantling the Encampment",
  caption: "Police remove shelters as a homeless encampment is cleared, 1991.",
  credit: "Photograph by John Sotomayor / The New York Times.",
  sourceLabel: "NY Times",
  sourceUrl: "https://www.nytimes.com/2022/04/02/nyregion/homeless-camps-shelters.html",
},
  {
    image: "images/Tent City Images/tent-city-homeless-structures-margaret-morton.jpg",
    alt: "Homeless structures in Tompkins Square Park.",
    title: "Homeless Structures",
    caption: "Homeless structures in Tompkins Square Park, 1989.",
    credit: "Photograph by Margaret Morton, courtesy of the Margaret Morton Archive.",
    sourceLabel: "Margaret Morton Archive",
    sourceURL: "https://margaretmorton.org/mma-biography.html",
  },
   {
  image: "images/Tent City Images/tent-city-tobocman-p102.png",
  alt: "Seth Tobocman, War in the Neighborhood, page 102.",
  title: "Tent City / Homeless Resistance",
  caption: "War in the Neighborhood, Seth Tobocman, p. 102.",
  credit: ""
},
   {
  image: "images/Tent City Images/tent-city-tobocman-p103.png",
  alt: "Seth Tobocman, War in the Neighborhood, page 103.",
  title: "Tent City / Homeless Resistance",
  caption: "War in the NeighborhoodSeth Tobocman, p. 103.",
  credit: ""
},
   {
  image: "images/Tent City Images/tent-city-tobocman-p104.png",
  alt: "Seth Tobocman, War in the Neighborhood, page 104.",
  title: "Tent City / Homeless Resistance",
  caption: "War in the NeighborhoodSeth Tobocman, p. 104.",
  credit: ""
},
   {
  image: "images/Tent City Images/tent-city-tobocman-p105.png",
  alt: "Seth Tobocman, War in the Neighborhood, page 105.",
  title: "Tent City / Homeless Resistance",
  caption: "War in the Neighborhood, Seth Tobocman, p. 105.",
  credit: ""
},
   {
  image: "images/Tent City Images/tent-city-tobocman-p106.png",
  alt: "Seth Tobocman, War in the Neighborhood, page 106.",
  title: "Tent City / Homeless Resistance",
  caption: "War in the Neighborhood, Seth Tobocman, p. 106.",
  credit: ""
},
   {
  image: "images/Tent City Images/tent-city-tobocman-p107.png",
  alt: "Seth Tobocman, War in the Neighborhood, page 107.",
  title: "Tent City / Homeless Resistance",
  caption: "War in the Neighborhood, Seth Tobocman, p. 107.",
  credit: ""
},
   {
  image: "images/Tent City Images/tent-city-tobocman-p108.png",
  alt: "Seth Tobocman, War in the Neighborhood, page 108.",
  title: "Tent City / Homeless Resistance",
  caption: "War in the Neighborhood, Seth Tobocman, p. 108.",
  credit: ""
},
{
  image: "images/Tent City Images/housing.png",
  alt: "",
  title: "Homeless activist Keith Thompson & supporters demonstrating for affordable housing, 1989.",
  caption: "",
  credit: "Photograph by Q. Sakamaki.",
  sourceLabel: "Vice",
  sourceUrl: "https://www.vice.com/en/article/q-sakamaki-photographer-tompkins-square-park-riots-1988/"
},
{
  image: "images/Tent City Images/protest.png",
  alt: "",
  title: "Some Tent City residents burned their tents in protest of their eviction, 1989.",
  caption: "",
  credit: "Photograph by Q. Sakamaki.",
  sourceLabel: "Vice",
  sourceUrl: "https://www.vice.com/en/article/q-sakamaki-photographer-tompkins-square-park-riots-1988/"
},

],

},
  {
    id: "umbrella",
    title: "Umbrella House",
    address: "21–23 Avenue C",
    coordinates: [40.72211, -73.97969],
    themes: ["housing", "mutualAid", "place"],
    period: "Occupied in 1988; later legalized",
    description: "Residents collectively rehabilitated an abandoned building and later negotiated its transformation into limited-equity cooperative housing. The building illustrates both the possibilities and the internal tensions of collective ownership, governance, and institutional recognition.",
    quote: "",
    source: "Moynihan; Neuwirt; Starecheski ['What Was Squatting, and What Comes Next?'].",

  slides: [
  {
    image: "images/Umbrella House/village-preservation-1.png",
    alt: "Exterior of Umbrella House in 1988, with painted and altered windows and façade.",
    title: "Umbrella House, 1988",
    caption: "Umbrella House in its first year of occupation.",
    credit: "Photograph by Marlis Momber.",
    sourceLabel: "Village Preservation",
    sourceUrl: "https://villagepreservation.org/2011/06/14/umbrella-umbrella/"
  },
  {
    type: "quote",
    title: "",
    quote: "I put a big sign on my window that said, ‘I’m willing to die for my home, how about you?’ And I meant it, I really meant it. I wasn’t fucking around. Because I had nothing other than that building.",
    attribution: "— Siobhan Meow, Umbrella House squatter",
    sourceLabel: "City Limits, September 1, 2002",
    sourceUrl: "https://citylimits.org/squatters-rites/"
  },
  {
    image: "images/Umbrella House/entryway.png",
    alt: "Side-by-side photographs comparing Umbrella House’s entryway shortly after occupation and after residents brought the building up to code.",
    title: "Rebuilding the Entryway",
    caption: "The entryway to Umbrella House shortly after residents moved in, left, and after they brought the building up to code, right.",
    credit: "Photographs by Gabriel Pintado.",
    sourceLabel: "The New York Times, July 17, 2015",
    sourceUrl: "https://www.nytimes.com/2015/07/19/realestate/umbrella-house-east-village-co-op-run-by-former-squatters.html"
  },
  {
    type: "quote",
    title: "",
    quote: "For the first five years, that’s all we did—work. The roof leaked so badly that you could be in the basement, look up, and see the sky. When it rained hard, we had these tarps to funnel all the water into buckets, and we had to run a bucket brigade to pour the water out the windows.",
    attribution: "— Geoff Dann, resident, describing the tarp system — and its tendency to soak passersby who did not have umbrellas — that ultimately gave the house its name.",
    caption: "",
    sourceLabel: "City Limits, September 1, 2002",
    sourceUrl: "https://citylimits.org/squatters-rites/"
  },
  {
    image: "images/Umbrella House/1990.png",
    alt: "Exterior of Umbrella House in 1990, two years after squatters occupied the building.",
    title: "Umbrella House, 1990",
    caption: "Umbrella House two years after its takeover by squatters.",
    credit: "Photograph by Gabriel Pintado.",
    sourceLabel: "The New York Times, July 17, 2015",
    sourceUrl: "https://www.nytimes.com/2015/07/19/realestate/umbrella-house-east-village-co-op-run-by-former-squatters.html"
  },
  {
    type: "quote",
    title: "",
    quote: "I think this idea of having the building owned will be a big change. People will begin to have the concept of ‘this is mine.’ That wasn’t what it was about originally, and I’m worried about that.",
    attribution: "Hafid Lalaoui, a former resident expressing ambivalence about squatters becoming property owners.",
    caption: "",
    sourceLabel: "City Limits, September 1, 2002",
    sourceUrl: "https://citylimits.org/squatters-rites/"
  },
  {
    type: "quote",
    title: "",
    quote: "I would rather continue the way we we’re going–if we could be left alone. But the stakes have changed. We know that if we don’t take the deal it would be a matter of time before the city came after us.",
    attribution: "-Siobhan Meow, Resident",
    caption: "",
    sourceLabel: "City Limits, September 1, 2002",
    sourceUrl: "https://citylimits.org/squatters-rites/"
  },
  
  {
    image: "images/Umbrella House/garden day.png",
    alt: "Residents tending plants during a gardening workday on the roof of Umbrella House.",
    title: "Rooftop Garden at Umbrella House",
    caption: "A gardening workday on the roof of Umbrella House, 2015.",
    credit: "Photograph by Chang W. Lee.",
    sourceLabel: "The New York Times, July 17, 2015",
    sourceUrl: "https://www.nytimes.com/2015/07/19/realestate/umbrella-house-east-village-co-op-run-by-former-squatters.html"
  },
  {
    image: "images/Umbrella House/president.png",
    alt: "Portrait of Tauno Bilsted, an early Umbrella House squatter who later became the building’s president.",
    title: "Tauno Bilsted",
    caption: "Tauno Bilsted, an early squatter who eventually became the building’s president.",
    credit: "Photograph by Chang W. Lee.",
    sourceLabel: "The New York Times, July 17, 2015",
    sourceUrl: "https://www.nytimes.com/2015/07/19/realestate/umbrella-house-east-village-co-op-run-by-former-squatters.html"
  },
  {
    image: "images/Umbrella House/45k!.png",
    alt: "Miguel Valderrama inside his apartment at Umbrella House.",
    title: "The first purchased apartment at Umbrella House",
    caption: "Miguel Valderrama was the first person to purchase an apartment at Umbrella House after an agreement with the city legalized the building. He bought his 300-square-foot apartment in 2009 for $45,000.",
    credit: "Photograph by Chang W. Lee.",
    sourceLabel: "The New York Times, July 17, 2015",
    sourceUrl: "https://www.nytimes.com/2015/07/19/realestate/umbrella-house-east-village-co-op-run-by-former-squatters.html"
  },
  {
    image: "images/Umbrella House/village-preservation.png",
    alt: "Exterior of Umbrella House in 2011.",
    title: "Exterior of Umbrella House.",
    caption: "The front of the building decorated with umbrellas, 2011.",
    credit: "",
    sourceLabel: "Village Preservation, June 14, 2011",
    sourceUrl: "https://villagepreservation.org/2011/06/14/umbrella-umbrella/"
    }
]
},
{
  id: "csquat",
    title: "C-Squat / MoRUS [Museum of Reclaimed Urban Space",
    address: "155 Avenue C",
    coordinates: [40.72583, -73.97753],
    themes: ["housing", "culture", "mutualAid", "place"],
    period: "Squat founded 1989",
    description: "Occupied in 1989 after years of abandonment, C-Squat emerged as one of the Lower East Side’s best-known squats and a center of the neighborhood’s intertwined worlds of housing activism, punk culture, and collective self-governance. Residents rebuilt the fire-damaged building themselves, replacing structural beams, repairing apartments, and operating through collective decision-making while also opening the space to artists, musicians, political organizers, and travelers. Like other Lower East Side squats, C-Squat challenged the assumption that abandoned buildings should remain vacant until profitable redevelopment became possible, instead asserting that residents could collectively reclaim, rehabilitate, and steward urban space. After years of organizing and negotiations, C-Squat became a limited-equity cooperative in 2002, preserving affordable housing while also raising difficult questions about legalization, ownership, and the transformation of radical commons into formal property. In 2012, the building’s storefront became home to the Museum of Reclaimed Urban Space (MoRUS), founded by neighborhood activists as a living archive dedicated to preserving the histories of squatting, community gardens, mutual aid, direct action, and grassroots urban activism. While MoRUS is in line with C-Squat's values, it's inhabitation of the former 'livingroom' was a pragmatic (and contentious) decision - MoRUS' rent helped to offset housing costs after C-Squat was legalized.",
    quote: "",
    source: "Neuwirt; Starecheski ['What Was Squatting, and What Comes Next?', 'The Transformation of one of New York City's Most Famous Squats'].",

  slides: [
  {image: "images/C Squat/not-for-sale.png",
  alt: "C-Squat with a 'Not for Sale' sign.",
  title: "'This Land is Ours' / Not for Sale",
  caption: "C-Squat, 1992.",
  credit: "Photograph by Ash Thayer, published in Thayer's 'Kill City: Lower East Side Squatters, 1992-2000'.",
},
{title: "",
  type: "quote",
  quote: "This place is an ongoing experiment, an informal urban commune. It’s easier to pay rent and not have to know or depend on the person who lives next to you. For whatever reason, the city made a mistake. We slipped through the cracks in this place that abhors what we are. Being here, in a mundane and tiny way, is committing treason.",
  attribution: "— Popeye, C-Squat Resident",
sourceLabel: "City Limits, September 1, 2002",
sourceUrl: "https://citylimits.org/squatters-rites/"
},
{image: "images/C Squat/1991.png",
  alt: "",
  title: "C-Squat's Early Days",
  caption: "",
  credit: "Photograph courtesy of Eden Brower",
  sourceLabel:"X",
  sourceUrl: "https://x.com/edenbrower/status/1397706513779732483",
},
{title: "",
  type: "quote",
  quote: "It was like a stage set. There was much drama of getting dogs up and down, and drunks up and down.",
  attribution: "— Popeye, C-Squat Resident, remembering early years when C-Squat's apartments faced into a stairwayless void and were connected only by a series of ladders.",
sourceLabel: "Sapiens, January 24, 2017",
sourceUrl: "https://www.sapiens.org/culture/new-york-city-squatting/"
},
{title: "",
  type: "quote",
  quote: "That big open space [in the back] was not planned. Essentially, the whole ground floor back of the building, those joists, collapsed. They just collapsed one night. And I was in the building when it happened. … And it sounded like, it was like a ship or something. …  It was like creaking, … and then it just, like, the whole freaking thing, … it just all collapsed.",
  attribution: "— Tauno Bilsted, early C-Squat Resident, describing how the squat's famously enlarged basement came to be. Residents later decided to work with a friendly architect to support the walls and ceiling, maintaining the open area as a two story event space.",
sourceLabel: "Sapiens, January 24, 2017",
sourceUrl: "https://www.sapiens.org/culture/new-york-city-squatting/"
},
{
  image: "images/C Squat/basement.png",
  alt: "The basement of C-Squat.",
  title: "The Basement",
  caption: "The basement remained a public venue - hosting many events & punk shows - before it was closed to the public in 2007 due to regulatory concerns.",
  credit: "Photograph by Amy Starechesky.",
  sourceLabel: "Sapiens, January 24, 2017",
  sourceUrl: "https://www.sapiens.org/culture/new-york-city-squatting/"
},
 {image: "images/C Squat/c-squat.png",
  alt: "",
  title: "Skate Ramp",
  caption: "Skater Dan Pensyl and others on C-Squat's indoor skate ramp.",
  credit: "Photographer unknown, published in 'Full Bleed: New York City Skateboard Photography', Alex Corporan.",
},
{
  image: "images/C Squat/sapiens-no-knocking.png",
  alt: "Entrance to C-Squat.",
  title: "No Knocking Or Banging Go Away!",
  caption: "Entrance to C-Squat.",
  credit: "Photograph by Konstantin Sergeyev.",
  sourceLabel: "Sapiens, January 24, 2017",
  sourceUrl: "https://www.sapiens.org/culture/new-york-city-squatting/"
},
{
  image: "images/C Squat/what-cheer.png",
  alt: "The What Cheer? Brigade performing outside C-Squat.",
  title: "The What Cheer? Brigade",
  caption: "The What Cheer? Brigade (part of the radical marching band movement) performs at C-Squat, 2012.",
  credit: "Photograph by Tod Seelie.",
  sourceLabel: "VICE, January 19, 2012",
  sourceUrl: "https://www.vice.com/en/article/sxrapbookn-with-tod-the-what-cheer-brigade-at-c-squat/"
},
{
  image: "images/C Squat/morus-1.png",
  alt: "Storefront of the Museum of Reclaimed Urban Space.",
  title: "Museum of Reclaimed Urban Space (MoRUS)",
  caption: "The museum of urban reclaimed space (MoRUS) opened in C-Squat's storefront in 2012.",
  credit: "Photograph by Clayton Patterson.",
  sourceLabel: "City Realty, October 25, 2018",
  sourceUrl: "https://www.cityrealty.com/nyc/market-insight/features/get-to-know/the-neighbors-who-arrived-first-c-squat-155-avenue-c/5645"
},
{
  image: "images/C Squat/morus.png",
  alt: "MoRUS inside the former C-Squat storefront.",
  title: "Museum of Reclaimed Urban Space",
  caption: "The Museum of Reclaimed Urban Space (MoRUS) opened in C-Squat's storefront in 2012.",
  credit: "Photograph by Amy Starechesky.",
  sourceLabel: "Sapiens, January 24, 2017",
  sourceUrl: "https://www.sapiens.org/culture/new-york-city-squatting/"
  }

]

},

{
    id: "garden-eden",
    title: "Garden of Eden",
    address: "Forsyth Street, between Forsyth and Eldridge Streets",
    coordinates: [40.71855, -73.99213],
    themes: ["place"],
    period: "Created beginning in 1975; demolished in 1986",
    description: "Adam Purple and neighborhood participants transformed rubble-filled vacant lots into a large circular garden. Its destruction for development illustrates both the power of resident-created urban commons and their vulnerability when official maps continue to define living spaces as vacant land.",
    quote: "",
    image: "images/Garden of Eden/garden-of-eden.jpeg",
    imageAlt: "Black-and-white Seth Tobocman comic panel about the Garden of Eden, showing the circular garden, surrounding buildings, community conflict, a bulldozer, and the destruction of the garden.",
    imageCaption: "Seth Tobocman, War in the Neighborhood, p. 23. Graphic narrative panel depicting the Garden of Eden and its destruction.",
    source: "Tobocman."
  },
  {
  id: "laplaza",
  title: "La Plaza Cultural",
  address: "East 9th Street and Avenue C",
  coordinates: [40.72522, -73.97818],
  themes: ["culture", "place", "mutualAid"],
  period: "Community garden founded in the 1970s",
  description: "Created by neighborhood residents on a series of abandoned, rubble-filled lots, La Plaza Cultural transformed the physical landscape of Loisaida through collective labor, ecological restoration, and cultural production. Organized by CHARAS alongside neighborhood gardeners, artists, and activists, the space evolved into a community garden, outdoor performance venue, gathering place, and site of political expression. Residents reclaimed discarded materials, planted trees and food crops, built public amenities, hosted performances, and covered the surrounding walls with murals that celebrated Puerto Rican identity, anti-colonial struggle, and neighborhood resistance. Like many community-created spaces on the Lower East Side, it later became the focus of prolonged struggles against redevelopment before ultimately being permanently preserved.",
  quote: "",
  source: "Eizenberg; Nandini Bagchee, Counter Institutions: Activist Estates of the Lower East Side.",

  slides: [
    {
      image: "images/La Plaza Cultural/grupo-cemi.png",
      title: "Grupo Cemi performs, 1980",
      alt: "",
      caption: "Grupo Cemi was a Puerto Rican bomba y plena ensemble that regularly performed at La Plaza Cultural. Bomba and plena are Afro–Puerto Rican traditions of drumming, singing, and dance rooted in community participation and resistance. Their performances transformed the garden into a space where cultural celebration, political expression, and collective place-making became inseparable.",
      credit: "Photograph by Marlis Momber.",
      sourceLabel: "Counter Institutions, Activist Estates of the Lower East Side, Nandini Bagchee, p. 127.",
      sourceUrl: ""
    },
    {
      image: "images/La Plaza Cultural/la-plaza-charas-recycling-copy.png",
      title: "La Plaza Cultural",
      alt: "",
      caption: "La Plaza Cultural in the foreground, with CHARAS Recycling to the left.",
      credit: "Photograph by Josie Rolon. Published in 'Quality of Life in Loisaida' (1979).",
      sourceLabel: "‘Quality of Life in Loisaida’ (1979)",
      sourceUrl: ""
    },
    {
      image: "images/La Plaza Cultural/LLC-north-wall.png",
      title: "'La Lucha Continua' mural project.",
      alt: "Murals celebrating Puerto Rican culture, political resistance, and neighborhood resiliency - installed on the northern wall of La Plaza Cultural, 1985.",
      caption: "Murals from 'La Lucha Continua', a 1985 Artmakers Inc. collaborative mural project led by Eva Cockroft. The murals were installed on the walls of buildings surrounding La Plaza Cultural & celebrate Puerto Rican culture, political struggle, and neighborhood resistance.",
      credit: "Photographer unknown. Courtesy of Artmakers Inc.",
      sourceLabel: "Counter Institutions, Activist Estates of the Lower East Side, Nandini Bagchee.",
      sourceUrl: ""
    },
    {
    image: "images/La Plaza Cultural/LLC-1.png",
    alt: "La Lucha Continua mural.",
    title: "Detail of 'La Lucha Continua' mural project.",
    caption: "",
    credit: "Photographer unknown. Courtesy of Artmakers Inc.",
    sourceUrl: "https://www.laluchaartmakers.org/",
    sourceLabel: "Artmakers Inc."
  },
    {
    image: "images/La Plaza Cultural/LLC-2.png",
    alt: "La Lucha Continua mural.",
    title: "Detail of 'La Lucha Continua' mural project.",
    caption: "",
    credit: "Photographer unknown. Courtesy of Artmakers Inc.",
    sourceUrl: "https://www.laluchaartmakers.org/",
    sourceLabel: "Artmakers Inc."
  },
  {
    image: "images/La Plaza Cultural/LLC-3.png",
    alt: "",
    title: "'NOT for SALE'. Detail of 'La Lucha Continua' mural project.",
    caption: "",
    credit: "Photographer unknown. Courtesy of Artmakers Inc.",
    sourceUrl: "https://www.laluchaartmakers.org/",
    sourceLabel: "Artmakers Inc."
  },
   {
    image: "images/La Plaza Cultural/LLC-4.png",
    alt: "",
    title: "Map of artist's contributions to 'La Lucha Continua'.",
    caption: "",
    credit: "",
    sourceUrl: "https://laluchaartmakersinc.org/",
    sourceLabel: "Artmakers Inc."
  },
  {
    image: "images/La Plaza Cultural/LLC-5.png",
    alt: "La Lucha Continua mural.",
    title: "'La Lucha Continua', now faded & in need of repair, 2017.",
    caption: "",
    credit: "",
    sourceUrl: "https://www.laluchaartmakers.org/",
    sourceLabel: "Artmakers Inc."
  },
  {
      image: "images/La Plaza Cultural/dedication.png",
      title: "'La Lucha Continua' Dedication, 1985.",
      alt: "",
      caption: "Flyer for a 'dedication fiesta' for 'La Lucha Continua' mural project in La Plaza Cultural, September 14, 1985.",
      credit: "Courtesy of Rikki Asher",
      sourceLabel: "La Lucha Artmakers",
      sourceUrl: "laluchaartmakers.org/dedication2",
       },
       {
      image: "images/La Plaza Cultural/bimbos.png",
      title: "Tim Jones, Joseph 'Slima' Williams, Chino Garcia & Bimbo Rivas in La Plaza Cultural, 1981.',",
      alt: "",
      caption: "",
      credit: "Photographer unknown.",
      sourceLabel: "Activist Estates of the Lower East Side.",
      sourceUrl: "aeles.org/LA-PLAZA-TIMELINE"
    },
     {
      image: "images/La Plaza Cultural/bimbo.png",
      title: "Bimbo Rivas at the beginning of 'La Lucha Continua' mural project, 1981. Click on the source link below to watch his performance.",
      alt: "",
      caption: "Poet, artist, & actvisit Bimbo Rivas speaking at the opening of 'La Lucha Continua'.",
      credit: "Video by John J. Hunt.",
      sourceLabel: "Bimbo Rivas at La Plaza Cultural",
      sourceUrl: "https://www.youtube.com/watch?v=amHi_mfq1CQ",
       }
  ]
},
  {
    id: "charas",
    title: "CHARAS / El Bohío",
    address: "605 East 9th Street",
    coordinates: [40.72752, -73.98036],
    themes: ["culture", "place", "mutualAid"],
    period: "Community center, 1979–2001",
    description: "CHARAS was a Puerto Rican–led neighborhood organization founded in 1965 by Chino Garcia, Humberto Crespo, Angelo González Jr., Roy Batiste, Anthony Figueroa, and Sal Becker (whose first names gave the organization its name). Responding to disinvestment and abandonment, CHARAS built an ecosystem of community-controlled institutions across the Lower East Side. The organization played a central role in the emerging homesteading movement by mobilizing residents, organizing collective rehabilitation projects, and building the neighborhood networks that made sweat-equity housing possible, while collaborating with technical and legal partners to return abandoned buildings to safe, resident-controlled use. Its work also included youth and arts programs, recycling initiatives, experiments with geodesic domes as a potential affordable housing model, and community gardens including La Plaza Cultural. Many of the same organizers later founded Loisaida, Inc., a community development organization that grew out of CHARAS’s work. In 1979, CHARAS transformed the abandoned P.S. 64 building into El Bohío, a community and cultural center that became its headquarters and one of the neighborhood’s most important spaces for arts, education, organizing, and mutual aid until its closure in 2001. CHARAS was thus involved in many specific locations throughout the neighborhood, El Bohío represents only one (albeit extremely significant) site.",
    quote: "",
    source: "Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side.", 
  slides: [
  {
    image: "images/CHARAS/charas.png",
    alt: "Founders of CHARAS gathered together.",
    title: "CHARAS Founders",
    caption: "",
    credit: "Illustration by Nandini Bagchee. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/CHARAS/charas-offices.png",
    alt: "Office space inside CHARAS / El Bohío.",
    title: "CHARAS Offices",
    caption: "Cynthia, Chino Garcia, and Slima at CHARAS' office, blueprints for a building renovation are see on the desk.",
    credit: "Photgraph by Marlis Momber. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/CHARAS/charas-offices-2.png",
    alt: "Another view of the offices inside CHARAS / El Bohío.",
    title: "CHARAS Offices",
    caption: "Emily Rubin & Doris Kirshner at CHARAS' office, blueprints for a building renovation are seen on the desk.",
    credit: "Photograph by Marlis Momber. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/CHARAS/charas-recycling.png",
    alt: "Materials and activity associated with CHARAS recycling work.",
    title: "CHARAS Recycling",
    caption: "CHARAS organized a community recycling program that transformed discarded materials into neighborhood resources while creating jobs and supporting local organizing. More than a sanitation project, recycling became part of CHARAS’s broader effort to build community-controlled institutions grounded in environmental stewardship, collective labor, and neighborhood self-determination.",
    credit: "Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/CHARAS/la-plaza-charas-recycling.png",
    alt: "CHARAS recycling activity associated with La Plaza Cultural.",
    title: "CHARAS and La Plaza Cultural",
    caption: "La Plaza Cultural in the foreground, with CHARAS Recycling to the left.",
    credit: "Photograph by Josie Rolon. Published in 'Quality of Life in the Lower East Side' (1979).",
     },
  {
    image: "images/CHARAS/lobby-mural.png",
    alt: "Mural in the lobby of CHARAS / El Bohío.",
    title: "Lobby Mural",
    caption: "Artist Anton van Dalen in front of his mural in the lobel of El Bohío",
    credit: "Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/CHARAS/save-el-bohio.png",
    alt: "Artwork or campaign material calling for the preservation of El Bohío.",
    title: "Save El Bohío",
    caption: "Flag above the building reads 'the community center belongs to the people of the lower east side'. El Bohío became the victim of the neighborhood's genrtification boom when the Giuliani administration sold the former P.S. 64 to developer Gregg Singer in 1998. Following years of legal battles and neighborhood protests, CHARAS was evicted in December 2001. Although the building carried a deed restriction requiring community use and was later designated a New York City landmark, it has remained largely vacant ever since, while redevelopment plans repeatedly stall and community organizations continue to campaign for its return to public use.",
    credit: "Created by Nandini Bagchee. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
    }
]
},
{
  id: "abc",
    title: "ABC No Rio",
    address: "156 Rivington Street",
    coordinates: [40.71902, -73.98506],
    themes: ["culture", "place"],
    period: "Founded 1980",
    description: "A collectively run art and activist center that developed from an occupation and critique of real-estate policy into durable infrastructure for DIY cultural and political practice.",
    quote: "",
    source: "Bagchee; Barrett.",
    slides: [
  {
    image: "images/abc no rio/exterior.png",
    alt: "Street-level view of ABC No Rio’s graffiti-covered storefront at 156 Rivington Street.",
    title: "ABC No Rio",
    caption: "Street view of ABC No Rio, 2012.",
    credit: "Photograph by Jade Doskow, 2012. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/abc no rio/abc.png",
    alt: "View of ABC No Rio’s backyard, with artwork, plants, and materials gathered throughout the space.",
    title: "No Drink, Drugs, Excuses.",
    caption: "ABC No Rio's backyard, 2016.",
    credit: "Photograph by Margarida Correia, October 4, 2016.",
    sourceLabel: "ABC No Rio: A Visual Essay",
    sourceUrl: "https://wrongwrong.net/article/abc-no-rio"
  },
  {
    image: "images/abc no rio/abc-1.png",
    alt: "Another view of ABC No Rio’s backyard and its layered, collectively used outdoor space.",
    title: "SANE",
    caption: "ABC No Rio's backyard, 2016.",
    credit: "Photograph by Margarida Correia, October 4, 2016.",
    sourceLabel: "ABC No Rio: A Visual Essay",
    sourceUrl: "https://wrongwrong.net/article/abc-no-rio"
  },
  {
    image: "images/abc no rio/abc-2.png",
    alt: "Interior view of ABC No Rio showing its informal, densely layered art and organizing space.",
    title: "A hundred years ago the Lower East Side was the first stop...",
    caption: "Interior view of ABC No Rio showcasing its informal & densely layered site-specific art, 2016.",
    credit: "Photograph by Margarida Correia, October 4, 2016.",
    sourceLabel: "ABC No Rio: A Visual Essay",
    sourceUrl: "https://wrongwrong.net/article/abc-no-rio"
  },
  {
    image: "images/abc no rio/dark-room.png",
    alt: "The darkroom at ABC No Rio, with photographic equipment and materials arranged in a small workspace.",
    title: "Darkroom",
    caption: "ABC No Rio darkroom, 2016.",
    credit: "Photograph by Margarida Correia, October 4, 2016.",
    sourceLabel: "ABC No Rio: A Visual Essay",
    sourceUrl: "https://wrongwrong.net/article/abc-no-rio"
  },
  {
    image: "images/abc no rio/head.png",
    alt: "ABC No Rio’s zine library beneath a handwritten message reading, “there is always something hanging above your head.”",
    title: "Zine Library",
    caption: "ABC No Rio’s zine library. Above it, artist and zinester Fly Orr has painted: “there is always something hanging above your head.”",
    credit: "Photograph by Jade Doskow, 2012. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/abc no rio/1981.png",
    alt: "Leonard Abrams, Christy Rupp, and Layne Redmond gathered inside ABC No Rio in 1981.",
    title: "ABC No Rio, 1981",
    caption: "Left to right: Leonard Abrams, Christy Rupp, and Layne Redmond at ABC No Rio, 1981.",
    credit: "Photograph by Marc Miller, 1981. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/abc no rio/abc-no-rio.png",
    alt: "Black-and-white flyer advertising an ABC No Rio benefit show for the War Resisters League.",
    title: "Saturday Matinee",
    caption: "Flyer for several upcoming all ages shows at ABC, including a benefit for the War Resisters League, 1991.",
    credit: "Courtesy of the ABC No Rio HC/Punk Archive. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/abc no rio/animals.png",
    alt: "ABC No Rio’s storefront decorated with stenciled images of a hen and a dog.",
    title: "Animals That Live in the City",
    caption: "Storefront with live hen and dog stencils by Anton van Dalen. The 1980 exhibition 'Animals That Live in the City' brought artists, scientists, and neighborhood children into collaboration.",
    credit: "Artwork by Anton van Dalen, 1980. Photographer unknown. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/abc no rio/detail.png",
    alt: "Detail of animal stencils painted across the ABC No Rio storefront.",
    title: "Animals That Live in the City",
    caption: "Detail of the storefront stencils created by Anton van Dalen for 'Animals That Live in the City', a 1980 collaboration among artists, scientists, and neighborhood children.",
    credit: "Artwork by Anton van Dalen, 1980. Photographer unknown. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/abc no rio/extremist-show.png",
    alt: "Three photographs documenting performances and installations at ABC No Rio, including activity in the backyard and storefront window.",
    title: "The Extremist Show, October 1983",
    caption: "The Extremist Show was a nine-day, twenty-four-hour multimedia exhibition and performance marathon organized by Kembra Pfahler, which included performance, installation, painting, music, and ritual-like “mock ceremonies.” Occupying ABC No Rio’s gallery and backyard, artists blurred the boundaries between performance, installation, ritual, and everyday life while embracing Pfahler’s philosophy of “availabilism”—making art from whatever materials were at hand. The event marked ABC No Rio’s growing role as a laboratory for experimental performance rooted in the downtown club scene and committed to creating art outside conventional institutions. Left: Peter Cramer and Jack Waters perform in the backyard. Center: Kembra Pfahler sleeps in the storefront window. Right: Kembra Pfahler and Samoa sit on paintings.",
    credit: "Photographs by Toyo Tsuchiya, 1983. Courtesy of the Toyo Tsuchiya Estate. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/abc no rio/murder-junk-suicide.png",
    alt: "Installation by John Murton inside ABC No Rio in 1980.",
    title: "Murder, Junk, Suicide, 1980.",
    caption: "John Morton's 'Murder, Junk, Suicide' was one of ABC’s earliest themed exhibitions. The title reflected the collective’s desire to challenge artistic conventions, but also exposed the tensions between the experimental concerns of downtown artists and the everyday realities of a neighborhood where violence, addiction, and poverty were lived experiences rather than aesthetic subjects. ",
    credit: "Photograph by Tom Warren, 1980. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/abc no rio/portrait-show.png",
    alt: "Installation of photographic portraits of neighborhood residents displayed inside ABC No Rio.",
    title: "Portrait Show",
    caption: "Installation by Tom Warren featuring portraits of neighborhood residents. The show temporarily transformed ABC into a neighborhood portrait studio, celebrating LES' residents.",
    credit: "Artwork and photograph by Tom Warren, 1981. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/abc no rio/all-ages.png",
    alt: "Flyer advertising an all-ages Saturday matinee show at ABC No Rio.",
    title: "Saturday Matinee",
    caption: "All Ages Show flyer for an ABC No Rio Saturday matinee, 1990.",
    credit: "Flyer designed by Java Dave; courtesy of Freddy Alva. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side.",
  },
  {
    image: "images/abc no rio/ides-of-march.png",
    alt: "Illustrated timeline tracing ABC No Rio’s Ides of March publication series and its many contributors.",
    title: "Ides of March",
    caption: "Ides of March, ABC No Rio’s long-running collaborative publication series, documented the collective’s artists, projects, and political commitments from the late 1990s through the 2000s.",
    credit: "Illustrated by Nandini Bagchee and published in Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/abc no rio/pipeline-project.png",
    alt: "A site-specific installation of pipes and sculptural elements occupying ABC No Rio’s stairway.",
    title: "Pipeline Project",
    caption: "Lamberto Fernando’s Pipeline Project installed in ABC No Rio’s stairway.",
    credit: "Artwork by Lamberto Fernando. Photograph by Nandini Bagchee, 2014. Published in Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/abc no rio/just-seeds.png",
    alt: "Political artwork concerning immigration displayed in ABC No Rio’s computer room.",
    title: "Immigration Project",
    caption: "Immigration project by the Justseeds Artists’ Cooperative - which focuses on political / activist art - in ABC No Rio’s computer room.",
    credit: "Artwork by the Justseeds Artists’ Cooperative. Photograph by Nandini Bagchee, 2014. Published in Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/abc no rio/building-proposal.png",
    alt: "Architectural drawing proposing a replacement building for ABC No Rio.",
    title: "Proposal for a New ABC No Rio",
    caption: "After ABC No Rio raised $700,000 and persuaded HPD to sell them the building in 2006, architect Paul A. Castrucci (hired by ABC) determined that the existing structure was unsound. The collective began raising additional funds for its demolition and replacement with a new community-controlled facility.",
    credit: "Drawing courtesy of Paul A. Castrucci, architect for ABC No Rio. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/abc no rio/history.png",
    alt: "Michael Alan performing amid a densely layered installation inside ABC No Rio.",
    title: "History Pushes Through",
    caption: "Michael Alan’s 'History Pushes Through', installed at ABC No Rio in 2011.",
    credit: "Artwork by Michael Alan, 2012.",
    sourceLabel: "Hyperallergic, January 30, 2012",
    sourceUrl: "https://hyperallergic.com/abc-no-rio-michael-alan-living-installation/"
  },
  {
    image: "images/abc no rio/going-down.png",
    alt: "Michael Alan performing inside a layered installation responding to ABC No Rio’s deteriorating building.",
    title: "Going Down with the Building",
    caption: "Michael Alan explores the building’s approaching demolition in his 2011 installation.",
    credit: "Artwork by Michael Alan, 2011.",
    sourceLabel: "Hyperallergic, January 30, 2011”",
    sourceUrl: "https://hyperallergic.com/abc-no-rio-michael-alan-living-installation/"
  }
]
  },
{
  id: "kenkeleba",
  title: "Kenkeleba House",
  address: "214 East 2nd Street",
  coordinates: [40.72154, -73.98292],
  themes: ["culture"],
  period: "Community-rooted gallery and artist space",
  description: "Kenkeleba House created durable neighborhood infrastructure for artists—particularly Black artists whose work was often excluded from commercial institutions. It broadens the map’s account of cultural organizing beyond punk and anarchist spaces.",
  quote: "",
  source: "Kenkeleba House.",

  slides: [
    {
      image: "images/Kenkeleba/kenkeleba-house.png",
      alt: "",
      title: "",
      caption: "",
      credit: "",
      sourceLabel: "kenkelebahouse.org",
      sourceUrl: "https://www.kenkeleba.org/about"
    },
    {
  type: "quote",
  title: "",
  quote: "Corrine Jennings came to New York from Rhode Island in the 1970s — armed with the drive and credentials to be a Broadway scenic designer. However, the head of the union told her they didn’t have blacks or women, and they were not going to. “That’s theater,” said Jennings. “This field, the art world, is so terrible for everybody that it didn’t matter what I did because they weren’t going to pay attention anyway,” she recalled laughing.",
  attribution: "amNY, January 5, 2010",
  sourceLabel: "amNY",
  sourceUrl: "https://www.amny.com/news/get-to-know-kenkeleba-and-kamoinge/"
},

{
      image: "images/Kenkeleba/hoodoo-mandala.png",
      alt: "",
      title:
        "",
      caption: "",
      credit: "",
      sourceUrl: "",
      sourceLabel: "",
    },

    {
      image: "images/Kenkeleba/magnitude.png",
      alt: "",
      title: "",
      caption: "Photographer Leslie Jean Bart and Michele Voltaire Marcelin in front of Marrcelin's painting “Magnitude Seven Point One”. Its title references an earthquake, a precient painting created before the 2010 earthquake took place in Haiti.",
      credit: "(Photography by Tequila Minsky)",
      sourceLabel: "amNewYork",
      sourceUrl: "https://www.amny.com/news/take-a-look-inside-the-amazing-gallery-of-haitian-art-at-kenkeleba-house-a-gem-of-the-lower-east-side/"
    },

    {
      image: "images/Kenkeleba/Pity.png",
      alt: "",
      title: "",
      caption: "'Erzulie Beware Pity', with the artist Michele Voltaire Marcelin, 1999.",
      credit: "",
      sourceLabel: "amNewYork",
      sourceUrl: "https://www.amny.com/news/take-a-look-inside-the-amazing-gallery-of-haitian-art-at-kenkeleba-house-a-gem-of-the-lower-east-side/"
    },

    {
      image: "images/Kenkeleba/kenkeleba-image-1.webp",
      alt: "",
      title: "Detail of 'Maltoon #4', Debra Priestly",
      caption: "",
      credit: "",
      sourceLabel: "Sideways NYC",
      sourceUrl: "https://sideways.nyc/discover/1Bnz7qTHRWLgpXYeVyFROO/kenkeleba-house"
    },

    {
      image: "images/Kenkeleba/kenkeleba-image-2.webp",
      alt: "",
      title: "Detail of 'Strange Fruit 2', Debra Priestly, on display at Kenkeleba House, date unknown.",
      caption: "",
      credit: "",
      sourceLabel: "Sideways NYC",
      sourceUrl: "https://sideways.nyc/discover/1Bnz7qTHRWLgpXYeVyFROO/kenkeleba-house"
    },

    {
      image: "images/Kenkeleba/kenkeleba-image-3.webp",
      alt: "",
      title: "L'Abbatoire No. III, Eldzier Cortor [1916–2015], on display at Kenkeleba House, date unknown.",
      caption: "",
      credit: "",
      sourceLabel: "Sideways NYC",
      sourceUrl: "https://sideways.nyc/discover/1Bnz7qTHRWLgpXYeVyFROO/kenkeleba-house"
    },

    {
      image: "images/Kenkeleba/kenkeleba-image-4.webp",
      alt: "",
      title: "Mural on the side of Kenkeleba House, date unknown.",
      caption: "",
      credit: "Photographer unknown.",
      sourceLabel: "Sideways NYC",
      sourceUrl: "https://sideways.nyc/discover/1Bnz7qTHRWLgpXYeVyFROO/kenkeleba-house"
    },

    {
      image: "images/Kenkeleba/sculpture.png",
      alt: "",
      title: "Sculpture in Kenkelebe House’s garden",
      caption: "",
      credit: "",
      sourceLabel: "EV Grieve",
      sourceUrl: "https://evgrieve.com/2011/07/new-sculptures-in-kenkeleba-house.html"
    },

    {
      image: "images/Kenkeleba/sculpture-1.png",
      alt: "",
      title: "Sculpture in Kenkelebe House’s garden",
      caption: "",
      credit: "",
      sourceLabel: "EV Grieve",
      sourceUrl: "https://evgrieve.com/2011/07/new-sculptures-in-kenkeleba-house.html"
    },

    {
      image: "images/Kenkeleba/goree.png",
      alt: "",
      title: "Joe Overstreet, 'Gorée', 1993.",
      caption: "",
      photograph: "Photgraphy by Samuel Glass.",
      credit: "Joe Overstreet. Courtesy of the Estate of Joe Overstreet/Artist Rights Society (ARS) & Eric Firestone Gallery, New York.",
      sourceLabel: "The Brooklyn Rail",
      sourceUrl: "https://brooklynrail.org/2025/04/artseen/joe-overstreet-taking-flight/"
    },

    {
      image: "images/Kenkeleba/overstreet.png",
      alt: "",
      title: "Joe Overstreet [1993-2019], co-founder of Kenkeleba House, at his studio.",
      caption: "",
      credit: "",
      sourceLabel: "West Harlem Art Fund",
      sourceUrl: "https://westharlem.art/2019/06/05/in-memoriam-joe-overstreet/"
    }
  ]
},
{
  id: "lesbian-avengers",
  title: "First Lesbian Avengers Meeting",
  address: "219 East 5th Street",
  coordinates: [40.72753, -73.98437],
  themes: ["queer", "culture"],
  period: "Founded here in 1992",
  description:
    "The first meeting of the Lesbian Avengers took place in Ana María Simó's apartment. From this ordinary residential space, organizers developed one of the most influential direct-action lesbian organizations of the 1990s, demonstrating how political movements often emerge from domestic space as much as public institutions.",
  quote: "",
  source: "Lesbian Avengers; NYC LGBTQ Historic Sites Project.",

  slides: [
    {
      image: "images/Lesbian Avengers/rage.png",
      alt: "",
      title: "The Rage of All Women Condensed to the Point of Explosion",
      caption: "Recruitment poster for the Lesbian Avengers, 1993.",
      credit: "",
      quote: "",
      quoteCredit: "",
      sourceUrl: "https://www.nyclgbtsites.org/site/nyc-dyke-march/",
      sourceLabel: "NYC LGBTQ Historic Sites Project"
    },
    {
      image: "images/Lesbian Avengers/anon-avengers.png",
      alt: "",
      title: "Lesbian Avengers at the White House, 1993.",
      caption: "",
      credit: "Photo by Carolina Kroon",
      quote: "",
      quoteCredit: "",
      sourceUrl: "https://www.lesbianavengers.com/images/photos1.shtml",
      sourceLabel: "Lesbian Avengers"
    },
    {
      image: "images/Lesbian Avengers/anon-avengers-2.png",
      alt: "",
      title: "Janet & Gail at the Dyke March in DC, 1993",
      caption: "",
      credit: "Photo by Carolina Kroon",
      quote: "",
      quoteCredit: "",
      sourceUrl: "https://www.lesbianavengers.com/images/photos1.shtml",
      sourceLabel: "Lesbian Avengers"
    },
    {
      image: "images/Lesbian Avengers/anon-avengers-3.png",
      alt: "",
      title: "Valentine's Day Action, 1993",
      caption: "The Lesbian Avengers install a statue of Alice B. Toklas next to Gertrude Stein in Bryant Park. The celebration included a reading & a lesbian waltz.",
      credit: "Photo by Carolina Kroon",
      quote: "",
      quoteCredit: "",
      sourceUrl: "https://www.lesbianavengers.com/images/photos1.shtml",
      sourceLabel: "Lesbian Avengers"
    },
    {
      image: "images/Lesbian Avengers/anon-avengers-5.png",
      alt: "",
      title: "'Yup, We Recruit'",
      caption: "Unknown lesbian avengers kissing, 1992 or 1993.",
      credit: "Photo by Carolina Kroon",
      quote: "",
      quoteCredit: "",
      sourceUrl: "https://www.lesbianavengers.com/images/photos1.shtml",
      sourceLabel: "Lesbian Avengers"
    },
    {
      image: "images/Lesbian Avengers/fire-eaters.png",
      alt: "",
      title: "'The Fire Will Not Consume Us. We Take It & Make It Our Own'",
      caption: "Fire-eating became a common symbolic action during the Lesbian Avengers' public actions after the murders of Hattie Mae Cohens and Brian Mock by firebomb. In defiance of the violence threatening LGBTQ lives, they chanted 'the fire will not consume us. We take it & make it our own.'",
      credit: "",
      quote: "",
      quoteCredit: "",
      sourceUrl: "https://villagepreservation.org/2014/11/12/eating-fire-a-brief-history-of-the-lesbian-avengers-in-nyc/",
      sourceLabel: "Village Preservation"
    },
     {
      image: "images/Lesbian Avengers/anon-avengers-4.png",
      alt: "",
      title: "Vigil, 1992",
      caption: "The avengers held a 24 hour vigil for Hattie Mae Cohens and Brian Mock.",
      credit: "Photo by Carolina Kroon",
      quote: "",
      quoteCredit: "",
      sourceUrl: "https://www.lesbianavengers.com/images/photos1.shtml",
      sourceLabel: "Lesbian Avengers"
    },
    {
      image: "images/Lesbian Avengers/burning-butch.png",
      alt: "",
      title: "Burning Butch, 1995",
      caption: "",
      credit: "",
      quote: "",
      quoteCredit: "",
      sourceUrl: "https://www.lesbianavengers.com/images/photos1.shtml",
      sourceLabel: "Lesbian Avengers"
    },
    {
      image: "images/Lesbian Avengers/lesbian-avenger-handbook.png",
      alt: "",
      title: "Lesbian Avengers Handbook",
      caption: "The Lesbian Avengers grew from 6 co-founders to over 60 chapters nationally in about 4 years. Strategic use of media & spectacle, as well as encouraging others to form their own chapters, helps account for some of this meteoric growth.",
      credit: "",
      quote: "",
      quoteCredit: "",
      sourceUrl: "https://www.lesbianavengers.com/handbooks/Lesbian_Avenger_handbook3.shtml",
      sourceLabel: "Lesbian Avengers"
    },
    {
      image: "images/Lesbian Avengers/lust.png",
      alt: "",
      title: "Flyer for First Annual Dyke Pride March, 1993",
      caption: "",
      credit: "",
      quote: "",
      quoteCredit: "",
      sourceUrl: "https://www.lesbianavengers.com/",
      sourceLabel: "Lesbian Avengers"
    },
    {
      image: "images/Lesbian Avengers/rights-now.png",
      alt: "",
      title: "Lesbian Righs Now",
      caption: "Marcher, 1994 or 1995.",
      credit: "Photo by Carolina Kroon",
      quote: "",
      quoteCredit: "",
      sourceUrl: "https://www.lesbianavengers.com/images/photos2.shtml",
      sourceLabel: "Lesbian Avengers"
    },
    {
      image: "images/Lesbian Avengers/we-recruit.png",
      alt: "",
      title: "We Recruit",
      caption: "Flyer for a Lesbian Avengers fundraiser featuring Pam Grier. Moyer says: 'Putting Pam Grier on a poster provoked a discussion about what kind of person it would bring to the group. I think we hoped it would attract women of color. It had a retro-flavor (Blaxplotation, etc). Everybody loves the 70s. Very (lesbian) campy. The sexy woman with a gun. Now I have a more analytical view of it -- this image did a good job of attracting young white women.'",
      credit: "Created by Carrie Moyer",
      quote: "",
      quoteCredit: "- Carrie Moyer",
      sourceUrl: "https://www.lesbianavengers.com/images/moyer_design.shtml",
      sourceLabel: "Lesbian Avengers"
    }
  ]
},
{
  id: "lungs",
  title: "LUNGS (Loisaida United Neighborhood Gardens) / El Sol Brillante",
  address: "El Sol Brillante Garden, 522–528 East 12th Street",
  coordinates: [40.72835, -73.98115],
  themes: ["place", "mutualAid"],
  period: "Founded 2011",
  description: "LUNGS (Loisaida United Neighborhood Gardens) is a coalition of more than fifty volunteer-run community gardens across the Lower East Side and East Village. Founded in 2011, the organization coordinates advocacy, stewardship, environmental education, and neighborhood-wide events while defending community-managed green space from development. Although LUNGS has no permanent headquarters, this marker is placed at El Sol Brillante—one of the neighborhood's oldest surviving community gardens and a frequent gathering place for LUNGS events, including the annual Spring Awakening festival.",
  quote: "",
  source: "LUNGS; El Sol Brillante."
  ,
  slides: [
    {
      image: "images/LUNGS/el-sol.png",
      alt: "El Sol Brillante Garden.",
      title: "El Sol Brillante",
      caption: "One of the Lower East Side's oldest community gardens and a gathering place for LUNGS events.",
      credit: "",
      sourceLabel: "El Sol Brillante",
      sourceUrl: "https://elsolbrillante.org/about/"
    },
    {
      image: "images/LUNGS/map.png",
      alt: "",
      title: "Map of community gardens in Loisaida",
      caption: "",
      credit: "",
      sourceLabel: "LUNGS",
      sourceUrl: "https://lungsnyc.org/wp-content/uploads/2022/10/LUNGS2_map_2020a-2-scaled.jpg"
    },
    {
  image: "images/LUNGS/ofrenda-covid-2022.png",
  alt: "",
  title: "Ofrenda for those who've passed from COVID-19, 2022.",
  caption: "Campos Community Garden, 644 E. 12th St.",
  credit: "",
  sourceLabel: "Campos Community Garden",
  sourceUrl: "https://www.facebook.com/camposcommunitygarden/photos"
},
{
  image: "images/LUNGS/campos-earth-2025.png",
  alt: "",
  title: "Earth Celebration at Campos Community Garden, 2025",
  caption: "Campos Community Garden, 644 E. 12th St.",
  credit: "",
  sourceLabel: "Campos Community Garden",
  sourceUrl: "https://www.facebook.com/camposcommunitygarden/photos"
},
{
  image: "images/LUNGS/campos-earth2-2025.png",
  alt: "",
  title: "Earth Celebration at Campos Community Garden, 2025",
  caption: "Campos Community Garden, 644 E. 12th St.",
  credit: "",
  sourceLabel: "Campos Community Garden",
  sourceUrl: "https://www.facebook.com/camposcommunitygarden/photos"
},
{
  image: "images/LUNGS/campos-earth-2026.png",
  alt: "",
  title: "Earth Celebration outside of Campos Community Garden, 2026",
  caption: "Campos Community Garden, 644 E. 12th St.",
  credit: "",
  sourceLabel: "Campos Community Garden, 644 E. 12th St.",
  sourceUrl: "https://www.facebook.com/camposcommunitygarden/photos"
},
{
  image: "images/LUNGS/campos-FAERIES.png",
  alt: "",
  title: "FAERIES performance at Campos Community Garden, 2026",
  caption: "Campos Community Garden, 644 E. 12th St.",
  credit: "",
  sourceLabel: "Campos Community Garden",
  sourceUrl: "https://www.facebook.com/camposcommunitygarden/photos"
},
{
  image: "images/LUNGS/bokashi.png",
  alt: "",
  title: "Down to Earth Garden, 12th St. & Ave. B, offers workshops on bokashi (indoor composting), fermentation, & more.",
  caption: "Down to Earth Garden, 546 E. 12th St.",
  credit: "",
  sourceLabel: "Down to Earth Garden",
  sourceUrl: "https://downtoearthgarden.org/"
},
{
  image: "images/LUNGS/music.png",
  alt: "",
  title: "Unknown performer at 11th St. Community Garden's Live Music Series, 2025",
  caption: "11th Street Community Garden, 422 E. 11th St.",
  credit: "",
  sourceLabel: "11th Street Community Garden",
  sourceUrl: "https://blog.11th.garden/june-2025/"
},
{
  image: "images/LUNGS/green-1.png",
  alt: "",
  title: "Green Oasis Garden prioritizes native plants in their lush landscape architecture",
  caption: "Green Oasis Garden, 370 E. 8th St.",
  credit: "",
  sourceLabel: "Manhattan Sideways",
  sourceUrl: "https://sideways.nyc/discover/6pfjs8nfQu4oo1YwJ4Hmo7/green-oasis-community-garden-gilberts-sculpture-garden"
},
{
  image: "images/LUNGS/green-2.png",
  alt: "",
  title: "Green Oasis Garden sculptures, artist unknown",
  caption: "Green Oasis Garden, 370 E. 8th St.",
  credit: "",
  sourceLabel: "Manhattan Sideways",
  sourceUrl: "https://sideways.nyc/discover/6pfjs8nfQu4oo1YwJ4Hmo7/green-oasis-community-garden-gilberts-sculpture-garden"
},
{
  image: "images/LUNGS/weaving-love-letters.png",
  alt: "",
  title: "'Weaving Love Letters,' public art at Pancho's Garden, date unknown",
  caption: "Francisco 'Pancho' Ramos Community Garden, 703 E. 9th St.",
  credit: "",
  sourceLabel: "Pancho's Garden",
  sourceUrl: "https://panchosgarden.org/gallery/"
},
{
  image: "images/LUNGS/insane-ent.jpg",
  alt: "",
  title: "'Insane-ent' public art at Pancho's Garden. 'Ents' are wild tree-creatures from J.R.R. Tolkien's 'Lord of the Rings.'",
  caption: "Francisco 'Pancho' Ramos Community Garden, 703 E. 9th St.",
  credit: "",
  sourceLabel: "Pancho's Garden",
  sourceUrl: "https://panchosgarden.org/gallery/"
},
{
  image: "images/LUNGS/barbecue.png",
  alt: "",
  title: "Barbecue at Pancho's Garden, date unknown",
  caption: "Francisco 'Pancho' Ramos Community Garden, 703 E. 9th St.",
  credit: "",
  sourceLabel: "Pancho's Garden",
  sourceUrl: "https://panchosgarden.org/gallery/"
},
{
  image: "images/LUNGS/history.png",
  alt: "",
  title: "6 & B's history, as recorded by member David Rougé. Click the link below to access the full article.",
  caption: "6 & B Garden, corner of 6th St. & Avenue B",
  credit: "",
  sourceLabel: "6 & B Garden",
  sourceUrl: "https://static1.squarespace.com/static/62532f48e6510f5da0697a55/t/62534329978772320f1d0eca/1649623852255/6BGardenBriefHistory.pdf"
},
{
  image: "images/LUNGS/history-1986.png",
  alt: "",
  title: "Early garden, 1986.",
  caption: "6 & B Garden, corner of 6th St. & Avenue B",
  credit: "",
  sourceLabel: "6 & B Garden",
  sourceUrl: "https://www.6bgarden.org/garden-photo-archive/1"
},
{
  image: "images/LUNGS/history-1990.png",
  alt: "",
  title: "6 & B in 1990",
  caption: "6 & B Garden, corner of 6th St. & Avenue B",
  credit: "",
  sourceLabel: "6 & B Garden",
  sourceUrl: "https://www.6bgarden.org/garden-photo-archive/1"
},
{
  image: "images/LUNGS/history-2012.png",
  alt: "",
  title: "6 & B in 2012 after Hurricane Sandy",
  caption: "6 & B Garden, corner of 6th St. & Avenue B",
  credit: "",
  sourceLabel: "6 & B Garden",
  sourceUrl: "https://www.6bgarden.org/garden-photo-archive/1"
},
{
  image: "images/LUNGS/history-2013.png",
  alt: "",
  title: "6 & B's 30th Anniversary",
  caption: "6 & B Garden, corner of 6th St. & Avenue B",
  credit: "",
  sourceLabel: "6 & B Garden",
  sourceUrl: "https://www.6bgarden.org/garden-photo-archive/1"
},
{
  image: "images/LUNGS/history-2023.png",
  alt: "",
  title: "6 & B 40th Anniversary Party",
  caption: "6 & B Garden, corner of 6th St. & Avenue B",
  credit: "",
  sourceLabel: "6 & B Garden",
  sourceUrl: "https://www.6bgarden.org/garden-photo-archive/1"
},
  ]
},
{
  id: "loisaida-townhouse",
  title: "Loisaida Townhouses",
  address: "East 9th Street (between Avenues B & C)",
  coordinates: [40.72618, -73.97882],
  themes: ["mutualAid", "place"],
  description: "The Loisaida Townhouse, a former yeshiva dormitory at Avenue C and East 4th Street, became an important gathering place for neighborhood organizing during the 1970s. Its combination of large and small rooms allowed the building to function as an informal community center, hosting meetings where residents and organizers developed strategies for neighborhood revitalization and self-determination amid widespread abandonment and disinvestment. The building’s later history reflected the forces those organizers were struggling against: by the 1980s, the privately owned Townhouse was converted to market-rate housing and advertised as luxury condominiums, becoming an early sign of gentrification on Avenue C.",
  quote: "",
  source: "Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side.",

  slides: [
    {
      image: "images/Loisaida Townhouse/1980.png",
      alt: "",
      title: "Loisaida Townhouse, corner of Avenue C & E. 4th St., 1980.",
      caption: "",
      credit: "Photgraph by Marlis Momber. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side.",
      sourceLabel: "",
      sourceUrl: ""
    }
  ]
},
{
  id: "nuyorican",
  title: "Nuyorican Poets Cafe",
  address: "236 East 3rd Street",
  coordinates: [40.72282, -73.98173],
  themes: ["culture", "place", "queer"],
  period: "Founded 1973",
  description: "Founded in 1973 by Miguel Piñero, Miguel Algarín, and a circle of Puerto Rican writers and artists, the Nuyorican Poets Cafe emerged as a home for experimental poetry, theater, music, and performance rooted in the experiences of New York's Puerto Rican and other marginalized communities. Rejecting elite literary institutions, the Café cultivated an open stage where emerging artists, neighborhood residents, and internationally recognized writers performed alongside one another. Over the following decades it became one of the city's most influential centers for spoken word, bilingual literature, and community-based cultural production.",
  quote: "",
  source: "New York Times ['The Early Days of the Nuyorican Poets Café; NYC LGBTQ Historic Sites; Nuyorican Poets Café; Red Bull Music Academy",

  slides: [

    {
      image: "images/Nuyorican/before.png",
      alt: "",
      title: "Exterior of the Nuyorican before its renovation in 2023, featuring mural of co-founder Pedro Pietri.",
      caption: "",
      credit: "Photographer unknown, courtesy of NYCDDC & NYC Cultural Affairs.",
      sourceLabel: "Untapped Cities",
      sourceUrl: "https://www.untappedcities.com/nuyorican-poets-cafe-restoration-nyc/"
    }, 
    {
      image: "images/Nuyorican/2024.png",
      alt: "",
      title: "Performer at the Nuyorican, 2024.",
      caption: "",
      credit: "Photographer unknown, courtesy of NYCDDC & NYC Cultural Affairs.",
      sourceLabel: "Untapped Cities",
      sourceUrl: "https://www.untappedcities.com/nuyorican-poets-cafe-restoration-nyc/"
    }, 
    {
      image: "images/Nuyorican/founders.png",
      alt: "",
      title: "Some of the founding poets of the Nuyorican, from left to right: Miguel Algarín, Lucky CienFuegos, & Richard August.",
      caption: "",
      credit: "Photograph by Paul Hosefros.",
      sourceLabel: "The New York Times",
      sourceUrl: "https://www.nytimes.com/2018/12/06/style/nuyorican-poets-archive.html"
    }, 
     {
      image: "images/Nuyorican/founders-2.png",
      alt: "",
      title: "Founding poets & friends, date unknown.",
      caption: "",
      credit: "Photograph by Paul Hosefros.",
      sourceLabel: "The New York Times",
      sourceUrl: "https://www.nytimes.com/2018/12/06/style/nuyorican-poets-archive.html"
    }, 
     {
      image: "images/Nuyorican/founding.png",
      alt: "",
      title: "Lucky CienFuegos, Richard August, Miguel Algarín, Miguel Piñero, date unknown.",
      caption: "",
      credit: "",
      sourceLabel: "Nuyorican Poets Café",
      sourceUrl: "https://www.nyclgbtsites.org/site/nuyorican-poets-cafe/",
    }, 
     {
      image: "images/Nuyorican/nuyorican.png",
      alt: "",
      title: "",
      caption: "",
      credit: "",
      sourceLabel: "Red Bull Music Academy",
      sourceUrl: "https://daily.redbullmusicacademy.com/2018/11/nuyorican-poets-cafe-feature",
    }, 
    {
  type: "quote",
  title: "",
  quote: "[The Nuyorican was] this space that, yes, was in conversation with hip-hop. Yes, was in conversation with the beat poets. But was also in conversation with something that was inherently Puerto Rican, inherently Caribbean, inherently Latinx…What we name spoken word or slam or esto y lo otro, we have had names for.",
  attribution: "Elizabeth Acevedo, Dominican-American poet, speaking about “declamación”, a Caribbean & Latin American spoken word poetry tradition. ",
  sourceLabel: "The New York Times",
  sourceUrl: "https://www.nytimes.com/2018/12/06/style/nuyorican-poets-archive.html"
  },
   {
      image: "images/Nuyorican/nuyorican-crowd.png",
      alt: "",
      title: "Friday night crowd at the Nuyorican, late 90s.",
      caption: "",
      credit: "",
      sourceLabel: "Frank",
      sourceUrl: "https://frank151.com/rap-or-hip-hop-oriented-poetry-how-the-nuyorican-poets-cafe-became-a-rite-of-passage-for-hip-hop-mcs-in-the-90s/",
    }, 
     {
  type: "quote",
  title: "",
  quote: "If you want a quantum perspective on why the Nuyorican scene happened like this, this is the beginning of real gangsta rap on the radio. All the thought-provoking and wordplay rappers were being called ‘underground,’ so people were looking to be stimulated through hip-hop and not just have their gangsta identities confirmed. And those people were all showing up at poetry readings: ‘Ah, this is where the lyricists are!’.",
  attribution: "Saul Williams, poet, artist & central figure in the Nuyorican scene in the 1990s.",
  sourceLabel: "Red Bull Music Academy",
  sourceUrl: "https://daily.redbullmusicacademy.com/2018/11/nuyorican-poets-cafe-feature"
  },
  ]
},
 {
  id: "peace",
  title: "Peace Pentagon",
  address: "339 Lafayette Street",
  coordinates: [40.72668, -73.99455],
  themes: ["mutualAid", "place"],
  period: "Activist building, 1969–2016",
  description: "Purchased by the War Resisters League in 1969, 339 Lafayette Street—later known as the “Peace Pentagon”—became a long-running home for peace, anti-war, social justice, and radical media organizations. Through the A. J. Muste Memorial Institute, the building provided movement groups with affordable downtown office, meeting, and organizing space, allowing organizations with different tactics and political traditions to work in close proximity and build networks across movements. Over its nearly five decades, the building housed organizations ranging from the War Resisters League and Women’s International League for Peace and Freedom to artist collectives and radical media projects including Political Art Documentation/Distribution (PAD/D) and Paper Tiger Television. Rather than functioning simply as inexpensive office space, 339 Lafayette became what Bagchee describes as a synergetic center of interconnected resistance: a place where activists met, planned actions, produced and circulated political media, stored materials, shared resources, and developed collaborations connecting neighborhood struggles to national and international movements.",
  source: "Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side.",

  slides: [
    {
      image: "images/Peace Pentagon/occupants-timeline.png",
      alt: "",
      title: "'Timeline of occupants, their rooms, & their actions at the Peace Pentagon, 1969-2016'",
      caption: "",
      credit: "Illustration & caption from Nandini Bagchee; Published in Bagchee, Counter Institution: Activist Estates of the Lower East Side.",
      sourceLabel: "",
      sourceUrl: ""
    },
    {
      image: "images/Peace Pentagon/actions.png",
      alt: "",
      title: "Timeline of actions organized - in part - by tenant organizations of the Peace Pentagon.",
      caption: "",
      credit: "Illustration by Nandini Bagchee; Published in Bagchee, Counter Institution: Activist Estates of the Lower East Side.",
      sourceLabel: "",
      sourceUrl: ""
    },
    {
      image: "images/Peace Pentagon/actions-2.png",
      alt: "",
      title: "Continued: timeline of actions organized - in part - by tenant organizations of the Peace Pentagon.",
      caption: "",
      credit: "Illustration by Nandini Bagchee; Published in Bagchee, Counter Institution: Activist Estates of the Lower East Side.",
      sourceLabel: "",
      sourceUrl: ""
    },
    {
      image: "images/Peace Pentagon/censored.png",
      alt: "",
      title: "'Ann Marie Buitrage Reads Agents' Names Censored by the U.S. Congress', video frames from Paper Tiger TV, 1981. PTTV was a collectively run media organization that seized the new infrastructure of public-access cable to create radical television.",
      caption: "",
      credit: "",
      sourceLabel: "",
      sourceUrl: ""
    },
    {
      image: "images/Peace Pentagon/Igal-WRL-1981.png",
      alt: "",
      title: "Igal Roodenko, longtime War Resister's League activist, at WRL's office at the Peace Pentagon in 1981. Roodenko frequently housed anti-war activists & their families in a carriage house behind his apartment building.",
      caption: "",
      credit: "Photograph by Brad Lyttle. Published in Bagchee, Counter Institution: Activist Estates of the Lower East Side.",
      sourceLabel: "",
      sourceUrl: ""
    },
    {
      image: "images/Peace Pentagon/talks.png",
      alt: "",
      title: "'Talks Not Troops', exterior of the Peace Pentagon during the Gulf War, 1991.",
      caption: "",
      credit: "Photograph by Ed Hedemann. Published in Bagchee, Counter Institution: Activist Estates of the Lower East Side.",
      sourceLabel: "",
      sourceUrl: ""
    },
    {
      image: "images/Peace Pentagon/9-11.png",
      alt: "",
      title: "'An Eye for an Eye Makes the Whole World Blind'. Peace Pentagon after the September 11th World Trade Center bombing, 2001",
      caption: "",
      credit: "Photograph by Ed Hedemann. Published in Bagchee, Counter Institution: Activist Estates of the Lower East Side.",
      sourceLabel: "",
      sourceUrl: ""
    },
    {
      image: "images/Peace Pentagon/WRL-office-2014.png",
      alt: "",
      title: "War Resister's League office, 2014",
      caption: "",
      credit: "Photograph by Jade Doskow",
      sourceLabel: "",
      sourceUrl: ""
    }
  ]
},
  {
  id: "pyramid",
  title: "Pyramid Club",
  address: "101 Avenue A",
  coordinates: [40.72672, -73.98308],
  themes: ["queer", "culture"],
  period: "Founded 1979",
  description: "A legendary queer performance venue where drag, music, experimental performance, and nightlife converged. Pyramid Club became an important site of artistic experimentation, chosen family, and queer cultural production in the East Village.",
  quote: "",
  source: "NYC LGBTQ Historic Site Project; Brian Butterick Archives.",

  slides: [
    {
      image: "images/Pyramid Club/dressing-room.png",
      alt: "Lady Bunny, Mistress Formika, Sweetie, Anna Conda, and Tabboo! in the Pyramid Club dressing room in 1992.",
      title:
        "Lady Bunny, Mistress Formika, Sweetie, Anna Conda, and Tabboo!",
      caption: "Pyramid Club dressing room, 1992.",
      credit: "Photograph by Linda Simpson.",
      sourceLabel: "NYC LGBTQ Historic Sites Project",
      sourceUrl: "https://www.nyclgbtsites.org/site/the-pyramid/",
    },
    {
  type: "quote",
  title: "",
  quote: "All of this was played out against the horrifying backdrop of the AIDS Crisis. Yet it was a time of great joy and revelry. Around this time, I wrote this line in my journal: 'Flow'r furious before the frost!' That is exactly what we were doing then. The Pyramid was our clubhouse. Our tribal circle. Our gang lair. Our home.",
  attribution: "— Brian Butterick, co-founder & artist",
  sourceLabel: "Brian Butterick Archives",
  sourceUrl: "https://brianbutterick.org/archives/the-pyramid-club/"
},

    {
      image: "images/Pyramid Club/first-time.png",
      alt: "Brian Butterick appearing in drag for the first time in the basement of the Pyramid Club.",
      title: "Brian Butterick, First Time in Drag",
      caption: "Pyramid Club basement, date unknown.",
      credit:
        "Courtesy of The Brian Butterick “Hattie Hathaway” Collection and the Howl! Arts Archive.",
        sourceLabel: "Brian Butterick Archives",
  sourceUrl: "https://brianbutterick.org/archives/the-pyramid-club/",
    },

    {
      image: "images/Pyramid Club/hattie.png",
      alt: "Hattie Hathaway, also known as Brian Butterick, with RuPaul in 1991.",
      title: "Hattie Hathaway and RuPaul, 1991.",
      caption: "",
      credit: "Photograph by Jonathan Lipkin. Courtesy of The Brian Butterick “Hattie Hathaway” Collection and the Howl! Arts Archive.",
sourceLabel: "Brian Butterick Archive",
sourceURL: "https://brianbutterick.org/archives/the-pyramid-club/",
    },

    {
      image: "images/Pyramid Club/membership.png",
      alt: "A Pyramid Club membership card.",
      title: "Pyramid Club Membership Card",
      caption: "",
      credit:
        "Photograph by Jonathan Lipkin. Courtesy of The Brian Butterick “Hattie Hathaway” Collection and the Howl! Arts Archive.",
      quote: "",
      quoteCredit: "",
      sourceUrl: "https://brianbutterick.org/archives-the-pyramid-club/",
      sourceLabel: "Brian Butterick Archive",
    },

    {
      image: "images/Pyramid Club/drag-marathon.png",
      alt: "Flyer advertising a Drag Queen Marathon at the Pyramid Club.",
      title: "Drag Queen Marathon Flyer, May 12, year unknown.",
      caption: "",
      credit: "Courtesy of Brian Butterick Archive.",
      sourceLabel: "Brian Butterick Archives",
  sourceUrl: "https://brianbutterick.org/archives/the-pyramid-club/",
    },
    {
  type: "quote",
  title: "",
  quote: "The critical community at the time came primarily out of Soho and the emphasis was on the minimal, the conceptual. We didn't give a shit if they hated us. 'In fact, you better hate it,' I thought, 'I'm gonna do something to make you hate it even more.' I wanted to needle them. You get into the face of authority, and you have two choices, comply or defy. Our choice was to defy.",
  attribution: "— Ann Magnuson, performance artist",
  sourceLabel: "Village Preservation",
  sourceUrl: "https://www.youtube.com/watch?v=tKGyJzJUi3I"
},

    {
      image: "images/Pyramid Club/open-closet.png",
      alt: "Flyer advertising the Open Closet fashion show at the Pyramid Club.",
      title: "“Open Closet” Fashion Show Flyer, October 27, 1982.",
      caption: "",
      credit: "Courtesy of the Howl! Arts Archive.",
      quote: "",
      quoteCredit: "",
      sourceUrl: "https://www.nyclgbtsites.org/site/the-pyramid/",
      sourceLabel: "NYC LGBTQ Historic Sites Project",
    },

    {
      image: "images/Pyramid Club/cha-cha.png",
      alt: "Flyer advertising Cha-Cha with Billy Vinci and Michael Blake.",
      title: "“Cha-Cha” with Billy Vinci and Michael Blake, August 14, 1983",
      caption: "",
      credit: "Courtesy of the Howl! Arts Archive.",
      quote: "",
      quoteCredit: "",
      sourceUrl: "https://www.nyclgbtsites.org/site/the-pyramid/",
      sourceLabel: "NYC LGBTQ Historic Sites Project"
    },

   {
  image: "images/Pyramid Club/thanks-for-nothing.png",
  alt: "Flyer advertising a To Wong Foo casting event titled Thanks for Nothing.",
  title: "To Wong Foo Casting — 'Thanks for Nothing!', July 10, 1994.",
  caption: ".",
  credit: "Photograph by Linda Thompson. Courtesy of the Collection of David Kennerley.",
  sourceUrl: "https://www.nyclgbtsites.org/site/the-pyramid/",
  sourceLabel: "NYC LGBTQ Historic Sites Project"
},

    {
      image: "images/Pyramid Club/jocasta.png",
      alt: "Flyer for Jocasta and Tiresius: Now the Story Can Be Told.",
      title: "Jocasta & Tiresius: Now the Story Can Be TOLD!",
      caption: "",
      credit: "Photograph by Peter Hujar. Courtesy of the Howl! Arts Archive.",
      quote: "",
      quoteCredit: "",
      sourceUrl: "https://www.nyclgbtsites.org/site/the-pyramid/",
      sourceLabel: "NYC LGBTQ Historic Sites Project"
    }
  ]
},
{
  id: "real-estate-show",
  title: "The Real Estate Show",
  address: "123 Delancey Street",
  coordinates: [40.71865, -73.98875],
  themes: ["housing", "culture", "place"],
  period: "January 1–2, 1980",
  description: "On New Year's Day 1980, more than thirty artists associated with Collaborative Projects (Colab) occupied an abandoned city-owned building and transformed it into a temporary exhibition criticizing New York City's housing and land-use policies. The exhibition argued that vacant buildings and speculative real-estate practices displaced working-class residents while neighborhoods were left to decay. Police shut down the exhibition after a single day and confiscated the artwork, but the artists successfully pressured the city into negotiations. As a compromise, the city offered them the storefront at 156 Rivington Street, where ABC No Rio was founded later that year. The Real Estate Show thus became one of the defining moments linking experimental art, direct action, and struggles over urban space on the Lower East Side.",
  quote: "",
  source: "Nandini Bagchee; Counter Institution: Activist Estates of the Lower East Side.",
   slides: [
    {
      image: "images/real estate show/octopus.png",
      alt: "",
      title: "Artist Becky Howland wheatpastes an octopus to the facade of the reclaimed building housing the 'Real Estate Show', 1980",
      caption: "",
      credit: "Photograph by Alan Moore. Courtesy of Becky Howland. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side.",
      sourceLabel: "",
      sourceUrl: ""
    },
    {
      image: "images/real estate show/real-estate-show.png",
      alt: "",
      title: "Flyer for the opening of the 'Real Estate Show', 1980",
      caption: "",
      credit: "Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side.",
      sourceLabel: "",
      sourceUrl: ""
    },
    {
      image: "images/real estate show/BUILDING.png",
      alt: "",
      title: "'A Building Is Not A Precious Gem To Be Locked - Boarded - Hoarded'",
      caption: "Flyer for the real estate show explicitly linking public art to 'insurrectionary urban development'",
      credit: ".",
      sourceLabel: "",
      sourceUrl: ""
    },
    {
  id: "skeletal-states",
  title: "Skeletal Estates",
  address: "13th St. & Avenue A",
  coordinates: [40.71865, -73.98875],
  themes: ["housing", "culture", "place"],
  description: "",
  quote: "",
  source: "Nandini Bagchee; Counter Institution: Activist Estates of the Lower East Side.",
  slides: [
    {
      image: "images/Skeletal States/skeletal-estates.png",
      alt: "",
      title: "",
      caption: "",
      credit: "Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side.",
      sourceLabel: "",
      sourceUrl: ""
    }
  ]
},
  ]
},
{
  id: "wigstock",
  title: "Wigstock",
  address: "Tompkins Square Park",
  coordinates: [40.72680, -73.98145],
  themes: ["queer", "culture", "place"],
  period: "1984–2001",
  description: "Founded by Lady Bunny in Tompkins Square Park in 1984, Wigstock transformed the park into a temporary queer commons through drag performance, celebration, and public visibility. Beginning as an informal Labor Day gathering, it became an annual tradition for nearly two decades and grew into one of the world’s largest drag festivals, moving to larger locations, eventually outgrowing Tompkins & moving to Union Square & the Hudson River Piers. The original festival ended in 2001, but Lady Bunny briefly revived Wigstock in 2018, bringing it to Pier 17 at the South Street Seaport.",
  quote: "",
  source: "The Bowery Boys; historical sources on Wigstock.",

  slides: [
    {
      image: "images/Wigstock/tompkins-wigstock-1988.jpg",
      alt: "Black-and-white photograph of drag performers singing onstage before a crowd at Wigstock in Tompkins Square Park.",
      title: "Wigstock, 1988",
      caption: "Lady Bunny and friends performing at Wigstock in Tompkins Square Park.",
      credit: "Photographer unknown.",
      sourceLabel: "The Bowery Boys",
      sourceUrl: "https://www.boweryboyshistory.com/2023/08/the-ragged-rebellious-history-of.html"
    },
    {
  image: "images/Wigstock/1.0.png",
  alt: "",
  title: "Wigstock-goers, mid 1990s.",
  caption: "",
  credit: "Photograph by Pierre Dalpé.",
  sourceLabel: "Xtra",
  sourceUrl: "https://xtramagazine.com/culture/wigstock-drag-pierre-dalpe-178804"
},
{
  image: "images/Wigstock/1.png",
  alt: "",
  title: "Wigstock-goers, mid 1990s.",
  caption: "",
  credit: "Photograph by Pierre Dalpé.",
  sourceLabel: "Xtra",
  sourceUrl: "https://xtramagazine.com/culture/wigstock-drag-pierre-dalpe-178804"
},
{
  image: "images/Wigstock/2.png",
  alt: "",
  title: "Wigstock-goers, mid 1990s.",
  caption: "",
  credit: "Photograph by Pierre Dalpé.",
  sourceLabel: "Xtra",
  sourceUrl: "https://xtramagazine.com/culture/wigstock-drag-pierre-dalpe-178804"
},
{
  image: "images/Wigstock/3.png",
  alt: "",
  title: "Wigstock-goers, mid 1990s.",
  caption: "",
  credit: "Photograph by Pierre Dalpé.",
  sourceLabel: "Xtra",
  sourceUrl: "https://xtramagazine.com/culture/wigstock-drag-pierre-dalpe-178804"
},
{
  image: "images/Wigstock/4.png",
  alt: "",
  title: "Wigstock-goers, mid 1990s.",
  caption: "",
  credit: "Photograph by Pierre Dalpé.",
  sourceLabel: "Xtra",
  sourceUrl: "https://xtramagazine.com/culture/wigstock-drag-pierre-dalpe-178804"
},
{
  image: "images/Wigstock/5.png",
  alt: "",
  title: "Wigstock-goers, mid 1990s.",
  caption: "",
  credit: "Photograph by Pierre Dalpé.",
  sourceLabel: "Xtra",
  sourceUrl: "https://xtramagazine.com/culture/wigstock-drag-pierre-dalpe-178804"
},
{
  image: "images/Wigstock/6.png",
  alt: "",
  title: "Wigstock-goers, mid 1990s.",
  caption: "",
  credit: "Photograph by Pierre Dalpé.",
  sourceLabel: "Xtra",
  sourceUrl: "https://xtramagazine.com/culture/wigstock-drag-pierre-dalpe-178804"
},
{
  image: "images/Wigstock/7.png",
  alt: "",
  title: "Wigstock-goers, mid 1990s.",
  caption: "",
  credit: "Photograph by Pierre Dalpé.",
  sourceLabel: "Xtra",
  sourceUrl: "https://xtramagazine.com/culture/wigstock-drag-pierre-dalpe-178804"
},
{
  image: "images/Wigstock/8.png",
  alt: "",
  title: "Wigstock-goers, mid 1990s.",
  caption: "",
  credit: "Photograph by Pierre Dalpé.",
  sourceLabel: "Xtra",
  sourceUrl: "https://xtramagazine.com/culture/wigstock-drag-pierre-dalpe-178804"
},
{
  image: "images/Wigstock/z.png",
  alt: "",
  title: "",
  caption: "",
  credit: "Photograph by Pierre Dalpé.",
  sourceLabel: "Xtra",
  sourceUrl: "https://xtramagazine.com/culture/wigstock-drag-pierre-dalpe-178804"
},
{
  image: "images/Wigstock/z.o.png",
  alt: "",
  title: "",
  caption: "",
  credit: "Photograph by Pierre Dalpé.",
  sourceLabel: "Xtra",
  sourceUrl: "https://xtramagazine.com/culture/wigstock-drag-pierre-dalpe-178804"
},
{
  image: "images/Wigstock/new.png",
  alt: "",
  title: "Lady Bunny (center), with Neil Patrick Harris (right), and other performers at a revival of Wigstock in 2018.",
  caption: "",
  credit: "Photograph by Mary Altaffer/AP.",
  sourceLabel: "The Guardian",
  sourceUrl: "https://www.theguardian.com/us-news/2018/sep/02/wigstock-drag-festival-new-york-is-back"
},
{
  image: "images/Wigstock/new-1.png",
  alt: "",
  title: "Original founder of Wigstock, Lady Bunny, in 2018",
  caption: "",
  credit: "Photograph by Lisa McNulty.",
  sourceLabel: "The Guardian",
  sourceUrl: "https://www.theguardian.com/us-news/2018/sep/02/wigstock-drag-festival-new-york-is-back"
},
{
  image: "images/Wigstock/new-2.png",
  alt: "",
  title: "Alaska Thunderfuck 5000 performing at Wigstock 2018.",
  caption: "",
  credit: "Photograph by Lisa McNulty.",
  sourceLabel: "The Guardian",
  sourceUrl: "https://www.theguardian.com/us-news/2018/sep/02/wigstock-drag-festival-new-york-is-back"
},
  ]
}
];
