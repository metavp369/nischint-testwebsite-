import type { Status } from "./site";

export type Audience = {
  slug: string;
  path: string;
  crumb: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  accent: "blue" | "teal" | "green" | "navy";
  photo: { src: string; alt: string; brief: string };
  moments: { title: string; body: string }[];
  helps: { name: string; detail: string; status: Status }[];
  permissions: string[];
  limits: string[];
  extraId?: string;
  screens?: { src: string; alt: string; caption: string }[];
};

export const audiences: Record<string, Audience> = {
  elder: {
    slug: "elder",
    path: "/elder-safety",
    crumb: "Elder safety",
    metaTitle: "Elder safety app for parents living independently",
    metaDescription:
      "Help your parents stay independent while you stay reassured. NISCHINT safe zones, I'm Safe check-ins and family alerts when a routine breaks. Launching in Mumbai, Thane, Bengaluru, Delhi and Jaipur.",
    eyebrow: "For Papa and Maa",
    title: "Their independence. Your peace of mind.",
    intro:
      "Our parents spent decades taking care of us. They deserve to keep living on their own terms, and we deserve to stop worrying from a distance. NISCHINT is a quiet safety net underneath.",
    accent: "green",
    photo: {
      src: "/images/elder-morning-walk.jpg",
      alt: "An older Indian man on a morning walk in a neighbourhood park, relaxed and smiling",
      brief: "a man in his late 60s on a morning walk in a leafy Indian park, early light, relaxed, phone in kurta pocket.",
    },
    moments: [
      { title: "Living alone, not alone", body: "Morning walks, temple visits, meeting old friends. Life carries on as it should, and family hears only if a pattern breaks." },
      { title: "No daily anxious phone call", body: "A one-tap I'm Safe replaces the call you make every morning just to check." },
      { title: "Simple enough for anyone", body: "One tap to say I'm Safe. Hold one button for SOS. Nothing to learn beyond that." },
    ],
    helps: [
      { name: "Safe zones for home and familiar places", detail: "Alerts when the usual routine breaks, not every time they step out.", status: "launch" },
      { name: "I'm Safe check-in", detail: "One tap tells the family they're fine.", status: "launch" },
      { name: "Medicine Care", detail: "Medicine schedules and reminders; the family sees doses taken, missed or needing attention.", status: "launch" },
      { name: "SOS", detail: "Hold for 3 seconds to alert the circle, with one-tap access to call 112.", status: "launch" },
      { name: "Hermes AI deviation detection", detail: "Learns a normal day and flags real deviations.", status: "launch" },
      { name: "NISCHINT wearable", detail: "For parents who don't always carry a phone.", status: "planned" },
    ],
    permissions: [
      "Use NISCHINT with your parent's knowledge and agreement. It is built for care, not covert monitoring.",
      "Location and notifications are opt-in and can be switched off at any time.",
      "Nobody sees a live-tracking feed. Location is shared with an alert or SOS.",
    ],
    limits: [
      "Their phone needs battery, signal and location access for alerts to work.",
      "NISCHINT doesn't detect falls or medical emergencies today.",
      "It doesn't contact a doctor, ambulance or police. You or another guardian decide what to do.",
    ],
    screens: [
      { src: "/app-screens/medicine-care.jpg", alt: "NISCHINT Medicine Care screen for a senior, showing today's medicines and schedules", caption: "Medicine Care: today's doses and schedules." },
      { src: "/app-screens/safety-zones.jpg", alt: "NISCHINT Safety Management screen with safe zones for a protected member", caption: "Safe zones for home and familiar places." },
    ],
  },
  women: {
    slug: "women",
    path: "/women-safety",
    crumb: "Women & girls' safety",
    metaTitle: "Women's safety app for commutes and late journeys",
    metaDescription:
      "Move through your city on your own terms. NISCHINT Route Check, Safe Walk, I'm Safe check-ins and SOS that alerts the people you trust, without anyone tracking you all day.",
    eyebrow: "For her",
    title: "Move through your city on your own terms.",
    intro:
      "The commute, the cab ride, the walk back from the station. Daily life shouldn't come with a background hum of worry. NISCHINT lets you go where you need to, knowing someone you trust would know if you needed help.",
    accent: "blue",
    photo: {
      src: "/images/women-evening-commute.jpg",
      alt: "A young Indian woman walking confidently out of a metro station in the evening",
      brief: "a woman in her 20s walking confidently out of a metro station at dusk, city lights, calm expression, not fearful.",
    },
    moments: [
      { title: "Every commute, covered", body: "Heading to work, college or across town, NISCHINT notices when a journey takes an unusual turn and checks in." },
      { title: "Night travel, without the worry", body: "Late shift or late train home. If something feels off, the people you trust hear about it right away." },
      { title: "Alerts that respect you", body: "No live-tracking feed for anyone to watch. Smart alerts reach your chosen contacts only when you might need them." },
    ],
    helps: [
      { name: "Route Check", detail: "Compare up to three routes: main roads, help along the way, buses and stations, quiet stretches, places open at that hour.", status: "launch-date" },
      { name: "Safe Walk", detail: "Start it when you head out; your circle can follow you until you arrive.", status: "launch-date" },
      { name: "I'm Safe check-in", detail: "Reached home? One tap tells your circle.", status: "launch" },
      { name: "SOS", detail: "Hold for 3 seconds to alert your circle, with one-tap access to call 112.", status: "launch" },
      { name: "4-level escalation", detail: "Alerts climb from a gentle check-in with you to your full trusted circle until someone responds.", status: "launch" },
    ],
    permissions: [
      "You choose who is in your circle.",
      "Location is shared only during a Safe Walk you start, or with an alert or SOS.",
      "No one, including NISCHINT staff, watches a live map of you.",
    ],
    limits: [
      "Route Check shows what is mapped. It does not rate how safe a road is, and maps can be incomplete. Place data from OpenStreetMap, updated weekly. © OpenStreetMap contributors.",
      "If your phone is off, out of battery or offline, alerts may be delayed or not sent.",
      "NISCHINT does not contact police for you. In an emergency, call 112.",
    ],
    screens: [
      { src: "/app-screens/my-protection.jpg", alt: "NISCHINT My Protection screen with the I'm Safe button", caption: "One tap: I'm Safe." },
      { src: "/app-screens/safe-walk.jpg", alt: "NISCHINT Safe Walk screen, ready to start, with destination and safe route map", caption: "Start a Safe Walk with your destination." },
      { src: "/app-screens/safe-walk-live.jpg", alt: "NISCHINT Safe Walk in progress, live on a map with ETA", caption: "Your circle follows until you arrive." },
    ],
    extraId: "route-check",
  },
  child: {
    slug: "child",
    path: "/child-safety",
    crumb: "Child safety",
    metaTitle: "Child safety for parents: school, tuition and the way home",
    metaDescription:
      "Guardian-focused child safety from NISCHINT. Safe zones for school and tuition, check-ins when routines change, and privacy-first design for children.",
    eyebrow: "For parents",
    title: "School, tuition, the walk home.",
    intro:
      "Children deserve growing independence, and parents deserve to know they reached where they were going. NISCHINT is built for the guardian's side, with children's privacy in mind.",
    accent: "teal",
    photo: {
      src: "/images/child-school-gate.jpg",
      alt: "A parent waving to their child at a school gate in an Indian city",
      brief: "a parent waving goodbye to a 10–12 year old at a school gate, backs or side profiles only, no identifiable child faces.",
    },
    moments: [
      { title: "Their day, in safe zones", body: "Save school, tuition and home. If the usual routine breaks, you're the first to know." },
      { title: "A simple \"I'm Safe\"", body: "Older children can tell you they've arrived with one tap. No long calls in front of friends." },
      { title: "Guardians get the alerts", body: "Some alerts, like disaster warnings, go to the adults in the circle, not to children's phones." },
    ],
    helps: [
      { name: "Safe zones for school, tuition and home", detail: "Set by the guardian; alerts when the routine breaks.", status: "launch" },
      { name: "I'm Safe check-in", detail: "For children with their own phone.", status: "launch" },
      { name: "Guardian-side Alert Center", detail: "Active and resolved alerts in one place.", status: "launch" },
    ],
    permissions: [
      "Under India's DPDP Act, a parent or legal guardian's consent is needed before a child's data is processed.",
      "We collect as little as possible about children, and never for advertising.",
      "Talk to your child about why you're using it. Safety works best when it is understood, not hidden.",
    ],
    limits: [
      "NISCHINT works only on a phone the child carries, with battery and signal.",
      "It is not a replacement for adult supervision or school safety procedures.",
      "It does not contact police or ambulance. In an emergency, call 112.",
    ],
    screens: [
      { src: "/app-screens/child-routes.jpg", alt: "NISCHINT My Routes screen for a child, with a guardian-monitored home-to-school route", caption: "Guardian-monitored routes, like home to school." },
      { src: "/app-screens/alert-center.jpg", alt: "NISCHINT Alert Center showing a missed safety check from a child", caption: "A missed check-in reaches the guardian." },
    ],
  },
  nri: {
    slug: "nri",
    path: "/for-nri-families",
    crumb: "Families abroad",
    metaTitle: "For NRI families: look after parents in India from abroad",
    metaDescription:
      "Living abroad with parents in India? NISCHINT alerts reach you in New Jersey, London, Toronto or Dubai the moment something needs attention, without daily anxious calls.",
    eyebrow: "For families abroad",
    title: "You're 12,000 km away. She's still your first call every morning.",
    intro:
      "NISCHINT watches over your parents in India and tells you the moment something needs attention, with real-time alerts that reach you in New Jersey, London, Toronto or Dubai. No time-zone excuses.",
    accent: "navy",
    photo: {
      src: "/images/nri-video-call.jpg",
      alt: "An Indian woman abroad smiling at her phone during a video call with her mother in India",
      brief: "split moment: a woman in an apartment abroad on a video call with her mother in India, both smiling, natural light.",
    },
    moments: [
      { title: "Different time zones, same circle", body: "Your parents' routine is in India time. Alerts reach you wherever you are." },
      { title: "Siblings and neighbours, together", body: "Add a sibling in India or a trusted neighbour as a guardian, so someone close can act first." },
      { title: "Less guilt, more connection", body: "Spend your calls talking, not checking." },
    ],
    helps: [
      { name: "Family plan with mutual guardians", detail: "Up to 4 members, each guardian and protected.", status: "launch" },
      { name: "Safe zones and routine alerts", detail: "For home and familiar places in India.", status: "launch" },
      { name: "I'm Safe check-in", detail: "A daily one-tap from your parent.", status: "launch" },
      { name: "Government disaster warnings for their district", detail: "SACHET warnings for places you've saved.", status: "testing" },
    ],
    permissions: [
      "Use NISCHINT with your parents' knowledge and agreement; permissions stay in their control on their phone.",
      "No live-tracking feed; location is shared with an alert or SOS.",
    ],
    limits: [
      "From abroad you can't reach a scene quickly. Add at least one guardian who lives nearby.",
      "Alerts depend on your parent's phone having battery, signal and location access.",
      "NISCHINT does not contact emergency services. In India, call 112.",
    ],
    screens: [
      { src: "/app-screens/home.jpg", alt: "NISCHINT home screen with family safety score", caption: "The whole family's status at a glance." },
      { src: "/app-screens/family-circle.jpg", alt: "NISCHINT Family Circle with primary guardian, co-guardian and protected member", caption: "Guardians in India and abroad, in one circle." },
    ],
  },
};
