/**
 * Contenu éditorial No Borders ASBL.
 * Toutes les informations proviennent du site officiel https://www.nobordersasbl.be/
 * Aucun chiffre, événement, partenaire ou témoignage n'a été inventé.
 */

export const site = {
  name: "No Borders ASBL",
  tagline: "Briseur de frontières mentales",
  description:
    "Pour faire de notre diversité culturelle une richesse, No Borders ASBL favorise les rencontres interculturelles à travers des activités socio-culturelles et sportives à Mons.",
  url: "https://www.nobordersasbl.be",
  phone: "+32 (0)496 96 91 25",
  phoneHref: "tel:+32496969125",
  email: "gmunyanziza@yahoo.fr",
  address: { street: "Rue Aux Vignes", city: "Mons", region: "Wallonie", zip: "7012", country: "Belgique" },
  company: "0837.069.715",
  iban: "BE70 0689 3026 8625",
  eshop: { label: "Bamboo4OurPlanet.com", href: "https://bamboo4ourplanet.com" },
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100014192138276" },
    { label: "Instagram", href: "https://www.instagram.com/nobordersasb/" },
    { label: "YouTube", href: "https://www.youtube.com/channel/UCKsJzVvxdJDkOkw0r_T-ZKw/" },
  ],
} as const;

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Notre projet", href: "/notre-projet" },
  { label: "Nos activités", href: "/nos-activites" },
  { label: "Boutique", href: "/boutique" },
  { label: "Actualités", href: "/actualites" },
  { label: "Presse", href: "/presse" },
  { label: "Nous contacter", href: "/nous-contacter" },
] as const;

export const intro =
  "En 2007 à Mons, la communauté africaine vivant dans la capitale culturelle de la Wallonie s’est bien élargie. Par souci de confort, les gens vivent dans leur communauté en fonction de leur pays d’origine. Cela crée en même temps des cloisonnements qui freinent leur intégration et inclusion dans la société locale. Pour pallier cette problématique et faire de notre diversité culturelle une richesse, nous avons fondé No Borders ASBL pour favoriser les rencontres interculturelles à travers les activités socio-culturelles et sportives.";

export type TimelineItem = { year: string; title: string; text: string; image: string };

export const timeline: TimelineItem[] = [
  {
    year: "2007",
    title: "Tout commence Place du Parc",
    text: "Tout a commencé à la Place du Parc à Mons lorsqu’un groupe de copains s’y réunissait pour jouer au football pendant la pause durant le blocus.",
    image: "/images/debut-1.jpg",
  },
  {
    year: "2008 — 2014",
    title: "Une équipe à l’image de nos origines",
    text: "Création d’une équipe de football et participation au sein du RGCCMB (Royal Groupement Corporatif du Centre Mons Borinage). L’association Sercom nous rejoint pour sponsoriser nos activités. Une très belle période marquée par quelques succès en championnat et une équipe multiculturelle : plus de 8 nationalités représentées.",
    image: "/images/debut-3.jpg",
  },
  {
    year: "2015",
    title: "Traverser les difficultés",
    text: "Difficultés financières et organisationnelles accompagnées par la sortie du championnat.",
    image: "/images/debut-5.jpg",
  },
  {
    year: "2016",
    title: "Une formule plus inclusive",
    text: "Une nouvelle formule avec des activités plus inclusives (hommes, femmes, enfants) est créée : sorties culturelles, animations thématiques, mini-football, marche, vélo, découvertes culinaires…",
    image: "/images/mini-foot.jpg",
  },
  {
    year: "2019",
    title: "Vers un réel impact social",
    text: "Intégration des initiatives entrepreneuriales axées sur la mobilité douce, la valorisation de ressources locales, la protection de l’environnement et la solidarité Nord-Sud.",
    image: "/images/lancement-myboo.jpg",
  },
];

export const values = [
  {
    title: "Ouverture d’esprit",
    text: "« Un esprit est comme un parachute. Il ne fonctionne pas s’il n’est pas ouvert. »",
    cite: "Frank Zappa",
  },
  {
    title: "Le respect mutuel",
    text: "Tout individu mérite du respect et celui-ci doit être réciproque.",
  },
  {
    title: "La solidarité",
    text: "Le monde se portera mieux quand il y aura moins d’inégalités sociales et économiques.",
  },
] as const;

