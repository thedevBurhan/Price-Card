import React from "react";
import "./App.css";
function App() {
  const data = [
    {
      title: "Free",
      price: "$0",
      detail: [
        { name: "Single-user", enabled: true },
        { name: "5GB Storage", enabled: true },
        { name: "Unlimited Public Projects", enabled: true },
        { name: "Community Access", enabled: true },
        { name: "Unlimited Private Projects", enabled: false },
        { name: "Dedicated Phone Support", enabled: false },
        { name: "Free Subdomain", enabled: false },
        { name: "Monthly Status Reports", enabled: false },
      ],
    },
    {
      title: "PLUS",
      price: "$9",
      detail: [
        { name: "Single-user", enabled: true },
        { name: "5GB Storage", enabled: true },
        { name: "Unlimited Public Projects", enabled: true },
        { name: "Community Access", enabled: true },
        { name: "Unlimited Private Projects", enabled: true },
        { name: "Dedicated Phone Support", enabled: true },
        { name: "Free Subdomain", enabled: false },
        { name: "Monthly Status Reports", enabled: false },
      ],
    },
    {
      title: "PRO",
      price: "$49",
      detail: [
        { name: "Single-user", enabled: false },
        { name: "5GB Storage", enabled: true },
        { name: "Unlimited Public Projects", enabled: true },
        { name: "Community Access", enabled: true },
        { name: "Unlimited Private Projects", enabled: false },
        { name: "Dedicated Phone Support", enabled: true },
        { name: "Free Subdomain", enabled: true },
        { name: "Monthly Status Reports", enabled: true },
      ],
    },
  ];

  return (
    <div className="App">
      {data.map((card, index) => (
        <Card key={index} content={card} detail={card.detail} />
      ))}
    </div>
  );
}

export default App;

function Card({ content, detail }) {
  return (
    <div className="pricing">
      <div className="card">
        <div className="Heading">
          <h5>{content.title}</h5>
          <h4>
            {content.price}
            <sub style={{ fontSize: "0.8rem" }}>/month</sub>
          </h4>
        </div>
        <hr />
        <ul className="fa-ul">
          {detail.map((item, index) => {
            return (
              <li key={index} className={!item.enabled ? "text-muted" : ""}>
                {item.name}
              </li>
            );
          })}
        </ul>
        <div className="butn">Click</div>
      </div>
    </div>
  );
}
