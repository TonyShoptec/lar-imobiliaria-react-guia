
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-real-primary font-bold text-2xl font-playfair">Lar</span>
              <span className="text-real-secondary font-playfair">Imóveis</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-real-primary font-medium transition-colors">
              Início
            </Link>
            <Link to="/imoveis" className="text-gray-700 hover:text-real-primary font-medium transition-colors">
              Imóveis
            </Link>
            <Link to="/sobre" className="text-gray-700 hover:text-real-primary font-medium transition-colors">
              Sobre Nós
            </Link>
            <Link to="/contato" className="text-gray-700 hover:text-real-primary font-medium transition-colors">
              Contato
            </Link>
            <Button className="bg-real-primary hover:bg-opacity-90 text-white">
              Anuncie seu imóvel
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-real-primary font-medium px-2 py-2 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/imoveis" 
                className="text-gray-700 hover:text-real-primary font-medium px-2 py-2 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Imóveis
              </Link>
              <Link 
                to="/sobre" 
                className="text-gray-700 hover:text-real-primary font-medium px-2 py-2 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link 
                to="/contato" 
                className="text-gray-700 hover:text-real-primary font-medium px-2 py-2 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Button className="bg-real-primary hover:bg-opacity-90 text-white w-full">
                Anuncie seu imóvel
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
