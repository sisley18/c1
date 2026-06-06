/**
 * TEG (Tests, Exercises & Games) - Levels B1 & B2
 */

const tegDataB1B2 = {
    B1: {
        levelName: "B1 (Intermediate)",
        badge: "🥇 B1",
        colorClass: "badge-b1",
        exercises: {
            word_formation: {
                title: "Word Formation (B1)",
                description: "Change the word in brackets to complete the sentence correctly.",
                items: [
                    { q: "The company announced the _____ (DEVELOP) of a new product.", correct: "development", explanation: "Add suffix '-ment' to verb 'develop' to create the noun." },
                    { q: "It was a very _____ (SUCCESS) project.", correct: "successful", explanation: "Add '-ful' to noun 'success' to form the adjective." },
                    { q: "The speaker spoke with great _____ (CONFIDENT).", correct: "confidence", explanation: "Change the adjective suffix '-ent' to noun '-ence'." },
                    { q: "She has the _____ (ABLE) to pass the exam easily.", correct: "ability", explanation: "Change the adjective 'able' to the noun 'ability'." },
                    { q: "We need to find a _____ (SOLVE) to this problem.", correct: "solution", explanation: "The noun form of the verb 'solve' is 'solution'." },
                    { q: "He was very _____ (HELP) and gave me directions.", correct: "helpful", explanation: "Add '-ful' to 'help' to form the adjective." },
                    { q: "The hotel was extremely _____ (COMFORT).", correct: "comfortable", explanation: "Add '-able' to noun 'comfort' to create the adjective." },
                    { q: "I made a _____ (DECIDE) to change my job.", correct: "decision", explanation: "The noun form of the verb 'decide' is 'decision'." },
                    { q: "The weather is very _____ (PREDICT) at this time of year.", correct: "unpredictable", explanation: "Add prefix 'un-' and suffix '-able' to 'predict' to mean 'cannot be predicted'." },
                    { q: "He is a very _____ (CREATE) artist.", correct: "creative", explanation: "Change 'create' to the adjective form 'creative'." }
                ]
            },
            open_cloze: {
                title: "Open Cloze (B1)",
                description: "Fill the blank with exactly ONE suitable word (pronouns, prepositions, articles, etc.).",
                items: [
                    { q: "I have been living here _____ three years.", correct: "for", explanation: "Use 'for' to specify the duration of time." },
                    { q: "He is the man _____ car was stolen last night.", correct: "whose", explanation: "Relative possessive pronoun 'whose' indicates ownership." },
                    { q: "We decided to go for a walk in _____ of the rain.", correct: "spite", explanation: "The phrase is 'in spite of'." },
                    { q: "I look forward to _____ you next week.", correct: "seeing", explanation: "'Look forward to' must be followed by a gerund." },
                    { q: "She is not only smart _____ also very kind.", correct: "but", explanation: "The correlative conjunction is 'not only... but also'." },
                    { q: "If I _____ you, I would accept the job offer.", correct: "were", explanation: "Second conditional uses subjunctive 'were' for advice." },
                    { q: "The work must _____ finished by Friday afternoon.", correct: "be", explanation: "Passive voice modal 'must be' + past participle." },
                    { q: "He succeeded _____ passing his driving test.", correct: "in", explanation: "'Succeed' takes the preposition 'in' followed by gerund." },
                    { q: "I don't know _____ to do; I'm completely confused.", correct: "what", explanation: "Use the question word 'what' in indirect questions." },
                    { q: "He ran fast in order _____ catch the train.", correct: "to", explanation: "The purpose expression is 'in order to'." }
                ]
            },
            sentence_transformation: {
                title: "Sentence Transformation (B1)",
                description: "Complete the second sentence so it means the same as the first. Use 2 to 5 words.",
                items: [
                    { q: "They are building a new road in the city.\nA new road _____ in the city.", correct: "is being built", explanation: "Present continuous passive: 'is/are being + past participle'." },
                    { q: "I last saw him three years ago.\nI _____ him for three years.", correct: "have not seen", explanation: "'Last saw X ago' translates to present perfect negative 'have not seen'." },
                    { q: "It's a pity I don't speak French.\nI wish I _____ French.", correct: "spoke", explanation: "Wish + past simple expresses a present regret." },
                    { q: "The book was so interesting that I couldn't put it down.\nIt was _____ book that I couldn't put it down.", correct: "such an interesting", explanation: "Use 'such + adjective + noun' for emphasis." },
                    { q: "My parents didn't let me go to the party.\nI was not _____ go to the party.", correct: "allowed to", explanation: "'Let me go' becomes passive 'allowed to go'." },
                    { q: "Smoking is forbidden in this building.\nYou _____ smoke in this building.", correct: "must not", explanation: "Prohibition is expressed with 'must not' or 'are not allowed to'." },
                    { q: "They arrived too late to get tickets.\nThey didn't arrive early _____ tickets.", correct: "enough to get", explanation: "'Too late' is equivalent to 'not early enough to'." },
                    { q: "Although he was tired, he finished the work.\nIn spite _____ tired, he finished the work.", correct: "of being", explanation: "'In spite of' requires a gerund ('being') or a noun phrase." },
                    { q: "The test was easier than I thought.\nThe test was not _____ I thought.", correct: "as difficult as", explanation: "Comparative inequality: 'not as + adjective + as'." },
                    { q: "He said: 'I have lost my keys.'\nHe said that _____ keys.", correct: "he had lost his", explanation: "Reported speech: shift present perfect to past perfect, and adjust pronouns." }
                ]
            },
            error_correction: {
                title: "Error Correction (B1)",
                description: "Identify and correct the single error in the sentence.",
                items: [
                    { q: "He is working here since last summer.", correct: "has been working", explanation: "Use present perfect continuous for an action starting in the past and continuing to the present." },
                    { q: "If I would have more money, I would buy a car.", correct: "had", explanation: "In the 'if' clause of a second conditional, use past simple ('had') instead of 'would'." },
                    { q: "She suggested to go to the park.", correct: "going", explanation: "The verb 'suggest' is followed by a gerund ('going') or a 'that' clause." },
                    { q: "The room is enough big for three people.", correct: "big enough", explanation: "Adjectives must precede 'enough' ('big enough')." },
                    { q: "He is interested on learning English.", correct: "in", explanation: "The adjective 'interested' collocates with the preposition 'in'." },
                    { q: "We are used to wake up early.", correct: "waking", explanation: "The expression 'be used to' is followed by a gerund ('waking')." },
                    { q: "I didn't see nobody in the office.", correct: "anybody", explanation: "Avoid double negatives: use 'anybody' with negative verbs." },
                    { q: "He told that he was moving to Canada.", correct: "said", explanation: "'Told' requires a personal object (e.g. 'told us'). Otherwise, use 'said'." },
                    { q: "She plays the piano very good.", correct: "well", explanation: "Use the adverb 'well' to modify the verb 'plays'." },
                    { q: "I must to study for my test tonight.", correct: "must", explanation: "Modal 'must' is followed directly by bare infinitive without 'to'." }
                ]
            },
            vocab_matching: {
                title: "Vocabulary Matching (B1)",
                description: "Match the words on the left with their correct definitions on the right.",
                pairs: [
                    { word: "Accidentally", def: "By chance; not on purpose." },
                    { word: "Generous", def: "Willing to give money, help, or time freely." },
                    { word: "Baggage", def: "Suitcases and bags containing personal belongings." },
                    { word: "Coincidence", def: "A remarkable concurrence of events without causal connection." },
                    { word: "Destination", def: "The place to which someone or something is going." },
                    { word: "Environment", def: "The surroundings or conditions in which a person, animal, or plant lives." },
                    { word: "Guarantee", def: "A formal assurance that certain conditions will be fulfilled." },
                    { word: "Volunteer", def: "A person who freely offers to take part in an enterprise or task." }
                ]
            },
            idiom_challenge: {
                title: "Collocation & Expression Challenge (B1)",
                description: "Complete the everyday expression or collocation with the correct word.",
                items: [
                    { q: "I need to _____ my mind about which university to choose.", options: ["make up", "do up", "take up"], correct: 0, explanation: "To 'make up one's mind' means to make a decision." },
                    { q: "He always tries to _____ his best in exams.", options: ["do", "make", "give"], correct: 0, explanation: "The collocation is 'do one's best'." },
                    { q: "We ran _____ of milk, so I had to buy some more.", options: ["out", "away", "off"], correct: 0, explanation: "To 'run out of' something means to have none left." },
                    { q: "I will _____ an eye on your luggage while you are away.", options: ["keep", "hold", "put"], correct: 0, explanation: "To 'keep an eye on' means to watch or look after." },
                    { q: "Can you _____ me a story about your trip?", options: ["tell", "say", "speak"], correct: 0, explanation: "We 'tell a story/truth/lie' but we 'say something'." },
                    { q: "They decided to _____ off the meeting until next Monday.", options: ["put", "call", "take"], correct: 0, explanation: "To 'put off' means to postpone." },
                    { q: "She was brought _____ by her grandparents in a small town.", options: ["up", "out", "in"], correct: 0, explanation: "To 'bring up' means to raise a child." },
                    { q: "I can't put _____ with his bad behaviour anymore.", options: ["up", "down", "in"], correct: 0, explanation: "'Put up with' means to tolerate." },
                    { q: "He broke _____ with his girlfriend last week.", options: ["up", "out", "down"], correct: 0, explanation: "'Break up with' means to end a romantic relationship." },
                    { q: "We should take _____ of this opportunity.", options: ["advantage", "use", "benefit"], correct: 0, explanation: "To 'take advantage of' means to make good use of a situation." }
                ]
            }
        }
    },
    B2: {
        levelName: "B2 (Upper-Intermediate)",
        badge: "🥇 B2",
        colorClass: "badge-b2",
        exercises: {
            word_formation: {
                title: "Word Formation (B2)",
                description: "Change the word in brackets to complete the sentence correctly.",
                items: [
                    { q: "The government took measures to reduce _____ (EMPLOY).", correct: "unemployment", explanation: "Add prefix 'un-' and suffix '-ment' to form the noun 'unemployment'." },
                    { q: "She has an _____ (BELIEVE) talent for playing the violin.", correct: "unbelievable", explanation: "Add prefix 'un-' and suffix '-able' to form the adjective 'unbelievable'." },
                    { q: "The experiment was _____ (SUCCESS) and failed to prove anything.", correct: "unsuccessful", explanation: "Add prefix 'un-' and suffix '-ful' to form 'unsuccessful'." },
                    { q: "There is a wide _____ (VARY) of options available.", correct: "variety", explanation: "The noun form of 'vary' is 'variety'." },
                    { q: "His argument was highly _____ (LOGIC).", correct: "illogical", explanation: "Add prefix 'il-' to create the antonym adjective 'illogical'." },
                    { q: "The project was completed with minimal _____ (DIFFICULT).", correct: "difficulty", explanation: "Change adjective 'difficult' to the noun 'difficulty'." },
                    { q: "She was praised for her _____ (GENEROUS).", correct: "generosity", explanation: "Change adjective 'generous' to noun 'generosity'." },
                    { q: "They have a very close _____ (RELATION).", correct: "relationship", explanation: "Add suffix '-ship' to 'relation' to mean connection/bond." },
                    { q: "We must ensure the _____ (SAFE) of all passengers.", correct: "safety", explanation: "The noun form of adjective 'safe' is 'safety'." },
                    { q: "He is completely _____ (DEPEND) on his parents for money.", correct: "dependent", explanation: "Use the adjective 'dependent' (spelled with '-ent')." }
                ]
            },
            open_cloze: {
                title: "Open Cloze (B2)",
                description: "Fill the blank with exactly ONE suitable word (pronouns, prepositions, articles, etc.).",
                items: [
                    { q: "She succeeded in passing the exam _____ having a severe headache.", correct: "despite", explanation: "'Despite' is followed by a gerund or noun phrase without 'of'." },
                    { q: "It was _____ a hot day that we decided to go swimming.", correct: "such", explanation: "Use 'such + a/an + adjective + noun' for emphasis." },
                    { q: "He is the writer _____ books are read worldwide.", correct: "whose", explanation: "Use relative possessive pronoun 'whose'." },
                    { q: "Under no circumstances _____ you touch these wires.", correct: "should", explanation: "Inversion after negative adverbial: 'Under no circumstances + auxiliary + subject'." },
                    { q: "We had hardly started our journey _____ the car broke down.", correct: "when", explanation: "The correlative structure is 'hardly... when' (or 'no sooner... than')." },
                    { q: "He has been accused _____ stealing the company's funds.", correct: "of", explanation: "The verb 'accuse' is followed by the preposition 'of'." },
                    { q: "I would rather you _____ not tell him about our plan.", correct: "did", explanation: "Use 'would rather + subject + past subjunctive' for present/future preferences." },
                    { q: "The concert was called _____ due to the bad weather.", correct: "off", explanation: "To 'call off' means to cancel." },
                    { q: "She behaves as _____ she were the boss of the company.", correct: "if", explanation: "The expression is 'as if' or 'as though' followed by subjunctive." },
                    { q: "We need to focus on _____ the problem can be solved.", correct: "how", explanation: "Use 'how' to refer to the method or manner of solving." }
                ]
            },
            sentence_transformation: {
                title: "Sentence Transformation (B2)",
                description: "Complete the second sentence so it means the same as the first. Use 2 to 5 words.",
                items: [
                    { q: "I'm sure he didn't do it on purpose.\nHe _____ it on purpose.", correct: "cannot have done", explanation: "Use 'cannot have + past participle' for negative logical deduction about the past." },
                    { q: "It's possible that they missed the flight.\nThey _____ the flight.", correct: "might have missed", explanation: "Use 'might have' or 'may have' + past participle for past possibility." },
                    { q: "If we don't hurry, we'll miss the train.\nUnless _____ , we'll miss the train.", correct: "we hurry", explanation: "'Unless' is equivalent to 'if... not'." },
                    { q: "The task was so difficult that we couldn't complete it.\nIt was _____ task that we couldn't complete it.", correct: "too difficult a", explanation: "Or 'such a difficult task'. 'too difficult a' is also correct. Let's accept 'such a difficult'." },
                    { q: "He regretfully told them the bad news.\nHe regretted _____ them the bad news.", correct: "telling", explanation: "Regret + gerund is used for expressing regret about a past action." },
                    { q: "They are repairing my car at the garage.\nI am _____ at the garage.", correct: "having my car repaired", explanation: "Causative structure: 'have + object + past participle'." },
                    { q: "The match was cancelled because it rained heavily.\nThe match was cancelled due _____ rain.", correct: "to heavy", explanation: "'Due to + noun phrase' replaces 'because + clause'." },
                    { q: "He is too short to reach the top shelf.\nHe is not _____ reach the top shelf.", correct: "tall enough to", explanation: "'Too short' equates to 'not tall enough to'." },
                    { q: "Although she felt ill, she went to work.\nIn spite of _____ , she went to work.", correct: "feeling ill", explanation: "'In spite of' is followed by a gerund ('feeling ill') or a noun phrase." },
                    { q: "They think the thief has left the country.\nThe thief is thought _____ the country.", correct: "to have left", explanation: "Passive reporting structure: 'is thought to have + past participle'." }
                ]
            },
            error_correction: {
                title: "Error Correction (B2)",
                description: "Identify and correct the single error in the sentence.",
                items: [
                    { q: "I wish I would have gone to the party last night.", correct: "had gone", explanation: "Regrets about the past are expressed with 'wish + past perfect'." },
                    { q: "He suggested us to take a break.", correct: "suggested that we take", explanation: "'Suggest' cannot be followed by an object pronoun and infinitive; use a 'that' clause or gerund instead." },
                    { q: "The criminal was accused for robbery.", correct: "of", explanation: "The verb 'accuse' takes the preposition 'of', not 'for'." },
                    { q: "Despite of the rain, we enjoyed our walk.", correct: "Despite", explanation: "'Despite' does not take 'of' (unlike 'in spite of')." },
                    { q: "Neither of the options are acceptable.", correct: "is", explanation: "Subject pronoun 'neither' is singular, so it takes a singular verb ('is')." },
                    { q: "He is the man who his house was destroyed.", correct: "whose", explanation: "'who his' must be replaced by the possessive relative pronoun 'whose'." },
                    { q: "I would rather you don't call me so late.", correct: "didn't", explanation: "Use past subjunctive 'didn't' after 'would rather + subject' for present preference." },
                    { q: "The news about the layoffs were shocking.", correct: "was", explanation: "'News' is an uncountable noun and always takes a singular verb ('was')." },
                    { q: "She has been working here for three years ago.", correct: "for three years", explanation: "Remove 'ago' when using 'for' to show duration in present perfect." },
                    { q: "I look forward to hear from you soon.", correct: "hearing", explanation: "'look forward to' requires the gerund form '-ing'." }
                ]
            },
            vocab_matching: {
                title: "Vocabulary Matching (B2)",
                description: "Match the words on the left with their correct definitions on the right.",
                pairs: [
                    { word: "Consequence", def: "A result or effect, typically one that is unwelcome." },
                    { word: "Inevitably", def: "As is certain to happen; unavoidably." },
                    { word: "Reluctance", def: "Unwillingness or hesitancy to do something." },
                    { word: "Simultaneously", def: "At the exact same time." },
                    { word: "Vulnerable", def: "Susceptible to physical or emotional attack or harm." },
                    { word: "Exaggerate", def: "Represent something as being larger or better than it really is." },
                    { word: "Maintain", def: "Provide with academic/physical support, or assert a state of affairs." },
                    { word: "Negotiate", def: "Try to reach an agreement or compromise by discussion." }
                ]
            },
            idiom_challenge: {
                title: "Collocation & Expression Challenge (B2)",
                description: "Complete the everyday expression or collocation with the correct word.",
                items: [
                    { q: "She decided to _____ up tennis to get some exercise.", options: ["take", "make", "go"], correct: 0, explanation: "To 'take up' a sport or hobby means to start it." },
                    { q: "He managed to _____ through the difficult exam despite the pressure.", options: ["get", "make", "pass"], correct: 0, explanation: "To 'get through' means to survive or pass a difficult situation." },
                    { q: "We need to _____ down on expenses this month.", options: ["cut", "take", "make"], correct: 0, explanation: "To 'cut down on' means to reduce consumption/spending." },
                    { q: "The plane took _____ on time despite the fog.", options: ["off", "out", "away"], correct: 0, explanation: "A plane 'takes off'." },
                    { q: "She always stands _____ for her beliefs.", options: ["up", "out", "by"], correct: 0, explanation: "To 'stand up for' means to defend or support." },
                    { q: "He ended _____ living in New York after traveling the world.", options: ["up", "out", "in"], correct: 0, explanation: "To 'end up' means to eventually reach a state or place." },
                    { q: "I will look _____ the matter and get back to you.", options: ["into", "after", "over"], correct: 0, explanation: "To 'look into' means to investigate." },
                    { q: "The business was taken _____ by a larger corporation.", options: ["over", "up", "on"], correct: 0, explanation: "To 'take over' means to gain control of." },
                    { q: "Don't back _____ from your promise.", options: ["down", "out", "away"], correct: 1, explanation: "To 'back out of' a promise or agreement." },
                    { q: "They had to call _____ the search due to bad weather.", options: ["off", "out", "away"], correct: 0, explanation: "To 'call off' means to cancel." }
                ]
            }
        }
    }
};
