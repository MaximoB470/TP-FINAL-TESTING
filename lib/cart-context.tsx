"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { VinylRecord } from "@/lib/artists-data"

interface CartItem extends VinylRecord {
  quantity: number
  artistName: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (vinyl: VinylRecord, artistName: string) => void
  removeItem: (vinylId: string) => void
  updateQuantity: (vinylId: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("vinyl-cart")
    if (savedCart) {
      setItems(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("vinyl-cart", JSON.stringify(items))
  }, [items])

  const addItem = (vinyl: VinylRecord, artistName: string) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === vinyl.id)
      if (existingItem) {
        // Increase quantity if item already in cart
        return currentItems.map((item) =>
          item.id === vinyl.id ? { ...item, quantity: Math.min(item.quantity + 1, vinyl.stock) } : item,
        )
      }
      // Add new item to cart
      return [...currentItems, { ...vinyl, quantity: 1, artistName }]
    })
  }

  const removeItem = (vinylId: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== vinylId))
  }

  const updateQuantity = (vinylId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(vinylId)
      return
    }
    setItems((currentItems) =>
      currentItems.map((item) => (item.id === vinylId ? { ...item, quantity: Math.min(quantity, item.stock) } : item)),
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
