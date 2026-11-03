/** Parameter 16. Answers use only facts published on nischint.care. */
export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How does NISCHINT work?",
    a: "You choose the people you trust and form a safety circle. NISCHINT learns what a normal day looks like and stays quiet through it. When something meaningfully breaks the pattern, or you tap I'm Safe or hold SOS, your circle is told. A person you chose always decides what happens next.",
  },
  {
    q: "Who can join my safety circle?",
    a: "The people you invite. The Individual plan covers one protected person and two guardians. The Family plan covers up to four members, each both a guardian and protected.",
  },
  {
    q: "When is my location shared?",
    a: "There is no live-tracking feed for anyone to watch. Location is shared with your circle as part of an alert or SOS, and during a Safe Walk you start yourself. You control the permissions on your phone.",
  },
  {
    q: "What happens without internet or battery?",
    a: "NISCHINT needs a working phone, a connection and location access to send alerts. Delivery depends on things outside our control, including connectivity, location accuracy, battery and network services. If your phone is off or offline, alerts may be delayed or not sent, so keep emergency numbers handy.",
  },
  {
    q: "Can NISCHINT contact emergency services?",
    a: "No. NISCHINT alerts the people in your circle and gives you one-tap access to call 112. It does not contact police or ambulance on anyone's behalf. In an emergency, call 112 (police 100, ambulance 108) directly.",
  },
  {
    q: "Is a wearable required?",
    a: "No. NISCHINT works on your phone. A NISCHINT wearable is a planned optional add-on and is not available yet.",
  },
  {
    q: "Which devices are supported?",
    a: "NISCHINT is being built as a phone app for Android and iOS. The apps are not live yet; supported versions will be published at launch. Join the waitlist to be told first.",
  },
  {
    q: "How is my personal data handled?",
    a: "We do not sell personal data, and we do not use safety data collected for alerting to build advertising profiles. Permissions are opt-in on your phone. Our Privacy Policy and DPDP consent notice explain retention and deletion, and you can request account deletion at any time.",
  },
  {
    q: "What is available right now?",
    a: "The apps are not live yet. We are opening city by city, starting with a pilot in Thane, and launching first in Mumbai, Thane, Bengaluru, Delhi and Jaipur. Route Check launches on 26 Nov. Environment alerts are in testing with a small group. The wearable and AI Guardian sensor-assisted check-ins are planned.",
  },
  {
    q: "How much does it cost?",
    a: "Individual is ₹299 a month and Family is ₹999 a month, both including GST. Every plan starts with a 7-day free trial. Paid plans activate at launch.",
  },
];
