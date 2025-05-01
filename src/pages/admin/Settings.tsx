
import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
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
import { Plus, MoreHorizontal, Edit, Trash } from 'lucide-react';
import { cn } from '@/lib/utils';

const Settings = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulação de envio
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Configurações</h1>

        <Tabs defaultValue="geral" className="w-full">
          <TabsList className="w-full md:w-auto">
            <TabsTrigger value="geral">Geral</TabsTrigger>
            <TabsTrigger value="aparencia">Aparência</TabsTrigger>
            <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
            <TabsTrigger value="usuarios">Usuários</TabsTrigger>
          </TabsList>
          
          <div className="mt-4">
            <TabsContent value="geral">
              <Card>
                <form onSubmit={handleSubmit}>
                  <CardHeader>
                    <CardTitle>Configurações Gerais</CardTitle>
                    <CardDescription>
                      Configure as informações básicas da sua imobiliária.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="site-name">Nome do Site</Label>
                        <Input id="site-name" defaultValue="Lar Imóveis" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="site-url">URL do Site</Label>
                        <Input id="site-url" defaultValue="https://larimoveis.com.br" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email de Contato</Label>
                      <Input id="contact-email" type="email" defaultValue="contato@larimoveis.com.br" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Telefone de Contato</Label>
                      <Input id="contact-phone" defaultValue="(21) 3333-4444" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Endereço</Label>
                      <Input id="address" defaultValue="Av. Rio Branco, 123, Centro - Rio de Janeiro/RJ" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? 'Salvando...' : 'Salvar Alterações'}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
            
            <TabsContent value="aparencia">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações de Aparência</CardTitle>
                  <CardDescription>
                    Personalize a aparência do seu site.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Modo Escuro</h4>
                        <p className="text-sm text-muted-foreground">
                          Ative o modo escuro para o painel administrativo.
                        </p>
                      </div>
                      <Switch />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Mostrar Logotipo</h4>
                        <p className="text-sm text-muted-foreground">
                          Exibir o logotipo no cabeçalho do site.
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Cores Primárias</Label>
                      <div className="grid grid-cols-5 gap-2">
                        {['#0a2342', '#2A4D69', '#4B86B4', '#ADCBE3', '#E7EFF6'].map((color) => (
                          <div
                            key={color}
                            className="h-10 rounded-md cursor-pointer border-2"
                            style={{ backgroundColor: color, borderColor: color === '#0a2342' ? '#000' : 'transparent' }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Cores de Destaque</Label>
                      <div className="grid grid-cols-5 gap-2">
                        {['#e0a458', '#F6C28B', '#FDD8B5', '#F9E9DA', '#FDF5EC'].map((color) => (
                          <div
                            key={color}
                            className="h-10 rounded-md cursor-pointer border-2"
                            style={{ backgroundColor: color, borderColor: color === '#e0a458' ? '#000' : 'transparent' }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Salvar Alterações</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="notificacoes">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações de Notificações</CardTitle>
                  <CardDescription>
                    Gerencie como deseja receber notificações.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Notificações por Email</h4>
                        <p className="text-sm text-muted-foreground">
                          Receber notificações por email quando houver novos contatos.
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Notificações no Sistema</h4>
                        <p className="text-sm text-muted-foreground">
                          Receber notificações no painel administrativo.
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Resumo Diário</h4>
                        <p className="text-sm text-muted-foreground">
                          Receber um resumo diário das atividades.
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Salvar Alterações</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="usuarios">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <div>
                    <CardTitle>Usuários do Sistema</CardTitle>
                    <CardDescription>
                      Gerencie os usuários que têm acesso ao painel administrativo.
                    </CardDescription>
                  </div>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Novo Usuário
                  </Button>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Função</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="w-[80px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { id: 1, name: "Admin Principal", email: "admin@larimoveis.com.br", role: "Administrador", active: true },
                        { id: 2, name: "Maria Oliveira", email: "maria@larimoveis.com.br", role: "Editor", active: true },
                        { id: 3, name: "João Santos", email: "joao@larimoveis.com.br", role: "Visualizador", active: true },
                        { id: 4, name: "Carlos Silva", email: "carlos@larimoveis.com.br", role: "Editor", active: false },
                      ].map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.role}</TableCell>
                          <TableCell>
                            <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${user.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                              {user.active ? 'Ativo' : 'Inativo'}
                            </div>
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
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Settings;
