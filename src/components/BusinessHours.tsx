import { useLanguage } from '@/contexts/LanguageContext';
import { Clock } from 'lucide-react';

const BusinessHours = () => {
  const { t } = useLanguage();

  const hours = [
    { day: t('hours.mon'), time: '8:00–12:00, 13:00–18:00' },
    { day: t('hours.tue'), time: '8:00–12:00, 13:00–18:00' },
    { day: t('hours.wed'), time: '8:00–12:00, 13:00–18:00' },
    { day: t('hours.thu'), time: '8:00–12:00, 13:00–18:00' },
    { day: t('hours.fri'), time: '8:00–12:00, 13:00–17:00' },
    { day: t('hours.sat'), time: t('hours.closed') },
    { day: t('hours.sun'), time: t('hours.closed') },
  ];

  return (
    <div className="bg-card rounded-lg p-6 shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <Clock size={20} className="text-accent" />
        <h3 className="text-lg font-heading font-bold text-foreground">{t('hours.title')}</h3>
      </div>
      <div className="space-y-2">
        {hours.map((h) => (
          <div key={h.day} className="flex justify-between text-sm">
            <span className="font-medium text-foreground">{h.day}</span>
            <span className={h.time === t('hours.closed') ? 'text-accent font-semibold' : 'text-muted-foreground'}>
              {h.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessHours;
