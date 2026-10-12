# No Borders ASBL — Refonte Web

Site officiel de **No Borders ASBL** (Mons, Belgique), association citoyenne favorisant l'inclusion sociale et les rencontres interculturelles par le sport, la culture, l'environnement et la mobilité douce.

---

## 🛠️ Stack Technique

- **Framework** : [Next.js 14](https://nextjs.org/) (App Router)
- **UI & Runtime** : [React 18](https://react.dev/)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styles** : [Tailwind CSS 3.4](https://tailwindcss.com/) + [daisyUI 4](https://daisyui.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)

---

## 🚀 Démarrage Rapide en Local

### 1. Prérequis

- **Node.js** : version 18.17 ou supérieure (Node 20+ recommandé)
- **Git**
- **npm** (ou pnpm / yarn)

### 2. Cloner le projet

```bash
git clone https://github.com/josuefox123/nobordersasbl.git
cd nobordersasbl
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Lancer le serveur de développement

```bash
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000) dans votre navigateur.

---

## 📜 Scripts Disponibles

| Commande | Action |
|---|---|
| `npm run dev` | Lance le serveur de développement Next.js (port 3000 par défaut) |
| `npm run build` | Compile l'application pour la production |
| `npm run start` | Lance le serveur avec le build de production |
| `npm run typecheck` | Vérifie les types TypeScript (`tsc --noEmit`) |
| `npm run lint` | Lance la vérification ESLint |

---

## 📁 Structure du Projet

```text
nobordersasbl/
├── app/                      # Routes Next.js (App Router)
│   ├── layout.tsx            # Layout racine (Header, Footer, typographie)
│   ├── page.tsx              # Page d'accueil complète
│   ├── notre-projet/         # Page détaillée des objectifs & vision
│   ├── presse/               # Page des articles et parutions médias
│   ├── nous-contacter/       # Page contact avec formulaire
│   ├── nous-soutenir/        # Page dons, mécénat et boutique
│   └── globals.css           # Styles globaux & tokens Tailwind
├── components/
│   ├── layout/               # Header sticky & Footer
│   ├── sections/             # Sections modulaires (Hero, Mission, etc.)
│   └── ui/                   # Icônes SVG et animations Framer Motion
├── lib/
│   └── content.ts            # Données et textes éditoriaux officiels
├── public/
│   └── images/               # Médias, logos et photos officielles
├── types/
│   └── daisyui.d.ts          # Déclarations de types pour daisyUI
├── tailwind.config.ts        # Configuration du thème personnalisé No Borders
└── next.config.mjs           # Configuration Next.js & redirections
```

---

## 🌐 Déploiement sur Vercel

Le projet est configuré pour un déploiement continu sur **Vercel** :

1. Connecter le dépôt `josuefox123/nobordersasbl` sur Vercel.
2. Vercel détecte automatiquement Next.js et applique la commande `npm run build`.
3. Chaque push sur la branche `main` déclenche automatiquement un nouveau déploiement.
