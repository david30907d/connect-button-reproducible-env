import React from "react";

const items = [
  {
    key: "1",
    label: "Max Drawback",
    children: "~0%",
  },
  {
    key: "2",
    label: "Lock",
    children: "2 days, due to ApolloX's constraint",
  },
  {
    key: "3",
    label: "Impermanent Loss",
    children: "~0%",
  },
];

const listDisplay = {
  display: "grid",
  gridTemplateColumns: "150px auto",
  marginBottom: 10,
};

const labelStyle = {
  display: "block",
  marginRight: 10,
  padding: 10,
  backgroundColor: "#FF6347",
  color: "#000000",
  fontWeight: 500,
};

const Fees = () => (
  <div
    style={{
      textAlign: "left",
    }}
  >
    {items.map((item, key) => (
      <div style={listDisplay} key={item.key}>
        <p style={labelStyle}>{item.label}</p>
        <p
          style={{
            padding: 10,
          }}
        >
          {item.children}
        </p>
      </div>
    ))}
  </div>
);
export default Fees;
