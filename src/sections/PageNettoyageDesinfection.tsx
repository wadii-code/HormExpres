import ScrollExpandPage from '../components/ScrollExpandPage';

const nettoyageImages = [
  { src: './images/nettoyage.jpg', alt: 'Nettoyage et désinfection 1' },
  { src: './images/nettoyage1.jpg', alt: 'Nettoyage et désinfection 2' },
  { src: './images/nettoyage2.jpg', alt: 'Nettoyage et désinfection 3' },
  { src: './images/nettoyage3.jpg', alt: 'Nettoyage et désinfection 4' },
  { src: './images/nettoyage4.jpg', alt: 'Nettoyage et désinfection 5' },
  { src: './images/nettoyage5.jpg', alt: 'Nettoyage et désinfection 6' },
];

const PageNettoyageDesinfection = () => {
  return (
    <ScrollExpandPage
      mediaType="image"
      mediaSrc="./images/nettoyage.jpg"
      bgColor="#000"
      title="Nettoyage & Désinfection"
      subtitle="Prestations de nettoyage pour professionnels"
      scrollToExpand="Découvrez nos services de nettoyage"
      description={
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212529] mb-6">
            Nettoyage et Désinfection de Sols, Surfaces et Machines
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            HORMEXPRES GROUP assure des prestations de nettoyage et de désinfection pour les environnements industriels et hospitaliers. Nous utilisons des produits et des techniques adaptés pour garantir un niveau d'hygiène optimal.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Nos Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Nettoyage de fin de chantier</li>
                <li>✓ Nettoyage industriel</li>
                <li>✓ Désinfection de locaux</li>
                <li>✓ Nettoyage de machines et d'équipements</li>
              </ul>
            </div>
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Secteurs d'Activité</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Industrie agroalimentaire</li>
                <li>✓ Établissements de santé</li>
                <li>✓ Usines et entrepôts</li>
                <li>✓ Bureaux et commerces</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#212529] mb-6">Nos Interventions de Nettoyage</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nettoyageImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Nettoyage & Désinfection</span>
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

export default PageNettoyageDesinfection;