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
              <div className="pricing-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <path
                    d="M7 20V10L14 6L21 10V20L14 24L7 20Z"
                    stroke="#4A8F18"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 18V10M10.5 12L14 14L17.5 12"
                    stroke="#4A8F18"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
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
              <li>AI-powered specification drafting and review agents</li>
              <li>Automated milestone tracking and approval reminders</li>
              <li>Smart material recommendation support</li>
            </ul>
            <div className="pricing-action">
              <Link className="button secondary" href="/book-demo">
                Talk to Sales
              </Link>
            </div>
          </article>

          <article className="pricing-card highlight" id="product-hub">
            <div className="pricing-header">
              <div className="pricing-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <rect
                    x="6"
                    y="4"
                    width="16"
                    height="20"
                    rx="3"
                    stroke="#4A8F18"
                    strokeWidth="2"
                  />
                  <path
                    d="M10 10H18M10 14H16M10 18H18"
                    stroke="#8FD22A"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
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
              <li>Integration with sales channels and buyer portals</li>
              <li>AI agents for document classification and tagging</li>
              <li>Automated compliance gap detection</li>
            </ul>
            <div className="pricing-action">
              <Link className="button primary" href="/book-demo">
                Talk to Sales
              </Link>
            </div>
          </article>

          <article className="pricing-card" id="passport">
            <div className="pricing-header">
              <div className="pricing-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <rect
                    x="6"
                    y="6"
                    width="16"
                    height="16"
                    rx="3"
                    stroke="#4A8F18"
                    strokeWidth="2"
                  />
                  <rect x="9" y="9" width="4" height="4" rx="1" fill="#4A8F18" />
                  <rect x="15" y="9" width="4" height="4" rx="1" fill="#4A8F18" />
                  <rect x="9" y="15" width="4" height="4" rx="1" fill="#4A8F18" />
                  <rect x="15" y="15" width="4" height="4" rx="1" fill="#8FD22A" />
                </svg>
              </div>
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
              <li>Geolocation tracking for source and supply chain mapping</li>
              <li>AI-powered data validation and enrichment agents</li>
              <li>Real-time passport analytics and scan insights</li>
            </ul>
            <div className="pricing-action">
              <Link className="button secondary" href="/book-demo">
                Talk to Sales
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="connect-section">
        <div className="connect-heading">
          <h2>How the products connect</h2>
          <p>
            Start with the product that fits your needs now. As your requirements grow, connect
            additional products to build one end-to-end system from raw material sourcing to
            buyer-facing proof.
          </p>
        </div>
        <div className="connect-flow">
          <article className="connect-node">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <rect width="36" height="36" rx="10" fill="#EAF5E2" />
              <path
                d="M10 26V14L18 9L26 14V26L18 31L10 26Z"
                stroke="#4A8F18"
                strokeWidth="1.6"
                fill="none"
              />
              <path
                d="M18 21V14M14 16L18 18L22 16"
                stroke="#4A8F18"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            <h4>Lifecycle</h4>
            <p>Manage the journey</p>
          </article>
          <div className="connect-arrow" aria-hidden="true">
            <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
              <path
                d="M1 8H29M23 2L29 8L23 14"
                stroke="#8FD22A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <article className="connect-node">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <rect width="36" height="36" rx="10" fill="#EAF5E2" />
              <rect
                x="9"
                y="7"
                width="18"
                height="22"
                rx="3"
                stroke="#4A8F18"
                strokeWidth="1.5"
              />
              <path
                d="M13 13H23M13 17H20M13 21H22"
                stroke="#8FD22A"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            <h4>Product Hub</h4>
            <p>Store approved records</p>
          </article>
          <div className="connect-arrow" aria-hidden="true">
            <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
              <path
                d="M1 8H29M23 2L29 8L23 14"
                stroke="#8FD22A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <article className="connect-node">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <rect width="36" height="36" rx="10" fill="#EAF5E2" />
              <rect
                x="10"
                y="10"
                width="16"
                height="16"
                rx="3"
                stroke="#4A8F18"
                strokeWidth="1.5"
              />
              <rect x="13" y="13" width="4" height="4" rx="1" fill="#4A8F18" />
              <rect x="19" y="13" width="4" height="4" rx="1" fill="#4A8F18" />
              <rect x="13" y="19" width="4" height="4" rx="1" fill="#4A8F18" />
              <rect x="19" y="19" width="4" height="4" rx="1" fill="#8FD22A" />
            </svg>
            <h4>Passport</h4>
            <p>Share with buyers</p>
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

      <section className="section faq-section">
        <div className="section-heading text-center">
          <p className="eyebrow">FAQ</p>
          <h2>Product &amp; Pricing Questions</h2>
        </div>
        <div className="faq-grid">
          <details className="faq-item" name="product-faq">
            <summary>Do I need to buy all three products together?</summary>
            <div className="faq-content">
              <p>
                No. Each product can be used independently, and you can add the others later as
                your workflow grows.
              </p>
            </div>
          </details>
          <details className="faq-item" name="product-faq">
            <summary>How is RootProof priced?</summary>
            <div className="faq-content">
              <p>
                RootProof uses custom B2B SaaS pricing based on company size, product volume, and
                the modules you choose.
              </p>
            </div>
          </details>
          <details className="faq-item" name="product-faq">
            <summary>Can suppliers and supply-chain partners access the platform?</summary>
            <div className="faq-content">
              <p>
                Yes. Selected contributors can be invited to share information while your team
                keeps control of the final product record.
              </p>
            </div>
          </details>
          <details className="faq-item" name="product-faq">
            <summary>What does the Digital Product Passport QR code show?</summary>
            <div className="faq-content">
              <p>
                It can show approved product details, certifications, and supply-chain evidence,
                with the visible content controlled by the manufacturer.
              </p>
            </div>
          </details>
        </div>
      </section>
    </main>
  );
}
