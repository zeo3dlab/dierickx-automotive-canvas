import { useLanguage } from '@/contexts/LanguageContext';
import { Star } from 'lucide-react';
import { Language } from '@/i18n/translations';

interface Review {
  name: string;
  date: string;
  text: Record<Language, string>;
}

const reviews: Review[] = [
  {
    name: 'M K',
    date: '1 year ago',
    text: {
      nl: 'Door drukke schema\'s had ik geen tijd om mijn auto schoon te maken. Gwenn had het eerst schoongemaakt en daarna de schade hersteld! Ik zal je zeker aanbevelen bij anderen. Bedankt 👍',
      fr: 'En raison d\'un emploi du temps chargé, je n\'avais pas le temps de nettoyer ma voiture. Gwenn l\'a d\'abord nettoyée puis a réparé les dégâts ! Je vous recommanderai certainement. Merci 👍',
      en: 'Due to busy schedules, I didn\'t have time to clean my car. Gwenn had it cleaned first and then repaired the damage! I will definitely recommend you to others. Thanks 👍',
    },
  },
  {
    name: 'Hemmo Hansen',
    date: '1 year ago',
    text: {
      nl: 'Geweldige hulp met expertise en het reparatie- en spuitwerk. Top Gwenn, bedankt!',
      fr: 'Excellente aide avec expertise et le travail de réparation et de peinture. Top Gwenn, merci !',
      en: 'Great help with expertise and the repair and spray work. Top Gwenn, thank you!',
    },
  },
  {
    name: 'Nicusor Gheorghe',
    date: '8 months ago',
    text: {
      nl: 'Buitengewoon goed werk. De kwaliteit van het lakwerk is perfect, je ziet geen verschil met het origineel.',
      fr: 'Travail extraordinairement bon. La qualité de la peinture est parfaite, on ne voit aucune différence avec l\'original.',
      en: 'Extraordinarily good work. The quality of the paint job is perfect, you can\'t see any difference from the original.',
    },
  },
  {
    name: 'Jan De Smedt',
    date: '6 months ago',
    text: {
      nl: 'Mijn bumper was flink beschadigd na een parkeerschade. Gwenn heeft het perfect hersteld, snelle service en eerlijke prijs. Zeker een aanrader!',
      fr: 'Mon pare-chocs était sérieusement endommagé après un accrochage en stationnement. Gwenn l\'a parfaitement réparé, service rapide et prix honnête. Vivement recommandé !',
      en: 'My bumper was seriously damaged after a parking accident. Gwenn repaired it perfectly, fast service and fair price. Highly recommended!',
    },
  },
  {
    name: 'Sophie Verhoeven',
    date: '5 months ago',
    text: {
      nl: 'Zeer tevreden over de volledige overlak van mijn wagen. Het resultaat is als nieuw. Gwenn is zeer professioneel en vriendelijk. Topservice!',
      fr: 'Très satisfaite de la peinture complète de ma voiture. Le résultat est comme neuf. Gwenn est très professionnel et amical. Service top !',
      en: 'Very satisfied with the full respray of my car. The result is like new. Gwenn is very professional and friendly. Top service!',
    },
  },
  {
    name: 'Ahmed Benali',
    date: '3 months ago',
    text: {
      nl: 'Na een ongeval heeft Gwenn mijn auto volledig hersteld. De verzekeringsadministratie werd ook geholpen. Heel tevreden met het resultaat en de snelle afhandeling.',
      fr: 'Après un accident, Gwenn a entièrement réparé ma voiture. L\'administration d\'assurance a aussi été aidée. Très satisfait du résultat et du traitement rapide.',
      en: 'After an accident, Gwenn fully repaired my car. The insurance administration was also helped. Very satisfied with the result and quick handling.',
    },
  },
  {
    name: 'Eva Martens',
    date: '2 months ago',
    text: {
      nl: 'Uitstekend vakmanschap! Kleine krassen en deuken zijn volledig verdwenen. De aandacht voor detail is indrukwekkend. Ik kom hier zeker terug.',
      fr: 'Excellent savoir-faire ! Les petites rayures et bosses ont complètement disparu. L\'attention aux détails est impressionnante. J\'y retournerai certainement.',
      en: 'Excellent craftsmanship! Small scratches and dents have completely disappeared. The attention to detail is impressive. I will definitely come back.',
    },
  },
];

const Reviews = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <section className="section-navy py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-heading text-primary-foreground mb-4">
            {t('reviews.title')}
          </h1>
          <p className="text-primary-foreground/70">{t('reviews.subtitle')}</p>
          <div className="flex items-center justify-center gap-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="text-gold fill-current" />
            ))}
            <span className="text-primary-foreground ml-2 font-heading font-bold text-xl">5.0 / 5</span>
            <span className="text-primary-foreground/60 ml-1">— {t('reviews.rating')}</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {reviews.map((review) => (
              <div key={review.name} className="bg-card rounded-lg p-6 shadow-md border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-heading font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-current" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {review.text[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
