# LUMÉA — Prototype visuel

Prototype HTML/CSS/JS autonome pour la marque fictive **LUMÉA** (cafés & matchas enrichis en collagène), inspiré de l'esthétique de feelreformed.com.
Tagline : « Votre rituel, réinventé. »

## Comment l'ouvrir

Aucune étape de build n'est nécessaire. Ouvrez simplement **`index.html`** dans un navigateur (double-clic ou glisser-déposer dans l'onglet).

- Le site est **mobile-first** : il s'affiche par défaut en vue mobile et devient responsive jusqu'au desktop (points de rupture à 600px et 900px).
- Astuce : ouvrez les outils développeur (F12) et activez le mode appareil mobile pour la meilleure expérience.
- Les polices (Poppins + Inter) sont chargées via Google Fonts — une connexion internet est recommandée.

## Pages

| Fichier | Description |
|---|---|
| `index.html` | Page d'accueil : barre d'annonce, header sticky, hero plein écran, carrousel produits, blocs spotlight, bandeau presse, bannière lifestyle, barre de réassurance, « Pourquoi LUMÉA », FAQ accordéon, avis, newsletter, footer. |
| `collection.html` | Page collection « Cafés Collagène » : bannière catégorie + 3 bénéfices, grille de 8 produits (certains en promo avec prix barré), carrousel cross-sell « Complète ton rituel ». |
| `product.html` | Page produit standard : galerie, titre, prix, sélecteurs de variantes, quantité, ajout au panier, barre de réassurance, « Comment préparer ton rituel » (3 étapes), tableau composition & valeurs nutritionnelles, avis clients. |
| `product-alt.html` | Page produit alternative : galerie/prix/ajout au panier, bannière lifestyle plein écran « Le rituel qui change tout », storytelling « L'histoire de l'ingrédient », tableau comparatif « LUMÉA vs. le classique ». |
| `about.html` | « Qui sommes-nous » : manifeste, notre histoire, nos standards & ingrédients, notre engagement, timeline. |

## Structure

```
prototype/
├── index.html
├── collection.html
├── product.html
├── product-alt.html
├── about.html
├── README.md
├── css/
│   └── styles.css   (design system + tous les composants)
└── js/
    └── main.js      (menu mobile, accordéon FAQ, barre d'annonce, galerie, variantes, quantité, panier — vanilla JS)
```

## Design system

- **Palette** : Argile Rosé `#C9806A` (primaire), Vert Sauge `#8C9B7B` (secondaire), Crème `#F6F1E9` (fonds), Anthracite `#2B2722` (texte), cartes blanches.
- **Typographie** : Poppins (titres) + Inter (corps).
- Boutons « pill » arrondis, cartes produits, carrousels horizontaux scroll-snap sur mobile, sections lifestyle plein écran, FAQ accordéon, footer multi-colonnes, barre de réassurance.

## Note sur les images

**Toutes les images sont des placeholders.** Les visuels lifestyle utilisent des URLs Unsplash (coffee/matcha/lifestyle), et les visuels « cut-out » produits sont des blocs en dégradé CSS avec une légende. Aucun visuel n'est définitif ; ils sont à remplacer par les véritables visuels de la marque.

Prototype visuel uniquement — les fonctionnalités e-commerce (panier, paiement, recherche) sont simulées côté front et ne réalisent aucune transaction.
