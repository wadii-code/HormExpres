import ScrollExpandPage from '../components/ScrollExpandPage';

const betonImprimeImages = [
  { src: './images/dallage.jpeg', alt: 'Béton imprimé 1' },
  { src: './images/dallage.jpg', alt: 'Béton imprimé 2' },
  { src: './images/Dallage1.jpeg', alt: 'Béton imprimé 3' },
  { src: './images/Dallage3.jpg', alt: 'Béton imprimé 4' },
  { src: './images/Dallage4.jpg', alt: 'Béton imprimé 5' },
  { src: './images/Dallage5.jpg', alt: 'Béton imprimé 6' },
];

const PageBetonImprime = () => {
  return (
    <ScrollExpandPage
      mediaType="image"
      mediaSrc="./images/beton.jpg"
      bgColor="#000"
      title="Béton Imprimé"
      subtitle="L'esthétique et la robustesse pour vos aménagements extérieurs"
      scrollToExpand="Découvrez nos motifs et couleurs"
      description={
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212529] mb-6">
            Aménagements en Béton Imprimé
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Le béton imprimé est une solution décorative pour vos sols extérieurs. Il permet d'imiter l'aspect de matériaux nobles comme la pierre, le bois ou le pavé, tout en offrant la résistance et la durabilité du béton.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Avantages</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Large choix de motifs et de couleurs</li>
                <li>✓ Grande résistance à l'usure et aux intempéries</li>
                <li>✓ Entretien facile</li>
                <li>✓ Excellent rapport qualité/prix</li>
              </ul>
            </div>
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Terrasses et plages de piscine</li>
                <li>✓ Allées de jardin et de garage</li>
                <li>✓ Cours et patios</li>
                <li>✓ Trottoirs et zones piétonnes</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#212529] mb-6">Nos Réalisations en Béton Imprimé</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {betonImprimeImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Béton Imprimé</span>
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

export default PageBetonImprime;