# LUMÉA — Codes promotionnels / Promo Codes

Ce document décrit deux codes promotionnels LUMÉA, leur configuration dans Shopify (section **Réductions / Discounts**) et les descriptions client (FR + EN) à réutiliser en boutique, par e-mail ou sur les réseaux.

---

## 1. Code `NOUVEAUSITE`

### Récapitulatif

| Paramètre | Valeur |
|---|---|
| Code | `NOUVEAUSITE` |
| Type de réduction | Pourcentage |
| Remise | **-20 %** sur l'ensemble de la boutique |
| Condition | **Minimum 2 produits** dans le panier |
| Début de validité | **15 septembre 2025** |
| Fin de validité | Aucune (sans date de fin) |
| Limite d'utilisation | Multi-usage (illimité, sauf décision contraire) |
| Cumul | Non cumulable avec d'autres réductions automatiques |

### Mise en place dans Shopify

1. Admin Shopify → **Réductions** (Discounts) → **Créer une réduction** → **Montant sur les produits** (Amount off products).
2. **Méthode** : sélectionner **Code de réduction** et saisir exactement `NOUVEAUSITE`.
3. **Valeur** :
   - Type : **Pourcentage** → `20` %.
   - S'applique à : **Tous les produits** (Collections → All products / Toute la boutique).
4. **Conditions d'achat minimum** : cocher **Quantité minimale d'articles** = `2`.
   - (Ne pas utiliser « montant minimum » : la condition est bien un nombre de produits, pas une somme.)
5. **Admissibilité client** : **Tous les clients**.
6. **Limites d'utilisation** : laisser **décochées** les limites (usage illimité). Cocher uniquement « Limiter à une utilisation par client » si vous souhaitez restreindre, sinon laisser libre.
7. **Combinaisons** : décider du cumul. Recommandé : **non cumulable** avec les réductions produit/commande automatiques.
8. **Dates actives** :
   - Date de début : **15/09/2025**.
   - Date de fin : **laisser vide** (pas de date de fin).
9. **Enregistrer**.

### Description client

**FR :** Pour fêter notre nouveau site, profitez de **-20 % sur toute la boutique** dès **2 produits** achetés avec le code **NOUVEAUSITE**. Sans date de fin — votre rituel, réinventé, au meilleur prix.

**EN:** To celebrate our new website, enjoy **-20 % storewide** when you buy **2 products or more** with code **NOUVEAUSITE**. No expiry date — your ritual, reimagined, at its best price.

---

## 2. Code `LUMEAFRIENDS50` (Friends & Family)

### Récapitulatif

| Paramètre | Valeur |
|---|---|
| Code | `LUMEAFRIENDS50` |
| Type de réduction | Montant fixe |
| Remise | **-50 €** sur la commande |
| Condition | Aucune condition de quantité ou de montant minimum imposée* |
| Usage | **Usage unique** (une seule utilisation au total) |
| Validité | Aucune limite de temps |
| Public | Cercle proche : amis, famille, partenaires |

> *Recommandation : définir un **montant minimum de commande ≥ 50 €** afin d'éviter un panier à 0 € ou négatif. À ajuster selon la politique de la marque.

### Mise en place dans Shopify

1. Admin Shopify → **Réductions** → **Créer une réduction** → **Montant sur la commande** (Amount off order).
2. **Méthode** : **Code de réduction** → saisir `LUMEAFRIENDS50`.
3. **Valeur** :
   - Type : **Montant fixe** → `50` (devise EUR).
   - S'applique à : **Total de la commande**.
4. **Conditions d'achat minimum** : facultatif mais recommandé → **Montant minimum** = `50,00 €` (voir note ci-dessus).
5. **Admissibilité client** : **Tous les clients** (ou un segment Friends & Family si créé).
6. **Limites d'utilisation** :
   - Cocher **« Limiter le nombre total d'utilisations »** = `1` → garantit l'**usage unique** (une seule fois, tous clients confondus).
   - (Optionnel : cocher aussi « une utilisation par client ».)
7. **Combinaisons** : recommandé **non cumulable** avec d'autres codes.
8. **Dates actives** :
   - Date de début : à la date de remise du code.
   - Date de fin : **laisser vide** (aucune limite de temps).
9. **Enregistrer**.

### Description client

**FR :** Un cadeau de la part de LUMÉA : **50 € offerts** sur votre commande avec le code **LUMEAFRIENDS50**. Réservé à nos proches — **valable une seule fois**, sans limite de temps.

**EN:** A gift from LUMÉA: **€50 off** your order with code **LUMEAFRIENDS50**. Reserved for our inner circle — **single use**, with no time limit.

---

## Bonnes pratiques

- Saisir les codes **en majuscules**, sans espace ; Shopify les rend insensibles à la casse à la saisie client.
- Tester chaque code en mode aperçu avant lancement (panier de 2 produits pour `NOUVEAUSITE`, commande ≥ 50 € pour `LUMEAFRIENDS50`).
- Définir clairement les **règles de combinaison** pour éviter les cumuls non souhaités.
- Pour `LUMEAFRIENDS50`, vérifier après usage que le code est bien désactivé (limite totale atteinte = 1).
