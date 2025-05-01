
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-real-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Sobre a Lar Imóveis</h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Conheça nossa história, valores e a equipe que trabalha para realizar os seus sonhos imobiliários.
          </p>
        </div>
      </div>

      {/* Nossa História */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format&fit=crop&crop=entropy" 
                alt="História da Lar Imóveis" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-real-primary mb-6">Nossa História</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Fundada em 2005 pelo corretor João Silva, a Lar Imóveis nasceu com uma visão 
                clara: transformar a experiência de comprar, vender e alugar imóveis, tornando-a 
                mais transparente, eficiente e centrada no cliente.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                O que começou como um pequeno escritório com apenas 3 corretores, hoje é uma 
                das mais respeitadas imobiliárias do país, com mais de 30 profissionais qualificados 
                e uma carteira de mais de 500 imóveis em diversas regiões.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Ao longo desses anos, a Lar Imóveis se consolidou como referência no setor, 
                sendo reconhecida pela ética, profissionalismo e pelo compromisso em entender e 
                atender às reais necessidades de seus clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-real-primary mb-12 text-center">Nossos Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Valor 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-real-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-real-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-real-dark">Excelência</h3>
              <p className="text-gray-600">
                Buscamos a excelência em todos os aspectos do nosso trabalho, desde o atendimento até a conclusão dos negócios.
              </p>
            </div>
            
            {/* Valor 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-real-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-real-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-real-dark">Transparência</h3>
              <p className="text-gray-600">
                Valorizamos a transparência em todas as nossas relações, fornecendo informações claras e precisas aos nossos clientes.
              </p>
            </div>
            
            {/* Valor 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-real-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-real-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9zm8 0H9v6h6V9z" clipRule="evenodd"></path>
                  <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-real-dark">Inovação</h3>
              <p className="text-gray-600">
                Estamos sempre em busca de novas tecnologias e métodos para melhorar nossos serviços e proporcionar a melhor experiência.
              </p>
            </div>
            
            {/* Valor 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-real-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-real-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-real-dark">Compromisso</h3>
              <p className="text-gray-600">
                Nosso compromisso é entender as necessidades de cada cliente e trabalhar incansavelmente para satisfazê-las.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-real-primary mb-12 text-center">Nossa Equipe</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Membro 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img 
                src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=300&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="João Silva" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1 text-real-dark">João Silva</h3>
              <p className="text-real-secondary mb-3">Fundador & CEO</p>
              <p className="text-gray-600 mb-4">
                Com mais de 25 anos de experiência no mercado imobiliário, João fundou a Lar Imóveis com o objetivo de transformar a experiência dos clientes.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-500 hover:text-real-primary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-real-primary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Membro 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img 
                src="https://images.unsplash.com/photo-1629747490241-624f07d70e1e?q=80&w=300&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="Maria Santos" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1 text-real-dark">Maria Santos</h3>
              <p className="text-real-secondary mb-3">Diretora de Vendas</p>
              <p className="text-gray-600 mb-4">
                Com formação em Administração e especialização em Marketing Imobiliário, Maria lidera a equipe de vendas com excelência há 10 anos.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-500 hover:text-real-primary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-real-primary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Membro 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="Carlos Oliveira" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1 text-real-dark">Carlos Oliveira</h3>
              <p className="text-real-secondary mb-3">Corretor Sênior</p>
              <p className="text-gray-600 mb-4">
                Especializado em imóveis de alto padrão, Carlos acumula mais de 15 anos de experiência e centenas de negócios bem-sucedidos.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-500 hover:text-real-primary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-real-primary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-real-primary hover:bg-opacity-90">
              <Link to="/contato">Entre em Contato com Nossa Equipe</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
