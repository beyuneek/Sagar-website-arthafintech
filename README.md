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

## Before going live

1. `arthafinedge.com` still shows GoDaddy's parked page, and `www.arthafinedge.com` fails its security certificate. Both need fixing in the GoDaddy account.
2. Add the WhatsApp number in `assets/site.js`.
3. Upload these files to hosting (Netlify, GitHub Pages or GoDaddy hosting all work for a plain HTML site) and point the domain at it.

`assets/og-image.png` is the preview picture WhatsApp, LinkedIn and Instagram show when someone shares the link.
