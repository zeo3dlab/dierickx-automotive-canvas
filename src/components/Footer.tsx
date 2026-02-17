import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const { t } = useLanguage();

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/reviews', label: t('nav.reviews') },
    { path: '/info', label: t('nav.info') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="section-navy">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & info */}
          <div>
            <img src={logo} alt="Carrosserie Gwenn Dierickx" className="h-16 mb-4" />
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Carrosserie Gwenn Dierickx — Professioneel carrosserieherstel in Deurne, Antwerpen.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg mb-4 text-primary-foreground">{t('footer.navigation')}</h3>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4 text-primary-foreground">{t('contact.info.title')}</h3>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                <span>Van Cortbeemdelei 60, 2100 Antwerpen (Deurne), Belgium</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0 text-accent" />
                <a href="tel:+32499202143" className="hover:text-accent transition-colors">+32 499 20 21 43</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Carrosserie Gwenn Dierickx. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
