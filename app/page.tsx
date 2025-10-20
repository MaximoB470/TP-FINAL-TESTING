import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Music, Disc3 } from "lucide-react"
import { CartButton } from "@/components/cart-button"

const artists = [
  {
    id: "frank-sinatra",
    name: "Frank Sinatra",
    genre: "Jazz / Swing",
    image: "/frank-sinatra-vintage-vinyl-record-portrait.jpg",
    color: "from-purple-900 to-purple-700",
  },
  {
    id: "prince",
    name: "Prince",
    genre: "Funk / Rock / Pop",
    image: "/prince-purple-rain-vinyl-record-portrait.jpg",
    color: "from-violet-900 to-purple-600",
  },
  {
    id: "elvis-presley",
    name: "Elvis Presley",
    genre: "Rock and Roll",
    image: "/elvis-presley-vintage-vinyl-record-portrait.jpg",
    color: "from-purple-800 to-indigo-700",
  },
  {
    id: "queen",
    name: "Queen",
    genre: "Rock",
    image: "/queen-band-vintage-vinyl-record.jpg",
    color: "from-fuchsia-900 to-purple-700",
  },
  {
    id: "jimi-hendrix",
    name: "Jimi Hendrix",
    genre: "Rock / Blues",
    image: "/jimi-hendrix-psychedelic-vinyl-record-portrait.jpg",
    color: "from-purple-900 to-violet-800",
  },
  {
    id: "pink-floyd",
    name: "Pink Floyd",
    genre: "Progressive Rock",
    image: "/pink-floyd-dark-side-moon-vinyl-record.jpg",
    color: "from-indigo-900 to-purple-700",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Header */}
      <header className="border-b border-purple-800/30 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Disc3 className="h-10 w-10 text-purple-400" />
              <div>
                <h1 className="text-3xl font-bold text-white">Vinyl Legends</h1>
                <p className="text-sm text-purple-300">Colección de Vinilos Clásicos</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CartButton />
              <Link href="/register">
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-300 hover:bg-purple-900/50 bg-transparent"
                >
                  Registrarse
                </Button>
              </Link>
              <Link href="/login">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Iniciar Sesión</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-5xl font-bold text-white md:text-6xl">Los Mejores Vinilos de la Historia</h2>
          <p className="mb-8 text-xl text-purple-200 leading-relaxed">
            Descubre la colección más exclusiva de vinilos de artistas legendarios. Cada disco es una pieza de historia
            musical.
          </p>
          <div className="flex items-center justify-center gap-2 text-purple-300">
            <Music className="h-5 w-5" />
            <span className="text-sm">Calidad de audio superior • Ediciones originales • Envío seguro</span>
          </div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="container mx-auto px-4 pb-20">
        <h3 className="mb-10 text-center text-3xl font-bold text-white">Artistas Disponibles</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist) => (
            <Link key={artist.id} href={`/artist/${artist.id}`}>
              <Card className="group overflow-hidden border-purple-800/50 bg-black/60 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/50">
                <div className={`relative h-64 bg-gradient-to-br ${artist.color} overflow-hidden`}>
                  <img
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="mb-1 text-2xl font-bold text-white">{artist.name}</h4>
                    <p className="text-sm text-purple-200">{artist.genre}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Ver Colección</Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-800/30 bg-black/60 py-8">
        <div className="container mx-auto px-4 text-center text-purple-300">
          <p className="text-sm">© 2025 Vinyl Legends. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
