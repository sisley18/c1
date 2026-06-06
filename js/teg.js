/**
 * TEG (Tests, Exercises & Games) Main Logic
 */

let currentLevel = 'A1';
let currentTab = 'word_formation';
let activeStudent = 'student1';
let timerInterval = null;
let timeLeft = 180; // 3 minutes in seconds
let isTimerActive = false;
let shuffledIndices = {}; // Stores shuffled order of questions

// Default student profiles
let students = {
    student1: { name: "Student 1", scores: {} },
    student2: { name: "Student 2", scores: {} }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadStudents();
    setLevel('A1');
});

// Google Neural TTS variables
let ttsAudio = new Audio();
let ttsChunks = [];
let currentTtsIdx = 0;
let isTtsPlaying = false;

function splitText(text, maxLen = 180) {
    const chunks = [];
    let rem = text;
    while (rem.length > 0) {
        if (rem.length <= maxLen) { chunks.push(rem); break; }
        let idx = rem.lastIndexOf('. ', maxLen);
        if (idx === -1) idx = rem.lastIndexOf('? ', maxLen);
        if (idx === -1) idx = rem.lastIndexOf('! ', maxLen);
        if (idx === -1) idx = rem.lastIndexOf(', ', maxLen);
        if (idx === -1) idx = rem.lastIndexOf(' ', maxLen);
        if (idx === -1) idx = maxLen;
        chunks.push(rem.substring(0, idx + 1).trim());
        rem = rem.substring(idx + 1).trim();
    }
    return chunks.filter(c => c.length > 0);
}

// Load student profile data from localStorage
function loadStudents() {
    const saved = localStorage.getItem('teg_students');
    if (saved) {
        try {
            students = JSON.parse(saved);
        } catch (e) {
            console.error("Failed to parse saved students", e);
        }
    }
    updateStudentUI();
}

function saveStudents() {
    localStorage.setItem('teg_students', JSON.stringify(students));
}

function updateStudentUI() {
    document.getElementById('student1-btn').textContent = students.student1.name;
    document.getElementById('student2-btn').textContent = students.student2.name;
    
    document.getElementById('student1-btn').className = `student-slot ${activeStudent === 'student1' ? 'active' : ''}`;
    document.getElementById('student2-btn').className = `student-slot ${activeStudent === 'student2' ? 'active' : ''}`;
    
    document.getElementById('student-name-input').value = students[activeStudent].name;
    
    // Refresh level mini progress bars
    ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].forEach(lvl => {
        updateLevelProgress(lvl);
    });
}

function switchStudent(slot) {
    activeStudent = slot;
    updateStudentUI();
    loadActiveExercise();
}

function renameStudent(newName) {
    newName = newName.trim();
    if (newName) {
        students[activeStudent].name = newName;
        saveStudents();
        updateStudentUI();
    }
}

// Level navigation
function setLevel(level) {
    currentLevel = level;
    
    // Update level cards UI
    document.querySelectorAll('.level-card').forEach(card => {
        card.classList.remove('active');
    });
    const activeCard = document.getElementById(`level-card-${level.toLowerCase()}`);
    if (activeCard) {
        activeCard.classList.add('active');
    }
    
    // Get accent color for level
    const colors = { A1: '#22c55e', A2: '#3b82f6', B1: '#eab308', B2: '#f97316', C1: '#a855f7', C2: '#ef4444' };
    document.documentElement.style.setProperty('--level-color', colors[level]);
    
    // Reset timer
    stopTimer();
    
    // Load default tab
    setTab(currentTab);
}

function setTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeTabBtn = document.getElementById(`tab-btn-${tab}`);
    if (activeTabBtn) {
        activeTabBtn.classList.add('active');
    }
    
    loadActiveExercise();
}

// Get the current level data from global window variables loaded from data files
function getLevelData() {
    if (['A1', 'A2'].includes(currentLevel)) {
        return tegDataA1A2[currentLevel];
    } else if (['B1', 'B2'].includes(currentLevel)) {
        return tegDataB1B2[currentLevel];
    } else {
        return tegDataC1C2[currentLevel];
    }
}

