# Yuzuyu Studio website

Static English/Chinese company website, with a product overview at `/oyomap/`.
The site source is independent of the YUZUYU iOS repository. Product privacy,
support, and terms links continue to use the existing Oyomap website.

## Local preview

```sh
python3 -m http.server 4827 --bind 127.0.0.1 --directory dist
```

## Publishing

The Sites project identity and static output directory are in `.openai/hosting.json`.
Publish the exact reviewed source using the Sites source workflow. The production
hostname is `yuzuyustudio.com`; `www.yuzuyustudio.com` should serve the same site.
Do not change the existing Oyomap DNS or in-app URLs as part of a company-site update.

## Domain and email

Cloudflare manages registration, authoritative DNS, and Email Routing.
The explicit aliases are `hello`, `support`, `privacy`, and `admin`. Their destination
is the existing verified Oyomap inbox. Catch-all remains disabled. Cloudflare creates
and manages the three MX records, SPF, and forwarding DKIM. Preserve these records
when changing web hosting. Email Routing is a receiving/forwarding configuration;
it does not establish a user mailbox or an outbound reply identity.

DNSSEC activation was submitted on 2026-11-15. Verify registry DS publication before
calling it fully active. Auto-renew and WHOIS redaction were already enabled.

## Migration boundary

Oyomap remains a product under Yuzuyu Studio. Before retiring `oyomap.com`, migrate
all privacy/support/terms pages and incoming mail, update App Store and in-app links,
and test permanent redirects and incoming mail. Keep the old domain registered
through the transition. This website alone does not perform that migration.
