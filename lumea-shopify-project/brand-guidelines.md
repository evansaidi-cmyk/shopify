# LUMÉA — Charte de marque / Brand Guidelines

## 1. Nom & signature

- **Nom de marque :** LUMÉA
- **Signature (FR) :** « Votre rituel, réinventé. »
- **Tagline (EN) :** « Your ritual, reimagined. »

## 2. Positionnement

LUMÉA réinvente les boissons chaudes du quotidien — cafés et matcha de cérémonie — en les enrichissant de collagène marin et végétal, d'adaptogènes et de vitamines. Chaque tasse devient un geste de beauté et de bien-être : un rituel simple, sensoriel et soutenu par la science. Nous nous adressons à une clientèle exigeante qui refuse de choisir entre plaisir et soin de soi.

**Promesse :** la routine que vous aimez déjà, réinventée pour nourrir votre peau, votre énergie et votre équilibre.

## 3. Palette chromatique

| Couleur | Hex | Usage |
|---|---|---|
| Argile Rosé | `#C9806A` | Couleur signature, accents, boutons, pictogramme |
| Vert Sauge | `#8C9B7B` | Couleur secondaire, gamme matcha, détails |
| Crème | `#F6F1E9` | Fonds principaux, respirations, sections claires |
| Anthracite | `#2B2722` | Texte, titres, contrastes |

**Règles d'usage :**
- Crème en fond dominant (≈ 70 % des surfaces) pour une lumière douce et premium.
- Argile Rosé réservé aux appels à l'action et aux moments d'émotion (pas plus de 10 % de la surface).
- Vert Sauge utilisé comme signal de la gamme Matcha.
- Anthracite pour tout le texte courant : jamais de noir pur (`#000000`).

## 4. Typographie

- **Titres :** Poppins ou Sora — graisses Medium/SemiBold, légèrement espacées en capitales pour le logo.
- **Texte courant :** Inter ou Work Sans — Regular pour le corps, Medium pour les intertitres.
- **Hiérarchie :** titres en Anthracite, surtitres en Argile Rosé (capitales, interlettrage +0,12em), corps en Anthracite à 90 % d'opacité.

## 5. Ton de voix

- **Premium et rassurant :** on parle de soin, de rituel, de régularité — jamais de « miracle ».
- **Scientifique mais chaleureux :** on cite collagène, adaptogènes, vitamines avec précision, puis on traduit le bénéfice en sensation concrète.
- **Sobre :** peu de superlatifs criards, peu de majuscules d'emphase, pas de promesses médicales.
- **Sensoriel :** on décrit le geste, l'arôme, la texture, le moment de la journée.
- **Inclusif et tutoyant-vouvoyant maîtrisé :** vouvoiement par défaut (« Votre rituel »), proche mais respectueux.

**À éviter :** « révolutionnaire », « brûle-graisses », « détox magique », promesses de guérison, ponctuation excessive.

## 6. Brief de conception du logo

- **Concept :** un wordmark « LUMÉA » en capitales espacées (interlettrage généreux, ≈ +0,18em) évoquant le calme et le luxe discret, accompagné d'un pictogramme minimaliste mi-goutte mi-soleil — symbole de l'hydratation (collagène) et de la lumière (luméa / lumière).
- **Pictogramme :** une goutte stylisée dont la pointe s'ouvre en rayons doux, ou un disque solaire dont la base s'effile en goutte. Tracé épuré, une seule couleur, lisible en très petit (favicon).
- **Couleur :** pictogramme et accent en Argile Rosé `#C9806A` ; wordmark en Anthracite `#2B2722`.
- **Typographie :** Poppins/Sora SemiBold, capitales, accent aigu présent sur le É.
- **Déclinaisons :** version horizontale (picto + wordmark), version empilée, version monochrome Anthracite, version Crème sur fond foncé, picto seul pour avatar/favicon.
- **Zone de protection :** marge minimale égale à la hauteur de la lettre « L » tout autour.
- **Interdits :** ne pas déformer, ne pas changer les couleurs hors palette, ne pas ajouter d'ombre portée, ne pas réduire l'interlettrage du wordmark.

## 7. Logo placeholder (SVG)

Logo provisoire combinant le pictogramme goutte/soleil en Argile Rosé et le wordmark « LUMÉA » en capitales espacées Anthracite. À remplacer par la version finale vectorisée.

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="420" height="140" viewBox="0 0 420 140" role="img" aria-label="LUMÉA">
  <rect width="420" height="140" fill="#F6F1E9"/>
  <!-- Pictogramme goutte / soleil -->
  <g transform="translate(70 70)">
    <!-- rayons doux -->
    <g stroke="#C9806A" stroke-width="2.4" stroke-linecap="round" opacity="0.9">
      <line x1="0" y1="-46" x2="0" y2="-34"/>
      <line x1="32" y1="-32" x2="24" y2="-24"/>
      <line x1="46" y1="0" x2="34" y2="0"/>
      <line x1="-32" y1="-32" x2="-24" y2="-24"/>
      <line x1="-46" y1="0" x2="-34" y2="0"/>
    </g>
    <!-- goutte -->
    <path d="M0 -28 C 18 -6 26 8 26 18 A 26 26 0 1 1 -26 18 C -26 8 -18 -6 0 -28 Z"
          fill="#C9806A"/>
    <!-- reflet -->
    <circle cx="-8" cy="14" r="6" fill="#F6F1E9" opacity="0.55"/>
  </g>
  <!-- Wordmark -->
  <text x="150" y="84"
        font-family="Poppins, Sora, 'Segoe UI', sans-serif"
        font-size="48" font-weight="600"
        letter-spacing="9" fill="#2B2722">LUMÉA</text>
</svg>
```
