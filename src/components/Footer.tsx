import { Heart, Linkedin, Twitter, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'Chi Siamo', href: '#about' },
      { label: 'Team', href: '#team' },
      { label: 'Carriere', href: '#' },
      { label: 'Blog', href: '#' }
    ],
    services: [
      { label: 'App Mobile', href: '#solutions' },
      { label: 'Sviluppo Web', href: '#solutions' },
      { label: 'Consulenza AI', href: '#solutions' },
      { label: 'Analisi Dati', href: '#solutions' }
    ],
    support: [
      { label: 'Documentazione', href: '#' },
      { label: 'Centro Assistenza', href: '#' },
      { label: 'Contatti', href: '#contact' },
      { label: 'FAQ', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Mail size={20} />, href: '#contact', label: 'Email' }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">TechFlow</h3>
            <p className="text-background/80 mb-6 max-w-md">
              Trasformiamo le idee in soluzioni digitali innovative. 
              Il partner tecnologico di fiducia per la crescita del tuo business.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Azienda</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Servizi</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Supporto</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © {currentYear} TechFlow. Tutti i diritti riservati.
          </p>
          <p className="text-background/60 text-sm flex items-center mt-4 md:mt-0">
            Fatto con <Heart className="w-4 h-4 text-red-400 mx-1" /> dal team TechFlow
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;