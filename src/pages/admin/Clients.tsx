
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

const Clients = () => {
  // Dados de exemplo para os clientes
  const clients = [
    { id: 1, name: "Ana Silva", email: "ana.silva@email.com", phone: "(21) 98765-4321", status: "Ativo", lastContact: "10/05/2025" },
    { id: 2, name: "Carlos Mendes", email: "carlos.mendes@email.com", phone: "(21) 99876-5432", status: "Inativo", lastContact: "28/04/2025" },
    { id: 3, name: "Maria Oliveira", email: "maria.oliveira@email.com", phone: "(21) 97654-3210", status: "Ativo", lastContact: "05/05/2025" },
    { id: 4, name: "João Santos", email: "joao.santos@email.com", phone: "(21) 96543-2109", status: "Ativo", lastContact: "01/05/2025" },
    { id: 5, name: "Fernanda Lima", email: "fernanda.lima@email.com", phone: "(21) 95432-1098", status: "Ativo", lastContact: "08/05/2025" },
    { id: 6, name: "Ricardo Alves", email: "ricardo.alves@email.com", phone: "(21) 94321-0987", status: "Inativo", lastContact: "15/04/2025" },
    { id: 7, name: "Patricia Costa", email: "patricia.costa@email.com", phone: "(21) 93210-9876", status: "Ativo", lastContact: "03/05/2025" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Clientes</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Novo Cliente
          </Button>
        </div>

        <Card>
          <div className="p-4">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Pesquisar clientes..."
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
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Último Contato</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell className="font-medium">{client.name}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>{client.phone}</TableCell>
                  <TableCell>
                    <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${client.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {client.status}
                    </div>
                  </TableCell>
                  <TableCell>{client.lastContact}</TableCell>
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

export default Clients;
