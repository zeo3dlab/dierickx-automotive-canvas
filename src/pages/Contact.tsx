import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import BusinessHours from '@/components/BusinessHours';
import { Phone, MessageCircle, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="section-navy py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-heading text-primary-foreground mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div>
              {submitted ? (
                <div className="bg-card rounded-lg p-8 shadow-md text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <p className="text-lg font-heading font-bold">{t('contact.form.success')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 shadow-md space-y-5">
                  <div>
                    <label className="block text-sm font-heading font-semibold mb-1">{t('contact.form.name')} *</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      className="w-full border border-border rounded-md px-4 py-3 text-sm bg-background focus:ring-2 focus:ring-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold mb-1">{t('contact.form.email')} *</label>
                    <input
                      type="email"
                      required
                      maxLength={255}
                      className="w-full border border-border rounded-md px-4 py-3 text-sm bg-background focus:ring-2 focus:ring-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold mb-1">{t('contact.form.phone')}</label>
                    <input
                      type="tel"
                      maxLength={20}
                      className="w-full border border-border rounded-md px-4 py-3 text-sm bg-background focus:ring-2 focus:ring-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold mb-1">{t('contact.form.message')} *</label>
                    <textarea
                      required
                      maxLength={2000}
                      rows={5}
                      className="w-full border border-border rounded-md px-4 py-3 text-sm bg-background focus:ring-2 focus:ring-accent focus:outline-none resize-y"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold mb-1">{t('contact.form.files')}</label>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-accent file:text-accent-foreground hover:file:bg-bordo-light file:cursor-pointer"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-accent hover:bg-bordo-light text-accent-foreground font-heading font-bold uppercase px-8 py-4 rounded-md transition-colors text-sm tracking-wider w-full justify-center"
                  >
                    <Send size={18} />
                    {t('contact.form.submit')}
                  </button>
                </form>
              )}
            </div>

            {/* Contact info + hours + map */}
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-heading font-bold mb-4">{t('contact.info.title')}</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Van Cortbeemdelei 60, 2100 Antwerpen (Deurne), Belgium</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-accent flex-shrink-0" />
                    <a href="tel:+32499202143" className="hover:text-accent transition-colors">+32 499 20 21 43</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle size={18} className="text-accent flex-shrink-0" />
                    <a href="https://wa.me/32499202143?text=Hallo%2C+ik+wil+een+offerte+aanvragen" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">WhatsApp</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-accent flex-shrink-0" />
                    <a href="mailto:info@carrosseriedig.be" className="hover:text-accent transition-colors">info@carrosseriedig.be</a>
                  </div>
                </div>
              </div>

              <BusinessHours />

              <div className="rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1485.4962847047661!2d4.44098786680669!3d51.232024846048525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f7e2a48421af%3A0xb43ec2c45027c019!2sCarrosserie%20Gwenn%20Dierickx!5e0!3m2!1sen!2sbe!4v1771359443009!5m2!1sen!2sbe"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carrosserie Gwenn Dierickx location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
