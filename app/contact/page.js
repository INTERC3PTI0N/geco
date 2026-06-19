import PageHeader from "@/components/site/PageHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/site/ContactForm";
import { CONTACT } from "@/lib/content";

export const metadata = {
  title: "Contact — Geco Trading Corporation",
  description:
    "Get in touch with Geco Trading Corporation, Mumbai. Email info@geco-trade.com or call +91-22-42100900 for aftermarket engine parts and a free quote.",
};

const mapSrc =
  "https://www.google.com/maps?q=Janki+Centre+Veera+Desai+Road+Andheri+West+Mumbai+400053&output=embed";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Let's build the"
        accent="right partnership."
        body="Tell us what you need and our team will respond with availability, specifications and a quote."
      />

      <section className="section-pad pb-20 lg:pb-28">
        <div className="maxw grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Details */}
          <div>
            <div className="space-y-7">
              <Info label="Email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
              <Info label="Phone" value={`${CONTACT.phone} (${CONTACT.phoneNote})`} href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`} />
              <Info label="Head Office" value={CONTACT.addressLines.join(", ")} />
            </div>

            <Reveal className="mt-9 overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Geco Trading Corporation location"
                src={mapSrc}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.05}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Info({ label, value, href }) {
  const inner = (
    <>
      <div className="text-xs font-medium uppercase tracking-[0.16em] text-muted">{label}</div>
      <div className="mt-1 text-lg text-ink transition-colors group-hover:text-blue">{value}</div>
    </>
  );
  return href ? (
    <a href={href} className="group block">{inner}</a>
  ) : (
    <div className="group">{inner}</div>
  );
}
