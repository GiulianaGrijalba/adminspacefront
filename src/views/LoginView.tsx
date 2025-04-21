'use client'
import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Building, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { ILoginProps } from "@/types"// o donde tengas la interfaz

export default function LoginView() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState<ILoginProps>({
    Email: "",
    Password: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
  
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // 👈 Necesario para recibir cookies
        body: JSON.stringify(formData)
      })
  
      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.message?.join(", ") || "Error al iniciar sesión")
      }
  
      const { user } = await res.json()
      console.log("Login exitoso:", user)
  
      // Redirección por rol
      switch (user.Role.toLowerCase()) {
        case "admin":
          router.push("/dashboard/admin")
          break
        case "inquilino":
          router.push("/dashboard/inquilino")
          break
        case "propietario":
          router.push("/dashboard/propietario")
          break
        default:
          router.push("/")
      }
    } catch (err: any) {
      console.error("Error de login:", err.message)
    } finally {
      setIsLoading(false)
    }
  }
  
  

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <Link href="/" className="mb-8 flex items-center gap-2 text-xl font-bold">
        <Building className="h-6 w-6" />
        <span>GestorConsorcios</span>
      </Link>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Iniciar Sesión</CardTitle>
          <CardDescription>Ingrese sus credenciales para acceder a su cuenta</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="Email">Correo electrónico</Label>
              <Input
                id="Email"
                type="email"
                placeholder="ejemplo@correo.com"
                value={formData.Email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="Password">Contraseña</Label>
                <Link
                  href="/auth/forgot-password"
                  className="text-xs text-primary hover:underline"
                >
                  ¿Olvidó su contraseña?
                </Link>
              </div>
              <Input
                id="Password"
                type="password"
                value={formData.Password}
                onChange={handleChange}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Iniciando sesión...
                </>
              ) : (
                "Iniciar Sesión"
              )}
            </Button>
            <p className="text-center text-sm text-gray-500">
              ¿No tiene una cuenta?{" "}
              <Link href="/register" className="text-primary hover:underline">
                Registrarse
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
