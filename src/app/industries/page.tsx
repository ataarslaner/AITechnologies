import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { industries } from "@/lib/content";

export const metadata = { title: "Industries" };

export default function IndustriesPage() {
  return (
    <Section
      eyebrow="Industries"
      title="We build where domain rigor meets real outcomes."
      intro="Legal teams keep their privilege, commerce teams keep their margin, clinicians keep their hours. The work shows up where it matters most."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {industries.map((i) => (
          <Card key={i.name}>
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-3xl tracking-tightest text-white">
                {i.name}
              </h3>
              <span className="font-display text-2xl text-accent">{i.metric}</span>
            </div>
            <p className="mt-4 text-white/70">{i.pitch}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