export type Activity = { title: string; subtitle: string; text: string; image: string; tag: string };

export const activities: Activity[] = [
  {
    tag: "Culture",
    title: "Activités socio-culturelles",
    subtitle: "Basées sur diverses thématiques",
    text: "Animations thématiques autour de l’interculturalité, portées par différents intervenants.",
    image: "/images/socio-culturelles.jpg",
  },
  {
    tag: "Découverte",
    title: "Sorties culturelles",
    subtitle: "Musées, patrimoine, nature",
    text: "Visites de musées, découverte du patrimoine belge et sorties nature ouvertes à toutes et tous.",
    image: "/images/sorties-culturelles.jpg",
  },
  {
    tag: "Sport",
    title: "Organisations sportives",
    subtitle: "Football · Natation · Cyclisme · Marche",
    text: "Le sport comme vecteur d’intégration : les règles sont les mêmes pour tous.",
    image: "/images/organisations-sportives.jpg",
  },
  {
    tag: "Mobilité douce",
    title: "Promotion & vente d’articles",
    subtitle: "Vélos en bambou · Hase Bikes · …",
    text: "Des vélos justes, équitables et bons pour l’environnement.",
    image: "/images/vente-velo.jpg",
  },
];

export const objectives = [
  {
    id: "inclusion",
    title: "Intégration et inclusion sociale",
    text: "Dans l’objectif d’améliorer le vivre ensemble, nous accueillons et accompagnons les primo-arrivants et nous organisons des activités qui permettent la mixité sociale. Nous motivons ainsi les personnes d’origine étrangère à s’adapter à la vie socio-culturelle de leur pays d’accueil et à mettre leur savoir-faire à son service. En parallèle, nous facilitons des rencontres qui suscitent de l’intérêt auprès de la population locale, qui permettent de mieux connaître les étrangers et de briser les préjugés et les clichés dans les deux sens.",
    image: "/images/projet-reunion.jpg",
  },
  {
    id: "interculturalite",
    title: "Promotion de l’interculturalité",
    text: "Notre société devient de plus en plus multiculturelle. Nous organisons diverses activités qui permettent de faire de la diversité culturelle une richesse et non un frein à l’intégration et à l’inclusion sociale. Plusieurs thématiques abordant l’interculturalité sont animées par différents intervenants (le rôle de la musique dans les apprentissages, la sexualité en milieu interculturel, la communication non verbale, le mariage, la fracture numérique…). Nous luttons également contre le racisme et d’autres formes d’exclusion basées sur l’âge, le genre, la religion, le handicap et l’orientation sexuelle.",
    image: "/images/educ-art.jpg",
  },
  {
    id: "mobilite",
    title: "Promotion de la mobilité douce et sensibilisation à la protection de l’environnement",
    text: "Face aux enjeux environnementaux (pollution, saturation du réseau routier, réchauffement climatique) et pour promouvoir les bienfaits du vélo (sur l’esprit, sur le corps et sur le portefeuille), nous préconisons l’usage fréquent du vélo dans nos déplacements. Nous motivons en particulier les femmes africaines à utiliser le vélo afin de créer une activité plus inclusive. Nous sensibilisons aussi la population à l’usage de produits écologiques et/ou issus de l’économie circulaire.",
    image: "/images/bxl-tour.jpg",
  },
  {
    id: "nord-sud",
    title: "Promotion de la solidarité Nord-Sud",
    text: "Notre propre parcours et les origines de nos différents membres nous poussent à soutenir les initiatives entrepreneuriales développées dans les Suds et à établir des partenariats dans le but de créer un réel impact social.",
    image: "/images/ghana-booomers.jpg",
  },
] as const;

export const horizon = {
  title: "Notre horizon 2025",
  text: "Une amélioration de notre vivre ensemble et une création d’emplois. Nous sommes intimement convaincus qu’une intégration socio-culturelle réussie va de pair avec une intégration professionnelle. Notre volonté est d’utiliser nos différents leviers, culturels et sportifs, afin de créer quelques emplois durables.",
  motto: "Plus loin ! Plus haut ! Plus fort ! Ensemble.",
};

