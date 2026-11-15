# Yuzuyu Studio website

The company owns `/`; each product owns its pages under its own path.
Use `https://yuzuyustudio.com` in customer-facing URLs.
GitHub Pages publishes this public company website from `main:/docs`.
Visitors do not need to sign in.

## Routes

| Path | Content |
|---|---|
| `/` | Company purpose, two product entries, studio and contact |
| `/oyomap/` | Existing Oyomap homepage, migrated from the live site |
| `/oyomap/privacy/` | Existing English privacy policy |
| `/oyomap/privacy/zh-Hans/` | Existing Simplified Chinese privacy policy |
| `/oyomap/privacy/zh-Hant/` | Existing Traditional Chinese privacy policy |
| `/oyomap/support/` | Existing English support page |
| `/oyomap/support/zh-Hans/` | Existing Simplified Chinese support page |
| `/oyomap/support/zh-Hant/` | Existing Traditional Chinese support page |
| `/oyomap/terms/` | Existing terms and Apple EULA link |
| `/basie/` | Basie introduction, clearly marked in development |

Future Basie support/privacy/terms pages belong under `/basie/`, after their
content is established. Do not invent a privacy policy for an unfinished product.
Founder names and biographies have not been supplied. Add real profiles within
the studio section when available; do not publish a large placeholder biography
or present a mascot as a founder portrait.

## Page layout and design

The homepage answers: **Who is this studio, and which app should I open?**
Its reading order is a short introduction, the product directory, then studio/contact.
Each product has one link covering its icon, name and short description. Avoid
repeated “Meet…” buttons, oversized illustration panels, slogan captions, and
multiple paragraphs making the same point (user feedback, 2026-11-15).

The visual direction is a quiet, precise independent studio with an editorial
quality: self-hosted Newsreader titles, readable system sans text, warm near-white
paper, dark green ink, and the real full-colour app icons. The font's OFL licence
is preserved in `docs/assets/fonts/OFL-Newsreader.txt`.

Desktop uses a two-column introduction and two side-by-side product panels.
At 700px and below, the panels become compact icon/text rows on the page canvas.
Mobile is a distinct composition, not the desktop panels stacked at full height.
Keep visible keyboard focus and reduced-motion support. Company-page translations
are English and Simplified Chinese; migrated Oyomap pages retain their existing locales.

```text
Desktop                           Mobile
Wordmark            Studio / 中   Wordmark       Studio / 中
Short headline      Introduction  Short headline
                                  Introduction
Our apps                          Our apps
Oyomap + icon       Basie + cat    Icon  Oyomap + sentence
                                  Cat   Basie + sentence/status
The studio          Note / email  The studio / note / email
Copyright               Support   Copyright         Support
```

Basie is presented as an in-development cat life sim, using the product's confirmed
positioning: real-life activities become the cat's activities in its own world.
Its introduction does not imply public availability or completed features.

Reference lenses: [Taste Skill](https://github.com/Leonxlnx/taste-skill),
[Frontend Design](https://github.com/anthropics/skills/tree/main/skills/frontend-design),
[Vercel Web Design Guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines),
and the concentrated product hierarchy of [Mela](https://mela.recipes/) and
[Things](https://culturedcode.com/things/). The user's compact mobile brief takes
precedence over any generic skill's full-screen sections or decorative effects.
The locally installed `yuzuyu-web-design` skill carries the tailored instructions.

## Product artwork

Basie uses the approved hand-drawn black cat app icon at `docs/assets/basie.png`
on both the company homepage and `/basie/`. This is an unchanged copy of the
Basie app's `AppIcon.png`, matching the supplied reference. Keep this asset in
the website repository so publication stays independent of the app repository.

## Oyomap migration provenance

Source: https://github.com/eason-yty/oyomap-site, read on 2026-11-15.
All eight page bodies, the product 404, and the stylesheet were checked against
https://www.oyomap.com and matched the live files. Main page text is preserved,
except support/privacy email addresses now use the configured Yuzuyu Studio aliases.
Canonical and language-alternate URLs now use the nested product path. Relative
links and CSS stay within `/oyomap/`. A company breadcrumb links back to `/`.
Keep the English, Simplified Chinese, and Traditional Chinese policies aligned.

## Preview and publishing

```sh
python3 -m http.server 4827 --bind 127.0.0.1 --directory docs
```

Review and push the source to `eason-yty/yuzuyu-studio` on GitHub.
GitHub Pages publishes `main:/docs`; `docs/CNAME` sets `yuzuyustudio.com`
as the canonical domain. `docs/.nojekyll` serves these static files directly.
The site has no added analytics, signup forms, or customer-data backend.
Shared studio CSS/JS and the cat icon use versioned URLs. Bump the relevant
version when changing an asset. GitHub Pages may cache HTML for ten minutes;
a version query on the page URL can open a fresh release without changing its
canonical URL. An already-open browser page still needs a reload.

## Domain and mail

Cloudflare manages registration, authoritative DNS, and Email Routing.
Aliases: `hello`, `support`, `privacy`, `admin`; all target the existing verified
Oyomap inbox. Catch-all is disabled. Preserve the service-managed three MX
records, SPF, and forwarding DKIM when changing web hosting. This is incoming
mail forwarding; no outbound mailbox or company-domain reply identity is configured.

DMARC: `v=DMARC1; p=none; rua=mailto:admin@yuzuyustudio.com`.
This monitors authentication; it does not enforce rejection. Tighten only after
the actual outbound mail provider and SPF/DKIM alignment are established.

DNSSEC was enabled and its registry DS/public authenticated answer verified on
2026-11-15. Auto-renew and WHOIS redaction were already on. Expiration shown in
Cloudflare: 2027-11-01; automatic renewal scheduled for 2027-10-02.
The website uses four DNS-only apex A records for GitHub Pages:
`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`.
The DNS-only `www` CNAME points to `eason-yty.github.io`.
GitHub Pages manages HTTPS and redirects `www` to the canonical apex domain.
Cloudflare mail records are independent of these website records.

## Old-domain transition

This migration copies content to the new company site. It does not change old
DNS, the old GitHub Pages repository, in-app links, or App Store Connect metadata.
Before retiring `oyomap.com`, validate public access to all migrated pages,
validate real email receipt, update app/store URLs, and configure/test permanent
redirects that preserve page and language paths. Keep the old domain registered
through the transition. Actual email delivery still requires a message from a
separate sender and confirmation in the destination inbox.
