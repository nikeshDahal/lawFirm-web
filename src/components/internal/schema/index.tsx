// components/SchemaMarkup.tsx
export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService", // Perfect for Top Legal Advisers
    name: "Top Legal Advisers",
    url: "https://toplegaladvisers.com/",
    logo: "https://toplegaladvisers.com/logo.png",
    description: "Expert legal advice and consultancy services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "Your City",
      addressRegion: "State",
      postalCode: "12345",
      addressCountry: "US",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