/** Images affichées en fin de page « Notre Projet » (ancien slider). */
export const projectSlider = [
  { src: "/slider/P40+ICHEC.webp", alt: "ICHEC" },
  { src: "/slider/P93+Dragon+Audax+Mons.webp", alt: "Dragon Audax Mons" },
  { src: "/slider/Parker+Hannifin.webp", alt: "Parker Hannifin" },
] as const;

export type Testimonial = { name: string; image: string; quote: string; question?: string; full: string[] };

/** Témoignages publiés sur la page « Notre Projet » du site officiel. */
export const testimonials: Testimonial[] = [
  {
    name: "Yves-Marie Habumuremyi",
    image: "/images/t-yves-marie.png",
    quote: "Tout le monde est le bienvenu dans notre ASBL car on se veut sans frontières : No Borders = Sans Frontières.",
    full: [
      "Tout le monde est le bienvenu dans notre Asbl car on se veut sans frontières et d'ailleurs No Borders = Sans Frontières.",
      "Ma plus grande fierté fut la coupe du Fair-Play 2011 : non seulement nous étions finalistes en coupe, mais nous avons aussi été la meilleure équipe bien disciplinée, pas de cartons rouges, pas d'amendes quasiment toute la saison… C'était tout simplement une saison parfaite.",
      "Mon souhait est qu'il y ait quelques jeunes ou moins jeunes qui veulent prendre le flambeau et animer de manière régulière notre aventure footballistique interrompue… les anciens seront tous derrière vous, c'est promis. Je lance donc un appel car en Corpo on nous attend toujours.",
    ],
  },
  {
    name: "Benjamin Germiat",
    image: "/images/t-benjamin.png",
    quote: "Le sport est bel et bien un magnifique vecteur d’intégration : peu importe les origines, les règles sont les mêmes pour tous.",
    full: [
      "Ce fut une expérience très enrichissante, et je suis à la fois heureux et fier d’avoir pris part à l’aventure des No Borders. Le sport est bel et bien un magnifique vecteur d’intégration : peu importe les origines ou la couleur de peau, le jeu se joue de la même manière et les règles sont les mêmes pour tous.",
    ],
  },
  {
    name: "Giuseppe Ciccia",
    image: "/images/t-giuseppe.png",
    quote: "J’ai rencontré des personnes formidables venues de tous horizons, ce qui m’a permis un enrichissement culturel incroyable.",
    question: "Qu'est-ce que notre club t'a apporté sur le plan perso et culturel ?",
    full: [
      "Personnellement j’ai rencontré des personnes formidables qui venaient de tous horizons, ce qui m’a permis un enrichissement culturel incroyable ; bon nombre d’entre eux sont devenus des amis avec le temps. Chapeau à votre association qui a eu une superbe idée de mixage culturel à l’époque, c’était à l’avant-garde par rapport aux problèmes de cultures qu'on peut rencontrer aujourd’hui dans la société.",
      "Sportivement aussi il y a eu beaucoup de plaisir à se retrouver chaque weekend pour les matchs, surtout pour moi qui habite du côté d’Arlon : la route n’a jamais été un problème, je n’aurais raté le match pour rien au monde !",
      "Enfin je me suis inspiré personnellement des No Borders pour créer mes No Border ici du côté d’Arlon au foot en salle l’an passé, la pérennité de ce projet s’étend en Belgique et est donc assurée pour encore longtemps. Qui sait, peut-être un jour il y aura les No Border au basket ou autre ?",
    ],
  },
  {
    name: "Jean-Paul Foki",
    image: "/images/t-jean-paul.png",
    quote: "Je retiens la richesse de mes rencontres et la satisfaction de partager une expérience humaine forte en émotions.",
    full: [
      "J’ai souvent aimé rendre service aux individus et quand j’ai enfin eu le temps de le faire, j’ai décidé de le consacrer à No Borders avec qui nous cheminons depuis longtemps. Je n’ai jamais hésité à m’engager comme bénévole pour cette association, surtout à cause des projets qu’elle souhaite développer : visite des musées, activités sportives (football, golf, vélo…), participation citoyenne (visite du patrimoine belge, Wallonie propre), engagement avec d’autres associations afin de mettre en place des idées et des actions pour le vivre ensemble, et la mise en valeur de vélos justes, équitables et bons pour l’environnement à l’instar des vélos en bambou (My Boo).",
      "Au-delà de ces actions et de nos résultats, je retiens la richesse de mes rencontres, le besoin d'échanges, outre la satisfaction de partager une expérience humaine forte en émotions. Je tiens à remercier les responsables qui ont été d’un grand accueil et d’une grande confiance à mon égard.",
    ],
  },
];

