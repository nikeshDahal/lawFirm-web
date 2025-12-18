/**
 * NAV_ITEMS: The central configuration for the navigation menu.
 * This structure allows for easy updates to practice areas and submenu items.
 */
const NAV_ITEMS = [
  { name: "Home", link: "#" },
  {
    name: "Practice Areas",
    link: "#",
    submenu: [
      { name: "Corporate Law", link: "#" },
      { name: "Family Law", link: "#" },
      { name: "Criminal Defense", link: "#" },
      { name: "Intellectual Property", link: "#" },
      { name: "Real Estate", link: "#" },
    ],
  },
  {
    name: "The Firm",
    link: "#",
    submenu: [
      { name: "Our Partners", link: "#" },
      { name: "Case Results", link: "#" },
      { name: "Careers", link: "#" },
    ],
  },
  { name: "Insights", link: "#" },
  { name: "Contact", link: "#" },
];

export { NAV_ITEMS };
