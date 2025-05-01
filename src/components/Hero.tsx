
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-[600px] bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?q=80&w=1920&auto=format&fit=crop&crop=entropy')]">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl text-white animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Encontre o Imóvel dos Seus Sonhos
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            A Lar Imóveis tem as melhores opções de imóveis para você e sua família. Casas, apartamentos e imóveis comerciais em toda a região, com as melhores condições do mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-real-secondary hover:bg-opacity-90 text-white text-lg py-6 px-8">
              <Link to="/imoveis">Ver Imóveis</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-real-primary text-lg py-6 px-8">
              <Link to="/contato">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