export type PressItem = { date: string; isoDate: string; title: string; excerpt: string; image: string; href?: string; source?: string };

/** Articles listés sur la page « Presse » du site officiel. */
export const press: PressItem[] = [
  {
    date: "8 juin 2020",
    isoDate: "2020-06-08",
    title: "No Borders vs Fedasil Mouscron — match du 26/10/19",
    excerpt:
      "Le 26.10.2019, No Borders ASBL recevait les jeunes du centre Fedasil de Mouscron : match amical de football gagné par les visiteurs. Le sport n'a pas de couleurs !",
    image: "/images/press-fedasil.png",
  },
  {
    date: "6 juin 2020",
    isoDate: "2020-06-06",
    title: "Sinds kort rijden ze ook rond in ons land: fietsen gemaakt uit bamboe",
    excerpt: "Reportage de la VRT sur l’arrivée des vélos en bambou sur les routes belges.",
    image: "/images/press-vrt.jpg",
    href: "https://www.vrt.be/vrtnws/nl/2019/08/17/bamboefietsen-doen-intrede-op-de-belgische-wegen/",
    source: "VRT NWS",
  },
  {
    date: "6 juin 2020",
    isoDate: "2020-06-06",
    title: "Les Belges du bout du monde au Ghana avec Gunter Pauli",
    excerpt: "Émission de la RTBF « Les Belges du bout du monde » tournée au Ghana.",
    image: "/images/press-rtbf.jpg",
    href: "https://www.rtbf.be/emission/les-belges-du-bout-du-monde/detail_les-belges-du-bout-du-monde-au-ghana-avec-gunter-pauli?id=10165038",
    source: "RTBF",
  },
  {
    date: "10 avril 2020",
    isoDate: "2020-04-10",
    title: "Des vélos en bambou pour un avenir durable",
    excerpt: "Vélos en bambou My Boo : écologiques et solidaires.",
    image: "/images/press-myboo.jpg",
  },
];

export type EventItem = { title: string; date: string; isoDate: string; place: string; href?: string };

/**
 * Événements à venir — structure prête à être complétée.
 * L'ancien site affichait un flux Eventbrite : ajoutez ici les événements confirmés.
 */
export const events: EventItem[] = [];

export type Partner = { name: string; logo: string; href: string };

export const partners: Partner[] = [
  { name: "BMW", logo: "/images/p-bmw.png", href: "https://www.bmw.be/fr/home.html" },
  { name: "My Boo", logo: "/images/p-myboo.png", href: "http://www.my-boo.com" },
  { name: "Concept Performance", logo: "/images/p-concept-performance.png", href: "http://www.concept-performance.com" },
  { name: "EcoBirdy", logo: "/images/p-ecobirdy.png", href: "https://www.ecobirdy.com" },
  { name: "Hase Bikes", logo: "/images/p-hase-bikes.jpg", href: "http://www.hasebikes.com" },
  { name: "Le Tour d'Afrique", logo: "/images/p-tour-afrique.jpg", href: "http://www.letourdafrique.com" },
  { name: "Training Plus", logo: "/images/p-training-plus.png", href: "http://www.trainingplus.be" },
];

