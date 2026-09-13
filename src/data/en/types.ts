import type { CenterCopy, EnneaType, TypeId } from "../schema";

export type { EnneaType, TypeId };

export const centers: Record<"instinto" | "sentimento" | "pensamento", CenterCopy> = {
  instinto: {
    label: "Body center",
    types: [8, 9, 1],
    text: "Body, action, and how energy is held. The background issue is anger — how it comes out, gets contained, or goes to sleep.",
  },
  sentimento: {
    label: "Heart center",
    types: [2, 3, 4],
    text: "Image, affection, and worth. The background issue is shame — how a self gets built so it might deserve love.",
  },
  pensamento: {
    label: "Head center",
    types: [5, 6, 7],
    text: "Mind, safety, and possibility. The background issue is fear — how danger is anticipated, avoided, or dissolved.",
  },
};

export const types: EnneaType[] = [
  {
    id: 1,
    name: "Reformer",
    alias: "The Perfectionist",
    center: "instinto",
    color: "#c45c3e",
    ink: "#5c2418",
    fear: "Being bad, corrupt, or at fault.",
    desire: "To be good, balanced, and whole.",
    innerMessage: "You’re on a good path if you do what’s right.",
    essence: "Perfection",
    healing: "Accepting yourself and others as they are.",
    summary:
      "Idealistic, exacting, methodical. Leads by example and by quality — and can become an inner (and outer) critic when the world misses the mark.",
    personality:
      "Principle-led people. Discerning, measured, realistic, with a sense of a mission. They put ideas into practice with patience, method, persistence, and care for detail. Organized and meticulous, they can slide into criticism and perfectionism. The inner critic hits self-worth, creates tension and loneliness. They steer themselves by judgment and conviction. They have a gift for teamwork, collaboration, and persuasion.",
    focus:
      "Does things the right way to escape accusation and guilt. Tracks the inner critic and outside criticism. Compares with others to occupy the morally higher ground.",
    motivators: ["Clear rules and references", "Order in the environment", "Long processes without a clock on the back", "Support work with guidance"],
    strengths: ["Leading by example", "Focus on quality", "Search for excellence", "Organization", "Coherence and honesty", "Practical sense"],
    develop: ["Reactivity and excess criticism", "Defensiveness when criticized", "Little awareness of deeper anger", "Control and stubbornness", "Impatience with other people’s details"],
    alert:
      "In the effort to always get it right, takes on every problem. Believes others will never reach as good a result. Gets obsessed with correction and control — serious, tense, carrying the weight of the world.",
    vocations: ["Education and training", "People and quality work", "Organization, method, accounting", "Law, engineering, administration"],
    practices: [
      "Notice the inner critic for 30 seconds each hour and let it pass.",
      "Shift attention from “doing it wrong” to noticing difference.",
      "Schedule pleasures and treat them as non-negotiable.",
      "Ask whether a mistake is actually serious.",
      "Make small, harmless mistakes on purpose and watch what happens.",
    ],
    wings: [
      { id: 9, name: "The Idealist", text: "More measured, wise, and civil. Prefers to work alone." },
      { id: 2, name: "The Advocate", text: "Mixes ideals with empathy. More persuasive, active, and social — and more heated when frustrated." },
    ],
    leadership: "A leader’s job is to set clear goals and help people reach the highest quality they can.",
    excelBlurb: "Critical, questioning, perfectionist, methodical. Demands a lot of self and others. Some moralize and dictate the rules. When they fail, frustration can turn aggressive.",
  },
  {
    id: 2,
    name: "Helper",
    alias: "The Giver",
    center: "sentimento",
    color: "#d36b7a",
    ink: "#6a2430",
    fear: "Not being loved or needed.",
    desire: "To feel loved and wanted.",
    innerMessage: "You’re on a good path if you are loved and indispensable.",
    essence: "Love",
    healing: "Recognizing your own needs and receiving, not only giving.",
    summary:
      "Empathic, helpful, generous. Sees other people’s need before their own — and can lose freedom trying to be irreplaceable.",
    personality:
      "Drawn to work that involves relationship and conversation. They devote themselves to being useful, with generosity that has no obvious limit. They give time to friends and have a hard time saying no. By doing so much for others, they overextend and neglect health and their own needs. Expressive, talkative, social, sometimes too much. The core wish is to feel loved.",
    focus:
      "Attention on other people’s needs and wants, especially the important ones. Acts according to what the other might feel or do. Vanity asks to be outgrown so there is more room for a focus of their own.",
    motivators: ["Work among people", "Sincere recognition", "A support or mentoring role", "Warm, relational rooms"],
    strengths: ["Strong relationships", "Empathy", "Generosity and helpfulness", "Optimism", "Sees other people’s needs", "Can motivate others"],
    develop: ["Hard time saying no", "Anger when unrecognized", "Doesn’t know own needs", "Overemphasis on relationships", "Does too much and waits for a return without admitting it"],
    alert:
      "Identity fuses with what they do for others. Tiredness, quiet scorekeeping, and the sense of being used show up when recognition doesn’t come.",
    vocations: ["Psychology, coaching, care", "Education and people development", "Hospitality and relational sales", "Philanthropy and community work"],
    practices: [
      "Practice no without a long justification.",
      "Separate love from approval and attention.",
      "Keep time that is only yours, with no usefulness.",
      "Ask: is this for the other person, or so I stay needed?",
      "Name a personal aim before doing something for someone else.",
    ],
    wings: [
      { id: 1, name: "The Server", text: "A strong wish to ease suffering. More sober and severe with themselves — can be self-critical and neglect health." },
      { id: 3, name: "The Host", text: "Charming, talkative, adaptable. Likes to host. Less serious, more aimed at showing what they can offer." },
    ],
    leadership: "A leader’s job is to see the team’s strengths and gaps, motivate people, and make it easier to reach the goal.",
    excelBlurb: "Willing, loving, with a need to please. Believes they have a lot to give and likes that to be seen. Some lose freedom trying to satisfy everyone.",
  },
  {
    id: 3,
    name: "Achiever",
    alias: "The Performer",
    center: "sentimento",
    color: "#d4a017",
    ink: "#5a4308",
    fear: "Not being valued for what they accomplish.",
    desire: "To feel valued, wanted, and accepted.",
    innerMessage: "You’re on a good path if you succeed and others respect you.",
    essence: "Hope / true worth",
    healing: "Separating image from the real self, and slowing down.",
    summary:
      "Result-oriented, adaptable, charismatic. Makes life look like a success project — and can confuse the image with who they are.",
    personality:
      "Moved by success. Confident, attractive, charming, they can orient around status and progress. Ambitious, competent, ready to act, they worry about image and what others think. Self-confidence, drive, and persuasion pull a team. The risk is overwork, competitiveness, and burnout. They compete at work, at home, in relationships. They fear intimacy that would show fragility.",
    focus:
      "Attention on performance, the goal, and the image others will read. Multiplies channels of work and speeds up when insecurity appears.",
    motivators: ["Visible, measurable goals", "Recognition of results", "A competitive, fast room", "Freedom to adjust behavior until they win"],
    strengths: ["Orientation to success", "High energy", "Reads what people want", "Gets through problems", "Enterprise and confidence", "Gets results"],
    develop: ["Extreme competitiveness", "Little access to feeling", "Impatience with other people’s emotion", "Believing the image is the self", "Little time for personal relationships"],
    alert:
      "Speeds up, stacks tasks, and disappears from intimacy. Tiredness is ignored. “What actually matters?” hides behind the next result.",
    vocations: ["Commercial and political leadership", "Entrepreneurship and advertising", "Project work and sales", "Communication and brands"],
    practices: [
      "Slow the pace and unhook from performance.",
      "Notice feelings and physical tiredness.",
      "Ask: is the reference the image, or the real self?",
      "Value empathy as much as status.",
      "Make room for an inward look.",
    ],
    wings: [
      { id: 2, name: "The Promoter", text: "More relational and charming. Uses personal magnetism to get cooperation and visibility." },
      { id: 4, name: "The Professional", text: "More aware of refined image and style. Can swing between public shine and private emptiness." },
    ],
    leadership: "A leader’s job is to create a room where results can happen, with clear goals and structure.",
    excelBlurb: "Tied to success, they prioritize image. Competitive, they like to win. Watch vanity. They tend to lead.",
  },
  {
    id: 4,
    name: "Individualist",
    alias: "The Romantic",
    center: "sentimento",
    color: "#7a5ea7",
    ink: "#2f2150",
    fear: "Having no identity or meaning of their own.",
    desire: "To find themselves and stay true to emotional needs.",
    innerMessage: "You’re on a good path if you are authentic and singular.",
    essence: "Origin / essential identity",
    healing: "Inhabiting the present without defining yourself by what’s missing.",
    summary:
      "Intuitive, expressive, searching for meaning. Feels life in high definition — and can get lost in intensity, comparison, and lack.",
    personality:
      "Unsettled with the present, tied to the past or dreaming the future. Sensitive, creative, inward. Looks for meaning in relationships and in expression. Can become dramatic, temperamental, and critical — of self and others. The sense that others are happier and that everything is harder for them feeds the myth of lack. Authenticity is the treasure and the trap.",
    focus:
      "Attention on what’s absent, on what would be more true, beautiful, or deep. Compares inner life with how other people look.",
    motivators: ["Work with meaning and aesthetics", "Creative control", "Deep relationships, not shallow ones", "Room for emotional expression"],
    strengths: ["Inspiration and creativity", "Introspection", "Expressiveness and intuition", "Compassion", "Search for excellence", "Meaning through relationships"],
    develop: ["Intensity and drama", "Temper", "Boredom comes easily", "Guilt and a hard time with criticism", "Reserve and extreme criticism of others"],
    alert:
      "When criticized or misunderstood, pulls back and sulks. Identity leans on what’s missing. Ordinary life looks too thin.",
    vocations: ["Arts, writing, design", "Music and creative direction", "Therapy and social work", "Brands with a strong identity"],
    practices: [
      "Bring attention from what’s missing to what’s here.",
      "Finish the ordinary before chasing the extraordinary.",
      "Separate feeling from identity.",
      "Accept the common without losing depth.",
      "Use creativity in service of something outside the self.",
    ],
    wings: [
      { id: 3, name: "The Aristocrat", text: "More aimed at getting things done and being seen. Joins aesthetics and ambition." },
      { id: 5, name: "The Bohemian", text: "More reserved and analytical. Deepens interiority and can isolate in uniqueness." },
    ],
    leadership: "A leader’s job is to build organizations that give meaning and purpose, so people want to do excellent work.",
    excelBlurb: "Sees suffering as a stance toward the world. Unsettled with the present. Some become tragic because they always think others are happier.",
  },
  {
    id: 5,
    name: "Investigator",
    alias: "The Observer",
    center: "pensamento",
    color: "#5b7c6e",
    ink: "#1d332c",
    fear: "Being invaded, emptied, or incompetent.",
    desire: "To be capable, to understand, and to preserve energy.",
    innerMessage: "You’re on a good path if you understand and can stand on your own.",
    essence: "Omniscience / clarity",
    healing: "Entering the world and sharing what you know.",
    summary:
      "Analytical, discerning, independent. Understands in depth — and can withdraw so far that life happens behind glass.",
    personality:
      "Careful; they don’t act without thinking. They watch from a distance to know the ground. Reserved, wary of other people’s demands, they can set feeling aside and live a solitary life. Excellent in a crisis because they plan and specialize. The mind wants the full map before the step. Autonomy becomes a wall.",
    focus:
      "Attention on data, systems, and the energy store. Minimizes involvement so as not to be drained.",
    motivators: ["Time alone to think", "Complex problems and expertise", "Little emotional invasion", "Control of their own pace"],
    strengths: ["Analysis and objectivity", "Systematizing", "Detailed planning", "Excellence in a crisis", "Persistence", "Specialization"],
    develop: ["Distance", "Excess independence", "Not saying what they think", "Underestimating relationships", "Not exchanging information", "Stubbornness and criticism"],
    alert:
      "When insecure, goes distant and cold. Life becomes a file. People feel they need an appointment to exist.",
    vocations: ["Research, science, technology", "Strategy and analysis", "Systems architecture", "Technical writing and specialist consulting"],
    practices: [
      "Share a thought before it is “ready.”",
      "Stay in the body and in the conversation a little past comfort.",
      "Treat energy as renewable, not only scarce.",
      "Name feelings with the same precision as concepts.",
      "Ask for and offer help in a small, concrete dose.",
    ],
    wings: [
      { id: 4, name: "The Iconoclast", text: "More aesthetic and emotionally intense. Joins analysis and singularity." },
      { id: 6, name: "The Problem-solver", text: "More loyal to systems and competence groups. Uses knowledge to anticipate risk." },
    ],
    leadership: "A leader’s job is to develop the organization through research, deliberation, and planning, so the parts fit a shared mission.",
    excelBlurb: "Does nothing without thinking it through. Watches from a distance, fears risk, is reserved, and can live a solitary life. Shines as a researcher and specialist.",
  },
  {
    id: 6,
    name: "Loyalist",
    alias: "The Skeptic",
    center: "pensamento",
    color: "#6b7d3a",
    ink: "#2c3414",
    fear: "Not having support and guidance.",
    desire: "To find support and safety.",
    innerMessage: "You’re on a good path if you do what’s expected of you.",
    essence: "Courage",
    healing: "Relaxing and living in the present.",
    summary:
      "Responsible, loyal, strategic. Anticipates what can go wrong — and swings between extreme caution and counterphobic courage.",
    personality:
      "They look for firm ground in a world they read as dangerous and unreliable. They turn to people and systems for orientation and, at the same time, distrust authority. They don’t like too many options. They feel safer with rules and routines. Strong at procedures, analysis, and investigation. The mind chatters with scenarios. They can be the most faithful — or test the bond until it tires.",
    focus:
      "Attention on threats, ambiguity, and the group’s loyalty. Projects thoughts onto others and rehearses the worst in order to prepare.",
    motivators: ["Clear roles and rules", "A reliable team", "Anticipating problems", "Authority that has earned trust"],
    strengths: ["Responsibility and cooperation", "Strategic thinking", "A sharp mind", "Perseverance", "Anticipating problems", "Loyalty to the team"],
    develop: ["Chronic worry", "Aversion to ambiguity", "Analysis paralysis", "Too much caution or too much risk", "Submission or extreme distrust"],
    alert:
      "Anxiety becomes a last name. Either they submit too much, or they challenge too much. Decision freezes while the mind runs disasters.",
    vocations: ["Law, audit, risk", "Security and operations", "Social research and critique", "Crisis work and compliance"],
    practices: [
      "Tell intuition apart from projection.",
      "Act for a day as a person of faith would act.",
      "Notice the power given to others and take authority back.",
      "Taste successes instead of only hunting the next hole.",
      "Check fears with real people.",
    ],
    wings: [
      { id: 5, name: "The Defender", text: "Looks for safety in systems of belief and knowledge. More solitary, skeptical, and reactive when threatened." },
      { id: 7, name: "The Buddy", text: "More social and adventurous. Uses humor and movement to ease anxiety." },
    ],
    leadership: "A leader’s job is to solve problems by creating a room where each person feels part of the solution.",
    excelBlurb: "Imagines the outcome of actions and sometimes sees the downside first. Looks for safety. In a crisis, wants to solve it now. Strong in law, critique, and the social sciences.",
  },
  {
    id: 7,
    name: "Enthusiast",
    alias: "The Epicure",
    center: "pensamento",
    color: "#e08a2a",
    ink: "#5a3208",
    fear: "Pain and deprivation.",
    desire: "To be happy, satisfied, fulfilled.",
    innerMessage: "You’re on a good path if you get what you need.",
    essence: "Sobriety",
    healing: "Exploring the interior and staying.",
    summary:
      "Curious, fast, contagious. Turns life into a sequence of possibilities — and leaves pain by jumping to the next thing.",
    personality:
      "Bold, lively, with cheerful determination. Productive, practical, playful. The hunt for new sensations keeps them from finishing what they started. They communicate with vigor, improvise, delegate operations to stay with the panorama. Inclined to general analysis, not detail. Optimism is real and also a strategy against boredom and pain.",
    focus:
      "Attention on what’s stimulating, future, and multiple. The mind jumps. Limits feel like a prison.",
    motivators: ["Variety and novelty", "Projects with an exciting start", "Freedom of calendar", "Interesting people and new ideas"],
    strengths: ["Imagination and creativity", "Enthusiasm and curiosity", "A captivating presence", "Multitasking and a quick mind", "Handling disconnected data"],
    develop: ["Impulsiveness and scatter", "Avoiding painful situations", "Uneven empathy", "Reactivity to criticism", "Contempt for routine", "Rationalizing the negative"],
    alert:
      "The calendar fills so the grass doesn’t grow. Commitments thin out. Pain is reframed as a joke or a plan B.",
    vocations: ["Innovation, product, content", "Arts, stage, production", "Travel, hospitality, experiential education", "Opportunity strategy"],
    practices: [
      "Meditate on a single point until the mind slows.",
      "Work one thing through to the end.",
      "Put options down: less can be more.",
      "Stay with boredom, limit, and conflict instead of leaving.",
      "Review the hunger for excitement at the end of the day.",
    ],
    wings: [
      { id: 6, name: "The Entertainer", text: "More relational and productive. Swings between the wish to risk and the fear of losing what’s already there." },
      { id: 8, name: "The Realist", text: "Joins speed and drive. More strategic, practical, aimed at power and material result." },
    ],
    leadership: "A leader’s job is to get people excited and creating so the organization can take real opportunities.",
    excelBlurb: "Likes to enjoy life. Work can look like a necessary evil for pleasure and freedom. Charming; leads in a friendly, slightly disguised way.",
  },
  {
    id: 8,
    name: "Challenger",
    alias: "The Boss",
    center: "instinto",
    color: "#2b2b2b",
    ink: "#111111",
    fear: "Being hurt, controlled, or invaded.",
    desire: "To protect themselves and set the course of their own life.",
    innerMessage: "You’re on a good path if you are strong and can master the situation.",
    essence: "Mercy",
    healing: "Working forgiveness and vulnerability.",
    summary:
      "Direct, protective, with a large appetite for life. Moves the world by force — and may not notice the impact of that force on others.",
    personality:
      "Firm, assertive, sure of themselves. Strong and dominating, also proud, protective, and decided. They control the environment and can intimidate. Intimacy is hard. In self-mastery they use strength to improve other people’s lives — heroic, magnanimous. They don’t dodge risk or responsibility. Communication is direct, fast, without detours. They cannot stand being controlled.",
    focus:
      "Attention on power, justice, and who is in charge. Detects weakness — in the room and in themselves — and moves so as not to be caught.",
    motivators: ["Autonomy and command", "Large challenges", "Competent people nearby", "A visible, immediate result"],
    strengths: ["Directness and strategy", "Getting through obstacles", "Drive and protection", "Pushing projects forward", "Supporting other people’s success", "Self-confidence"],
    develop: ["Control and demand", "Impatience with slower people", "Contempt for weakness", "Expecting too much of self and others", "Feeling used when the other doesn’t deliver"],
    alert:
      "Monumental bursts of anger. Excess, domination, and the thesis that weakness invites trouble. The other person disappears or obeys — and intimacy disappears with them.",
    vocations: ["Building and negotiating", "Operational leadership", "Advocacy for a cause", "Invention and turnaround"],
    practices: [
      "Once an hour, check the impulse to act and breathe.",
      "Ask others if you’re being excessive.",
      "Defend the ordinary, the gentle, the moderate.",
      "Delay gratification and allow vulnerability.",
      "Look for win-win instead of winning.",
    ],
    wings: [
      { id: 7, name: "The Independent", text: "Charismatic, competitive, wants to leave a mark. Little patience with inefficiency. More openly provocative." },
      { id: 9, name: "The Bear", text: "Joins force and apparent calm. More protective, less explosive — stubbornness replaces the attack." },
    ],
    leadership: "A leader’s job is to move the organization with decision, put capable people in the right roles, and give autonomy to those who are competent.",
    excelBlurb: "Lives intensely, likes power, and fights for what they see as just. Cannot stand depending or looking weak. Makes their own rules.",
  },
  {
    id: 9,
    name: "Peacemaker",
    alias: "The Mediator",
    center: "instinto",
    color: "#8a9a4a",
    ink: "#2f3616",
    fear: "Loss, separation, annihilation.",
    desire: "To keep inner balance and peace of mind.",
    innerMessage: "You’ll be fine if the people around you are fine too.",
    essence: "Action",
    healing: "Waking up and taking initiative.",
    summary:
      "Diplomatic, steady, inclusive. Holds the group’s harmony — and can put their own priorities to sleep so the boat doesn’t rock.",
    personality:
      "Peacemakers, easy to live with, constant, receptive. They give way too far to keep the peace. They minimize friction; problems grow from passivity and stubbornness. Tireless at bringing people together and clearing misunderstandings. At the top of the Enneagram they echo traits of the other types. Asserting themselves is frightening. They compensate a sleeping instinct with imagination. They arrange many tasks and forget the essential. They can be active on the outside and asleep on the inside.",
    focus:
      "Attention on the environment and other people’s agendas. Their own priority sits in second place. Substitutes — food, screens, routine — take the place of will.",
    motivators: ["A harmonious, structured room", "Lasting relationships", "A pace without aggressive hurry", "Belonging without being the center of conflict"],
    strengths: ["Diplomacy and warmth", "Inclusion and cooperation", "Lasting relationships", "Patience", "Support for others", "A wide view from the operational"],
    develop: ["Avoiding conflict", "Not saying what they think", "Forgetting priorities", "Procrastination and indecision", "Little apparent energy", "Passive-aggressive under pressure"],
    alert:
      "Agrees so as not to argue. Anger becomes silent stubbornness. The day ends and what mattered to them was not done.",
    vocations: ["Mediation, diplomacy, people work", "Facilitation and team coaching", "Operations and integration", "Care and community"],
    practices: [
      "Every day, name what matters to you and check whether you did it.",
      "Use resistance and stubbornness as a compass for what was abandoned.",
      "Make plans with a deadline and a limit.",
      "Take a position on real matters.",
      "Notice the pull toward substitutes and stay with the aim.",
    ],
    wings: [
      { id: 8, name: "The Counselor", text: "More assertive and bodily. Peace comes with a dose of force and a boundary." },
      { id: 1, name: "The Dreamer", text: "More principled and ordered. Looks for harmony through what’s right, not only through comfort." },
    ],
    leadership: "A leader’s job is to help fulfill a shared mission by creating a structured, harmonious place to work.",
    excelBlurb: "Looks accommodating, doesn’t like being disturbed. Satisfies others to keep the peace. Agrees so as not to argue. A good listener and negotiator.",
  },
];

export const typeById = Object.fromEntries(types.map((t) => [t.id, t])) as Record<TypeId, EnneaType>;

export const concepts = [
  "There are nine types. Each person identifies with one.",
  "No type is better than another.",
  "The type doesn’t change — we change.",
  "We have traits of all of them, but our type’s worldview runs the show.",
  "Passion and fixation count more than typical behavior.",
  "The type is a defense and a narrowed state of awareness.",
  "We are not a type: we are in a type.",
  "Watching others leads to understanding — without stereotyping, judging, or justifying.",
];

export const folderUrl =
  "https://drive.google.com/drive/folders/1Ngk8ATY1oZ06MNPf3Myiy6_2da4vZoGj";
