"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"

export function CartButton() {
  const { totalItems } = useCart()

  return (
    <Link href="/cart">
      <Button
        variant="outline"
        className="relative border-purple-500 text-purple-300 hover:bg-purple-900/50 bg-transparent"
      >
        <ShoppingCart className="h-5 w-5" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Button>
    </Link>
  )
}