export const supporters: Partner[] = [
  {
    name: "Fédération Wallonie-Bruxelles",
    logo: "/images/s-wallonie.jpg",
    href: "https://www.wallonie.be/fr/acteurs-et-institutions/federation-wallonie-bruxelles",
  },
  { name: "CRI MB-Wapi", logo: "/images/logo-cri-mp-wapi-2026.png", href: "https://www.cri-mbwapi.be" },
  { name: "Ville de Mons", logo: "/images/logo-ville-de-mons.svg", href: "https://www.mons.be" },
];

/** Galerie de moments partagés (photos issues du site officiel). */
export const gallery = [
  { src: "/images/musee-tervuren.jpg", alt: "Visite au musée de Tervuren" },
  { src: "/images/wallonie-plus-propre.jpg", alt: "Action Wallonie Plus Propre" },
  { src: "/images/foot-fedasil.jpg", alt: "Match de football avec les jeunes de Fedasil" },
  { src: "/images/champignons.jpg", alt: "Sortie découverte des champignons" },
  { src: "/images/techopolis.jpg", alt: "Visite de Technopolis à Malines" },
  { src: "/images/cheval.jpg", alt: "Découverte du cheval" },
  { src: "/images/tour-anvers.jpg", alt: "Balade à vélo à Anvers" },
  { src: "/images/parlement-wallonie.jpg", alt: "Visite du Parlement de Wallonie" },
];

export type NewsItem = {
  slug: string;
  category: string;
  date: string;
  isoDate: string;
  title: string;
  excerpt: string;
  image: string;
};

export const news: NewsItem[] = [
  {
    slug: "tournoi-interculturel-2026",
    category: "Sport",
    date: "5 octobre 2026",
    isoDate: "2026-10-05",
    title: "Tournoi interculturel de football — édition 2026",
    excerpt:
      "Plus de 12 équipes issues de 8 nationalités différentes se sont affrontées lors de notre tournoi annuel à Mons. Une fête du sport et du vivre-ensemble inoubliable.",
    image: "/images/foot-fedasil.jpg",
  },
  {
    slug: "sortie-musee-tervuren",
    category: "Culture",
    date: "20 septembre 2026",
    isoDate: "2026-09-20",
    title: "Sortie culturelle au Musée de Tervuren",
    excerpt:
      "Une vingtaine de membres ont découvert les collections permanentes du musée royal de l'Afrique centrale. Une immersion dans l'histoire commune de nos origines.",
    image: "/images/musee-tervuren.jpg",
  },
  {
    slug: "velos-bambou-myboo",
    category: "Mobilité douce",
    date: "8 septembre 2026",
    isoDate: "2026-09-08",
    title: "Lancement de la nouvelle gamme My Boo en Belgique",
    excerpt:
      "No Borders ASBL présente les derniers modèles de vélos en bambou My Boo. Écologiques, équitables et fabriqués au Ghana, ils incarnent parfaitement nos valeurs.",
    image: "/images/lancement-myboo.jpg",
  },
  {
    slug: "balade-velo-bruxelles",
    category: "Sport",
    date: "14 août 2026",
    isoDate: "2026-08-14",
    title: "Balade à vélo dans Bruxelles — 30 participants",
    excerpt:
      "Sous un soleil radieux, une trentaine de membres ont parcouru les pistes cyclables bruxelloises. Une belle occasion de découvrir la capitale autrement.",
    image: "/images/bxl-tour.jpg",
  },
  {
    slug: "atelier-interculturel-juin",
    category: "Culture",
    date: "22 juin 2026",
    isoDate: "2026-06-22",
    title: "Atelier interculturel : cuisines du monde",
    excerpt:
      "Cuisine sénégalaise, rwandaise, belge et marocaine réunies en une soirée. Cet atelier de partage culinaire a rassemblé plus de 40 personnes de tous horizons.",
    image: "/images/educ-art.jpg",
  },
  {
    slug: "action-wallonie-propre",
    category: "Environnement",
    date: "3 juin 2026",
    isoDate: "2026-06-03",
    title: "Action Wallonie Plus Propre — No Borders mobilise",
    excerpt:
      "Dans le cadre de l'opération régionale, nos bénévoles ont nettoyé plusieurs quartiers de Mons. Un geste simple mais fort pour notre territoire commun.",
    image: "/images/wallonie-plus-propre.jpg",
  },
  {
    slug: "visite-parlement-wallon",
    category: "Citoyenneté",
    date: "18 mai 2026",
    isoDate: "2026-05-18",
    title: "Visite citoyenne du Parlement de Wallonie",
    excerpt:
      "Une délégation de membres a visité le Parlement de Wallonie à Namur. Une expérience enrichissante pour mieux comprendre les institutions belges.",
    image: "/images/parlement-wallonie.jpg",
  },
  {
    slug: "mini-foot-fedasil",
    category: "Sport",
    date: "26 avril 2026",
    isoDate: "2026-04-26",
    title: "Match amical avec les jeunes du centre Fedasil",
    excerpt:
      "Un match de football amical entre nos membres et les jeunes du centre Fedasil de Mouscron. Le sport comme vecteur d'intégration et de solidarité.",
    image: "/images/mini-foot.jpg",
  },
  {
    slug: "decouverte-champignons",
    category: "Nature",
    date: "10 avril 2026",
    isoDate: "2026-04-10",
    title: "Sortie nature : à la découverte des champignons",
    excerpt:
      "Guidés par un expert mycologue, nos membres ont exploré les forêts aux alentours de Mons. Une sortie dépaysante et conviviale, parfaite pour se reconnecter à la nature.",
    image: "/images/champignons.jpg",
  },
];

