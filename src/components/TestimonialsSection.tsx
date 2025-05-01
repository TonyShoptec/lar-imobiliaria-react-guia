
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  testimonial: string;
  imageUrl: string;
}

// Dados de exemplo
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Silva",
    position: "Comprou um apartamento em 2023",
    testimonial: "A equipe da Lar Imóveis foi extremamente profissional e atenciosa. Encontraram o apartamento perfeito para minha família em apenas duas semanas. O processo de compra foi transparente e sem complicações.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "Ana Rodrigues",
    position: "Vendeu sua casa em 2022",
    testimonial: "Precisava vender minha casa com urgência e a Lar Imóveis conseguiu um comprador em tempo recorde. O valor de venda foi acima do que eu esperava e todo o processo foi muito tranquilo.",
    imageUrl: "https://images.unsplash.com/photo-1629747490241-624f07d70e1e?q=80&w=150&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    name: "Luiz Fernandes",
    position: "Investidor imobiliário",
    testimonial: "Como investidor, preciso de parceiros confiáveis que entendam o mercado. A Lar Imóveis tem me ajudado a encontrar excelentes oportunidades nos últimos anos. Recomendo sem hesitar.",
    imageUrl: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=150&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-real-primary mb-4">O que Dizem Nossos Clientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior prioridade. Confira alguns depoimentos de quem já realizou negócios com a Lar Imóveis.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 relative">
            <svg className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 h-16 w-16 text-real-secondary opacity-10" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>

            <div className="relative z-10">
              <div className="text-2xl text-gray-800 font-medium mb-6 italic">
                "{testimonials[activeIndex].testimonial}"
              </div>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[activeIndex].imageUrl} 
                  alt={testimonials[activeIndex].name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-real-primary">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-500 text-sm">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-8 right-8 flex space-x-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevTestimonial}
                className="border-real-primary text-real-primary hover:bg-real-primary hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextTestimonial}
                className="border-real-primary text-real-primary hover:bg-real-primary hover:text-white"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === activeIndex ? "bg-real-secondary" : "bg-gray-300"
                  }`}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
