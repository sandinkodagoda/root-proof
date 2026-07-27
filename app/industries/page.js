import Link from "next/link";

export const metadata = {
  title: "RootProof for Rubber Exporters in Sri Lanka",
  description:
    "RootProof helps rubber exporters in Sri Lanka organise product data, supplier evidence and rubber supply chain information for buyer readiness.",
};

export default function IndustriesPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Industries</p>
        <h1>RootProof for Rubber Exporters in Sri Lanka</h1>
        <p>
          RootProof helps rubber exporters in Sri Lanka manage product proof, because the sector
          has export pressure, buyer proof requirements, and growing relevance to product
          transparency.
        </p>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Why rubber exporters need stronger product proof</p>
          <h2>Common product data challenges in rubber manufacturing</h2>
          <p>
            Manufacturers of export-focused rubber products like latex gloves, industrial gloves,
            solid tyres, rubber mats, and rubber components face increasing pressure from EU
            buyers. These businesses need a practical way to manage product information, supplier
            evidence, documents, and transparency data for international customers using{" "}
            <Link href="/products">RootProof products</Link>.
          </p>
        </div>
        <div className="industry-list">
          <span>Latex gloves</span>
          <span>Industrial gloves</span>
          <span>Solid tyres</span>
          <span>Rubber mats</span>
          <span>Rubber components</span>
          <span>Export-focused products</span>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Supply chain model</p>
          <h2>Rubber supply chain visibility and buyer evidence</h2>
          <p>Manage evidence across the entire rubber supply chain to support your export-ready operations.</p>
        </div>
        <div className="tier-row">
          <div><strong>Tier 1</strong><span>Finished goods factory</span></div>
          <div><strong>Tier 2</strong><span>Material processors</span></div>
          <div><strong>Tier 3</strong><span>Latex processors</span></div>
          <div><strong>Tier 4</strong><span>Collection centres</span></div>
          <div><strong>Tier 5</strong><span>Original sources</span></div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">How RootProof supports export-ready manufacturers</p>
          <h2>Prepare your product proof before buyers ask</h2>
        </div>
        <div className="card-grid four">
          <article className="mini-card"><h3>Product records</h3><p>Organise specifications, material data, traceability, and <Link href="/resources">Digital Product Passport resources</Link>.</p></article>
          <article className="mini-card"><h3>Supplier data</h3><p>Collect supplier evidence and raw material source information.</p></article>
          <article className="mini-card"><h3>Compliance</h3><p>Store certificates, product claims, testing evidence, and buyer documents.</p></article>
          <article className="mini-card"><h3>Readiness</h3><p>Be ready for buyer audits with clear, verified product proof.</p></article>
        </div>
      </section>

      <section className="section cta-band">
        <h2>Prepare your product proof before buyers ask</h2>
        <p>Get your data ready for export success.</p>
        <Link className="button light" href="/book-demo">
          Book a Demo
        </Link>
      </section>
    </main>
  );
}
