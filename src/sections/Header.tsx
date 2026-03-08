import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Download } from 'lucide-react';

interface HeaderProps {
  scrollY: number;
}

const Header = ({ scrollY }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsScrolled(scrollY > 100);
  }, [scrollY]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    {
      name: 'Services',
      href: '/#services',
      megaMenu: [
        {
          category: 'Gros Œuvre',
          links: [
            { name: 'Construction bâtiment', path: '/construction-batiment' },
            { name: 'Démolition des immobiles', path: '/demolition-immobiles' },
            { name: 'Génie civil', path: '/genie-civil' },
            { name: 'Béton armé', path: '/beton-arme' },
            { name: 'Assainissement', path: '/assainissement' },
          ],
        },
        {
          category: 'Étanchéité & Traitement',
          links: [
            { name: 'Étanchéité & Imperméabilisation', path: '/etancheite-imperméabilisation' },
            { name: 'Traitement de l’humidité', path: '/humidite' },
            { name: 'Enduit de cuvelage', path: '/enduit-cuvelage' },
            { name: 'Réparation des fissures et sablage', path: '/reparation-fissures-sablage' },
          ],
        },
        {
          category: 'Résine Époxy',
          links: [
            { name: 'Résine alimentaire', path: '/resine-alimentaire' },
            { name: 'Résine antiacide', path: '/resine-antiacide' },
            { name: 'Résine antidérapante', path: '/resine-antiderapante' },
          ],
        },
        {
          category: 'Nettoyage & Désinfection',
          links: [
            { name: 'Désinfection (sol, surfaces, machines)', path: '/nettoyage-desinfection' },
            { name: 'Stérilisation par voie aérienne', path: '/sterilisation-aerienne' },
          ],
        },
        {
          category: 'Sols & Revêtements',
          links: [
            { name: 'Réparation des sols', path: '/reparation-sols' },
            { name: 'Dallage industriel', path: '/revetement-dallage-industriel' },
            { name: 'Béton imprimé', path: '/beton-imprime' },
          ],
        },
      ],
    },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#QuoteForm' },
    { name: 'Presentation', href: '/docs/resine epoxy- horm- X.pptx', isDownload: true },
  ];

  const scrollToSection = (href: string) => {
    // Check if it's a route path (starts with / but not /#)
    if (href.startsWith('/') && !href.includes('#')) {
      navigate(href);
      setIsMenuOpen(false);
      setIsServicesOpen(false);
      return;
    }
    
    // Handle hash links
    const [path, hash] = href.split('#');
    if (hash) {
      // If we're on a different route, navigate to home first
      if (path && path !== '/') {
        navigate(path);
        setTimeout(() => {
          const element = document.querySelector(`#${hash}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(`#${hash}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (href === '/') {
      navigate('/');
      window.scrollTo(0, 0);
    }
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const handleDropdownClick = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      {/* Top Bar */}
      <div
        className={`bg-[#212529] text-white py-2 transition-all duration-500 ${
          isScrolled ? 'hidden' : 'block'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:0661259104" className="flex items-center gap-2 hover:text-[#fbab39] transition-colors">
              <Phone size={14} />
              <span>0661 259 104</span>
            </a>
            <span className="hidden md:inline text-gray-400">|</span>
            <span className="hidden md:inline text-gray-300">hormexpresgroupe@gmail.com</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>77 Mohamed Smiha, Casablanca</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
              setIsMenuOpen(false);
            }}
            className="flex items-center gap-3"
          >
            <img src="./images/AdobeExpress-file.png" alt="HORMEXPRES CONSTRUCTION" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.megaMenu && setIsServicesOpen(true)}
                onMouseLeave={() => link.megaMenu && setIsServicesOpen(false)}
              >
                {link.megaMenu ? (
                  <button
                    className={`flex items-center gap-1 text-sm font-medium tracking-wider uppercase transition-colors hover:text-[#fbab39] ${
                      isScrolled ? 'text-[#212529]' : 'text-white'
                    }`}
                  >
                    {link.name}
                    {link.megaMenu && <ChevronDown size={14} />}
                  </button>
                ) : link.isDownload ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 text-sm font-medium tracking-wider uppercase transition-colors hover:text-[#fbab39] ${
                      isScrolled ? 'text-[#212529]' : 'text-white'
                    }`}
                  >
                    {link.name}
                    <Download size={16} className="ml-1" />
                  </a>
                ) : (
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`flex items-center gap-1 text-sm font-medium tracking-wider uppercase transition-colors hover:text-[#fbab39] ${
                      isScrolled ? 'text-[#212529]' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </button>
                )}

                {/* Mega Menu */}
                {link.megaMenu && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max max-w-4xl bg-white/95 backdrop-blur-md shadow-xl rounded-lg overflow-hidden border border-gray-200/50 transition-all duration-300 ${
                      isServicesOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
                  >
                    <div className="p-8 grid grid-cols-5 gap-x-8 gap-y-6">
                      {link.megaMenu.map((category) => (
                        <div key={category.category} className="space-y-4">
                          <h3 className="font-bold text-sm text-[#fbab39] uppercase tracking-wider">{category.category}</h3>
                          <ul className="space-y-3">
                            {category.links.map((item) => (
                              <li key={item.name}>
                                <button
                                  onClick={() => handleDropdownClick(item.path)}
                                  className="block w-full text-left text-sm text-[#212529] hover:text-[#fbab39] transition-colors duration-300"
                                >
                                  {item.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => scrollToSection('/#QuoteForm')}
              className="btn-primary"
            >
              Demander un devis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-[#212529]' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-white z-40 transition-transform duration-500 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.isDownload ? (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full text-lg font-medium text-[#212529] py-3 border-b border-gray-100">
                    <span>{link.name}</span>
                    <Download size={20} />
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      if (link.megaMenu) {
                        setIsServicesOpen(!isServicesOpen);
                      } else {
                        scrollToSection(link.href);
                      }
                    }}
                    className="flex items-center justify-between w-full text-lg font-medium text-[#212529] py-3 border-b border-gray-100"
                  >
                    {link.name}
                    {link.megaMenu && (
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                      />
                    )}
                  </button>
                )}

                {link.megaMenu && isServicesOpen && (
                  <div className="pl-4 py-2 space-y-2">
                    {link.megaMenu.map((category) => (
                      <div key={category.category}>
                        <div className="text-sm text-gray-800 font-bold py-2 mt-2">{category.category}</div>
                        <div className="pl-4 space-y-2">
                          {category.links.map((item) => (
                            <button
                              key={item.name}
                              onClick={() => handleDropdownClick(item.path)}
                              className="block w-full text-left text-sm text-gray-600 py-2 hover:text-[#fbab39]"
                            >
                              {item.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-auto pb-8">
            <button
              onClick={() => scrollToSection('/#QuoteForm')}
              className="btn-primary w-full"
            >
              Demander un devis
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;