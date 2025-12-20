import { FirmOverviewItem, PracticeProps } from "@/interface";

// const firmOverview: FirmOverviewItem[] = [
//   {
//     id: 1,
//     title: "Corporate & Commercial Law",
//     description:
//       "We advise businesses on company formation, mergers, acquisitions, shareholder agreements, and regulatory compliance to ensure sustainable growth and legal security.",
//     icon: "Briefcase",
//   },
//   {
//     id: 2,
//     title: "Litigation & Dispute Resolution",
//     description:
//       "Our firm represents clients in civil, commercial, and contractual disputes, delivering strategic advocacy in courts, tribunals, and arbitration proceedings.",
//     icon: "Scale",
//   },
//   {
//     id: 3,
//     title: "Real Estate & Property Law",
//     description:
//       "We provide end-to-end legal support for property transactions, including due diligence, title verification, leasing, and land dispute resolution.",
//     icon: "Home",
//   },
//   {
//     id: 4,
//     title: "Employment & Labor Law",
//     description:
//       "Expert guidance on employment contracts, workplace policies, labor compliance, dispute handling, and representation before labor authorities.",
//     icon: "Users",
//   },
//   {
//     id: 5,
//     title: "Intellectual Property Rights",
//     description:
//       "Protection and enforcement of trademarks, copyrights, patents, and trade secrets to safeguard innovation and brand identity.",
//     icon: "Lightbulb",
//   },
//   {
//     id: 6,
//     title: "Family & Personal Law",
//     description:
//       "Compassionate legal assistance in matters of divorce, child custody, inheritance, wills, and succession planning with confidentiality and care.",
//     icon: "HeartHandshake",
//   },
// ];

const firmOverview: PracticeProps[] = [
  {
    id: "corporate-commercial-law",
    title: "Corporate & Commercial Law",
    subtitle:
      "Strategic legal counsel for company formation, mergers, and global regulatory compliance.",
    metaDescription:
      "Justice & Co. provides expert corporate legal services including M&A, shareholder agreements, and regulatory compliance to ensure sustainable business growth.",
    category: "Primary Practice",
    leadPartner: "Eleanor Vance",
    icon: "Briefcase",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    overview:
      "We advise businesses on company formation, mergers, acquisitions, shareholder agreements, and regulatory compliance to ensure sustainable growth and legal security.",
    detailedContent: `
      <p class="lead">In an increasingly complex global marketplace, corporate entities require more than just legal advice; they require a strategic partnership.</p>

      <h3>Mergers & Acquisitions</h3>
      <p>We manage high-value domestic and cross-border transactions with a focus on due diligence, risk mitigation, and long-term value creation.</p>

      <h3>Corporate Governance & Compliance</h3>
      <p>Our team ensures adherence to evolving regulatory frameworks including GDPR, corporate governance codes, and shareholder protection laws.</p>
    `,
  },

  {
    id: "litigation-dispute-resolution",
    title: "Litigation & Dispute Resolution",
    subtitle:
      "Strategic advocacy and decisive representation across courts, tribunals, and arbitration forums.",
    metaDescription:
      "Experienced litigation lawyers representing clients in civil, commercial, and contractual disputes with strategic precision.",
    category: "Primary Practice",
    leadPartner: "Marcus Hale",
    icon: "Scale",
    image:
      "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=80&w=1600",
    overview:
      "We represent clients in complex disputes, offering practical solutions through negotiation, arbitration, and litigation.",
    detailedContent: `
      <p class="lead">Disputes are inevitable in business and personal affairs — our role is to resolve them efficiently and decisively.</p>

      <h3>Civil & Commercial Litigation</h3>
      <p>Our litigators handle high-stakes disputes with courtroom excellence and strategic foresight.</p>

      <h3>Alternative Dispute Resolution</h3>
      <p>We prioritize mediation and arbitration where appropriate to reduce cost, time, and reputational risk.</p>
    `,
  },

  {
    id: "real-estate-property-law",
    title: "Real Estate & Property Law",
    subtitle:
      "Comprehensive legal support for residential, commercial, and industrial property matters.",
    metaDescription:
      "End-to-end real estate legal services including due diligence, title verification, leasing, and land dispute resolution.",
    category: "Primary Practice",
    leadPartner: "Sophia Grant",
    icon: "Home",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600",
    overview:
      "We assist clients with property acquisition, leasing, development, and dispute resolution.",
    detailedContent: `
      <p class="lead">Property transactions demand precision, foresight, and regulatory clarity.</p>

      <h3>Property Transactions</h3>
      <p>We conduct thorough due diligence and documentation for seamless property transfers.</p>

      <h3>Land & Development Disputes</h3>
      <p>Our team resolves boundary, ownership, and development-related disputes efficiently.</p>
    `,
  },

  {
    id: "employment-labor-law",
    title: "Employment & Labor Law",
    subtitle:
      "Practical legal solutions for employers and employees in a changing workforce landscape.",
    metaDescription:
      "Legal guidance on employment contracts, labor compliance, workplace disputes, and HR policy development.",
    category: "Primary Practice",
    leadPartner: "Daniel Reeves",
    icon: "Users",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600",
    overview:
      "We advise organizations and individuals on employment laws, workplace compliance, and dispute resolution.",
    detailedContent: `
      <p class="lead">Modern workplaces require legally sound and ethically grounded employment frameworks.</p>

      <h3>Employment Contracts & Policies</h3>
      <p>Drafting and reviewing contracts, HR manuals, and compliance frameworks.</p>

      <h3>Labor Disputes</h3>
      <p>Representation before labor courts, tribunals, and regulatory authorities.</p>
    `,
  },

  {
    id: "intellectual-property-rights",
    title: "Intellectual Property Rights",
    subtitle:
      "Protecting innovation, creativity, and brand value in competitive markets.",
    metaDescription:
      "Comprehensive IP services including trademarks, copyrights, patents, and enforcement strategies.",
    category: "Primary Practice",
    leadPartner: "Isabella Moore",
    icon: "Lightbulb",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
    overview:
      "We safeguard intellectual assets through registration, enforcement, and strategic advisory.",
    detailedContent: `
      <p class="lead">Intellectual property is often a company’s most valuable asset.</p>

      <h3>IP Registration & Protection</h3>
      <p>Trademark, copyright, and patent filing with domestic and international coverage.</p>

      <h3>Enforcement & Licensing</h3>
      <p>We handle infringement actions, licensing agreements, and brand protection strategies.</p>
    `,
  },

  {
    id: "family-personal-law",
    title: "Family & Personal Law",
    subtitle:
      "Compassionate and confidential legal support for personal and family matters.",
    metaDescription:
      "Trusted legal assistance for divorce, child custody, inheritance, wills, and succession planning.",
    category: "Primary Practice",
    leadPartner: "Amelia Brooks",
    icon: "HeartHandshake",
    image:
      "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&q=80&w=1600",
    overview:
      "We provide sensitive and effective legal solutions for family and personal legal matters.",
    detailedContent: `
      <p class="lead">Family matters require empathy, discretion, and sound legal judgment.</p>

      <h3>Divorce & Custody</h3>
      <p>Balanced representation focused on fair outcomes and long-term well-being.</p>

      <h3>Wills & Succession</h3>
      <p>Estate planning, inheritance structuring, and succession advisory services.</p>
    `,
  },
];

export { firmOverview };
