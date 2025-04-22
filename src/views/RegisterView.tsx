"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Building, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RegisterView() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    Name: "",
    LastName: "",
    Email: "",
    Password: "",
    Role: "inquilino", // <- corregido
    Phone: ""
  })
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
  
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })
  
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}))
        console.error("Detalle del error:", errorData)
        throw new Error(errorData.message || "Error al registrar")
      }
  
      router.push("/login")
    } catch (error) {
      console.error("Registro fallido:", error)
      alert(`Registro fallido: ${error}`)
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
          <CardTitle className="text-2xl">Crear cuenta</CardTitle>
          <CardDescription>Complete el formulario para registrarse en la plataforma</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="Name">Nombre</Label>
                <Input id="Name" value={formData.Name} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="LastName">Apellido</Label>
                <Input id="LastName" value={formData.LastName} onChange={handleChange} required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="Email">Correo electrónico</Label>
              <Input id="Email" type="email" value={formData.Email} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="Phone">Teléfono</Label>
              <Input id="Phone" type="text" value={formData.Phone} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="Password">Contraseña</Label>
              <Input id="Password" type="password" value={formData.Password} onChange={handleChange} required />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creando cuenta...
                </>
              ) : (
                "Registrarse"
              )}
            </Button>
            <p className="text-center text-sm text-gray-500">
              ¿Ya tiene una cuenta?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Iniciar sesión
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
