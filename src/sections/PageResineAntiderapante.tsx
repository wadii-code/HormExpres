import ScrollExpandPage from '../components/ScrollExpandPage';

const resineAntiderapanteImages = [
  { src: './images/resine-antiderapante.jpeg', alt: 'Résine antidérapante 1' },
  { src: './images/resine-antiderapante1.jpeg', alt: 'Résine antidérapante 2' },
  { src: './images/resine-antiderapante2.jpeg', alt: 'Résine antidérapante 3' },
];

const PageResineAntiderapante = () => {
  return (
    <ScrollExpandPage
      mediaType="image"
      mediaSrc="./images/resine-antiderapante.jpeg"
      bgColor="#000"
      title="Résine Antidérapante"
      subtitle="Sécurité et adhérence pour vos sols"
      scrollToExpand="Découvrez nos revêtements sécurisés"
      description={
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212529] mb-6">
            Sols en Résine Antidérapante pour la Sécurité
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            La sécurité des personnes est une priorité. HORMEXPRES GROUP installe des revêtements de sol en résine antidérapante pour prévenir les risques de glissades et de chutes, que ce soit dans un environnement industriel, commercial ou public.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Avantages</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Excellente adhérence, même en milieu humide</li>
                <li>✓ Résistance à l'usure et au trafic intense</li>
                <li>✓ Large choix de finitions et de couleurs</li>
                <li>✓ Entretien facile</li>
              </ul>
            </div>
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Lieux d'Application</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Zones de production et de circulation</li>
                <li>✓ Rampes d'accès et quais de chargement</li>
                <li>✓ Escaliers et passerelles</li>
                <li>✓ Vestiaires et douches collectives</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#212529] mb-6">Nos Réalisations en Résine Antidérapante</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resineAntiderapanteImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Résine Antidérapante</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/#QuoteForm"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#fbab39] text-white font-bold rounded-lg hover:bg-[#e99a2e] transition-colors"
            >
              Demander un devis
            </a>
          </div>
        </div>
      }
    />
  );
};

export default PageResineAntiderapante;