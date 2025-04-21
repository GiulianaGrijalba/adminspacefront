'use client'

    import { CreditCard, FileText, Home } from "lucide-react"

    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
    import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
    
    export default function DashboardPropietarioView() {
      return (
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Panel de Propietario</h1>
            <p className="text-muted-foreground">Gestione sus propiedades y pagos</p>
          </div>
    
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Mis Propiedades</CardTitle>
                <Home className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Unidades en propiedad</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pagos del Mes</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,250</div>
                <p className="text-xs text-muted-foreground">Vence el 10/05/2024</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Documentos</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">Documentos pendientes</p>
              </CardContent>
            </Card>
          </div>
    
          <Tabs defaultValue="properties" className="space-y-4">
            <TabsList>
              <TabsTrigger value="properties">Mis Propiedades</TabsTrigger>
              <TabsTrigger value="payments">Pagos</TabsTrigger>
              <TabsTrigger value="documents">Documentos</TabsTrigger>
            </TabsList>
    
            <TabsContent value="properties" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Mis Propiedades</CardTitle>
                  <CardDescription>Administre sus unidades en propiedad</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-4 gap-4 p-4 font-medium">
                      <div>Unidad</div>
                      <div>Edificio</div>
                      <div>Estado</div>
                      <div>Inquilino</div>
                    </div>
                    <div className="divide-y">
                      <div className="grid grid-cols-4 gap-4 p-4">
                        <div>Apto 3B</div>
                        <div>Edificio Norte</div>
                        <div className="font-medium text-green-600">Alquilado</div>
                        <div>María López</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-4">
                        <div>Apto 7A</div>
                        <div>Edificio Sur</div>
                        <div className="font-medium text-green-600">Alquilado</div>
                        <div>Pedro Sánchez</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-4">
                        <div>Apto 12C</div>
                        <div>Edificio Norte</div>
                        <div className="font-medium text-yellow-600">Vacante</div>
                        <div>-</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
    
            <TabsContent value="payments" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Historial de Pagos</CardTitle>
                  <CardDescription>Vea sus pagos recientes y pendientes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-4 gap-4 p-4 font-medium">
                      <div>Concepto</div>
                      <div>Monto</div>
                      <div>Fecha</div>
                      <div>Estado</div>
                    </div>
                    <div className="divide-y">
                      <div className="grid grid-cols-4 gap-4 p-4">
                        <div>Expensas Apto 3B</div>
                        <div>$450</div>
                        <div>01/04/2024</div>
                        <div className="font-medium text-green-600">Pagado</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-4">
                        <div>Expensas Apto 7A</div>
                        <div>$380</div>
                        <div>01/04/2024</div>
                        <div className="font-medium text-green-600">Pagado</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-4">
                        <div>Expensas Apto 12C</div>
                        <div>$420</div>
                        <div>01/05/2024</div>
                        <div className="font-medium text-yellow-600">Pendiente</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
    
            <TabsContent value="documents" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Notificaciones</CardTitle>
                  <CardDescription>Acceda a notificaciones importantes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-3 gap-4 p-4 font-medium">
                      <div>Documento</div>
                      <div>Fecha</div>
                      <div>Acción</div>
                    </div>
                    <div className="divide-y">
                      <div className="grid grid-cols-3 gap-4 p-4">
                        <div>Reglamento del consorcio</div>
                        <div>15/01/2024</div>
                        <div className="text-primary hover:underline cursor-pointer">Ver</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 p-4">
                        <div>Contrato de alquiler Apto 3B</div>
                        <div>10/02/2024</div>
                        <div className="text-primary hover:underline cursor-pointer">Ver</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 p-4">
                        <div>Contrato de alquiler Apto 7A</div>
                        <div>05/03/2024</div>
                        <div className="text-primary hover:underline cursor-pointer">Ver</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )
    }
    