/* ─────────────────────────────────────────────────────────── */
/*  Boutique — données fictives (fake data)                    */
/* ─────────────────────────────────────────────────────────── */

export type ProductCategory = {
  slug: string;
  label: string;
  subs: { slug: string; label: string }[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "velos-bambou",
    label: "Vélos en bambou",
    subs: [
      { slug: "route", label: "Route" },
      { slug: "ville", label: "Ville" },
      { slug: "vtt", label: "VTT" },
    ],
  },
  {
    slug: "hase-bikes",
    label: "Vélos adaptés (Hase Bikes)",
    subs: [
      { slug: "tricycles", label: "Tricycles" },
      { slug: "tandems", label: "Tandems" },
    ],
  },
  { slug: "elliptigo", label: "ElliptiGO", subs: [] },
  {
    slug: "accessoires",
    label: "Accessoires",
    subs: [
      { slug: "eclairage", label: "Éclairage" },
      { slug: "antivols", label: "Antivols" },
      { slug: "sacoches", label: "Sacoches" },
    ],
  },
  {
    slug: "pieces",
    label: "Pièces détachées",
    subs: [
      { slug: "pneus", label: "Pneus" },
      { slug: "freins", label: "Freins" },
    ],
  },
  {
    slug: "equipement",
    label: "Équipement cycliste",
    subs: [
      { slug: "casques", label: "Casques" },
      { slug: "vetements", label: "Vêtements" },
    ],
  },
  { slug: "entretien", label: "Entretien & outils", subs: [] },
];

export const productColors = [
  { slug: "noir", label: "Noir", hex: "#0B0B0C" },
  { slug: "blanc", label: "Blanc", hex: "#FFFFFF" },
  { slug: "bambou", label: "Bambou naturel", hex: "#C8A165" },
  { slug: "rouge", label: "Rouge", hex: "#D64535" },
  { slug: "bleu", label: "Bleu", hex: "#2C6E9B" },
  { slug: "vert", label: "Vert", hex: "#1F6F5C" },
  { slug: "jaune", label: "Jaune", hex: "#F2B33D" },
  { slug: "orange", label: "Orange", hex: "#E2501F" },
  { slug: "gris", label: "Gris", hex: "#8A8A90" },
] as const;

export const productBrands = [
  "My Boo",
  "Hase Bikes",
  "ElliptiGO",
  "Ecobirdy",
  "No Borders",
  "Concept Performance",
  "Training Plus",
] as const;

export type Product = {
  id: number;
  name: string;
  category: string;
  sub?: string;
  brand: (typeof productBrands)[number];
  colors: (typeof productColors)[number]["slug"][];
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  isNew?: boolean;
  image: string;
};

