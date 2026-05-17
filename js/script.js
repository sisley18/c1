document.addEventListener('DOMContentLoaded', () => {
    console.log('C1 Advanced Course Initialized');
    initAudioEngine();
    renderCurriculum();
    setupNavigation();
    setupProtection();
});

// Content Protection
function setupProtection() {
    const overlay = document.getElementById('protection-overlay');

    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        showProtectionMessage();
    });

    document.addEventListener('copy', (e) => {
        e.preventDefault();
        showProtectionMessage();
    });

    document.addEventListener('cut', (e) => {
        e.preventDefault();
        showProtectionMessage();
    });

    document.addEventListener('selectstart', (e) => {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        }
    });

    if (overlay) {
        overlay.addEventListener('click', () => {
            overlay.style.display = 'none';
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && (e.key === 'c' || e.key === 'p' || e.key === 's' || e.key === 'u')) {
            e.preventDefault();
            showProtectionMessage();
        }
        if (e.key === 'F12') {
            e.preventDefault();
            showProtectionMessage();
        }
    });
}

function showProtectionMessage() {
    const overlay = document.getElementById('protection-overlay');
    if (overlay) {
        overlay.style.display = 'flex';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 3000);
    }
}

let currentUnitIndex = 0;

function setupNavigation() {
    const unitBlocks = document.querySelectorAll('.unit-block');
    unitBlocks.forEach((block, index) => {
        block.addEventListener('toggle', () => {
            if (block.open) {
                currentUnitIndex = index;
            }
        });
    });
}

