
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, BarChart } from 'lucide-react';
import { cn } from '@/lib/utils';

const Dashboard = () => {
  // Dados de exemplo para o dashboard
  const stats = [
    {
      title: "Total de Imóveis",
      value: "124",
      change: "+12% do mês passado",
      icon: <BarChart className="h-8 w-8 text-real-secondary" />,
    },
    {
      title: "Visualizações",
      value: "2,543",
      change: "+18% do mês passado",
      icon: <AreaChart className="h-8 w-8 text-real-secondary" />,
    },
    {
      title: "Novos Clientes",
      value: "45",
      change: "+7% do mês passado",
      icon: <BarChart className="h-8 w-8 text-real-secondary" />,
    },
    {
      title: "Contatos",
      value: "198",
      change: "+24% do mês passado",
      icon: <AreaChart className="h-8 w-8 text-real-secondary" />,
    }
  ];

  const recentProperties = [
    { id: 1, title: "Apartamento em Copacabana", address: "Av. Atlântica, 1500", price: "R$ 850.000", status: "Ativo" },
    { id: 2, title: "Casa em Botafogo", address: "Rua das Palmeiras, 123", price: "R$ 1.200.000", status: "Pendente" },
    { id: 3, title: "Cobertura no Leblon", address: "Av. Delfim Moreira, 234", price: "R$ 3.500.000", status: "Ativo" },
    { id: 4, title: "Apartamento na Barra", address: "Av. Lúcio Costa, 789", price: "R$ 750.000", status: "Vendido" },
    { id: 5, title: "Casa em Ipanema", address: "Rua Prudente de Moraes, 456", price: "R$ 2.100.000", status: "Ativo" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Imóveis Recentes</CardTitle>
              <CardDescription>
                Últimos imóveis cadastrados na plataforma
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="pb-2 text-left font-medium">Imóvel</th>
                        <th className="pb-2 text-left font-medium">Preço</th>
                        <th className="pb-2 text-left font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentProperties.map((property) => (
                        <tr key={property.id} className="border-b last:border-none">
                          <td className="py-3">
                            <div>
                              <div className="font-medium">{property.title}</div>
                              <div className="text-sm text-muted-foreground">{property.address}</div>
                            </div>
                          </td>
                          <td className="py-3">{property.price}</td>
                          <td className="py-3">
                            <div className={cn(
                              "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                              property.status === "Ativo" ? "bg-green-100 text-green-800" :
                              property.status === "Pendente" ? "bg-yellow-100 text-yellow-800" :
                              "bg-blue-100 text-blue-800"
                            )}>
                              {property.status}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Atividades Recentes</CardTitle>
              <CardDescription>
                Últimas ações realizadas no sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { user: "Ana Silva", action: "cadastrou um novo imóvel", time: "há 2 horas" },
                  { user: "Carlos Mendes", action: "atualizou informações de cliente", time: "há 5 horas" },
                  { user: "Maria Oliveira", action: "removeu um imóvel", time: "há 6 horas" },
                  { user: "João Santos", action: "adicionou novas fotos", time: "há 1 dia" },
                  { user: "Fernanda Lima", action: "alterou status de imóvel", time: "há 1 dia" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="h-8 w-8 rounded-full bg-real-primary flex items-center justify-center text-white">
                      {activity.user.charAt(0)}
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        <span className="font-semibold">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
