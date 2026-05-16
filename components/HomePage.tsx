"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Menu, Phone, Shield, Sun, X, Zap } from "lucide-react";
import { useState } from "react";
import { commitments, company, contactCards, faqs, navItems, projectCapabilities, services, strengths, workTypes } from "@/data/site";
import { landingPages } from "@/data/landing-pages";
import { whatsappUrl } from "@/lib/utils";
import { EnquiryForm } from "@/components/EnquiryForm";
import { SectionHeading } from "@/components/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const introMessage = `Hello ${company.shortName}, I would like to know more about your solar and electrical services.`;

  return (
    <main id="home">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-navy/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#home" className="max-w-64 text-sm font-extrabold leading-tight text-white md:max-w-none md:text-base">
            {company.shortName}
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-semibold text-white/80 transition hover:text-solar">
                {item.label}
              </a>
            ))}
          </nav>
          <a href={`tel:+${company.phone}`} className="hidden items-center gap-2 rounded-md bg-solar px-4 py-2 text-sm font-bold text-navy transition hover:bg-white md:inline-flex">
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen ? (
          <div className="border-t border-white/10 bg-navy px-4 py-4 lg:hidden">
            <nav className="grid gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        ) : null}
      </header>

      <section className="relative isolate min-h-[92vh] overflow-hidden bg-navy pt-24 text-white">
        <Image
          src="/images/hero-solar.svg"
          alt="Solar panel installation for clean energy in Kerala"
          fill
          priority
          unoptimized
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,31,58,0.95),rgba(11,31,58,0.72),rgba(11,31,58,0.42))]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-24 md:px-6 lg:grid-cols-[1.08fr_0.72fr] lg:items-end lg:py-32">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.55 }}>
            <p className="inline-flex rounded-md bg-white/10 px-3 py-2 text-sm font-bold text-solar ring-1 ring-white/20">
              Solar and Electrical Works in Kerala
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              {company.name}
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-semibold text-white/90">
              {company.tagline}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              On-grid and hybrid solar systems, solar maintenance, government subsidy guidance, and all kinds of electrical work for residential, commercial, and industrial customers.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#enquiry" className="inline-flex items-center justify-center gap-2 rounded-md bg-solar px-6 py-3 font-extrabold text-navy transition hover:bg-white">
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-navy">
                Contact Us
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.55 }} className="mb-20 grid gap-3 rounded-lg border border-white/20 bg-white/10 p-5 backdrop-blur lg:mb-16 lg:mr-32">
            {[
              "Headed by Aji Kumar, Retired Army Captain (Honorary)",
              "On-grid, hybrid solar, maintenance, and electrical works",
              "Disciplined execution with clear communication"
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm font-semibold text-white/90">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-solar" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-5">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-3 md:px-6">
          {[
            { icon: Sun, label: "Solar Installation" },
            { icon: Zap, label: "Electrical Works" },
            { icon: Shield, label: "Trusted Project Support" }
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 rounded-lg border border-slate-100 bg-white p-4 shadow-sm">
              <item.icon className="h-8 w-8 text-leaf" />
              <span className="font-bold text-navy">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section-pad bg-[#f7faf8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[0.82fr_1fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-soft">
            <Image
              src="/images/about-electrical.svg"
              alt="Professional electrical and solar project planning"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading eyebrow="About Us" title="Professional work guided by discipline and responsibility" align="left" />
            <p className="mt-5 text-lg leading-8 text-graphite/80">
              Nandanam Electricals Engineers and Contractors is headed by {company.founder}, {company.founderTitle}. His background brings discipline, reliability, commitment, and a service-first mindset into every project.
            </p>
            <p className="mt-4 leading-7 text-graphite/75">
              The company supports customers with solar installation, maintenance, subsidy guidance, wiring, rewiring, repair, and complete electrical works. We work with residential, commercial, and industrial clients across Kerala.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading eyebrow="Services" title="Solar and electrical services built for long-term reliability" description="From first consultation to installation and maintenance, the service model is simple: understand the site, recommend clearly, execute neatly, and support the customer." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <service.icon className="h-9 w-9 text-leaf" />
                <h3 className="mt-5 text-xl font-bold text-navy">{service.title}</h3>
                <p className="mt-3 leading-7 text-graphite/70">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solar-solutions" className="section-pad bg-navy text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[1fr_0.88fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-solar">Solar Solutions</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">Solar panel installation Kerala customers can trust</h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              We install and support on-grid solar systems, hybrid solar systems, residential solar, commercial solar, solar maintenance, and government subsidy documentation for eligible customers.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["On-grid solar", "Hybrid solar", "Subsidy guidance", "Maintenance support"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md bg-white/10 p-4">
                  <CheckCircle2 className="h-5 w-5 text-solar" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/solar-work.svg"
              alt="Solar technician working on solar panels"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="electrical-works" className="section-pad bg-[#f7faf8]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading eyebrow="Electrical Works" title="All kinds of electrical work for homes, businesses, and industries" />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {workTypes.map((work) => (
              <div key={work.title} className="rounded-lg bg-white p-5 text-center shadow-sm">
                <work.icon className="mx-auto h-8 w-8 text-leaf" />
                <h3 className="mt-4 text-base font-bold text-navy">{work.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading eyebrow="Work We Handle" title="Solar and electrical solutions for different customer needs" description="We take up practical site work, maintenance, consultation, and documentation support with clear communication from enquiry to completion." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projectCapabilities.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-lg border border-slate-100 bg-white shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={`${project.title} for ${project.label}`}
                    fill
                    unoptimized
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm font-bold text-leaf">{project.type}</p>
                  <h3 className="mt-2 text-xl font-bold text-navy">{project.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-graphite/60">{project.label}</p>
                  <p className="mt-3 leading-7 text-graphite/70">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="section-pad bg-[#f7faf8]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading eyebrow="Why Choose Us" title="Built on disciplined service and customer confidence" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {strengths.map((strength) => (
              <div key={strength.title} className="rounded-lg bg-white p-6 shadow-sm">
                <strength.icon className="h-8 w-8 text-leaf" />
                <h3 className="mt-4 text-lg font-bold text-navy">{strength.title}</h3>
                <p className="mt-3 leading-7 text-graphite/70">{strength.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Service Areas"
            title="Local solar and electrical services near Kayamkulam"
            description="These focused service pages help customers and search engines understand the exact local services Nandanam Electricals provides."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {landingPages.map((page) => (
              <a
                key={page.slug}
                href={`/${page.slug}`}
                className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <h3 className="text-xl font-bold text-navy">{page.title}</h3>
                <p className="mt-3 leading-7 text-graphite/70">{page.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading eyebrow="Customer Commitment" title="Straightforward support before and after the work" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {commitments.map((commitment) => (
              <article key={commitment.title} className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-navy">{commitment.title}</h3>
                <p className="mt-3 text-lg leading-8 text-graphite/80">{commitment.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="enquiry" className="section-pad bg-navy">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="text-white">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-solar">Customer Enquiry</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">Request a free quote for solar or electrical work</h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              Share the basic details and we will respond with the right next step for solar installation, subsidy guidance, maintenance, or electrical works.
            </p>
          </div>
          <EnquiryForm />
        </div>
      </section>

      <section id="faq" className="section-pad bg-white">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading eyebrow="FAQ" title="Common questions from solar and electrical customers" />
          <div className="mt-10 divide-y divide-slate-200 rounded-lg border border-slate-100 bg-white shadow-sm">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-5">
                <summary className="cursor-pointer list-none text-lg font-bold text-navy">{faq.question}</summary>
                <p className="mt-3 leading-7 text-graphite/75">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad bg-[#f7faf8]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-[0.78fr_1fr]">
          <div>
            <SectionHeading eyebrow="Contact Us" title="Speak with Nandanam Electricals" align="left" description="For solar installation, hybrid and on-grid systems, electrical works, maintenance, and subsidy guidance in Kerala, contact us by phone, WhatsApp, email, or enquiry form." />
            <div className="mt-8 grid gap-4">
              {contactCards.map((card) => (
                <div key={card.label} className="flex items-center gap-4 rounded-lg bg-white p-5 shadow-sm">
                  <card.icon className="h-6 w-6 text-leaf" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-graphite/50">{card.label}</p>
                    <p className="mt-1 font-bold text-navy">{card.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <iframe
            title="Nandanam Electricals service area in Kerala"
            src={company.mapsEmbedUrl}
            className="min-h-[420px] w-full rounded-lg border-0 shadow-soft"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <footer className="bg-navy px-4 py-8 text-white md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-bold">{company.name}</p>
          <p className="text-sm text-white/70">Solar company in Kerala | Electrical contractors Kerala</p>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a aria-label="WhatsApp Nandanam Electricals" href={whatsappUrl(introMessage)} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-leaf px-5 py-3 font-bold text-white shadow-soft transition hover:bg-leaf/90">
          WhatsApp
        </a>
        <a aria-label="Call Nandanam Electricals" href={`tel:+${company.phone}`} className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-solar text-navy shadow-soft transition hover:bg-white">
          <Phone className="h-5 w-5" />
        </a>
      </div>
    </main>
  );
}
