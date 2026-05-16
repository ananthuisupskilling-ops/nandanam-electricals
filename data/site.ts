import {
  BadgeCheck,
  BatteryCharging,
  Building2,
  Cable,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  Factory,
  Handshake,
  Home,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sun,
  Wrench,
  Zap
} from "lucide-react";

export const company = {
  name: "Nandanam Electricals Engineers and Contractors",
  googleBusinessName: "Nandanam Electricals Engineers and Contractors Ltd",
  alternateNames: [
    "Nandanam Electricals Engineers and Contractors Ltd",
    "Nandanam Electricals Engineers & Contractors",
    "Nandanam Electrical Engineers and Contractors",
    "Nandanam Electricals Kayamkulam"
  ],
  shortName: "Nandanam Electricals",
  founder: "Aji Kumar",
  founderTitle: "Retired Army Captain (Honorary)",
  tagline:
    "Reliable Solar & Electrical Solutions Backed by Discipline, Experience and Trust.",
  location: "Nandanam, Menampally, Pathiyoor P.O., Kayamkulam, Kerala 690508",
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "919400134503",
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "nandanam.eec@gmail.com",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.nandanamelectricals.com",
  mapsEmbedUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
    "https://www.google.com/maps?q=Nandanam%2C%20Menampally%2C%20Pathiyoor%20P.O.%2C%20Kayamkulam%2C%20Kerala%20690508&output=embed",
  description:
    "Solar panel installation, on-grid solar, hybrid solar, electrical works, maintenance, consultation, and subsidy documentation support for customers in Kerala."
};

export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Works" },
  { href: "#enquiry", label: "Enquiry" },
  { href: "#contact", label: "Contact" }
];

export const services = [
  {
    icon: Sun,
    title: "Solar Installation",
    description:
      "Rooftop and ground-mounted solar installation for homes, shops, offices, institutions, and other properties."
  },
  {
    icon: Zap,
    title: "On-Grid Solar Systems",
    description:
      "Grid-connected solar systems designed for practical savings, reliable generation, and proper documentation."
  },
  {
    icon: BatteryCharging,
    title: "Hybrid Solar Systems",
    description:
      "Hybrid solar solutions with battery support for customers who need better backup and flexibility."
  },
  {
    icon: Wrench,
    title: "Solar Maintenance & Service",
    description:
      "Solar inspection, troubleshooting, inverter checks, maintenance support, and performance guidance."
  },
  {
    icon: Cable,
    title: "All Electrical Works",
    description:
      "Residential, commercial, and industrial electrical wiring, rewiring, repair, maintenance, and fault correction."
  },
  {
    icon: FileCheck2,
    title: "Solar Subsidy Support",
    description:
      "Guidance for government solar subsidy documentation, including subsidy support up to Rs. 78,000 where eligible."
  }
];

export const workTypes = [
  { icon: Home, title: "Residential Electrical Works" },
  { icon: Building2, title: "Commercial Electrical Works" },
  { icon: Factory, title: "Industrial Electrical Works" },
  { icon: ShieldCheck, title: "Electrical Maintenance" }
];

export const projectCapabilities = [
  {
    title: "Residential Solar & Electrical",
    label: "Homes and villas",
    type: "Residential Work",
    image: "/images/project-solar.svg",
    description:
      "Solar installation, electrical wiring, rewiring, maintenance, and safe power distribution for homes."
  },
  {
    title: "Commercial Solar & Electrical",
    label: "Shops, offices, and buildings",
    type: "Commercial Work",
    image: "/images/project-electrical.svg",
    description:
      "On-grid solar, hybrid solar, electrical maintenance, DB works, load planning, and fault correction."
  },
  {
    title: "Industrial & Project Support",
    label: "Factories and larger sites",
    type: "Industrial Work",
    image: "/images/project-consultation.svg",
    description:
      "Project consultation, site assessment, electrical works, solar planning, and documentation support."
  }
];

export const strengths = [
  { icon: BadgeCheck, title: "Experienced Team", text: "Hands-on project experience across solar and electrical works." },
  { icon: Clock3, title: "Timely Completion", text: "Planned execution with disciplined scheduling and accountability." },
  { icon: Handshake, title: "Transparent Pricing", text: "Clear communication before work begins, with no confusing promises." },
  { icon: ShieldCheck, title: "Trusted Workmanship", text: "Safety-focused service with dependable materials and careful installation." }
];

export const commitments = [
  {
    title: "Clear Guidance",
    text:
      "Customers receive practical advice on solar capacity, system type, electrical safety, and documentation before work begins."
  },
  {
    title: "Dependable Maintenance",
    text:
      "We support solar and electrical maintenance needs after installation, including inspection, troubleshooting, and repair work."
  }
];

export const faqs = [
  {
    question: "Do you provide solar panel installation in Kerala?",
    answer:
      "Yes. Nandanam Electricals provides on-grid solar, hybrid solar, solar installation, maintenance, consultation, and documentation support for customers in Kerala."
  },
  {
    question: "Do you take up all kinds of electrical work?",
    answer:
      "Yes. We take up residential, commercial, and industrial electrical works, including wiring, rewiring, maintenance, upgrades, DB works, and fault correction."
  },
  {
    question: "Can you help decide the solar capacity required?",
    answer:
      "Yes. We can review your usage, roof space, budget, and future needs before recommending a practical solar capacity."
  },
  {
    question: "Do you support government solar subsidy documentation?",
    answer:
      "Yes. We guide eligible customers with solar subsidy documentation and process support. Subsidy benefits may go up to Rs. 78,000 depending on current government rules and eligibility."
  },
  {
    question: "How can I request a quote?",
    answer:
      "You can submit the enquiry form, call directly, or send a WhatsApp message. We will review your requirement and respond with the next steps."
  }
];

export const contactCards = [
  { icon: Phone, label: "Phone", value: `+${company.phone}` },
  { icon: Mail, label: "Email", value: company.email },
  { icon: MapPin, label: "Address", value: company.location }
];
