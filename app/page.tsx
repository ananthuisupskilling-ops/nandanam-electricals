import { HomePage } from "@/components/HomePage";
import { company, faqs } from "@/data/site";

export default function Page() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "Electrician"],
      name: company.name,
      alternateName: company.alternateNames,
      description: company.description,
      url: company.siteUrl,
      telephone: `+${company.phone}`,
      email: company.email,
      areaServed: "Kerala",
      founder: {
        "@type": "Person",
        name: company.founder,
        honorificSuffix: company.founderTitle
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Nandanam, Menampally, Pathiyoor P.O.",
        addressLocality: "Kayamkulam",
        addressRegion: "Kerala",
        postalCode: "690508",
        addressCountry: "IN"
      },
      makesOffer: [
        "Solar panel installation",
        "On-grid solar systems",
        "Hybrid solar systems",
        "Solar subsidy documentation support",
        "Electrical wiring",
        "All electrical works",
        "Solar maintenance",
        "Electrical maintenance",
        "Project consultation"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "SolarEnergyContractor",
      provider: {
        "@type": "LocalBusiness",
        name: company.name
      },
      areaServed: "Kerala"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HomePage />
    </>
  );
}
