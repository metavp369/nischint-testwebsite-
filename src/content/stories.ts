/**
 * Parameters 05 and 14. Problem vignettes and story template.
 * Every story here is ILLUSTRATIVE and is labelled so on the page.
 * Real case studies must set `illustrative: false` and carry consent
 * and image-permission records before publishing.
 */
export type Story = {
  id: string;
  illustrative: boolean;
  title: string;
  situation: string;
  need: string;
  capability: string;
  steps: string[];
  limitations: string;
  outcome: string;
  consentOnFile: boolean;
};

export const problems = [
  {
    id: "parent",
    title: "Maa isn't picking up",
    body: "It's 11 a.m. She always answers by now. You call twice, then a neighbour. For an hour you can't think about anything else.",
    accent: "green" as const,
  },
  {
    id: "late",
    title: "The late train home",
    body: "Your sister's shift ran long. Her last message said \"leaving now\". That was fifty minutes ago, and her phone is on silent.",
    accent: "blue" as const,
  },
  {
    id: "child",
    title: "School let out at 3",
    body: "It's 3:40 and your son hasn't reached tuition. Probably a friend's house, probably nothing. You still can't stop checking your phone.",
    accent: "teal" as const,
  },
];

export const stories: Story[] = [
  {
    id: "morning-walk",
    illustrative: true,
    title: "A morning walk that ran long",
    situation: "A father in Thane walks to the park every morning and is usually home by 8.",
    need: "His daughter in Bengaluru wants to know he's fine without calling him every day.",
    capability: "Safety Zones, Hermes AI deviation detection, I'm Safe check-in",
    steps: [
      "Home and the park are saved as safe zones.",
      "One morning he isn't home by the usual time and hasn't moved for a while.",
      "NISCHINT asks him to check in first.",
      "He taps I'm Safe. He'd stopped to chat with a friend. His daughter sees the check-in.",
    ],
    limitations: "Detection depends on his phone having battery, signal and location access.",
    outcome: "Illustrative scenario. No real outcome is claimed.",
    consentOnFile: false,
  },
  {
    id: "late-commute",
    illustrative: true,
    title: "Choosing the way home",
    situation: "A young professional in Mumbai leaves the office after 10 p.m.",
    need: "She wants her family to know she's on her way, without being tracked all day.",
    capability: "Route Check, Safe Walk, SOS",
    steps: [
      "She compares two routes in Route Check and picks the one with more main road.",
      "She starts a Safe Walk; her circle can follow until she arrives.",
      "She reaches home and the Safe Walk ends.",
    ],
    limitations: "Route Check shows what is mapped. It does not rate how safe a road is, and maps can be incomplete.",
    outcome: "Illustrative scenario. No real outcome is claimed.",
    consentOnFile: false,
  },
];
