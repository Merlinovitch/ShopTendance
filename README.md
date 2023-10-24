# Développement d'un tableau de bord pour la gestion de produits e-commerce avec Navbar



Développer une interface qui permettra :

- d'afficher la liste des produits en vente, extraits du fichier products.json
- de filtrer les produits en fonction de la catégorie sélectionnée dans la NavBar
- d'ajouter un nouveau produit via un formulaire (bonus)
- de modifier les produits (bonus)
- de supprimer les produits (bonus)

Fonctionnalités attendues :

Affichage des produits : 
- Une page qui liste tous les produits du fichier products.json avec des détails tels que le titre, description, categories, prix de base, prix soldé et image
- Une NavBar qui permet de filtrer les produits en fonction de la catégorie sélectionnée

Formulaire d'ajout de produit :
Champs : le titre, description, categories, prix de base, prix soldé et image
Validation des champs (par exemple : le prix doit être un nombre positif, l'URL doit être valide, etc.).
Une fois le formulaire validé, le nouveau produit doit être ajouté au fichier products.json.

Intégration Redux :
- Création d'un store Redux pour gérer l'état global des produits.
- Actions pour récupérer les produits et ajouter un nouveau produit.
- Réducteurs pour gérer les différentes actions et mettre à jour l'état du store.
- Utilisation de middlewares si nécessaire, par exemple pour gérer les effets secondaires tels que la lecture/écriture dans le fichier products.json.

Intégration de Router:
- La sélection d'une catégorie dans la NavBar utilise router pour modifier l'affichage

Instructions supplémentaires :
Vous pouvez utiliser des outils comme Redux Toolkit pour simplifier la configuration de Redux.
Pensez à séparer les composants React selon leurs responsabilités (par exemple : un composant pour le listing des produits, un autre pour le formulaire d'ajout).
Assurez-vous que l'application soit bien structurée, maintenable et extensible pour de futures évolutions.

Bonus :
Si vous terminez avant la date limite, vous pouvez ajouter des fonctionnalités supplémentaires telles que la mise à jour d'un produit existant, la suppression d'un produit ou l'implémentation d'une recherche par nom de produit.
