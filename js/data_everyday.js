/**
 * C1 Advanced English Course - Everyday Language & Social Situations
 * 4 thematic lessons centered around real-world daily, social, and functional situations.
 * Includes colloquial idioms, practical vocabulary, natural dialogue practice, and speaking tasks.
 */

const everydayData = {
    lessons: [
        {
            id: 1,
            emoji: "☕",
            theme: "Socializing & Catching Up",
            subtitle: "Daily Social Life & Connection",
            color: "#22c55e",
            colorLight: "rgba(34,197,94,0.15)",
            colorBorder: "rgba(34,197,94,0.4)",

            // ── Headline & Colloquial Vocabulary ──────────────────────────
            newsVocab: [
                { word: "Small talk", def: "Casual, light conversation about trivial or everyday matters.", example: "We stood in the elevator making polite small talk about the weekend." },
                { word: "Skip-the-ice", def: "Moving directly to meaningful subjects instead of starting with superficial chit-chat.", example: "She loves skip-the-ice questions that get straight to the point." },
                { word: "Chit-chat", def: "Inconsequential, informal conversation about unimportant topics.", example: "We had a quick chit-chat by the coffee machine before the meeting started." },
                { word: "Social batteries", def: "The mental energy one has for interacting with others socially.", example: "After three hours at the noisy party, my social batteries were completely drained." },
                { word: "Break the ice", def: "To say or do something that makes people feel more comfortable, especially when first meeting.", example: "Asking someone about their favourite book is a great way to break the ice." }
            ],

            // ── Social Trend / News ───────────────────────────────────────
            currentAffairs: {
                headline: "The Death of Small Talk? New Survey Reveals Young Adults Prefer 'Skip-the-Ice' Deep Conversations at Social Events",
                source: "Social Trends Weekly / Lifestyle Research",
                date: "May 2025",
                keyQuote: "\"People are increasingly tired of asking 'what do you do?' We want to know what actually makes a person tick from the very first minute.\" — Lead Researcher",
                summary: "A new lifestyle survey of 2,000 adults shows a significant shift in social preferences. Instead of traditional, polite inquiries about the weather or jobs, a majority of respondents reported preferring deep, engaging questions to establish genuine social connections quickly. Critics argue that bypassing small talk can feel invasive, while proponents claim it builds stronger, more authentic relationships.",
                questions: [
                    { q: "According to the survey, what are young adults increasingly trying to bypass at social events?", options: ["Deep questions", "Superficial small talk", "Polite introductions"], correct: 1 },
                    { q: "What do critics of 'skip-the-ice' conversations warn about?", options: ["They take too long", "They can feel too personal or invasive", "They are only suitable for workplaces"], correct: 1 }
                ]
            },

            // ── Colloquial Idioms ─────────────────────────────────────────
            idioms: [
                { idiom: "Hit it off", meaning: "To instantly like someone and become friendly very quickly.", example: "We met at the dinner party and hit it off immediately." },
                { idiom: "Hey stranger!", meaning: "A friendly, colloquial greeting used for someone you haven't seen in a long time.", example: "Hey stranger! Long time no see! How have you been?" },
                { idiom: "Spill the beans", meaning: "To reveal secret or private information, often gossip.", example: "Come on, spill the beans! Tell me what happened on your date." },
                { idiom: "A social butterfly", meaning: "An outgoing, highly social person who easily moves between groups.", example: "Marcus is a real social butterfly; he knows absolutely everyone in this room." }
            ],

            // ── Listening (Colloquial & Social Conversation) ──────────────
            listening: {
                title: "Catching Up at a Local Cafe — Natural Dialogue",
                transcript: "Hey stranger! Long time no see! I was hoping I'd run into you here. Oh my gosh, how have you been? Let's grab a table and catch up properly. Honestly, my social batteries have been so low lately with work being so hectic, so it is wonderful to just sit down and chat. Have you heard from Sarah lately? Someone told me she's moving to New York, but she hasn't said a word! Come on, spill the beans if you know anything! Anyway, tell me about your new project. We always hit it off whenever we talk about creative ideas, and I've been dying to hear how your photography course is going. Are you still enjoying it, or is it too demanding? Let's order some coffee first. I am starving, so I might get a slice of that chocolate cake too!",
                questions: [
                    { q: "How does the speaker greet their friend at the beginning?", options: ["Good afternoon, colleague", "Hey stranger! Long time no see!", "Hello, nice to meet you"], correct: 1 },
                    { q: "What does the speaker ask their friend to do regarding Sarah?", options: ["Call her immediately", "Spill the beans about her moving to New York", "Send her an email"], correct: 1 },
                    { q: "Why have the speaker's social batteries been low lately?", options: ["Because they've been sick", "Because work has been extremely hectic", "Because they've been partying too much"], correct: 1 },
                    { q: "What course is the friend currently taking?", options: ["Photography", "Web Design", "Creative Writing"], correct: 0 }
                ]
            },

            // ── Discussion Task ───────────────────────────────────────────
            discussion: {
                prompt: "Is small talk a vital social skill, or is it a waste of time compared to 'deep' conversations? Share your personal experience using at least two colloquial expressions from today's lesson.",
                tips: ["State your opinion clearly: 'For me, small talk is…'", "Describe how you recharge your social batteries", "Explain how you usually break the ice with new people"]
            },

            // ── Fill-in-the-Blanks ────────────────────────────────────────
            fillBlanks: [
                { sentence: "I hadn't seen Leo in over two years, so when I saw him I shouted, '___!'", options: ["Hey stranger", "Spill the beans", "Break the ice"], correct: 0 },
                { sentence: "We sat next to each other at the wedding and we ___ immediately.", options: ["hit it off", "spilled the beans", "went green"], correct: 0 },
                { sentence: "I don't have the energy for a big party tonight; my ___ are totally drained.", options: ["social batteries", "digital divides", "tipping points"], correct: 0 },
                { sentence: "If you know who got the promotion, please ___!", options: ["spill the beans", "rock the boat", "hit it off"], correct: 0 }
            ]
        },

        {
            id: 2,
            emoji: "🛒",
            theme: "Daily Hassles & Problem Solving",
            subtitle: "Functional Language for Daily Struggles",
            color: "#6366f1",
            colorLight: "rgba(99,102,241,0.15)",
            colorBorder: "rgba(99,102,241,0.4)",

            // ── Headline & Colloquial Vocabulary ──────────────────────────
            newsVocab: [
                { word: "Get the runaround", def: "To be given evasive, confusing, or delayed answers by an organization.", example: "I tried to cancel my subscription but kept getting the runaround from their team." },
                { word: "Customer support", def: "Services provided by a company to assist customers with problems.", example: "Their customer support was incredibly polite and solved my issue in minutes." },
                { word: "Daily hassle", def: "A minor, irritating problem that occurs in everyday life.", example: "Dealing with train delays is just another daily hassle of commuting." },
                { word: "A rip-off", def: "Something that is grossly overpriced or a scam.", example: "Charging twenty dollars for a basic sandwich is a complete rip-off." },
                { word: "AI chatbot", def: "An automated software program used to conduct online conversations with customers.", example: "The website's AI chatbot couldn't understand my request to return the damaged item." }
            ],

            // ── Social Trend / News ───────────────────────────────────────
            currentAffairs: {
                headline: "Fed-Up Consumers Turn to 'Colloquial Complaining' as Automated AI Customer Service Bots Fail to Understand Slang",
                source: "Daily Consumer Report",
                date: "June 2025",
                keyQuote: "\"I spent an hour arguing with a robot just to return a simple pair of shoes. It literally drove me up the wall!\" — Frustrated Buyer",
                summary: "The massive rise of automated AI chatbots in customer support has led to widespread consumer frustration. Customers report that automated systems lack emotional understanding and frequently fail to interpret colloquial expressions, informal complaints, or simple daily issues, forcing users to find creative workarounds to reach human agents.",
                questions: [
                    { q: "Why are consumers frustrated with automated AI chatbots?", options: ["They are too polite", "They struggle to understand colloquial language and informal complaints", "They are too expensive"], correct: 1 },
                    { q: "What does the phrase 'drove me up the wall' express in the quote?", options: ["Extreme excitement", "Intense frustration or annoyance", "Physical exercise"], correct: 1 }
                ]
            },

            // ── Colloquial Idioms ─────────────────────────────────────────
            idioms: [
                { idiom: "Drive someone up the wall", meaning: "To make someone extremely irritated, frustrated, or annoyed.", example: "That constant clicking noise is driving me up the wall." },
                { idiom: "Go the extra mile", meaning: "To make a special effort or do more than is expected to help someone.", example: "The shop assistant went the extra mile to find the correct size for me." },
                { idiom: "Pay through the nose", meaning: "To pay an excessively high price for something.", example: "We had to pay through the nose for hotel rooms during the peak season." },
                { idiom: "Sort it out", meaning: "To resolve a problem, conflict, or confusing situation.", example: "Don't worry about the booking mistake; I will call the hotel and sort it out." }
            ],

            // ── Listening (Functional Conversation) ───────────────────────
            listening: {
                title: "Resolving an Overcharge — Customer Dialogue",
                transcript: "Hello, thanks for calling customer support. My name is David. How can I help you today? / Hi David. Look, I'm calling because I'm trying to sort out an issue with my recent bill. I think I've been overcharged. I ordered a basic coffee and a pastry, but my card was charged forty-five dollars! That is a complete rip-off! Honestly, this is driving me up the wall because I've already spent twenty minutes trying to explain it to your AI chatbot, and it just kept giving me the runaround. I really didn't want to pay through the nose for a simple breakfast! / I completely understand your frustration, ma'am. That sounds like a system error on our end. Let me check your account immediately. Ah, yes, I see the double charge here. I will sort it out right now and issue a full refund to your card. I want to go the extra mile for you, so I will also send a ten-dollar voucher to your email for your next visit. / Oh, thank you so much, David! That's incredibly kind of you. I really appreciate your help!",
                questions: [
                    { q: "What is the customer trying to resolve?", options: ["A late delivery", "An incorrect overcharge on her bill", "A broken product"], correct: 1 },
                    { q: "How much was the customer incorrectly charged?", options: ["$4.50", "$15.00", "$45.00"], correct: 2 },
                    { q: "How does the customer describe the $45 charge for a coffee and pastry?", options: ["A great bargain", "A complete rip-off", "Reasonable"], correct: 1 },
                    { q: "What does David do to go the extra mile for the customer?", options: ["Gives her a free coffee", "Issues a refund and sends her a $10 voucher", "Cancels her account"], correct: 1 }
                ]
            },

            // ── Discussion Task ───────────────────────────────────────────
            discussion: {
                prompt: "Describe a time when a company or customer service representative went the extra mile to sort out a daily hassle for you. What happened, and how did you feel?",
                tips: ["Describe the problem: 'I was trying to sort out…'", "Explain why it was driving you up the wall", "Highlight the solution and how they helped you"]
            },

            // ── Fill-in-the-Blanks ────────────────────────────────────────
            fillBlanks: [
                { sentence: "The hotel room was tiny and dirty; paying three hundred dollars a night was a complete ___.", options: ["rip-off", "runaround", "extra mile"], correct: 0 },
                { sentence: "The support agent was wonderful; she really ___ to help me find my lost luggage.", options: ["went the extra mile", "paid through the nose", "drove me up the wall"], correct: 0 },
                { sentence: "Don't stress about the schedule conflict; I'm sure we can ___.", options: ["sort it out", "sit on the fence", "rock the boat"], correct: 0 },
                { sentence: "Living next to a construction site for six months is ___.", options: ["driving me up the wall", "going the extra mile", "spilling the beans"], correct: 0 }
            ]
        },

        {
            id: 3,
            emoji: "💻",
            theme: "Modern Work & Social Etiquette",
            subtitle: "Office Trends & Coffee Shop Culture",
            color: "#f59e0b",
            colorLight: "rgba(245,158,11,0.15)",
            colorBorder: "rgba(245,158,11,0.4)",

            // ── Headline & Colloquial Vocabulary ──────────────────────────
            newsVocab: [
                { word: "Laptop landlord", def: "A colloquial term for someone who spends very little money in a cafe but occupies a table all day to work.", example: "Cafes are starting to ban laptop landlords during busy lunch hours." },
                { word: "Remote work", def: "Working from home or another location outside of a traditional office.", example: "Many professionals prefer remote work because it eliminates the daily commute." },
                { word: "Table turnover", def: "The rate at which customers finish their meals and free up tables for new parties.", example: "Fast table turnover is essential for busy city restaurants to stay profitable." },
                { word: "Crack down on", def: "To take strong, decisive action to enforce rules or limit unauthorized behavior.", example: "The management decided to crack down on unauthorized office printing." },
                { word: "Coffee shop etiquette", def: "Social rules for respectful behavior when working or relaxing in a public cafe.", example: "Using headphones when listening to video calls is basic coffee shop etiquette." }
            ],

            // ── Social Trend / News ───────────────────────────────────────
            currentAffairs: {
                headline: "Cafe Owners Crack Down on 'Laptop Landlords' Who Buy a Single Coffee and Stay for Six Hours",
                source: "Metropolitan Business Journal",
                date: "April 2025",
                keyQuote: "\"We love remote workers, but we simply cannot pay our commercial rent if a single person occupies a four-person table all afternoon.\" — Cafe Owner",
                summary: "Local coffee shop owners are implementing strict new policies to regulate remote workers. Some cafes have introduced 'no laptop' zones during peak lunch hours, turned off their Wi-Fi on weekends, or added power outlet covers. While remote workers argue cafes are vital social workspaces, owners claim they need faster table turnover to survive.",
                questions: [
                    { q: "What does the term 'laptop landlord' refer to?", options: ["A cafe owner who provides free Wi-Fi", "A remote worker who occupies a table all day while spending very little", "A landlord who rents office space online"], correct: 1 },
                    { q: "Why are cafe owners cracking down on remote workers?", options: ["They don't like coffee", "They need faster table turnover to stay profitable", "They want to promote working from home"], correct: 1 }
                ]
            },

            // ── Colloquial Idioms ─────────────────────────────────────────
            idioms: [
                { idiom: "Bite the bullet", meaning: "To force yourself to do something difficult, unpleasant, or inevitable.", example: "I had to bite the bullet and tell my boss that I couldn't meet the deadline." },
                { idiom: "On the same page", meaning: "Thinking in a similar way, sharing the same understanding or goals.", example: "Before we launch the product, we need to make sure the whole team is on the same page." },
                { idiom: "Burnout", meaning: "State of physical, emotional, or mental exhaustion caused by excessive and prolonged stress.", example: "Working eighty hours a week is a direct path to total burnout." },
                { idiom: "Think outside the box", meaning: "To think creatively, unconventionally, or from a new perspective.", example: "To solve this design problem, we really need to think outside the box." }
            ],

            // ── Listening (Social & Work Dialogue) ────────────────────────
            listening: {
                title: "Office Chat — Remote vs. Office Dilemma",
                transcript: "Hey, do you have a second? I wanted to see if we're on the same page regarding the project schedule. / Oh, absolutely! Honestly, I'm glad you came by. I've been feeling so close to burnout lately with these constant Zoom meetings. Working from home is great, but sometimes I feel like I never actually leave the office! / I totally get it. Sometimes I go to the local coffee shop just to change my environment, but lately, they've been cracking down on people working there. I was called a 'laptop landlord' by the barista because I sat there for three hours! It was so awkward. / Oh no, that's hilarious but awful! Yeah, cafes want quick table turnover. I guess you'll just have to bite the bullet and come back to the office a few days a week. At least we can have some real social chitchat here! / True! Plus, collaborating in person helps us think outside the box. Let's grab lunch and discuss the new proposal.",
                questions: [
                    { q: "What does the first speaker want to confirm?", options: ["If they are going to get lunch", "If they are on the same page regarding the project schedule", "If the project is cancelled"], correct: 1 },
                    { q: "Why has the second speaker been feeling close to burnout?", options: ["Because of constant Zoom meetings and no separation from work", "Because they are working too early", "Because they hate their job"], correct: 0 },
                    { q: "Why did the barista call the first speaker a 'laptop landlord'?", options: ["Because they own the building", "Because they spent three hours working in the cafe", "Because they were selling laptops"], correct: 1 },
                    { q: "What benefit of working in the office is mentioned?", options: ["Free parking", "Real social chitchat and collaborating in person to think outside the box", "Better computers"], correct: 1 }
                ]
            },

            // ── Discussion Task ───────────────────────────────────────────
            discussion: {
                prompt: "Should coffee shops place limits on remote workers, or should they embrace them as a core part of modern social and workspace culture? Express your view using idioms from today's lesson.",
                tips: ["Acknowledge both sides: 'On one hand, cafe owners need table turnover, but on the other hand…'", "Explain if you've ever had to bite the bullet and work from an uncomfortable spot", "Discuss remote work boundaries and burnout"]
            },

            // ── Fill-in-the-Blanks ────────────────────────────────────────
            fillBlanks: [
                { sentence: "We spent two hours in the meeting making sure everyone was ___.", options: ["on the same page", "off the grid", "on the fence"], correct: 0 },
                { sentence: "I had to ___ and pay the high repair bill so I could use my car.", options: ["bite the bullet", "spill the beans", "rock the boat"], correct: 0 },
                { sentence: "If we want to stand out in this market, we must ___.", options: ["think outside the box", "go green", "hit it off"], correct: 0 },
                { sentence: "Taking a proper vacation is essential to avoid job-related ___.", options: ["burnout", "digital divide", "net zero"], correct: 0 }
            ]
        },

        {
            id: 4,
            emoji: "🍽️",
            theme: "Dining Out & Culinary Trends",
            subtitle: "Social Dining & Gastronomy Habits",
            color: "#ec4899",
            colorLight: "rgba(236,72,153,0.15)",
            colorBorder: "rgba(236,72,153,0.4)",

            // ── Headline & Colloquial Vocabulary ──────────────────────────
            newsVocab: [
                { word: "Foodie culture", def: "A social movement focused on high-quality, adventurous, and aesthetically pleasing dining experiences.", example: "Social media has turned dining out into a massive part of modern foodie culture." },
                { word: "Silent dining", def: "A restaurant trend where patrons are requested to eat in silence, avoiding loud talking or phone calls.", example: "The new sushi bar offers a silent dining experience for mindful eating." },
                { word: "Comfort food", def: "Simple, familiar dishes that provide a feeling of emotional well-being and nostalgia.", example: "On a rainy day, nothing beats a warm bowl of soup — it's the ultimate comfort food." },
                { word: "Dining etiquette", def: "Social rules and polite behavior expected while sharing a meal at a restaurant.", example: "Waiting for everyone to be served before eating is standard dining etiquette." },
                { word: "Signature dish", def: "A unique, high-quality recipe that a chef or restaurant is specifically famous for.", example: "Their signature dish is a slow-cooked beef stew that melts in your mouth." }
            ],

            // ── Social Trend / News ───────────────────────────────────────
            currentAffairs: {
                headline: "The Rise of 'Silent Dining': Restaurants Introduce Quiet Tables for Patrons Seeking a Break from Constant Social Chit-Chat",
                source: "Gastronomy & Society Magazine",
                date: "October 2024",
                keyQuote: "\"Dining out has become an exhausting social performance. Sometimes, you just want to taste your food without having to make conversation.\" — Trend Analyst",
                summary: "A unique dining trend is emerging in major metropolitan areas. Several high-end restaurants have introduced 'silent tables' or 'no-phone zones' where guests eat in complete silence. Proponents argue it allows diners to decompress from social fatigue and practice mindfulness, while critics argue it completely defeats the social purpose of eating out.",
                questions: [
                    { q: "What is the primary goal of the 'silent dining' trend?", options: ["To save money on service", "To give diners a quiet space to decompress from social fatigue", "To play loud music"], correct: 1 },
                    { q: "What is the main criticism against silent dining tables?", options: ["The food is cold", "It defeats the inherently social nature of dining out", "The service is too slow"], correct: 1 }
                ]
            },

            // ── Colloquial Idioms ─────────────────────────────────────────
            idioms: [
                { idiom: "Not my cup of tea", meaning: "Something that does not appeal to you; not to your personal taste or preference.", example: "Raw oysters are really not my cup of tea; I prefer cooked seafood." },
                { idiom: "Take it with a grain of salt", meaning: "To view a claim or recommendation with healthy scepticism or doubt.", example: "Take online restaurant reviews with a grain of salt; some are completely fake." },
                { idiom: "A piece of cake", meaning: "Something that is incredibly easy, simple, or effortless.", example: "Making reservation on this new app was a piece of cake." },
                { idiom: "To have a sweet tooth", meaning: "To have a strong liking or craving for sweet foods like desserts, chocolate, and candy.", example: "I have a massive sweet tooth, so I always look at the dessert menu first." }
            ],

            // ── Listening (Social & Food Dialogue) ────────────────────────
            listening: {
                title: "Ordering Dinner — A Social Outing",
                transcript: "Wow, this place has a wonderful atmosphere! Thanks for inviting me. The menu looks amazing. / I'm so glad you could make it! This place is famous for its foodie culture and chef's signature dish, which is a wood-fired truffle pizza. Apparently, it's out of this world! / Hmm, truffle pizza? Honestly, truffles are not my cup of tea. They have such an intense earthy flavor. I think I will stick to my favorite comfort food: homemade lasagna. / Oh, no worries at all! You should always order what makes you happy. What about dessert? I know you have a major sweet tooth! / Guilty as charged! Yes, making room for dessert will be a piece of cake. Look, there's a chocolate lava cake on the menu! / Perfect. Let's order. Excuse me, waiter? We're ready!",
                questions: [
                    { q: "What signature dish is the restaurant famous for?", options: ["Homemade lasagna", "Wood-fired truffle pizza", "Sushi rolls"], correct: 1 },
                    { q: "Why does the first speaker decline the truffle pizza?", options: ["It is too expensive", "Truffles are not their cup of tea", "They are allergic to cheese"], correct: 1 },
                    { q: "What comfort food does the first speaker decide to order instead?", options: ["Comfort salad", "Homemade lasagna", "Chocolate cake"], correct: 1 },
                    { q: "What does the phrase 'guilty as charged' acknowledge?", options: ["That they committed a crime", "That they have a major sweet tooth", "That they didn't bring their wallet"], correct: 1 }
                ]
            },

            // ── Discussion Task ───────────────────────────────────────────
            discussion: {
                prompt: "Would you ever try 'silent dining' in a restaurant, or is socializing an indispensable part of eating out for you? Share your culinary preferences and dessert habits (do you have a sweet tooth?) using idioms from today's lesson.",
                tips: ["State your taste: 'To be honest, silent dining is…'", "Discuss if you take lifestyle trends with a grain of salt", "Talk about your favourite comfort foods"]
            },

            // ── Fill-in-the-Blanks ────────────────────────────────────────
            fillBlanks: [
                { sentence: "Extreme sports like skydiving are definitely ___.", options: ["not my cup of tea", "a piece of cake", "on the same page"], correct: 0 },
                { sentence: "Don't believe everything you read on social media; ___.", options: ["take it with a grain of salt", "spill the beans", "rock the boat"], correct: 0 },
                { sentence: "Passed the C1 level speaking test was ___ because I practiced daily.", options: ["a piece of cake", "not my cup of tea", "burnout"], correct: 0 },
                { sentence: "I bought three boxes of cookies because I ___.", options: ["have a sweet tooth", "go green", "hit it off"], correct: 0 }
            ]
        }
    ]
};
