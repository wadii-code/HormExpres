import { useEffect, useRef, useState } from 'react';
import { Building2, Hammer, Factory, Paintbrush, Droplets, Layers, Sparkles, ArrowRight } from 'lucide-react';
import ServiceModal from '../components/ui/ServiceModal';

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  gallery?: { src: string; description: string }[];
};

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services: Service[] = [
    {
      icon: Building2,
      title: 'Construction génie civil',
      description: 'Travaux de construction et de génie civil incluant fondations, structures, routes et infrastructures.',
      image: './images/civil.jpg',
      gallery: [
        { src: './images/civil.jpg', description: 'Description for civil 1' },
        { src: './images/civil1.jpg', description: 'Description for civil 2' },
        { src: './images/civil2.jpg', description: 'Description for civil 3' },
        { src: './images/civil3.jpg', description: 'Description for civil 4' },
        { src: './images/civil4.jpg', description: 'Description for civil 5' },
        { src: './images/civil5.jpg', description: 'Description for civil 6' },
      ],
    },
    {
      icon: Hammer,
      title: 'Charpente métallique',
      description: 'Conception et installation de charpentes métalliques pour tous types de constructions.',
      image: './images/Charpente.jpeg',
      gallery: [
        { src: './images/Charpente.jpeg', description: 'Description for Charpente 1' },
        { src: './images/Charpente1.jpeg', description: 'Description for Charpente 2' },
        { src: './images/Charpente2.jpeg', description: 'Description for Charpente 3' },
        { src: './images/Charpente3.jpg', description: 'Description for Charpente 4' },
        { src: './images/Charpente4.jpg', description: 'Description for Charpente 5' },
        { src: './images/Charpente5.jpg', description: 'Description for Charpente 6' },
      ],
    },
    {
      icon: Factory,
      title: 'Résine époxy',
      description: 'Revêtements en résine époxy alimentaire, antiacide et antidérapante pour sols industriels.',
      image: './images/epoxy.jpeg',
      gallery: [
        { src: './images/epoxy.jpeg', description: 'Description for epoxy 1' },
        { src: './images/epoxy1.jpeg', description: 'Description for epoxy 2' },
        { src: './images/epoxy2.jpg', description: 'Description for epoxy 3' },
        { src: './images/epoxy3.jpg', description: 'Description for epoxy 4' },
      ],
    },
    {
      icon: Paintbrush,
      title: 'Peinture murale',
      description: 'Services de peinture extérieure et intérieure, ravalement de façade et finitions décoratives.',
      image: './images/Peinture.jpeg',
      gallery: [
        { src: './images/Peinture.jpeg', description: 'Description for Peinture 1' },
        { src: './images/Peinture1.jpeg', description: 'Description for Peinture 2' },
        { src: './images/Peinture2.jpeg', description: 'Description for Peinture 3' },
        { src: './images/Peinture3.jpeg', description: 'Description for Peinture 4' },
      ],
    },
    {
      icon: Droplets,
      title: 'Étanchéité',
      description: 'Solutions d\'imperméabilisation et d\'étanchéité pour toitures, terrasses et bassins.',
      image: './images/Étanchéité.jpeg',
      gallery: [
        { src: './images/Étanchéité.jpeg', description: 'Description for Étanchéité 1' },
        { src: './images/Étanchéité1.jpg', description: 'Description for Étanchéité 2' },
      ],
    },
    {
      icon: Layers,
      title: 'Revêtement de dallage industriel',
      description: 'Dallage industriel, béton imprimé et revêtements de sols professionnels.',
      image: './images/Dallage.jpeg',
      gallery: [
        { src: './images/Dallage.jpeg', description: 'Description for Dallage 1' },
        { src: './images/Dallage1.jpeg', description: 'Description for Dallage 2' },
        { src: './images/Dallage3.jpg', description: 'Description for Dallage 3' },
        { src: './images/Dallage4.jpg', description: 'Description for Dallage 4' },
        { src: './images/Dallage5.jpg', description: 'Description for Dallage 5' },
      ],
    },
    {
      icon: Sparkles,
      title: 'Sablage',
      description: 'Décapage par sablage de pièces métalliques et nettoyage de façades en pierre.',
      image: './images/Sablage.jpeg',
      gallery: [
        { src: './images/Sablage.jpeg', description: 'Description for Sablage 1' },
        { src: './images/Sablage1.jpeg', description: 'Description for Sablage 2' },
        { src: './images/Sablage2.jpeg', description: 'Description for Sablage 3' },
        { src: './images/Sablage3.jpg', description: 'Description for Sablage 4' },
      ],
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-[#f2f6f7]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="section-subtitle">// Nos Services</span>
          <h2 className="section-title mb-6">
            CE QUE NOUS
            <span className="text-[#fbab39]"> OFFRONS</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Une gamme complète de services de construction et de rénovation pour répondre 
            à tous vos besoins, des petits travaux aux grands projets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              onClick={() => setSelectedService(service)}
              className={`group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#212529]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-[#fbab39] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <service.icon size={24} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#212529] mb-3 font-['Teko'] tracking-wide group-hover:text-[#fbab39] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-[#fbab39] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="bg-[#212529] rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 20px,
                    rgba(251, 171, 57, 0.1) 20px,
                    rgba(251, 171, 57, 0.1) 40px
                  )`,
                }}
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Teko']">
                BESOIN D'UN SERVICE PERSONNALISÉ ?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Contactez-nous pour discuter de votre projet et obtenir un devis gratuit 
                adapté à vos besoins spécifiques.
              </p>
              <a href="#contact" className="btn-primary inline-flex">
                Demander un devis gratuit
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <ServiceModal 
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </section>
  );
};

export default Services;