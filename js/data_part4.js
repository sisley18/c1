/**
 * C1 Advanced English Course - Data Part 4
 * Units 7-8: Philosophy of Knowledge, Global Media & Narrative
 */

if (!window.courseData) window.courseData = { units: [] };

courseData.units.push(
    {
        id: 7,
        title: "Philosophy of Knowledge",
        topic: "Epistemology & Critical Thinking",
        listening: {
            title: "How Do We Know What We Know?",
            transcript: "Epistemology, the branch of philosophy concerned with the nature, sources, and limits of human knowledge, has grappled with fundamental questions for over two and a half millennia. What distinguishes genuine knowledge from mere belief? How can we justify our claims to know something? Is certainty achievable, or must all knowledge remain provisional? The ancient Greek philosopher Plato defined knowledge as justified true belief—a formulation that seemed satisfyingly rigorous for centuries until the American philosopher Edmund Gettier published a devastatingly concise three-page paper in 1963 demonstrating that one could hold a belief that was both true and justified yet still could not reasonably be called knowledge. The so-called Gettier problem sent shockwaves through epistemology and sparked decades of attempts to repair or replace the classical definition. Rationalists, following in the tradition of Descartes, maintain that reason is the primary source of knowledge and that certain truths can be known independently of sensory experience. Empiricists, drawing on the legacy of Hume and Locke, counter that all knowledge ultimately derives from observation and experience. The pragmatist tradition, associated with American philosophers like William James and John Dewey, takes a different approach entirely, evaluating knowledge claims not by their correspondence to abstract truth but by their practical utility and consequences. In the contemporary landscape, naturalized epistemology, championed by Willard Van Orman Quine, argues that epistemology should be understood as a branch of empirical science rather than a purely philosophical enterprise. Meanwhile, social epistemologists examine how knowledge is produced, distributed, and validated within communities and institutions, raising critical questions about epistemic justice and the politics of knowledge production.",
            questions: [
                { q: "What is epistemology?", options: ["The study of ethics", "The branch of philosophy concerning knowledge", "The study of logic"], correct: 1 },
                { q: "How did Plato define knowledge?", options: ["True opinion", "Justified true belief", "Sensory experience"], correct: 1 },
                { q: "What did Gettier's 1963 paper demonstrate?", options: ["Plato was right", "JTB can fail as a definition of knowledge", "Empiricism is correct"], correct: 1 },
                { q: "What do rationalists maintain?", options: ["Experience is primary", "Reason is the primary source of knowledge", "Knowledge is impossible"], correct: 1 },
                { q: "What legacy do empiricists draw on?", options: ["Plato and Aristotle", "Hume and Locke", "Descartes and Kant"], correct: 1 },
                { q: "How do pragmatists evaluate knowledge?", options: ["By abstract truth", "By practical utility and consequences", "By mathematical proof"], correct: 1 },
                { q: "Who championed naturalized epistemology?", options: ["William James", "Willard Van Orman Quine", "John Dewey"], correct: 1 },
                { q: "What do social epistemologists examine?", options: ["Individual cognition only", "How knowledge is produced in communities", "Scientific experiments"], correct: 1 },
                { q: "How long was Gettier's famous paper?", options: ["One page", "Three pages", "Twenty pages"], correct: 1 },
                { q: "What question does epistemic justice raise?", options: ["Is truth objective?", "Who gets to produce and validate knowledge?", "Is logic reliable?"], correct: 1 }
            ]
        },
        reading: {
            title: "The Problem of Scepticism and the Pursuit of Certainty",
            text: "The philosophical tradition of scepticism—the position that genuine knowledge is either difficult or impossible to achieve—has served as both the nemesis and the catalyst of epistemological inquiry since antiquity. The ancient Pyrrhonian sceptics advocated a radical suspension of judgement on all matters, arguing that for every argument in favour of a proposition, an equally compelling argument could be advanced against it. This state of equipollence, they claimed, naturally led to epoché—a suspension of belief that, paradoxically, resulted in a state of tranquillity known as ataraxia.<br><br>René Descartes, the seventeenth-century French philosopher often regarded as the father of modern philosophy, took scepticism not as a destination but as a method. In his celebrated Meditations on First Philosophy, Descartes systematically doubted everything he had previously believed—the testimony of his senses, the truths of mathematics, even the existence of the external world—in pursuit of a foundation of knowledge so certain that it could withstand the most radical sceptical challenge. His famous conclusion, 'Cogito, ergo sum' ('I think, therefore I am'), represented what he believed to be an indubitable truth: the very act of doubting proves the existence of a thinking being.<br><br>However, Descartes' quest for absolute certainty has been questioned by subsequent philosophers. The pragmatist Charles Sanders Peirce argued that demanding absolute certainty sets an unreasonably high standard for knowledge. In science and everyday life, we regularly act on beliefs that are well-supported by evidence even though they fall short of logical certainty. Karl Popper's falsificationist epistemology suggests that scientific knowledge advances not through verification but through the rigorous attempt to refute hypotheses—a view that embraces the provisional nature of all empirical claims.<br><br>Contemporary epistemologists increasingly recognise that knowledge exists on a spectrum rather than as a binary state. Bayesian epistemology, which models belief as probabilities updated in light of new evidence, offers a mathematically rigorous framework for understanding how rational agents should revise their beliefs. This approach acknowledges that while absolute certainty may be unattainable, degrees of justified confidence can be systematically assessed and improved.",
            questions: [
                { q: "What is Pyrrhonian scepticism?", options: ["A type of empiricism", "Radical suspension of judgement", "A form of rationalism"], correct: 1 },
                { q: "What is 'epoché'?", options: ["A type of argument", "Suspension of belief", "A logical proof"], correct: 1 },
                { q: "What state did suspension of belief lead to?", options: ["Anxiety", "Ataraxia (tranquillity)", "Confusion"], correct: 1 },
                { q: "What was Descartes' approach to scepticism?", options: ["He rejected it entirely", "He used it as a method", "He ignored it"], correct: 1 },
                { q: "What does 'Cogito, ergo sum' mean?", options: ["I doubt, therefore I fail", "I think, therefore I am", "I know, therefore I exist"], correct: 1 },
                { q: "What did Peirce argue about absolute certainty?", options: ["It's easily achievable", "It sets an unreasonably high standard", "It's the only standard"], correct: 1 },
                { q: "What is Popper's falsificationist approach?", options: ["Proving theories true", "Attempting to refute hypotheses", "Ignoring evidence"], correct: 1 },
                { q: "What does Bayesian epistemology model?", options: ["Truth as absolute", "Belief as probabilities", "Knowledge as memory"], correct: 1 },
                { q: "Is knowledge seen as binary by contemporary epistemologists?", options: ["Yes", "No, it exists on a spectrum", "Only in science"], correct: 1 },
                { q: "What can be systematically assessed according to the text?", options: ["Absolute truth", "Degrees of justified confidence", "Emotional responses"], correct: 1 }
            ]
        },
        grammar: {
            title: "Ellipsis & Substitution",
            explanation: "Ellipsis (leaving out words) and substitution (replacing words with alternatives like 'so,' 'not,' 'one,' 'do') are cohesive devices used to avoid repetition in formal and informal English. Common patterns: 'I think so / I don't think so,' 'She can play the piano and he can too / he can as well,' 'If so / If not,' using 'one/ones' as noun substitutes, and auxiliary ellipsis after 'and,' 'but,' 'or.'",
            example: "'Are they coming?' 'I believe so.' (= I believe they are coming.) / She speaks French fluently and her sister does too. (= her sister speaks French fluently too.)",
            quizzes: [
                { question: "'Will the project succeed?' 'I certainly hope _____.'", options: ["it", "so", "that"], correct: 1 },
                { question: "She has published extensively and her colleague has _____.", options: ["too", "so", "done"], correct: 0 },
                { question: "'Is the theory valid?' 'I believe _____, but further testing is needed.'", options: ["it", "so", "this"], correct: 1 },
                { question: "The blue theory is interesting but the red _____ is more convincing.", options: ["theory", "one", "it"], correct: 1 },
                { question: "He could have submitted the paper on time but chose not _____.", options: ["doing", "so", "to"], correct: 2 },
                { question: "'Do you think the hypothesis is correct?' 'It would appear _____.'", options: ["that", "so", "this"], correct: 1 },
                { question: "Some philosophers accept this view; others do _____.", options: ["too", "so", "not"], correct: 2 },
                { question: "The experiment may fail. If _____, we will redesign the protocol.", options: ["so", "it does", "not"], correct: 0 },
                { question: "A: 'Can empiricism explain everything?' B: 'I'm afraid _____.'", options: ["no", "don't", "not"], correct: 2 },
                { question: "She wanted to attend the lecture and I did _____.", options: ["so", "too", "also"], correct: 1 }
            ]
        },
        vocabulary: [
            { word: "Epistemology", ipa: "ɪˌpɪstɪˈmɒlədʒi", def: "The theory of knowledge, concerned with its nature and scope" },
            { word: "Scepticism", ipa: "ˈskeptɪsɪzəm", def: "A doubting or questioning attitude towards knowledge claims" },
            { word: "Empiricism", ipa: "ɪmˈpɪrɪsɪzəm", def: "The theory that all knowledge derives from sensory experience" },
            { word: "Rationalism", ipa: "ˈræʃənəlɪzəm", def: "The theory that reason is the chief source of knowledge" },
            { word: "Pragmatism", ipa: "ˈpræɡmətɪzəm", def: "Evaluating beliefs by their practical consequences and utility" },
            { word: "Falsifiable", ipa: "ˈfɔːlsɪfaɪəbəl", def: "Capable of being proven wrong by observation or experiment" },
            { word: "Provisional", ipa: "prəˈvɪʒənəl", def: "Arranged or existing for the present, possibly to be changed" },
            { word: "Indubitable", ipa: "ɪnˈdjuːbɪtəbəl", def: "Impossible to doubt; unquestionable" },
            { word: "Conjecture", ipa: "kənˈdʒektʃər", def: "An opinion or conclusion formed on incomplete information" },
            { word: "Axiom", ipa: "ˈæksiəm", def: "A statement taken to be true as the basis for reasoning" }
        ],
        collocations: [
            { pair: ["Justified", "belief"], context: "Knowledge is traditionally defined as _____ true belief.", distractors: ["correct", "right"] },
            { pair: ["Suspension", "of judgement"], context: "The sceptic advocates _____ of judgement on all matters.", distractors: ["withholding", "stopping"] },
            { pair: ["Burden", "of proof"], context: "The _____ of proof rests with the person making the claim.", distractors: ["weight", "duty"] },
            { pair: ["Common", "sense"], context: "Philosophers often challenge _____ sense assumptions.", distractors: ["normal", "basic"] },
            { pair: ["Thought", "experiment"], context: "The trolley problem is a famous _____ experiment in ethics.", distractors: ["mind", "brain"] },
            { pair: ["First", "principles"], context: "Descartes sought knowledge derived from _____ principles.", distractors: ["basic", "main"] },
            { pair: ["Empirical", "observation"], context: "Scientific knowledge is grounded in _____ observation.", distractors: ["real", "direct"] },
            { pair: ["Logical", "deduction"], context: "Through _____ deduction, we can derive new conclusions.", distractors: ["careful", "correct"] },
            { pair: ["Intellectual", "humility"], context: "_____ humility is the recognition of the limits of one's knowledge.", distractors: ["Academic", "Mental"] },
            { pair: ["Critical", "inquiry"], context: "Higher education should promote _____ inquiry and independent thought.", distractors: ["deep", "hard"] }
        ],
        pronunciation: {
            word_stress: [
                { word: "e-pis-te-MOL-o-gy", syllables: ["e", "pis", "te", "MOL", "o", "gy"], correct: 3 },
                { word: "SCEP-ti-cism", syllables: ["SCEP", "ti", "cism"], correct: 0 },
                { word: "em-PIR-i-cism", syllables: ["em", "PIR", "i", "cism"], correct: 1 },
                { word: "RA-tion-al-ism", syllables: ["RA", "tion", "al", "ism"], correct: 0 },
                { word: "PRAG-ma-tism", syllables: ["PRAG", "ma", "tism"], correct: 0 },
                { word: "FAL-si-fi-a-ble", syllables: ["FAL", "si", "fi", "a", "ble"], correct: 0 },
                { word: "pro-VI-sion-al", syllables: ["pro", "VI", "sion", "al"], correct: 1 },
                { word: "in-DU-bi-ta-ble", syllables: ["in", "DU", "bi", "ta", "ble"], correct: 1 },
                { word: "con-JEC-ture", syllables: ["con", "JEC", "ture"], correct: 1 },
                { word: "AX-i-om", syllables: ["AX", "i", "om"], correct: 0 }
            ],
            sentence_stress: [
                { sentence: "How do we distinguish knowledge from mere opinion?", stressed: ["distinguish", "knowledge", "mere", "opinion"] },
                { sentence: "Descartes sought an indubitable foundation for human knowledge.", stressed: ["Descartes", "sought", "indubitable", "foundation", "human", "knowledge"] },
                { sentence: "Scientific theories must be falsifiable to be meaningful.", stressed: ["Scientific", "theories", "falsifiable", "meaningful"] },
                { sentence: "I believe so, but further evidence is certainly needed.", stressed: ["believe", "further", "evidence", "certainly", "needed"] },
                { sentence: "Intellectual humility requires acknowledging the limits of understanding.", stressed: ["Intellectual", "humility", "requires", "acknowledging", "limits", "understanding"] }
            ]
        },
        writing: "Write a philosophical essay addressing the question: 'Is absolute certainty achievable, or must all knowledge remain provisional?' Compare the positions of Descartes (rationalist pursuit of certainty), Hume (empiricist scepticism), and Popper (falsificationism). Use ellipsis and substitution for cohesive, elegant prose. Conclude with your own reasoned position. Aim for 300+ words.",
        speaking: "You are moderating a panel discussion at a philosophy conference. Three speakers represent rationalism, empiricism, and pragmatism respectively. Briefly present each position, then offer your own synthesis explaining which approach you find most compelling for navigating the challenges of the information age, and why.",
        verb_patterns: {
            exercises: [
                { sentence: "Descartes endeavoured _____ a foundation of certain knowledge.", options: ["establishing", "to establish", "establish"], correct: 1 },
                { sentence: "The empiricists insisted on _____ all claims through observation.", options: ["verifying", "to verify", "verify"], correct: 0 },
                { sentence: "Philosophers tend _____ assumptions that most people take for granted.", options: ["to question", "questioning", "question"], correct: 0 },
                { sentence: "She refrained from _____ any conclusions until all evidence was gathered.", options: ["to draw", "drawing", "draw"], correct: 1 },
                { sentence: "The professor expected students _____ the primary sources before class.", options: ["reading", "to read", "read"], correct: 1 },
                { sentence: "He acknowledged _____ overlooked a crucial flaw in his argument.", options: ["to have", "having", "have"], correct: 1 },
                { sentence: "They struggled _____ an adequate definition of knowledge.", options: ["to formulate", "formulating", "formulate"], correct: 0 },
                { sentence: "Some philosophers advocate _____ traditional epistemology entirely.", options: ["to abandon", "abandoning", "abandon"], correct: 1 },
                { sentence: "She challenged the audience _____ their most fundamental beliefs.", options: ["questioning", "to question", "question"], correct: 1 },
                { sentence: "The sceptic refused _____ any proposition without rigorous justification.", options: ["accepting", "to accept", "accept"], correct: 1 }
            ]
        },
        functionalLanguage: {
            functionName: "Travel Hassles & Getting Lost",
            description: "Learn useful, highly colloquial expressions to talk about losing your way, packing tips, and planning spontaneous trips with peers.",
            phrases: [
                { phrase: "To get lost", def: "to lose one's way or wander without knowing the correct direction in a new place", example: "We got completely lost trying to find that local pizzeria in the narrow streets of Rome." },
                { phrase: "Off the beaten track", def: "refers to a place that is isolated, quiet, or situated far away from popular tourist areas", example: "I prefer staying in small guest houses that are completely off the beaten track." },
                { phrase: "To travel light", def: "to make a journey carrying only a small amount of luggage or bags", example: "Since we are changing hotels every night, it's highly recommended to travel light." },
                { phrase: "To hit the road", def: "a highly natural, colloquial way to announce that you are starting a journey or leaving on a trip", example: "Pack your backpack and get your sunglasses ready, it's time to hit the road!" }
            ],
            task: "You are planning a road trip with your friends but one friend wants to bring three huge suitcases. Write a friendly message (3 sentences) encouraging them to travel light, using at least two phrases above."
        },
        videos: [
            { title: "What Is Knowledge? — Crash Course Philosophy", channel: "CrashCourse", duration: "10:04", url: "https://www.youtube.com/watch?v=kXhJ3hHK9hQ" },
            { title: "Descartes' Meditations — Philosophy Explained", channel: "The School of Life", duration: "7:12", url: "https://www.youtube.com/watch?v=CAjWUrwvxs4" },
            { title: "Karl Popper's Falsificationism", channel: "Wireless Philosophy", duration: "8:46", url: "https://www.youtube.com/watch?v=-X8Xfl0JdTQ" }
        ]
    },
    {
        id: 8,
        title: "Global Media & Narrative",
        topic: "Journalism, Propaganda & the Construction of Truth",
        listening: {
            title: "The Post-Truth Landscape: Navigating Misinformation",
            transcript: "In 2016, Oxford Dictionaries selected 'post-truth' as its Word of the Year, defining it as an adjective relating to circumstances in which objective facts are less influential in shaping public opinion than appeals to emotion and personal belief. This linguistic milestone reflected a profound shift in the information landscape that had been brewing for decades but accelerated dramatically with the proliferation of social media platforms and the fragmentation of traditional news ecosystems. In the post-truth era, the distinction between fact and fiction has become increasingly difficult for ordinary citizens to navigate. The sheer volume of information—and misinformation—that floods digital channels on a daily basis overwhelms the cognitive resources of even the most diligent media consumers. Confirmation bias leads us to share and engage with content that aligns with our pre-existing views, while algorithms optimised for engagement systematically promote sensational, emotionally charged content over nuanced, factual reporting. The consequences of this epistemological crisis are far-reaching. Conspiracy theories that would once have remained on the fringes of public discourse now command mainstream audiences. Trust in traditional media institutions has plummeted to historic lows in many democracies. Political actors have learned to exploit the information chaos, deploying sophisticated disinformation campaigns that blur the line between legitimate debate and deliberate deception. Fact-checking organisations like Snopes, PolitiFact, and Full Fact have proliferated in response, but they face an asymmetric battle: a single misleading headline can circulate to millions before a careful correction reaches thousands. Education experts argue that the antidote to post-truth politics lies not in censorship but in the systematic cultivation of media literacy skills, enabling citizens to evaluate sources, identify logical fallacies, and distinguish between evidence-based reporting and propaganda.",
            questions: [
                { q: "When was 'post-truth' selected as Word of the Year?", options: ["2014", "2016", "2018"], correct: 1 },
                { q: "What does 'post-truth' relate to?", options: ["When facts matter most", "When emotions outweigh facts", "When truth is universal"], correct: 1 },
                { q: "What accelerated the post-truth era?", options: ["Print media", "Social media and news fragmentation", "Television"], correct: 1 },
                { q: "What do algorithms optimised for engagement promote?", options: ["Balanced reporting", "Sensational content over nuanced reporting", "Academic research"], correct: 1 },
                { q: "What has happened to trust in traditional media?", options: ["It has increased", "It has plummeted to historic lows", "It remains stable"], correct: 1 },
                { q: "What are Snopes and PolitiFact?", options: ["News agencies", "Fact-checking organisations", "Social media platforms"], correct: 1 },
                { q: "What challenge do fact-checkers face?", options: ["Too few claims to check", "Misinformation spreads faster than corrections", "Lack of technology"], correct: 1 },
                { q: "What do education experts advocate?", options: ["Censorship", "Media literacy skills", "Banning social media"], correct: 1 },
                { q: "What have political actors learned to exploit?", options: ["Educational systems", "Information chaos", "Military power"], correct: 1 },
                { q: "What has happened to conspiracy theories?", options: ["They have disappeared", "They command mainstream audiences", "They only exist online"], correct: 1 }
            ]
        },
        reading: {
            title: "Manufacturing Consent: Media Ownership and the Gatekeeping Function",
            text: "The relationship between media ownership and editorial content has been a subject of intense scholarly debate since Noam Chomsky and Edward Herman published their seminal work Manufacturing Consent: The Political Economy of the Mass Media in 1988. Their 'propaganda model' of media identifies five 'filters' through which news is processed before reaching the public: ownership concentration, advertising dependence, reliance on official sources, the threat of 'flak' (organised negative responses to media content), and ideological framing. Chomsky and Herman argue that these structural factors systematically produce coverage that serves the interests of economic and political elites, not through overt censorship but through the unconscious internalisation of acceptable limits of debate.<br><br>The concentration of media ownership has intensified dramatically since the book's publication. A handful of conglomerates—including Comcast, Disney, News Corp, and Bertelsmann—now control a significant share of global media production and distribution. Critics argue that this consolidation narrows the range of perspectives available to the public and creates conflicts of interest when media companies are owned by corporations with extensive holdings in other industries. When a media outlet's parent company has billions invested in defence contracts or fossil fuels, can we expect objective coverage of military interventions or climate policy?<br><br>The digital revolution was initially hailed as the great democratiser of information—a force that would break the stranglehold of media gatekeepers and give every citizen a platform. And indeed, the internet has enabled remarkable innovations in citizen journalism, independent media, and collaborative fact-checking. However, the emergence of a new class of digital gatekeepers—Google, Meta, and other platform companies whose algorithms determine what billions of people see—has complicated this optimistic narrative. These platforms exercise enormous editorial power not through traditional editorial judgement but through algorithmic curation, creating a form of gatekeeping that is far less transparent and far less accountable than its predecessor.<br><br>The challenge for democratic societies is to preserve the emancipatory potential of digital media while developing governance frameworks that ensure transparency, accountability, and genuine pluralism in the public sphere.",
            questions: [
                { q: "Who wrote Manufacturing Consent?", options: ["Rupert Murdoch", "Chomsky and Herman", "Joseph Nye"], correct: 1 },
                { q: "How many filters does the propaganda model identify?", options: ["Three", "Five", "Seven"], correct: 1 },
                { q: "What is 'flak' in the propaganda model?", options: ["Advertising", "Organised negative responses to media", "Government funding"], correct: 1 },
                { q: "What has happened to media ownership since 1988?", options: ["It has diversified", "Concentration has intensified", "It has remained stable"], correct: 1 },
                { q: "What does ownership concentration narrow?", options: ["Revenue", "The range of perspectives available", "Technology choices"], correct: 1 },
                { q: "What was the internet initially hailed as?", options: ["A threat to democracy", "The great democratiser of information", "An entertainment tool"], correct: 1 },
                { q: "What are the new digital gatekeepers?", options: ["Traditional newspapers", "Google, Meta, and platform companies", "Government agencies"], correct: 1 },
                { q: "How do platforms exercise editorial power?", options: ["Through editors", "Through algorithmic curation", "Through journalists"], correct: 1 },
                { q: "What is the concern about algorithmic gatekeeping?", options: ["It's too slow", "It's less transparent and accountable", "It's too expensive"], correct: 1 },
                { q: "What must democratic societies preserve?", options: ["Traditional media only", "The emancipatory potential of digital media", "Government control of media"], correct: 1 }
            ]
        },
        grammar: {
            title: "Nominalization",
            explanation: "Nominalization transforms verbs and adjectives into nouns, creating a more formal, academic style. It allows complex processes to be expressed concisely. Common suffixes include: -tion/-sion (investigate → investigation), -ment (develop → development), -ance/-ence (rely → reliance), -ity (complex → complexity), -ness (aware → awareness). Nominalization is essential in academic writing for precision and formality.",
            example: "'The media concentrated ownership' → 'The concentration of media ownership intensified.' / 'People rely on social media for news' → 'The reliance on social media for news has increased.'",
            quizzes: [
                { question: "The _____ of media ownership has narrowed perspectives. (concentrate)", options: ["concentrating", "concentration", "concentrated"], correct: 1 },
                { question: "The _____ of fake news poses a threat to democracy. (proliferate)", options: ["proliferating", "proliferation", "proliferated"], correct: 1 },
                { question: "Public _____ of the media has declined sharply. (trust → noun)", options: ["trusting", "trust", "trustworthy"], correct: 1 },
                { question: "The _____ of these platforms is largely unregulated. (govern → noun)", options: ["government", "governance", "governing"], correct: 1 },
                { question: "Greater _____ in editorial decisions is urgently needed. (transparent → noun)", options: ["transparence", "transparency", "transparent"], correct: 1 },
                { question: "The _____ between fact and opinion has become blurred. (distinct → noun)", options: ["distinctness", "distinction", "distinctive"], correct: 1 },
                { question: "Media _____ skills enable citizens to evaluate sources. (literate → noun)", options: ["literating", "literature", "literacy"], correct: 2 },
                { question: "The _____ of algorithms determines what we see online. (curate → noun)", options: ["curating", "curation", "curated"], correct: 1 },
                { question: "The _____ of trust has severe consequences for democracy. (erode → noun)", options: ["eroding", "erosion", "eroded"], correct: 1 },
                { question: "Digital _____ has transformed the information landscape. (innovate → noun)", options: ["innovating", "innovation", "innovative"], correct: 1 }
            ]
        },
        vocabulary: [
            { word: "Disinformation", ipa: "ˌdɪsɪnfəˈmeɪʃən", def: "False information deliberately spread to deceive" },
            { word: "Propaganda", ipa: "ˌprɒpəˈɡændə", def: "Information used to promote a particular political cause or point of view" },
            { word: "Accountability", ipa: "əˌkaʊntəˈbɪləti", def: "The fact of being responsible and answerable for actions" },
            { word: "Pluralism", ipa: "ˈplʊərəlɪzəm", def: "A system allowing the coexistence of diverse viewpoints and groups" },
            { word: "Censorship", ipa: "ˈsensəʃɪp", def: "The suppression of speech or information deemed objectionable" },
            { word: "Conglomerate", ipa: "kənˈɡlɒmərət", def: "A large corporation formed by merging different businesses" },
            { word: "Objectivity", ipa: "ˌɒbdʒekˈtɪvɪti", def: "Judgement based on observable facts rather than personal bias" },
            { word: "Sensationalism", ipa: "senˈseɪʃənəlɪzəm", def: "Presenting stories in a shocking way to provoke interest" },
            { word: "Algorithmic", ipa: "ˌælɡəˈrɪðmɪk", def: "Relating to a process or set of rules followed by a computer" },
            { word: "Corroboration", ipa: "kəˌrɒbəˈreɪʃən", def: "Evidence that confirms or supports a statement or theory" }
        ],
        collocations: [
            { pair: ["Fake", "news"], context: "The spread of _____ news undermines democratic processes.", distractors: ["false", "wrong"] },
            { pair: ["Media", "literacy"], context: "_____ literacy should be taught in every school.", distractors: ["News", "Digital"] },
            { pair: ["Freedom", "of speech"], context: "_____ of speech is a fundamental democratic right.", distractors: ["Liberty", "Right"] },
            { pair: ["Investigative", "journalism"], context: "_____ journalism exposes corruption and abuses of power.", distractors: ["Research", "Detective"] },
            { pair: ["Echo", "chamber"], context: "Social media creates _____ chambers that reinforce beliefs.", distractors: ["sound", "repeat"] },
            { pair: ["Source", "credibility"], context: "Always evaluate _____ credibility before sharing information.", distractors: ["news", "data"] },
            { pair: ["Editorial", "independence"], context: "_____ independence is essential for trustworthy journalism.", distractors: ["News", "Press"] },
            { pair: ["Public", "opinion"], context: "Media plays a powerful role in shaping _____ opinion.", distractors: ["general", "common"] },
            { pair: ["Breaking", "news"], context: "_____ news alerts often prioritise speed over accuracy.", distractors: ["Latest", "New"] },
            { pair: ["Press", "freedom"], context: "_____ freedom is consistently under threat in authoritarian regimes.", distractors: ["Media", "News"] }
        ],
        pronunciation: {
            word_stress: [
                { word: "dis-in-for-MA-tion", syllables: ["dis", "in", "for", "MA", "tion"], correct: 3 },
                { word: "pro-pa-GAN-da", syllables: ["pro", "pa", "GAN", "da"], correct: 2 },
                { word: "ac-count-a-BIL-i-ty", syllables: ["ac", "count", "a", "BIL", "i", "ty"], correct: 3 },
                { word: "PLUR-al-ism", syllables: ["PLUR", "al", "ism"], correct: 0 },
                { word: "CEN-sor-ship", syllables: ["CEN", "sor", "ship"], correct: 0 },
                { word: "con-GLOM-er-ate", syllables: ["con", "GLOM", "er", "ate"], correct: 1 },
                { word: "ob-jec-TIV-i-ty", syllables: ["ob", "jec", "TIV", "i", "ty"], correct: 2 },
                { word: "sen-SA-tion-al-ism", syllables: ["sen", "SA", "tion", "al", "ism"], correct: 1 },
                { word: "al-go-RITH-mic", syllables: ["al", "go", "RITH", "mic"], correct: 2 },
                { word: "cor-rob-or-A-tion", syllables: ["cor", "rob", "or", "A", "tion"], correct: 3 }
            ],
            sentence_stress: [
                { sentence: "The concentration of media ownership narrows public discourse.", stressed: ["concentration", "media", "ownership", "narrows", "public", "discourse"] },
                { sentence: "Algorithmic curation determines what billions of people see.", stressed: ["Algorithmic", "curation", "determines", "billions", "people", "see"] },
                { sentence: "Media literacy is the most effective defence against misinformation.", stressed: ["Media", "literacy", "most", "effective", "defence", "misinformation"] },
                { sentence: "Investigative journalism holds the powerful to account.", stressed: ["Investigative", "journalism", "holds", "powerful", "account"] },
                { sentence: "The erosion of trust in institutions threatens democratic governance.", stressed: ["erosion", "trust", "institutions", "threatens", "democratic", "governance"] }
            ]
        },
        writing: "Write an analytical essay examining whether social media platforms should be classified as publishers (legally responsible for content) or platforms (neutral carriers of user content). Use nominalization extensively to create an academic register. Discuss the implications for freedom of speech, media accountability, and the spread of disinformation. Reference Chomsky and Herman's propaganda model where relevant. Aim for 300+ words.",
        speaking: "You are a media consultant advising a government task force on combating disinformation. Present a three-point strategy that balances the need to protect citizens from harmful misinformation with the imperative to preserve freedom of expression. Address the roles of platforms, educators, and regulators in your proposal.",
        verb_patterns: {
            exercises: [
                { sentence: "The editor denied _____ the story to protect corporate interests.", options: ["to suppress", "suppressing", "suppress"], correct: 1 },
                { sentence: "Citizens deserve _____ accurately by the media.", options: ["to be informed", "being informed", "inform"], correct: 0 },
                { sentence: "Platforms claim _____ merely neutral carriers of content.", options: ["to be", "being", "be"], correct: 0 },
                { sentence: "Regulators struggle _____ pace with technological change.", options: ["keeping", "to keep", "keep"], correct: 1 },
                { sentence: "Journalists risk _____ their credibility if they don't verify sources.", options: ["to lose", "losing", "lose"], correct: 1 },
                { sentence: "The report recommended _____ media literacy in school curricula.", options: ["to include", "including", "include"], correct: 1 },
                { sentence: "Social media enables misinformation _____ at unprecedented speed.", options: ["to spread", "spreading", "spread"], correct: 0 },
                { sentence: "Editors ought _____ multiple sources before publishing.", options: ["consulting", "to consult", "consult"], correct: 1 },
                { sentence: "The government attempted _____ access to certain websites.", options: ["to restrict", "restricting", "restrict"], correct: 0 },
                { sentence: "They resisted _____ to pressure from advertisers.", options: ["to give in", "giving in", "give in"], correct: 1 }
            ]
        },
        functionalLanguage: {
            functionName: "Texts, Typos & Social Media Habits",
            description: "Master extremely modern, natural colloquial phrases to talk about digital communication, texting, and online social habits.",
            phrases: [
                { phrase: "To leave someone on read", def: "to open and read someone's digital message but not write a reply, causing social friction", example: "I sent her the invitation three days ago, and she just left me on read!" },
                { phrase: "A typo", def: "a minor spelling or typing mistake in a digital text message or post", example: "Sorry for the confusing text message earlier; it was just a funny typo!" },
                { phrase: "To misinterpret", def: "to understand an action, message, or tone incorrectly or differently than intended", example: "It is so easy to misinterpret someone's tone when you are just reading a brief text." },
                { phrase: "To ghost someone", def: "to suddenly cut off all communication with a friend or romantic partner without any explanation", example: "We were texting every day, and then out of nowhere, he completely ghosted me." }
            ],
            task: "Your friend has stopped replying to your messages for a week. Write a casual, non-aggressive text (3 sentences) asking what happened and checking in, using at least two phrases above."
        },
        videos: [
            { title: "How Fake News Spreads — TED-Ed", channel: "TED-Ed", duration: "3:41", url: "https://www.youtube.com/watch?v=cSKGa_7XJkg" },
            { title: "How to Spot Fake News — BBC Learning English", channel: "BBC Learning English", duration: "4:15", url: "https://www.youtube.com/watch?v=AkwWcHekMdo" },
            { title: "Manufacturing Consent — Noam Chomsky", channel: "Manufacturing Consent", duration: "2:47:12", url: "https://www.youtube.com/watch?v=EuwmWnphqII" }
        ]
    }
);
