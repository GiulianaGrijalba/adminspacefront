import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"

import React from 'react'

const PropiedadesView = () => {
  return (

   <Tabs  defaultValue="properties">

<TabsContent value="properties" className="space-y-4">
<Card>
  <CardHeader>
    <CardTitle>Gestión de Propiedades</CardTitle>
    <CardDescription>Administre todas las propiedades del consorcio</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="rounded-md border">
      <div className="grid grid-cols-4 gap-4 p-4 font-medium">
        <div>Nombre</div>
        <div>Dirección</div>
        <div>Unidades</div>
        <div>Estado</div>
      </div>
      <div className="divide-y">
        <div className="grid grid-cols-4 gap-4 p-4">
          <div>Edificio Norte</div>
          <div>Av. Principal 123</div>
          <div>24</div>
          <div className="font-medium text-green-600">Activo</div>
        </div>
        <div className="grid grid-cols-4 gap-4 p-4">
          <div>Edificio Sur</div>
          <div>Calle 45 #789</div>
          <div>18</div>
          <div className="font-medium text-green-600">Activo</div>
        </div>
        <div className="grid grid-cols-4 gap-4 p-4">
          <div>Residencial Este</div>
          <div>Av. Libertad 456</div>
          <div>12</div>
          <div className="font-medium text-yellow-600">En construcción</div>
        </div>
      </div>
    </div>
  </CardContent>
</Card>
</TabsContent>
</Tabs>

)
}

export default PropiedadesView