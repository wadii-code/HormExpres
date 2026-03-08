import ScrollExpandPage from '../components/ScrollExpandPage';

const constructionImages = [
  { src: './images/Construction-Bâtiment.jpeg', alt: 'Construction bâtiment 1' },
  { src: './images/Construction-Bâtiment2.jpg', alt: 'Construction bâtiment 2' },
  { src: './images/Construction-Bâtiment3.jpg', alt: 'Construction bâtiment 3' },
  { src: './images/civil1.jpeg', alt: 'Construction bâtiment 4' },
  { src: './images/civil1.jpg', alt: 'Construction bâtiment 5' },
  { src: './images/civil2.jpg', alt: 'Construction bâtiment 6' },
];

const PageConstructionBatiment = () => {
  return (
    <ScrollExpandPage
      mediaType="image"
      mediaSrc="./images/Construction-Bâtiment.jpeg"
      bgColor="#000"
      title="Construction Bâtiment"
      subtitle="Expertise en construction de bâtiments"
      scrollToExpand="Faites défiler pour découvrir nos réalisations"
      description={
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212529] mb-6">
            Construction de Bâtiments Tous Corps d'État
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            HORMEXPRES GROUP est votre partenaire de choix pour la construction de bâtiments au Maroc. 
            Nous réalisons des projets de construction complète, de la conception à la livraison clés en main. 
            Notre expertise couvre les bâtiments industriels, commerciaux et résidentiels avec un engagement total 
            sur la qualité et les délais.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Nos Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Construction neuve</li>
                <li>✓ Rénovation et réhabilitation</li>
                <li>✓ Extension de bâtiments</li>
                <li>✓ Aménagement intérieur</li>
                <li>✓ Coordination OPC</li>
              </ul>
            </div>
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Types de Bâtiments</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Bâtiments industriels</li>
                <li>✓ Bâtiments commerciaux</li>
                <li>✓ Immeubles résidentiels</li>
                <li>✓ Bâtiments publics</li>
                <li>✓ Établissements hôteliers</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#212529] mb-6">Nos Réalisations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {constructionImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Construction bâtiment</span>
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

export default PageConstructionBatiment;