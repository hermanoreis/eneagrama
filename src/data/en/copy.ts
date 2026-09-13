import type { TypeId } from "../schema";

export const typeIntroductions: Record<TypeId, string> = {
  1: "Tries to do what they consider right. You may recognize that care in the attention to detail and in how hard they are on themselves.",
  2: "Notices what other people need and likes to help. Sometimes their own needs wait.",
  3: "Mobilizes to get things done and to reach results. Resting without feeling they should be producing can be hard.",
  4: "Values personal expression and looks for meaning in what they live. They may compare and feel that something in them is missing.",
  5: "Likes to understand before acting and values their space. They may withdraw when they feel too much is being asked.",
  6: "Looks for trust and often anticipates what can go wrong. Sometimes they keep looking for guarantees before deciding.",
  7: "Gets excited by possibilities and new experiences. They may want to change the subject or the plan when something gets hard.",
  8: "Values autonomy and faces what they consider unfair. Showing that they need help can be difficult.",
  9: "Looks for agreement and considers different points of view. They may postpone what they want to avoid a conflict.",
};

export const homeFaq = [
  { question: "Is the Enneagram test free?", answer: "Yes. You can take the test and read your result without paying." },
  { question: "Do I need to sign in with email?", answer: "Yes, to take the test and open your account. You get an access code, with no password to create. Type profiles and study pages can be read without signing in." },
  { question: "Can I stop and continue later?", answer: "Yes, in this same browser. Answers in progress stay there. If you clear browser data or switch devices, that progress may not be there." },
  { question: "Does the test tell me who I am?", answer: "The result shows which types scored highest on your answers. It does not describe everything about you and it is not a diagnosis. Compare the profiles with real situations in your life." },
  { question: "What if I identify with more than one Enneagram type?", answer: "You can recognize traits in different descriptions. Compare the motivations and notice which ones show up in situations that repeat in your life." },
  { question: "Is the mentor a person?", answer: "No. It is an AI that can look at your latest result and the materials on this site to talk with you. It can be wrong and it does not replace professional support." },
];

