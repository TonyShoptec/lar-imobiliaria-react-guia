
import AdminLayout from '@/components/admin/AdminLayout';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Plus, Search, MoreHorizontal, Edit, Trash } from 'lucide-react';
import { cn } from '@/lib/utils';

const Properties = () => {
  // Dados de exemplo para os imóveis
  const properties = [
    { id: 1, title: "Apartamento em Copacabana", address: "Av. Atlântica, 1500", price: "R$ 850.000", status: "Ativo", featured: true },
    { id: 2, title: "Casa em Botafogo", address: "Rua das Palmeiras, 123", price: "R$ 1.200.000", status: "Pendente", featured: false },
    { id: 3, title: "Cobertura no Leblon", address: "Av. Delfim Moreira, 234", price: "R$ 3.500.000", status: "Ativo", featured: true },
    { id: 4, title: "Apartamento na Barra", address: "Av. Lúcio Costa, 789", price: "R$ 750.000", status: "Vendido", featured: false },
    { id: 5, title: "Casa em Ipanema", address: "Rua Prudente de Moraes, 456", price: "R$ 2.100.000", status: "Ativo", featured: true },
    { id: 6, title: "Apartamento no Flamengo", address: "Praia do Flamengo, 123", price: "R$ 950.000", status: "Ativo", featured: false },
    { id: 7, title: "Loft em Vila Isabel", address: "Rua Barão de São Francisco, 345", price: "R$ 550.000", status: "Pendente", featured: false },
    { id: 8, title: "Mansão na Barra", address: "Av. Sernambetiba, 1234", price: "R$ 5.200.000", status: "Ativo", featured: true },
    { id: 9, title: "Studio no Centro", address: "Rua do Lavradio, 50", price: "R$ 320.000", status: "Vendido", featured: false },
    { id: 10, title: "Loja Comercial", address: "Rua Barata Ribeiro, 430", price: "R$ 1.100.000", status: "Ativo", featured: false },
  ];

  return (
    <AdminLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Imóveis</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Novo Imóvel
          </Button>
        </div>

        <Card>
          <div className="p-4">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Pesquisar imóveis..."
                  className="pl-8"
                />
              </div>
              <Button variant="outline">
                Filtrar
              </Button>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Imóvel</TableHead>
                <TableHead>Preço</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Destaque</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {properties.map((property) => (
                <TableRow key={property.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{property.title}</div>
                      <div className="text-sm text-muted-foreground">{property.address}</div>
                    </div>
                  </TableCell>
                  <TableCell>{property.price}</TableCell>
                  <TableCell>
                    <div className={cn(
                      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                      property.status === "Ativo" ? "bg-green-100 text-green-800" :
                      property.status === "Pendente" ? "bg-yellow-100 text-yellow-800" :
                      "bg-blue-100 text-blue-800"
                    )}>
                      {property.status}
                    </div>
                  </TableCell>
                  <TableCell>
                    {property.featured ? (
                      <div className="inline-flex items-center rounded-full px-2.5 py-0.5 bg-real-secondary/20 text-real-secondary text-xs font-medium">
                        Destaque
                      </div>
                    ) : (
                      "—"
                    )}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Abrir menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Editar</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash className="mr-2 h-4 w-4" />
                          <span>Excluir</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Properties;
