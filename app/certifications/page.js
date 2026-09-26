export const metadata = { title: "Certifications — Galib" };

const certifications = [
  {
    name: "Fundamental Payroll Certification (FPC)",
    issuer: "PayrollOrg",
    status: "In progress",
  },
  {
    name: "QuickBooks Online ProAdvisor",
    issuer: "Intuit",
    status: "In progress",
  },
  {
    name: "ACA Employer Mandate Literacy",
    issuer: "IRS ACA Information Center",
    status: "Self-study",
  },
  {
    name: "ERISA Fiduciary Responsibilities",
    issuer: "DOL — Employee Benefits Security Administration",
    status: "Self-study",
  },
];

export default function CertificationsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <p className="font-mono text-sm text-mark mb-4">Certifications</p>
      <h1 className="font-serif text-4xl text-paper mb-4">Credentials &amp; study</h1>
      <p className="max-w-prose text-muted leading-relaxed mb-12">
        A working list — payroll, benefits, and financial-software credentials that ground
        the engineering work in the regulatory and operational reality of the data.
      </p>

      <div className="divide-y divide-ink-line border-t border-b border-ink-line">
        {certifications.map((c) => (
          <div key={c.name} className="flex items-center justify-between py-5">
            <div>
              <h2 className="font-serif text-lg text-paper">{c.name}</h2>
              <p className="text-sm text-muted mt-1">{c.issuer}</p>
            </div>
            <span className="font-mono text-xs text-mark border border-mark/40 px-3 py-1 shrink-0">
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
