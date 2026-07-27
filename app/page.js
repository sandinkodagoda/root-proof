import Link from "next/link";

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
            <div className="outcome-icon">⏱️</div>
            <h3>Faster buyer response</h3>
            <p>
              Find product details, certificates and supporting documents faster when customers
              request information.
            </p>
          </article>
          <article className="mini-card">
            <div className="outcome-icon">📁</div>
            <h3>Stronger document control</h3>
            <p>
              Keep product records, test reports and approved claims connected to the right
              product instead of scattered across files.
            </p>
          </article>
          <article className="mini-card">
            <div className="outcome-icon">👥</div>
            <h3>Better team visibility</h3>
            <p>
              Help product, quality, compliance, export and management teams work from the same
              product record.
            </p>
          </article>
          <article className="mini-card">
            <div className="outcome-icon">📱</div>
            <h3>DPP and QR readiness</h3>
            <p>
              Prepare approved product data for Digital Product Passport records and QR-code
              product proof.
            </p>
          </article>
          <article className="mini-card">
            <div className="outcome-icon">🤝</div>
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
