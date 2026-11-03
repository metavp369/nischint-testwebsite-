/** Parameter 08. Published on nischint.care/plans, 3 Nov 2026. */
export const plans = [
  {
    id: "individual",
    name: "Individual",
    price: "₹299",
    period: "/month",
    note: "incl. GST · starts with a 7-day free trial",
    bestFor: "One protected person, two guardians",
    features: [
      "1 protected person + 2 guardians (one-way)",
      "Hermes AI deviation detection",
      "SOS: hold 3 seconds, alerts your circle",
      "Alert Center (active and resolved)",
      "Location history",
    ],
    highlight: false,
  },
  {
    id: "family",
    name: "Family",
    price: "₹999",
    period: "/month",
    note: "incl. GST · starts with a 7-day free trial",
    bestFor: "Families, up to 4 members",
    features: [
      "Up to 4 members, each guardian and protected (mutual)",
      "Hermes AI deviation detection",
      "SOS: hold 3 seconds, alerts your circle",
      "Alert Center (active and resolved)",
      "Location history",
    ],
    highlight: true,
  },
] as const;

export const planFootnote =
  "Paid plans activate at launch. Every plan starts with a 7-day free trial; billing is monthly, GST included. The NISCHINT wearable is a planned optional add-on; its price will be announced.";
