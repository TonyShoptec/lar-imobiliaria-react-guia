
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Imóveis', path: '/imoveis' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-real-primary font-playfair">Lar Imóveis</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-base font-medium transition-colors hover:text-real-secondary",
                  location.pathname === item.path ? "text-real-secondary" : "text-gray-600"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/admin">
              <Button variant="outline">
                Área Administrativa
              </Button>
            </Link>
          </nav>
          
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-600"
              onClick={toggleMenu}
            >
              <span className="sr-only">Abrir menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-md">
          <div className="space-y-1 pb-3 pt-2">
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "block rounded-md px-3 py-2 text-base font-medium",
                  location.pathname === item.path
                    ? "bg-real-primary/10 text-real-primary"
                    : "text-gray-600 hover:bg-gray-100 hover:text-real-primary"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/admin"
              className="block rounded-md px-3 py-2 text-base font-medium text-white bg-real-primary hover:bg-real-primary/90"
              onClick={() => setIsMenuOpen(false)}
            >
              Área Administrativa
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
