import Link from "next/link"
import { Building, ChevronRight, Key, ShieldCheck, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomeView() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Building className="h-6 w-6" />
            <span>Gestor de Consorcios</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <Link href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Características</Link>
            <Link href="#pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Precios</Link>
            <Link href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Contacto</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login"><Button variant="ghost" size="sm">Iniciar Sesión</Button></Link>
            <Link href="/register"><Button size="sm">Registrarse</Button></Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-24 md:py-32">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Gestión de consorcios simplificada
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Administre sus propiedades, inquilinos y pagos en un solo lugar. Una plataforma completa para administradores, propietarios e inquilinos.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button size="lg" className="gap-2">
                    Comenzar ahora
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#features">
                  <Button size="lg" variant="outline">
                    Ver características
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
  <div className="relative h-[300px] w-[300px] rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 p-6 shadow-xl ring-1 ring-primary/20 hover:scale-105 transition-transform duration-300 ease-in-out">
    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
      <Building className="h-28 w-28 text-primary drop-shadow-md animate-pulse-slow" />
      <h1 className="text-xl font-semibold text-primary">Gestor de Consorcios</h1>
    </div>
  </div>
</div>

          </div>
        </section>

        <section id="features" className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="mb-12 text-center text-3xl font-bold">Características principales</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[{
              icon: <ShieldCheck className="h-8 w-8 text-primary" />,
              title: "Administración segura",
              desc: "Gestione sus propiedades con seguridad y transparencia para todos los involucrados."
            }, {
              icon: <Key className="h-8 w-8 text-primary" />,
              title: "Acceso por roles",
              desc: "Diferentes niveles de acceso para administradores, propietarios e inquilinos."
            }, {
              icon: <Users className="h-8 w-8 text-primary" />,
              title: "Gestión de inquilinos",
              desc: "Administre fácilmente a los inquilinos, sus pagos y solicitudes de mantenimiento."
            }].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 rounded-lg border p-6 text-center">
                <div className="rounded-full bg-primary/10 p-3">{feature.icon}</div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">Planes disponibles</h2>
            <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col rounded-lg border bg-background p-6">
                <h3 className="text-xl font-bold">Básico</h3>
                <div className="my-4">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="text-gray-500">/mes</span>
                </div>
                <ul className="mb-6 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Hasta 5 propiedades</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Gestión básica de inquilinos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Soporte por email</span>
                  </li>
                </ul>
                <Button className="mt-auto">Seleccionar plan</Button>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-lg">
                <div className="mb-4 rounded-full bg-primary/10 px-3 py-1 text-center text-sm font-medium text-primary">
                  Popular
                </div>
                <h3 className="text-xl font-bold">Profesional</h3>
                <div className="my-4">
                  <span className="text-3xl font-bold">$79</span>
                  <span className="text-gray-500">/mes</span>
                </div>
                <ul className="mb-6 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Hasta 20 propiedades</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Gestión avanzada de inquilinos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Reportes financieros</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Soporte prioritario</span>
                  </li>
                </ul>
                <Button className="mt-auto">Seleccionar plan</Button>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6">
                <h3 className="text-xl font-bold">Empresarial</h3>
                <div className="my-4">
                  <span className="text-3xl font-bold">$199</span>
                  <span className="text-gray-500">/mes</span>
                </div>
                <ul className="mb-6 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Propiedades ilimitadas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Gestión completa de consorcios</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Análisis avanzados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>API personalizada</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Soporte 24/7</span>
                  </li>
                </ul>
                <Button className="mt-auto">Contactar ventas</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-md text-center">
            <h2 className="mb-4 text-3xl font-bold">¿Necesita más información?</h2>
            <p className="mb-6 text-gray-500">
              Contáctenos para obtener más detalles sobre cómo nuestro sistema puede ayudar a su consorcio.
            </p>
            <Button size="lg" className="w-full">Contactar</Button>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 font-bold">
            <Building className="h-5 w-5" />
            <span>Gestor de Consorcios</span>
          </div>
          <p className="text-sm text-gray-500">© 2025 Gestor de Consorcios. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
