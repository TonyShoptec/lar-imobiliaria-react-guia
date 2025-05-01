
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-real-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Entre em Contato</h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Estamos aqui para ajudar você com todas as suas necessidades imobiliárias. Entre em contato conosco hoje mesmo!
          </p>
        </div>
      </div>

      {/* Informações de Contato e Formulário */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div>
              <h2 className="text-3xl font-bold text-real-primary mb-8">Informações de Contato</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-real-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-real-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Endereço</h3>
                    <p className="text-gray-600">
                      Av. Paulista, 1000, Bela Vista<br />
                      São Paulo - SP, 01310-100<br />
                      Brasil
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-real-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-real-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Telefones</h3>
                    <p className="text-gray-600 mb-1">
                      <a href="tel:+551199999999" className="hover:text-real-primary">
                        (11) 9999-9999
                      </a> (Vendas)
                    </p>
                    <p className="text-gray-600">
                      <a href="tel:+551188888888" className="hover:text-real-primary">
                        (11) 8888-8888
                      </a> (Atendimento)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-real-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-real-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">E-mail</h3>
                    <p className="text-gray-600 mb-1">
                      <a href="mailto:contato@larimoveis.com.br" className="hover:text-real-primary">
                        contato@larimoveis.com.br
                      </a> (Geral)
                    </p>
                    <p className="text-gray-600">
                      <a href="mailto:vendas@larimoveis.com.br" className="hover:text-real-primary">
                        vendas@larimoveis.com.br
                      </a> (Vendas)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-real-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-real-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Horário de Atendimento</h3>
                    <p className="text-gray-600 mb-1">Segunda a Sexta: 9h às 18h</p>
                    <p className="text-gray-600">Sábados: 9h às 13h</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Siga-nos</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-real-primary bg-opacity-10 p-3 rounded-full text-real-primary hover:bg-real-primary hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-real-primary bg-opacity-10 p-3 rounded-full text-real-primary hover:bg-real-primary hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-real-primary bg-opacity-10 p-3 rounded-full text-real-primary hover:bg-real-primary hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Formulário de Contato */}
            <div>
              <h2 className="text-3xl font-bold text-real-primary mb-8">Envie-nos uma Mensagem</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-real-primary mb-8 text-center">Nossa Localização</h2>
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0975991536454!2d-46.65669692374905!3d-23.5646162639086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1682949270121!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
