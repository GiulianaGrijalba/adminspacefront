import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import React from 'react'

const UsuariosView = () => {
  return (
    
    <Tabs defaultValue="users">
  <TabsContent value="users" className="space-y-4">

          <Card>
            <CardHeader>
              <CardTitle>Gestión de Usuarios</CardTitle>
              <CardDescription>Administre propietarios e inquilinos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-4 gap-4 p-4 font-medium">
                  <div>Nombre</div>
                  <div>Email</div>
                  <div>Rol</div>
                  <div>Estado</div>
                </div>
                <div className="divide-y">
                  <div className="grid grid-cols-4 gap-4 p-4">
                    <div>Juan Pérez</div>
                    <div>juan@ejemplo.com</div>
                    <div>Propietario</div>
                    <div className="font-medium text-green-600">Activo</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 p-4">
                    <div>María López</div>
                    <div>maria@ejemplo.com</div>
                    <div>Inquilino</div>
                    <div className="font-medium text-green-600">Activo</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 p-4">
                    <div>Carlos Gómez</div>
                    <div>carlos@ejemplo.com</div>
                    <div>Propietario</div>
                    <div className="font-medium text-red-600">Inactivo</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        </Tabs>
)
}
export default UsuariosView