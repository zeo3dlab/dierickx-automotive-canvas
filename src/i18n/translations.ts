export type Language = 'nl' | 'fr' | 'en';

export const translations: Record<string, Record<Language, string>> = {
  // Nav
  'nav.home': { nl: 'Home', fr: 'Accueil', en: 'Home' },
  'nav.services': { nl: 'Diensten', fr: 'Services', en: 'Services' },
  'nav.reviews': { nl: 'Reviews', fr: 'Avis', en: 'Reviews' },
  'nav.info': { nl: 'Info', fr: 'Info', en: 'Info' },
  'nav.contact': { nl: 'Contact', fr: 'Contact', en: 'Contact' },

  // Hero
  'hero.title': {
    nl: 'Carrosserie Herstellingen & Auto Lakwerk in Antwerpen (Deurne)',
    fr: 'Réparations de Carrosserie & Peinture Auto à Anvers (Deurne)',
    en: 'Auto Body Repair & Car Paint Work in Antwerp (Deurne)',
  },
  'hero.subtitle': {
    nl: 'Professioneel carrosserieherstel met oog voor detail en kwaliteit',
    fr: 'Réparation de carrosserie professionnelle avec le souci du détail et de la qualité',
    en: 'Professional body repair with attention to detail and quality',
  },
  'hero.cta.call': { nl: 'Bel nu', fr: 'Appelez maintenant', en: 'Call now' },
  'hero.cta.whatsapp': { nl: 'WhatsApp', fr: 'WhatsApp', en: 'WhatsApp' },
  'hero.cta.quote': { nl: 'Vraag een offerte', fr: 'Demander un devis', en: 'Request a quote' },

  // Why choose us
  'why.title': {
    nl: 'Waarom kiezen voor ons?',
    fr: 'Pourquoi nous choisir ?',
    en: 'Why choose us?',
  },
  'why.quality.title': { nl: 'Topkwaliteit', fr: 'Qualité supérieure', en: 'Top Quality' },
  'why.quality.desc': {
    nl: 'Wij leveren uitsluitend werk van de hoogste kwaliteit met professionele materialen.',
    fr: 'Nous fournissons exclusivement un travail de la plus haute qualité avec des matériaux professionnels.',
    en: 'We exclusively deliver work of the highest quality with professional materials.',
  },
  'why.speed.title': { nl: 'Snel & Efficiënt', fr: 'Rapide & Efficace', en: 'Fast & Efficient' },
  'why.speed.desc': {
    nl: 'Snelle doorlooptijden zonder concessies aan kwaliteit.',
    fr: 'Délais rapides sans compromis sur la qualité.',
    en: 'Quick turnaround times without compromising on quality.',
  },
  'why.price.title': { nl: 'Eerlijke Prijs', fr: 'Prix Honnête', en: 'Fair Price' },
  'why.price.desc': {
    nl: 'Transparante en eerlijke prijzen. Geen verrassingen achteraf.',
    fr: 'Prix transparents et honnêtes. Pas de surprises après.',
    en: 'Transparent and fair pricing. No surprises afterwards.',
  },
  'why.service.title': { nl: 'Persoonlijke Service', fr: 'Service Personnel', en: 'Personal Service' },
  'why.service.desc': {
    nl: 'Vriendelijk en persoonlijk advies bij elke herstelling.',
    fr: 'Des conseils amicaux et personnels pour chaque réparation.',
    en: 'Friendly and personal advice for every repair.',
  },

  // Services summary
  'services.title': { nl: 'Onze Diensten', fr: 'Nos Services', en: 'Our Services' },
  'services.subtitle': {
    nl: 'Bekijk ons volledige aanbod van carrosserie- en lakwerkdiensten.',
    fr: 'Découvrez notre gamme complète de services de carrosserie et de peinture.',
    en: 'View our full range of body repair and paint services.',
  },
  'services.viewAll': { nl: 'Bekijk alle diensten', fr: 'Voir tous les services', en: 'View all services' },

  // Services page
  'services.page.title': {
    nl: 'Carrosserie Herstellingen & Auto Lakwerk',
    fr: 'Réparations de Carrosserie & Peinture Auto',
    en: 'Auto Body Repair & Car Paint Work',
  },

  // Body work
  'services.body.title': { nl: 'Carrosseriewerk', fr: 'Travaux de carrosserie', en: 'Body Work' },
  'services.body.dents': { nl: 'Deuk herstelling', fr: 'Réparation de bosses', en: 'Dent Repair' },
  'services.body.dents.desc': {
    nl: 'Professionele verwijdering van deuken en bulten met behoud van de originele lak.',
    fr: 'Suppression professionnelle des bosses tout en préservant la peinture d\'origine.',
    en: 'Professional dent and bump removal while preserving original paint.',
  },
  'services.body.welding': { nl: 'Laswerk', fr: 'Soudure', en: 'Welding' },
  'services.body.welding.desc': {
    nl: 'Vakkundig laswerk voor structurele herstellingen aan het koetswerk.',
    fr: 'Soudure experte pour les réparations structurelles de la carrosserie.',
    en: 'Expert welding for structural body repairs.',
  },
  'services.body.bumper': { nl: 'Bumper reparatie', fr: 'Réparation de pare-chocs', en: 'Bumper Repair' },
  'services.body.bumper.desc': {
    nl: 'Herstelling van bumpers: scheuren, krassen en vervormingen.',
    fr: 'Réparation de pare-chocs : fissures, rayures et déformations.',
    en: 'Bumper repair: cracks, scratches and deformations.',
  },
  'services.body.panels': { nl: 'Paneel reparatie', fr: 'Réparation de panneaux', en: 'Panel Repair' },
  'services.body.panels.desc': {
    nl: 'Reparatie van spatborden, deuren, dorpels en andere carrosserie-onderdelen.',
    fr: 'Réparation d\'ailes, portes, seuils et autres pièces de carrosserie.',
    en: 'Repair of fenders, doors, sills and other body parts.',
  },
  'services.body.alignment': { nl: 'Chassis uitlijning', fr: 'Alignement du châssis', en: 'Chassis Alignment' },
  'services.body.alignment.desc': {
    nl: 'Nauwkeurige herstel van de carrosserie geometrie na een aanrijding.',
    fr: 'Restauration précise de la géométrie de la carrosserie après un accident.',
    en: 'Precise restoration of body geometry after a collision.',
  },

  // Paint work
  'services.paint.title': { nl: 'Lakwerk', fr: 'Peinture', en: 'Paint Work' },
  'services.paint.partial': { nl: 'Deellakwerk', fr: 'Peinture partielle', en: 'Partial Paint' },
  'services.paint.partial.desc': {
    nl: 'Professioneel lakwerk voor individuele panelen: spatborden, deuren, bumpers.',
    fr: 'Peinture professionnelle pour panneaux individuels : ailes, portes, pare-chocs.',
    en: 'Professional painting for individual panels: fenders, doors, bumpers.',
  },
  'services.paint.full': { nl: 'Volledig overlakken', fr: 'Peinture complète', en: 'Full Respray' },
  'services.paint.full.desc': {
    nl: 'Volledige overlak van uw wagen met topkwaliteit autolak.',
    fr: 'Peinture complète de votre véhicule avec une peinture automobile de qualité supérieure.',
    en: 'Complete respray of your vehicle with top quality automotive paint.',
  },
  'services.paint.prep': { nl: 'Professionele voorbereiding', fr: 'Préparation professionnelle', en: 'Professional Preparation' },
  'services.paint.prep.desc': {
    nl: 'Grondige voorbereiding van het oppervlak voor een perfect eindresultaat.',
    fr: 'Préparation approfondie de la surface pour un résultat final parfait.',
    en: 'Thorough surface preparation for a perfect end result.',
  },
  'services.paint.clear': { nl: 'Lak & blanke lak', fr: 'Vernis & laque transparente', en: 'Clear Coat & Lacquer' },
  'services.paint.clear.desc': {
    nl: 'Beschermende blanke laklaag voor langdurige glans en bescherming.',
    fr: 'Couche de vernis protectrice pour un éclat et une protection durables.',
    en: 'Protective clear coat layer for lasting shine and protection.',
  },
  'services.paint.color': { nl: 'Kleurmatching', fr: 'Correspondance des couleurs', en: 'Color Matching' },
  'services.paint.color.desc': {
    nl: 'Exacte kleurmatching op basis van de kleurcode van uw voertuig.',
    fr: 'Correspondance exacte des couleurs basée sur le code couleur de votre véhicule.',
    en: 'Exact color matching based on your vehicle\'s color code.',
  },

  // Insurance
  'services.insurance.title': { nl: 'Verzekeringswerk', fr: 'Travaux d\'assurance', en: 'Insurance Work' },
  'services.insurance.assessment': { nl: 'Schade-expertise', fr: 'Expertise des dommages', en: 'Damage Assessment' },
  'services.insurance.assessment.desc': {
    nl: 'Volledige beoordeling en documentatie van de schade aan uw voertuig.',
    fr: 'Évaluation complète et documentation des dommages de votre véhicule.',
    en: 'Complete assessment and documentation of damage to your vehicle.',
  },
  'services.insurance.docs': { nl: 'Administratie', fr: 'Administration', en: 'Documentation' },
  'services.insurance.docs.desc': {
    nl: 'Wij helpen bij alle administratieve afhandeling met uw verzekeringsmaatschappij.',
    fr: 'Nous vous aidons avec toutes les formalités administratives avec votre assureur.',
    en: 'We help with all administrative processing with your insurance company.',
  },
  'services.insurance.accident': { nl: 'Herstelling na ongeval', fr: 'Réparation après accident', en: 'Accident Repair' },
  'services.insurance.accident.desc': {
    nl: 'Volledige herstelling na een verkeersongeval, van klein tot groot.',
    fr: 'Réparation complète après un accident de la route, du petit au grand.',
    en: 'Complete repair after a traffic accident, from small to large.',
  },

  // Extra services
  'services.extra.title': { nl: 'Extra Diensten', fr: 'Services Supplémentaires', en: 'Additional Services' },
  'services.extra.polish': { nl: 'Polijsten', fr: 'Polissage', en: 'Polishing' },
  'services.extra.polish.desc': {
    nl: 'Professioneel polijsten voor een diepe glans en bescherming.',
    fr: 'Polissage professionnel pour un éclat profond et une protection.',
    en: 'Professional polishing for a deep shine and protection.',
  },
  'services.extra.scratch': { nl: 'Kras verwijdering', fr: 'Suppression des rayures', en: 'Scratch Removal' },
  'services.extra.scratch.desc': {
    nl: 'Verwijdering van oppervlakkige en diepe krassen in de lak.',
    fr: 'Suppression des rayures superficielles et profondes dans la peinture.',
    en: 'Removal of surface and deep scratches in the paint.',
  },
  'services.extra.plastic': { nl: 'Kunststof reparatie', fr: 'Réparation plastique', en: 'Plastic Repair' },
  'services.extra.plastic.desc': {
    nl: 'Vakkundige reparatie van kunststof onderdelen en bekleding.',
    fr: 'Réparation experte des pièces et garnitures en plastique.',
    en: 'Expert repair of plastic parts and trim.',
  },
  'services.extra.refresh': { nl: 'Lak opfrissing', fr: 'Rafraîchissement de la peinture', en: 'Paint Refresh' },
  'services.extra.refresh.desc': {
    nl: 'Vernieuwing van verouderde of verweerde laklagen.',
    fr: 'Renouvellement des couches de peinture vieillies ou altérées.',
    en: 'Renewal of aged or weathered paint layers.',
  },

  // Contact
  'contact.title': { nl: 'Contact', fr: 'Contactez-nous', en: 'Contact us' },
  'contact.subtitle': {
    nl: 'Neem vrijblijvend contact met ons op voor een offerte of advies.',
    fr: 'Contactez-nous sans engagement pour un devis ou des conseils.',
    en: 'Contact us without obligation for a quote or advice.',
  },
  'contact.form.name': { nl: 'Naam', fr: 'Nom', en: 'Name' },
  'contact.form.email': { nl: 'E-mail', fr: 'E-mail', en: 'Email' },
  'contact.form.phone': { nl: 'Telefoonnummer', fr: 'Numéro de téléphone', en: 'Phone number' },
  'contact.form.message': { nl: 'Bericht', fr: 'Message', en: 'Message' },
  'contact.form.files': { nl: 'Foto\'s van de schade', fr: 'Photos des dommages', en: 'Photos of damage' },
  'contact.form.submit': { nl: 'Versturen', fr: 'Envoyer', en: 'Send' },
  'contact.form.success': {
    nl: 'Bedankt! Uw bericht is verzonden.',
    fr: 'Merci ! Votre message a été envoyé.',
    en: 'Thank you! Your message has been sent.',
  },
  'contact.info.title': { nl: 'Contactgegevens', fr: 'Coordonnées', en: 'Contact Details' },

  // Reviews
  'reviews.title': { nl: 'Klantenreviews', fr: 'Avis Clients', en: 'Customer Reviews' },
  'reviews.subtitle': {
    nl: 'Wat onze klanten zeggen over ons werk.',
    fr: 'Ce que nos clients disent de notre travail.',
    en: 'What our customers say about our work.',
  },
  'reviews.rating': { nl: '7 beoordelingen', fr: '7 avis', en: '7 reviews' },

  // Info
  'info.title': { nl: 'Over Ons', fr: 'À Propos', en: 'About Us' },
  'info.subtitle': {
    nl: 'Leer ons beter kennen.',
    fr: 'Apprenez à mieux nous connaître.',
    en: 'Get to know us better.',
  },
  'info.about.p1': {
    nl: 'Carrosserie Gwenn Dierickx is een professioneel carrosserie- en lakwerkbedrijf gevestigd in Deurne, Antwerpen. Met jarenlange ervaring en vakmanschap bieden wij een compleet aanbod van carrosserieherstel, van kleine deukherstel tot volledige overlak.',
    fr: 'Carrosserie Gwenn Dierickx est une entreprise professionnelle de carrosserie et de peinture située à Deurne, Anvers. Avec des années d\'expérience et d\'expertise, nous offrons une gamme complète de réparations de carrosserie, de la petite réparation de bosses à la peinture complète.',
    en: 'Carrosserie Gwenn Dierickx is a professional body repair and paint shop located in Deurne, Antwerp. With years of experience and craftsmanship, we offer a complete range of body repairs, from small dent repairs to full resprays.',
  },
  'info.about.p2': {
    nl: 'Onze reputatie spreekt voor zich: een perfecte score van 5.0 uit 5 sterren op basis van 7 klantenreviews. Onze klanten waarderen onze aandacht voor detail, eerlijke prijzen en persoonlijke service.',
    fr: 'Notre réputation parle d\'elle-même : un score parfait de 5,0 sur 5 étoiles basé sur 7 avis clients. Nos clients apprécient notre souci du détail, nos prix honnêtes et notre service personnalisé.',
    en: 'Our reputation speaks for itself: a perfect score of 5.0 out of 5 stars based on 7 customer reviews. Our customers appreciate our attention to detail, fair prices and personal service.',
  },
  'info.about.p3': {
    nl: 'In vergelijking met andere carrosseriebedrijven in de regio onderscheiden wij ons door onze persoonlijke aanpak, snelle doorlooptijden en het gebruik van uitsluitend professionele materialen. Waar andere workshops vaak lange wachttijden en onpersoonlijke service bieden, staat bij ons de klant centraal.',
    fr: 'Par rapport à d\'autres entreprises de carrosserie de la région, nous nous distinguons par notre approche personnelle, nos délais rapides et l\'utilisation exclusive de matériaux professionnels. Là où d\'autres ateliers offrent souvent de longs délais d\'attente et un service impersonnel, chez nous le client est au centre.',
    en: 'Compared to other body shops in the area, we stand out through our personal approach, quick turnaround times and the use of exclusively professional materials. Where other workshops often offer long waiting times and impersonal service, we put the customer first.',
  },
  'info.why.title': {
    nl: 'Waarom zijn wij de beste keuze?',
    fr: 'Pourquoi sommes-nous le meilleur choix ?',
    en: 'Why are we the best choice?',
  },

  // Business hours
  'hours.title': { nl: 'Openingstijden', fr: 'Heures d\'ouverture', en: 'Opening Hours' },
  'hours.mon': { nl: 'Maandag', fr: 'Lundi', en: 'Monday' },
  'hours.tue': { nl: 'Dinsdag', fr: 'Mardi', en: 'Tuesday' },
  'hours.wed': { nl: 'Woensdag', fr: 'Mercredi', en: 'Wednesday' },
  'hours.thu': { nl: 'Donderdag', fr: 'Jeudi', en: 'Thursday' },
  'hours.fri': { nl: 'Vrijdag', fr: 'Vendredi', en: 'Friday' },
  'hours.sat': { nl: 'Zaterdag', fr: 'Samedi', en: 'Saturday' },
  'hours.sun': { nl: 'Zondag', fr: 'Dimanche', en: 'Sunday' },
  'hours.closed': { nl: 'Gesloten', fr: 'Fermé', en: 'Closed' },

  // Footer
  'footer.rights': { nl: 'Alle rechten voorbehouden.', fr: 'Tous droits réservés.', en: 'All rights reserved.' },
  'footer.address': { nl: 'Adres', fr: 'Adresse', en: 'Address' },
  'footer.phone': { nl: 'Telefoon', fr: 'Téléphone', en: 'Phone' },
  'footer.navigation': { nl: 'Navigatie', fr: 'Navigation', en: 'Navigation' },

  // CTA
  'cta.quote': { nl: 'Vraag een offerte', fr: 'Demander un devis', en: 'Request a quote' },

  // Common
  'common.readMore': { nl: 'Lees meer', fr: 'En savoir plus', en: 'Read more' },
};
