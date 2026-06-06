/**
 * TEG (Tests, Exercises & Games) - Levels A1 & A2
 */

const tegDataA1A2 = {
    A1: {
        levelName: "A1 (Beginner)",
        badge: "🥉 A1",
        colorClass: "badge-a1",
        exercises: {
            word_formation: {
                title: "Word Formation (A1)",
                description: "Change the word in brackets to complete the sentence correctly.",
                items: [
                    { q: "My sister is very _____ (HAPPY) today.", correct: "happy", explanation: "We use the adjective 'happy' to describe a feeling." },
                    { q: "She is a beautiful _____ (SING).", correct: "singer", explanation: "Add '-er' to the verb 'sing' to make the noun for a person." },
                    { q: "It is a very _____ (SUN) day today.", correct: "sunny", explanation: "Add '-ny' to the noun 'sun' to make the adjective 'sunny'." },
                    { q: "The children play _____ (HAPPY) in the garden.", correct: "happily", explanation: "Change '-y' to '-ily' to make the adverb 'happily'." },
                    { q: "He works in a bank. He is a bank _____ (MANAGE).", correct: "manager", explanation: "Add '-r' to make the noun 'manager' (a job)." },
                    { q: "This cake is very _____ (SWEET).", correct: "sweet", explanation: "No change needed, 'sweet' is the correct adjective form." },
                    { q: "We live in a _____ (BEAUTY) house.", correct: "beautiful", explanation: "Change 'beauty' to the adjective 'beautiful'." },
                    { q: "My brother is a _____ (DENT).", correct: "dentist", explanation: "Add '-ist' to create the noun for the profession." },
                    { q: "The weather is very _____ (COLD) in winter.", correct: "cold", explanation: "'Cold' is the correct adjective for low temperatures." },
                    { q: "Please drive _____ (SLOW) in this street.", correct: "slowly", explanation: "Add '-ly' to 'slow' to make the adverb 'slowly'." }
                ]
            },
            open_cloze: {
                title: "Open Cloze (A1)",
                description: "Fill the blank with exactly ONE suitable word (pronouns, prepositions, articles, etc.).",
                items: [
                    { q: "I live _____ London with my parents.", correct: "in", explanation: "We use the preposition 'in' for cities." },
                    { q: "She has _____ apple and a banana in her bag.", correct: "an", explanation: "Use 'an' before words starting with a vowel sound." },
                    { q: "What is _____ name? My name is John.", correct: "your", explanation: "Use the possessive adjective 'your' to ask a person." },
                    { q: "There _____ two dogs in the garden.", correct: "are", explanation: "Use 'are' for plural countable nouns ('two dogs')." },
                    { q: "They go to school _____ bus.", correct: "by", explanation: "We say 'by bus' to show the mode of transport." },
                    { q: "He works _____ a hospital. He is a doctor.", correct: "in", explanation: "We work 'in' a building/hospital." },
                    { q: "This is my friend. _____ name is Sarah.", correct: "Her", explanation: "Use the possessive adjective 'Her' for a female friend." },
                    { q: "Do you like _____ coffee or tea?", correct: "your", explanation: "Or 'Do you like ___ coffee...' -> 'your' or 'to' or 'some'. Let's make it simpler: 'Do you like ___ drink coffee?' -> 'to'." },
                    { q: "We always watch TV _____ night.", correct: "at", explanation: "The time expression is 'at night'." },
                    { q: "I _____ play tennis, but I like football.", correct: "don't", explanation: "Use 'don't' (do not) for negative simple present." }
                ]
            },
            sentence_transformation: {
                title: "Sentence Transformation (A1)",
                description: "Complete the second sentence so it means the same as the first. Use 1 to 3 words.",
                items: [
                    { q: "This car belongs to me.\nThis is _____ car.", correct: "my", explanation: "'Belongs to me' means it is 'my car'." },
                    { q: "We have two cats.\nThere _____ in our house.", correct: "are two cats", explanation: "Use 'There are two cats' to show existence in plural." },
                    { q: "He is a good football player.\nHe plays football _____.", correct: "well", explanation: "The adverb form of 'good' is 'well'." },
                    { q: "My home is not far from the school.\nMy home is _____ to the school.", correct: "close", explanation: "'Not far' is synonym to 'close' (or 'near')." },
                    { q: "She is taller than her sister.\nHer sister is _____ than her.", correct: "shorter", explanation: The opposite of 'taller' is 'shorter'." },
                    { q: "I am twelve years old.\nMy age _____ twelve.", correct: "is", explanation: "Use the verb 'is' with 'My age'." },
                    { q: "Do you play tennis?\nAre _____ a tennis player?", correct: "you", explanation: "'Do you play' translates to 'Are you a...'" },
                    { q: "They don't have any money.\nThey have _____ money.", correct: "no", explanation: "'Don't have any' is equivalent to 'have no'." },
                    { q: "The restaurant is behind the bank.\nThe bank is in _____ of the restaurant.", correct: "front", explanation: "The opposite of 'behind' is 'in front of'." },
                    { q: "I like coffee more than tea.\nI _____ coffee to tea.", correct: "prefer", explanation: "'Like more than' means 'prefer'." }
                ]
            },
            error_correction: {
                title: "Error Correction (A1)",
                description: "Identify and correct the single error in the sentence.",
                items: [
                    { q: "He live in Madrid with his wife.", correct: "lives", explanation: "Third-person singular 'he' requires 'lives' in present simple." },
                    { q: "She don't like milk.", correct: "doesn't", explanation: "Use 'doesn't' (does not) for third-person singular negative." },
                    { q: "Where is the keys?", correct: "are", explanation: "'Keys' is plural, so we use 'are' instead of 'is'." },
                    { q: "I have twenty-one years old.", correct: "am", explanation: "In English, we use the verb 'to be' for age: 'I am...'." },
                    { q: "We went to the cinema yesterday night.", correct: "last", explanation: "The correct collocation is 'last night', not 'yesterday night'." },
                    { q: "There are much books on the table.", correct: "many", explanation: "Use 'many' (or 'a lot of') for plural countable nouns like 'books'." },
                    { q: "He drives very good.", correct: "well", explanation: "Use the adverb 'well' to modify the verb 'drives'." },
                    { q: "I like very much chocolate.", correct: "like chocolate very much", explanation: "The object 'chocolate' must come right after the verb 'like': 'I like chocolate very much'." },
                    { q: "They are playing tennis on Sundays.", correct: "play", explanation: "For habits/routines on Sundays, use simple present 'play' instead of present continuous." },
                    { q: "She is more tall than me.", correct: "taller", explanation: "Short adjectives like 'tall' form the comparative with '-er' ('taller')." }
                ]
            },
            vocab_matching: {
                title: "Vocabulary Matching (A1)",
                description: "Match the words on the left with their correct definitions on the right.",
                pairs: [
                    { word: "Library", def: "A place where you can borrow books." },
                    { word: "Chef", def: "A professional cook in a restaurant." },
                    { word: "Kitchen", def: "The room where you cook food." },
                    { word: "Keys", def: "Metal objects used to open doors." },
                    { word: "Doctor", def: "A person who helps sick people." },
                    { word: "Jacket", def: "A short coat worn for warmth." },
                    { word: "Train", def: "A long vehicle that travels on tracks." },
                    { word: "Wallet", def: "A small folder for money and cards." }
                ]
            },
            idiom_challenge: {
                title: "Collocation & Expression Challenge (A1)",
                description: "Complete the everyday expression or collocation with the correct word.",
                items: [
                    { q: "I always _____ my bed in the morning.", options: ["make", "do", "take"], correct: 0, explanation: "The correct collocation is 'make my bed'." },
                    { q: "We usually _____ lunch at 1:00 PM.", options: ["take", "have", "do"], correct: 1, explanation: "We say 'have lunch/breakfast/dinner'." },
                    { q: "Can I _____ a photo of you?", options: ["take", "make", "get"], correct: 0, explanation: "We say 'take a photo' or 'take a picture'." },
                    { q: "He works hard to _____ money.", options: ["win", "earn", "do"], correct: 1, explanation: "We 'earn money' by working." },
                    { q: "I need to _____ shopping for dinner.", options: ["go", "make", "do"], correct: 0, explanation: "We say 'go shopping'." },
                    { q: "Don't forget to _____ your homework.", options: ["do", "make", "write"], correct: 0, explanation: "The correct collocation is 'do homework'." },
                    { q: "She decided to _____ a shower.", options: ["take", "make", "do"], correct: 0, explanation: "We say 'take a shower' or 'have a shower'." },
                    { q: "He likes to _____ time with friends.", options: ["spend", "pass", "use"], correct: 0, explanation: "We say 'spend time' with someone." },
                    { q: "Could you _____ me a favour?", options: ["make", "do", "give"], correct: 1, explanation: "The correct expression is 'do a favour'." },
                    { q: "I always _____ my teeth twice a day.", options: ["wash", "brush", "clean"], correct: 1, explanation: "We 'brush our teeth'." }
                ]
            }
        }
    },
    A2: {
        levelName: "A2 (Elementary)",
        badge: "🥈 A2",
        colorClass: "badge-a2",
        exercises: {
            word_formation: {
                title: "Word Formation (A2)",
                description: "Change the word in brackets to complete the sentence correctly.",
                items: [
                    { q: "The city was very _____ (NOISE) last night.", correct: "noisy", explanation: "Change the noun 'noise' to the adjective 'noisy'." },
                    { q: "His English is improving. He speaks very _____ (GOOD) now.", correct: "well", explanation: "'Well' is the adverb of 'good', modifying 'speaks'." },
                    { q: "She answered all the questions _____ (EASY).", correct: "easily", explanation: "Change 'easy' to adverb 'easily'." },
                    { q: "The _____ (WRITE) of this book is famous.", correct: "writer", explanation: "Add '-er' to the verb 'write' to get the person noun." },
                    { q: "This is a very _____ (DANGER) road.", correct: "dangerous", explanation: "Add '-ous' to noun 'danger' to get the adjective." },
                    { q: "The film was so _____ (BORE). I fell asleep.", correct: "boring", explanation: "Use '-ing' adjective 'boring' to describe the film." },
                    { q: "She felt _____ (TIRED) after the long walk.", correct: "tired", explanation: "Use '-ed' adjective 'tired' to describe a feeling." },
                    { q: "The team played _____ (BAD) and lost the game.", correct: "badly", explanation: "Add '-ly' to 'bad' to make the adverb." },
                    { q: "We need more _____ (INFORM) about the hotel.", correct: "information", explanation: "The noun form of 'inform' is 'information'." },
                    { q: "Be _____ (CARE)! The floor is wet.", correct: "careful", explanation: "Add '-ful' to 'care' to get the adjective." }
                ]
            },
            open_cloze: {
                title: "Open Cloze (A2)",
                description: "Fill the blank with exactly ONE suitable word (pronouns, prepositions, articles, etc.).",
                items: [
                    { q: "Have you _____ been to Italy?", correct: "ever", explanation: "Use 'ever' in present perfect questions about experiences." },
                    { q: "I am going to the supermarket _____ buy some fruit.", correct: "to", explanation: "Use the infinitive particle 'to' to express purpose." },
                    { q: "This is the restaurant _____ we had dinner last week.", correct: "where", explanation: "Use the relative pronoun 'where' for places." },
                    { q: "She is much taller _____ her brother.", correct: "than", explanation: "Use 'than' for comparative comparisons." },
                    { q: "I haven't finished my homework _____.", correct: "yet", explanation: "Use 'yet' at the end of negative present perfect sentences." },
                    { q: "There are _____ many people in the room; it is crowded.", correct: "too", explanation: "Use 'too' to indicate an excessive quantity." },
                    { q: "He woke up early, _____ he still missed the train.", correct: "but", explanation: "Use 'but' to show contrast." },
                    { q: "If it rains, we _____ stay at home.", correct: "will", explanation: "First conditional uses 'will' in the result clause." },
                    { q: "Whose coat is this? It's _____ (mine/yours/hers). Let's use: It belongs _____ me.", correct: "to", explanation: "The verb 'belong' takes the preposition 'to'." },
                    { q: "She arrived _____ the airport late yesterday.", correct: "at", explanation: "Use 'arrive at' for specific buildings/airports." }
                ]
            },
            sentence_transformation: {
                title: "Sentence Transformation (A2)",
                description: "Complete the second sentence so it means the same as the first. Use 1 to 3 words.",
                items: [
                    { q: "I visited Rome two years ago.\nI was in Rome _____ years.", correct: "two years ago", explanation: "Keep the timeframe: 'two years ago' or 'for two years' -> 'two years ago'." },
                    { q: "There is a kitchen in the flat.\nThe flat _____ a kitchen.", correct: "has", explanation: "'There is X in Y' means 'Y has X'." },
                    { q: "He is a fast runner.\nHe runs _____.", correct: "fast", explanation: "'Fast' is both an adjective and an adverb." },
                    { q: "I don't think it is a good idea to go out.\nYou _____ go out.", correct: "should not", explanation: "'I don't think it is a good idea' can be rephrased as 'should not'." },
                    { q: "This is the first time I have eaten sushi.\nI have _____ eaten sushi before.", correct: "never", explanation: "'First time' implies 'never... before'." },
                    { q: "We don't have enough plates.\nWe have too _____ plates.", correct: "few", explanation: "'Not enough countable' means 'too few'." },
                    { q: "The ticket was cheaper than I expected.\nThe ticket was not as _____ I expected.", correct: "expensive as", explanation: "'Cheaper than' is 'not as expensive as'." },
                    { q: "It began to rain during our picnic.\nIt began to rain while we _____ having a picnic.", correct: "were", explanation: "Use past continuous 'were' after 'while'." },
                    { q: "Who does this watch belong to?\nWhose watch _____?", correct: "is this", explanation: "'Who does X belong to' is equivalent to 'Whose X is this'." },
                    { q: "He is too young to drive a car.\nHe is not old _____ to drive a car.", correct: "enough", explanation: "'Too young' is equivalent to 'not old enough'." }
                ]
            },
            error_correction: {
                title: "Error Correction (A2)",
                description: "Identify and correct the single error in the sentence.",
                items: [
                    { q: "I have seen him yesterday.", correct: "saw", explanation: "Use past simple 'saw' for a specific finished time ('yesterday')." },
                    { q: "He is more bad than his classmate.", correct: "worse", explanation: "The comparative of the irregular adjective 'bad' is 'worse'." },
                    { q: "I am looking forward to meet you.", correct: "meeting", explanation: "The prepositional phrase 'look forward to' must be followed by gerund '-ing'." },
                    { q: "Every students in the class passed.", correct: "student", explanation: "'Every' must be followed by a singular countable noun ('student')." },
                    { q: "She can to speak French very well.", correct: "speak", explanation: "Modal verbs like 'can' are followed by the bare infinitive (no 'to')." },
                    { q: "I have a lot of works to do.", correct: "work", explanation: "'Work' is an uncountable noun when referring to tasks." },
                    { q: "He said me that he was tired.", correct: "told", explanation: "'Say' cannot take a direct personal object without 'to'; use 'told' instead." },
                    { q: "If I will see her, I will tell her.", correct: "see", explanation: "In the 'if' clause of a first conditional, use simple present, not 'will'." },
                    { q: "She has 25 years.", correct: "is 25", explanation: "In English, we say 'She is 25' or 'She is 25 years old'." },
                    { q: "The police is coming to help.", correct: "are", explanation: "'Police' is a plural collective noun and takes a plural verb ('are')." }
                ]
            },
            vocab_matching: {
                title: "Vocabulary Matching (A2)",
                description: "Match the words on the left with their correct definitions on the right.",
                pairs: [
                    { word: "Passenger", def: "A person traveling in a train, bus, or car." },
                    { word: "Century", def: "A period of one hundred years." },
                    { word: "Receipt", def: "A piece of paper proving you bought something." },
                    { word: "Customer", def: "A person who buys goods or services." },
                    { word: "Stadium", def: "A large sports arena with seats for spectators." },
                    { word: "Fever", def: "An abnormally high body temperature." },
                    { word: "Map", def: "A visual drawing showing areas of land or sea." },
                    { word: "Blanket", def: "A warm cover used on a bed." }
                ]
            },
            idiom_challenge: {
                title: "Collocation & Expression Challenge (A2)",
                description: "Complete the everyday expression or collocation with the correct word.",
                items: [
                    { q: "Could you please _____ me a hand with this bag?", options: ["give", "make", "take"], correct: 0, explanation: "To 'give someone a hand' means to help them." },
                    { q: "I always _____ in touch with my childhood friends.", options: ["keep", "hold", "save"], correct: 0, explanation: "To 'keep in touch' is to maintain communication." },
                    { q: "We need to _____ a decision soon.", options: ["make", "do", "take"], correct: 0, explanation: "We 'make a decision'." },
                    { q: "They got lost and _____ their way.", options: ["missed", "lost", "forgot"], correct: 1, explanation: "The phrase is 'lose one's way'." },
                    { q: "She fell in _____ with classical music.", options: ["love", "like", "heart"], correct: 0, explanation: "To 'fall in love' with something." },
                    { q: "Let's _____ a party next weekend!", options: ["have", "make", "do"], correct: 0, explanation: "We say 'have a party' or 'throw a party'." },
                    { q: "He did not want to _____ an argument.", options: ["start", "make", "do"], correct: 0, explanation: "We 'start/get into an argument'." },
                    { q: "I need to _____ an appointment with the doctor.", options: ["make", "do", "have"], correct: 0, explanation: "We 'make an appointment'." },
                    { q: "Don't _____ fun of your classmates.", options: ["make", "do", "have"], correct: 0, explanation: "To 'make fun of' means to tease or mock." },
                    { q: "We should _____ the bus before it leaves.", options: ["catch", "take", "hold"], correct: 0, explanation: "We 'catch the bus' or 'take the bus'." }
                ]
            }
        }
    }
};
