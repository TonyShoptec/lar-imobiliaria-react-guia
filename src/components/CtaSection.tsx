
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 bg-real-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Encontrar seu Imóvel Ideal?
          </h2>
          <p className="text-gray-200 mb-8 text-lg">
            Nossa equipe está à disposição para ajudar você a encontrar o imóvel perfeito para suas necessidades.
            Entre em contato conosco hoje mesmo!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-real-secondary hover:bg-opacity-90 text-white text-lg py-6 px-8">
              <Link to="/imoveis">Ver Imóveis</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-real-primary text-lg py-6 px-8">
              <Link to="/contato">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
