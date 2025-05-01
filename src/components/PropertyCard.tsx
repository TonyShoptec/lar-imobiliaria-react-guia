
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, ArrowsUpFromLine } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

export interface PropertyProps {
  id: number;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  type: string; // casa, apartamento, comercial, etc.
  isForSale: boolean; // venda ou aluguel
}

const PropertyCard = ({ 
  id, 
  title, 
  price, 
  location, 
  bedrooms, 
  bathrooms, 
  area, 
  imageUrl,
  type,
  isForSale
}: PropertyProps) => {
  // Formatar o preço para o formato de moeda brasileiro (R$)
  const formattedPrice = new Intl.NumberFormat('pt-BR', { 
    style: 'currency', 
    currency: 'BRL',
    maximumFractionDigits: 0
  }).format(price);

  return (
    <div className="property-card bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative">
        {/* Imagem do Imóvel */}
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        
        {/* Badge indicando se é venda ou aluguel */}
        <div className="absolute top-3 left-3">
          <Badge className={`${isForSale ? 'bg-real-secondary' : 'bg-real-primary'} text-white`}>
            {isForSale ? 'Venda' : 'Aluguel'}
          </Badge>
        </div>
      </div>
      
      {/* Informações do Imóvel */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold line-clamp-1 text-real-dark">{title}</h3>
          <Badge variant="outline" className="text-xs bg-gray-100">{type}</Badge>
        </div>
        
        <div className="mt-2 text-lg font-bold text-real-primary">
          {formattedPrice}
          {!isForSale && <span className="text-sm font-normal text-gray-500">/mês</span>}
        </div>
        
        <div className="flex items-center mt-2 text-gray-500">
          <MapPin className="w-4 h-4 mr-1" />
          <p className="text-sm line-clamp-1">{location}</p>
        </div>
        
        <div className="flex justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center text-gray-600">
            <Bed className="w-4 h-4 mr-1" />
            <span className="text-sm">{bedrooms}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Bath className="w-4 h-4 mr-1" />
            <span className="text-sm">{bathrooms}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <ArrowsUpFromLine className="w-4 h-4 mr-1" />
            <span className="text-sm">{area} m²</span>
          </div>
        </div>

        <Link 
          to={`/imovel/${id}`} 
          className="block mt-4 text-center py-2 px-4 bg-real-primary text-white rounded hover:bg-opacity-90 transition-colors"
        >
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
