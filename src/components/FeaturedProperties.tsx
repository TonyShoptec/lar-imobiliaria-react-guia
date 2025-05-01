
import PropertyCard, { PropertyProps } from "@/components/PropertyCard";

// Dados de exemplo
const featuredProperties: PropertyProps[] = [
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
  }
];

const FeaturedProperties = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-real-primary mb-4">Imóveis em Destaque</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Selecionamos os melhores imóveis disponíveis em nosso portfólio para você conhecer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
