
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import PropertyCard, { PropertyProps } from '@/components/PropertyCard';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { ChevronDown, Search, SlidersHorizontal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Dados de exemplo para os imóveis
const allProperties: PropertyProps[] = [
  {
    id: 1,
    title: "Casa de Luxo no Jardim Europa",
    price: 2800000,
    location: "Jardim Europa, São Paulo - SP",
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
    imageUrl: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?q=80&w=1200&auto=format&fit=crop&crop=entropy",
    type: "Casa",
    isForSale: true
  },
  {
    id: 2,
    title: "Apartamento Moderno em Pinheiros",
    price: 850000,
    location: "Pinheiros, São Paulo - SP",
    bedrooms: 2,
    bathrooms: 2,
    area: 85,
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop&crop=entropy",
    type: "Apartamento",
    isForSale: true
  },
  {
    id: 3,
    title: "Cobertura Duplex com Vista Panorâmica",
    price: 1750000,
    location: "Itaim Bibi, São Paulo - SP",
    bedrooms: 3,
    bathrooms: 3,
    area: 180,
    imageUrl: "https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=1200&auto=format&fit=crop&crop=entropy",
    type: "Cobertura",
    isForSale: true
  },
  {
    id: 4,
    title: "Escritório Comercial no Centro",
    price: 7500,
    location: "Centro, São Paulo - SP",
    bedrooms: 0,
    bathrooms: 2,
    area: 120,
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop&crop=entropy",
    type: "Comercial",
    isForSale: false
  },
  {
    id: 5,
    title: "Casa em Condomínio Fechado",
    price: 1200000,
    location: "Alphaville, Barueri - SP",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    imageUrl: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?q=80&w=1200&auto=format&fit=crop&crop=entropy",
    type: "Casa",
    isForSale: true
  },
  {
    id: 6,
    title: "Apartamento para Alugar na Vila Olímpia",
    price: 4500,
    location: "Vila Olímpia, São Paulo - SP",
    bedrooms: 2,
    bathrooms: 1,
    area: 70,
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop&crop=entropy",
    type: "Apartamento",
    isForSale: false
  },
  {
    id: 7,
    title: "Terreno para Construção",
    price: 650000,
    location: "Morumbi, São Paulo - SP",
    bedrooms: 0,
    bathrooms: 0,
    area: 500,
    imageUrl: "https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=1200&auto=format&fit=crop&crop=entropy",
    type: "Terreno",
    isForSale: true
  },
  {
    id: 8,
    title: "Loja Comercial em Shopping",
    price: 12000,
    location: "Moema, São Paulo - SP",
    bedrooms: 0,
    bathrooms: 1,
    area: 45,
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop&crop=entropy",
    type: "Comercial",
    isForSale: false
  }
];

const Properties = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Estado para os filtros
  const [filters, setFilters] = useState({
    tipo: searchParams.get('tipo') || 'todos',
    operacao: searchParams.get('operacao') || 'todos',
    localizacao: searchParams.get('localizacao') || '',
    quartos: 0,
    banheiros: 0,
    precoMin: 0,
    precoMax: 5000000
  });
  
  // Estado para os imóveis filtrados
  const [filteredProperties, setFilteredProperties] = useState<PropertyProps[]>(allProperties);

  // Aplicar os filtros da URL quando a página carrega
  useEffect(() => {
    const urlTipo = searchParams.get('tipo');
    const urlOperacao = searchParams.get('operacao');
    const urlLocalizacao = searchParams.get('localizacao');
    
    // Atualizar os filtros com os parâmetros da URL
    setFilters({
      ...filters,
      tipo: urlTipo || 'todos',
      operacao: urlOperacao === 'comprar' ? 'comprar' : urlOperacao === 'alugar' ? 'alugar' : 'todos',
      localizacao: urlLocalizacao || '',
    });
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Filtrar os imóveis quando os filtros mudam
  useEffect(() => {
    let filtered = [...allProperties];
    
    // Filtrar por tipo
    if (filters.tipo !== 'todos') {
      filtered = filtered.filter(property => property.type.toLowerCase() === filters.tipo);
    }
    
    // Filtrar por operação (comprar ou alugar)
    if (filters.operacao === 'comprar') {
      filtered = filtered.filter(property => property.isForSale);
    } else if (filters.operacao === 'alugar') {
      filtered = filtered.filter(property => !property.isForSale);
    }
    
    // Filtrar por localização
    if (filters.localizacao) {
      const searchTerm = filters.localizacao.toLowerCase();
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(searchTerm)
      );
    }
    
    // Filtrar por número mínimo de quartos
    if (filters.quartos > 0) {
      filtered = filtered.filter(property => property.bedrooms >= filters.quartos);
    }
    
    // Filtrar por número mínimo de banheiros
    if (filters.banheiros > 0) {
      filtered = filtered.filter(property => property.bathrooms >= filters.banheiros);
    }
    
    // Filtrar por preço
    filtered = filtered.filter(property => 
      property.price >= filters.precoMin && property.price <= filters.precoMax
    );
    
    setFilteredProperties(filtered);
  }, [filters]);

  // Atualizar os parâmetros da URL quando os filtros mudam
  const handleFilterChange = (name: string, value: any) => {
    setFilters({
      ...filters,
      [name]: value
    });
    
    // Atualizar os parâmetros da URL
    const newParams = new URLSearchParams(searchParams);
    
    if (value && value !== 'todos' && value !== 0) {
      newParams.set(name, value);
    } else {
      newParams.delete(name);
    }
    
    setSearchParams(newParams);
  };

  // Limpar todos os filtros
  const clearAllFilters = () => {
    setFilters({
      tipo: 'todos',
      operacao: 'todos',
      localizacao: '',
      quartos: 0,
      banheiros: 0,
      precoMin: 0,
      precoMax: 5000000
    });
    
    setSearchParams({});
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-real-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Encontre seu Imóvel</h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Explore nossa seleção de imóveis para compra e aluguel. Use os filtros para encontrar o imóvel perfeito para você.
          </p>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filtros Mobile - Botão de ativação */}
          <div className="lg:hidden mb-6">
            <Button 
              variant="outline" 
              className="w-full flex justify-between items-center"
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            >
              <span className="flex items-center">
                <SlidersHorizontal className="mr-2 h-5 w-5" />
                Filtros
              </span>
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileFiltersOpen ? 'rotate-180' : ''}`} />
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar de Filtros (Desktop) */}
            <div className={`lg:w-1/4 ${mobileFiltersOpen ? 'block' : 'hidden'} lg:block`}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Filtros</h2>
                  <Button 
                    variant="ghost" 
                    className="text-sm text-real-primary"
                    onClick={clearAllFilters}
                  >
                    Limpar
                  </Button>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {/* Tipo de Imóvel */}
                  <AccordionItem value="tipo">
                    <AccordionTrigger className="text-base font-medium">Tipo de Imóvel</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-2">
                        <Select 
                          value={filters.tipo} 
                          onValueChange={(value) => handleFilterChange('tipo', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="todos">Todos os tipos</SelectItem>
                            <SelectItem value="casa">Casa</SelectItem>
                            <SelectItem value="apartamento">Apartamento</SelectItem>
                            <SelectItem value="cobertura">Cobertura</SelectItem>
                            <SelectItem value="comercial">Comercial</SelectItem>
                            <SelectItem value="terreno">Terreno</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  {/* Operação */}
                  <AccordionItem value="operacao">
                    <AccordionTrigger className="text-base font-medium">Operação</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-2">
                        <Select 
                          value={filters.operacao} 
                          onValueChange={(value) => handleFilterChange('operacao', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Tipo de operação" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="todos">Comprar ou Alugar</SelectItem>
                            <SelectItem value="comprar">Comprar</SelectItem>
                            <SelectItem value="alugar">Alugar</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  {/* Localização */}
                  <AccordionItem value="local">
                    <AccordionTrigger className="text-base font-medium">Localização</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-2">
                        <Input 
                          type="text" 
                          placeholder="Bairro, cidade..." 
                          value={filters.localizacao}
                          onChange={(e) => handleFilterChange('localizacao', e.target.value)}
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  {/* Quartos */}
                  <AccordionItem value="quartos">
                    <AccordionTrigger className="text-base font-medium">Quartos</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-2">
                        <Select 
                          value={filters.quartos.toString()} 
                          onValueChange={(value) => handleFilterChange('quartos', parseInt(value))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Número mínimo de quartos" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">Qualquer</SelectItem>
                            <SelectItem value="1">1+</SelectItem>
                            <SelectItem value="2">2+</SelectItem>
                            <SelectItem value="3">3+</SelectItem>
                            <SelectItem value="4">4+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  {/* Banheiros */}
                  <AccordionItem value="banheiros">
                    <AccordionTrigger className="text-base font-medium">Banheiros</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-2">
                        <Select 
                          value={filters.banheiros.toString()} 
                          onValueChange={(value) => handleFilterChange('banheiros', parseInt(value))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Número mínimo de banheiros" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">Qualquer</SelectItem>
                            <SelectItem value="1">1+</SelectItem>
                            <SelectItem value="2">2+</SelectItem>
                            <SelectItem value="3">3+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  {/* Preço */}
                  <AccordionItem value="preco">
                    <AccordionTrigger className="text-base font-medium">Preço</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 pt-2">
                        <div>
                          <label className="text-sm text-gray-600 mb-1 block">
                            Faixa de preço
                          </label>
                          <Slider 
                            value={[filters.precoMin, filters.precoMax]} 
                            min={0} 
                            max={5000000} 
                            step={100000}
                            onValueChange={(values) => {
                              setFilters({
                                ...filters,
                                precoMin: values[0],
                                precoMax: values[1]
                              });
                            }}
                            className="my-6"
                          />
                          <div className="flex justify-between text-sm text-gray-600">
                            <span>
                              {new Intl.NumberFormat('pt-BR', { 
                                style: 'currency', 
                                currency: 'BRL',
                                maximumFractionDigits: 0
                              }).format(filters.precoMin)}
                            </span>
                            <span>
                              {new Intl.NumberFormat('pt-BR', { 
                                style: 'currency', 
                                currency: 'BRL',
                                maximumFractionDigits: 0
                              }).format(filters.precoMax)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            
            {/* Lista de Propriedades */}
            <div className="lg:w-3/4">
              {/* Filtros ativos */}
              {(filters.tipo !== 'todos' || 
                filters.operacao !== 'todos' || 
                filters.localizacao || 
                filters.quartos > 0 || 
                filters.banheiros > 0) && (
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm text-gray-500">Filtros ativos:</span>
                    
                    {filters.tipo !== 'todos' && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        Tipo: {filters.tipo}
                        <button 
                          onClick={() => handleFilterChange('tipo', 'todos')}
                          className="ml-1 text-gray-500 hover:text-gray-700"
                        >
                          &times;
                        </button>
                      </Badge>
                    )}
                    
                    {filters.operacao !== 'todos' && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        {filters.operacao === 'comprar' ? 'Comprar' : 'Alugar'}
                        <button 
                          onClick={() => handleFilterChange('operacao', 'todos')}
                          className="ml-1 text-gray-500 hover:text-gray-700"
                        >
                          &times;
                        </button>
                      </Badge>
                    )}
                    
                    {filters.localizacao && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        Local: {filters.localizacao}
                        <button 
                          onClick={() => handleFilterChange('localizacao', '')}
                          className="ml-1 text-gray-500 hover:text-gray-700"
                        >
                          &times;
                        </button>
                      </Badge>
                    )}
                    
                    {filters.quartos > 0 && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        {filters.quartos}+ quartos
                        <button 
                          onClick={() => handleFilterChange('quartos', 0)}
                          className="ml-1 text-gray-500 hover:text-gray-700"
                        >
                          &times;
                        </button>
                      </Badge>
                    )}
                    
                    {filters.banheiros > 0 && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        {filters.banheiros}+ banheiros
                        <button 
                          onClick={() => handleFilterChange('banheiros', 0)}
                          className="ml-1 text-gray-500 hover:text-gray-700"
                        >
                          &times;
                        </button>
                      </Badge>
                    )}
                    
                    <Button 
                      variant="link" 
                      className="text-sm text-real-primary"
                      onClick={clearAllFilters}
                    >
                      Limpar todos
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Resultados da busca */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">
                  {filteredProperties.length} {filteredProperties.length === 1 ? 'imóvel encontrado' : 'imóveis encontrados'}
                </h2>
                <div className="flex items-center gap-2">
                  <Select defaultValue="relevancia">
                    <SelectTrigger className="w-[160px]">
                      <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevancia">Relevância</SelectItem>
                      <SelectItem value="menorpreco">Menor preço</SelectItem>
                      <SelectItem value="maiorpreco">Maior preço</SelectItem>
                      <SelectItem value="novos">Mais recentes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Grid de Propriedades */}
              {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} {...property} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Nenhum imóvel encontrado</h3>
                  <p className="text-gray-600 mb-6">
                    Não encontramos imóveis que correspondam aos filtros selecionados. Tente modificar os filtros para obter mais resultados.
                  </p>
                  <Button onClick={clearAllFilters}>
                    Limpar filtros
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Properties;
