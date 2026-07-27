import Link from "next/link";

export const metadata = {
  title: "RootProof Products | Traceability Software for Manufacturers",
  description:
    "Explore RootProof products for traceability, product data management, buyer documents and Digital Product Passport records.",
};

export default function ProductsPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Pricing &amp; Plans</p>
        <h1>Traceability software priced for your scale</h1>
        <p>
          Our platform is structured around three connected product plans that support{" "}
          <Link href="/industries">rubber exporters</Link> and manufacturers before, during, and
          after product completion.
        </p>
      </section>

      <section className="section">
        <div className="card-grid three">
          <article className="pricing-card" id="lifecycle">
            <div className="pricing-header">
              <p className="eyebrow">Product 01</p>
              <h3>Lifecycle</h3>
              <p className="pricing-desc">
                From development to delivery. Control specifications, materials, and approvals.
              </p>
            </div>
            <div className="pricing-price">
              <h4>Custom Pricing</h4>
            </div>
            <ul className="check-list">
              <li>Product specifications and material details</li>
              <li>Sample development and approval records</li>
              <li>Technical documents and production readiness</li>
              <li>Workflow visibility for product and operations teams</li>
            </ul>
            <div className="pricing-action">
              <Link className="button secondary" href="/book-demo">
                Talk to Sales
              </Link>
            </div>
          </article>

          <article className="pricing-card highlight" id="product-hub">
            <div className="pricing-header">
              <p className="eyebrow">Product 02</p>
              <h3>Product Hub</h3>
              <p className="pricing-desc">
                Completed product data in one place for quality, export, and sales teams.
              </p>
            </div>
            <div className="pricing-price">
              <h4>Custom Pricing</h4>
            </div>
            <ul className="check-list">
              <li>Certificates, test reports, and quality documents</li>
              <li>Packaging details and approved product claims</li>
              <li>Buyer documents and export records</li>
              <li>Faster access to accurate product information</li>
            </ul>
            <div className="pricing-action">
              <Link className="button primary" href="/book-demo">
                Talk to Sales
              </Link>
            </div>
          </article>

          <article className="pricing-card" id="passport">
            <div className="pricing-header">
              <p className="eyebrow">Product 03</p>
              <h3>Passport</h3>
              <p className="pricing-desc">
                Digital Product Passport records and QR codes for transparent evidence.
              </p>
            </div>
            <div className="pricing-price">
              <h4>Custom Pricing</h4>
            </div>
            <ul className="check-list">
              <li>DPP record generation from approved data</li>
              <li>QR codes for product labels and packaging</li>
              <li>Customer-specific logo, colour, and content control</li>
              <li>Transparent product information for buyers and end users</li>
            </ul>
            <div className="pricing-action">
              <Link className="button secondary" href="/book-demo">
                Talk to Sales
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section cta-band">
        <h2>How our traceability software products work together</h2>
        <p>
          Unlike standalone product data management systems, our products connect your workflow:
          Lifecycle manages the journey, Product Hub stores approved records, and Passport turns
          selected data into customer-facing transparency.
        </p>
        <Link className="button light" href="/book-demo">
          See how RootProof products work
        </Link>
      </section>
    </main>
  );
}
