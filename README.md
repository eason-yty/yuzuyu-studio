# Yuzuyu Studio website

The company owns `/`; each product owns its pages under its own path.
Use `https://yuzuyustudio.com` in customer-facing URLs.
GitHub Pages publishes this public company website from `main:/docs`.
Visitors do not need to sign in.

## Routes

| Path | Content |
|---|---|
| `/` | Company purpose, two product entries, studio and contact |
| `/oyomap/` | Oyomap product introduction, App Store link, capabilities and latest journal entry |
| `/oyomap/zh-Hans/` | Simplified Chinese product introduction |
| `/oyomap/journal/` | Oyomap journal, initially containing the 1.0 release story |
| `/oyomap/journal/zh-Hans/` | Simplified Chinese journal |
| `/oyomap/journal/the-first-chapter/` | Oyomap 1.0 — the first chapter |
| `/oyomap/journal/the-first-chapter/zh-Hans/` | Simplified Chinese 1.0 release story |
| `/oyomap/privacy/` | English privacy policy |
| `/oyomap/privacy/zh-Hans/` | Chinese privacy policy |
| `/oyomap/privacy/zh-Hant/` | Compatibility redirect to the Chinese privacy policy |
| `/oyomap/support/` | English support page |
| `/oyomap/support/zh-Hans/` | Chinese support page |
| `/oyomap/support/zh-Hant/` | Compatibility redirect to the Chinese support page |
| `/oyomap/terms/` | English terms and Apple EULA link |
| `/oyomap/terms/zh-Hans/` | Chinese translation of the same terms |
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
Keep visible keyboard focus and reduced-motion support. Company and Oyomap pages
offer English and Chinese (Simplified Chinese text).

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
At the initial migration, all eight page bodies, the product 404, and the stylesheet
were checked against https://www.oyomap.com and matched the live files. Contact
addresses now use the configured Yuzuyu Studio aliases. Canonical and language-
alternate URLs use the nested product path; the footer links back to the studio.
The existing English and Simplified Chinese privacy disclosures and support answers,
and the English terms, remain intact. The Chinese terms translate the same eleven
sections, retaining the original effective date and Apple EULA destination.

All Oyomap pages now use the same `product.css`: light cream paper, brown ink,
orange accents, real app icon, Newsreader titles, and shared navigation/footer.
Do not leave a linked support or legal page on a separate theme (user feedback,
2026-11-15). The old automatic dark theme and stylesheet have been removed.

Support puts quick answers before email preparation. Privacy and terms use an
unboxed reading column; desktop has a small Support/Privacy/Terms sidebar, and
mobile places those links in one row above the title. Privacy service disclosures
stack with labels on mobile. Policy text and effective dates are not changed for
visual updates.

```text
Desktop                            Mobile
Oyomap   The app / Journal / EN 中文  Oyomap  Journal / English 中文
Support | Page title               Support / Privacy / Terms
Privacy | Introduction / date      Page title / introduction / date
Terms   | FAQ or readable policy   FAQ or readable policy
Studio              Legal links    Studio / legal links
```

## Oyomap product page and journal

The product page answers: **What can I make with Oyomap, and where can I get it?**
The order is introduction/download → product artwork and capability choices →
latest journal entry → X account → support/privacy/terms. Desktop pairs the
introduction with the artwork; mobile stacks them with compact capability controls.
Keep the adjoining map screenshots together at their natural aspect ratio. Cropping
one tall App Store image into a mobile landscape frame hides the actual map.

The four 1320×2868 WebP images in `docs/oyomap/assets/` are copies of public
Oyomap App Store screenshots 1, 2, 3 and 8 from app ID `6799545137`. The user approved
using these public images for now, including their existing artwork/watermarks.
They are hosted with this independent website, not requested from Apple at runtime.
Replace them with approved clean exports when supplied; do not invent app screens.

English is the default. Product, journal, article, support, privacy and terms pages
have explicit `zh-Hans/` counterparts with canonical URLs and reciprocal `hreflang`.
Every Oyomap header shows **English / 中文** side by side and identifies the active
language. Navigation stays in that language; there is no browser-language detection
or stored locale override. Chinese footer links open Chinese Support, Privacy and
Terms. The old `zh-Hant/` support/privacy URLs redirect to `zh-Hans/` with a native
HTML refresh and a fallback link, so existing bookmarks keep working without a
third language choice or JavaScript. Content and links work without JavaScript;
JavaScript only switches the homepage's product artwork.

The first journal entry is the public 1.0 release, dated October 31, 2026.
The website/brand-adjustment draft from the mockup is not published. Add future
articles at `/oyomap/journal/<slug>/`, link them from the journal and update the
homepage's latest entry. Add a Chinese counterpart when a translation is ready;
do not present an untranslated article as Chinese or require every dev note to
be translated. Add category filters only when there is enough content to need them.

The social destination is `https://x.com/fries_yty`. There are no social embeds,
new analytics, account forms or changes to the iOS app's telemetry contract.

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
