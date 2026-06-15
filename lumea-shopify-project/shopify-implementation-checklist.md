# Checklist d'implémentation Shopify — LUMÉA

> Feuille de route pour transposer tous les livrables de ce projet dans un back-office Shopify.
> Suivez les étapes dans l'ordre. Cochez au fur et à mesure.
> Projet : EDC Shopify 2025-2026 — Marque fictive **LUMÉA** (boissons au collagène).

---

## 1. Produits & catalogue

- [ ] **1. Importer les 14 produits** — `Produits > Importer` → charger `products.csv`.
  - Vérifier que les colonnes `Type` correspondent bien aux 4 catégories (Cafés Collagène, Matcha Collagène, Rituels & Compléments, Accessoires).
  - **Vérifier les 3 produits en promo** : le champ *Prix* doit être inférieur au champ *Prix avant réduction* (différence de 15 €) :
    - Mocha Collagène → 39,99 € (avant : 54,99 €)
    - Matcha Fraise Collagène → 42,99 € (avant : 57,99 €)
    - Shaker Fouet Électrique → 24,99 € (avant : 39,99 €)
  - Charger les visuels produits détourés (remplacer les `Image Src` placeholder).
- [ ] **2. Créer la carte-cadeau** — `Produits > Cartes-cadeaux` → valeurs 25 € / 50 € / 100 € (voir `gift-card.md`).
- [ ] **3. Créer les 4 collections** — `Produits > Collections` (automatiques de préférence, condition *Type de produit est égal à …*) :
  - Cafés Collagène · Matcha Collagène · Rituels & Compléments · Accessoires.

## 2. Thème & identité visuelle

- [ ] **4. Couleurs de marque** — `Boutique en ligne > Personnaliser > Paramètres du thème > Couleurs` :
  - Argile Rosé `#C9806A` · Vert Sauge `#8C9B7B` · Crème `#F6F1E9` (fonds) · Anthracite `#2B2722` (textes).
  - Typographies : titres Poppins/Sora, corps Inter/Work Sans.
- [ ] **5. Ajouter le logo** dans l'en-tête du thème (`Personnaliser > En-tête > Logo`). Voir le SVG placeholder dans `brand-guidelines.md`.
- [ ] **6. Configurer la navigation** — `Boutique en ligne > Navigation` (voir `navigation.md`) :
  - Menu d'en-tête + les 3 menus de pied de page (Catalogue / Infos pratiques / La marque).

## 3. Pages & contenus

- [ ] **7. Page d'accueil** — remplir toutes les sections via l'éditeur de thème (voir `homepage-content.md`) : bandeau d'annonce, hero, carrousel produits, blocs spotlight, bandeau presse, bandeau lifestyle, badges de réassurance, « Pourquoi LUMÉA », aperçu FAQ, avis clients, newsletter.
- [ ] **8. Page Collection — 2 sections supplémentaires** via blocs *Liquid personnalisé* (voir `collection-sections-code/`) :
  - `category-banner.liquid` (bannière de catégorie + 3 bénéfices)
  - `complete-your-ritual.liquid` (cross-sell « Complète ton rituel »)
  - Textes par collection dans `collection-page-sections.md`.
- [ ] **9. Page Produit standard — 3-4 sections supplémentaires** via *Liquid personnalisé* (voir `product-page-sections/`) :
  - `reassurance-bar.liquid` · `how-to-ritual.liquid` · `composition-nutrition.liquid` · `customer-reviews.liquid`.
- [ ] **10. Modèle « design alternatif »** — créer un modèle de fiche produit `product.design-alternatif` et y placer les 3 sections de `product-page-alt-template/` (bannière lifestyle, histoire de l'ingrédient, tableau comparatif). Assigner aux 3 produits : **Café Noir Collagène, Matcha Original Collagène, Mocha Collagène** (`Produit > Modèle de fiche produit`). Voir `product-page-alt-template/assignation.md`.

## 4. Apps & pages annexes

- [ ] **11. Installer les apps recommandées** : FAQ & Accordions, Megamenu, Sticky Cart, Translation Lab.
- [ ] **12. Créer les pages** « Qui sommes-nous » (`about-us.md`), « FAQ » (`faq.md`, via l'app), « Contact » (modèle natif + intro de `contact.md`) et les rattacher aux menus.
- [ ] **13. Créer les 3 articles de blog** (`blog/article-1.md` → `article-3.md`) + rattacher le blog aux menus. Vérifier les liens internes (maillage SEO).

## 5. Marketing, paiement & logistique

- [ ] **14. Codes promo** — `Réductions` (voir `marketing/promo-codes.md`) :
  - `NOUVEAUSITE` : -20 % sur toute la boutique, dès 2 produits, à partir du 15/09/2025, sans date de fin.
  - `LUMEAFRIENDS50` : -50 €, usage unique, sans limite de temps.
- [ ] **15. Paiement & livraison & TVA** :
  - Paiement : activer **Shopify Bogus Gateway** (mode test).
  - Livraison France : Colissimo 5 € / **offert dès 50 €**, Chronopost 15 €.
  - Livraison UE : UPS 25 €. Reste du monde : UPS 35 €.
  - Configurer la **TVA UE**.
- [ ] **16. RGPD & comptes** : activer les comptes clients (optionnel), l'opt-in SMS, et la **bannière cookies RGPD**.
- [ ] **17. Retirer « Propulsé par Shopify »** — éditer `footer.liquid` et supprimer la ligne :
  `<small class="copyright__content">{{ powered_by_link }}</small>`.
- [ ] **18. Pages légales** (voir `legal/`) : CGV, Mentions légales, Politique de confidentialité, Politique de livraison, Politique de retours. Rattacher au menu *Infos pratiques*.
- [ ] **19. Logo dans les emails transactionnels et le tunnel de paiement** (`Paramètres > Notifications` et `Personnaliser > Checkout`).

## 6. International, lancement & validation

- [ ] **20. Version anglaise** — via Translation Lab, saisir tous les contenus EN (sections `-- EN --` des livrables ; voir `products-en.md` et les blocs EN).
- [ ] **21. Newsletter de lancement** — importer `marketing/newsletter-lancement.html`, planifier l'envoi un **vendredi à 8h**, mettre en avant `NOUVEAUSITE`.
- [ ] **22. Réseaux sociaux** — créer le compte Instagram LUMÉA + publication avec **#EDCShopify2026**.
- [ ] **23. Achats tests** (Bogus Gateway) :
  - Carte n° commençant par **1** = paiement réussi.
  - Carte n° commençant par **2** = paiement échoué.
  - CVV / dates d'expiration fictifs.
  - Réaliser au moins 3 achats tests pour valider le tunnel.

---

### Rappels design (à vérifier sur chaque livrable)
- **Mobile first** : contrôler chaque section en vue mobile avant le desktop.
- Esthétique épurée, fond crème/blanc, beaucoup d'espace, photos produit détourées.
- Boutons « pilule » arrondis, typographie sans-serif élégante.
- Patterns feelreformed.com : carrousels horizontaux, bandeaux de réassurance à icônes, sections lifestyle plein écran, FAQ en accordéon, bandeau presse, footer multi-colonnes.
