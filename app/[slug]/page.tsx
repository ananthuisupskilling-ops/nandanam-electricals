import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Phone } from "lucide-react";
import { company } from "@/data/site";
import { landingPages } from "@/data/landing-pages";
import { whatsappUrl } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function findPage(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}

export async function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = findPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.description,
    alternates: {
      canonical: `/${page.slug}`
    },
    openGraph: {
      title: page.metaTitle,
      description: page.description,
      url: `${company.siteUrl}/${page.slug}`,
      type: "website"
    }
  };
}

export default async function LocalLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = findPage(slug);

  if (!page) {
    notFound();
  }

  const message = `Hello ${company.shortName}, I would like to enquire about ${page.title}.`;

  return (
    <main className="bg-[#f7faf8] text-graphite">
      <header className="bg-navy px-4 py-4 text-white md:px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link href="/" className="font-extrabold">
            {company.shortName}
          </Link>
          <Link href="/#contact" className="rounded-md bg-solar px-4 py-2 font-bold text-navy">
            Contact
          </Link>
        </div>
      </header>

      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">
              Nandanam Electricals
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-navy md:text-5xl">
              {page.h1}
            </h1>
            <p className="mt-5 text-lg leading-8 text-graphite/80">{page.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl(message)}
                className="inline-flex items-center justify-center rounded-md bg-leaf px-5 py-3 font-bold text-white"
              >
                WhatsApp Enquiry
              </a>
              <a
                href={`tel:+${company.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-solar px-5 py-3 font-bold text-navy"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-bold text-navy">Services Covered</h2>
            <div className="mt-5 grid gap-3">
              {page.services.map((service) => (
                <div key={service} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-leaf" />
                  <span className="font-semibold text-graphite/80">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-3xl font-bold text-navy">Service Area</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-graphite/80">{page.areas}</p>
          <p className="mt-6 max-w-3xl leading-7 text-graphite/70">
            For accurate pricing and recommendations, we review the site requirement, usage,
            electrical load, roof space, and customer priorities before suggesting the next step.
          </p>
        </div>
      </section>
    </main>
  );
}
