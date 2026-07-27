import Link from "next/link";

import MockForm from "@/components/mock-form";

export const metadata = {
  title: "RootProof Demo | Traceability Software Demo",
  description:
    "Book a RootProof demo to see how traceability software and product data management can support buyer-ready product proof.",
};

export default function BookDemoPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Book a Demo</p>
        <h1>Book a RootProof Demo</h1>
        <p>
          Book a traceability software demo to see how our platform can support buyer-ready
          product proof for <Link href="/industries">rubber exporters</Link>. Use this simulated
          form as the website conversion point for the digital marketing plan.
        </p>
      </section>

      <section className="section demo-layout">
        <MockForm
          className="demo-form"
          message="Thank you. This mock demo request has been submitted for the simulation."
        >
          <div className="form-row">
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" type="text" placeholder="Your name" required />
          </div>
          <div className="form-row">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" placeholder="Company name" required />
          </div>
          <div className="form-row">
            <label htmlFor="role">Job title</label>
            <select id="role" name="role" required defaultValue="">
              <option value="">Select job title</option>
              <option>Product / Technical</option>
              <option>Quality / Compliance</option>
              <option>Export / Commercial</option>
              <option>CEO / Senior Management</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="email-demo">Email</label>
            <input id="email-demo" name="email" type="email" placeholder="name@company.com" required />
          </div>
          <div className="form-row">
            <label htmlFor="interest">Product category</label>
            <select id="interest" name="interest" required defaultValue="">
              <option value="">Select category</option>
              <option>Latex gloves</option>
              <option>Industrial gloves</option>
              <option>Solid tyres</option>
              <option>Rubber mats</option>
              <option>Rubber components</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Tell us what you want to prepare for." />
          </div>
          <button className="button primary" type="submit">
            Request Demo
          </button>
        </MockForm>

        <aside className="demo-card">
          <h2>What the product data management demo covers</h2>
          <p>
            See how <Link href="/products">RootProof products</Link> work in action:
          </p>
          <ul className="check-list">
            <li>Product data management workflow</li>
            <li>Certificate and test report storage</li>
            <li>Supplier evidence and traceability records</li>
            <li>Digital Product Passport and QR code generation</li>
          </ul>
          <p className="demo-side-note">
            Not ready for a demo? Read our <Link href="/resources">educational resources</Link> first.
          </p>
        </aside>
      </section>
    </main>
  );
}
