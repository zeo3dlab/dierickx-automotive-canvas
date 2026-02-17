import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, MessageCircle, FileText, Star, Shield, Zap, DollarSign, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BusinessHours from '@/components/BusinessHours';
import heroBg from '@/assets/hero-bg.jpg';
import { Language } from '@/i18n/translations';

const Index = () => {
  const { t, language } = useLanguage();

  const whyItems = [
    { icon: Shield, title: t('why.quality.title'), desc: t('why.quality.desc') },
    { icon: Zap, title: t('why.speed.title'), desc: t('why.speed.desc') },
    { icon: DollarSign, title: t('why.price.title'), desc: t('why.price.desc') },
    { icon: Heart, title: t('why.service.title'), desc: t('why.service.desc') },
  ];

  const servicesSummary: { icon: string; title: Record<Language, string> }[] = [
    { icon: '🔧', title: { nl: 'Carrosserie', fr: 'Carrosserie', en: 'Body Work' } },
    { icon: '🎨', title: { nl: 'Lakwerk', fr: 'Peinture', en: 'Paint Work' } },
    { icon: '📋', title: { nl: 'Verzekeringswerk', fr: 'Assurance', en: 'Insurance' } },
  ];

  const reviews: { name: string; text: Record<Language, string> }[] = [
    {
      name: 'M K',
      text: {
        nl: 'Door drukke schema\'s had ik geen tijd om mijn auto schoon te maken. Gwenn had het eerst schoongemaakt en daarna de schade hersteld! Ik zal je zeker aanbevelen bij anderen. Bedankt 👍',
        fr: 'En raison d\'un emploi du temps chargé, je n\'avais pas le temps de nettoyer ma voiture. Gwenn l\'a d\'abord nettoyée puis a réparé les dégâts ! Je vous recommanderai certainement. Merci 👍',
        en: 'Due to busy schedules, I didn\'t have time to clean my car. Gwenn had it cleaned first and then repaired the damage! I will definitely recommend you to others. Thanks 👍',
      },
    },
    {
      name: 'Hemmo Hansen',
      text: {
        nl: 'Geweldige hulp met expertise en het reparatie- en spuitwerk. Top Gwenn, bedankt!',
        fr: 'Excellente aide avec expertise et le travail de réparation et de peinture. Top Gwenn, merci !',
        en: 'Great help with expertise and the repair and spray work. Top Gwenn, thank you!',
      },
    },
    {
      name: 'Nicusor Gheorghe',
      text: {
        nl: 'Buitengewoon goed werk. De kwaliteit van het lakwerk is perfect.',
        fr: 'Travail extraordinairement bon. La qualité de la peinture est parfaite.',
        en: 'Extraordinarily good work. The quality of the paint job is perfect.',
      },
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="absolute top-1/2 left-0 w-32 h-[2px] bg-gradient-to-r from-transparent to-gold/30 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-32 h-[2px] bg-gradient-to-l from-transparent to-gold/30 -translate-y-1/2" />

        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-gold fill-current" />
            ))}
            <span className="text-primary-foreground/70 text-sm ml-2">5.0 / 5 — 7 reviews</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+32499202143"
              className="inline-flex items-center gap-2 bg-accent hover:bg-bordo-light text-accent-foreground font-heading font-bold uppercase px-8 py-4 rounded-md transition-colors text-sm tracking-wider"
            >
              <Phone size={18} />
              {t('hero.cta.call')} — 0499 20 21 43
            </a>
            <a
              href="https://wa.me/32499202143?text=Hallo%2C+ik+wil+een+offerte+aanvragen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-bold uppercase px-8 py-4 rounded-md transition-colors text-sm tracking-wider"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground font-heading font-bold uppercase px-8 py-4 rounded-md transition-colors text-sm tracking-wider"
            >
              <FileText size={18} />
              {t('hero.cta.quote')}
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 section-beige">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">{t('why.title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyItems.map((item) => (
              <div key={item.title} className="bg-card rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-accent" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services summary */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-4">{t('services.title')}</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{t('services.subtitle')}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {servicesSummary.map((s) => (
              <div key={s.icon} className="bg-card rounded-lg p-8 shadow-md border border-border">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-heading font-bold">{s.title[language]}</h3>
              </div>
            ))}
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-accent hover:bg-bordo-light text-accent-foreground font-heading font-bold uppercase px-8 py-4 rounded-md transition-colors text-sm tracking-wider"
          >
            {t('services.viewAll')}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Reviews preview */}
      <section className="py-20 section-beige">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">{t('reviews.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {reviews.map((r) => (
              <div key={r.name} className="bg-card rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-gold fill-current" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed italic">"{r.text[language]}"</p>
                <p className="font-heading font-bold text-sm">{r.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/reviews" className="inline-flex items-center gap-2 text-accent font-heading font-bold uppercase text-sm hover:underline">
              {t('common.readMore')} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Business Hours & Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <BusinessHours />
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1485.4962847047661!2d4.44098786680669!3d51.232024846048525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f7e2a48421af%3A0xb43ec2c45027c019!2sCarrosserie%20Gwenn%20Dierickx!5e0!3m2!1sen!2sbe!4v1771359443009!5m2!1sen!2sbe"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 350 }}
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

export default Index;
