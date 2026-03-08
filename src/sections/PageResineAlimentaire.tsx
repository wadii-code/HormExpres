import ScrollExpandPage from '../components/ScrollExpandPage';

const resineAlimentaireImages = [
  { src: './images/resine-alimentaire.jpeg', alt: 'Résine alimentaire 1' },
  { src: './images/resine-alimentaire1.jpeg', alt: 'Résine alimentaire 2' },
  { src: './images/resine-alimentaire2.jpeg', alt: 'Résine alimentaire 3' },
];

const PageResineAlimentaire = () => {
  return (
    <ScrollExpandPage
      mediaType="image"
      mediaSrc="./images/resine-alimentaire.jpeg"
      bgColor="#000"
      title="Résine Alimentaire"
      subtitle="Revêtements de sol pour l'industrie agroalimentaire"
      scrollToExpand="Découvrez nos solutions de résine"
      description={
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212529] mb-6">
            Sols en Résine pour le Secteur Alimentaire
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            HORMEXPRES GROUP est spécialisé dans l'application de résine alimentaire, une solution de revêtement de sol idéale pour les environnements où l'hygiène est primordiale, comme l'industrie agroalimentaire.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Caractéristiques</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Conforme aux normes d'hygiène</li>
                <li>✓ Facile à nettoyer et à entretenir</li>
                <li>✓ Résistant aux produits chimiques</li>
                <li>✓ Sans joints ni fissures</li>
              </ul>
            </div>
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Cuisines industrielles</li>
                <li>✓ Laboratoires de transformation</li>
                <li>✓ Chambres froides</li>
                <li>✓ Zones de stockage alimentaire</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#212529] mb-6">Nos Projets en Résine Alimentaire</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resineAlimentaireImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Résine Alimentaire</span>
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

export default PageResineAlimentaire;