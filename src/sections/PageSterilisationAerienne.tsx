import ScrollExpandPage from '../components/ScrollExpandPage';

const sterilisationImages = [
  { src: './images/sterilisation-aerienne.jpeg', alt: 'Stérilisation voie aérienne 1' },
  { src: './images/sterilisation-aerienne1.jpeg', alt: 'Stérilisation voie aérienne 2' },
  { src: './images/sterilisation-aerienne2.jpeg', alt: 'Stérilisation voie aérienne 3' },
];

const PageSterilisationAerienne = () => {
  return (
    <ScrollExpandPage
      mediaType="image"
      mediaSrc="./images/sterilisation.jpeg"
      bgColor="#000"
      title="Stérilisation par Voie Aérienne"
      subtitle="Désinfection terminale pour les environnements critiques"
      scrollToExpand="Découvrez nos procédés de stérilisation"
      description={
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212529] mb-6">
            Désinfection des Surfaces par Voie Aérienne (DSVA)
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            La stérilisation par voie aérienne est un procédé de désinfection terminale qui permet de traiter l'ensemble des surfaces d'un local, y compris les plus inaccessibles. HORMEXPRES GROUP met en œuvre cette technique pour les environnements les plus exigeants en matière d'hygiène.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Avantages</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Efficacité biocide à large spectre</li>
                <li>✓ Atteint toutes les surfaces</li>
                <li>✓ Procédé rapide et automatisé</li>
                <li>✓ Validation par des indicateurs</li>
              </ul>
            </div>
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Blocs opératoires et salles blanches</li>
                <li>✓ Industrie pharmaceutique et cosmétique</li>
                <li>✓ Laboratoires de recherche</li>
                <li>✓ Zones de production agroalimentaire</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#212529] mb-6">Nos Procédés de Stérilisation</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sterilisationImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Stérilisation Aérienne</span>
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

export default PageSterilisationAerienne;