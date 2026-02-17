import { useLanguage } from '@/contexts/LanguageContext';
import BusinessHours from '@/components/BusinessHours';
import { MapPin, Phone, Star, CheckCircle } from 'lucide-react';

const Info = () => {
  const { t, language } = useLanguage();

  const advantages = {
    nl: [
      'Persoonlijke service en advies op maat',
      'Snelle doorlooptijden zonder kwaliteitsverlies',
      'Gebruik van uitsluitend professionele materialen en lakken',
      'Transparante en eerlijke prijzen',
      'Perfecte kleurmatching met originele kleurcodes',
      'Hulp bij verzekeringsadministratie',
    ],
    fr: [
      'Service personnalisé et conseils sur mesure',
      'Délais rapides sans perte de qualité',
      'Utilisation exclusive de matériaux et peintures professionnels',
      'Prix transparents et honnêtes',
      'Correspondance parfaite des couleurs avec les codes d\'origine',
      'Aide avec l\'administration d\'assurance',
    ],
    en: [
      'Personal service and tailored advice',
      'Quick turnaround times without quality loss',
      'Use of exclusively professional materials and paints',
      'Transparent and fair pricing',
      'Perfect color matching with original color codes',
      'Help with insurance administration',
    ],
  };

  return (
    <>
      <section className="section-navy py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-heading text-primary-foreground mb-4">
            {t('info.title')}
          </h1>
          <p className="text-primary-foreground/70">{t('info.subtitle')}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-muted-foreground leading-relaxed">{t('info.about.p1')}</p>

            <div className="flex items-center gap-3 py-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-gold fill-current" />
                ))}
              </div>
              <span className="font-heading font-bold text-lg">5.0 / 5</span>
              <span className="text-muted-foreground">— 7 reviews</span>
            </div>

            <p className="text-muted-foreground leading-relaxed">{t('info.about.p2')}</p>
            <p className="text-muted-foreground leading-relaxed">{t('info.about.p3')}</p>
          </div>
        </div>
      </section>

      <section className="py-16 section-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading mb-8">{t('info.why.title')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {advantages[language].map((adv) => (
                <div key={adv} className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-sm">
                  <CheckCircle size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{adv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-heading font-bold mb-4">{t('contact.info.title')}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Van Cortbeemdelei 60, 2100 Antwerpen (Deurne), Belgium</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-accent flex-shrink-0" />
                    <a href="tel:+32499202143" className="hover:text-accent transition-colors">+32 499 20 21 43</a>
                  </div>
                </div>
              </div>
              <BusinessHours />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1485.4962847047661!2d4.44098786680669!3d51.232024846048525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f7e2a48421af%3A0xb43ec2c45027c019!2sCarrosserie%20Gwenn%20Dierickx!5e0!3m2!1sen!2sbe!4v1771359443009!5m2!1sen!2sbe"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carrosserie Gwenn Dierickx location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
