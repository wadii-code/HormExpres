import ScrollExpandPage from '../components/ScrollExpandPage';

const resineAntiacideImages = [
  { src: './images/resine-antiacide.jpeg', alt: 'Résine antiacide 1' },
  { src: './images/resine-antiacide1.jpeg', alt: 'Résine antiacide 2' },
  { src: './images/resine-antiacide2.jpeg', alt: 'Résine antiacide 3' },
];

const PageResineAntiacide = () => {
  return (
    <ScrollExpandPage
      mediaType="image"
      mediaSrc="./images/resine-antiacide.jpeg"
      bgColor="#000"
      title="Résine Antiacide"
      subtitle="Protection contre les produits chimiques corrosifs"
      scrollToExpand="Découvrez nos revêtements spécialisés"
      description={
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212529] mb-6">
            Sols en Résine Antiacide pour l'Industrie
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            La résine antiacide est un revêtement de sol conçu pour résister aux agressions chimiques les plus sévères. HORMEXPRES GROUP propose des solutions de résine antiacide pour protéger vos sols industriels.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Propriétés</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Haute résistance chimique</li>
                <li>✓ Imperméabilité totale</li>
                <li>✓ Résistance mécanique élevée</li>
                <li>✓ Facilité d'entretien</li>
              </ul>
            </div>
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Domaines d'Application</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Industrie chimique et pharmaceutique</li>
                <li>✓ Ateliers de traitement de surface</li>
                <li>✓ Zones de stockage de produits dangereux</li>
                <li>✓ Laboratoires</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#212529] mb-6">Nos Chantiers en Résine Antiacide</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resineAntiacideImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Résine Antiacide</span>
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

export default PageResineAntiacide;