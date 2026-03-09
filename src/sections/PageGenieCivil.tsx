import ScrollExpandPage from '../components/ScrollExpandPage';

const genieCivilImages = [
  { src: './images/civil.jpeg', alt: 'Génie civil 1' },
  { src: './images/civil1.jpeg', alt: 'Génie civil 2' },
  { src: './images/civil7.jpeg', alt: 'Génie civil 3' },
  { src: './images/civil8.jpeg', alt: 'Génie civil 4' },
  { src: './images/civil9-crucial.jpeg', alt: 'Génie civil 5' },
  { src: './images/genie-civil.jpg', alt: 'Génie civil 6' },
  { src: './images/genie-civil-travaux.jpeg', alt: 'Génie civil 7' },
  { src: './images/construction-genie-civil.jpg', alt: 'Génie civil 8' },
  { src: './images/civil11.jpg', alt: 'Génie civil 9' },
  { src: './images/cheval2.jpeg', alt: 'Génie civil 9' },
  { src: './images/cheval1.jpeg', alt: 'Génie civil 9' },
  { src: './images/cheval3.jpeg', alt: 'Génie civil 9' },
];

const PageGenieCivil = () => {
  return (
    <ScrollExpandPage
      mediaType="image"
      mediaSrc="./images/civil.jpg"
      bgColor="#000"
      title="Génie Civil"
      subtitle="Construction et infrastructures de qualité"
      scrollToExpand="Faites défiler pour découvrir nos réalisations"
      description={
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212529] mb-6">
            Expertise en Génie Civil et Construction d'Infrastructures
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            HORMEXPRES GROUP est votre partenaire de confiance pour tous vos projets de génie civil au Maroc. 
            Nous réalisons des travaux de construction complets incluant fondations, structures, routes et infrastructures 
            diverses. Notre équipe d'ingénieurs et techniciens qualifiés assure un suivi rigoureux de chaque projet.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Nos Compétences</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Fondations profondes et superficielles</li>
                <li>✓ Structures en béton armé</li>
                <li>✓ Routes et autoroutes</li>
                <li>✓ Ponts et viaducs</li>
                <li>✓ Assainissement et réseaux</li>
              </ul>
            </div>
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Nos Réalisations</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Bâtiments industriels</li>
                <li>✓ Ouvrages d'art</li>
                <li>✓ Infrastructures routières</li>
                <li>✓ Stations de traitement</li>
                <li>✓ Projets urbains</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#212529] mb-6">Nos Réalisations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {genieCivilImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Génie civil</span>
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

export default PageGenieCivil;