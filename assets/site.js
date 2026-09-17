/* ==========================================================================
   CONTACT DETAILS — EDIT HERE
   These are used on every page of the site. Change them here only.
   ========================================================================== */
var SITE = {
  // WhatsApp number: country code + number, digits only.
  // Example: "917087055909". Leave "" until you have it.
  whatsapp: "917807755909",

  // Email address that enquiries should go to.
  email: "arthafinedgeconsultantsllp@gmail.com",

  // Instagram profile link.
  instagram: "https://www.instagram.com/arthafinedge/",

  // The message a visitor's WhatsApp opens with.
  whatsappGreeting: "Hello Artha Finedge, I'd like to book a free consultation."
};
/* ========================================================================== */

(function () {
  "use strict";

  var digits = String(SITE.whatsapp || "").replace(/\D/g, "");
  var hasWhatsApp = digits.length >= 10;

  function whatsappLink(text) {
    return "https://wa.me/" + digits + "?text=" + encodeURIComponent(text || SITE.whatsappGreeting);
  }

  function prettyNumber(d) {
    if (d.length === 12 && d.indexOf("91") === 0) return "+91 " + d.slice(2, 7) + " " + d.slice(7);
    return "+" + d;
  }

  function each(selector, fn) {
    Array.prototype.forEach.call(document.querySelectorAll(selector), fn);
  }

  // WhatsApp links. Until a number is set, they point to the contact form instead.
  each('[data-link="whatsapp"]', function (a) {
    if (hasWhatsApp) {
      a.href = whatsappLink();
      a.target = "_blank";
      a.rel = "noopener";
    } else {
      a.href = /contact\.html$/.test(location.pathname) ? "#enquiry" : "contact.html#enquiry";
    }
  });
  each('[data-text="whatsapp"]', function (el) {
    if (hasWhatsApp) el.textContent = prettyNumber(digits);
  });

  // Email and Instagram.
  each('[data-link="email"]', function (a) {
    if (SITE.email) a.href = "mailto:" + SITE.email;
  });
  each('[data-text="email"]', function (el) {
    if (SITE.email) el.textContent = SITE.email;
  });
  each('[data-link="instagram"]', function (a) {
    a.href = SITE.instagram;
    a.target = "_blank";
    a.rel = "noopener";
  });

  // Footer year.
  each("[data-year]", function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  // Mobile menu.
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    each(".nav a", function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  // Enquiry form: opens WhatsApp or the visitor's email app with the message filled in.
  var form = document.getElementById("enquiry");
  if (form) {
    var waButton = form.querySelector('[data-send="whatsapp"]');
    if (waButton && !hasWhatsApp) {
      waButton.hidden = true;
      // Without WhatsApp, email is the only way to send, so it becomes the main button.
      var emailButton = form.querySelector('[data-send="email"]');
      if (emailButton) emailButton.className = "btn btn--forest";
      var note = form.querySelector(".form-note");
      if (note) note.textContent = "Your message opens in your email app, ready to send.";
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;

      var via = event.submitter && event.submitter.getAttribute("data-send");
      if (via !== "whatsapp" || !hasWhatsApp) via = "email";

      var data = new FormData(form);
      var get = function (k) { return String(data.get(k) || "").trim(); };
      var lines = [
        "New enquiry from the website",
        "",
        "Name: " + get("name"),
        "Email: " + get("email")
      ];
      if (get("company")) lines.push("Company: " + get("company"));
      lines.push("Country: " + get("country"));
      lines.push("Service: " + get("service"));
      lines.push("", get("message"));
      var body = lines.join("\n");

      var status = document.getElementById("form-status");
      if (via === "whatsapp") {
        window.open(whatsappLink(body), "_blank", "noopener");
        if (status) status.textContent = "WhatsApp is opening with your message. Just press send.";
      } else {
        window.location.href =
          "mailto:" + SITE.email +
          "?subject=" + encodeURIComponent("Website enquiry from " + get("name")) +
          "&body=" + encodeURIComponent(body);
        if (status) status.textContent = "Your email app is opening with your message. Just press send.";
      }
    });
  }
})();
