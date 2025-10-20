import { RegisterForm } from "@/components/register-form"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Vinyl Legends</h1>
          <p className="text-muted-foreground">Únete a la comunidad de coleccionistas</p>
        </div>
        <RegisterForm />
      </div>
    </div>
  )
}
