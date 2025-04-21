'use client'

import { CreditCard, FileText, Home, LayoutDashboard, LogOut, Settings } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ReactNode } from "react"

const navItems = [
  { href: ".", label: "Dashboard", icon: LayoutDashboard },
  { href: "inquilino/propiedades", label: "Mi unidad", icon: Home },
  { href: "inquilino/pagos", label: "Pagos", icon: CreditCard },
  { href: "inquilino/reservas", label: "Reservas", icon: FileText },
  { href: "inquilino/mantenimiento", label: "Mantenimiento", icon: Settings },
]


export default function InquilinoLayout({ children }: { children: ReactNode }) {
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
        <div className="mb-8 text-2xl font-bold">Inquilino</div>
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

    {/* <div className="min-h-screen bg-muted/40"> */}
      {/* Header */}
      {/* <header className="bg-white border-b px-6 py-4 shadow-sm"> */}
        {/* <h2 className="text-xl font-semibold tracking-tight">Portal del Inquilino</h2> */}
      {/* </header> */}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
    // </div>
  )
}
