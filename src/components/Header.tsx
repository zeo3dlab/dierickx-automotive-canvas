import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import logo from '@/assets/logo.png';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/reviews', label: t('nav.reviews') },
    { path: '/info', label: t('nav.info') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Carrosserie Gwenn Dierickx - Antwerpen" className="h-14 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-heading text-sm font-semibold uppercase tracking-wider transition-colors ${
                location.pathname === item.path
                  ? 'text-accent'
                  : 'text-primary-foreground/80 hover:text-primary-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Language + mobile toggle */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-primary border-t border-primary-foreground/10 px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 font-heading text-sm font-semibold uppercase tracking-wider border-b border-primary-foreground/10 ${
                location.pathname === item.path
                  ? 'text-accent'
                  : 'text-primary-foreground/80'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
