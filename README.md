# Utkarsh portfolio 📄
It is a personal portfolio website

![Demo](https://github.com/utkarshpayal/MyPortfolio/assets/104209135/777f5945-cbc6-45e5-a703-9b78ea11c550)

Link: [Click here](https://utkarsh-payal.me/)

## Features

- Single static page with sections: **Home**, **About Me**, **Skills**, **Experience**, **Education**, **Involvement**, **Projects** and **Contact**.
- Responsive navigation with a mobile menu toggle and a header shadow on scroll.
- **Dark / light mode** toggle that defaults to the visitor's system preference (`prefers-color-scheme`).
- **Contact form** set up for [Netlify Forms](https://docs.netlify.com/forms/setup/) (`data-netlify="true"`); `script.js` submits it via `fetch` and shows a thank-you message. Form submissions only work when the site is deployed on Netlify (needs confirmation for other hosts).
- Icons from [Boxicons](https://boxicons.com/) (loaded from a CDN).

## Technologies used
- HTML
- CSS
- JavaScript

## Running locally

There is no build step or dependency install. Clone the repository and open `index.html` in a browser, or serve the folder with any static file server.

```sh
git clone https://github.com/utkarshpayal/MyPortfolio.git
cd MyPortfolio
# open index.html in your browser
```

## Project structure

| File | Purpose |
| ---- | ------- |
| `index.html` | Page markup and content |
| `style.css` | Styles, including dark mode |
| `script.js` | Menu toggle, dark mode, contact form submission, skill-pill animation |
| `main.png`, `11.jpg`, `professional-portfolio.png` | Images and favicon |
| `LEARN.md` | General guide to building a personal portfolio website |

## License

This project is licensed under the MIT License – see [LICENSE](LICENSE).
