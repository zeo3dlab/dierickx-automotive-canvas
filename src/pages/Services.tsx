import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Wrench, Paintbrush, FileCheck, Sparkles, ArrowRight } from 'lucide-react';

interface ServiceItem {
  titleKey: string;
  descKey: string;
}

interface ServiceSection {
  titleKey: string;
  icon: React.ReactNode;
  items: ServiceItem[];
}

const Services = () => {
  const { t } = useLanguage();

  const sections: ServiceSection[] = [
    {
      titleKey: 'services.body.title',
      icon: <Wrench size={28} />,
      items: [
        { titleKey: 'services.body.dents', descKey: 'services.body.dents.desc' },
        { titleKey: 'services.body.welding', descKey: 'services.body.welding.desc' },
        { titleKey: 'services.body.bumper', descKey: 'services.body.bumper.desc' },
        { titleKey: 'services.body.panels', descKey: 'services.body.panels.desc' },
        { titleKey: 'services.body.alignment', descKey: 'services.body.alignment.desc' },
      ],
    },
    {
      titleKey: 'services.paint.title',
      icon: <Paintbrush size={28} />,
      items: [
        { titleKey: 'services.paint.partial', descKey: 'services.paint.partial.desc' },
        { titleKey: 'services.paint.full', descKey: 'services.paint.full.desc' },
        { titleKey: 'services.paint.prep', descKey: 'services.paint.prep.desc' },
        { titleKey: 'services.paint.clear', descKey: 'services.paint.clear.desc' },
        { titleKey: 'services.paint.color', descKey: 'services.paint.color.desc' },
      ],
    },
    {
      titleKey: 'services.insurance.title',
      icon: <FileCheck size={28} />,
      items: [
        { titleKey: 'services.insurance.assessment', descKey: 'services.insurance.assessment.desc' },
        { titleKey: 'services.insurance.docs', descKey: 'services.insurance.docs.desc' },
        { titleKey: 'services.insurance.accident', descKey: 'services.insurance.accident.desc' },
      ],
    },
    {
      titleKey: 'services.extra.title',
      icon: <Sparkles size={28} />,
      items: [
        { titleKey: 'services.extra.polish', descKey: 'services.extra.polish.desc' },
        { titleKey: 'services.extra.scratch', descKey: 'services.extra.scratch.desc' },
        { titleKey: 'services.extra.plastic', descKey: 'services.extra.plastic.desc' },
        { titleKey: 'services.extra.refresh', descKey: 'services.extra.refresh.desc' },
      ],
    },
  ];

  return (
    <>
      {/* Page header */}
      <section className="section-navy py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-heading text-primary-foreground mb-4">
            {t('services.page.title')}
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">{t('services.subtitle')}</p>
        </div>
      </section>

      {/* Service sections */}
      {sections.map((section, idx) => (
        <section key={section.titleKey} className={idx % 2 === 0 ? 'py-16' : 'py-16 section-beige'}>
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                {section.icon}
              </div>
              <h2 className="text-2xl md:text-3xl font-heading">{t(section.titleKey)}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item) => (
                <div key={item.titleKey} className="bg-card rounded-lg p-6 shadow-md border border-border">
                  <h3 className="font-heading font-bold text-lg mb-2">{t(item.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t(item.descKey)}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-accent font-heading font-semibold text-sm uppercase hover:underline"
                  >
                    {t('cta.quote')} <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Services;
