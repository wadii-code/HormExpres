import ScrollExpandPage from '../components/ScrollExpandPage';

const charpenteImages = [
  { src: './images/charpente-metalique.jpeg', alt: 'Charpente métallique 1' },
  { src: './images/charpente.jpg', alt: 'Charpente métallique 2' },
  { src: './images/Charpente1.jpeg', alt: 'Charpente métallique 3' },
  { src: './images/Charpente2.jpeg', alt: 'Charpente métallique 4' },
  { src: './images/charpente6.jpg', alt: 'Charpente métallique 5' },
  { src: './images/charpente8.jpg', alt: 'Charpente métallique 6' },
];

const PageCharpenteMetalique = () => {
  return (
    <ScrollExpandPage
      mediaType="image"
      mediaSrc="./images/charpente-metalique.jpeg"
      bgColor="#000"
      title="Charpente Métallique"
      subtitle="Expertise en construction métallique"
      scrollToExpand="Faites défiler pour découvrir nos réalisations"
      description={
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212529] mb-6">
            Solutions de Charpente Métallique de Haute Qualité
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            HORMEXPRES GROUP vous propose des solutions de charpente métallique adaptées à tous vos projets de construction. 
            Notre expertise couvre la conception, la fabrication et l'installation de structures métalliques pour bâtiments industriels, 
            commerciaux et résidentiels. Nous utilisons des matériaux de première qualité et des techniques de pointe pour garantir 
            la solidité et la durabilité de vos installations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Nos Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Conception et dessin technique</li>
                <li>✓ Fabrication sur mesure</li>
                <li>✓ Installation et montage</li>
                <li>✓ Maintenance et réparation</li>
                <li>✓ Études结构和抗力计算</li>
              </ul>
            </div>
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Bâtiments industriels</li>
                <li>✓ Hangars et entrepôts</li>
                <li>✓ Structures commerciales</li>
                <li>✓ Passerelles et ponts</li>
                <li>✓ Bâtiments agricoles</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#212529] mb-6">Nos Réalisations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {charpenteImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Charpente métallique</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/#QuoteForm"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#fbab39] text-white font-bold rounded-lg hover:bg-[#e99a2e] transition-colors"
            >
              Demander un devis gratuit
            </a>
          </div>
        </div>
      }
    />
  );
};

export default PageCharpenteMetalique;