// components/SchemaMarkup.tsx
export default function SchemaMarkup({ customSchema }: { customSchema?: any }) {
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService", // Perfect for Top Legal Advisers
    name: "Top Legal Advisers",
    url: "https://toplegaladvisers.com/",
    logo: "https://toplegaladvisers.com/logo.png",
    description: "Expert legal advice and consultancy services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Anamnagar, Kathmandu",
      addressLocality: "Kathmandu",
      addressRegion: "Bagmati",
      postalCode: "44600",
      addressCountry: "NP",
    },
  };

  const finalSchema = customSchema || defaultSchema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
    />
  );
}
