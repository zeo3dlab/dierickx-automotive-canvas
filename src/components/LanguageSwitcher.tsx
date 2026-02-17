import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/i18n/translations';

const languages: { code: Language; label: string }[] = [
  { code: 'nl', label: 'NL' },
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang, i) => (
        <span key={lang.code} className="flex items-center">
          <button
            onClick={() => setLanguage(lang.code)}
            className={`px-2 py-1 text-sm font-heading font-semibold uppercase transition-colors ${
              language === lang.code
                ? 'text-accent'
                : 'text-primary-foreground/70 hover:text-primary-foreground'
            }`}
          >
            {lang.label}
          </button>
          {i < languages.length - 1 && (
            <span className="text-primary-foreground/30">|</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