window.navigateUnit = function (direction) {
    const unitBlocks = document.querySelectorAll('.unit-block');
    const totalUnits = unitBlocks.length;

    if (unitBlocks[currentUnitIndex]) {
        unitBlocks[currentUnitIndex].open = false;
    }

    currentUnitIndex = currentUnitIndex + direction;

    if (currentUnitIndex < 0) currentUnitIndex = totalUnits - 1;
    if (currentUnitIndex >= totalUnits) currentUnitIndex = 0;

    if (unitBlocks[currentUnitIndex]) {
        unitBlocks[currentUnitIndex].open = true;
        unitBlocks[currentUnitIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

function getUnitIllustration(unitId) {
    const svgs = {
        1: `<svg viewBox="0 0 400 200" width="100%" height="160" style="background:#faf9f6; border:1px solid #e7e5e4; border-radius:12px; display:block; margin: 0 auto 25px;">
                <!-- Rhetoric & Persuasion -->
                <rect width="400" height="200" fill="#fcfbfa"/>
                <circle cx="200" cy="100" r="70" fill="rgba(79, 70, 229, 0.04)" />
                <path d="M120 160 L120 70 A10 10 0 0 1 140 70 L140 160 Z" fill="#4f46e5" opacity="0.8"/>
                <path d="M260 160 L260 70 A10 10 0 0 1 280 70 L280 160 Z" fill="#4f46e5" opacity="0.8"/>
                <rect x="90" y="160" width="220" height="15" rx="5" fill="#1e1b18" />
                <path d="M110 65 L290 65" stroke="#1e1b18" stroke-width="8" stroke-linecap="round"/>
                <!-- Speech waves -->
                <path d="M200 45 A40 40 0 0 1 240 85" fill="none" stroke="#0d9488" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
                <path d="M200 30 A60 60 0 0 1 260 90" fill="none" stroke="#0d9488" stroke-width="4" stroke-linecap="round" opacity="0.4"/>
                <path d="M200 15 A80 80 0 0 1 280 95" fill="none" stroke="#0d9488" stroke-width="4" stroke-linecap="round" opacity="0.2"/>
                <!-- Idea Lightbulb -->
                <circle cx="200" cy="95" r="22" fill="#fff" stroke="#d97706" stroke-width="4" />
                <path d="M190 115 L210 115 M193 120 L207 120" stroke="#d97706" stroke-width="4" stroke-linecap="round"/>
                <path d="M193 90 Q200 80 207 90" fill="none" stroke="#d97706" stroke-width="2"/>
                <!-- Decorative Stars -->
                <path d="M70 50 L73 57 L80 57 L75 62 L77 69 L70 65 L63 69 L65 62 L60 57 L67 57 Z" fill="#d97706" opacity="0.7"/>
                <path d="M330 60 L332 65 L337 65 L333 69 L335 74 L330 71 L325 74 L327 69 L323 65 L328 65 Z" fill="#4f46e5" opacity="0.7"/>
            </svg>`,
        2: `<svg viewBox="0 0 400 200" width="100%" height="160" style="background:#faf9f6; border:1px solid #e7e5e4; border-radius:12px; display:block; margin: 0 auto 25px;">
                <!-- Bioethics & DNA -->
                <rect width="400" height="200" fill="#fcfbfa"/>
                <circle cx="200" cy="100" r="70" fill="rgba(13, 148, 136, 0.04)" />
                <!-- DNA strands -->
                <path d="M100 100 Q150 40 200 100 T300 100" fill="none" stroke="#0d9488" stroke-width="4" stroke-linecap="round"/>
                <path d="M100 100 Q150 160 200 100 T300 100" fill="none" stroke="#4f46e5" stroke-width="4" stroke-linecap="round" stroke-dasharray="2,2"/>
                <!-- Connectors -->
                <line x1="125" y1="75" x2="125" y2="125" stroke="#1e1b18" stroke-width="2" opacity="0.5"/>
                <line x1="150" y1="65" x2="150" y2="135" stroke="#1e1b18" stroke-width="2" opacity="0.5"/>
                <line x1="175" y1="75" x2="175" y2="125" stroke="#1e1b18" stroke-width="2" opacity="0.5"/>
                <line x1="225" y1="125" x2="225" y2="75" stroke="#1e1b18" stroke-width="2" opacity="0.5"/>
                <line x1="250" y1="135" x2="250" y2="65" stroke="#1e1b18" stroke-width="2" opacity="0.5"/>
                <line x1="275" y1="125" x2="275" y2="75" stroke="#1e1b18" stroke-width="2" opacity="0.5"/>
                <!-- Bio Sprout -->
                <path d="M200 100 C200 70 215 55 230 55" fill="none" stroke="#d97706" stroke-width="4" stroke-linecap="round"/>
                <path d="M200 100 C200 75 185 65 175 65" fill="none" stroke="#d97706" stroke-width="4" stroke-linecap="round"/>
                <path d="M230 55 C235 45 220 40 215 50 Z" fill="#d97706"/>
                <path d="M175 65 C170 55 185 50 190 60 Z" fill="#d97706"/>
                <!-- Nodes -->
                <circle cx="150" cy="65" r="6" fill="#0d9488"/>
                <circle cx="150" cy="135" r="6" fill="#4f46e5"/>
                <circle cx="250" cy="65" r="6" fill="#4f46e5"/>
                <circle cx="250" cy="135" r="6" fill="#0d9488"/>
            </svg>`,
        3: `<svg viewBox="0 0 400 200" width="100%" height="160" style="background:#faf9f6; border:1px solid #e7e5e4; border-radius:12px; display:block; margin: 0 auto 25px;">
                <!-- Geopolitics & Power -->
                <rect width="400" height="200" fill="#fcfbfa"/>
                <circle cx="200" cy="100" r="70" fill="rgba(217, 119, 6, 0.04)" />
                <!-- Globe outlines -->
                <circle cx="200" cy="100" r="50" fill="none" stroke="#4f46e5" stroke-width="3" opacity="0.8"/>
                <ellipse cx="200" cy="100" rx="50" ry="20" fill="none" stroke="#4f46e5" stroke-width="2" opacity="0.6"/>
                <ellipse cx="200" cy="100" rx="20" ry="50" fill="none" stroke="#4f46e5" stroke-width="2" opacity="0.6"/>
                <line x1="150" y1="100" x2="250" y2="100" stroke="#4f46e5" stroke-width="2" opacity="0.6"/>
                <!-- Balance Scale of Power -->
                <path d="M200 65 L200 135" stroke="#1e1b18" stroke-width="4" stroke-linecap="round"/>
                <path d="M160 80 L240 80" stroke="#1e1b18" stroke-width="4" stroke-linecap="round"/>
                <!-- Left pan -->
                <path d="M160 80 L145 110 L175 110 Z" fill="none" stroke="#0d9488" stroke-width="2"/>
                <circle cx="160" cy="113" r="5" fill="#0d9488"/>
                <!-- Right pan -->
                <path d="M240 80 L225 110 L255 110 Z" fill="none" stroke="#d97706" stroke-width="2"/>
                <circle cx="240" cy="113" r="5" fill="#d97706"/>
                <!-- Satellite path -->
                <path d="M120 40 Q200 10 280 40" fill="none" stroke="#d97706" stroke-width="3" stroke-linecap="round" stroke-dasharray="5,5"/>
                <polygon points="280,40 272,35 275,45" fill="#d97706"/>
            </svg>`,
        4: `<svg viewBox="0 0 400 200" width="100%" height="160" style="background:#faf9f6; border:1px solid #e7e5e4; border-radius:12px; display:block; margin: 0 auto 25px;">
                <!-- Cognitive Science & Brain -->
                <rect width="400" height="200" fill="#fcfbfa"/>
                <circle cx="200" cy="100" r="70" fill="rgba(139, 92, 246, 0.04)" />
                <!-- Brain Profile Outline -->
                <path d="M160 140 C140 135 130 110 130 95 C130 75 145 55 170 50 C190 45 220 45 235 60 C250 55 270 65 270 85 C270 100 260 115 250 120 C245 130 235 140 210 140 C200 140 190 145 180 145 Z" fill="none" stroke="#4f46e5" stroke-width="4" stroke-linejoin="round"/>
                <!-- Cognitive Gears -->
                <circle cx="185" cy="85" r="14" fill="none" stroke="#0d9488" stroke-width="3"/>
                <path d="M185 68 L185 73 M185 97 L185 102 M168 85 L173 85 M197 85 L202 85" stroke="#0d9488" stroke-width="3" stroke-linecap="round"/>
                <circle cx="220" cy="105" r="12" fill="none" stroke="#d97706" stroke-width="3"/>
                <path d="M220 90 L220 95 M220 115 L220 120 M205 105 L210 105 M230 105 L235 105" stroke="#d97706" stroke-width="3" stroke-linecap="round"/>
                <!-- Neuron sparks -->
                <circle cx="155" cy="70" r="3" fill="#4f46e5"/>
                <line x1="155" y1="70" x2="171" y2="80" stroke="#4f46e5" stroke-width="1.5" opacity="0.6"/>
                <circle cx="245" cy="80" r="3" fill="#4f46e5"/>
                <line x1="245" y1="80" x2="228" y2="95" stroke="#4f46e5" stroke-width="1.5" opacity="0.6"/>
            </svg>`,
        5: `<svg viewBox="0 0 400 200" width="100%" height="160" style="background:#faf9f6; border:1px solid #e7e5e4; border-radius:12px; display:block; margin: 0 auto 25px;">
                <!-- Sustainability & Circular Economy -->
                <rect width="400" height="200" fill="#fcfbfa"/>
                <circle cx="200" cy="100" r="70" fill="rgba(13, 148, 136, 0.04)" />
                <!-- Infinity Loop Recycle -->
                <path d="M150 100 C110 60 90 140 150 100 C210 60 230 140 190 100" fill="none" stroke="#0d9488" stroke-width="6" stroke-linecap="round" opacity="0.3"/>
                <path d="M150 100 Q170 85 200 100 T250 100 Q290 140 250 100 T200 100 Z" fill="none" stroke="#0d9488" stroke-width="4" stroke-linecap="round"/>
                <!-- Leaves of Green -->
                <path d="M250 100 Q265 80 280 95 Q265 110 250 100" fill="#0d9488"/>
                <path d="M150 100 Q135 120 120 105 Q135 90 150 100" fill="#d97706"/>
                <!-- Solar and wind -->
                <line x1="200" y1="35" x2="200" y2="55" stroke="#d97706" stroke-width="3" stroke-linecap="round"/>
                <circle cx="200" cy="30" r="6" fill="#d97706"/>
                <path d="M185 45 L215 45 M190 40 L210 50 M190 50 L210 40" stroke="#d97706" stroke-width="2"/>
                <!-- Recyclable Arrows -->
                <polygon points="205,92 215,100 205,108" fill="#0d9488"/>
                <polygon points="195,108 185,100 195,92" fill="#0d9488"/>
            </svg>`,
        6: `<svg viewBox="0 0 400 200" width="100%" height="160" style="background:#faf9f6; border:1px solid #e7e5e4; border-radius:12px; display:block; margin: 0 auto 25px;">
                <!-- Linguistic Diversity -->
                <rect width="400" height="200" fill="#fcfbfa"/>
                <circle cx="200" cy="100" r="70" fill="rgba(236, 72, 153, 0.04)" />
                <!-- Dialogue Bubbles -->
                <path d="M130 110 C130 75 160 55 190 55 C220 55 240 70 240 90 C240 105 225 115 210 120 L210 135 L195 120 C145 120 130 115 130 110 Z" fill="#4f46e5" opacity="0.85"/>
                <path d="M270 125 C270 95 245 80 220 80 C215 80 210 82 205 83 C215 95 215 110 200 120 C220 125 230 135 245 130 L255 142 L255 130 C265 130 270 128 270 125 Z" fill="#0d9488" opacity="0.85"/>
                <!-- Foreign letters -->
                <text x="155" y="93" fill="#ffffff" font-family="'Outfit', sans-serif" font-size="26" font-weight="bold">A</text>
                <text x="232" y="112" fill="#ffffff" font-family="'Outfit', sans-serif" font-size="20" font-weight="bold">文</text>
                <text x="188" y="95" fill="#fecdd3" font-family="'Outfit', sans-serif" font-size="16" font-weight="bold">あ</text>
                <!-- Branching Tree connecting them -->
                <path d="M200 150 L200 125 M200 125 L175 105 M200 125 L225 110" stroke="#1e1b18" stroke-width="3" stroke-linecap="round" opacity="0.4"/>
            </svg>`,
        7: `<svg viewBox="0 0 400 200" width="100%" height="160" style="background:#faf9f6; border:1px solid #e7e5e4; border-radius:12px; display:block; margin: 0 auto 25px;">
                <!-- Philosophy of Knowledge -->
                <rect width="400" height="200" fill="#fcfbfa"/>
                <circle cx="200" cy="100" r="70" fill="rgba(79, 70, 229, 0.04)" />
                <!-- Open Book -->
                <path d="M130 135 C160 130 190 140 200 145 C210 140 240 130 270 135 L270 75 C240 70 210 80 200 85 C190 80 160 70 130 75 Z" fill="#ffffff" stroke="#1e1b18" stroke-width="3"/>
                <path d="M200 85 L200 145" stroke="#1e1b18" stroke-width="3"/>
                <!-- Epistemological key -->
                <circle cx="200" cy="55" r="16" fill="none" stroke="#d97706" stroke-width="4" />
                <path d="M200 71 L200 115 M194 100 L206 100 M194 109 L206 109" stroke="#d97706" stroke-width="4" stroke-linecap="round"/>
                <!-- Glowing Stars -->
                <path d="M300 45 L302 50 L307 50 L303 54 L305 59 L300 56 L295 59 L297 54 L293 50 L298 50 Z" fill="#d97706"/>
                <path d="M100 50 L102 55 L107 55 L103 59 L105 64 L100 61 L95 64 L97 59 L93 55 L98 55 Z" fill="#4f46e5"/>
                <path d="M200 25 L201 28 L204 28 L202 30 L203 33 L200 31 L197 33 L198 30 L196 28 L199 28 Z" fill="#d97706"/>
            </svg>`,
        8: `<svg viewBox="0 0 400 200" width="100%" height="160" style="background:#faf9f6; border:1px solid #e7e5e4; border-radius:12px; display:block; margin: 0 auto 25px;">
                <!-- Global Media & Narrative -->
                <rect width="400" height="200" fill="#fcfbfa"/>
                <circle cx="200" cy="100" r="70" fill="rgba(13, 148, 136, 0.04)" />
                <!-- Newspaper Display grid -->
                <rect x="120" y="65" width="160" height="90" rx="8" fill="#ffffff" stroke="#1e1b18" stroke-width="3" />
                <rect x="135" y="80" width="60" height="35" rx="3" fill="none" stroke="#4f46e5" stroke-width="2" />
                <line x1="205" y1="80" x2="260" y2="80" stroke="#1e1b18" stroke-width="3" stroke-linecap="round"/>
                <line x1="205" y1="90" x2="260" y2="90" stroke="#1e1b18" stroke-width="2" stroke-linecap="round"/>
                <line x1="205" y1="100" x2="245" y2="100" stroke="#1e1b18" stroke-width="2" stroke-linecap="round"/>
                <line x1="135" y1="128" x2="260" y2="128" stroke="#1e1b18" stroke-width="2" stroke-linecap="round"/>
                <line x1="135" y1="138" x2="230" y2="138" stroke="#1e1b18" stroke-width="2" stroke-linecap="round"/>
                <!-- Broadcasting Tower -->
                <path d="M200 45 L190 15 L210 15 Z" fill="#d97706" opacity="0.25"/>
                <circle cx="200" cy="15" r="5" fill="#d97706"/>
                <!-- Signal waves radiating -->
                <path d="M190 10 A15 15 0 0 1 210 10" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round"/>
                <path d="M180 5 A30 30 0 0 1 220 5" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round"/>
            </svg>`
    };
    return svgs[unitId] || '';
}

function renderCurriculum() {
    const container = document.getElementById('curriculum-container');
    if (!container) return;
    container.innerHTML = '';

    courseData.units.forEach(unit => {
        const unitBlock = document.createElement('details');
        unitBlock.className = 'unit-block';

        unitBlock.innerHTML = `
            <summary class="unit-header">
                <div>
                    <span class="unit-subtitle">Unit ${unit.id}</span>
                    <span class="unit-title">${unit.title}</span>
                </div>
            </summary>
            <div class="unit-body">
                <div class="unit-illustration">
                    ${getUnitIllustration(unit.id)}
                </div>
                <p style="opacity: 0.7; margin-bottom: 30px; border-bottom: 1px solid #e7e5e4; padding-bottom: 15px;">Topic: ${unit.topic}</p>
                
                <!-- 1. Vocabulary -->
                <div class="section-block">
                    <span class="section-label" style="background: rgba(255,255,255,0.1); color: #fff;">Vocabulary</span>
                    <h3>Key Terms</h3>
                    <p style="margin-bottom: 15px; opacity: 0.7;">🔊 Click the speaker to hear each word pronounced:</p>
                    <div class="vocab-grid">
                        ${unit.vocabulary ? unit.vocabulary.map(v => `
                            <div class="vocab-card">
                                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                                    <button class="play-btn" style="width: 32px; height: 32px; font-size: 0.9rem; flex-shrink: 0;" onclick="playAudio('${v.word}')">🔊</button>
                                    <strong style="font-size: 1.1rem;">${v.word}</strong>
                                </div>
                                ${v.ipa ? `<p style="font-family: 'Lucida Sans Unicode', 'Arial Unicode MS', monospace; color: #5eead4; font-size: 0.95rem; margin-bottom: 8px;">/${v.ipa}/</p>` : ''}
                                <p style="opacity: 0.8;">${v.def}</p>
                            </div>
                        `).join('') : ''}
                    </div>
                </div>

                <!-- 2. Listening -->
                <div class="section-block">
                    <span class="section-label listening">Listening</span>
                    <h3>${unit.listening.title}</h3>
                    <div class="player-controls">
                        <button class="play-btn" onclick="playTrack('${unit.listening.transcript.replace(/'/g, "\\'")}')">▶</button>
                        <span style="font-size: 0.9rem; opacity: 0.8;">Audio Track</span>
                    </div>
                    <button class="btn" style="border: 1px solid rgba(255,255,255,0.2); font-size: 0.8rem; padding: 5px 15px;" onclick="toggleTranscript(this)">Show Transcript</button>
                    <div class="transcript-box" style="display:none; margin-top:10px; padding:15px; background:rgba(0,0,0,0.2); border-radius:8px;">
                        ${unit.listening.transcript}
                    </div>
                    ${renderQuiz(unit.listening.questions)}
                </div>

                <!-- 3. Reading -->
                <div class="section-block">
                    <span class="section-label reading">Reading</span>
                    <h3>${unit.reading.title}</h3>
                    <div class="reading-text">${unit.reading.text}</div>
                    ${renderQuiz(unit.reading.questions)}
                </div>

                <!-- 4. Grammar -->
                <div class="section-block">
                    <span class="section-label grammar">Grammar</span>
                    <h3>${unit.grammar.title}</h3>
                    <div class="grammar-box">
                        <p style="margin-bottom:10px;">${unit.grammar.explanation}</p>
                        <p style="font-family:monospace; color:#5eead4;">Ex: ${unit.grammar.example}</p>
                    </div>
                    <div style="margin-top:20px;">
                        ${unit.grammar.quizzes ? unit.grammar.quizzes.map((q, idx) => `
                            <div style="margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px dashed #e7e5e4;">
                                <p style="font-weight:600; margin-bottom:10px; color: var(--text-primary);">${idx + 1}. ${q.question}</p>
                                <div class="options-grid" style="justify-content: flex-start;">
                                    ${q.options.map((opt, i) => `
                                        <button class="btn" style="background:#ffffff; border:1px solid #cccccc; color:var(--text-primary);" 
                                        onclick="checkAnswer(this, ${i === q.correct})">${opt}</button>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('') : ''}
                    </div>
                </div>
 
                <!-- 5. Verb Patterns -->
                ${unit.verb_patterns ? `
                <div class="section-block">
                    <span class="section-label" style="background: var(--accent-gold); color: #ffffff;">Verb Patterns</span>
                    <h3>Verbs + Gerund / Infinitive</h3>
                    
                    <div class="theory-box">
                        <h4 style="color: var(--accent-gold);">📚 Verb Patterns Theory</h4>
                        <p>In English, some verbs are followed by <strong>gerunds (-ing)</strong>, some by <strong>infinitives (to + verb)</strong>, and some can take <strong>both</strong>.</p>
                        <p><strong>Verbs + Gerund (-ing):</strong></p>
                        <ul>
                            <li><strong>enjoy, avoid, finish, keep, practice, suggest, consider, mind, risk, imagine</strong></li>
                            <li>Example: I enjoy <em>swimming</em>. / She avoids <em>eating</em> sugar.</li>
                        </ul>
                        <p style="margin-top: 10px;"><strong>Verbs + Infinitive (to + verb):</strong></p>
                        <ul>
                            <li><strong>want, need, decide, hope, plan, promise, expect, agree, refuse, learn</strong></li>
                            <li>Example: I want <em>to travel</em>. / She decided <em>to quit</em>.</li>
                        </ul>
                        <p style="margin-top: 10px;"><strong>Verbs + Both (with different meanings):</strong></p>
                        <ul>
                            <li><strong>stop, remember, forget, try, regret</strong></li>
                            <li>Example: I stopped <em>smoking</em> (quit). / I stopped <em>to smoke</em> (paused to smoke).</li>
                        </ul>
                    </div>
                    
                    <p style="margin-bottom: 15px; color: var(--text-secondary); opacity: 0.9;">Complete the sentences with the correct verb form:</p>
                    <div style="margin-top:20px;">
                        ${unit.verb_patterns.exercises.map((q, idx) => `
                            <div style="margin-bottom: 15px; padding: 15px; background: #faf9f6; border: 1px solid #e7e5e4; border-radius: 10px;">
                                <p style="font-weight:600; margin-bottom:10px; color: var(--text-primary);">${idx + 1}. ${q.sentence}</p>
                                <div class="options-grid" style="justify-content: flex-start;">
                                    ${q.options.map((opt, i) => `
                                        <button class="btn" style="background:#ffffff; border:1px solid #cccccc; color:var(--text-primary);" 
                                        onclick="checkAnswer(this, ${i === q.correct})">${opt}</button>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
 
                <!-- 6. Pronunciation -->
                <div class="section-block">
                    <span class="section-label pronunciation">Pronunciation</span>
                    <h3>Sentence Stress</h3>
                    
                    <h4 style="margin: 20px 0 15px; color: var(--accent-electric);">Sentence Stress</h4>
                    
                    <div class="theory-box">
                        <h4 style="color: var(--accent-gold);">📚 Sentence Stress Theory</h4>
                        <p>In English sentences, <strong>content words</strong> are stressed while <strong>function words</strong> are unstressed.</p>
                        <p><strong>Stressed (Content Words):</strong></p>
                        <ul>
                            <li><strong>Nouns:</strong> dog, house, technology</li>
                            <li><strong>Main Verbs:</strong> run, think, develop</li>
                            <li><strong>Adjectives:</strong> big, beautiful, important</li>
                            <li><strong>Adverbs:</strong> quickly, very, extremely</li>
                            <li><strong>Question words:</strong> what, where, why</li>
                        </ul>
                        <p style="margin-top: 10px;"><strong>Unstressed (Function Words):</strong></p>
                        <ul>
                            <li><strong>Articles:</strong> a, an, the</li>
                            <li><strong>Prepositions:</strong> in, on, at, to</li>
                            <li><strong>Pronouns:</strong> I, you, he, she, it</li>
                            <li><strong>Auxiliary verbs:</strong> is, are, have, will</li>
                            <li><strong>Conjunctions:</strong> and, but, or</li>
                        </ul>
                    </div>
                    
                    <p style="margin-bottom: 15px; color: var(--text-secondary); opacity: 0.9;">🔊 Click the speaker to hear the sentence with proper stress:</p>
                    ${unit.pronunciation && unit.pronunciation.sentence_stress ? unit.pronunciation.sentence_stress.map((item, idx) => `
                        <div style="margin-bottom: 20px; padding: 15px; background: #faf9f6; border: 1px solid #e7e5e4; border-radius: 10px;">
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
                                <button class="play-btn" style="width: 40px; height: 40px; font-size: 1rem;" onclick="playAudio('${item.sentence.replace(/'/g, "\\'")}')" >🔊</button>
                                <p style="font-size: 1.2rem; font-style: italic; margin: 0; color: var(--text-primary);">"${item.sentence}"</p>
                            </div>
                            <p style="font-size: 0.9rem; color: var(--accent-electric); margin: 0;"><strong>Stressed words:</strong> ${item.stressed.join(', ')}</p>
                        </div>
                    `).join('') : ''}
                </div>
 
                <!-- 6. Collocation -->
                <div class="section-block">
                    <span class="section-label collocation">Collocations</span>
                    <div style="display: grid; gap: 20px;">
                    ${unit.collocations ? unit.collocations.map(col => `
                        <div class="collo-box">
                            <div class="word-slot" style="font-size: 1.5rem;">
                                ${col.pair[0]} <span class="blank">______</span>
                            </div>
                            <p style="margin-bottom: 10px; color: var(--text-secondary); opacity: 0.9;">"${col.context.replace(col.pair[1], '______')}"</p>
                            <div class="options-grid" style="justify-content: center;">
                                ${(() => {
                const opts = [col.pair[1], ...col.distractors].sort(() => Math.random() - 0.5);
                return opts.map(opt => `
                                        <button class="btn" style="background:#ffffff; border:1px solid #cccccc; color:var(--text-primary);" 
                                        onclick="checkCollocation(this, '${opt}', '${col.pair[1]}')">${opt}</button>
                                    `).join('');
            })()}
                            </div>
                        </div>
                    `).join('') : ''}
                    </div>
                </div>
 
                <!-- 7. Writing -->
                <div class="section-block">
                    <span class="section-label" style="background: #ec4899; color: #ffffff;">Writing Task</span>
                    <div style="background: #faf9f6; padding: 20px; border-radius: 12px; border: 1px solid #e7e5e4;">
                        <p style="font-style: italic; margin-bottom: 15px; color: var(--text-secondary);">Target: 250 words</p>
                        <h4 style="margin-bottom: 10px; color: var(--text-primary);">${unit.writing || 'Write about the topic.'}</h4>
                        <textarea style="width: 100%; height: 150px; background: #ffffff; border: 1px solid #cccccc; color: var(--text-primary); padding: 12px; border-radius: 8px; font-family: inherit;" placeholder="Type your essay here..."></textarea>
                    </div>
                </div>

                <!-- 8. Speaking -->
                <div class="section-block">
                    <span class="section-label" style="background: #f59e0b; color: #ffffff;">Speaking</span>
                    <div style="background: #faf9f6; padding: 20px; border-radius: 12px; display: flex; align-items: center; gap: 20px; border: 1px solid #e7e5e4;">
                        <span style="font-size: 2rem;">🎙️</span>
                        <div>
                            <h4 style="margin: 0 0 5px 0; color: var(--text-primary);">Discussion Prompt</h4>
                            <p style="margin: 0; color: var(--text-secondary);">${unit.speaking || 'Discuss the topic.'}</p>
                        </div>
                    </div>
                </div>

                <!-- 9. Functional Language -->
                ${unit.functionalLanguage ? `
                <div class="section-block">
                    <span class="section-label" style="background: var(--accent-electric); color: #ffffff;">Functional English</span>
                    <h3 style="color: var(--text-primary); margin: 15px 0 10px;">🗣️ Functional Language: ${unit.functionalLanguage.functionName}</h3>
                    <p style="color: var(--text-secondary); margin: 10px 0 20px; font-size: 0.98rem; line-height: 1.5;">${unit.functionalLanguage.description}</p>
                    
                    <p style="margin-bottom: 15px; color: var(--text-secondary); font-weight: 600; font-size: 0.95rem;">🔊 Click the speaker to hear key functional phrases pronounced:</p>
                    <div class="vocab-grid">
                        ${unit.functionalLanguage.phrases ? unit.functionalLanguage.phrases.map(p => `
                            <div class="vocab-card" style="border-left-color: var(--accent-electric); background: #ffffff; border: 1px solid #e7e5e4; border-left-width: 4px; box-shadow: 0 4px 15px rgba(0,0,0,0.015);">
                                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                                    <button class="play-btn" style="width: 32px; height: 32px; font-size: 0.9rem; flex-shrink: 0;" onclick="playAudio('${p.phrase.replace(/'/g, "\\'")}')">🔊</button>
                                    <strong style="color: var(--accent-electric); font-size: 1.1rem;">"${p.phrase}"</strong>
                                </div>
                                <p style="margin-bottom: 8px; color: var(--text-secondary); font-size: 0.95rem;"><strong>Use:</strong> ${p.def}</p>
                                <p style="font-style: italic; opacity: 0.9; font-size: 0.9rem; color: var(--text-secondary);"><strong>Example:</strong> "${p.example}"</p>
                            </div>
                        `).join('') : ''}
                    </div>

                    <h4 style="margin: 30px 0 15px; color: var(--accent-electric);">🗣️ Real-World Application Task</h4>
                    <div style="background: #faf9f6; padding: 25px; border-radius: 12px; border: 1px dashed #cccccc; display: flex; flex-direction: column; gap: 15px;">
                        <p style="font-size: 1.05rem; margin-bottom: 5px; line-height: 1.6; color: var(--text-primary);">${unit.functionalLanguage.task}</p>
                        <textarea id="task-textarea-${unit.id}" style="width: 100%; height: 120px; background: #ffffff; border: 1px solid #cccccc; color: var(--text-primary); padding: 12px; border-radius: 8px; font-family: inherit; font-size: 0.95rem;" placeholder="Write your notes, dialogue, or practice sentences here..."></textarea>
                        <button onclick="sendTaskToTeacher(${unit.id}, '${unit.title.replace(/'/g, "\\'")}', '${unit.functionalLanguage.task.replace(/'/g, "\\'").replace(/\n/g, " ")}')" style="align-self: flex-start; background: #25d366; color: #ffffff; border: none; padding: 12px 24px; border-radius: 50px; font-weight: 700; font-size: 0.95rem; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(37, 211, 102, 0.25);" onmouseover="this.style.background='#20ba5a'; this.style.transform='translateY(-2px)';" onmouseout="this.style.background='#25d366'; this.style.transform='translateY(0)';" >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle;"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.63-1.023-5.101-2.887-6.963C16.378 1.936 13.912.912 11.3.912c-5.448 0-9.873 4.417-9.877 9.851-.001 1.765.464 3.486 1.347 5.013l-.995 3.637 3.737-.981zm12.355-6.853c-.302-.15-1.786-.881-2.046-.977-.26-.096-.45-.144-.64.144-.19.288-.737.977-.902 1.168-.166.19-.332.215-.634.065-1.229-.614-2.03-1.077-2.83-2.457-.215-.369.215-.343.615-1.144.1-.19.05-.356-.025-.506-.075-.15-.64-1.54-.877-2.109-.23-.553-.464-.477-.64-.486-.166-.008-.356-.01-.546-.01-.19 0-.5.07-.76.356-.26.288-1.002.977-1.002 2.385s1.025 2.766 1.168 2.957c.143.19 2.017 3.08 4.886 4.318.684.295 1.218.47 1.635.6.688.219 1.314.188 1.81.114.553-.083 1.78-.728 2.03-1.432.25-.704.25-1.309.175-1.432-.075-.124-.275-.2-.577-.35z"/></svg>
                            Send task to teacher
                        </button>
                    </div>
                </div>
                ` : ''}

                <!-- 10. Recommended Videos -->
                ${unit.videos && unit.videos.length > 0 ? `
                <div class="section-block">
                    <span class="section-label" style="background: #ef4444; color: #ffffff;">📺 Videos</span>
                    <h3>Recommended Videos</h3>
                    <p style="margin-bottom: 20px; color: var(--text-secondary);">Watch these videos to deepen your understanding of the topic:</p>
                    <div style="display: grid; gap: 15px;">
                        ${unit.videos.map(video => `
                            <a href="${video.url}" target="_blank" rel="noopener noreferrer" 
                               style="display: flex; align-items: center; gap: 15px; background: #ffffff; padding: 15px 20px; border-radius: 12px; text-decoration: none; color: var(--text-primary); border: 1px solid #e7e5e4; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(0,0,0,0.01);"
                               onmouseover="this.style.background='#faf9f6'; this.style.borderColor='var(--accent-electric)';"
                               onmouseout="this.style.background='#ffffff'; this.style.borderColor='#e7e5e4';">
                                <span style="font-size: 2rem;">▶️</span>
                                <div>
                                    <h4 style="margin: 0 0 5px 0; color: var(--accent-electric);">${video.title}</h4>
                                    <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);">${video.channel} • ${video.duration}</p>
                                </div>
                            </a>
                        `).join('')}
                    </div>
                </div>
                ` : ''}

                ${unit.id % 2 === 0 ? `
                <!-- Exam Link for Even Units -->
                <div class="section-block" style="border-top: 2px solid var(--accent-electric); margin-top: 40px; padding-top: 30px; text-align: center;">
                    <span class="section-label" style="background: var(--accent-electric); color: #ffffff;">📝 Progress Exam</span>
                    <h3 style="color: var(--text-primary); margin: 15px 0 10px;">You've completed Units ${unit.id - 1} &amp; ${unit.id}!</h3>
                    <p style="color: var(--text-secondary); margin-bottom: 20px;">Test your knowledge with the Progress Exam covering both units — listening, writing &amp; grammar.</p>
                    <a href="exam${unit.id / 2}.html" style="display: inline-block; background: var(--accent-electric); border: 2px solid var(--accent-electric); color: #ffffff; padding: 14px 35px; border-radius: 50px; font-weight: 700; font-size: 1rem; text-decoration: none; transition: all 0.3s ease;"
                        onmouseover="this.style.background='#ffffff'; this.style.color='var(--accent-electric)'; this.style.transform='translateY(-2px)'"
                        onmouseout="this.style.background='var(--accent-electric)'; this.style.color='#ffffff'; this.style.transform=''">
                        📝 Take Exam ${unit.id / 2} →
                    </a>
                </div>
                ` : ''}

            </div>
        `;
        container.appendChild(unitBlock);
    });
}

function renderQuiz(questions) {
    return `
        <div style="margin-top: 20px;">
            ${questions.map((q, i) => `
                <div style="margin-bottom: 15px;">
                    <p style="margin-bottom: 8px; font-weight: 500;">Q: ${q.q}</p>
                    <div class="options-grid" style="justify-content: flex-start;">
                        ${q.options.map((opt, oIdx) => `
                            <button class="btn" style="padding: 5px 15px; font-size: 0.8rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);" 
                            onclick="checkAnswer(this, ${oIdx === q.correct})">${opt}</button>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Helpers
window.playTrack = function (text) { window.courseAudio.play(text); };
window.toggleTranscript = function (btn) {
    const box = btn.nextElementSibling;
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
    btn.textContent = box.style.display === 'none' ? 'Show Transcript' : 'Hide Transcript';
};
window.checkAnswer = function (btn, isCorrect) {
    const container = btn.parentElement;
    Array.from(container.children).forEach(b => { b.style.background = '#ffffff'; b.style.borderColor = '#cccccc'; b.style.color = 'var(--text-primary)'; });
    if (isCorrect) { 
        btn.style.background = '#d1fae5'; btn.style.borderColor = '#10b981'; btn.style.color = '#065f46'; 
    } else { 
        btn.style.background = '#fee2e2'; btn.style.borderColor = '#ef4444'; btn.style.color = '#991b1b';
    }
};
window.checkCollocation = function (btn, selected, correct) {
    const parent = btn.closest('.collo-box');
    const blank = parent.querySelector('.blank');
    const buttons = parent.querySelectorAll('button');
    if (selected === correct) {
        blank.textContent = correct; blank.style.color = '#10b981'; blank.style.borderBottom = 'none';
        btn.style.background = '#10b981'; btn.style.color = '#ffffff';
        buttons.forEach(b => b.disabled = true);
    } else {
        btn.style.background = '#ef4444'; btn.style.color = '#ffffff';
        setTimeout(() => { btn.style.background = '#ffffff'; btn.style.color = 'var(--text-primary)'; }, 500);
    }
};

// High-Fidelity Google Translate Neural TTS Audio Engine
let audioQueue = [];
let currentAudio = null;
let isAudioPlaying = false;
let isAudioPaused = false;

window.playAudio = function (text) {
    window.stopAudio();
    if (!text) return;

    // Split text into ~180-char chunks on sentence boundaries
    const chunks = [];
    const maxLen = 180;
    let currentChunk = "";
    const words = text.split(" ");
    
    for (let word of words) {
        if ((currentChunk + " " + word).length > maxLen) {
            chunks.push(currentChunk.trim());
            currentChunk = word;
        } else {
            currentChunk += (currentChunk ? " " : "") + word;
        }
    }
    if (currentChunk.trim()) {
        chunks.push(currentChunk.trim());
    }

    // Build the queue of Google neural TTS URLs
    audioQueue = chunks.map(chunk => 
        `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en&q=${encodeURIComponent(chunk)}`
    );

    isAudioPaused = false;
    playNextInQueue();
};

function playNextInQueue() {
    if (audioQueue.length === 0) {
        currentAudio = null;
        isAudioPlaying = false;
        isAudioPaused = false;
        updatePauseButton(false);
        return;
    }

    isAudioPlaying = true;
    const url = audioQueue.shift();
    currentAudio = new Audio(url);
    
    currentAudio.addEventListener('ended', () => {
        playNextInQueue();
    });

    currentAudio.addEventListener('error', (e) => {
        console.error("Audio playback error, trying next chunk:", e);
        playNextInQueue();
    });

    currentAudio.play().catch(err => {
        console.error("Play failed:", err);
        playNextInQueue();
    });
}

window.stopAudio = function () {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    audioQueue = [];
    isAudioPlaying = false;
    isAudioPaused = false;
    updatePauseButton(false);
};

window.pauseAudio = function () {
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        isAudioPaused = true;
        updatePauseButton(true);
    }
};

window.resumeAudio = function () {
    if (currentAudio && currentAudio.paused) {
        currentAudio.play().catch(e => console.error(e));
        isAudioPaused = false;
        updatePauseButton(false);
    } else if (audioQueue.length > 0) {
        playNextInQueue();
    }
};

window.togglePauseAudio = function () {
    if (currentAudio) {
        if (currentAudio.paused) {
            window.resumeAudio();
        } else {
            window.pauseAudio();
        }
    }
};

function updatePauseButton(isPaused) {
    const pauseBtn = document.getElementById('pause-audio-btn');
    if (pauseBtn) {
        pauseBtn.innerHTML = isPaused ? '▶️ Resume' : '⏸️ Pause';
    }
}

window.courseAudio = { play: window.playAudio, stop: window.stopAudio, pause: window.pauseAudio, resume: window.resumeAudio, togglePause: window.togglePauseAudio };

window.initAudioEngine = function () {
    console.log("Google Neural TTS audio engine initialized");
};

window.sendTaskToTeacher = function(unitId, unitTitle, taskText) {
    const textarea = document.getElementById(`task-textarea-${unitId}`);
    if (!textarea) return;
    
    const responseText = textarea.value.trim();
    if (!responseText) {
        alert("Please write your task response before sending it to the teacher!");
        return;
    }
    
    const baseText = `*C1 ADVANCED COURSE — REAL-WORLD APPLICATION TASK*\n\n` +
                     `*Unit ${unitId}:* ${unitTitle}\n` +
                     `*Task:* _${taskText}_\n\n` +
                     `*My Response:*\n${responseText}`;
                     
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(baseText)}`;
    window.open(whatsappUrl, '_blank');
};

