# Blog Hustle

A complete static blog site: 6 original long-form articles, 6 pages, no build step required.

## Run it

Open `index.html` in a browser. That is the whole setup.

For a local server (needed if you later add fetch/analytics):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

- **Netlify:** drag the `blog-hustle` folder onto https://app.netlify.com/drop
- **Vercel:** `npx vercel --prod` from inside the folder
- **GitHub Pages:** push the folder contents to a repo, enable Pages on the main branch

Before going live:

1. Replace `https://yourdomain.com` in `sitemap.xml` and `robots.txt` with your real domain.
2. Update the copyright year and brand name if you rename the site.
3. Add analytics (Plausible, Fathom, or GA4) in the `<head>` of each page.

## Structure

```
blog-hustle/
  index.html          Home: hero, latest posts, topics, newsletter
  blog.html           All articles with live search + category filter
  start-here.html     Reading path for new visitors
  about.html          Team, editorial policy, affiliate disclosure, privacy
  contact.html        Contact form
  404.html            Not-found page
  posts/              6 original articles
  assets/style.css    All styling (single file)
  assets/app.js       Mobile nav, reading progress, search/filter
  sitemap.xml
  robots.txt
```

## Articles (all original)

| Title | Author | Topic |
|---|---|---|
| How to Start a Blog in 2026 Without Wasting Six Months | Jessica Miller | Guides |
| 12 Realistic Ways to Make Money Blogging, Ranked by Effort | Ryan Cole | Monetization |
| Keyword Research for Beginners | Amanda Brooks | SEO |
| The 90-Day Affiliate Playbook for a Brand New Blog | Ryan Cole | Monetization |
| How to Write a Blog Post That Ranks and Gets Read to the End | Daniel Hayes | Writing |
| Your Email List Is the Only Audience You Own | Jessica Miller | Growth |

## Adding a post

Copy any file in `posts/`, then update:

1. The `<title>` and `<meta name="description">`.
2. The header block (category, `<h1>`, dek, byline).
3. The `<article>` body.
4. The JSON-LD block at the bottom.
5. Add a `<a class="card" href="posts/your-slug.html" data-post data-cat="seo">` card in `blog.html` and `index.html`.

## Notes

- Forms are front-end only right now. They show a confirmation message and reset. Point `newsletterForm` at a real provider (Buttondown, ConvertKit, MailerLite) in `assets/app.js` when you are ready to collect addresses.
- Content is 100% original and written for this site. It is not copied from any other blog.
