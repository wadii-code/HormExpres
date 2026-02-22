import { useEffect, useRef, useState } from 'react';

const Suppliers = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const suppliers = [
    { name: 'BEG INGENIERIE', logo: '/images/BEG.png' },
    { name: 'SIANA', logo: '/images/SIANA.png' },
    { name: 'Royal Mirage', logo: '/images/royalMirage.png' },
    { name: 'Hivernage Hotel & Spa', logo: '/images/HA.png' },
    { name: 'Groupe Ebertec', logo: '/images/groupe.png' },
    { name: 'Jibal', logo: '/images/jibal.png' },
    { name: 'Delattre Levivier Maroc', logo: '/images/dlm.png' },
    { name: 'Air Liquide', logo: '/images/airLiquide.png' },
    { name: 'Les Celliers de Meknès', logo: '/images/meknes.png' },
    { name: 'Danone', logo: '/images/danone.png' },
    { name: 'Groupe Addoha', logo: '/images/adoha.png' },
    { name: 'SOREC', logo: '/images/soreg.png' },
    { name: 'ONCF', logo: '/images/oncf.png' },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-[#fbab39] text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            // Partenaires
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#212529] leading-tight font-['Teko']">
            NOS FOURNISSEURS
          </h2>
        </div>

        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
            {suppliers.map((supplier) => (
              <div key={supplier.name} className="group">
                <img
                  src={supplier.logo}
                  alt={supplier.name}
                  className="h-16 object-contain grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suppliers;