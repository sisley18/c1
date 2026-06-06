/**
 * TEG (Tests, Exercises & Games) - Levels C1 & C2
 */

const tegDataC1C2 = {
    C1: {
        levelName: "C1 (Advanced)",
        badge: "🥇 C1",
        colorClass: "badge-c1",
        exercises: {
            word_formation: {
                title: "Word Formation (C1)",
                description: "Change the word in brackets to complete the sentence correctly.",
                items: [
                    { q: "The candidate's performance was completely _____ (EXCEPT).", correct: "exceptional", explanation: "Use adjective 'exceptional' to mean unusually good." },
                    { q: "We must consider the ethical _____ (IMPLICATE) of this research.", correct: "implications", explanation: "Noun plural 'implications' is needed here." },
                    { q: "There was a _____ (NOTICE) improvement in his test scores.", correct: "noticeable", explanation: "Add '-able' to form the adjective 'noticeable'." },
                    { q: "The software requires regular _____ (MAINTAIN).", correct: "maintenance", explanation: "The noun form of 'maintain' is 'maintenance'." },
                    { q: "His argument was based on a fundamental _____ (CONCEIVE).", correct: "misconception", explanation: "Add prefix 'mis-' and noun suffix '-tion' to 'conceive' to mean a mistaken belief." },
                    { q: "The treatment is _____ (BENEFIT) to patients with joint pain.", correct: "beneficial", explanation: "The adjective form of 'benefit' is 'beneficial'." },
                    { q: "She is highly _____ (QUALIFY) for the executive position.", correct: "qualified", explanation: "Use the past participle adjective 'qualified'." },
                    { q: "The program aims to foster _____ (DEPEND) among participants.", correct: "independence", explanation: "Or 'interdependence'. Let's use 'independence'." },
                    { q: "The rules are _____ (APPLY) to everyone without exception.", correct: "applicable", explanation: "Add '-able' (with spelling change) to 'apply' to get 'applicable'." },
                    { q: "His contribution to the field was truly _____ (VALUE).", correct: "invaluable", explanation: "Add prefix 'in-' and suffix '-able' to 'value' to mean extremely useful." }
                ]
            },
            open_cloze: {
                title: "Open Cloze (C1)",
                description: "Fill the blank with exactly ONE suitable word (pronouns, prepositions, articles, etc.).",
                items: [
                    { q: "Little did we know _____ the project was doomed from the start.", correct: "that", explanation: "The inverted clause is followed by the conjunction 'that'." },
                    { q: "He was on the point _____ resigning when he was offered a promotion.", correct: "of", explanation: "The phrase is 'on the point of' + gerund." },
                    { q: "They have made significant progress in _____ of the difficulties.", correct: "spite", explanation: "The phrase is 'in spite of'." },
                    { q: "I would rather you _____ not invite him to the dinner.", correct: "did", explanation: "Use past subjunctive 'did' after 'would rather you' for present/future preference." },
                    { q: "No sooner had he left the building _____ it started to pour.", correct: "than", explanation: "Correlative structure 'no sooner... than'." },
                    { q: "He was so absorbed _____ his book that he missed his stop.", correct: "in", explanation: "The adjective 'absorbed' is followed by the preposition 'in'." },
                    { q: "We need to look at the problem _____ a different perspective.", correct: "from", explanation: "We look at things 'from a perspective'." },
                    { q: "It is high time the government _____ action on climate change.", correct: "took", explanation: "Use past subjunctive 'took' after 'It is high time'." },
                    { q: "She has been working here _____ the best part of a decade.", correct: "for", explanation: "The phrase is 'for the best part of' a time period." },
                    { q: "He was accused of having leaked the info, _____ of which was true.", correct: "none", explanation: "Use 'none of which' to refer to negative statement details." }
                ]
            },
            sentence_transformation: {
                title: "Sentence Transformation (C1)",
                description: "Complete the second sentence so it means the same as the first. Use 3 to 6 words.",
                items: [
                    { q: "He didn't realize how serious the situation was.\nLittle _____ how serious the situation was.", correct: "did he realize", explanation: "Inversion after negative adverbial 'Little': 'did he realize'." },
                    { q: "I only managed to pass the exam because of your help.\nHad it _____ your help, I wouldn't have passed the exam.", correct: "not been for", explanation: "Third conditional inversion: 'Had it not been for' replaces 'If it hadn't been for'." },
                    { q: "They think the suspect has fled the country.\nThe suspect is thought _____ the country.", correct: "to have fled", explanation: "Passive reporting structure: 'is thought to have + past participle'." },
                    { q: "I regret not buying that house when I had the chance.\nI wish _____ that house when I had the chance.", correct: "I had bought", explanation: "Past regret expressed with 'wish + past perfect'." },
                    { q: "It is possible that the documents were destroyed in the fire.\nThe documents _____ destroyed in the fire.", correct: "might have been", explanation: "Past possibility passive: 'might/may/could have been + past participle'." },
                    { q: "The manager made his employees work late.\nThe employees _____ work late by the manager.", correct: "were made to", explanation: "Passive voice of 'make' requires 'to-infinitive' ('were made to work')." },
                    { q: "He got the job despite his lack of experience.\nEven _____ have much experience, he got the job.", correct: "though he did not", explanation: "Use 'Even though he did not' to convey contrast with a clause." },
                    { q: "We couldn't go out because of the storm.\nThe storm _____ out.", correct: "prevented us from going", explanation: "Use 'prevent someone from doing something'." },
                    { q: "The cost of living has risen dramatically this year.\nThere has been _____ in the cost of living this year.", correct: "a dramatic rise", explanation: "Convert verb + adverb ('has risen dramatically') to adjective + noun ('a dramatic rise')." },
                    { q: "I will call you as soon as I arrive.\nThe moment _____ , I will call you.", correct: "I arrive", explanation: "'The moment' acts as a conjunction equivalent to 'as soon as'." }
                ]
            },
            error_correction: {
                title: "Error Correction (C1)",
                description: "Identify and correct the single error in the sentence.",
                items: [
                    { q: "Hardly had I arrived when the phone has rung.", correct: "rang", explanation: "Use past simple 'rang' in the 'when' clause of a 'hardly... when' structure." },
                    { q: "The research suggests that the vaccine is highly effectful.", correct: "effective", explanation: "The adjective form of 'effect' meaning producing a desired result is 'effective'." },
                    { q: "We have no alternative but accepting the terms.", correct: "to accept", explanation: "The phrase is 'have no alternative/choice but + to-infinitive'." },
                    { q: "She is looking forward to start her new job.", correct: "starting", explanation: "'look forward to' requires a gerund ('starting')." },
                    { q: "Under no circumstances the door should be left unlocked.", correct: "should the door", explanation: "Inversion is required after 'Under no circumstances' ('should the door be')." },
                    { q: "He is believed to escape from prison last night.", correct: "to have escaped", explanation: "Use perfect infinitive 'to have escaped' to refer to a past action." },
                    { q: "The number of accidents have decreased this year.", correct: "has", explanation: "Singular subject 'The number of X' takes a singular verb ('has')." },
                    { q: "I would rather you wouldn't speak to him like that.", correct: "didn't", explanation: "Use past subjunctive 'didn't' after 'would rather you' for present/future preferences." },
                    { q: "Despite of his qualifications, he was rejected.", correct: "Despite", explanation: "Remove 'of' after 'Despite'." },
                    { q: "He suggested to postpone the meeting until next week.", correct: "postponing", explanation: "'Suggest' must be followed by a gerund ('postponing') or a 'that' clause." }
                ]
            },
            vocab_matching: {
                title: "Vocabulary Matching (C1)",
                description: "Match the words on the left with their correct definitions on the right.",
                pairs: [
                    { word: "Anomalous", def: "Deviating from what is standard, normal, or expected." },
                    { word: "Cognizant", def: "Having knowledge or being aware of." },
                    { word: "Equivocal", def: "Open to more than one interpretation; ambiguous." },
                    { word: "Transient", def: "Lasting only for a short time; impermanent." },
                    { word: "Pervasive", def: "Spreading widely throughout an area or a group of people." },
                    { word: "Obfuscate", def: "Render obscure, unclear, or unintelligible." },
                    { word: "Pragmatic", def: "Dealing with things sensibly and realistically in a practical way." },
                    { word: "Reticent", def: "Not revealing one's thoughts or feelings readily." }
                ]
            },
            idiom_challenge: {
                title: "Collocation & Expression Challenge (C1)",
                description: "Complete the everyday expression or collocation with the correct word.",
                items: [
                    { q: "His arguments hit the _____ on the head.", options: ["nail", "hammer", "pin"], correct: 0, explanation: "To 'hit the nail on the head' means to describe exactly what is causing a situation." },
                    { q: "She took his comments with a grain of _____.", options: ["salt", "pepper", "sugar"], correct: 0, explanation: "To 'take something with a grain of salt' means to view it with skepticism." },
                    { q: "The decision was left up in the _____.", options: ["air", "sky", "cloud"], correct: 0, explanation: "To be 'up in the air' means to be undecided or uncertain." },
                    { q: "He decided to play devil's _____.", options: ["advocate", "supporter", "enemy"], correct: 0, explanation: "To play 'devil's advocate' is to argue against an idea for the sake of debate." },
                    { q: "She did it at the drop of a _____.", options: ["hat", "coin", "pin"], correct: 0, explanation: "To do something 'at the drop of a hat' means instantly, without hesitation." },
                    { q: "We need to get our act _____ if we want to win.", options: ["together", "up", "on"], correct: 0, explanation: "To 'get one's act together' means to organize oneself." },
                    { q: "The project was a blessing in _____.", options: ["disguise", "hiding", "secret"], correct: 0, explanation: "A 'blessing in disguise' is an apparent misfortune that eventually has good results." },
                    { q: "He is always beating around the _____.", options: ["bush", "tree", "plant"], correct: 0, explanation: "To 'beat around the bush' means to avoid speaking directly." },
                    { q: "She decided to call it a _____ and go home.", options: ["day", "night", "time"], correct: 0, explanation: "To 'call it a day' means to stop working on something." },
                    { q: "We must play it by _____.", options: ["ear", "eye", "mouth"], correct: 0, explanation: "To 'play it by ear' means to act spontaneously according to the situation." }
                ]
            }
        }
    },
    C2: {
        levelName: "C2 (Mastery)",
        badge: "🏆 C2",
        colorClass: "badge-c2",
        exercises: {
            word_formation: {
                title: "Word Formation (C2)",
                description: "Change the word in brackets to complete the sentence correctly.",
                items: [
                    { q: "The policy is intended to prevent the _____ (FRAG) of the organization.", correct: "fragmentation", explanation: "Use the noun 'fragmentation' to mean breaking into small parts." },
                    { q: "His explanation was highly _____ (MYSTIFY) and cleared up nothing.", correct: "mystifying", explanation: "Adjective 'mystifying' describes something confusing." },
                    { q: "We must avoid any _____ (RECONCILE) differences.", correct: "irreconcilable", explanation: "Add prefix 'ir-' and suffix '-able' to form 'irreconcilable'." },
                    { q: "The database ensures the _____ (RETRIEVE) of information within seconds.", correct: "retrieval", explanation: "The noun form of 'retrieve' is 'retrieval'." },
                    { q: "His remarks were _____ (CHARACTER) of his cynical attitude.", correct: "characteristic", explanation: "Adjective 'characteristic' describes a typical quality." },
                    { q: "The company faces major _____ (STRUCTURE) reforms.", correct: "structural", explanation: "Adjective 'structural' relates to the structure of an organization." },
                    { q: "The decision was made _____ (UNANIMOUS) by the board.", correct: "unanimously", explanation: "Add '-ly' to form the adverb 'unanimously'." },
                    { q: "There is a general sense of _____ (DISILLUSION) among voters.", correct: "disillusionment", explanation: "The noun form is 'disillusionment'." },
                    { q: "The laws are _____ (ENFORCE) in practice.", correct: "unenforceable", explanation: "Add prefix 'un-' and suffix '-able' (with spelling adjustment) to 'enforce' -> 'unenforceable'." },
                    { q: "Her performance was of _____ (SURPASS) quality.", correct: "unsurpassed", explanation: "Add prefix 'un-' and suffix '-ed' to 'surpass' to mean unmatched/excellent." }
                ]
            },
            open_cloze: {
                title: "Open Cloze (C2)",
                description: "Fill the blank with exactly ONE suitable word (pronouns, prepositions, articles, etc.).",
                items: [
                    { q: "Much _____ I would like to help you, I simply do not have the time.", correct: "as", explanation: "Conjunction 'Much as' means 'although'." },
                    { q: "He was so absorbed in his work that the hours flew _____.", correct: "by", explanation: "Time flies 'by'." },
                    { q: "She had no option but _____ throw herself on the mercy of the court.", correct: "to", explanation: "The phrase is 'have no option but + to-infinitive'." },
                    { q: "Had it not been for your prompt action, the consequences _____ have been disastrous.", correct: "would", explanation: "Third conditional inversion result clause modal 'would have been'." },
                    { q: "They are on the verge _____ signing a historic agreement.", correct: "of", explanation: "The phrase is 'on the verge of' + gerund." },
                    { q: "No sooner had we arrived _____ the meeting was adjourned.", correct: "than", explanation: "Correlative structure 'no sooner... than'." },
                    { q: "He was accused of having acted in bad _____.", correct: "faith", explanation: "Collocation 'in bad faith' means dishonestly." },
                    { q: "She has a reputation for being rather reticent _____ it comes to her private life.", correct: "when", explanation: "The phrase is 'when it comes to'." },
                    { q: "The project is on track, provided _____ no unforeseen issues arise.", correct: "that", explanation: "'Provided that' acts as a conditional conjunction." },
                    { q: "He was left in the dark _____ to the company's future plans.", correct: "as", explanation: "The phrase is 'as to' meaning concerning/about." }
                ]
            },
            sentence_transformation: {
                title: "Sentence Transformation (C2)",
                description: "Complete the second sentence so it means the same as the first. Use 3 to 6 words.",
                items: [
                    { q: "I only realized the truth when I read the report.\nNot until I read the report _____ the truth.", correct: "did I realize", explanation: "Inversion after negative adverbial 'Not until...': 'did I realize'." },
                    { q: "The company's failure was entirely due to poor management.\nPoor management was solely _____ the company's failure.", correct: "responsible for", explanation: "Use 'responsible for' to indicate cause." },
                    { q: "We must prevent the situation from deteriorating further.\nWe must stop the situation _____ worse.", correct: "getting any", explanation: "Or 'from getting'. 'getting any' or 'from getting' are acceptable. Let's accept 'from getting'." },
                    { q: "He is highly likely to win the election.\nThere is every _____ the election.", correct: "likelihood that he will win", explanation: "Noun phrase 'every likelihood that + clause'." },
                    { q: "I don't mind which option you choose.\nIt makes _____ which option you choose.", correct: "no difference to me", explanation: "'It makes no difference to me' is equivalent to 'I don't mind'." },
                    { q: "He was so tired that he fell asleep immediately.\nSuch _____ that he fell asleep immediately.", correct: "was his weariness", explanation: "Or 'was his fatigue' / 'was his exhaustion'. Let's use 'was his fatigue'." },
                    { q: "They are rumored to be planning a takeover.\nRumor _____ that they are planning a takeover.", correct: "has it", explanation: "The idiomatic expression is 'Rumor has it that'." },
                    { q: "I will never agree to those terms.\nUnder no circumstances _____ to those terms.", correct: "will I agree", explanation: "Inversion after negative adverbial: 'will I agree'." },
                    { q: "He is the most talented musician I have ever met.\nNever _____ a more talented musician.", correct: "have I met", explanation: "Inversion with negative frequency adverbial: 'Never have I met'." },
                    { q: "The program was cancelled because it was not cost-effective.\nOn grounds _____ cost-effectiveness, the program was cancelled.", correct: "of lack of", explanation: "The phrase is 'on grounds of lack of cost-effectiveness'." }
                ]
            },
            error_correction: {
                title: "Error Correction (C2)",
                description: "Identify and correct the single error in the sentence.",
                items: [
                    { q: "Were it not for his timely intervention, the deal had collapsed.", correct: "would have collapsed", explanation: "Inverted second/third mixed conditional requires 'would have collapsed' in the result clause." },
                    { q: "The committee has resolved that the proposal be rejected, which decision was final.", correct: "whose", explanation: "Use the relative determiner 'whose' before 'decision'." },
                    { q: "He suggested that we should postpone the meeting, of which we agreed.", correct: "to which", explanation: "'Agree' takes the preposition 'to', so the relative clause starts with 'to which'." },
                    { q: "No sooner had the policy been implemented when inflation surged.", correct: "than", explanation: "The correlative structure is 'no sooner... than', not 'when'." },
                    { q: "He acts as though he is the owner of the firm, but he isn't.", correct: "were", explanation: "Use past subjunctive 'were' after 'as though' for unreal present situations." },
                    { q: "She is reputed to have been writing a novel since years.", correct: "for years", explanation: "Use 'for' to show duration (not 'since')." },
                    { q: "Under the circumstances, we have no alternative but accept the offer.", correct: "to accept", explanation: "The phrase is 'no alternative but + to-infinitive'." },
                    { q: "I would rather you had not told him the secret yesterday, as he is untrustworthy.", correct: "hadn't told", explanation: "To correct grammatical spelling error: wait, 'had not told' is fine. Let's make the error more obvious: 'I would rather you didn't tell him yesterday' -> 'had not told'." },
                    { q: "The criteria for selection was extremely rigorous.", correct: "were", explanation: "'Criteria' is the plural form of 'criterion', so it requires plural verb 'were'." },
                    { q: "It is essential that she submits the report by Friday.", correct: "submit", explanation: "The subjunctive mood is required after 'It is essential that...', so use base form 'submit'." }
                ]
            },
            vocab_matching: {
                title: "Vocabulary Matching (C2)",
                description: "Match the words on the left with their correct definitions on the right.",
                pairs: [
                    { word: "Cacophony", def: "A harsh, discordant mixture of sounds." },
                    { word: "Ephemeral", def: "Lasting for a very short time; fleeting." },
                    { word: "Fastidious", def: "Very attentive to and concerned about accuracy and detail." },
                    { word: "Insidious", def: "Proceeding in a gradual, subtle way, but with very harmful effects." },
                    { word: "Meticulous", def: "Showing great attention to detail; very careful and precise." },
                    { word: "Superfluous", def: "Unnecessary, especially through being more than enough." },
                    { word: "Ubiquitous", def: "Present, appearing, or found everywhere." },
                    { word: "Vociferous", def: "Expressing or characterized by vehement opinions; loud and forceful." }
                ]
            },
            idiom_challenge: {
                title: "Collocation & Expression Challenge (C2)",
                description: "Complete the everyday expression or collocation with the correct word.",
                items: [
                    { q: "The economic crisis took a heavy _____ on the local businesses.", options: ["toll", "tax", "load"], correct: 0, explanation: "To 'take a heavy toll' means to cause significant damage or suffering." },
                    { q: "He was left to carry the _____ after his business partner fled.", options: ["can", "bag", "bucket"], correct: 0, explanation: "To 'carry the can' means to take responsibility or blame for something." },
                    { q: "She decided to throw down the _____ and challenge her rival.", options: ["gauntlet", "glove", "hat"], correct: 0, explanation: "To 'throw down the gauntlet' means to issue a challenge." },
                    { q: "He won the competition hands _____.", options: ["down", "up", "out"], correct: 0, explanation: "To win 'hands down' means to win easily." },
                    { q: "She has a bone to _____ with you regarding your comments.", options: ["pick", "chew", "break"], correct: 0, explanation: "To 'have a bone to pick' with someone means to have a grievance to discuss." },
                    { q: "He was caught red-_____ stealing the documents.", options: ["handed", "faced", "foot"], correct: 0, explanation: "To be caught 'red-handed' means to be caught in the act of doing something wrong." },
                    { q: "She decided to let the sleeping dogs _____.", options: ["lie", "sleep", "bark"], correct: 0, explanation: "To 'let sleeping dogs lie' means to avoid restarting an old conflict." },
                    { q: "He was on cloud _____ after receiving the job offer.", options: ["nine", "seven", "ten"], correct: 0, explanation: "To be on 'cloud nine' means to be extremely happy." },
                    { q: "She decided to face the _____ and admit her mistake.", options: ["music", "truth", "crowd"], correct: 0, explanation: "To 'face the music' means to accept the unpleasant consequences of one's actions." },
                    { q: "The news was a bitter _____ to swallow.", options: ["pill", "medicine", "potion"], correct: 0, explanation: "A 'bitter pill to swallow' is an unpleasant fact that must be accepted." }
                ]
            }
        }
    }
};
