"use client"

import Link from "next/link"
import { Building, CreditCard, DollarSign, LayoutDashboard, LogOut, Users } from "lucide-react"
import type { ReactNode } from "react"
import { useRouter } from "next/navigation"


const navItems = [
  { href: ".", label: "Dashboard", icon: LayoutDashboard }, 
  { href: "admin/propiedades", label: "Propiedades", icon: Building },
  { href: "admin/usuarios", label: "Usuarios", icon: Users },
  { href: "admin/finanzas", label: "Finanzas", icon: DollarSign },
  { href: "admin/pagos", label: "Pagos", icon: CreditCard },
]

export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter()
  
  const handleLogout = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    })
  
    localStorage.removeItem("token")
    localStorage.removeItem("user")
  
    router.push("/login")
  }
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white p-6 shadow-sm">
        <div className="mb-8 text-2xl font-bold">Administrador</div>
        <nav className="space-y-2">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-black transition"
            >
              <Icon className="h-5 w-5" />
              {label}
            </Link>
          ))}
        </nav>

      {/* BOTON Logout - CIERRE DE SESION*/}
        <hr className="my-4" />
<button
  onClick={handleLogout}
  className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-100 transition"
>
  <LogOut className="h-5 w-5" />
  Cerrar sesión
</button>

  </aside>
  
      {/* Contenido principal */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  )
}