export const typeFaqs: Record<TypeId, { question: string; answer: string }[]> = {
  1: [
    { question: "What is Enneagram Type 1?", answer: "Type 1, the Reformer, organizes around doing what is right. Idealistic and methodical, they lead by quality and can become harsh critics of themselves and others when the world misses the mark." },
    { question: "What does Type 1 fear and want?", answer: "The common fear is being bad, corrupt, or at fault. The desire is to be good, balanced, and whole. Healing, in this teaching, is accepting yourself and others as they are." },
    { question: "What is a Type 1 wing?", answer: "Neighbors on the circle color Type 1. A 1w9 (Idealist) is more measured and prefers to work alone. A 1w2 (Advocate) mixes ideals with empathy and is more social — and more heated when frustrated." },
  ],
  2: [
    { question: "What is Enneagram Type 2?", answer: "Type 2, the Helper, organizes around being needed and loved. Empathic and generous, they see other people’s need first and can lose freedom trying to be irreplaceable." },
    { question: "What does Type 2 fear and want?", answer: "The common fear is not being loved or needed. The desire is to feel loved and wanted. Healing includes receiving, not only giving, and noticing your own needs." },
    { question: "What is a Type 2 wing?", answer: "A 2w1 (Server) is more sober and may neglect health while easing suffering. A 2w3 (Host) is more charming and aimed at showing what they can offer." },
  ],
  3: [
    { question: "What is Enneagram Type 3?", answer: "Type 3, the Achiever, organizes around success and image. Adaptable and result-oriented, they can confuse the performance with who they are." },
    { question: "What does Type 3 fear and want?", answer: "The common fear is not being valued for what they accomplish. The desire is to feel valued, wanted, and accepted. Healing includes slowing down and separating image from the real self." },
    { question: "What is a Type 3 wing?", answer: "A 3w2 (Promoter) is more relational. A 3w4 (Professional) is more style-conscious and can swing between public shine and private emptiness." },
  ],
  4: [
    { question: "What is Enneagram Type 4?", answer: "Type 4, the Individualist, organizes around identity and meaning. Expressive and intense, they can get lost in comparison and in what feels missing." },
    { question: "What does Type 4 fear and want?", answer: "The common fear is having no identity or meaning of their own. The desire is to find themselves and stay true to emotional needs. Healing is inhabiting the present without defining yourself by lack." },
    { question: "What is Type 4 wing 5 vs wing 3?", answer: "A 4w3 (Aristocrat) joins aesthetics and ambition and wants to be seen. A 4w5 (Bohemian) is more reserved and analytical, and can isolate in uniqueness. The test reports the neighbor with more points; it does not prove how those influences live in you." },
  ],
  5: [
    { question: "What is Enneagram Type 5?", answer: "Type 5, the Investigator, organizes around understanding and preserving energy. Analytical and independent, they can withdraw so far that life happens behind glass." },
    { question: "What does Type 5 fear and want?", answer: "The common fear is being invaded, emptied, or incompetent. The desire is to be capable, to understand, and to keep energy. Healing includes entering the world and sharing what you know." },
    { question: "What is a Type 5 wing?", answer: "A 5w4 (Iconoclast) is more aesthetic and intense. A 5w6 (Problem-solver) is more loyal to systems of competence and uses knowledge to anticipate risk." },
  ],
  6: [
    { question: "What is Enneagram Type 6?", answer: "Type 6, the Loyalist, organizes around support and safety. Responsible and strategic, they anticipate what can go wrong and may swing between caution and counterphobic courage." },
    { question: "What does Type 6 fear and want?", answer: "The common fear is not having support and guidance. The desire is to find support and safety. Healing, in this teaching, is relaxing and living in the present." },
    { question: "What is a Type 6 wing?", answer: "A 6w5 (Defender) looks for safety in knowledge systems and can be more solitary. A 6w7 (Buddy) is more social and uses humor and movement to ease anxiety." },
  ],
  7: [
    { question: "What is Enneagram Type 7?", answer: "Type 7, the Enthusiast, organizes around possibility and avoiding pain. Curious and fast, they can leave difficulty by jumping to the next plan." },
    { question: "What does Type 7 fear and want?", answer: "The common fear is pain and deprivation. The desire is to be happy, satisfied, fulfilled. Healing includes staying with the interior instead of collecting surfaces." },
    { question: "What is a Type 7 wing?", answer: "A 7w6 (Entertainer) is more relational. A 7w8 (Realist) is more strategic and aimed at material result." },
  ],
  8: [
    { question: "What is Enneagram Type 8?", answer: "Type 8, the Challenger, organizes around protection and not being controlled. Direct and forceful, they may not notice the impact of that force on others." },
    { question: "What does Type 8 fear and want?", answer: "The common fear is being hurt, controlled, or invaded. The desire is to protect themselves and set the course of their own life. Healing includes vulnerability and forgiveness." },
    { question: "What is a Type 8 wing?", answer: "An 8w7 (Independent) is more openly provocative. An 8w9 (Bear) is more protective, less explosive; stubbornness can replace the attack." },
  ],
  9: [
    { question: "What is Enneagram Type 9?", answer: "Type 9, the Peacemaker, organizes around inner peace and not rocking the boat. Inclusive and steady, they can postpone their own priorities to keep harmony." },
    { question: "What does Type 9 fear and want?", answer: "The common fear is loss, separation, annihilation. The desire is inner balance and peace of mind. Healing is waking up and taking initiative." },
    { question: "What is a Type 9 wing?", answer: "A 9w8 (Counselor) brings more force and boundary. A 9w1 (Dreamer) looks for harmony through what is right, not only through comfort." },
  ],
};

export const howToTest = {
  name: "How to take this free Enneagram test",
  steps: [
    { name: "Sign in with email", text: "You receive a six-digit code. There is no password to create." },
    { name: "Answer 135 statements", text: "Fifteen items relate to each type, mixed through the questionnaire. Use the scale from never to always, thinking of habits that repeat." },
    { name: "Read the result as a starting point", text: "Higher scores mean more agreement with those statements, not a probability that you “are” a type. Ties stay visible. It is not a diagnosis." },
  ],
};
