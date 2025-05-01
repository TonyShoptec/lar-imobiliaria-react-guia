
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

const SearchBar = () => {
  const navigate = useNavigate();
  const [tipo, setTipo] = useState('todos');
  const [operacao, setOperacao] = useState('comprar');
  const [preco, setPreco] = useState('');
  const [localizacao, setLocalizacao] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construir a URL com os parâmetros da busca
    const params = new URLSearchParams();
    if (tipo !== 'todos') params.append('tipo', tipo);
    if (operacao) params.append('operacao', operacao);
    if (preco) params.append('preco', preco);
    if (localizacao) params.append('localizacao', localizacao);
    
    // Navegar para a página de imóveis com os parâmetros
    navigate(`/imoveis?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 -mt-16 relative z-20 mx-4 lg:mx-auto max-w-5xl border border-gray-100">
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de imóvel</label>
          <Select value={tipo} onValueChange={setTipo}>
            <SelectTrigger>
              <SelectValue placeholder="Tipo de imóvel" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos os tipos</SelectItem>
              <SelectItem value="casa">Casa</SelectItem>
              <SelectItem value="apartamento">Apartamento</SelectItem>
              <SelectItem value="cobertura">Cobertura</SelectItem>
              <SelectItem value="terreno">Terreno</SelectItem>
              <SelectItem value="comercial">Comercial</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Operação</label>
          <Select value={operacao} onValueChange={setOperacao}>
            <SelectTrigger>
              <SelectValue placeholder="Comprar ou alugar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="comprar">Comprar</SelectItem>
              <SelectItem value="alugar">Alugar</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Localização</label>
          <Input
            type="text"
            placeholder="Bairro, cidade..."
            value={localizacao}
            onChange={(e) => setLocalizacao(e.target.value)}
          />
        </div>

        <div>
          <Button type="submit" className="w-full bg-real-primary hover:bg-opacity-90">
            <Search className="mr-2 h-4 w-4" /> Buscar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
