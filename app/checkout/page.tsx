"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCart } from "@/lib/cart-context"
import { ArrowLeft, CreditCard, Disc3, CheckCircle2 } from "lucide-react"
import { CartButton } from "@/components/cart-button"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, totalPrice, totalItems, clearCart } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsProcessing(false)
    setOrderComplete(true)
    clearCart()

    // Redirect to home after 3 seconds
    setTimeout(() => {
      router.push("/")
    }, 3000)
  }

  if (items.length === 0 && !orderComplete) {
    router.push("/cart")
    return null
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 flex items-center justify-center p-4">
        <Card className="max-w-md w-full border-purple-800/50 bg-black/60 backdrop-blur-sm text-center">
          <CardContent className="p-12">
            <div className="mb-6">
              <CheckCircle2 className="h-20 w-20 text-green-500 mx-auto" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">¡Pedido Confirmado!</h1>
            <p className="text-purple-300 mb-6">
              Gracias por tu compra. Recibirás un email de confirmación con los detalles de tu pedido.
            </p>
            <p className="text-sm text-muted-foreground">Redirigiendo a la tienda...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <header className="border-b border-purple-800/30 bg-black/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/cart">
              <Button variant="ghost" className="text-purple-300 hover:text-purple-100 hover:bg-purple-900/50">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al carrito
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
        <h1 className="text-4xl font-bold text-white mb-8">Finalizar Compra</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Card className="border-purple-800/50 bg-black/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Información de Envío</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-purple-300">
                      Nombre Completo
                    </Label>
                    <Input
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="bg-black/40 border-purple-800/50 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-purple-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-black/40 border-purple-800/50 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-purple-300">
                      Dirección
                    </Label>
                    <Input
                      id="address"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="bg-black/40 border-purple-800/50 text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-purple-300">
                        Ciudad
                      </Label>
                      <Input
                        id="city"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="bg-black/40 border-purple-800/50 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode" className="text-purple-300">
                        Código Postal
                      </Label>
                      <Input
                        id="postalCode"
                        required
                        value={formData.postalCode}
                        onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                        className="bg-black/40 border-purple-800/50 text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-purple-300">
                      País
                    </Label>
                    <Input
                      id="country"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="bg-black/40 border-purple-800/50 text-white"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-800/50 bg-black/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Información de Pago
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber" className="text-purple-300">
                      Número de Tarjeta
                    </Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      required
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      className="bg-black/40 border-purple-800/50 text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardExpiry" className="text-purple-300">
                        Fecha de Expiración
                      </Label>
                      <Input
                        id="cardExpiry"
                        placeholder="MM/AA"
                        required
                        value={formData.cardExpiry}
                        onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                        className="bg-black/40 border-purple-800/50 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardCvc" className="text-purple-300">
                        CVC
                      </Label>
                      <Input
                        id="cardCvc"
                        placeholder="123"
                        required
                        value={formData.cardCvc}
                        onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                        className="bg-black/40 border-purple-800/50 text-white"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg py-6"
              >
                {isProcessing ? "Procesando..." : `Pagar $${totalPrice.toFixed(2)}`}
              </Button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <Card className="border-purple-800/50 bg-black/60 backdrop-blur-sm sticky top-24">
              <CardHeader>
                <CardTitle className="text-white">Resumen del Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0 bg-gradient-to-br from-purple-900/50 to-indigo-900/50">
                        <img
                          src={item.imageUrl || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">{item.title}</p>
                        <p className="text-xs text-purple-300">{item.artistName}</p>
                        <p className="text-sm text-purple-400">
                          {item.quantity} x ${item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-purple-800/50 pt-4 space-y-2">
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
                  <div className="border-t border-purple-800/50 pt-2">
                    <div className="flex justify-between text-white text-xl font-bold">
                      <span>Total</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
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
