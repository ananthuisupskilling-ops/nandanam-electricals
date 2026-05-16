# Nandanam Electricals Engineers and Contractors

A simple, professional Next.js website for a Kerala solar and electrical contracting business. The project focuses on trust, local SEO, fast performance, and enquiry generation.

## What Is Included

- Modern responsive website with Home, About, Services, Solar Solutions, Electrical Works, Projects, FAQ, Enquiry, and Contact sections.
- SEO metadata, Open Graph tags, Twitter tags, robots, sitemap, and JSON-LD schema.
- WhatsApp click-to-chat enquiry flow with a prefilled message.
- Optional SMTP email notifications through Nodemailer.
- Content kept in `data/site.ts` so services, work categories, FAQs, and customer commitments can be updated easily.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Enquiry Notifications

The form sends the enquiry to `/api/enquiry`. If SMTP variables are configured, an email is delivered to `ENQUIRY_TO_EMAIL`. After submission, the visitor is offered WhatsApp with a ready-made message to send.

To enable WhatsApp, update `NEXT_PUBLIC_COMPANY_PHONE` in `.env.local` using the international format without `+`, for example `919876543210`.

## Deployment

### Vercel

1. Push the project to GitHub.
2. Import it in Vercel.
3. Add the environment variables from `.env.example`.
4. Deploy.

### Netlify

1. Connect the GitHub repository.
2. Use build command `npm run build`.
3. Use publish directory `.next`.
4. Add the Next.js Netlify plugin if prompted.
5. Add environment variables.

### VPS

```bash
npm install
npm run build
npm run start
```

Run behind Nginx or another reverse proxy, and set the same environment variables on the server.
