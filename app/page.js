import Link from "next/link";

export const metadata = {
  title: "RootProof Platform | Product Data Management for Rubber Exporters",
  description:
    "RootProof helps rubber exporters manage product data, supplier evidence, certificates and buyer-ready proof in one connected platform.",
};

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">BUILT FOR RUBBER PRODUCT MANUFACTURERS</p>
          <h1>Product Data Management for Rubber Exporters</h1>
          <p className="hero-text">
            RootProof helps Sri Lankan rubber product manufacturers and exporters organise
            product data, supplier evidence, certificates, test reports and buyer-ready proof in
            one connected platform.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/book-demo">
              Book a Demo
            </Link>
            <Link className="button secondary" href="/products">
              Explore Products
            </Link>
          </div>
        </div>
        <div
          className="traceability-animation"
          aria-label="RootProof platform dashboard showing product data management and traceability flow"
        >
          <div className="anim-title">Live Traceability Flow</div>
          <div className="anim-step step-1">
            <div className="anim-icon">🌳</div>
            <div className="anim-text">1. Rubber Plantation Source</div>
          </div>
          <div className="anim-connector line-1" />
          <div className="anim-step step-2">
            <div className="anim-icon">🏭</div>
            <div className="anim-text">2. Manufacturing &amp; Testing</div>
          </div>
          <div className="anim-connector line-2" />
          <div className="anim-step step-3">
            <div className="anim-icon">🧤</div>
            <div className="anim-text">3. Finished Product Record</div>
          </div>
          <div className="anim-connector line-3" />
          <div className="anim-step step-4">
            <div className="anim-icon">QR</div>
            <div className="anim-text">4. Buyer-Ready Proof Generated</div>
          </div>
          <div className="anim-status" />
        </div>
      </section>

      <section className="section">
        <div className="section-heading text-center">
          <p className="eyebrow">WHO WE SERVE</p>
          <h2>Built for teams behind export-ready rubber products</h2>
          <p>
            RootProof supports the teams responsible for product development, quality documents,
            supplier evidence and buyer-facing product proof.
          </p>
        </div>
        <div className="card-grid three">
          <article className="feature-card">
            <span className="resource-type">RootProof Lifecycle</span>
            <h3>Product and Technical Teams</h3>
            <p>
              Manage product specifications, material details, samples, approvals and technical
              documents from development to delivery.
            </p>
          </article>
          <article className="feature-card">
            <span className="resource-type">RootProof Product Hub</span>
            <h3>Quality and Compliance Teams</h3>
            <p>
              Keep certificates, test reports, quality documents, packaging details and approved
              claims organised in one product record.
            </p>
          </article>
          <article className="feature-card">
            <span className="resource-type">RootProof Passport</span>
            <h3>Export and Commercial Leaders</h3>
            <p>
              Respond to buyer requests faster with organised product proof, rubber supply chain
              evidence and <Link href="/resources">Digital Product Passport</Link> records.
            </p>
          </article>
        </div>
      </section>

      <section className="section problem-section">
        <div className="section-heading">
          <p className="eyebrow">THE PROBLEM</p>
          <h2>Product proof is often scattered across teams and files</h2>
          <p>
            Rubber exporters already manage large amounts of product information, but it is often
            stored across emails, spreadsheets, folders and individual teams. This makes it harder
            to respond quickly when buyers ask for product details, certificates, test reports,
            supplier information or traceability evidence.
          </p>
        </div>
        <div className="split">
          <div className="problem-col">
            <h3>Common challenges</h3>
            <ul className="check-list error-list">
              <li>Product specifications saved in separate files</li>
              <li>Certificates and test reports stored across folders</li>
              <li>Supplier information collected manually</li>
              <li>Buyer documents prepared again and again</li>
              <li>Limited visibility across product, quality and export teams</li>
              <li>Slow response when customers ask for proof</li>
            </ul>
          </div>
          <div className="problem-col">
            <h3>Why it matters</h3>
            <p>
              For rubber exporters, buyer confidence depends on more than price, quality and
              delivery. Customers increasingly expect accurate product information, source evidence
              and organised documentation before placing or continuing orders.
            </p>
            <p className="form-note home-note">
              RootProof helps turn scattered information into structured, buyer-ready product
              proof, supporting rubber exporter compliance.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading text-center">
          <p className="eyebrow">THE ROOTPROOF SOLUTION</p>
          <h2>One connected record for product data, documents and supply-chain evidence</h2>
          <p>
            The RootProof platform brings product data management, supplier evidence, quality
            documents and Digital Product Passport preparation into one connected workflow. Instead
            of searching through different files, teams can work from a single product record that
            is easier to update, share and control.
          </p>
        </div>
        <div className="card-grid four workflow-grid">
          <div className="workflow-step">
            <div className="step-num">1</div>
            <h3>Collect</h3>
            <p>Product details, supplier information and source evidence</p>
          </div>
          <div className="workflow-step">
            <div className="step-num">2</div>
            <h3>Organise</h3>
            <p>Certificates, test reports, packaging details and approved claims</p>
          </div>
          <div className="workflow-step">
            <div className="step-num">3</div>
            <h3>Prepare</h3>
            <p>Buyer-ready product records and compliance documentation</p>
          </div>
          <div className="workflow-step">
            <div className="step-num">4</div>
            <h3>Share</h3>
            <p>Digital Product Passport records, QR codes and selected customer-facing proof</p>
          </div>
        </div>
        <div className="center-action">
          <Link className="button primary" href="/products">
            See RootProof Products
          </Link>
        </div>
      </section>

      <section className="section pale-section">
        <div className="section-heading text-center">
          <p className="eyebrow">PLATFORM PRODUCTS</p>
          <h2>Three connected ways to manage product proof</h2>
          <p>
            RootProof combines three product solutions that help rubber manufacturers manage
            information from development to buyer-facing proof. We provide one of the most
            dedicated product data management systems for this sector.
          </p>
        </div>
        <div className="card-grid three">
          <article className="feature-card product-card product-card-layout">
            <svg className="product-visual" viewBox="0 0 360 140" fill="none" aria-hidden="true">
              <rect x="32" y="18" width="296" height="104" rx="18" fill="#F4F9EF" />
              <rect x="54" y="34" width="118" height="72" rx="12" fill="#FFFFFF" stroke="#D7E2D1" />
              <rect x="72" y="52" width="82" height="10" rx="5" fill="#4A8F18" opacity="0.18" />
              <rect x="72" y="70" width="64" height="10" rx="5" fill="#8FD22A" opacity="0.3" />
              <rect x="72" y="88" width="92" height="8" rx="4" fill="#123C1D" opacity="0.1" />
              <path d="M182 70H228" stroke="#8FD22A" strokeWidth="3" strokeDasharray="6 6" />
              <rect x="236" y="30" width="72" height="80" rx="14" fill="#123C1D" />
              <path d="M255 58L272 48L289 58V81L272 91L255 81V58Z" stroke="#8FD22A" strokeWidth="2" />
              <path d="M272 64V53M263 59L272 64L281 59" stroke="#8FD22A" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <h3>RootProof Lifecycle</h3>
            <p>
              Manage product information from development to delivery, including specifications,
              material details, samples, approvals, technical documents and production readiness.
            </p>
            <Link className="button secondary full-width-button" href="/products#lifecycle">
              View Lifecycle
            </Link>
          </article>
          <article className="feature-card product-card product-card-layout">
            <svg className="product-visual" viewBox="0 0 360 140" fill="none" aria-hidden="true">
              <rect x="28" y="18" width="304" height="104" rx="18" fill="#F4F9EF" />
              <rect x="52" y="30" width="256" height="80" rx="14" fill="#FFFFFF" stroke="#D7E2D1" />
              <rect x="74" y="48" width="86" height="12" rx="6" fill="#4A8F18" opacity="0.14" />
              <rect x="74" y="70" width="124" height="8" rx="4" fill="#123C1D" opacity="0.1" />
              <rect x="74" y="86" width="68" height="8" rx="4" fill="#8FD22A" opacity="0.32" />
              <rect x="220" y="44" width="64" height="52" rx="10" fill="#EAF5E2" stroke="#D7E2D1" />
              <rect x="234" y="56" width="36" height="6" rx="3" fill="#4A8F18" opacity="0.35" />
              <rect x="234" y="68" width="28" height="6" rx="3" fill="#4A8F18" opacity="0.2" />
              <rect x="234" y="80" width="40" height="6" rx="3" fill="#8FD22A" opacity="0.4" />
            </svg>
            <h3>RootProof Product Hub</h3>
            <p>
              Store completed product information, certificates, test reports, quality documents,
              packaging details, buyer documents and approved claims in one place.
            </p>
            <Link className="button secondary full-width-button" href="/products#product-hub">
              View Product Hub
            </Link>
          </article>
          <article className="feature-card product-card product-card-layout">
            <svg className="product-visual" viewBox="0 0 360 140" fill="none" aria-hidden="true">
              <rect x="44" y="16" width="272" height="108" rx="18" fill="#FFFFFF" stroke="#D7E2D1" />
              <rect x="44" y="16" width="272" height="24" rx="18" fill="#123C1D" />
              <rect x="68" y="54" width="64" height="64" rx="10" fill="#EAF5E2" stroke="#4A8F18" />
              <rect x="80" y="66" width="12" height="12" rx="2" fill="#4A8F18" />
              <rect x="98" y="66" width="12" height="12" rx="2" fill="#4A8F18" />
              <rect x="80" y="84" width="12" height="12" rx="2" fill="#4A8F18" />
              <rect x="98" y="84" width="12" height="12" rx="2" fill="#8FD22A" />
              <rect x="152" y="60" width="118" height="8" rx="4" fill="#4A8F18" opacity="0.16" />
              <rect x="152" y="80" width="86" height="8" rx="4" fill="#4A8F18" opacity="0.12" />
              <rect x="152" y="100" width="62" height="8" rx="4" fill="#8FD22A" opacity="0.3" />
            </svg>
            <h3>RootProof Passport</h3>
            <p>
              Generate Digital Product Passport records and QR codes using approved product and
              rubber supply chain data selected for each customer or product line.
            </p>
            <Link className="button secondary full-width-button" href="/products#passport">
              View Passport
            </Link>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading text-center">
          <p className="eyebrow">OUTCOMES</p>
          <h2>What rubber exporters can achieve with RootProof</h2>
          <p>
            RootProof is designed to help manufacturers become more organised, more responsive and
            more prepared when customers ask for product proof.
          </p>
        </div>
        <div className="outcomes-grid">
          <article className="mini-card">
            <div className="outcome-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="8" stroke="#4A8F18" strokeWidth="2" />
                <path d="M12 8V12L15 15" stroke="#4A8F18" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Faster buyer response</h3>
            <p>
              Find product details, certificates and supporting documents faster when customers
              request information.
            </p>
          </article>
          <article className="mini-card">
            <div className="outcome-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H10L12 7H17.5A2.5 2.5 0 0 1 20 9.5V16.5A2.5 2.5 0 0 1 17.5 19H6.5A2.5 2.5 0 0 1 4 16.5V7.5Z" stroke="#4A8F18" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Stronger document control</h3>
            <p>
              Keep product records, test reports and approved claims connected to the right
              product instead of scattered across files.
            </p>
          </article>
          <article className="mini-card">
            <div className="outcome-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="9" cy="9" r="3.5" stroke="#4A8F18" strokeWidth="2" />
                <circle cx="16" cy="10" r="2.5" stroke="#8FD22A" strokeWidth="2" />
                <path d="M4.5 18C4.5 15.5 6.8 14 9.5 14H10.5C13.2 14 15.5 15.5 15.5 18" stroke="#4A8F18" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Better team visibility</h3>
            <p>
              Help product, quality, compliance, export and management teams work from the same
              product record.
            </p>
          </article>
          <article className="mini-card">
            <div className="outcome-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="5" y="5" width="14" height="14" rx="3" stroke="#4A8F18" strokeWidth="2" />
                <rect x="8" y="8" width="3" height="3" rx="1" fill="#4A8F18" />
                <rect x="13" y="8" width="3" height="3" rx="1" fill="#4A8F18" />
                <rect x="8" y="13" width="3" height="3" rx="1" fill="#4A8F18" />
                <rect x="13" y="13" width="3" height="3" rx="1" fill="#8FD22A" />
              </svg>
            </div>
            <h3>DPP and QR readiness</h3>
            <p>
              Prepare approved product data for Digital Product Passport records and QR-code
              product proof.
            </p>
          </article>
          <article className="mini-card">
            <div className="outcome-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M8 12H16M12 8V16" stroke="#8FD22A" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 8V6C4 4.9 4.9 4 6 4H8M16 4H18C19.1 4 20 4.9 20 6V8M20 16V18C20 19.1 19.1 20 18 20H16M8 20H6C4.9 20 4 19.1 4 18V16" stroke="#4A8F18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Supplier-side evidence</h3>
            <p>
              Invite suppliers or source partners to contribute selected information while the
              manufacturer keeps control of the final record.
            </p>
          </article>
        </div>
      </section>

      <section className="section cta-band">
        <div className="cta-inner">
          <h2>Become proof-ready before buyers ask</h2>
          <p>
            Use RootProof as your product data management hub for rubber exporter compliance,
            product documents, supplier evidence and Digital Product Passport preparation.
          </p>
          <div className="hero-actions cta-actions">
            <Link className="button light" href="/book-demo">
              Book a Demo
            </Link>
            <Link className="button button-outline-light" href="/resources">
              Read Resources
            </Link>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-heading text-center">
          <p className="eyebrow">FAQ</p>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-grid">
          <details className="faq-item" name="faq">
            <summary>What is RootProof?</summary>
            <div className="faq-content">
              <p>
                RootProof is a product data management platform for rubber product manufacturers
                and exporters. It helps teams organise product data, supplier evidence,
                certificates, test reports and buyer-ready product proof in one connected system.
              </p>
            </div>
          </details>
          <details className="faq-item" name="faq">
            <summary>Who is RootProof designed for?</summary>
            <div className="faq-content">
              <p>
                RootProof is designed for Sri Lankan rubber product manufacturers and exporters,
                especially teams working across product development, quality, compliance, export
                documentation and commercial management.
              </p>
            </div>
          </details>
          <details className="faq-item" name="faq">
            <summary>How does RootProof help manufacturers with buyer readiness?</summary>
            <div className="faq-content">
              <p>
                RootProof helps manufacturers prepare product information before buyers ask for it.
                Teams can store product records, certificates, test reports, supplier evidence and
                approved documents in one place, making it easier to respond to customer requests.
              </p>
            </div>
          </details>
          <details className="faq-item" name="faq">
            <summary>Does every rubber manufacturer need a Digital Product Passport?</summary>
            <div className="faq-content">
              <p>
                Not every manufacturer will have the same legal responsibility. However, exporters
                supplying European buyers may be asked to provide product information, source
                evidence, certificates or transparency data. RootProof helps manufacturers prepare
                this information in an organised way.
              </p>
            </div>
          </details>
          <details className="faq-item" name="faq">
            <summary>How does RootProof Passport work?</summary>
            <div className="faq-content">
              <p>
                RootProof Passport uses approved product and supply-chain data to create Digital
                Product Passport records and QR codes. Manufacturers can control what information
                is visible and customise records for products or customers.
              </p>
            </div>
          </details>
          <details className="faq-item" name="faq">
            <summary>Can suppliers contribute data to RootProof?</summary>
            <div className="faq-content">
              <p>
                Yes. RootProof can support supplier-side data contribution, allowing selected
                suppliers or source partners to add information while the manufacturer keeps
                control of the final product record.
              </p>
            </div>
          </details>
        </div>
      </section>
    </main>
  );
}
