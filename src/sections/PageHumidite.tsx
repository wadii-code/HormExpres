import ScrollExpandPage from '../components/ScrollExpandPage';

const humiditeImages = [
  { src: './images/reparation.jpeg', alt: 'Traitement humidité 1' },
  { src: './images/reparation.jpg', alt: 'Traitement humidité 2' },
  { src: './images/etancheite.jpeg', alt: 'Traitement humidité 3' },
  { src: './images/etancheite.jpg', alt: 'Traitement humidité 4' },
  { src: './images/cavelage.jpg', alt: 'Traitement humidité 5' },
  { src: './images/cavelage0.jpg', alt: 'Traitement humidité 6' },
];

const PageHumidite = () => {
  return (
    <ScrollExpandPage
      mediaType="image"
      mediaSrc="./images/reparation.jpg"
      bgColor="#000"
      title="Traitement de l'Humidité"
      subtitle="Solutions efficaces contre les problèmes d'humidité"
      scrollToExpand="Découvrez nos méthodes de traitement"
      description={
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212529] mb-6">
            Diagnostic et Traitement de l'Humidité
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Les problèmes d'humidité peuvent causer des dommages importants à votre bâtiment et affecter la santé de ses occupants. HORMEXPRES GROUP propose des solutions de traitement de l'humidité adaptées à chaque situation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Causes de l'Humidité</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Infiltrations d'eau</li>
                <li>✓ Remontées capillaires</li>
                <li>✓ Condensation</li>
                <li>✓ Fuites de plomberie</li>
              </ul>
            </div>
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Nos Solutions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Assèchement des murs</li>
                <li>✓ Injection de résine hydrophobe</li>
                <li>✓ Installation de ventilation (VMC)</li>
                <li>✓ Cuvelage et drainage</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#212529] mb-6">Exemples de Traitement</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {humiditeImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Traitement Humidité</span>
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

export default PageHumidite;