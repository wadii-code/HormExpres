import ScrollExpandPage from '../components/ScrollExpandPage';

const cuvelageImages = [
  { src: './images/cavelage.jpg', alt: 'Enduit de cuvelage 1' },
  { src: './images/cavelage0.jpg', alt: 'Enduit de cuvelage 2' },
  { src: './images/etancheite.jpeg', alt: 'Enduit de cuvelage 3' },
  { src: './images/etancheite.jpg', alt: 'Enduit de cuvelage 4' },
];

const PageEnduitCuvelage = () => {
  return (
    <ScrollExpandPage
      mediaType="image"
      mediaSrc="./images/cavelage.jpg"
      bgColor="#000"
      title="Enduit de Cuvelage"
      subtitle="Protection efficace pour les murs enterrés"
      scrollToExpand="Découvrez nos techniques de cuvelage"
      description={
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212529] mb-6">
            Application d'Enduit de Cuvelage
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            L'enduit de cuvelage est une solution d'imperméabilisation qui s'applique sur les murs de sous-sol, de caves ou de toute autre partie enterrée d'un bâtiment. Il forme une barrière étanche qui empêche les infiltrations d'eau.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Avantages du Cuvelage</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Imperméabilisation totale</li>
                <li>✓ Résistance à la contre-pression</li>
                <li>✓ Protection durable des structures</li>
                <li>✓ Assainissement des locaux</li>
              </ul>
            </div>
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Sous-sols et caves</li>
                <li>✓ Fosses d'ascenseur</li>
                <li>✓ Parkings souterrains</li>
                <li>✓ Réservoirs et bassins</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#212529] mb-6">Nos Chantiers de Cuvelage</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cuvelageImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Cuvelage</span>
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

export default PageEnduitCuvelage;