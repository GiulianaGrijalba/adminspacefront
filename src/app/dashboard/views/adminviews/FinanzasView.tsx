import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import React from 'react'

const FinanzasView = () => {
  return (
    
    <Tabs  defaultValue="finances">
     
      <TabsContent value="finances" className="space-y-4">
<Card>
  <CardHeader>
    <CardTitle>Gestión Financiera</CardTitle>
    <CardDescription>Administre ingresos y gastos del consorcio</CardDescription>
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
          <div>Expensas Edificio Norte</div>
          <div>$5,200</div>
          <div>01/05/2024</div>
          <div className="font-medium text-green-600">Pagado</div>
        </div>
        <div className="grid grid-cols-4 gap-4 p-4">
          <div>Mantenimiento ascensores</div>
          <div>$1,800</div>
          <div>15/04/2024</div>
          <div className="font-medium text-green-600">Pagado</div>
        </div>
        <div className="grid grid-cols-4 gap-4 p-4">
          <div>Reparación terraza</div>
          <div>$3,500</div>
          <div>10/05/2024</div>
          <div className="font-medium text-yellow-600">Pendiente</div>
        </div>
      </div>
    </div>
  </CardContent>
</Card>
</TabsContent>
</Tabs>

)
}

export default FinanzasView