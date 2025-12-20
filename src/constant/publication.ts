export type Publication = {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  author: string;
  authorTitle?: string;
  date: string;
  displayDate: string;
  readTime: string;
  image: string;
  excerpt: string;
  metaDescription: string;
  content: string;
};

const PUBLICATIONS: Publication[] = [
  {
    id: "ai-governance-2024",
    title: "Navigating AI Governance in 2024",
    subtitle:
      "A Strategic Framework for Global Corporate Compliance and Risk Mitigation",
    category: "Corporate Law",
    author: "Eleanor Vance",
    authorTitle: "Senior Partner",
    date: "2024-12-12",
    displayDate: "December 12, 2024",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
    excerpt:
      "A comprehensive analysis of emerging regulatory frameworks for artificial intelligence in global commerce.",
    metaDescription:
      "Explore the evolving AI governance landscape in 2024, including EU AI Act compliance, transparency rules, and liability frameworks.",
    content: `
      <p class="lead">
        As artificial intelligence becomes deeply embedded in corporate operations, regulators worldwide are accelerating enforcement.
      </p>

      <h3>The EU AI Act Explained</h3>
      <p>
        The EU AI Act introduces a risk-based classification system that defines strict obligations for high-risk AI systems.
      </p>

      <blockquote>
        “AI governance is not about control — it’s about accountability and trust.”
      </blockquote>

      <h3>Corporate Compliance Strategy</h3>
      <p>
        Legal teams must now collaborate with engineering leadership to ensure algorithmic transparency and documentation.
      </p>

      <h3>Future Outlook</h3>
      <p>
        By 2025, liability frameworks will determine how organizations absorb AI-driven risks across industries.
      </p>
    `,
  },

  {
    id: "ma-guide-2024",
    title: "Mergers & Acquisitions Guide",
    subtitle: "Strategic Playbooks for High-Value Cross-Border Transactions",
    category: "Finance",
    author: "Alexander Sterling",
    authorTitle: "Managing Director",
    date: "2024-11-28",
    displayDate: "November 28, 2024",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1600",
    excerpt:
      "Strategies for multi-billion dollar cross-border acquisitions and due diligence protocols.",
    metaDescription:
      "An expert guide to mergers and acquisitions covering valuation models, due diligence, regulatory approvals, and deal structuring.",
    content: `
      <p class="lead">
        Mergers and acquisitions remain one of the most powerful growth strategies for enterprises seeking market expansion.
      </p>

      <h3>Pre-Deal Strategy</h3>
      <p>
        Successful acquisitions begin with strategic alignment, target screening, and valuation benchmarking.
      </p>

      <h3>Due Diligence Essentials</h3>
      <p>
        Financial, legal, and operational due diligence reduces hidden liabilities and post-deal disputes.
      </p>

      <blockquote>
        “The best deals are built long before negotiations begin.”
      </blockquote>

      <h3>Post-Merger Integration</h3>
      <p>
        Integration planning determines whether synergy targets are realized or lost.
      </p>
    `,
  },

  {
    id: "future-ip-protection",
    title: "The Future of IP Protection",
    subtitle:
      "How Innovation, AI, and Globalization Are Redefining Intellectual Property Law",
    category: "Intellectual Property",
    author: "Julianna Ross",
    authorTitle: "IP Counsel",
    date: "2024-10-15",
    displayDate: "October 15, 2024",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1600",
    excerpt:
      "How the digital landscape is redefining patent law and trademark enforcement for tech giants.",
    metaDescription:
      "Discover how emerging technologies are reshaping patent protection, trademark enforcement, and IP litigation worldwide.",
    content: `
      <p class="lead">
        Intellectual property law is undergoing rapid transformation as technology outpaces traditional enforcement models.
      </p>

      <h3>AI-Generated IP</h3>
      <p>
        Courts are increasingly challenged by questions of authorship and ownership in AI-generated inventions.
      </p>

      <h3>Global Enforcement Challenges</h3>
      <p>
        Cross-border infringement cases require harmonized strategies and jurisdictional expertise.
      </p>

      <blockquote>
        “IP protection is no longer optional — it is a core business strategy.”
      </blockquote>

      <h3>What Comes Next</h3>
      <p>
        Companies that modernize their IP strategies today will dominate innovation markets tomorrow.
      </p>
    `,
  },
];

export { PUBLICATIONS };