export const products: Product[] = [
  { id: 1, name: "My Boo Kumasi — Route", category: "velos-bambou", sub: "route", brand: "My Boo", colors: ["bambou", "noir"], price: 1630, rating: 4.8, reviews: 36, isNew: true, image: "/images/lancement-myboo.jpg" },
  { id: 2, name: "My Boo Bolga — Ville", category: "velos-bambou", sub: "ville", brand: "My Boo", colors: ["bambou", "vert"], price: 1240, rating: 4.6, reviews: 24, image: "/images/vente-velo.jpg" },
  { id: 3, name: "My Boo Volta — VTT", category: "velos-bambou", sub: "vtt", brand: "My Boo", colors: ["bambou", "noir"], price: 1500, oldPrice: 1760, rating: 4.7, reviews: 18, image: "/images/vtt.jpg" },
  { id: 4, name: "Hase Pino — Tandem", category: "hase-bikes", sub: "tandems", brand: "Hase Bikes", colors: ["gris", "rouge"], price: 3600, rating: 4.9, reviews: 12, image: "/images/p-hase-bikes.jpg" },
  { id: 5, name: "Hase Trigo — Tricycle", category: "hase-bikes", sub: "tricycles", brand: "Hase Bikes", colors: ["bleu", "gris"], price: 2800, oldPrice: 3075, rating: 4.8, reviews: 9, image: "/images/p-hase-bikes.jpg" },
  { id: 6, name: "ElliptiGO 8C", category: "elliptigo", brand: "ElliptiGO", colors: ["noir", "orange"], price: 1965, rating: 4.7, reviews: 21, isNew: true, image: "/images/tour-anvers.jpg" },
  { id: 7, name: "ElliptiGO Arc", category: "elliptigo", brand: "ElliptiGO", colors: ["noir", "blanc"], price: 1310, oldPrice: 1505, rating: 4.5, reviews: 15, image: "/images/bxl-tour.jpg" },
  { id: 8, name: "Casque recyclé Ecobirdy", category: "equipement", sub: "casques", brand: "Ecobirdy", colors: ["blanc", "vert", "jaune"], price: 58, rating: 4.4, reviews: 48, image: "/images/ghana-booomers.jpg" },
  { id: 9, name: "Maillot No Borders", category: "equipement", sub: "vetements", brand: "No Borders", colors: ["noir", "orange"], price: 29.5, rating: 4.6, reviews: 31, isNew: true, image: "/images/organisations-sportives.jpg" },
  { id: 10, name: "Antivol en U renforcé", category: "accessoires", sub: "antivols", brand: "Concept Performance", colors: ["noir", "jaune"], price: 32, rating: 4.3, reviews: 27, image: "/images/bxl-tour.jpg" },
  { id: 11, name: "Kit éclairage LED USB", category: "accessoires", sub: "eclairage", brand: "Concept Performance", colors: ["noir"], price: 23, oldPrice: 29.5, rating: 4.5, reviews: 39, image: "/images/tour-anvers.jpg" },
  { id: 12, name: "Sacoche imperméable 20 L", category: "accessoires", sub: "sacoches", brand: "No Borders", colors: ["noir", "rouge", "bleu"], price: 45, rating: 4.2, reviews: 14, image: "/images/vente-velo.jpg" },
  { id: 13, name: "Pneus 700×32 (la paire)", category: "pieces", sub: "pneus", brand: "Concept Performance", colors: ["noir"], price: 38.5, rating: 4.4, reviews: 22, image: "/images/vtt.jpg" },
  { id: 14, name: "Plaquettes de frein à disque", category: "pieces", sub: "freins", brand: "Training Plus", colors: ["gris"], price: 12.5, oldPrice: 16.5, rating: 4.1, reviews: 11, image: "/images/vtt.jpg" },
  { id: 15, name: "Kit de réparation nomade", category: "entretien", brand: "Training Plus", colors: ["noir", "rouge"], price: 19, rating: 4.6, reviews: 33, image: "/images/press-myboo.jpg" },
  { id: 16, name: "Pompe à pied avec manomètre", category: "entretien", brand: "Training Plus", colors: ["noir", "gris"], price: 25.5, rating: 4.3, reviews: 19, image: "/images/lancement-myboo.jpg" },
];
