import React, { useState } from 'react';
import Header from './components/Header';
import { PROJECTS, SKILLS, SERVICES } from './constants';
import Section from './components/Section';
import { ArrowDown, Linkedin, Instagram, Briefcase } from 'lucide-react';

const App: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionStatus('submitting');
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmissionStatus('success');
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <div className="bg-secondary">
      <Header />
      <main>
        {/* Hero Section */}
        <Section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-200/[0.4] [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
          <div className="relative z-10 p-4 flex flex-col items-center">
            <img 
              src="https://picsum.photos/seed/avatar/400/400" 
              alt="Retrato de Lucas Guimarães" 
              className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-xl mb-6"
              loading="lazy" 
            />
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary tracking-tight">Lucas Guimarães</h1>
            <p className="mt-4 text-lg md:text-2xl text-primary/75 max-w-2xl mx-auto">Branding e Identidade Visual com Propósito</p>
            <a href="#gallery" className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg shadow-lg hover:bg-accent-hover transition-all duration-300 transform hover:scale-105">
              Ver Galeria <ArrowDown size={20} />
            </a>
          </div>
        </Section>

        {/* About Section */}
        <Section id="about" className="py-20 lg:py-32">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
              <img src="https://picsum.photos/seed/designer/600/800" alt="Retrato de Lucas Guimarães" className="rounded-lg shadow-2xl w-full h-auto object-cover" loading="lazy" />
            </div>
            <div className="md:col-span-3">
              <h2 className="font-serif text-4xl font-bold mb-6 text-primary">Sobre Mim</h2>
              <p className="text-primary/75 mb-6 leading-relaxed">
                Sou um designer gráfico com mais de uma década de experiência, movido pela convicção de que o bom design é, antes de tudo, uma estratégia de comunicação eficaz.
              </p>
               <p className="text-primary/75 mb-6 leading-relaxed">
                Minha jornada profissional e acadêmica me posicionou como um especialista multidisciplinar que transcende a estética: além da minha graduação em Design Gráfico, investi em uma Pós-Graduação em Marketing e Comunicação, e atualmente, aprofundo essa visão com um em UX Design.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-primary">Habilidades</h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.map(skill => (
                  <span key={skill} className="bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Gallery Section */}
        <Section id="gallery" className="py-20 lg:py-32 bg-white">
          <h2 className="font-serif text-4xl font-bold text-center mb-4 text-primary">Galeria</h2>
          <p className="text-primary/75 text-center mb-12 max-w-2xl mx-auto">Uma seleção dos meus trabalhos visuais favoritos.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map(project => (
              <div key={project.id} className="group block overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
                <img src={project.thumbnailUrl} alt={project.title} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              </div>
            ))}
          </div>
        </Section>

        {/* Services Section */}
        <Section id="services" className="py-20 lg:py-32">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary">Serviços</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {SERVICES.map(service => (
              <div key={service.title} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="inline-block p-4 bg-accent/10 rounded-full mb-4">
                  <service.icon className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">{service.title}</h3>
                <p className="text-primary/75">{service.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" className="py-20 lg:py-32">
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold text-primary">Vamos Conversar</h2>
            <p className="mt-4 text-lg text-primary/75 max-w-2xl mx-auto">Tem um projeto em mente? Adoraria ouvir sobre ele. Entre em contato e vamos criar algo incrível juntos.</p>
          </div>
          <div className="max-w-xl mx-auto mt-12">
            {submissionStatus === 'success' && (
              <div className="text-center p-6 bg-green-100 text-green-800 rounded-lg" role="alert">
                <h3 className="font-bold text-lg">Mensagem enviada!</h3>
                <p>Obrigado pelo seu contato. Retornarei o mais rápido possível.</p>
              </div>
            )}
            {submissionStatus === 'error' && (
              <div className="text-center p-6 bg-red-100 text-red-800 rounded-lg" role="alert">
                <h3 className="font-bold text-lg">Ocorreu um erro.</h3>
                <p>Não foi possível enviar sua mensagem. Por favor, tente novamente mais tarde ou entre em contato por outro canal.</p>
              </div>
            )}
            {(submissionStatus === 'idle' || submissionStatus === 'submitting') && (
              <form 
                onSubmit={handleFormSubmit}
                action="https://formsubmit.co/lucasguimaraes@live.com"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="sr-only">Nome</label>
                  <input type="text" name="name" id="name" placeholder="Seu Nome" required className="w-full px-4 py-3 border border-primary/20 bg-white rounded-lg focus:ring-accent focus:border-accent transition" disabled={submissionStatus === 'submitting'} />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input type="email" name="email" id="email" placeholder="Seu Email" required className="w-full px-4 py-3 border border-primary/20 bg-white rounded-lg focus:ring-accent focus:border-accent transition" disabled={submissionStatus === 'submitting'} />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Mensagem</label>
                  <textarea name="message" id="message" rows={5} placeholder="Sua Mensagem" required className="w-full px-4 py-3 border border-primary/20 bg-white rounded-lg focus:ring-accent focus:border-accent transition" disabled={submissionStatus === 'submitting'}></textarea>
                </div>
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="px-10 py-4 bg-accent text-white font-semibold rounded-lg shadow-lg hover:bg-accent-hover transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={submissionStatus === 'submitting'}
                  >
                    {submissionStatus === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
                  </button>
                </div>
              </form>
            )}
          </div>
          <div className="text-center mt-16">
            <p className="text-primary/75 mb-4">Ou me encontre nas redes sociais:</p>
            <div className="flex justify-center gap-6">
              <a href="https://www.instagram.com/designerlucasguimaraes/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary/60 hover:text-accent transition-colors"><Instagram size={28} /></a>
              <a href="https://www.linkedin.com/in/lucasdesignergrafico/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-primary/60 hover:text-accent transition-colors"><Linkedin size={28} /></a>
              <a href="https://www.behance.net/lucasguimaraesdesign" target="_blank" rel="noopener noreferrer" aria-label="Behance" className="text-primary/60 hover:text-accent transition-colors"><Briefcase size={28} /></a>
            </div>
          </div>
        </Section>
      </main>
      
      <footer className="bg-primary text-secondary/70 text-center p-6">
        <p>&copy; {new Date().getFullYear()} Lucas Guimarães. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;