# L'ILOCréation — Front React

Site vitrine moderne pour une entreprise de création de mobilier bois & acier.

## Lancer le projet

### Mode Docker dev

Ce mode recharge les modifications de `src/` sans rebuild l'image Docker.

```bash
docker compose -f docker-compose.dev.yml up -d
```

Puis ouvrir http://127.0.0.1:5173.

### Mode Docker production

Ce mode sert le build final avec Nginx. Il faut rebuild après modification.

```bash
docker compose up -d --build
```

Puis ouvrir http://127.0.0.1:8080.

### Mode local

```bash
npm install
npm run dev
```

Puis ouvrir l'URL indiquée par Vite.

## Structure

```txt
src/
  assets/
    logo-lilocreation.png
  main.jsx
  styles.css
```

## Personnalisation rapide

- Modifier les textes dans `src/main.jsx`
- Modifier les couleurs dans `src/styles.css`, section `:root`
- Remplacer les photos Unsplash par les vraies créations de l'entreprise
