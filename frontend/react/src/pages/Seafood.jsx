import React from "react";
import "./Seafood.css";

const Seafood = () => {
  return (
    <div className="container py-5 seafood-wrapper">
      <h1 className="text-center fw-bold mb-5 text-primary section-title">Seafood Industry Insights</h1>

      <section className="mb-5">
        <h3 className="fw-bold section-subtitle">Seafood: A Global Livelihood</h3>
        <p>Seafood is one of the largest industries on the planet. <strong>12% of global livelihoods</strong> depend on it — that’s 1 out of every 10 people on Earth earning from seafood and aquaculture.</p>
        <p><strong>90% growth in consumption:</strong> In the past 50 years, global per capita seafood consumption has nearly doubled.</p>
        <p><strong>$150 billion in export value:</strong> The export value excludes retail and domestic markets, bringing total estimates to over $500 billion USD.</p>
      </section>

      <section className="mb-5">
        <h3 className="fw-bold text-danger section-subtitle">Challenges in the Industry</h3>
        <ul className="custom-list">
          <li><strong>89% of fish stocks</strong> are at capacity – either overfished or fully exploited.</li>
          <li><strong>50%+ seafood wasted:</strong> Up to 60% is lost, discarded, or wasted in the supply chain.</li>
          <li><strong>700KG stolen every second:</strong> Due to illegal, unreported, and unregulated fishing.</li>
        </ul>
      </section>

      <section className="mb-5">
        <h3 className="fw-bold section-subtitle">Demand for Transparency</h3>
        <ul className="custom-list">
          <li><strong>90% of seafood in U.S.</strong> is imported, with less than 1% inspected for fraud.</li>
          <li><strong>20% mislabeled:</strong> Fraud rates can be as high as 86% depending on the species and supply chain.</li>
        </ul>
      </section>

      <section className="mb-5">
        <h3 className="fw-bold text-success section-subtitle">Global Regulations</h3>
        <p>
          From <strong>January 1, 2018</strong>, the U.S. Seafood Import Monitoring Program blocks 15 species groups from import without traceability back to the boat.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-center text-primary fw-bold section-title">Meet Friziva</h2>

        <div className="mt-4">
          <h5 className="fw-bold">Blockchain Based Traceability</h5>
          <p>
            Friziva is a peer-to-peer blockchain network built to address fragmentation in seafood supply chains. It ensures data is trusted, transparent, and secure.
          </p>
        </div>

        <div className="mt-4">
          <h5 className="fw-bold">Incentivizing Data Sharing</h5>
          <p>
            Digital vouchers (tokens) flow from buyers to sellers, rewarding those who capture and communicate data, shifting the cost to those who benefit most.
          </p>
        </div>

        <div className="mt-4">
          <h5 className="fw-bold">A Decentralized Ecosystem</h5>
          <p>
            Friziva is not run by a single company — it’s an ecosystem that empowers developers, companies, and stakeholders to add value via a shared protocol.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Seafood;
