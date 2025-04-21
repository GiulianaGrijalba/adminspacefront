'use client'
import { CreditCard, FileText, Home, MessageSquare } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardInquilinoView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Panel de Inquilino</h1>
        <p className="text-muted-foreground">Gestione su unidad, pagos y solicitudes</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mi Unidad</CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Apto 3B</div>
            <p className="text-xs text-muted-foreground">Edificio Norte</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alquiler Mensual</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$850</div>
            <p className="text-xs text-muted-foreground">Vence el 05/05/2024</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Solicitudes</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Solicitudes activas</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Notificaciones</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Notificaciones</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="unit" className="space-y-4">
        <TabsList>
          <TabsTrigger value="unit">Mi Unidad</TabsTrigger>
          <TabsTrigger value="payments">Pagos</TabsTrigger>
          <TabsTrigger value="requests">Solicitudes</TabsTrigger>
        </TabsList>

        <TabsContent value="unit" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Información de la Unidad</CardTitle>
              <CardDescription>Detalles de su unidad alquilada</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Unidad</p>
                    <p>Apartamento 3B</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Edificio</p>
                    <p>Edificio Norte</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Propietario</p>
                    <p>Juan Pérez</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Contrato hasta</p>
                    <p>31/12/2024</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Alquiler mensual</p>
                    <p>$850</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Depósito</p>
                    <p>$1,700</p>
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
                    <div>Alquiler Abril</div>
                    <div>$850</div>
                    <div>05/04/2024</div>
                    <div className="font-medium text-green-600">Pagado</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 p-4">
                    <div>Alquiler Marzo</div>
                    <div>$850</div>
                    <div>05/03/2024</div>
                    <div className="font-medium text-green-600">Pagado</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 p-4">
                    <div>Alquiler Mayo</div>
                    <div>$850</div>
                    <div>05/05/2024</div>
                    <div className="font-medium text-yellow-600">Pendiente</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="requests" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mis Solicitudes</CardTitle>
              <CardDescription>Gestione sus solicitudes de mantenimiento</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-4 gap-4 p-4 font-medium">
                  <div>Solicitud</div>
                  <div>Fecha</div>
                  <div>Estado</div>
                  <div>Acción</div>
                </div>
                <div className="divide-y">
                  <div className="grid grid-cols-4 gap-4 p-4">
                    <div>Reparación grifo baño</div>
                    <div>20/04/2024</div>
                    <div className="font-medium text-green-600">Aprobada</div>
                    <div className="text-primary hover:underline cursor-pointer">Ver detalles</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 p-4">
                    <div>Problema calefacción</div>
                    <div>25/04/2024</div>
                    <div className="font-medium text-yellow-600">En revisión</div>
                    <div className="text-primary hover:underline cursor-pointer">Ver detalles</div>
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
