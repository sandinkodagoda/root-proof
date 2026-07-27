import Link from "next/link";

import MockForm from "@/components/mock-form";

export const metadata = {
  title: "RootProof Resources | Digital Product Passport and EUDR Rubber",
  description:
    "Read RootProof resources on Digital Product Passports, EUDR rubber, supply-chain traceability and product proof for exporters.",
};

export default function ResourcesPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Resources</p>
        <h1>Resources for Digital Product Passport and EUDR Rubber</h1>
        <p>
          These educational resources help manufacturers understand the{" "}
          <Link href="/products#passport">digital product passport</Link>, EUDR rubber
          regulations, product data management, and supply-chain traceability.
        </p>
      </section>

      <section className="section resource-grid">
        <article className="resource-card">
          <span className="resource-type">Explainer</span>
          <h2>What is a Digital Product Passport?</h2>
          <p>
            A short overview of how product data and controlled product information can create a{" "}
            <Link href="/products#passport">digital product passport</Link> for your products.
          </p>
          <a href="#">Read more</a>
        </article>
        <article className="resource-card">
          <span className="resource-type">Guide</span>
          <h2>What EUDR Means for Rubber Exporters</h2>
          <p>
            A simple explanation of why EU buyers are asking <Link href="/industries">rubber
            exporters</Link> for EUDR rubber documentation and supplier evidence.
          </p>
          <a href="#">Read more</a>
        </article>
        <article className="resource-card">
          <span className="resource-type">Insight</span>
          <h2>Why EU Buyers Ask for Product Proof</h2>
          <p>
            Understand the shift towards supply-chain transparency and why buyer-ready proof is a
            commercial advantage.
          </p>
          <a href="#">Read more</a>
        </article>
        <article className="resource-card">
          <span className="resource-type">Checklist</span>
          <h2>How Product Data Becomes Buyer-Ready Proof</h2>
          <p>
            Learn how to connect technical specifications, samples, and approvals into a
            buyer-ready <Link href="/products">product record</Link>.
          </p>
          <a href="#">Read more</a>
        </article>
        <article className="resource-card">
          <span className="resource-type">Basics</span>
          <h2>Supply Chain Traceability Basics for Manufacturers</h2>
          <p>An introduction to supply-chain traceability, from origin data to finished goods evidence.</p>
          <a href="#">Read more</a>
        </article>
      </section>

      <section className="section newsletter">
        <div>
          <p className="eyebrow">Resource updates</p>
          <h2>Get product proof insights for manufacturers.</h2>
        </div>
        <MockForm
          className="inline-form"
          message="Thank you. This mock sign-up has been recorded for the simulation."
        >
          <label htmlFor="email">Email address</label>
          <input id="email" type="email" placeholder="name@company.com" required />
          <button className="button primary" type="submit">
            Subscribe
          </button>
        </MockForm>
      </section>

      <section className="section cta-band">
        <h2>Want to see our solutions in action?</h2>
        <p>Explore how our traceability software and product data management tools work.</p>
        <Link className="button light" href="/book-demo">
          Book a Demo
        </Link>
      </section>
    </main>
  );
}
