
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, ArrowsUpFromLine, Phone, Mail, Calendar, Share2, Heart } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

// Dados de exemplo
const propertyDetails = {
  id: 1,
  title: "Casa de Luxo no Jardim Europa",
  description: "Magnífica residência em um dos bairros mais exclusivos de São Paulo. Com 350m², esta casa oferece amplos espaços de convivência, jardim bem cuidado e piscina. Acabamentos de alto padrão, com mármore italiano, madeiras nobres e automação completa.",
  price: 2800000,
  location: "Rua dos Pinheiros, 1000, Jardim Europa, São Paulo - SP",
  bedrooms: 4,
  bathrooms: 3,
  area: 350,
  garageSpots: 2,
  yearBuilt: 2018,
  type: "Casa",
  isForSale: true,
  features: [
    "Piscina",
    "Jardim",
    "Churrasqueira",
    "Sala de cinema",
    "Academia",
    "Dependência de empregada",
    "Área gourmet",
    "Automação residencial",
    "Sistema de segurança",
    "Energia solar"
  ],
  description_long: "Esta magnífica residência de 350m² está localizada em um dos bairros mais exclusivos de São Paulo, o Jardim Europa. Com projeto arquitetônico moderno e funcional, a casa oferece espaços amplos e bem iluminados, perfeitos para uma família que valoriza conforto e sofisticação.\n\nNo primeiro pavimento, encontra-se uma sala de estar integrada com a sala de jantar, ambas com pé-direito duplo e grandes janelas que permitem a entrada abundante de luz natural. A cozinha gourmet é equipada com eletrodomésticos de última geração e possui uma ilha central que se torna o ponto de encontro da família. Completam este andar um escritório, lavabo e uma ampla varanda que se estende para o jardim.\n\nO segundo andar abriga a suíte master com closet e banheira de hidromassagem, além de outras três suítes, todas com armários planejados e acabamentos de alto padrão. No subsolo, encontra-se a área de lazer completa, com sala de cinema, adega climatizada, academia e sala de jogos.\n\nO jardim bem cuidado conta com piscina aquecida, deck de madeira e área gourmet com churrasqueira e forno de pizza. A garagem comporta confortavelmente 2 veículos.\n\nA casa é equipada com sistemas de automação residencial, segurança 24 horas, energia solar e reuso de água, garantindo conforto, segurança e sustentabilidade.\n\nUma oportunidade única para quem busca uma residência de alto padrão em um dos endereços mais cobiçados de São Paulo.",
  images: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?q=80&w=1200&auto=format&fit=crop&crop=entropy",
      alt: "Fachada da casa"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop&crop=entropy",
      alt: "Sala de estar"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=1200&auto=format&fit=crop&crop=entropy",
      alt: "Cozinha gourmet"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop&crop=entropy",
      alt: "Suíte master"
    }
  ],
  agent: {
    name: "Carlos Oliveira",
    position: "Corretor Sênior",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    phone: "(11) 99999-9999",
    email: "carlos@larimoveis.com.br"
  }
};

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [mainImage, setMainImage] = useState(propertyDetails.images[0].url);
  const [liked, setLiked] = useState(false);

  // Formatar o preço para o formato de moeda brasileiro (R$)
  const formattedPrice = new Intl.NumberFormat('pt-BR', { 
    style: 'currency', 
    currency: 'BRL',
    maximumFractionDigits: 0
  }).format(propertyDetails.price);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Navegação */}
        <div className="mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <Link to="/" className="text-gray-700 hover:text-real-primary">
                  Início
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <Link to="/imoveis" className="text-gray-700 hover:text-real-primary">
                    Imóveis
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-500 truncate max-w-[200px]">
                    {propertyDetails.title}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Cabeçalho do Imóvel */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-real-primary mb-2">{propertyDetails.title}</h1>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-1" />
              <p>{propertyDetails.location}</p>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="text-2xl font-bold text-real-primary">
              {formattedPrice}
              {!propertyDetails.isForSale && <span className="text-sm font-normal text-gray-500">/mês</span>}
            </div>
            <Badge className={`${propertyDetails.isForSale ? 'bg-real-secondary' : 'bg-real-primary'} text-white mt-2`}>
              {propertyDetails.isForSale ? 'Venda' : 'Aluguel'}
            </Badge>
          </div>
        </div>

        {/* Galeria de Imagens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="md:col-span-2">
            <div className="rounded-lg overflow-hidden mb-4">
              <img 
                src={mainImage} 
                alt={propertyDetails.title} 
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {propertyDetails.images.map((image) => (
                <div 
                  key={image.id} 
                  className={`rounded-lg overflow-hidden cursor-pointer border-2 ${
                    mainImage === image.url ? 'border-real-primary' : 'border-transparent'
                  }`}
                  onClick={() => setMainImage(image.url)}
                >
                  <img 
                    src={image.url} 
                    alt={image.alt} 
                    className="w-full h-24 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Resumo do Imóvel e Contato */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Informações do Imóvel</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600">Tipo:</span>
                  <span className="font-medium">{propertyDetails.type}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600">Área:</span>
                  <span className="font-medium">{propertyDetails.area} m²</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600">Quartos:</span>
                  <span className="font-medium">{propertyDetails.bedrooms}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600">Banheiros:</span>
                  <span className="font-medium">{propertyDetails.bathrooms}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600">Vagas de Garagem:</span>
                  <span className="font-medium">{propertyDetails.garageSpots}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600">Construído em:</span>
                  <span className="font-medium">{propertyDetails.yearBuilt}</span>
                </div>
              </div>

              {/* Corretor */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold mb-4">Consulte um Especialista</h3>
                <div className="flex items-center mb-4">
                  <img 
                    src={propertyDetails.agent.photo} 
                    alt={propertyDetails.agent.name} 
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-medium">{propertyDetails.agent.name}</p>
                    <p className="text-gray-500 text-sm">{propertyDetails.agent.position}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button asChild variant="outline" className="w-full">
                    <a href={`tel:${propertyDetails.agent.phone}`}>
                      <Phone className="mr-2 h-4 w-4" /> {propertyDetails.agent.phone}
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href={`mailto:${propertyDetails.agent.email}`}>
                      <Mail className="mr-2 h-4 w-4" /> Enviar E-mail
                    </a>
                  </Button>
                  <Button asChild className="bg-real-primary hover:bg-opacity-90 w-full">
                    <a href="#agendar-visita">
                      <Calendar className="mr-2 h-4 w-4" /> Agendar Visita
                    </a>
                  </Button>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="mt-6 flex space-x-2">
                <Button 
                  variant="outline"
                  className="flex-1 text-gray-600"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link copiado para a área de transferência!");
                  }}
                >
                  <Share2 className="mr-2 h-4 w-4" /> Compartilhar
                </Button>
                <Button 
                  variant="outline"
                  className={`flex-1 ${liked ? 'text-red-500' : 'text-gray-600'}`}
                  onClick={() => setLiked(!liked)}
                >
                  <Heart className={`mr-2 h-4 w-4 ${liked ? 'fill-red-500' : ''}`} /> Favorito
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Descrição e Informações Detalhadas */}
        <div className="mb-10">
          <Tabs defaultValue="descricao">
            <TabsList className="border-b border-gray-200 w-full justify-start mb-6">
              <TabsTrigger value="descricao" className="text-lg">Descrição</TabsTrigger>
              <TabsTrigger value="caracteristicas" className="text-lg">Características</TabsTrigger>
              <TabsTrigger value="localizacao" className="text-lg">Localização</TabsTrigger>
            </TabsList>
            <TabsContent value="descricao" className="pt-2">
              <div className="prose max-w-none">
                {propertyDetails.description_long.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="caracteristicas" className="pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Detalhes do Imóvel */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-real-primary">Detalhes Principais</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Bed className="w-5 h-5 text-real-secondary mr-2" />
                      <span>{propertyDetails.bedrooms} Quartos</span>
                    </li>
                    <li className="flex items-center">
                      <Bath className="w-5 h-5 text-real-secondary mr-2" />
                      <span>{propertyDetails.bathrooms} Banheiros</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowsUpFromLine className="w-5 h-5 text-real-secondary mr-2" />
                      <span>{propertyDetails.area} m²</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-real-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                      <span>{propertyDetails.garageSpots} Vagas de Garagem</span>
                    </li>
                  </ul>
                </div>

                {/* Características */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-real-primary">Características</h3>
                  <ul className="grid grid-cols-1 gap-2">
                    {propertyDetails.features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 text-real-secondary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mais Características */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-real-primary">Mais Características</h3>
                  <ul className="grid grid-cols-1 gap-2">
                    {propertyDetails.features.slice(5).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 text-real-secondary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="localizacao" className="pt-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7768616203605!2d-46.69057492374835!3d-23.577156684275395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57b6ddd6c241%3A0x916d1e14c56c187f!2sJd.%20Europa%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1682951946722!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Informações do Bairro</h3>
                <p className="text-gray-700 mb-4">
                  O Jardim Europa é um dos bairros mais nobres de São Paulo, conhecido por suas ruas arborizadas, mansões de alto padrão e excelente infraestrutura urbana. A região oferece fácil acesso a shopping centers, restaurantes de luxo, escolas internacionais e áreas verdes como o Parque do Ibirapuera.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Transporte</h4>
                    <p className="text-sm text-gray-600">Próximo a estações de metrô e pontos de ônibus</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Educação</h4>
                    <p className="text-sm text-gray-600">Escolas e universidades próximas</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Saúde</h4>
                    <p className="text-sm text-gray-600">Hospitais e farmácias na região</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Lazer</h4>
                    <p className="text-sm text-gray-600">Parques, restaurantes e shoppings</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Formulário de Contato */}
        <div className="bg-white rounded-lg shadow-md p-8" id="agendar-visita">
          <h2 className="text-2xl font-bold text-real-primary mb-6 text-center">Agendar uma Visita</h2>
          <p className="text-center text-gray-600 mb-8">
            Preencha o formulário abaixo para agendar uma visita a este imóvel ou obter mais informações.
          </p>
          <ContactForm />
        </div>

        {/* Imóveis Semelhantes */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-real-primary mb-8">Imóveis Semelhantes</h2>
          {/* Implementação futura para listar imóveis semelhantes baseados em localização e características */}
        </div>
      </div>
    </Layout>
  );
};

export default PropertyDetail;
