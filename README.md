# Mon e-Portfolio

Site statique (HTML / CSS / JS, sans framework) prêt à héberger sur GitHub Pages.

## Structure
```
index.html        → la page (une seule page, sections en ancre #home, #projects, ...)
css/style.css      → toute la charte graphique (couleurs, polices, mise en page)
js/main.js         → menu mobile, thème clair/sombre, traduction FR/EN
assets/cv/         → tes CV en PDF (cv-fr.pdf, cv-en.pdf)
assets/projects/   → images de tes projets, si tu en ajoutes
```

## Mise en ligne sur GitHub Pages
1. Crée un dépôt GitHub nommé **exactement** `TON-PSEUDO.github.io`.
2. Dans VS Code, ouvre ce dossier puis lie-le au dépôt distant :
   ```
   git init
   git add .
   git commit -m "premier commit du portfolio"
   git branch -M main
   git remote add origin https://github.com/TON-PSEUDO/TON-PSEUDO.github.io.git
   git push -u origin main
   ```
3. Sur GitHub : Settings → Pages → Source = "Deploy from a branch", branche `main`, dossier `/root`.
4. Le site est disponible sous quelques minutes à `https://TON-PSEUDO.github.io`.

## Personnalisation rapide
- Couleurs et polices : en haut de `css/style.css` (bloc `:root`).
- Textes : directement dans `index.html`, et dans `js/main.js` (objet `translations`) pour la version anglaise.
- Nombre de projets : duplique un bloc `<article class="project-row">...</article>` dans `index.html`.
