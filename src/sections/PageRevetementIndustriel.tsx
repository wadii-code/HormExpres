import ScrollExpandPage from '../components/ScrollExpandPage';

const dallageImages = [
  { src: './images/Dallage.jpeg', alt: 'Dallage industriel 1' },
  { src: './images/Dallage1.jpeg', alt: 'Dallage industriel 2' },
  { src: './images/Dallage3.jpg', alt: 'Dallage industriel 3' },
  { src: './images/Dallage4.jpg', alt: 'Dallage industriel 4' },
  { src: './images/Dallage5.jpg', alt: 'Dallage industriel 5' },
];

const PageRevetementIndustriel = () => {
  return (
    <ScrollExpandPage
      mediaType="image"
      mediaSrc="./images/Dallage.jpeg"
      bgColor="#000"
      title="Revêtement Industriel"
      subtitle="Dallage et revêtements de sols professionnels"
      scrollToExpand="Faites défiler pour découvrir nos réalisations"
      description={
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212529] mb-6">
            Revêtements de Sols Industriels de Haute Performance
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            HORMEXPRES GROUP est votre expert en dallage industriel et revêtements de sols professionnels au Maroc. 
            Nous réalisons des dallages industriels, béton imprimé et revêtements spéciaux pour tous types d'environnements 
            professionnels. Notre savoir-faire garantit des sols durables, esthétiques et conformes aux normes en vigueur.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Nos Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Dallage industriel</li>
                <li>✓ Béton imprinted</li>
                <li>✓ Béton désactivé</li>
                <li>✓ Béton刷印</li>
                <li>✓ Revêtements anti-poussière</li>
              </ul>
            </div>
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Usines et ateliers</li>
                <li>✓ Entrepôts</li>
                <li>✓ Parkings extérieurs</li>
                <li>✓ Zones commerciales</li>
                <li>✓ Espaces publics</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#212529] mb-6">Nos Réalisations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dallageImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Revêtement industriel</span>
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

export default PageRevetementIndustriel;