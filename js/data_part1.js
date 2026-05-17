/**
 * C1 Advanced English Course - Data Part 1
 * Units 1-2: Rhetoric & Persuasion, Bioethics & Society
 */

const courseData = {
    units: [
        {
            id: 1,
            title: "Rhetoric & Persuasion",
            topic: "The Art of Argumentation",
            listening: {
                title: "The Power of Rhetoric in Modern Society",
                transcript: "Rhetoric, the art of persuasion through language, has been a cornerstone of civilized discourse since the ancient Greeks first codified its principles over two millennia ago. Aristotle identified three fundamental modes of persuasion: ethos, the appeal to the speaker's credibility; pathos, the appeal to the audience's emotions; and logos, the appeal to reason and logic. These three pillars continue to underpin virtually every persuasive communication we encounter today, from political speeches and courtroom arguments to advertising campaigns and social media posts. What has changed dramatically, however, is the medium through which rhetoric operates. In the digital age, persuasive messages reach billions of people instantaneously, and the line between legitimate persuasion and manipulation has become increasingly blurred. Consider, for example, how algorithms curate our news feeds, creating echo chambers that reinforce our existing beliefs rather than challenging them. This phenomenon, known as the filter bubble, represents a fundamental shift in how ideas compete in the marketplace of discourse. Furthermore, the rise of deepfakes and AI-generated content raises troubling questions about the very notion of authentic communication. When a machine can craft a speech that moves audiences to tears, what does that say about the nature of persuasion itself? Critics argue that we are witnessing a crisis of rhetoric, where the tools of persuasion have outpaced our collective ability to think critically about the messages we consume. Proponents of media literacy education contend that the solution lies not in restricting persuasive communication but in equipping citizens with the analytical skills to evaluate arguments on their merits.",
                questions: [
                    { q: "Who first codified the principles of rhetoric?", options: ["The Romans", "The ancient Greeks", "Medieval scholars"], correct: 1 },
                    { q: "What is 'ethos' an appeal to?", options: ["Emotion", "Logic", "Credibility"], correct: 2 },
                    { q: "What are the three modes of persuasion called?", options: ["Ethos, pathos, logos", "Thesis, antithesis, synthesis", "Claim, warrant, evidence"], correct: 0 },
                    { q: "What has changed dramatically about rhetoric?", options: ["Its principles", "The medium", "Its effectiveness"], correct: 1 },
                    { q: "What is a 'filter bubble'?", options: ["A privacy tool", "Echo chambers from algorithms", "A debate technique"], correct: 1 },
                    { q: "What raises questions about authentic communication?", options: ["Social media", "Deepfakes and AI content", "Print journalism"], correct: 1 },
                    { q: "What can AI-generated speeches do?", options: ["Replace all speakers", "Move audiences to tears", "Eliminate rhetoric"], correct: 1 },
                    { q: "What do critics say we are witnessing?", options: ["A golden age of rhetoric", "A crisis of rhetoric", "The end of language"], correct: 1 },
                    { q: "What do proponents of media literacy suggest?", options: ["Restrict persuasion", "Equip citizens with analytical skills", "Ban advertising"], correct: 1 },
                    { q: "How quickly do messages reach people in the digital age?", options: ["Within days", "Within hours", "Instantaneously"], correct: 2 }
                ]
            },
            reading: {
                title: "The Anatomy of a Persuasive Argument: From Classical Rhetoric to Contemporary Discourse",
                text: "The construction of a compelling argument is both an art and a science, requiring the orchestration of multiple elements that work in concert to shift an audience's perspective. At its foundation lies the claim—a clear, debatable assertion that stakes out the arguer's position. However, a claim without substantiation is merely an opinion. To elevate assertion into argument, one must marshal evidence: empirical data, expert testimony, case studies, and analogies that lend weight and credibility to the position being advanced.<br><br>Yet evidence alone is insufficient. The sophisticated argumentation that characterizes C1-level discourse demands the construction of warrants—logical bridges that connect evidence to claims. The philosopher Stephen Toulmin formalized this relationship in his influential model of argumentation, which identifies six key components: claim, data, warrant, backing, qualifier, and rebuttal. Understanding this framework enables speakers and writers to construct arguments that are not merely persuasive but also intellectually rigorous.<br><br>Equally important is the ability to anticipate and address counterarguments. A truly compelling argument does not shy away from opposing viewpoints; rather, it acknowledges them, engages with them substantively, and demonstrates why its own position nonetheless prevails. This technique, known as concession and rebuttal, signals intellectual honesty and strengthens the arguer's credibility. The most effective communicators understand that persuasion is not about demolishing the opposition but about building a case so thoroughly constructed that the weight of evidence and reasoning tips the scales in their favour.<br><br>In contemporary discourse, the ability to construct and deconstruct arguments has never been more critical. We live in an era saturated with information and misinformation alike, where the capacity to distinguish sound reasoning from sophistry determines not just academic success but civic participation and democratic governance itself.",
                questions: [
                    { q: "What is the foundation of a compelling argument?", options: ["Evidence", "A clear claim", "Emotional appeal"], correct: 1 },
                    { q: "What elevates an assertion into an argument?", options: ["Evidence", "Repetition", "Volume"], correct: 0 },
                    { q: "What are 'warrants' in argumentation?", options: ["Legal documents", "Logical bridges between evidence and claims", "Types of evidence"], correct: 1 },
                    { q: "Who formalized the six-component model?", options: ["Aristotle", "Plato", "Stephen Toulmin"], correct: 2 },
                    { q: "How many components does Toulmin's model identify?", options: ["Three", "Five", "Six"], correct: 2 },
                    { q: "What is 'concession and rebuttal'?", options: ["Giving up an argument", "Acknowledging and addressing counterarguments", "A debate rule"], correct: 1 },
                    { q: "What does concession and rebuttal signal?", options: ["Weakness", "Intellectual honesty", "Indecisiveness"], correct: 1 },
                    { q: "What is persuasion NOT about, according to the text?", options: ["Building a case", "Demolishing the opposition", "Presenting evidence"], correct: 1 },
                    { q: "What era do we live in?", options: ["A post-truth era", "An era saturated with information", "An era of silence"], correct: 1 },
                    { q: "What does critical reasoning determine?", options: ["Only academic success", "Civic participation and governance", "Entertainment choices"], correct: 1 }
                ]
            },
            grammar: {
                title: "Mixed Conditionals",
                explanation: "Mixed conditionals combine elements from different conditional types. A common pattern mixes the third conditional (past unreal) with the second conditional (present unreal): 'If + past perfect, would/could/might + base form' (past cause → present result). The reverse pattern uses: 'If + past simple, would have + past participle' (general truth → past result).",
                example: "If I had studied medicine (past unreal), I would be a doctor now (present result). / If she weren't so shy (general truth), she would have spoken at the conference (past result).",
                quizzes: [
                    { question: "If I _____ harder at university, I would have a better job now.", options: ["studied", "had studied", "have studied"], correct: 1 },
                    { question: "If she weren't so cautious, she _____ the investment last year.", options: ["would make", "would have made", "had made"], correct: 1 },
                    { question: "If they had left earlier, they _____ here by now.", options: ["would be", "will be", "are"], correct: 0 },
                    { question: "If he _____ fluent in Mandarin, he would have got the position in Shanghai.", options: ["were", "had been", "is"], correct: 0 },
                    { question: "I wouldn't be in this predicament if I _____ the contract more carefully.", options: ["read", "had read", "would read"], correct: 1 },
                    { question: "If we had invested in renewable energy, our carbon footprint _____ lower today.", options: ["would be", "will be", "had been"], correct: 0 },
                    { question: "She _____ the CEO now if she hadn't resigned five years ago.", options: ["would be", "will be", "is"], correct: 0 },
                    { question: "If I weren't allergic to cats, I _____ one from the shelter last month.", options: ["would adopt", "would have adopted", "had adopted"], correct: 1 },
                    { question: "The project _____ on schedule if we had allocated more resources initially.", options: ["would be", "will be", "is"], correct: 0 },
                    { question: "If he _____ the warning signs, he wouldn't be facing bankruptcy now.", options: ["noticed", "had noticed", "notices"], correct: 1 }
                ]
            },
            vocabulary: [
                { word: "Rhetoric", ipa: "ˈretərɪk", def: "The art of effective or persuasive speaking or writing" },
                { word: "Sophistry", ipa: "ˈsɒfɪstri", def: "The use of clever but false arguments to deceive" },
                { word: "Discourse", ipa: "ˈdɪskɔːrs", def: "Written or spoken communication or debate" },
                { word: "Substantiate", ipa: "səbˈstænʃieɪt", def: "To provide evidence to support or prove the truth of" },
                { word: "Rebuttal", ipa: "rɪˈbʌtəl", def: "A counter-argument or refutation of an opposing claim" },
                { word: "Fallacy", ipa: "ˈfæləsi", def: "A mistaken belief or a flawed argument based on unsound reasoning" },
                { word: "Corroborate", ipa: "kəˈrɒbəreɪt", def: "To confirm or give support to a statement or theory" },
                { word: "Cogent", ipa: "ˈkəʊdʒənt", def: "Clear, logical, and convincing" },
                { word: "Eloquence", ipa: "ˈeləkwəns", def: "Fluent, forceful, and persuasive speaking or writing" },
                { word: "Dialectic", ipa: "ˌdaɪəˈlektɪk", def: "The art of arriving at truth through logical discussion" }
            ],
            collocations: [
                { pair: ["Compelling", "argument"], context: "She presented a _____ argument in favour of reform.", distractors: ["strong", "big"] },
                { pair: ["Logical", "fallacy"], context: "His reasoning contained a _____ fallacy that undermined the claim.", distractors: ["wrong", "bad"] },
                { pair: ["Burden", "of proof"], context: "The _____ of proof lies with the prosecution.", distractors: ["weight", "load"] },
                { pair: ["Rhetorical", "device"], context: "Metaphor is a powerful _____ device in speechwriting.", distractors: ["speech", "writing"] },
                { pair: ["Straw", "man"], context: "Misrepresenting an opponent's view is called a _____ man argument.", distractors: ["weak", "false"] },
                { pair: ["Devil's", "advocate"], context: "Let me play _____'s advocate for a moment.", distractors: ["God's", "angel's"] },
                { pair: ["Critical", "thinking"], context: "Education should prioritise _____ thinking skills.", distractors: ["deep", "hard"] },
                { pair: ["Draw", "conclusions"], context: "We can _____ conclusions from the available evidence.", distractors: ["make", "pull"] },
                { pair: ["Cast", "doubt"], context: "New evidence has _____ doubt on the original theory.", distractors: ["thrown", "put"] },
                { pair: ["Sound", "reasoning"], context: "The verdict was based on _____ reasoning and clear evidence.", distractors: ["good", "right"] }
            ],
            pronunciation: {
                word_stress: [
                    { word: "RHET-o-ric", syllables: ["RHET", "o", "ric"], correct: 0 },
                    { word: "so-PHIS-try", syllables: ["so", "PHIS", "try"], correct: 1 },
                    { word: "DIS-course", syllables: ["DIS", "course"], correct: 0 },
                    { word: "sub-STAN-ti-ate", syllables: ["sub", "STAN", "ti", "ate"], correct: 1 },
                    { word: "re-BUT-tal", syllables: ["re", "BUT", "tal"], correct: 1 },
                    { word: "FAL-la-cy", syllables: ["FAL", "la", "cy"], correct: 0 },
                    { word: "cor-ROB-o-rate", syllables: ["cor", "ROB", "o", "rate"], correct: 1 },
                    { word: "CO-gent", syllables: ["CO", "gent"], correct: 0 },
                    { word: "EL-o-quence", syllables: ["EL", "o", "quence"], correct: 0 },
                    { word: "di-a-LEC-tic", syllables: ["di", "a", "LEC", "tic"], correct: 2 }
                ],
                sentence_stress: [
                    { sentence: "A compelling argument requires solid evidence.", stressed: ["compelling", "argument", "requires", "solid", "evidence"] },
                    { sentence: "Critical thinking skills are essential in modern education.", stressed: ["Critical", "thinking", "skills", "essential", "modern", "education"] },
                    { sentence: "The speaker used rhetorical devices to persuade the audience.", stressed: ["speaker", "rhetorical", "devices", "persuade", "audience"] },
                    { sentence: "Logical fallacies undermine the credibility of an argument.", stressed: ["Logical", "fallacies", "undermine", "credibility", "argument"] },
                    { sentence: "Evidence must be carefully evaluated before drawing conclusions.", stressed: ["Evidence", "carefully", "evaluated", "drawing", "conclusions"] }
                ]
            },
            writing: "Write a persuasive essay on whether social media platforms should be required to label AI-generated content. Structure your argument using the Toulmin model (claim, data, warrant, backing, qualifier, rebuttal). Use at least three rhetorical devices and address at least two counterarguments. Aim for 300+ words.",
            speaking: "You are participating in a formal debate on the motion: 'This house believes that persuasion is inherently manipulative.' Choose a side and prepare a 3-minute speech using ethos, pathos, and logos. Be prepared to respond to counterarguments from your opponent.",
            verb_patterns: {
                exercises: [
                    { sentence: "The professor urged his students _____ their arguments more rigorously.", options: ["substantiating", "to substantiate", "substantiate"], correct: 1 },
                    { sentence: "She denied _____ the evidence to support her claim.", options: ["to fabricate", "fabricating", "fabricate"], correct: 1 },
                    { sentence: "The committee recommended _____ the policy before implementation.", options: ["reviewing", "to review", "review"], correct: 0 },
                    { sentence: "He persuaded the board _____ additional funding for research.", options: ["allocating", "to allocate", "allocate"], correct: 1 },
                    { sentence: "They postponed _____ a decision until more data was available.", options: ["to make", "making", "make"], correct: 1 },
                    { sentence: "The analyst warned the investors _____ hastily.", options: ["not to act", "not acting", "not act"], correct: 0 },
                    { sentence: "I regret _____ you that your application has been rejected.", options: ["informing", "to inform", "inform"], correct: 1 },
                    { sentence: "The journalist admitted _____ the source's statement.", options: ["to misquote", "misquoting", "misquote"], correct: 1 },
                    { sentence: "The attorney encouraged the witness _____ truthfully.", options: ["testifying", "to testify", "testify"], correct: 1 },
                    { sentence: "We cannot risk _____ false conclusions from insufficient data.", options: ["to draw", "drawing", "draw"], correct: 1 }
                ]
            },
            functionalLanguage: {
                functionName: "Asking for Favours & Borrowing Things",
                description: "Master expressions that help you ask friends or peers for favours and borrow things naturally, without sounding awkward or demanding.",
                phrases: [
                    { phrase: "Do you think you could possibly...", def: "a highly natural, soft way to ask a friend to help you with a task", example: "Do you think you could possibly feed my cat this weekend while I'm away?" },
                    { phrase: "I hate to ask, but...", def: "a friendly disclaimer used when you feel a bit guilty for asking for a favor", example: "I hate to ask, but could you lend me twenty bucks until pay day?" },
                    { phrase: "Would you mind if I...", def: "a very casual, polite way to ask for permission to do something", example: "Would you mind if I crashed on your couch tonight after the concert?" },
                    { phrase: "I'd be forever in your debt!", def: "an exaggerated, highly colloquial way to show intense gratitude to a friend", example: "If you help me move this heavy wardrobe, I'd be forever in your debt!" }
                ],
                task: "You need a friend to pick you up from the airport at midnight. Write a casual WhatsApp message (2-3 sentences) using at least two of the colloquial phrases above."
            },
            videos: [
                { title: "The Art of Rhetoric — Persuasion Through Language", channel: "TED-Ed", duration: "4:47", url: "https://www.youtube.com/watch?v=3klMM9BkW5o" },
                { title: "How to Argue — Philosophical Reasoning", channel: "CrashCourse", duration: "10:07", url: "https://www.youtube.com/watch?v=NKEhdsnKKHs" },
                { title: "The Power of Rhetoric", channel: "BBC Ideas", duration: "4:02", url: "https://www.youtube.com/watch?v=vSfOewPBEz0" }
            ]
        },
        {
            id: 2,
            title: "Bioethics & Society",
            topic: "Ethical Dilemmas in Science",
            listening: {
                title: "Navigating the Moral Landscape of Genetic Engineering",
                transcript: "The advent of CRISPR-Cas9 gene-editing technology has ushered in an era of unprecedented possibilities and profound ethical quandaries. For the first time in human history, we possess the tools to rewrite the fundamental code of life with relative precision and affordability. This capability raises questions that transcend the boundaries of science and venture deep into the realm of philosophy, ethics, and social justice. On one hand, gene therapy holds the promise of eradicating devastating hereditary diseases such as sickle cell anaemia, cystic fibrosis, and Huntington's disease. Clinical trials have already demonstrated remarkable results, offering hope to millions of patients and their families. On the other hand, the prospect of germline editing—modifications that would be passed down to future generations—compels us to confront uncomfortable questions about consent, equity, and the very definition of what it means to be human. The spectre of so-called designer babies, where parents select desirable traits such as intelligence, athletic ability, or physical appearance, raises the alarming possibility of a new form of inequality predicated on genetic privilege. Critics warn that such developments could exacerbate existing social stratification, creating a dystopian divide between the genetically enhanced and those who cannot afford such modifications. Moreover, the ecological implications of gene drives—engineered genetic elements designed to spread rapidly through wild populations—remain largely unknown. While gene drives could potentially eliminate malaria-carrying mosquitoes, the unintended consequences of fundamentally altering an ecosystem could be catastrophic. As we navigate this moral landscape, the imperative for robust regulatory frameworks, transparent public debate, and interdisciplinary collaboration has never been greater.",
                questions: [
                    { q: "What technology has ushered in unprecedented possibilities?", options: ["Stem cell therapy", "CRISPR-Cas9", "Cloning technology"], correct: 1 },
                    { q: "What domain does genetic engineering's ethics transcend?", options: ["Only science", "Science into philosophy and ethics", "Only medicine"], correct: 1 },
                    { q: "Which diseases could gene therapy potentially eradicate?", options: ["Common colds", "Hereditary diseases", "Mental illnesses"], correct: 1 },
                    { q: "What is 'germline editing'?", options: ["Editing adult cells", "Modifications passed to future generations", "Temporary genetic changes"], correct: 1 },
                    { q: "What are 'designer babies'?", options: ["Babies born via IVF", "Babies with selected traits", "Cloned babies"], correct: 1 },
                    { q: "What could genetic privilege exacerbate?", options: ["Economic growth", "Social stratification", "Scientific research"], correct: 1 },
                    { q: "What are 'gene drives'?", options: ["Natural selection processes", "Engineered elements that spread through populations", "Laboratory experiments"], correct: 1 },
                    { q: "What could gene drives potentially eliminate?", options: ["All insects", "Malaria-carrying mosquitoes", "Bacteria"], correct: 1 },
                    { q: "What are the ecological implications of gene drives?", options: ["Well understood", "Largely unknown", "Completely harmless"], correct: 1 },
                    { q: "What is imperative according to the text?", options: ["Unrestricted research", "Robust regulatory frameworks", "Banning all gene editing"], correct: 1 }
                ]
            },
            reading: {
                title: "The Ethics of Enhancement: Where Do We Draw the Line?",
                text: "The distinction between therapeutic intervention and human enhancement represents one of the most contentious debates in contemporary bioethics. Therapeutic interventions aim to restore normal functioning—treating a disease, repairing an injury, or correcting a genetic defect. Enhancement, by contrast, seeks to augment human capabilities beyond what is considered the species-typical norm. While this distinction may seem conceptually clear, in practice it is fraught with ambiguity. Consider, for instance, the use of cognitive-enhancing drugs among university students. When a student with diagnosed ADHD takes methylphenidate (Ritalin) to achieve normal levels of concentration, most ethicists would classify this as therapy. But when a student without any cognitive impairment takes the same drug to gain a competitive advantage during examinations, the action falls squarely into the realm of enhancement.<br><br>The philosophical underpinnings of this debate draw on competing ethical frameworks. Utilitarian thinkers might argue that if an enhancement increases overall human wellbeing without causing harm, it should be permitted or even encouraged. Deontological ethicists, following the Kantian tradition, might object that certain enhancements violate the dignity of the person by treating human nature as something to be engineered rather than respected. Virtue ethicists might ask whether the practice of enhancement cultivates or undermines the character traits we consider admirable, such as perseverance, resilience, and authenticity.<br><br>The transhumanist movement, which advocates for the use of technology to fundamentally transform the human condition, argues that we have a moral obligation to pursue enhancement. They contend that just as we would not deny a person eyeglasses or a hearing aid, we should not prohibit technologies that could extend human lifespan, augment cognitive capacity, or eliminate suffering. Their opponents counter that there is a meaningful distinction between correcting a deficit and transcending human limitations altogether, and that the pursuit of perfection through technology could lead to a loss of the very qualities that make us recognisably human.<br><br>As biotechnology continues to advance at breakneck speed, these philosophical questions demand urgent practical answers. Policymakers, clinicians, and citizens alike must engage in rigorous, informed deliberation to determine where enhancement ends and hubris begins.",
                questions: [
                    { q: "What distinguishes therapy from enhancement?", options: ["Cost", "Restoring normal function vs. augmenting beyond it", "Doctor involvement"], correct: 1 },
                    { q: "Why is the therapy-enhancement distinction ambiguous?", options: ["Laws are unclear", "Practice blurs the line", "Doctors disagree"], correct: 1 },
                    { q: "What drug is mentioned as a cognitive enhancer?", options: ["Caffeine", "Methylphenidate (Ritalin)", "Modafinil"], correct: 1 },
                    { q: "What might utilitarians support?", options: ["Banning all enhancement", "Enhancement if it increases wellbeing", "Only medical therapy"], correct: 1 },
                    { q: "What do deontological ethicists object to?", options: ["All medicine", "Treating human nature as something to engineer", "Research funding"], correct: 1 },
                    { q: "What might virtue ethicists ask?", options: ["Is it affordable?", "Does it cultivate admirable character?", "Is it legal?"], correct: 1 },
                    { q: "What does the transhumanist movement advocate?", options: ["Rejecting all technology", "Using technology to transform human condition", "Preserving current limitations"], correct: 1 },
                    { q: "What comparison do transhumanists make?", options: ["Smartphones to meditation", "Eyeglasses to enhancement technologies", "Cars to bicycles"], correct: 1 },
                    { q: "What do opponents fear could be lost?", options: ["Economic stability", "Qualities that make us human", "Political power"], correct: 1 },
                    { q: "What demands urgent practical answers?", options: ["Economic questions", "Philosophical questions about enhancement", "Environmental concerns"], correct: 1 }
                ]
            },
            grammar: {
                title: "Inversion for Emphasis",
                explanation: "In formal English, we can invert the subject and auxiliary verb for emphasis, especially after negative or restrictive adverbials. Common triggers include: 'Never', 'Rarely', 'Seldom', 'Not only...but also', 'Under no circumstances', 'No sooner...than', 'Hardly...when', 'Only when/after/by'. The pattern is: Adverbial + auxiliary + subject + main verb.",
                example: "Never have I witnessed such a compelling argument. / Not only did she refute the claim, but she also presented new evidence.",
                quizzes: [
                    { question: "Rarely _____ such a controversial decision been made.", options: ["has", "have", "is"], correct: 0 },
                    { question: "Not only _____ the theory flawed, but it was also dangerous.", options: ["is", "was", "were"], correct: 1 },
                    { question: "Under no circumstances _____ this information be disclosed.", options: ["should", "will have", "is"], correct: 0 },
                    { question: "No sooner had the verdict been announced _____ protests erupted.", options: ["when", "than", "as"], correct: 1 },
                    { question: "Hardly _____ the experiment begun when complications arose.", options: ["has", "had", "have"], correct: 1 },
                    { question: "Only after extensive deliberation _____ the committee reach a consensus.", options: ["had", "did", "was"], correct: 1 },
                    { question: "Seldom _____ one encounter such a lucid explanation of quantum mechanics.", options: ["has", "does", "is"], correct: 1 },
                    { question: "Never before _____ technology advanced at such a dizzying pace.", options: ["has", "did", "was"], correct: 0 },
                    { question: "Not until the results were published _____ the significance become apparent.", options: ["has", "did", "was"], correct: 1 },
                    { question: "Only by collaborating across disciplines _____ we hope to solve this crisis.", options: ["can", "do", "are"], correct: 0 }
                ]
            },
            vocabulary: [
                { word: "Bioethics", ipa: "ˌbaɪəʊˈeθɪks", def: "The ethics of medical and biological research and practice" },
                { word: "Quandary", ipa: "ˈkwɒndəri", def: "A state of perplexity or uncertainty about what to do" },
                { word: "Germline", ipa: "ˈdʒɜːmlaɪn", def: "The sequence of germ cells that can be passed to offspring" },
                { word: "Stratification", ipa: "ˌstrætɪfɪˈkeɪʃən", def: "The arrangement of something into distinct layers or classes" },
                { word: "Transhumanism", ipa: "trænzˈhjuːmənɪzəm", def: "A movement advocating the use of technology to enhance human capacities" },
                { word: "Deontological", ipa: "ˌdiːɒntəˈlɒdʒɪkəl", def: "Relating to ethical duty and moral obligation rather than consequences" },
                { word: "Utilitarian", ipa: "juːˌtɪlɪˈteəriən", def: "Concerned with maximising overall happiness or wellbeing" },
                { word: "Dystopian", ipa: "dɪsˈtəʊpiən", def: "Relating to an imagined state of great suffering and injustice" },
                { word: "Augment", ipa: "ɔːɡˈment", def: "To make something greater by adding to it; to enhance" },
                { word: "Hubris", ipa: "ˈhjuːbrɪs", def: "Excessive pride or arrogance, often leading to downfall" }
            ],
            collocations: [
                { pair: ["Ethical", "dilemma"], context: "Genetic engineering presents a profound _____ dilemma.", distractors: ["moral", "big"] },
                { pair: ["Clinical", "trials"], context: "The drug must undergo rigorous _____ trials before approval.", distractors: ["medical", "lab"] },
                { pair: ["Informed", "consent"], context: "Patients must give _____ consent before any procedure.", distractors: ["written", "full"] },
                { pair: ["Regulatory", "framework"], context: "A robust _____ framework is needed to govern gene editing.", distractors: ["legal", "strict"] },
                { pair: ["Genetic", "modification"], context: "_____ modification of crops remains controversial.", distractors: ["DNA", "cell"] },
                { pair: ["Moral", "obligation"], context: "Do we have a _____ obligation to use technology to reduce suffering?", distractors: ["social", "legal"] },
                { pair: ["Unintended", "consequences"], context: "Gene drives could have _____ consequences for ecosystems.", distractors: ["bad", "serious"] },
                { pair: ["Slippery", "slope"], context: "Critics describe designer babies as a _____ slope argument.", distractors: ["dangerous", "steep"] },
                { pair: ["Stem", "cell"], context: "_____ cell research offers hope for treating degenerative diseases.", distractors: ["blood", "nerve"] },
                { pair: ["Public", "debate"], context: "The issue demands transparent _____ debate and scrutiny.", distractors: ["open", "wide"] }
            ],
            pronunciation: {
                word_stress: [
                    { word: "bi-o-ETH-ics", syllables: ["bi", "o", "ETH", "ics"], correct: 2 },
                    { word: "QUAN-da-ry", syllables: ["QUAN", "da", "ry"], correct: 0 },
                    { word: "GERM-line", syllables: ["GERM", "line"], correct: 0 },
                    { word: "strat-i-fi-CA-tion", syllables: ["strat", "i", "fi", "CA", "tion"], correct: 3 },
                    { word: "trans-HU-man-ism", syllables: ["trans", "HU", "man", "ism"], correct: 1 },
                    { word: "de-on-to-LOG-i-cal", syllables: ["de", "on", "to", "LOG", "i", "cal"], correct: 3 },
                    { word: "u-til-i-TAR-i-an", syllables: ["u", "til", "i", "TAR", "i", "an"], correct: 3 },
                    { word: "dys-TO-pi-an", syllables: ["dys", "TO", "pi", "an"], correct: 1 },
                    { word: "aug-MENT", syllables: ["aug", "MENT"], correct: 1 },
                    { word: "HU-bris", syllables: ["HU", "bris"], correct: 0 }
                ],
                sentence_stress: [
                    { sentence: "Genetic engineering raises profound ethical questions.", stressed: ["Genetic", "engineering", "raises", "profound", "ethical", "questions"] },
                    { sentence: "Never before has technology advanced at such a pace.", stressed: ["Never", "technology", "advanced", "pace"] },
                    { sentence: "The distinction between therapy and enhancement is ambiguous.", stressed: ["distinction", "therapy", "enhancement", "ambiguous"] },
                    { sentence: "Regulatory frameworks must keep pace with scientific progress.", stressed: ["Regulatory", "frameworks", "keep", "pace", "scientific", "progress"] },
                    { sentence: "Informed consent is the cornerstone of medical ethics.", stressed: ["Informed", "consent", "cornerstone", "medical", "ethics"] }
                ]
            },
            writing: "Write a discursive essay examining whether genetic enhancement should be made available to all citizens or restricted to therapeutic use only. Consider the perspectives of utilitarian, deontological, and virtue ethics. Include a nuanced discussion of the concept of 'genetic justice' and its implications for social equality. Aim for 300+ words.",
            speaking: "A pharmaceutical company has developed a safe gene therapy that can increase human IQ by 30 points. It costs $100,000 per treatment. As a member of a government ethics committee, present your recommendation on whether this treatment should be: (a) approved for anyone who can afford it, (b) subsidised for all citizens, or (c) banned entirely. Justify your position.",
            verb_patterns: {
                exercises: [
                    { sentence: "The ethics committee forbade researchers _____ the experiment.", options: ["to continue", "continuing", "continue"], correct: 0 },
                    { sentence: "Scientists risk _____ public trust if they proceed without transparency.", options: ["to lose", "losing", "lose"], correct: 1 },
                    { sentence: "The government mandated all clinics _____ informed consent protocols.", options: ["to follow", "following", "follow"], correct: 0 },
                    { sentence: "Regulatory bodies cannot afford _____ behind technological advances.", options: ["to fall", "falling", "fall"], correct: 0 },
                    { sentence: "The bioethicist advocated _____ stricter guidelines for gene therapy.", options: ["to implement", "implementing", "implement"], correct: 1 },
                    { sentence: "Patients deserve _____ about all potential risks.", options: ["to be informed", "being informed", "be informed"], correct: 0 },
                    { sentence: "She resisted _____ to pressure from the pharmaceutical lobby.", options: ["to give in", "giving in", "give in"], correct: 1 },
                    { sentence: "The panel resolved _____ the matter at the next session.", options: ["to address", "addressing", "address"], correct: 0 },
                    { sentence: "We cannot justify _____ millions on cosmetic genetic procedures.", options: ["to spend", "spending", "spend"], correct: 1 },
                    { sentence: "The director enabled the team _____ cutting-edge research.", options: ["conducting", "to conduct", "conduct"], correct: 1 }
                ]
            },
            functionalLanguage: {
                functionName: "Talking About Gossip & Social Drama",
                description: "Learn natural, peer-to-peer expressions to discuss relationship dynamics, secrets, and resolving misunderstandings with friends.",
                phrases: [
                    { phrase: "To talk behind someone's back", def: "to discuss or criticise someone when they are not present to defend themselves", example: "It really bothers me when people talk behind my back instead of telling me to my face." },
                    { phrase: "Between you and me...", def: "used to introduce a secret or piece of gossip that should not be shared with others", example: "Between you and me, I don't think he actually passed that exam." },
                    { phrase: "To clear the air", def: "to discuss a misunderstanding or argument openly to remove anger or tension", example: "We had a massive argument yesterday, but we sat down today and cleared the air." },
                    { phrase: "A two-faced person", def: "someone who acts friendly to your face but says mean things when you are not around", example: "Watch out for him; he acts like your best friend but he's incredibly two-faced." }
                ],
                task: "A friend has been acting cold towards you because of a rumor they heard. Write a casual message to them (3 sentences) proposing to clear the air, using at least two phrases from today's lesson."
            },
            videos: [
                { title: "Genetic Engineering Will Change Everything Forever – CRISPR", channel: "Kurzgesagt", duration: "16:03", url: "https://www.youtube.com/watch?v=jAhjPd4uNFY" },
                { title: "The Ethical Dilemma of Designer Babies", channel: "TED", duration: "18:17", url: "https://www.youtube.com/watch?v=nOHbn8Q1fBM" },
                { title: "What Is Bioethics?", channel: "Georgetown University", duration: "6:29", url: "https://www.youtube.com/watch?v=bCgqjMqOif4" }
            ]
        }
    ]
};
