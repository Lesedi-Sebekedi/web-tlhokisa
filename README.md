# Tlhokisa Medical Services Website

Premium informational website for a men's medical clinic.

## Pages
- `index.html`
- `about.html`
- `services.html`
- `faqs.html`
- `contact.html`
- `privacy.html`
- `terms.html`
- `medical-disclaimer.html`

## Local Preview
Open `index.html` in your browser, or run a static server:

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deployment Checklist
1. Deploy all files to your hosting provider root.
2. Update domain DNS to point to hosting.
3. Enable SSL certificate on host.
4. Verify `robots.txt` and `sitemap.xml` are publicly available.
5. Replace placeholder clinic details with final approved content.

## Analytics Setup
Add your Google Analytics or Plausible script to all pages, just before `</head>` or `</body>`.

Example (Google tag):

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

## Contact Form Note
The current form uses client-side validation and a demo success state. For production, connect it to:
- Formspree, Netlify Forms, or a backend endpoint for email delivery
- Server-side spam protection (honeypot/reCAPTCHA)
- Secure data handling controls
