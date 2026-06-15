# LUMÉA — Template alternatif de fiche produit (`product.design-alternatif`)

## Objectif

Certains produits LUMÉA utilisent une fiche produit au design **plus immersif / storytelling**, différent du modèle standard. Ce dossier regroupe les 3 sections « Custom Liquid » de ce template alternatif :

| Bloc alternatif | Fichier | Remplace (template standard) |
|---|---|---|
| Bannière lifestyle plein écran « Le rituel qui change tout » | `alt-lifestyle-banner.liquid` | Barre de réassurance (`reassurance-bar.liquid`) |
| « L'histoire de l'ingrédient » (origine & sourcing) | `alt-ingredient-story.liquid` | « Comment préparer ton rituel » (`how-to-ritual.liquid`) |
| « LUMÉA vs. le classique » (tableau comparatif) | `alt-comparison-table.liquid` | « Composition & valeurs nutritionnelles » (`composition-nutrition.liquid`) |

## Produits concernés

Le modèle `product.design-alternatif` est assigné aux 3 produits suivants :

- **Café Noir Collagène**
- **Matcha Original Collagène**
- **Mocha Collagène**

> Tous les autres produits conservent le modèle de fiche produit **standard** (`product`).

---

## Comment créer le template alternatif dans Shopify

1. Dans l'admin Shopify, va dans **Boutique en ligne › Thèmes**.
2. Sur ton thème actif, clique sur **… › Modifier le code** (ou **Personnaliser** pour l'éditeur visuel).
3. Dans le dossier **Templates**, clique sur **Ajouter un modèle**.
4. Choisis :
   - Type de modèle : **product**
   - Base : **product** (modèle par défaut)
   - Nom : **design-alternatif** → Shopify crée `product.design-alternatif.json`
5. Ouvre ce nouveau modèle dans l'**éditeur de thème** et ajoute 3 blocs **Liquid personnalisé** (Custom Liquid), puis colle dans chacun le contenu des fichiers :
   - `alt-lifestyle-banner.liquid`
   - `alt-ingredient-story.liquid`
   - `alt-comparison-table.liquid`
6. Réorganise les blocs dans l'ordre souhaité et **enregistre**.

> Astuce : si tu pars du modèle standard déjà monté, duplique-le puis remplace les 3 blocs concernés par leurs équivalents alternatifs (voir tableau plus haut).

---

## Comment ASSIGNER le template à un produit (étape par étape)

Pour chacun des 3 produits (**Café Noir Collagène**, **Matcha Original Collagène**, **Mocha Collagène**) :

1. Va dans **Produits** (menu de gauche de l'admin Shopify).
2. Clique sur le produit concerné (ex. *Café Noir Collagène*).
3. Sur la page d'édition du produit, repère le panneau **Modèle de fiche produit** (en anglais : *Theme template*), généralement en bas à droite, dans la carte **« Publication »** ou **« Modèle de fiche produit »**.
4. Ouvre le menu déroulant (par défaut sur `Default product`).
5. Sélectionne **`design-alternatif`**.
6. Clique sur **Enregistrer** (en haut à droite).
7. Vérifie le rendu via **Aperçu** sur la fiche du produit.

Répète l'opération pour les 3 produits.

### Vérification rapide

- Ouvre chaque fiche produit côté boutique et confirme que la **bannière lifestyle plein écran**, la section **« L'histoire de l'ingrédient »** et le **tableau comparatif** s'affichent bien (et non la barre de réassurance / le how-to / la composition standard).
- Sur mobile : vérifier le scroll fluide, la lisibilité du titre superposé et l'affichage du tableau comparatif (colonnes lisibles).

---

## Rappel personnalisation

Chaque fichier `.liquid` contient en haut un bloc de commentaire `⚙️ VARIABLES À PERSONNALISER` :
modifie les valeurs `assign` (titres, textes, URL d'images, libellés de boutons) directement dans le code collé, sans toucher au CSS.
