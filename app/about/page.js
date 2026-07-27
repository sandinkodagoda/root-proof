import Link from "next/link";

export const metadata = {
  title: "About RootProof | Product Proof for Rubber Industries",
  description:
    "About RootProof, a B2B SaaS platform supporting product proof, traceability and manufacturing product data management for rubber exporters.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">About RootProof</p>
        <h1>About RootProof</h1>
        <p>
          Helping manufacturers turn product data into product trust. RootProof is a hypothetical
          B2B SaaS brand created for an academic digital marketing strategy simulation.
        </p>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Why RootProof was created</p>
          <h2>Supporting rubber manufacturers and exporters</h2>
          <p>
            Manufacturers in the rubber industries in Sri Lanka may already have product data,
            documents, and supplier information. The challenge is that this proof is often
            scattered across different teams and systems. We built this platform to help teams
            organise their manufacturing product data management processes before customers request
            proof.
          </p>
        </div>
        <div className="value-box">
          <h3>Our approach to product proof</h3>
          <p>
            Make product information easier to manage, easier to share, and easier to trust.
            Discover our <Link href="/products">RootProof products</Link>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Who it supports</p>
          <h2>Designed for teams inside manufacturers</h2>
        </div>
        <div className="card-grid three">
          <article className="mini-card"><h3>Product and technical teams</h3><p>Manage specifications, material details, samples, approvals, and technical documents.</p></article>
          <article className="mini-card"><h3>Quality and compliance teams</h3><p>Keep certificates, test reports, approved claims, and compliance documents ready. Read our <Link href="/resources">Resources</Link>.</p></article>
          <article className="mini-card"><h3>Commercial and leadership teams</h3><p>Use transparent product proof to support buyer trust and export competitiveness. <Link href="/book-demo">Book a Demo</Link>.</p></article>
        </div>
      </section>

      <section className="section cta-band">
        <h2>Start your product data journey</h2>
        <p>See how our platform works.</p>
        <Link className="button light" href="/products">
          Explore the RootProof platform
        </Link>
      </section>
    </main>
  );
}