// Load question layout
function loadActiveExercise() {
    const levelData = getLevelData();
    if (!levelData || !levelData.exercises[currentTab]) {
        console.error("Data not found for", currentLevel, currentTab);
        return;
    }
    
    const exercise = levelData.exercises[currentTab];
    
    // Header details
    document.getElementById('exercise-title').innerHTML = `${exercise.title} <button class="speaker-btn" onclick="speakPhrase('${exercise.title.replace(/'/g, "\\'")}')">🔊</button>`;
    document.getElementById('exercise-description').textContent = exercise.description;
    
    // Reset container
    const container = document.getElementById('exercise-container');
    container.innerHTML = '';
    
    // Initialize shuffled indices if not already present
    const key = `${currentLevel}_${currentTab}`;
    const itemsCount = exercise.items ? exercise.items.length : (exercise.pairs ? exercise.pairs.length : 0);
    
    if (!shuffledIndices[key] || shuffledIndices[key].length !== itemsCount) {
        resetIndices(key, itemsCount);
    }
    
    const indices = shuffledIndices[key];
    
    // Load student saved responses
    const studentSaved = students[activeStudent].scores[key] || {};
    
    if (currentTab === 'vocab_matching') {
        renderVocabularyMatching(exercise, container, studentSaved, key);
    } else {
        renderStandardQuestions(exercise, container, studentSaved, indices, key);
    }
    
    // Update badge display for this level
    renderBadgeDisplay();
}

function resetIndices(key, count) {
    shuffledIndices[key] = Array.from({ length: count }, (_, i) => i);
}

function shuffleCurrent() {
    const key = `${currentLevel}_${currentTab}`;
    const indices = shuffledIndices[key];
    if (indices && indices.length > 1) {
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        loadActiveExercise();
    }
}

// Text to Speech using Google Translate TTS
function speakPhrase(text) {
    window.stopAudio();
    if (!text) return;

    const cleaned = text
        .replace(/<[^>]+>/g, ' ')
        .replace(/\([^)]*\)/g, '')
        .replace(/\[[^\]]*\]/g, '')
        .replace(/_+/g, ', ')
        .replace(/[\/\(\)\[\]]/g, ' ')
        .replace(/&amp;/g, 'and')
        .replace(/&quot;/g, '')
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    ttsChunks = splitText(cleaned, 180);
    currentTtsIdx = 0;
    isTtsPlaying = true;

    if (ttsChunks.length > 0) {
        playNextTtsChunk();
    }
}

