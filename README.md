# Yuzuyu Studio website

The company owns `/`; each product owns its pages under its own path.
Use `https://yuzuyustudio.com` in customer-facing URLs.
GitHub Pages publishes this public company website from `main:/docs`.
Visitors do not need to sign in.

## Routes

| Path | Content |
|---|---|
| `/` | Company purpose, products, founder section, contact |
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
Founder names and biographies have not been supplied; the company homepage
clearly marks that section as forthcoming. The illustration is a mascot, not a portrait.

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
