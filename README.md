# Artha Finedge Consultants LLP — website

A plain HTML + CSS site. No build step and no server needed. Double-click `index.html` to open it in a browser.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `services.html` | Services (all six in detail) |
| `property-accounting.html` | Property Accounting |
| `about.html` | About Us |
| `contact.html` | Contact and enquiry form |

Menu: Services · Property Accounting · How we work · About, plus the **Book a Free Consultation** button. "How we work" is a section on the home page.

## Changing the WhatsApp number or email

Open `assets/site.js`. The contact details are at the very top:

```js
var SITE = {
  whatsapp: "",                                        // e.g. "917087055909"
  email: "arthafinedgeconsultantsllp@gmail.com",
  instagram: "https://www.instagram.com/arthafinedge/",
  ...
};
```

- **WhatsApp:** type the number with the country code and digits only, e.g. `"917087055909"`. Save the file. Every WhatsApp button on every page starts working, including the floating green button and "Send on WhatsApp" on the contact form. Until a number is added, the WhatsApp buttons open the contact form instead, and "Send on WhatsApp" stays hidden.
- **Email:** replace the address. The contact page, the footer and the form all pick it up.

## Changing the picture on the home page

The illustration is `assets/hero.svg`. To use a photo instead, put the photo in `assets/` and change `src="assets/hero.svg"` in `index.html` to the photo's file name.

## The contact form

There is no server. The form opens the visitor's WhatsApp or email app with their message already typed out, and they press send. Nothing is stored anywhere.

## Hosting

The site is hosted on GitHub Pages, from the `main` branch of `beyuneek/Sagar-website-arthafintech`. The `CNAME` file tells GitHub to serve it at `arthafinedge.com`, so don't delete it.

To update the live site, commit the changed files and push to `main`. GitHub rebuilds the site within a minute or two.

The domain's DNS at GoDaddy must point to GitHub:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | beyuneek.github.io |

Word documents in this folder are ignored by git and never published.

`assets/og-image.png` is the preview picture WhatsApp, LinkedIn and Instagram show when someone shares the link.
