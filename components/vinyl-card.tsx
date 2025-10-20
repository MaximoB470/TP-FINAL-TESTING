"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Package, Check } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/lib/cart-context"
import type { VinylRecord } from "@/lib/artists-data"

interface VinylCardProps {
  vinyl: VinylRecord
  artistName: string
}

export function VinylCard({ vinyl, artistName }: VinylCardProps) {
  const { addItem } = useCart()
  const [justAdded, setJustAdded] = useState(false)
  const isLowStock = vinyl.stock <= 2
  const isOutOfStock = vinyl.stock === 0

  const handleAddToCart = () => {
    addItem(vinyl, artistName)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 2000)
  }

  return (
    <Card className="group overflow-hidden border-purple-800/50 bg-black/60 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/30">
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-purple-900/50 to-indigo-900/50">
        <img
          src={vinyl.imageUrl || "/placeholder.svg"}
          alt={vinyl.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <Badge variant="secondary" className="bg-black/70 text-purple-300 border-purple-500/50">
            {vinyl.format}
          </Badge>
          {isLowStock && !isOutOfStock && (
            <Badge variant="destructive" className="bg-orange-600/80">
              ¡Últimas unidades!
            </Badge>
          )}
          {isOutOfStock && (
            <Badge variant="destructive" className="bg-red-600/80">
              Agotado
            </Badge>
          )}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">{vinyl.title}</h3>
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-purple-300">{vinyl.releaseYear}</p>
          <p className="text-sm text-purple-300">{vinyl.label}</p>
        </div>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{vinyl.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-purple-400">${vinyl.price}</p>
            <p className="text-xs text-muted-foreground">Condición: {vinyl.condition}</p>
          </div>
          <div className="flex items-center gap-1 text-purple-300">
            <Package className="h-4 w-4" />
            <span className="text-sm">{vinyl.stock} disponibles</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all"
          disabled={isOutOfStock || justAdded}
          onClick={handleAddToCart}
        >
          {justAdded ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Agregado
            </>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" />
              {isOutOfStock ? "Agotado" : "Agregar al carrito"}
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
