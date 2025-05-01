
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-real-primary mb-6">Sobre a Lar Imóveis</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Fundada em 2005, a Lar Imóveis se estabeleceu como referência no mercado imobiliário brasileiro, 
              oferecendo um atendimento personalizado e soluções completas para quem deseja comprar, vender ou alugar imóveis.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nossa equipe é formada por profissionais altamente qualificados e com vasta experiência no setor, 
              prontos para oferecer as melhores oportunidades e condições para nossos clientes.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-real-secondary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-600">Mais de 1.000 imóveis vendidos</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-real-secondary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-600">Equipe com mais de 30 corretores especializados</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-real-secondary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-600">Atendimento em todas as regiões do país</span>
              </li>
            </ul>
            <Button asChild className="bg-real-primary hover:bg-opacity-90">
              <Link to="/sobre">Conheça Nossa História</Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format&fit=crop&crop=entropy" 
                alt="Equipe Lar Imóveis" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-real-secondary rounded-lg p-4 shadow-lg hidden md:block">
                <div className="text-white text-center">
                  <p className="text-4xl font-bold">+20</p>
                  <p className="text-sm uppercase tracking-wider">Anos de experiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
