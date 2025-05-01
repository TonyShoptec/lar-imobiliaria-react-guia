
import { NavLink } from 'react-router-dom';
import { Home, ListOrdered, Users, Settings, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    {
      title: 'Dashboard',
      icon: <Home className="h-5 w-5" />,
      path: '/admin',
    },
    {
      title: 'Imóveis',
      icon: <ListOrdered className="h-5 w-5" />,
      path: '/admin/imoveis',
    },
    {
      title: 'Clientes',
      icon: <Users className="h-5 w-5" />,
      path: '/admin/clientes',
    },
    {
      title: 'Configurações',
      icon: <Settings className="h-5 w-5" />,
      path: '/admin/configuracoes',
    },
  ];

  return (
    <aside 
      className={cn(
        "bg-real-primary text-white transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        {!collapsed && (
          <span className="font-bold text-xl">Lar Imóveis</span>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white hover:bg-white/10" 
          onClick={toggleSidebar}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      <nav className="flex-1 p-2">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => cn(
                  "flex items-center px-3 py-2 rounded-md transition-colors",
                  isActive 
                    ? "bg-white/10 text-white" 
                    : "text-white/70 hover:bg-white/5 hover:text-white",
                  collapsed ? "justify-center" : "justify-start"
                )}
              >
                {item.icon}
                {!collapsed && (
                  <span className="ml-3">{item.title}</span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
