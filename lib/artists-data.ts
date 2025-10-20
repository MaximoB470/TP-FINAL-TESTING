export interface VinylRecord {
  id: string
  title: string
  releaseYear: number
  label: string
  price: number
  stock: number
  condition: "Mint" | "Near Mint" | "Very Good" | "Good"
  format: "LP" | "EP" | "Single"
  imageUrl: string
  tracks: string[]
  description: string
}

export interface ArtistDetail {
  id: string
  name: string
  genre: string
  image: string
  color: string
  bio: string
  yearsActive: string
  vinylRecords: VinylRecord[]
}

export const artistsData: ArtistDetail[] = [
  {
    id: "frank-sinatra",
    name: "Frank Sinatra",
    genre: "Jazz / Swing",
    image: "/frank-sinatra-vintage-vinyl-record-portrait.jpg",
    color: "from-purple-900 to-purple-700",
    bio: "Frank Sinatra, conocido como 'The Voice', fue uno de los artistas más influyentes del siglo XX. Su estilo único y su interpretación emocional lo convirtieron en una leyenda de la música.",
    yearsActive: "1935-1995",
    vinylRecords: [
      {
        id: "sinatra-1",
        title: "Songs for Swingin' Lovers!",
        releaseYear: 1956,
        label: "Capitol Records",
        price: 89.99,
        stock: 3,
        condition: "Near Mint",
        format: "LP",
        imageUrl: "/frank-sinatra-songs-for-swingin-lovers-album-cover.jpg",
        tracks: [
          "You Make Me Feel So Young",
          "It Happened in Monterey",
          "You're Getting to Be a Habit with Me",
          "You Brought a New Kind of Love to Me",
          "Too Marvelous for Words",
        ],
        description: "Uno de los álbumes más icónicos de Sinatra, grabado con la orquesta de Nelson Riddle.",
      },
      {
        id: "sinatra-2",
        title: "In the Wee Small Hours",
        releaseYear: 1955,
        label: "Capitol Records",
        price: 95.99,
        stock: 2,
        condition: "Mint",
        format: "LP",
        imageUrl: "/frank-sinatra-in-the-wee-small-hours-album-cover.jpg",
        tracks: [
          "In the Wee Small Hours of the Morning",
          "Mood Indigo",
          "Glad to Be Unhappy",
          "I Get Along Without You Very Well",
          "Deep in a Dream",
        ],
        description: "Considerado uno de los primeros concept albums de la historia de la música popular.",
      },
      {
        id: "sinatra-3",
        title: "Come Fly with Me",
        releaseYear: 1958,
        label: "Capitol Records",
        price: 79.99,
        stock: 5,
        condition: "Very Good",
        format: "LP",
        imageUrl: "/frank-sinatra-come-fly-with-me-album-cover.jpg",
        tracks: ["Come Fly with Me", "Around the World", "Isle of Capri", "Moonlight in Vermont", "Autumn in New York"],
        description: "Un álbum temático sobre viajes que captura el espíritu aventurero de los años 50.",
      },
    ],
  },
  {
    id: "prince",
    name: "Prince",
    genre: "Funk / Rock / Pop",
    image: "/prince-purple-rain-vinyl-record-portrait.jpg",
    color: "from-violet-900 to-purple-600",
    bio: "Prince Rogers Nelson fue un genio musical que revolucionó el funk, rock y pop. Su creatividad sin límites y su dominio de múltiples instrumentos lo convirtieron en una leyenda.",
    yearsActive: "1976-2016",
    vinylRecords: [
      {
        id: "prince-1",
        title: "Purple Rain",
        releaseYear: 1984,
        label: "Warner Bros.",
        price: 129.99,
        stock: 4,
        condition: "Mint",
        format: "LP",
        imageUrl: "/prince-purple-rain-inspired.png",
        tracks: [
          "Let's Go Crazy",
          "Take Me with U",
          "The Beautiful Ones",
          "Computer Blue",
          "When Doves Cry",
          "Purple Rain",
        ],
        description: "El álbum más icónico de Prince, banda sonora de la película del mismo nombre.",
      },
      {
        id: "prince-2",
        title: "Sign O' the Times",
        releaseYear: 1987,
        label: "Paisley Park",
        price: 149.99,
        stock: 2,
        condition: "Near Mint",
        format: "LP",
        imageUrl: "/prince-sign-o-the-times-album-cover.jpg",
        tracks: [
          "Sign O' the Times",
          "Play in the Sunshine",
          "Housequake",
          "The Ballad of Dorothy Parker",
          "If I Was Your Girlfriend",
        ],
        description: "Considerado por muchos como la obra maestra de Prince, un doble álbum experimental.",
      },
    ],
  },
  {
    id: "elvis-presley",
    name: "Elvis Presley",
    genre: "Rock and Roll",
    image: "/elvis-presley-vintage-vinyl-record-portrait.jpg",
    color: "from-purple-800 to-indigo-700",
    bio: "Elvis Presley, 'The King of Rock and Roll', revolucionó la música popular en los años 50. Su carisma, voz única y estilo innovador lo convirtieron en un ícono cultural.",
    yearsActive: "1953-1977",
    vinylRecords: [
      {
        id: "elvis-1",
        title: "Elvis Presley",
        releaseYear: 1956,
        label: "RCA Victor",
        price: 199.99,
        stock: 1,
        condition: "Very Good",
        format: "LP",
        imageUrl: "/elvis-presley-debut-album-cover-1956.jpg",
        tracks: [
          "Blue Suede Shoes",
          "I'm Counting on You",
          "I Got a Woman",
          "One-Sided Love Affair",
          "I Love You Because",
        ],
        description: "El álbum debut que cambió la historia del rock and roll para siempre.",
      },
      {
        id: "elvis-2",
        title: "Blue Hawaii",
        releaseYear: 1961,
        label: "RCA Victor",
        price: 119.99,
        stock: 3,
        condition: "Near Mint",
        format: "LP",
        imageUrl: "/elvis-presley-blue-hawaii-album-cover.jpg",
        tracks: ["Blue Hawaii", "Can't Help Falling in Love", "Rock-A-Hula Baby", "Hawaiian Sunset", "Aloha Oe"],
        description: "Banda sonora de la película, incluye el clásico 'Can't Help Falling in Love'.",
      },
    ],
  },
  {
    id: "queen",
    name: "Queen",
    genre: "Rock",
    image: "/queen-band-vintage-vinyl-record.jpg",
    color: "from-fuchsia-900 to-purple-700",
    bio: "Queen fue una banda británica de rock formada en 1970. Con Freddie Mercury como vocalista, crearon algunos de los himnos más memorables de la historia del rock.",
    yearsActive: "1970-1991",
    vinylRecords: [
      {
        id: "queen-1",
        title: "A Night at the Opera",
        releaseYear: 1975,
        label: "EMI",
        price: 139.99,
        stock: 4,
        condition: "Mint",
        format: "LP",
        imageUrl: "/queen-a-night-at-the-opera-album-cover.jpg",
        tracks: [
          "Death on Two Legs",
          "Lazing on a Sunday Afternoon",
          "I'm in Love with My Car",
          "You're My Best Friend",
          "Bohemian Rhapsody",
        ],
        description: "Contiene 'Bohemian Rhapsody', una de las canciones más innovadoras de todos los tiempos.",
      },
      {
        id: "queen-2",
        title: "News of the World",
        releaseYear: 1977,
        label: "EMI",
        price: 119.99,
        stock: 5,
        condition: "Near Mint",
        format: "LP",
        imageUrl: "/queen-news-of-the-world-album-cover.jpg",
        tracks: [
          "We Will Rock You",
          "We Are the Champions",
          "Sheer Heart Attack",
          "All Dead, All Dead",
          "Spread Your Wings",
        ],
        description: "Incluye dos de los himnos más famosos del rock: 'We Will Rock You' y 'We Are the Champions'.",
      },
    ],
  },
  {
    id: "jimi-hendrix",
    name: "Jimi Hendrix",
    genre: "Rock / Blues",
    image: "/jimi-hendrix-psychedelic-vinyl-record-portrait.jpg",
    color: "from-purple-900 to-violet-800",
    bio: "Jimi Hendrix revolucionó la guitarra eléctrica y el rock. Su técnica innovadora y su sonido psicodélico lo convirtieron en uno de los guitarristas más influyentes de todos los tiempos.",
    yearsActive: "1963-1970",
    vinylRecords: [
      {
        id: "hendrix-1",
        title: "Are You Experienced",
        releaseYear: 1967,
        label: "Track Records",
        price: 159.99,
        stock: 2,
        condition: "Mint",
        format: "LP",
        imageUrl: "/jimi-hendrix-are-you-experienced-album-cover.jpg",
        tracks: ["Purple Haze", "Manic Depression", "Hey Joe", "The Wind Cries Mary", "Fire"],
        description: "El álbum debut que estableció a Hendrix como un genio de la guitarra.",
      },
      {
        id: "hendrix-2",
        title: "Electric Ladyland",
        releaseYear: 1968,
        label: "Reprise Records",
        price: 179.99,
        stock: 1,
        condition: "Near Mint",
        format: "LP",
        imageUrl: "/jimi-hendrix-electric-ladyland-album-cover.jpg",
        tracks: [
          "Voodoo Child (Slight Return)",
          "All Along the Watchtower",
          "Crosstown Traffic",
          "Burning of the Midnight Lamp",
          "1983... (A Merman I Should Turn to Be)",
        ],
        description: "Doble álbum considerado la obra maestra de Hendrix, con 'All Along the Watchtower'.",
      },
    ],
  },
  {
    id: "pink-floyd",
    name: "Pink Floyd",
    genre: "Progressive Rock",
    image: "/pink-floyd-dark-side-moon-vinyl-record.jpg",
    color: "from-indigo-900 to-purple-700",
    bio: "Pink Floyd fue pionera del rock progresivo y psicodélico. Sus álbumes conceptuales y su innovación sonora los convirtieron en una de las bandas más influyentes de la historia.",
    yearsActive: "1965-1995",
    vinylRecords: [
      {
        id: "floyd-1",
        title: "The Dark Side of the Moon",
        releaseYear: 1973,
        label: "Harvest Records",
        price: 169.99,
        stock: 6,
        condition: "Mint",
        format: "LP",
        imageUrl: "/pink-floyd-dark-side-of-the-moon-album-cover-prism.jpg",
        tracks: ["Speak to Me", "Breathe", "Time", "Money", "Us and Them", "Brain Damage", "Eclipse"],
        description: "Uno de los álbumes más vendidos de todos los tiempos, una obra maestra conceptual.",
      },
      {
        id: "floyd-2",
        title: "The Wall",
        releaseYear: 1979,
        label: "Harvest Records",
        price: 189.99,
        stock: 3,
        condition: "Near Mint",
        format: "LP",
        imageUrl: "/pink-floyd-the-wall-album-cover.jpg",
        tracks: ["In the Flesh?", "Another Brick in the Wall (Part 2)", "Mother", "Comfortably Numb", "Run Like Hell"],
        description: "Doble álbum conceptual sobre el aislamiento y la alienación, con 'Comfortably Numb'.",
      },
      {
        id: "floyd-3",
        title: "Wish You Were Here",
        releaseYear: 1975,
        label: "Harvest Records",
        price: 149.99,
        stock: 4,
        condition: "Very Good",
        format: "LP",
        imageUrl: "/pink-floyd-wish-you-were-here-album-cover.jpg",
        tracks: [
          "Shine On You Crazy Diamond (Parts I-V)",
          "Welcome to the Machine",
          "Have a Cigar",
          "Wish You Were Here",
          "Shine On You Crazy Diamond (Parts VI-IX)",
        ],
        description: "Tributo a Syd Barrett, con la emotiva canción título 'Wish You Were Here'.",
      },
    ],
  },
]

export function getArtistById(id: string): ArtistDetail | undefined {
  return artistsData.find((artist) => artist.id === id)
}
