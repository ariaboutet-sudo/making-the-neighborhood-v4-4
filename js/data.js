const MAP_THEMES = {
  housing: {
    title: "Housing & Collective Self-Determination",
    color: "#b97f75",
    vision: "HOUSING BEYOND PROFIT",
    practices: "Squatting • Encampments • Rent strikes • Direct Action • Coalition Building • Mutual Defense"
  },

  mutualAid: {
    title: "Mutual Aid",
    color: "#8fa084",
    vision: "CARE BEYOND INSTITUTIONS",
    practices: "Community-Controlled Institutions • Harm Reduction • Collective Care • Resource Re/Distribution • Housing Justice • Self Governance • Commons Stewardship • DIY Infrastructure"
  },

  queer: {
    title: "Queer Liberation",
    color: "#8197a6",
    vision: "QUEER WORLD-MAKING",
    practices: "Mutual Aid • Cultural Production • Visibility • Chosen Family • Political Education • Public Celebration • Direct Action • Coalition Building"
  },

  culture: {
    title: "Cultural Resistance",
    color: "#c69c6d",
    vision: "CULTURE AS COLLECTIVE / POLITICAL PRACTICE",
    practices: "Murals • Bomba y plena • DIY Publishing & Zines • Public Performance • Graffiti • Wheatpasting / Flyering • Community Venues"
  },

  place: {
    title: "Collective Place-Making",
    color: "#d1a65a",
    vision: "MAKING THE NEIGHBORHOOD",
    practices: "Reclaiming Vacant Lots & Buildings • Self-Built Spaces • Collective Maintenance • Community Design • Neighborhood Beautification"
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
    source: "Amy Starecheski; Seth Tobocman, War in the Neighborhood. Images to be added.",

  slides: [
  {
    image: "images/E 13th St Squats/neighborhood-defense.png",
    alt: "Residents gather outside the East 13th Street squats during the 1995 eviction.",
    title: "",
    caption: "The neighborhood attempts to defend the East 13th Street squats from eviction, 1995.",
    credit: "Photograph by Clayton Patterson.",
    sourceLabel: "",
    sourceUrl: "https://evgrieve.com/2013/05/commemorating-east-13th-street-squat.html"
  },
  {
    image: "images/E 13th St Squats/squatters-standoff.png",
    alt: "Squatters confront NYPD officers during the East 13th Street eviction (1995).",
    title: "",
    caption: "Squatters stand off against the NYPD during the eviction of the East 13th Street squats (1995).",
    credit: "Photograph by John Penley, via the Tamiment Library, New York University.",
    sourceLabel: "Curbed",
    sourceUrl: "https://www.curbed.com/2023/01/east-village-squatters-standoff-1995.html"
  },
  {
    image: "images/E 13th St Squats/squatters-standoff-2.png",
    alt: "Squatters confront NYPD officers during the East 13th Street eviction (1995).",
    title: "",
    caption: "Squatters stand off against the NYPD during the eviction of the East 13th Street squats (1995).",
    credit: "Photograph by John Penley, via the Tamiment Library, New York University.",
    sourceLabel: "Curbed",
    sourceUrl: "https://www.curbed.com/2023/01/east-village-squatters-standoff-1995.html"
  },
  {
    image: "images/E 13th St Squats/eviction.png",
    alt: "Comic panel depicting the eviction of the East 13th Street squats.",
    title: "Eviction",
    caption: "The eviction of the East 13th Street squats.",
    credit: "From Seth Tobocman, War in the Neighborhood, p. 315."
  },
  {
    image: "images/E 13th St Squats/eviction-1.png",
    alt: "Comic panel from War in the Neighborhood.",
    title: "Eviction",
    caption: "From the East 13th Street eviction sequence.",
    credit: "Seth Tobocman, War in the Neighborhood, p. 316."
  },
  {
    image: "images/E 13th St Squats/eviction-2.png",
    alt: "Comic panel from War in the Neighborhood.",
    title: "Eviction",
    caption: "From the East 13th Street eviction sequence.",
    credit: "Seth Tobocman, War in the Neighborhood, p. 317."
  },
  {
    image: "images/E 13th St Squats/eviction-3.png",
    alt: "Comic panel from War in the Neighborhood.",
    title: "Eviction",
    caption: "From the East 13th Street eviction sequence.",
    credit: "Seth Tobocman, War in the Neighborhood, p. 318."
  },
  {
    image: "images/E 13th St Squats/eviction-4.png",
    alt: "Comic panel from War in the Neighborhood.",
    title: "Eviction",
    caption: "From the East 13th Street eviction sequence.",
    credit: "Seth Tobocman, War in the Neighborhood, p. 319."
  },
  {
    image: "images/E 13th St Squats/18-since-13.png",
    alt: "Flyer commemorating the East 13th Street squat eviction.",
    title: "18 Since 13",
    caption: "Flyer for a commemoration of the eviction of the East 13th Street squats held at the Museum of Reclaimed Urban Space (C-Squat).",
    credit: "Courtesy of EV Grieve.",
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
source: "Seth Tobocman, War in the Neighborhood; Christopher Mele, Selling the Lower East Side; Neil Smith, The New Urban Frontier.",
slides: [
  {
    image: "images/Christadora House/christadora-house-1.png",
    alt: "Historical image of Christodora House in the East Village.",
    title: "Christodora House, MA Tricca, 1934",
    caption: "",
    credit: ""
  },
  {
    image: "images/Christadora House/christadora-house-2.png",
    alt: "Historical image of Christodora House in the East Village.",
    title: "",
    caption: "Christadora House, 1976. The Christadora was comdemned during this period due to water damage.",
    credit: "",
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
    alt: "Seth Tobocman comic panels depicting the Memorial Day riot and anger directed toward a luxury condominium near Tompkins Square Park.",
    title: "Memorial Day Riot",
    caption: "Seth Tobocman illustrates the Memorial Day riot. The “luxury condo” referenced may be Christodora House, located directly across from Tompkins Square Park.",
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
  }
]
},

{
  id: "tent-city",

  title: "Tent City, Tompkins Square Park",

  address: "Tompkins Square Park",

  coordinates: [40.72705, -73.98165],

  themes: ["housing", "mutualAid"],

  period: "Homeless encampment, late 1980s–1991",

  description: "As homeless residents were displaced from other parks by curfews and policing, Tompkins Square Park became one of the city's largest encampments. More than a site of deprivation, Tent City became a community organized around mutual aid, political resistance, and the assertion that unhoused New Yorkers had a right to remain in the neighborhood.",

  quote: "",

 slides: [

  {

    image: "images/Tent City Images/tent-city-clayton-patterson.jpg",

    alt: "A Tent City resident grilling outside his shelter in Tompkins Square Park.",

    title: "Tent City",

    caption: "A resident outside his shelter in Tompkins Square Park.",

    credit: "Photograph by Clayton Patterson; published by VICE in 2015."

  },

    {
    image: "images/Tent City Images/tent-city-nathaniel-margaret-morton.png",

    alt: "Nathaniel beside his rebuilt home in Tompkins Square Park.",

    title: "Nathaniel",

    caption: "Nathaniel, known as the Mayor of Tompkins Square Park, beside the home he rebuilt after his tent and garden were destroyed.",

    credit: "Photograph by Margaret Morton."

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
  caption: "Demonstrators confront police during the Tompkins Square Park uprising.",
  credit: "Photograph by Ángel Franco / The New York Times."
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
  caption: "Police remove shelters as the encampment is cleared.",
  credit: "Photograph by John Sotomayor / The New York Times."
},
  {
    image: "images/Tent City Images/tent-city-homeless-structures-margaret-morton.jpg",
    alt: "Homeless structures in Tompkins Square Park.",
    title: "Homeless Structures",
    caption: "Homeless structures in Tompkins Square Park, 1989.",
    credit: "Photograph by Margaret Morton."
  },
   {
  image: "images/Tent City Images/tent-city-tobocman-p102.png",
  alt: "Seth Tobocman, War in the Neighborhood, page 102.",
  title: "",
  caption: "War in the Neighborhood, Seth Tobocman, p. 102.",
  credit: ""
},
   {
  image: "images/Tent City Images/tent-city-tobocman-p103.png",
  alt: "Seth Tobocman, War in the Neighborhood, page 103.",
  title: "",
  caption: "War in the NeighborhoodSeth Tobocman, p. 103.",
  credit: ""
},
   {
  image: "images/Tent City Images/tent-city-tobocman-p104.png",
  alt: "Seth Tobocman, War in the Neighborhood, page 104.",
  title: "",
  caption: "War in the NeighborhoodSeth Tobocman, p. 104.",
  credit: ""
},
   {
  image: "images/Tent City Images/tent-city-tobocman-p105.png",
  alt: "Seth Tobocman, War in the Neighborhood, page 105.",
  title: "",
  caption: "War in the Neighborhood, Seth Tobocman, p. 105.",
  credit: ""
},
   {
  image: "images/Tent City Images/tent-city-tobocman-p106.png",
  alt: "Seth Tobocman, War in the Neighborhood, page 106.",
  title: "",
  caption: "War in the Neighborhood, Seth Tobocman, p. 106.",
  credit: ""
},
   {
  image: "images/Tent City Images/tent-city-tobocman-p107.png",
  alt: "Seth Tobocman, War in the Neighborhood, page 107.",
  title: "",
  caption: "War in the Neighborhood, Seth Tobocman, p. 107.",
  credit: ""
},
   {
  image: "images/Tent City Images/tent-city-tobocman-p108.png",
  alt: "Seth Tobocman, War in the Neighborhood, page 108.",
  title: "",
  caption: "War in the Neighborhood, Seth Tobocman, p. 108.",
  credit: ""
}

],

  source: "Photograph by Clayton Patterson; published by VICE in 2015."

},
  {
    id: "umbrella",
    title: "Umbrella House",
    address: "21–23 Avenue C",
    coordinates: [40.72211, -73.97969],
    themes: ["housing"],
    period: "Occupied in 1988; later legalized",
    description: "Residents collectively rehabilitated an abandoned building and later negotiated its transformation into limited-equity cooperative housing. The building illustrates both the possibilities and the internal tensions of collective ownership, governance, and institutional recognition.",
    quote: "",
    source: "Amy Starecheski, What Was Squatting, and What Comes Next?",

  slides: [
  {
    image: "images/Umbrella House/village-preservation-1.png",
    alt: "Exterior of Umbrella House in 1988, with painted and altered windows and façade.",
    title: "Umbrella House, 1988",
    caption: "Umbrella House, 1988.",
    credit: "Photograph by Marlis Momber.",
    sourceLabel: "Village Preservation",
    sourceUrl: "https://villagepreservation.org/2011/06/14/umbrella-umbrella/"
  },
  {
    type: "quote",
    title: "Defending a Home",
    quote: "I put a big sign on my window that said, ‘I’m willing to die for my home, how about you?’ And I meant it, I really meant it. I wasn’t fucking around. Because I had nothing other than that building.",
    attribution: "— Siobhan Meow, Umbrella House squatter",
    sourceLabel: "City Limits, “Squatters’ Rites”",
    sourceUrl: "https://citylimits.org/squatters-rites/"
  },
  {
    image: "images/Umbrella House/entryway.png",
    alt: "Side-by-side photographs comparing Umbrella House’s entryway shortly after occupation and after residents brought the building up to code.",
    title: "Rebuilding the Entryway",
    caption: "The entryway to Umbrella House shortly after residents moved in, left, and after they brought the building up to code, right.",
    credit: "Photographs by Gabriel Pintado.",
    sourceLabel: "The New York Times",
    sourceUrl: "https://www.nytimes.com/2015/07/19/realestate/umbrella-house-east-village-co-op-run-by-former-squatters.html"
  },
  {
    type: "quote",
    title: "How Umbrella House Got Its Name",
    quote: "For the first five years, that’s all we did—work. The roof leaked so badly that you could be in the basement, look up, and see the sky. When it rained hard, we had these tarps to funnel all the water into buckets, and we had to run a bucket brigade to pour the water out the windows.",
    attribution: "— Geoff Dann, resident",
    caption: "The tarp system—and its tendency to soak passersby who did not have umbrellas—gave the house its name.",
    sourceLabel: "City Limits, “Squatters’ Rites”",
    sourceUrl: "https://citylimits.org/squatters-rites/"
  },
  {
    image: "images/Umbrella House/1990.png",
    alt: "Exterior of Umbrella House in 1990, two years after squatters occupied the building.",
    title: "Umbrella House, 1990",
    caption: "Umbrella House in 1990, two years after its takeover by squatters.",
    credit: "Photograph by Gabriel Pintado.",
    sourceLabel: "The New York Times",
    sourceUrl: "https://www.nytimes.com/2015/07/19/realestate/umbrella-house-east-village-co-op-run-by-former-squatters.html"
  },
  {
    type: "quote",
    title: "From Squatters to Property Owners",
    quote: "“I think this idea of having the building owned will be a big change. People will begin to have the concept of ‘this is mine.’ That wasn’t what it was about originally, and I’m worried about that.”\n\n— Hafid Lalaoui, a former residents expressing ambivalence about squatters becoming property owners.",
    attribution: "",
    caption: "",
    sourceLabel: "City Limits, “Squatters’ Rites”",
    sourceUrl: "https://citylimits.org/squatters-rites/"
  },
  {
    type: "quote",
    title: "From Squatters to Property Owners",
    quote: "““I would rather continue the way we’re going–if we could be left alone. But the stakes have changed. We know that if we don’t take the deal it would be a matter of time before the city came after us. -Siobhan Meow, Resident",
    attribution: "",
    caption: "",
    sourceLabel: "City Limits, “Squatters’ Rites”",
    sourceUrl: "https://citylimits.org/squatters-rites/"
  },
  
  {
    image: "images/Umbrella House/garden day.png",
    alt: "Residents tending plants during a gardening workday on the roof of Umbrella House.",
    title: "Roof Garden",
    caption: "A gardening workday on the roof of Umbrella House, 2015.",
    credit: "Photograph by Chang W. Lee.",
    sourceLabel: "The New York Times",
    sourceUrl: "https://www.nytimes.com/2015/07/19/realestate/umbrella-house-east-village-co-op-run-by-former-squatters.html"
  },
  {
    image: "images/Umbrella House/president.png",
    alt: "Portrait of Tauno Bilsted, an early Umbrella House squatter who later became the building’s president.",
    title: "Tauno Bilsted",
    caption: "Tauno Bilsted, an early squatter who eventually became the building’s president.",
    credit: "Photograph by Chang W. Lee.",
    sourceLabel: "The New York Times",
    sourceUrl: "https://www.nytimes.com/2015/07/19/realestate/umbrella-house-east-village-co-op-run-by-former-squatters.html"
  },
  {
    image: "images/Umbrella House/45k!.png",
    alt: "Miguel Valderrama inside his apartment at Umbrella House.",
    title: "A $45,000 Apartment",
    caption: "Miguel Valderrama was the first person to purchase an apartment at Umbrella House after an agreement with the city legalized the building. He bought his 300-square-foot apartment in 2009 for $45,000.",
    credit: "Photograph by Chang W. Lee.",
    sourceLabel: "The New York Times",
    sourceUrl: "https://www.nytimes.com/2015/07/19/realestate/umbrella-house-east-village-co-op-run-by-former-squatters.html"
  },
  {
    image: "images/Umbrella House/village-preservation.png",
    alt: "Exterior of Umbrella House in 2011.",
    title: "Umbrella House, 2011",
    caption: "Exterior of Umbrella House, 2011.",
    credit: "",
    sourceLabel: "Village Preservation",
    sourceUrl: "https://villagepreservation.org/2011/06/14/umbrella-umbrella/"
    }
]
},
{
  id: "csquat",
    id: "csquat",
    title: "C-Squat / MoRUS [Museum of Reclaimed Urban Space",
    address: "155 Avenue C",
    coordinates: [40.72583, -73.97753],
    themes: ["housing", "culture"],
    period: "Squat founded 1989",
    description: "C-Squat shows housing as more than shelter: it became a site of collective life, decision-making, culture, and neighborhood memory. Its later legalization and the loss of its community room also reveal the costs and compromises involved in becoming a formal cooperative.",
    quote: "",
    source: "Amy Starecheski, What Was Squatting, and What Comes Next?",

  slides: [
  {image: "images/C Squat/not-for-sale.png",
  alt: "C-Squat with a 'Not for Sale' sign.",
  title: "Not for Sale",
  caption: "C-Squat.",
  credit: "Photograph by Clayton Patterson.",
  sourceLabel: "CityRealty",
  sourceUrl: "https://www.cityrealty.com/nyc/market-insight/features/get-to-know/the-neighbors-who-arrived-first-c-squat-155-avenue-c"
},
{
  image: "images/C Squat/c-squat.png",
  alt: "Exterior view of C-Squat during the 1980s.",
  title: "C-Squat",
  caption: "C-Squat in its early years, 1980s.",
  credit: "Photograph by Clayton Patterson.",
  sourceLabel: "CityRealty",
  sourceUrl: "https://www.cityrealty.com/nyc/market-insight/features/get-to-know/the-neighbors-who-arrived-first-c-squat-155-avenue-c/5645"
},
{
  image: "images/C Squat/basement.png",
  alt: "The basement of C-Squat.",
  title: "The Basement",
  caption: "C-Squat's basement was largely closed to visitors in 2007 due to safety concerns.",
  credit: "Photograph by Amy Starechesky.",
  sourceLabel: "SAPIENS",
  sourceUrl: "https://www.sapiens.org/culture/new-york-city-squatting/"
},
{
  image: "images/C Squat/taunto-bilsted.png",
  alt: "Tauno Bilsted inside C-Squat.",
  title: "Tauno Bilsted",
  caption: "Early squatter Tauno Bilsted recalls how part of the first floor collapsed, creating C-Squat's famously enlarged basement.",
  credit: "Photograph by Amy Starechesky.",
  sourceLabel: "SAPIENS",
  sourceUrl: "https://www.sapiens.org/culture/new-york-city-squatting/"
},
{
  image: "images/C Squat/sapiens-no-knocking.png",
  alt: "Entrance to C-Squat.",
  title: "Entrance",
  caption: "Entrance to C-Squat.",
  credit: "Photograph by Constantin Sergeyev.",
  sourceLabel: "SAPIENS",
  sourceUrl: "https://www.sapiens.org/culture/new-york-city-squatting/"
},
{
  image: "images/C Squat/what-cheer.png",
  alt: "The What Cheer? Brigade performing outside C-Squat.",
  title: "The What Cheer? Brigade",
  caption: "The What Cheer? Brigade (part of the radical marching band movement) performs at C-Squat, 2012.",
  credit: "Photograph by Tod Seelie.",
  sourceLabel: "VICE",
  sourceUrl: "https://www.vice.com/en/article/sxrapbookn-with-tod-the-what-cheer-brigade-at-c-squat/"
},
{
  image: "images/C Squat/morus-1.png",
  alt: "Storefront of the Museum of Reclaimed Urban Space.",
  title: "MoRUS",
  caption: "MoRUS storefront.",
  credit: "Photograph by Clayton Patterson.",
  sourceLabel: "CityRealty",
  sourceUrl: "https://www.cityrealty.com/nyc/market-insight/features/get-to-know/the-neighbors-who-arrived-first-c-squat-155-avenue-c/5645"
},
{
  image: "images/C Squat/morus.png",
  alt: "Museum of Reclaimed Urban Space inside the former C-Squat storefront.",
  title: "Museum of Reclaimed Urban Space",
  caption: "The Museum of Reclaimed Urban Space (MoRUS) opened in C-Squat's storefront in 2012.",
  credit: "Photograph by Amy Starechesky.",
  sourceLabel: "SAPIENS",
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
    source: "Seth Tobocman, War in the Neighborhood, p. 23, plus historical sources on Adam Purple’s Garden of Eden."
  },
  {
    id: "laplaza",
    title: "La Plaza Cultural",
    address: "East 9th Street and Avenue C",
    coordinates: [40.72522, -73.97818],
    themes: ["culture", "place"],
    period: "Community garden founded in the 1970s",
    description: "A resident-created garden and cultural commons built on neglected land and maintained through collective labor, stewardship, and neighborhood participation.",
    quote: "",
    source: "Efrat Eizenberg, “Actually Existing Commons.”"
  },
  {
  id: "la-lucha-continua",
  title: "La Lucha Continua",
  coordinates: [40.7269, -73.9785],
  themes: ["culture", "place"],
  excerpt:
    "A series of community murals covering the walls surrounding La Plaza Cultural, expressing neighborhood memory, Puerto Rican and Latin American liberation struggles, and resistance to displacement.",
 slides: [
  {
    image: "images/La-Lucha-Continua/LLC-1.png",
    alt: "La Lucha Continua mural.",
    title: "La Lucha Continua",
    caption: "",
    credit: "",
    sourceUrl: "",
    sourceLabel: ""
  },
  {
    image: "images/La-Lucha-Continua/LLC-2.png",
    alt: "La Lucha Continua mural.",
    title: "La Lucha Continua",
    caption: "",
    credit: "",
    sourceUrl: "",
    sourceLabel: ""
  },
  {
    image: "images/La-Lucha-Continua/LLC-3.png",
    alt: "La Lucha Continua mural.",
    title: "La Lucha Continua",
    caption: "",
    credit: "",
    sourceUrl: "",
    sourceLabel: ""
  },
  {
    image: "images/La-Lucha-Continua/LLC-4.png",
    alt: "La Lucha Continua mural.",
    title: "La Lucha Continua",
    caption: "",
    credit: "",
    sourceUrl: "",
    sourceLabel: ""
  },
  {
    image: "images/La-Lucha-Continua/LLC-5.png",
    alt: "La Lucha Continua mural.",
    title: "La Lucha Continua",
    caption: "",
    credit: "",
    sourceUrl: "",
    sourceLabel: ""
  }
]
},
  {
    id: "charas",
    title: "CHARAS / El Bohío",
    address: "605 East 9th Street",
    coordinates: [40.72752, -73.98036],
    themes: ["culture", "place"],
    period: "Community center, 1979–2001",
    description: "A former public school transformed by neighborhood organizers into a Puerto Rican community and cultural center. Its loss remains central to struggles over community-controlled space.",
    quote: "",
    source: "Nandini Bagchee, Counter Institution.", 
  slides: [
  {
    image: "images/CHARAS/charas.png",
    alt: "Founders of CHARAS gathered together.",
    title: "CHARAS Founders",
    caption: "",
    credit: "Photograph by Nandini Bagchee. Published in Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/CHARAS/charas-offices.png",
    alt: "Office space inside CHARAS / El Bohío.",
    title: "CHARAS Offices",
    caption: "",
    credit: "Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/CHARAS/charas-offices-2.png",
    alt: "Another view of the offices inside CHARAS / El Bohío.",
    title: "CHARAS Offices",
    caption: "",
    credit: "Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/CHARAS/charas-recycling.png",
    alt: "Materials and activity associated with CHARAS recycling work.",
    title: "CHARAS Recycling",
    caption: "",
    credit: "Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/CHARAS/la-plaza-charas-recycling.png",
    alt: "CHARAS recycling activity associated with La Plaza Cultural.",
    title: "CHARAS and La Plaza Cultural",
    caption: "",
    credit: "Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/CHARAS/lobby-mural.png",
    alt: "Mural in the lobby of CHARAS / El Bohío.",
    title: "Lobby Mural",
    caption: "",
    credit: "Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/CHARAS/save-el-bohio.png",
    alt: "Artwork or campaign material calling for the preservation of El Bohío.",
    title: "Save El Bohío",
    caption: "",
    credit: "Created by Nandini Bagchee. Published in Counter Institution: Activist Estates of the Lower East Side."
    }
]
},
{
  id: "abc",
    title: "ABC No Rio",
    address: "156 Rivington Street",
    coordinates: [40.71902, -73.98506],
    themes: ["culture", "housing", "place"],
    period: "Founded 1980",
    description: "A collectively run art and activist center that developed from an occupation and critique of real-estate policy into durable infrastructure for DIY cultural and political practice.",
    quote: "",
    source: "Nandini Bagchee; Dawson Barrett, “DIY Democracy.”",
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
    title: "ABC No Rio: A Visual Essay",
    caption: "ABC No Rio backyard, 2016.",
    credit: "Photograph by Margarida Correia, October 4, 2016.",
    sourceLabel: "Wrong Wrong, “ABC No Rio”",
    sourceUrl: "https://wrongwrong.net/article/abc-no-rio"
  },
  {
    image: "images/abc no rio/abc-1.png",
    alt: "Another view of ABC No Rio’s backyard and its layered, collectively used outdoor space.",
    title: "ABC No Rio: A Visual Essay",
    caption: "ABC No Rio backyard, 2016.",
    credit: "Photograph by Margarida Correia, October 4, 2016.",
    sourceLabel: "Wrong Wrong, “ABC No Rio”",
    sourceUrl: "https://wrongwrong.net/article/abc-no-rio"
  },
  {
    image: "images/abc no rio/abc-2.png",
    alt: "Interior view of ABC No Rio showing its informal, densely layered art and organizing space.",
    title: "ABC No Rio: A Visual Essay",
    caption: "ABC No Rio, 2016.",
    credit: "Photograph by Margarida Correia, October 4, 2016.",
    sourceLabel: "Wrong Wrong, “ABC No Rio”",
    sourceUrl: "https://wrongwrong.net/article/abc-no-rio"
  },
  {
    image: "images/abc no rio/dark-room.png",
    alt: "The darkroom at ABC No Rio, with photographic equipment and materials arranged in a small workspace.",
    title: "ABC No Rio: A Visual Essay",
    caption: "ABC No Rio darkroom, 2016.",
    credit: "Photograph by Margarida Correia, October 4, 2016.",
    sourceLabel: "Wrong Wrong, “ABC No Rio”",
    sourceUrl: "https://wrongwrong.net/article/abc-no-rio"
  },
  {
    image: "images/abc no rio/head.png",
    alt: "ABC No Rio’s zine library beneath a handwritten message reading, “there is always something hanging above your head.”",
    title: "Zine Library",
    caption: "ABC No Rio’s zine library. Above it, artist and zinester Fly Orr has painted, “there is always something hanging above your head.”",
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
    title: "War Resisters League Benefit",
    caption: "Flyer for a benefit show for the War Resisters League, 1991.",
    credit: "Courtesy of the ABC No Rio HC/Punk Archive. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/abc no rio/animals.png",
    alt: "ABC No Rio’s storefront decorated with stenciled images of a hen and a dog.",
    title: "Animals That Live in the City",
    caption: "Storefront with live-hen and dog stencils by Anton van Dalen. The 1980 exhibition 'Animals That Live in the City' brought artists, scientists, and neighborhood children into collaboration.",
    credit: "Artwork by Anton van Dalen, 1980. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/abc no rio/detail.png",
    alt: "Detail of animal stencils painted across the ABC No Rio storefront.",
    title: "Animals That Live in the City",
    caption: "Detail of the storefront stencils created by Anton van Dalen for 'Animals That Live in the City', a 1980 collaboration among artists, scientists, and neighborhood children.",
    credit: "Artwork by Anton van Dalen, 1980. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/abc no rio/extremist-show.png",
    alt: "Three photographs documenting performances and installations at ABC No Rio, including activity in the backyard and storefront window.",
    title: "The Extremist Show",
    caption: "Left: Peter Cramer and Jack Waters perform in the backyard. Center: Kembra Pfahler sleeps in the storefront window. Right: Kembra Pfahler and Samoa sit on paintings.",
    credit: "Photographs by Toyo Tsuchiya, 1983. Courtesy of the Toyo Tsuchiya Estate. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/abc no rio/murder-junk-suicide.png",
    alt: "Installation by John Murton inside ABC No Rio in 1980.",
    title: "Murder, Junk, Suicide",
    caption: "Installation by John Murton, 1980.",
    credit: "Photograph by Tom Warren, 1980. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/abc no rio/portrait-show.png",
    alt: "Installation of photographic portraits of neighborhood residents displayed inside ABC No Rio.",
    title: "Portrait Show",
    caption: "Installation by Tom Warren featuring portraits of neighborhood residents.",
    credit: "Artwork and photograph by Tom Warren, 1981. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/abc no rio/all-ages.png",
    alt: "Flyer advertising an all-ages Saturday matinee show at ABC No Rio.",
    title: "All Ages Show",
    caption: "All Ages Show flyer for an ABC No Rio Saturday matinee, 1990.",
    credit: "Flyer designed by Java Dave; courtesy of Freddy Alva. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/abc no rio/ides-of-march.png",
    alt: "Illustrated timeline tracing ABC No Rio’s Ides of March publication series and its many contributors.",
    title: "Ides of March",
    caption: "Ides of March, ABC No Rio’s long-running collaborative publication series, documented the collective’s artists, projects, and political commitments from the late 1990s through the 2000s.",
    credit: "Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
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
    caption: "Immigration project by the Justseeds Artists’ Cooperative in ABC No Rio’s computer room.",
    credit: "Artwork by the Justseeds Artists’ Cooperative. Photograph by Nandini Bagchee, 2014. Published in Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/abc no rio/building-proposal.png",
    alt: "Architectural drawing proposing a replacement building for ABC No Rio.",
    title: "Proposal for a New ABC No Rio",
    caption: "After ABC No Rio raised $700,000 and persuaded HPD to sell it the building in 2006, architect Paul A. Castrucci determined that the existing structure was unsound. The collective began raising additional funds for its demolition and replacement with a new community-controlled facility.",
    credit: "Drawing courtesy of Paul A. Castrucci Architect for ABC No Rio. Published in Nandini Bagchee, Counter Institution: Activist Estates of the Lower East Side."
  },
  {
    image: "images/abc no rio/history.png",
    alt: "Michael Alan performing amid a densely layered installation inside ABC No Rio.",
    title: "History Pushes Through",
    caption: "Michael Alan’s History Pushes Through, installed at ABC No Rio in 2011.",
    credit: "Artwork by Michael Alan, 2011.",
    sourceLabel: "Hyperallergic, “ABC No Rio: Michael Alan’s Living Installation”",
    sourceUrl: "https://hyperallergic.com/abc-no-rio-michael-alan-living-installation/"
  },
  {
    image: "images/abc no rio/going-down.png",
    alt: "Michael Alan performing inside a layered installation responding to ABC No Rio’s deteriorating building.",
    title: "Going Down with the Building",
    caption: "Michael Alan explored the building’s approaching demolition in an installation at ABC No Rio in 2011.",
    credit: "Artwork by Michael Alan, 2011.",
    sourceLabel: "Hyperallergic, “ABC No Rio: Michael Alan’s Living Installation”",
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
  source: "Kenkeleba House."
},
{
  siteId: "kenkeleba",
  type: "mixed-quotes",
  title: "Corrine Jennings on Building Kenkeleba House",
},

  {
    id: "peace",
    title: "Peace Pentagon",
    address: "339 Lafayette Street",
    coordinates: [40.72668, -73.99455],
    themes: ["mutual aid"],
    period: "Activist building, 1969–2016",
    description: "A building that housed anti-war and social-justice organizations at below-market rents, providing durable physical infrastructure for organizing across movements.",
    quote: "",
    source: "Nandini Bagchee, Counter Institution."
  }
];
