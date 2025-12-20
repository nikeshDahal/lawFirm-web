/**
 * NAV_ITEMS: The central configuration for the navigation menu.
 * This structure allows for easy updates to practice areas and submenu items.
 */
const NAV_ITEMS = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about-us" },
  {
    name: "Practice Areas",
    link: "#",
    submenu: [
      {
        name: "Corporate Law",
        link: "/practice-area/corporate-commercial-law",
      },
      {
        name: "Family Law",
        link: "/practice-area/litigation-dispute-resolution",
      },
      { name: "Criminal Defense", link: "/practice-area/employment-labor-law" },
      {
        name: "Intellectual Property",
        link: "/practice-area/employment-labor-law",
      },
      { name: "Real Estate", link: "/practice-area/real-estate-property-law" },
    ],
  },
  // {
  //   name: "The Firm",
  //   link: "#",
  //   submenu: [
  //     { name: "Our Partners", link: "#" },
  //     { name: "Case Results", link: "#" },
  //     { name: "Careers", link: "#" },
  //   ],
  // },
  { name: "Publications", link: "/publications" },
  { name: "Contact Us", link: "/contact-us" },
];

export { NAV_ITEMS };
