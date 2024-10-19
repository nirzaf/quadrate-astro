// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];

// An array of links for footer
const footerLinks = [
  {
    section: "Explore",
    links: [
      { name: "Services", url: "/services" },
      { name: "Blog", url: "/blog" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "/about" },
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "https://share.hsforms.com/1Lg0rWbYQTLq_scQKBpac2Ap2f36" },
    ],
  },
];

// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/quadrate.lk/",
  x: "#",
  github: "https://github.com/nirzaf",
  google: "#",
  slack: "#",
  instagram: "https://www.instagram.com/quadrate.lk/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};