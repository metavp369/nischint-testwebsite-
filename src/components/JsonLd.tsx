import { site } from "@/content/site";
import type { Faq } from "@/content/faq";

function Script({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe; escape "<" so no tag can close the script.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${site.url}/#org`,
            name: site.name,
            legalName: site.company.legalName,
            url: site.url,
            logo: `${site.url}/brand/nischint-shield.png`,
            email: site.contact.support,
            foundingLocation: site.company.city,
            sameAs: site.social.map((s) => s.href),
            description: site.description,
          },
          {
            "@type": "WebSite",
            "@id": `${site.url}/#website`,
            url: site.url,
            name: site.name,
            publisher: { "@id": `${site.url}/#org` },
            inLanguage: "en-IN",
          },
        ],
      }}
    />
  );
}

export function FaqJsonLd({ items }: { items: Faq[] }) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: `${site.url}${it.path}`,
        })),
      }}
    />
  );
}
