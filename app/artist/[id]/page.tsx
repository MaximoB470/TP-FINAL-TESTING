import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { VinylCard } from "@/components/vinyl-card"
import { getArtistById } from "@/lib/artists-data"
import { ArrowLeft, Music2, Calendar, Disc3 } from "lucide-react"
import { CartButton } from "@/components/cart-button"

export default function ArtistPage({ params }: { params: { id: string } }) {
  const artist = getArtistById(params.id)

  if (!artist) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Header */}
      <header className="border-b border-purple-800/30 bg-black/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="text-purple-300 hover:text-purple-100 hover:bg-purple-900/50">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a la tienda
              </Button>
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Disc3 className="h-6 w-6 text-purple-400" />
                <span className="text-lg font-bold text-white">Vinyl Legends</span>
              </div>
              <CartButton />
            </div>
          </div>
        </div>
      </header>

      {/* Artist Hero Section */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${artist.color} opacity-30`} />
        <div className="container mx-auto px-4 py-16 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-purple-500/50 shadow-2xl shadow-purple-500/50">
                <img
                  src={artist.image || "/placeholder.svg"}
                  alt={artist.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">{artist.name}</h1>
                <p className="text-2xl text-purple-300 mb-4">{artist.genre}</p>
                <div className="flex items-center gap-4 text-purple-200">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>{artist.yearsActive}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Music2 className="h-5 w-5" />
                    <span>{artist.vinylRecords.length} vinilos disponibles</span>
                  </div>
                </div>
              </div>
              <p className="text-lg text-purple-100 leading-relaxed">{artist.bio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vinyl Collection */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Colección de Vinilos</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artist.vinylRecords.map((vinyl) => (
            <VinylCard key={vinyl.id} vinyl={vinyl} artistName={artist.name} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-800/30 bg-black/60 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-purple-300">
          <p className="text-sm">© 2025 Vinyl Legends. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
