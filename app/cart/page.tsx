"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"
import { ArrowLeft, Trash2, Plus, Minus, ShoppingBag, Disc3 } from "lucide-react"
import { CartButton } from "@/components/cart-button"

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
        <header className="border-b border-purple-800/30 bg-black/40 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/">
                <Button variant="ghost" className="text-purple-300 hover:text-purple-100 hover:bg-purple-900/50">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver a la tienda
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <Disc3 className="h-6 w-6 text-purple-400" />
                <span className="text-lg font-bold text-white">Vinyl Legends</span>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-20">
          <div className="max-w-md mx-auto text-center">
            <ShoppingBag className="h-24 w-24 text-purple-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-white mb-4">Tu carrito está vacío</h1>
            <p className="text-purple-300 mb-8">Explora nuestra colección de vinilos legendarios</p>
            <Link href="/">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">Explorar Vinilos</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
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

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Carrito de Compras</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="border-purple-800/50 bg-black/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-purple-900/50 to-indigo-900/50">
                      <img
                        src={item.imageUrl || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                          <p className="text-sm text-purple-300">{item.artistName}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.releaseYear} • {item.label}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 p-0 border-purple-500 text-purple-300 hover:bg-purple-900/50"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={item.quantity >= item.stock}
                            className="h-8 w-8 p-0 border-purple-500 text-purple-300 hover:bg-purple-900/50"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-2xl font-bold text-purple-400">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="border-purple-800/50 bg-black/60 backdrop-blur-sm sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Resumen del Pedido</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-purple-300">
                    <span>
                      Subtotal ({totalItems} {totalItems === 1 ? "artículo" : "artículos"})
                    </span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-purple-300">
                    <span>Envío</span>
                    <span>Gratis</span>
                  </div>
                  <div className="border-t border-purple-800/50 pt-4">
                    <div className="flex justify-between text-white text-xl font-bold">
                      <span>Total</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Link href="/checkout">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg py-6">
                    Proceder al Pago
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant="ghost"
                    className="w-full mt-3 text-purple-300 hover:text-purple-100 hover:bg-purple-900/50"
                  >
                    Continuar Comprando
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <footer className="border-t border-purple-800/30 bg-black/60 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-purple-300">
          <p className="text-sm">© 2025 Vinyl Legends. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
