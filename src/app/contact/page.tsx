import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { brand } from "@/lib/brand";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Tell us the metric you want to move."
      intro="We will tell you whether we can move it, and how fast. Senior engineers respond, not bots."
    >
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5 space-y-6">
          <Card>
            <p className="eyebrow">Studio</p>
            <p className="mt-3 font-display text-2xl tracking-tightest text-white">
              {brand.location}
            </p>
            <p className="mt-2 text-sm text-white/65">
              Remote-first. We meet partners where they are.
            </p>
          </Card>
          <Card>
            <p className="eyebrow">Direct</p>
            <a
              href={`mailto:${brand.email}`}
              className="mt-3 block font-display text-2xl tracking-tightest text-white hover:text-accent"
            >
              {brand.email}
            </a>
            <p className="mt-2 text-sm text-white/65">
              For partnership and press inquiries.
            </p>
          </Card>
        </div>

        <form className="md:col-span-7 grid gap-4 md:grid-cols-2">
          <Field name="name" label="Your name" />
          <Field name="email" label="Email" type="email" />
          <Field name="company" label="Company" full />
          <Field name="industry" label="Industry · Legal, Commerce, Health, Other" full />
          <div className="md:col-span-2">
            <label className="eyebrow block">Project</label>
            <textarea
              name="message"
              rows={6}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-ink-800 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-accent focus:outline-none"
              placeholder="What metric do you want to move? What is in your way?"
            />
          </div>
          <button
            type="button"
            className="md:col-span-2 w-fit rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-soft transition"
          >
            Send to the studio
          </button>
          <p className="md:col-span-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
            Wire this form to your inbox or CRM by adding a Next.js route handler at /api/contact.
          </p>
        </form>
      </div>
    </Section>
  );
}

function Field({
  name,
  label,
  type = "text",
  full = false,
}: {
  name: string;
  label: string;
  type?: string;
  full?: boolean;
}) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="eyebrow block">{label}</label>
      <input
        name={name}
        type={type}
        className="mt-2 w-full rounded-2xl border border-white/10 bg-ink-800 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-accent focus:outline-none"
      />
    </div>
  );
}