function playNextTtsChunk() {
    if (currentTtsIdx >= ttsChunks.length) {
        isTtsPlaying = false;
        return;
    }
    const chunk = ttsChunks[currentTtsIdx];
    
    // Slow speed parameter for A1/A2
    let speedParam = '';
    if (['A1', 'A2'].includes(currentLevel)) {
        speedParam = '&ttsspeed=0.24';
    }
    
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en&q=${encodeURIComponent(chunk)}${speedParam}`;
    
    ttsAudio.src = url;
    ttsAudio.play().catch(err => {
        console.error("Audio playback error:", err);
        currentTtsIdx++;
        playNextTtsChunk();
    });
}

ttsAudio.onended = () => {
    if (isTtsPlaying) {
        currentTtsIdx++;
        setTimeout(() => {
            if (isTtsPlaying) {
                playNextTtsChunk();
            }
        }, 400);
    }
};

window.stopAudio = function () {
    ttsAudio.pause();
    ttsChunks = [];
    currentTtsIdx = 0;
    isTtsPlaying = false;
};

// Standard Questions Render (Cloze, Word Formation, Transformation, Error, Collocation Option Challenge)
function renderStandardQuestions(exercise, container, savedAnswers, indices, key) {
    indices.forEach((originalIndex, displayIndex) => {
        const item = exercise.items[originalIndex];
        const savedAnswer = savedAnswers[originalIndex] || '';
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'question-item animate__animated animate__fadeIn';
        itemDiv.id = `q-item-${originalIndex}`;
        
        // Text display
        const textWrapper = document.createElement('div');
        textWrapper.className = 'question-text';
        
        // Clean line breaks
        const cleanQ = item.q.replace(/\n/g, '<br>');
        textWrapper.innerHTML = `<strong>${displayIndex + 1}.</strong> ${cleanQ} `;
        
        // Speaker icon for the question
        const speaker = document.createElement('button');
        speaker.className = 'speaker-btn';
        speaker.innerHTML = '🔊';
        speaker.onclick = () => speakPhrase(item.q);
        textWrapper.appendChild(speaker);
        
        itemDiv.appendChild(textWrapper);
        
        // Form inputs/options
        const inputContainer = document.createElement('div');
        inputContainer.className = 'input-container';
        
        if (exercise.title.toLowerCase().includes('collocation') && item.options) {
            // Multiple Choice options
            const optionsGrid = document.createElement('div');
            optionsGrid.className = 'options-grid';
            
            item.options.forEach((opt, optIdx) => {
                const optBtn = document.createElement('button');
                optBtn.className = `option-btn ${savedAnswer === opt ? 'selected' : ''}`;
                optBtn.textContent = opt;
                optBtn.onclick = () => {
                    if (isTimerActive && timeLeft <= 0) return; // Locked
                    
                    // Clear other selections
                    optionsGrid.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                    optBtn.classList.add('selected');
                    saveResponse(originalIndex, opt);
                };
                optionsGrid.appendChild(optBtn);
            });
            inputContainer.appendChild(optionsGrid);
        } else {
            // Text Input field
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'teg-input';
            input.placeholder = "Type your answer...";
            input.value = savedAnswer;
            input.oninput = (e) => {
                saveResponse(originalIndex, e.target.value);
            };
            inputContainer.appendChild(input);
            
            const checkSpan = document.createElement('span');
            checkSpan.className = 'check-indicator';
            checkSpan.id = `indicator-${originalIndex}`;
            inputContainer.appendChild(checkSpan);
        }
        
        itemDiv.appendChild(inputContainer);
        
        // Explanation box
        const explanation = document.createElement('div');
        explanation.className = 'explanation-box';
        explanation.id = `explanation-${originalIndex}`;
        explanation.innerHTML = `<strong>Correct answer:</strong> ${item.correct || (item.options ? item.options[item.correct] : '')}<br><em>${item.explanation}</em>`;
        
        // Add speech play button to explanation
        const speakCorrect = document.createElement('button');
        speakCorrect.className = 'speaker-btn';
        speakCorrect.style.marginLeft = '8px';
        speakCorrect.style.fontSize = '0.9rem';
        speakCorrect.innerHTML = '🔊 Hear';
        speakCorrect.onclick = () => speakPhrase(item.correct || item.options[item.correct]);
        explanation.appendChild(speakCorrect);
        
        itemDiv.appendChild(explanation);
        
        container.appendChild(itemDiv);
    });
}

// Vocabulary Matching Memory Card Flip Game
let firstCard = null;
let secondCard = null;
let lockBoard = false;

function renderVocabularyMatching(exercise, container, savedMatches, key) {
    const pairs = exercise.pairs;
    
    // Create the memory grid container
    const memoryGrid = document.createElement('div');
    memoryGrid.className = 'memory-grid';
    
    // Create card objects
    let cards = [];
    pairs.forEach((p, idx) => {
        // Word Card
        cards.push({
            id: `word-${idx}`,
            matchId: idx,
            text: p.word,
            type: 'word'
        });
        // Definition Card
        cards.push({
            id: `def-${idx}`,
            matchId: idx,
            text: p.def,
            type: 'def'
        });
    });
    
    // Shuffle cards
    cards.sort(() => Math.random() - 0.5);
    
    // Render cards
    cards.forEach(cardData => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.matchId = cardData.matchId;
        card.dataset.id = cardData.id;
        card.dataset.type = cardData.type;
        card.dataset.text = cardData.text;
        
        // Inner structure for flip effect
        const back = document.createElement('div');
        back.className = 'memory-card-back';
        back.textContent = '❓';
        
        const front = document.createElement('div');
        front.className = 'memory-card-front';
        front.textContent = cardData.text;
        // Make font size smaller for long texts
        if (cardData.text.length > 50) {
            front.style.fontSize = '0.75rem';
        } else if (cardData.text.length > 25) {
            front.style.fontSize = '0.85rem';
        }
        
        card.appendChild(back);
        card.appendChild(front);
        
        // Check if already matched
        if (savedMatches[cardData.matchId] === true) {
            card.classList.add('flipped', 'matched');
        } else {
            card.onclick = () => flipCard(card);
        }
        
        memoryGrid.appendChild(card);
    });
    
    container.appendChild(memoryGrid);
}

function flipCard(card) {
    if (lockBoard) return;
    if (card === firstCard) return;
    if (card.classList.contains('matched')) return;
    
    card.classList.add('flipped');
    
    if (!firstCard) {
        firstCard = card;
        return;
    }
    
    secondCard = card;
    checkForMatch();
}

function checkForMatch() {
    // If cards match by matchId and they are different types (word vs def)
    const isMatch = firstCard.dataset.matchId === secondCard.dataset.matchId && 
                    firstCard.dataset.type !== secondCard.dataset.type;
                    
    if (isMatch) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    
    // Play sound of the word
    const wordText = firstCard.dataset.type === 'word' ? firstCard.dataset.text : secondCard.dataset.text;
    speakPhrase(wordText);
    
    // Save to profile
    const matchId = firstCard.dataset.matchId;
    const key = `${currentLevel}_${currentTab}`;
    if (!students[activeStudent].scores[key]) {
        students[activeStudent].scores[key] = {};
    }
    students[activeStudent].scores[key][matchId] = true;
    saveStudents();
    
    updateLevelProgress(currentLevel);
    
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    
    // Shake effect
    firstCard.classList.add('animate__animated', 'animate__shakeX');
    secondCard.classList.add('animate__animated', 'animate__shakeX');
    
    setTimeout(() => {
        firstCard.classList.remove('flipped', 'animate__animated', 'animate__shakeX');
        secondCard.classList.remove('flipped', 'animate__animated', 'animate__shakeX');
        resetBoard();
    }, 1200);
}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

// Save inputs to profile
function saveResponse(index, value) {
    const key = `${currentLevel}_${currentTab}`;
    if (!students[activeStudent].scores[key]) {
        students[activeStudent].scores[key] = {};
    }
    students[activeStudent].scores[key][index] = value;
    saveStudents();
}

// Check Responses
function checkAll() {
    const levelData = getLevelData();
    const exercise = levelData.exercises[currentTab];
    const key = `${currentLevel}_${currentTab}`;
    const studentSaved = students[activeStudent].scores[key] || {};
    
    let correctCount = 0;
    let totalCount = 0;
    
    if (currentTab === 'vocab_matching') {
        // Special logic for matching
        totalCount = exercise.pairs.length;
        for (let i = 0; i < totalCount; i++) {
            if (studentSaved[i] === true) {
                correctCount++;
            }
        }
    } else {
        totalCount = exercise.items.length;
        
        exercise.items.forEach((item, originalIndex) => {
            const savedAns = (studentSaved[originalIndex] || '').trim().toLowerCase();
            const correctAns = (item.correct || '').trim().toLowerCase();
            
            const element = document.getElementById(`q-item-${originalIndex}`);
            const indicator = document.getElementById(`indicator-${originalIndex}`);
            
            if (element) {
                element.classList.remove('correct', 'incorrect');
                
                let isCorrect = false;
                
                if (item.options) {
                    // Option check
                    const selectedBtn = element.querySelector('.option-btn.selected');
                    if (selectedBtn) {
                        const optVal = selectedBtn.textContent.trim().toLowerCase();
                        const rightOptVal = item.options[item.correct].trim().toLowerCase();
                        
                        if (optVal === rightOptVal) {
                            isCorrect = true;
                            selectedBtn.classList.add('correct');
                        } else {
                            selectedBtn.classList.add('incorrect');
                        }
                    }
                } else {
                    // Input text check
                    if (savedAns === correctAns) {
                        isCorrect = true;
                    }
                }
                
                if (isCorrect) {
                    element.classList.add('correct');
                    if (indicator) indicator.textContent = '✅';
                    correctCount++;
                } else {
                    element.classList.add('incorrect');
                    if (indicator) indicator.textContent = '❌';
                }
            }
        });
    }
    
    // Save section check stats
    const percentage = Math.round((correctCount / totalCount) * 100) || 0;
    
    // Update level progress bar
    updateLevelProgress(currentLevel);
    
    // Open Modal
    showResultsModal(correctCount, totalCount, percentage);
}

function showResultsModal(correct, total, percentage) {
    const modal = document.getElementById('results-modal');
    document.getElementById('modal-score-text').textContent = `${correct} / ${total}`;
    document.getElementById('modal-percent-text').textContent = `${percentage}%`;
    
    let badgeText = "Keep trying! 🥉";
    let rewardText = "Complete at least 60% of the answers to earn a badge.";
    
    if (percentage >= 95) {
        badgeText = "Gold Badge! 🥇";
        rewardText = "Outstanding performance! You have fully mastered this section.";
    } else if (percentage >= 80) {
        badgeText = "Silver Badge! 🥈";
        rewardText = "Excellent work! Almost perfect.";
    } else if (percentage >= 60) {
        badgeText = "Bronze Badge! 🥉";
        rewardText = "Good job! You earned your passing badge.";
    }
    
    document.getElementById('modal-badge-title').textContent = badgeText;
    document.getElementById('modal-badge-desc').textContent = rewardText;
    
    modal.classList.add('active');
    
    // Auto-save highest score for the active level section
    const key = `${currentLevel}_${currentTab}_percentage`;
    const prevMax = students[activeStudent].scores[key] || 0;
    if (percentage > prevMax) {
        students[activeStudent].scores[key] = percentage;
        saveStudents();
    }
    
    // Render the rewards and progress immediately
    renderBadgeDisplay();
    updateLevelProgress(currentLevel);
}

function closeModal() {
    document.getElementById('results-modal').classList.remove('active');
}

// Calculate level progress (average of highest percentages of all 6 exercises)
function updateLevelProgress(level) {
    let totalScore = 0;
    const tabs = ['word_formation', 'open_cloze', 'sentence_transformation', 'error_correction', 'vocab_matching', 'idiom_challenge'];
    
    tabs.forEach(tab => {
        const key = `${level}_${tab}_percentage`;
        totalScore += students[activeStudent].scores[key] || 0;
    });
    
    const average = Math.round(totalScore / tabs.length);
    
    // Update active level progress
    const miniBar = document.getElementById(`level-progress-${level.toLowerCase()}`);
    if (miniBar) {
        miniBar.style.width = `${average}%`;
    }
}

// Render Badge rewards list
function renderBadgeDisplay() {
    const badgeContainer = document.getElementById('badge-display-container');
    if (!badgeContainer) return;
    
    const tabs = ['word_formation', 'open_cloze', 'sentence_transformation', 'error_correction', 'vocab_matching', 'idiom_challenge'];
    let bronze = 0, silver = 0, gold = 0;
    
    tabs.forEach(tab => {
        const key = `${currentLevel}_${tab}_percentage`;
        const score = students[activeStudent].scores[key] || 0;
        if (score >= 95) gold++;
        else if (score >= 80) silver++;
        else if (score >= 60) bronze++;
    });
    
    let html = '';
    if (gold > 0 || silver > 0 || bronze > 0) {
        html = `
            <div class="badge-display animate__animated animate__fadeIn">
                <div class="badge-art">🏆</div>
                <div style="flex-grow: 1;">
                    <h3 style="font-family: var(--font-heading); margin-bottom: 5px;">Earned Badges (${currentLevel})</h3>
                    <div style="display: flex; gap: 15px;">
                        <span>🥇 Gold: <strong>${gold}</strong></span>
                        <span>🥈 Silver: <strong>${silver}</strong></span>
                        <span>🥉 Bronze: <strong>${bronze}</strong></span>
                    </div>
                </div>
            </div>
        `;
    }
    badgeContainer.innerHTML = html;
}

// Reset responses
function resetLevel() {
    if (confirm("Are you sure you want to reset all answers in this category?")) {
        const key = `${currentLevel}_${currentTab}`;
        const pctKey = `${currentLevel}_${currentTab}_percentage`;
        
        students[activeStudent].scores[key] = {};
        students[activeStudent].scores[pctKey] = 0;
        saveStudents();
        loadActiveExercise();
        updateLevelProgress(currentLevel);
    }
}

// Timer functionality
function toggleTimer() {
    isTimerActive = !isTimerActive;
    const timerBtn = document.getElementById('timer-btn');
    const timerWidget = document.getElementById('timer-widget');
    
    if (isTimerActive) {
        timerBtn.textContent = "⏱️ Disable Timer";
        timerWidget.style.display = 'flex';
        startTimer();
    } else {
        timerBtn.textContent = "⏱️ Enable Timer";
        timerWidget.style.display = 'none';
        stopTimer();
    }
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 180;
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Checking answers now.");
            checkAll();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timeLeft = 180;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    document.getElementById('timer-val').textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
