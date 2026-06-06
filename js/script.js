// ─── Student Profile Management ──────────────────────────────────────────────
function getActiveStudent() {
    return localStorage.getItem('c1_active_student') || 'Default Student';
}

function getStudentsList() {
    let list = localStorage.getItem('c1_students');
    if (!list) {
        list = ['Default Student'];
        localStorage.setItem('c1_students', JSON.stringify(list));
        localStorage.setItem('c1_active_student', 'Default Student');
        
        // Migrate existing keys if any
        const keysToMigrate = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('c1_completed_u') || key.startsWith('c1_sec_u') || key.startsWith('c1ev_sec_')) {
                keysToMigrate.push(key);
            }
        }
        keysToMigrate.forEach(key => {
            const val = localStorage.getItem(key);
            localStorage.setItem(`Default Student_${key}`, val);
        });
        return list;
    }
    try {
        return JSON.parse(list);
    } catch(e) {
        return ['Default Student'];
    }
}

function getScopedKey(key) {
    const student = getActiveStudent();
    return `${student}_${key}`;
}

function initializeStudentSystem() {
    getStudentsList();
}

function injectStudentSelector() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    
    let existing = document.getElementById('student-selector-container');
    if (existing) existing.remove();
    
    const container = document.createElement('div');
    container.id = 'student-selector-container';
    container.style.cssText = 'display: flex; align-items: center; gap: 8px; font-family: var(--font-heading); margin-right: 15px;';
    
    const activeStudent = getActiveStudent();
    const list = getStudentsList();
    
    let optionsHtml = '';
    list.forEach(student => {
        const selected = student === activeStudent ? 'selected' : '';
        optionsHtml += `<option value="${student}" ${selected}>${student}</option>`;
    });
    
    container.innerHTML = `
        <span style="font-size: 0.85rem; color: #a5b4fc; font-weight: 600;">Student:</span>
        <select id="student-select" onchange="switchStudent(this.value)" style="background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(99, 102, 241, 0.4); color: #fff; padding: 6px 10px; border-radius: 6px; font-size: 0.85rem; outline: none; cursor: pointer; color-scheme: dark;">
            ${optionsHtml}
        </select>
        <button onclick="openStudentModal()" style="background: rgba(99, 102, 241, 0.2); border: 1px solid rgba(99, 102, 241, 0.4); color: #fff; padding: 6px 10px; border-radius: 6px; font-size: 0.85rem; cursor: pointer; display: flex; align-items: center; justify-content: center; line-height: 1;" title="Manage Students">
            ⚙️
        </button>
    `;
    
    const buttonDiv = nav.querySelector('div:nth-of-type(2)') || nav.querySelector('div');
    if (buttonDiv) {
        nav.insertBefore(container, buttonDiv);
    } else {
        nav.appendChild(container);
    }
}

window.switchStudent = function(name) {
    localStorage.setItem('c1_active_student', name);
    injectStudentSelector();
    if (typeof renderCurriculum === 'function') {
        renderCurriculum();
    }
    window.dispatchEvent(new Event('storage'));
};

window.openStudentModal = function() {
    let modal = document.getElementById('student-modal');
    if (modal) modal.remove();
    
    modal = document.createElement('div');
    modal.id = 'student-modal';
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(8px);
        display: flex; align-items: center; justify-content: center; z-index: 10000;
    `;
    
    const activeStudent = getActiveStudent();
    const list = getStudentsList();
    
    let listHtml = '';
    list.forEach(student => {
        const deleteButton = list.length > 1 
            ? `<button onclick="deleteStudent('${student.replace(/'/g, "\\'")}')" style="background: rgba(239, 68, 68, 0.2); border: 1px solid rgba(239, 68, 68, 0.4); color: #fca5a5; padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; cursor: pointer; transition: all 0.2s;">Delete ❌</button>`
            : '';
        const isActiveLabel = student === activeStudent ? '<span style="color: #2dd4bf; font-weight: bold; font-size: 0.8rem;">(Active)</span>' : '';
        listHtml += `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 6px; margin-bottom: 8px;">
                <span style="color: #fff; font-size: 0.95rem;">${student} ${isActiveLabel}</span>
                ${deleteButton}
            </div>
        `;
    });
    
    modal.innerHTML = `
        <div style="background: #1e293b; border: 1px solid rgba(129, 140, 248, 0.3); border-radius: 16px; padding: 30px; width: 90%; max-width: 450px; box-shadow: 0 15px 50px rgba(0,0,0,0.5); font-family: var(--font-body); color: #f1f5f9;">
            <h3 style="margin-top: 0; margin-bottom: 20px; font-family: var(--font-heading); color: #fff; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
                <span>👥 Manage Students</span>
                <span style="cursor: pointer; font-size: 1.2rem; opacity: 0.7;" onclick="closeStudentModal()">✕</span>
            </h3>
            
            <div style="max-height: 200px; overflow-y: auto; margin-bottom: 20px; padding-right: 5px;">
                ${listHtml}
            </div>
            
            <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 15px; margin-bottom: 20px;">
                <label style="display: block; font-size: 0.85rem; color: #a5b4fc; margin-bottom: 6px; font-weight: 600;">Add New Student Profile:</label>
                <div style="display: flex; gap: 8px;">
                    <input type="text" id="new-student-name" placeholder="Enter name..." style="flex: 1; background: rgba(0, 0, 0, 0.25); border: 1px solid rgba(99, 102, 241, 0.4); color: #fff; padding: 8px 12px; border-radius: 6px; font-size: 0.9rem; outline: none;">
                    <button onclick="addNewStudent()" style="background: var(--gradient-accent); border: none; color: #fff; padding: 8px 16px; border-radius: 6px; font-weight: 600; font-size: 0.9rem; cursor: pointer; transition: all 0.2s;">Add</button>
                </div>
            </div>
            
            <div style="text-align: right;">
                <button onclick="closeStudentModal()" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.15); color: #fff; padding: 8px 20px; border-radius: 50px; font-size: 0.85rem; cursor: pointer; transition: all 0.2s;">Close</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    setTimeout(() => {
        const input = document.getElementById('new-student-name');
        if (input) input.focus();
    }, 50);
};

window.closeStudentModal = function() {
    const modal = document.getElementById('student-modal');
    if (modal) modal.remove();
};

window.addNewStudent = function() {
    const input = document.getElementById('new-student-name');
    if (!input) return;
    const name = input.value.trim();
    if (!name) {
        alert("Please enter a valid student name.");
        return;
    }
    
    const list = getStudentsList();
    if (list.includes(name)) {
        alert("A student with this name already exists.");
        return;
    }
    
    list.push(name);
    localStorage.setItem('c1_students', JSON.stringify(list));
    localStorage.setItem('c1_active_student', name);
    
    closeStudentModal();
    switchStudent(name);
};

window.deleteStudent = function(name) {
    const list = getStudentsList();
    if (list.length <= 1) {
        alert("Cannot delete the last student profile.");
        return;
    }
    
    if (!confirm(`Are you sure you want to delete profile "${name}"? All progress for this student will be lost.`)) {
        return;
    }
    
    const index = list.indexOf(name);
    if (index > -1) {
        list.splice(index, 1);
    }
    localStorage.setItem('c1_students', JSON.stringify(list));
    
    const keysToRemove = [];
    const prefix = `${name}_`;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith(prefix)) {
            keysToRemove.push(key);
        }
    }
    keysToRemove.forEach(key => localStorage.removeItem(key));
    
    const activeStudent = getActiveStudent();
    if (activeStudent === name) {
        localStorage.setItem('c1_active_student', list[0]);
    }
    
    openStudentModal();
    switchStudent(getActiveStudent());
};

window.addEventListener('storage', (e) => {
    if (e.key === 'c1_active_student' || e.key === 'c1_students') {
        injectStudentSelector();
        if (typeof renderCurriculum === 'function') {
            renderCurriculum();
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('C1 Advanced Course Initialized');
    initializeStudentSystem();
    injectStudentSelector();
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
        1: `<svg viewBox="0 0 400 200" width="100%" height="160" style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:12px; display:block; margin: 0 auto 25px;">
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
        2: `<svg viewBox="0 0 400 200" width="100%" height="160" style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:12px; display:block; margin: 0 auto 25px;">
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
        3: `<svg viewBox="0 0 400 200" width="100%" height="160" style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:12px; display:block; margin: 0 auto 25px;">
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
        4: `<svg viewBox="0 0 400 200" width="100%" height="160" style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:12px; display:block; margin: 0 auto 25px;">
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
        5: `<svg viewBox="0 0 400 200" width="100%" height="160" style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:12px; display:block; margin: 0 auto 25px;">
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
        6: `<svg viewBox="0 0 400 200" width="100%" height="160" style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:12px; display:block; margin: 0 auto 25px;">
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
        7: `<svg viewBox="0 0 400 200" width="100%" height="160" style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:12px; display:block; margin: 0 auto 25px;">
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
        8: `<svg viewBox="0 0 400 200" width="100%" height="160" style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:12px; display:block; margin: 0 auto 25px;">
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
                ${unitCompBar(unit.id)}
                <div class="unit-illustration">
                    ${getUnitIllustration(unit.id)}
                </div>
                <p style="opacity: 0.7; margin-bottom: 30px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 15px;">Topic: ${unit.topic}</p>
                
                <!-- 1. Vocabulary -->
                <div class="section-block">
                    <span class="section-label" style="background: rgba(255,255,255,0.1); color: #fff;">A1. Vocabulary</span>
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
                    ${compBar(unit.id, 'vocabulary')}
                </div>

                <!-- 2. Listening -->
                <div class="section-block">
                    <span class="section-label listening">B1. Listening</span>
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
                    ${compBar(unit.id, 'listening')}
                </div>

                <!-- 3. Reading -->
                <div class="section-block">
                    <span class="section-label reading">C1. Reading</span>
                    <h3>${unit.reading.title}</h3>
                    <div class="reading-text">${unit.reading.text}</div>
                    ${renderQuiz(unit.reading.questions)}
                    ${compBar(unit.id, 'reading')}
                </div>

                <!-- 4. Grammar -->
                <div class="section-block">
                    <span class="section-label grammar">D1. Grammar</span>
                    <h3>${unit.grammar.title}</h3>
                    <div class="grammar-box">
                        <p style="margin-bottom:10px;">${unit.grammar.explanation}</p>
                        <p style="font-family:monospace; color:#5eead4;">Ex: ${unit.grammar.example}</p>
                    </div>
                    <div style="margin-top:20px;">
                        ${unit.grammar.quizzes ? unit.grammar.quizzes.map((q, idx) => `
                            <div style="margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px dashed rgba(255,255,255,0.1);">
                                <p style="font-weight:600; margin-bottom:10px; color: var(--text-primary);">${idx + 1}. ${q.question}</p>
                                <div class="options-grid" style="justify-content: flex-start;">
                                    ${q.options.map((opt, i) => `
                                        <button class="btn" style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.15); color:var(--text-primary);" 
                                        onclick="checkAnswer(this, ${i === q.correct})">${opt}</button>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('') : ''}
                    </div>
                    ${compBar(unit.id, 'grammar')}
                </div>
 
                <!-- 5. Verb Patterns -->
                ${unit.verb_patterns ? `
                <div class="section-block">
                    <span class="section-label" style="background: var(--accent-gold); color: #0f172a;">E1. Verb Patterns</span>
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
                            <div style="margin-bottom: 15px; padding: 15px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px;">
                                <p style="font-weight:600; margin-bottom:10px; color: var(--text-primary);">${idx + 1}. ${q.sentence}</p>
                                <div class="options-grid" style="justify-content: flex-start;">
                                    ${q.options.map((opt, i) => `
                                        <button class="btn" style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.15); color:var(--text-primary);" 
                                        onclick="checkAnswer(this, ${i === q.correct})">${opt}</button>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    ${compBar(unit.id, 'verb_patterns')}
                </div>
                ` : ''}
 
                <!-- 6. Pronunciation -->
                <div class="section-block">
                    <span class="section-label pronunciation">F1. Pronunciation</span>
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
                        <div style="margin-bottom: 20px; padding: 15px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px;">
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
                                <button class="play-btn" style="width: 40px; height: 40px; font-size: 1rem;" onclick="playAudio('${item.sentence.replace(/'/g, "\\'")}')" >🔊</button>
                                <p style="font-size: 1.2rem; font-style: italic; margin: 0; color: var(--text-primary);">"${item.sentence}"</p>
                            </div>
                            <p style="font-size: 0.9rem; color: var(--accent-electric); margin: 0;"><strong>Stressed words:</strong> ${item.stressed.join(', ')}</p>
                        </div>
                    `).join('') : ''}
                    ${compBar(unit.id, 'pronunciation')}
                </div>
 
                <!-- 6. Collocation -->
                <div class="section-block">
                    <span class="section-label collocation">G1. Collocations</span>
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
                                        <button class="btn" style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.15); color:var(--text-primary);" 
                                        onclick="checkCollocation(this, '${opt}', '${col.pair[1]}')">${opt}</button>
                                    `).join('');
            })()}
                            </div>
                        </div>
                    `).join('') : ''}
                    </div>
                    ${compBar(unit.id, 'collocations')}
                </div>
 
                <!-- 7. Writing -->
                <div class="section-block">
                    <span class="section-label" style="background: #ec4899; color: #ffffff;">H1. Writing Task</span>
                    <div style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
                        <p style="font-style: italic; margin-bottom: 15px; color: var(--text-secondary);">Target: 250 words</p>
                        <h4 style="margin-bottom: 10px; color: var(--text-primary);">${unit.writing || 'Write about the topic.'}</h4>
                        <textarea style="width: 100%; height: 150px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: var(--text-primary); padding: 12px; border-radius: 8px; font-family: inherit;" placeholder="Type your essay here..."></textarea>
                    </div>
                    ${compBar(unit.id, 'writing')}
                </div>

                <!-- 8. Speaking -->
                <div class="section-block">
                    <span class="section-label" style="background: #f59e0b; color: #ffffff;">I1. Speaking</span>
                    <div style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; display: flex; align-items: center; gap: 20px; border: 1px solid rgba(255,255,255,0.08);">
                        <span style="font-size: 2rem;">🎙️</span>
                        <div>
                            <h4 style="margin: 0 0 5px 0; color: var(--text-primary);">Discussion Prompt</h4>
                            <p style="margin: 0; color: var(--text-secondary);">${unit.speaking || 'Discuss the topic.'}</p>
                        </div>
                    </div>
                    ${compBar(unit.id, 'speaking')}
                </div>

                <!-- 9. Functional Language -->
                ${unit.functionalLanguage ? `
                <div class="section-block">
                    <span class="section-label" style="background: var(--accent-electric); color: #ffffff;">J1. Functional English</span>
                    <h3 style="color: var(--text-primary); margin: 15px 0 10px;">🗣️ Functional Language: ${unit.functionalLanguage.functionName}</h3>
                    <p style="color: var(--text-secondary); margin: 10px 0 20px; font-size: 0.98rem; line-height: 1.5;">${unit.functionalLanguage.description}</p>
                    
                    <p style="margin-bottom: 15px; color: var(--text-secondary); font-weight: 600; font-size: 0.95rem;">🔊 Click the speaker to hear key functional phrases pronounced:</p>
                    <div class="vocab-grid">
                        ${unit.functionalLanguage.phrases ? unit.functionalLanguage.phrases.map(p => `
                            <div class="vocab-card" style="border-left-color: var(--accent-electric); background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-left-width: 4px;">
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
                    <div style="background: rgba(255,255,255,0.03); padding: 25px; border-radius: 12px; border: 1px dashed rgba(255,255,255,0.15); display: flex; flex-direction: column; gap: 15px;">
                        <p style="font-size: 1.05rem; margin-bottom: 5px; line-height: 1.6; color: var(--text-primary);">${unit.functionalLanguage.task}</p>
                        <textarea id="task-textarea-${unit.id}" style="width: 100%; height: 120px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: var(--text-primary); padding: 12px; border-radius: 8px; font-family: inherit; font-size: 0.95rem;" placeholder="Write your notes, dialogue, or practice sentences here..."></textarea>
                        <button onclick="sendTaskToTeacher(${unit.id}, '${unit.title.replace(/'/g, "\\'")}', '${unit.functionalLanguage.task.replace(/'/g, "\\'").replace(/\n/g, " ")}')" style="align-self: flex-start; background: #25d366; color: #ffffff; border: none; padding: 12px 24px; border-radius: 50px; font-weight: 700; font-size: 0.95rem; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(37, 211, 102, 0.25);" onmouseover="this.style.background='#20ba5a'; this.style.transform='translateY(-2px)';" onmouseout="this.style.background='#25d366'; this.style.transform='translateY(0)';" >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle;"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.63-1.023-5.101-2.887-6.963C16.378 1.936 13.912.912 11.3.912c-5.448 0-9.873 4.417-9.877 9.851-.001 1.765.464 3.486 1.347 5.013l-.995 3.637 3.737-.981zm12.355-6.853c-.302-.15-1.786-.881-2.046-.977-.26-.096-.45-.144-.64.144-.19.288-.737.977-.902 1.168-.166.19-.332.215-.634.065-1.229-.614-2.03-1.077-2.83-2.457-.215-.369.215-.343.615-1.144.1-.19.05-.356-.025-.506-.075-.15-.64-1.54-.877-2.109-.23-.553-.464-.477-.64-.486-.166-.008-.356-.01-.546-.01-.19 0-.5.07-.76.356-.26.288-1.002.977-1.002 2.385s1.025 2.766 1.168 2.957c.143.19 2.017 3.08 4.886 4.318.684.295 1.218.47 1.635.6.688.219 1.314.188 1.81.114.553-.083 1.78-.728 2.03-1.432.25-.704.25-1.309.175-1.432-.075-.124-.275-.2-.577-.35z"/></svg>
                            Send task to teacher
                        </button>
                    </div>
                    ${compBar(unit.id, 'functional')}
                </div>
                ` : ''}

                <!-- 10. Recommended Videos -->
                ${unit.videos && unit.videos.length > 0 ? `
                <div class="section-block">
                    <span class="section-label" style="background: #ef4444; color: #ffffff;">K1. Recommended Videos</span>
                    <h3>Recommended Videos</h3>
                    <p style="margin-bottom: 20px; color: var(--text-secondary);">Watch these videos to deepen your understanding of the topic:</p>
                    <div style="display: grid; gap: 15px;">
                        ${unit.videos.map(video => `
                            <a href="${video.url}" target="_blank" rel="noopener noreferrer" 
                               style="display: flex; align-items: center; gap: 15px; background: rgba(255,255,255,0.04); padding: 15px 20px; border-radius: 12px; text-decoration: none; color: var(--text-primary); border: 1px solid rgba(255,255,255,0.08); transition: all 0.3s ease;"
                               onmouseover="this.style.background='rgba(255,255,255,0.08)'; this.style.borderColor='var(--accent-electric)';"
                               onmouseout="this.style.background='rgba(255,255,255,0.04)'; this.style.borderColor='rgba(255,255,255,0.08)';">
                                <span style="font-size: 2rem;">▶️</span>
                                <div>
                                    <h4 style="margin: 0 0 5px 0; color: var(--accent-electric);">${video.title}</h4>
                                    <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);">${video.channel} • ${video.duration}</p>
                                </div>
                            </a>
                        `).join('')}
                    </div>
                    ${compBar(unit.id, 'videos')}
                </div>
                ` : ''}

                ${unit.id % 2 === 0 ? `
                <!-- Exam Link for Even Units -->
                <div class="section-block" style="border-top: 2px solid var(--accent-electric); margin-top: 40px; padding-top: 30px; text-align: center;">
                    <span class="section-label" style="background: var(--accent-electric); color: #ffffff;">📝 Progress Exam</span>
                    <h3 style="color: var(--text-primary); margin: 15px 0 10px;">You've completed Units ${unit.id - 1} &amp; ${unit.id}!</h3>
                    <p style="color: var(--text-secondary); margin-bottom: 20px;">Test your knowledge with the Progress Exam covering both units — listening, writing &amp; grammar.</p>
                    <a href="exam${unit.id / 2}.html" style="display: inline-block; background: var(--accent-electric); border: 2px solid var(--accent-electric); color: #ffffff; padding: 14px 35px; border-radius: 50px; font-weight: 700; font-size: 1rem; text-decoration: none; transition: all 0.3s ease;"
                        onmouseover="this.style.background='transparent'; this.style.color='var(--accent-electric)'; this.style.transform='translateY(-2px)'"
                        onmouseout="this.style.background='var(--accent-electric)'; this.style.color='#fff'; this.style.transform=''">
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
    Array.from(container.children).forEach(b => { b.style.background = 'rgba(255,255,255,0.05)'; b.style.borderColor = 'rgba(255,255,255,0.15)'; b.style.color = 'var(--text-primary)'; });
    if (isCorrect) { 
        btn.style.background = 'rgba(16,185,129,0.25)'; btn.style.borderColor = '#10b981'; btn.style.color = '#6ee7b7'; 
    } else { 
        btn.style.background = 'rgba(239,68,68,0.25)'; btn.style.borderColor = '#ef4444'; btn.style.color = '#fca5a5';
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
        btn.style.background = 'rgba(239,68,68,0.3)'; btn.style.color = '#fca5a5';
        setTimeout(() => { btn.style.background = 'rgba(255,255,255,0.05)'; btn.style.color = 'var(--text-primary)'; }, 500);
    }
};

// ─── Section Completion Bar (2 student slots per task) ────────────────────────
function compSlots(keyBase) {
    let rows = '';
    for (let s = 1; s <= 2; s++) {
        const nk = keyBase + '_s' + s + '_name';
        const dk = keyBase + '_s' + s + '_date';
        const savedName = localStorage.getItem(getScopedKey(nk)) || '';
        const savedDate = localStorage.getItem(getScopedKey(dk)) || '';
        rows += `
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
            <span style="font-size:0.82rem;color:#a5b4fc;min-width:90px;font-weight:600;">👤 Student ${s}:</span>
            <input type="text" value="${savedName}" placeholder="Name..."
                onchange="saveCompField('${nk}',this.value)"
                style="background:rgba(0,0,0,0.25);border:1px solid rgba(99,102,241,0.35);
                color:#fff;padding:4px 8px;border-radius:4px;font-size:0.82rem;
                outline:none;width:140px;font-family:var(--font-body);">
            <span style="font-size:0.8rem;color:#a5b4fc;">📅</span>
            <input type="date" value="${savedDate}"
                onchange="saveCompField('${dk}',this.value)"
                style="background:rgba(0,0,0,0.25);border:1px solid rgba(99,102,241,0.35);
                color:#fff;padding:3px 7px;border-radius:4px;font-size:0.82rem;
                outline:none;color-scheme:dark;">
        </div>`;
    }
    return rows;
}

function compBar(unitId, sec) {
    const key = 'c1_sec_u' + unitId + '_' + sec;
    return `
    <div style="margin-top:18px;padding:12px 14px;background:rgba(99,102,241,0.08);
        border:1px solid rgba(99,102,241,0.25);border-radius:8px;display:flex;flex-direction:column;gap:8px;">
        <span style="font-size:0.85rem;color:#a5b4fc;font-weight:700;">✅ Completion Tracking</span>
        ${compSlots(key)}
    </div>`;
}

function unitCompBar(unitId) {
    const key = 'c1_unit_' + unitId;
    return `
    <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;padding:12px 15px;
        background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.3);border-radius:8px;">
        <span style="font-size:0.95rem;color:#a5b4fc;font-weight:700;">✅ Completed in Class</span>
        ${compSlots(key)}
    </div>`;
}

window.saveCompField = function(key, value) {
    const scopedKey = getScopedKey(key);
    if (value) {
        localStorage.setItem(scopedKey, value);
    } else {
        localStorage.removeItem(scopedKey);
    }
};

// ─── Google Neural TTS Audio Engine ──────────────────────────────────────────
// Natural, high-quality, professional American English TTS
let ttsAudioElement = new Audio();
let ttsTextChunks = [];
let currentTtsChunkIndex = 0;
let isTtsPlayingState = false;
let isTtsPausedState = false;

function splitTextForGoogleTTS(text, maxLen = 180) {
    const chunks = [];
    let rem = text;
    while (rem.length > 0) {
        if (rem.length <= maxLen) {
            chunks.push(rem);
            break;
        }
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

window.playAudio = function (text) {
    window.stopAudio();
    if (!text) return;

    // Clean up text
    const cleanedText = text
        .replace(/<[^>]+>/g, ' ')
        .replace(/[\/\(\)\[\]]/g, ' ')
        .replace(/&amp;/g, 'and')
        .replace(/&quot;/g, '')
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    ttsTextChunks = splitTextForGoogleTTS(cleanedText, 180);
    currentTtsChunkIndex = 0;
    isTtsPlayingState = true;
    isTtsPausedState = false;
    
    if (ttsTextChunks.length > 0) {
        playNextTtsChunk();
    }
};

function playNextTtsChunk() {
    if (currentTtsChunkIndex >= ttsTextChunks.length) {
        isTtsPlayingState = false;
        updatePauseButton(false);
        return;
    }
    
    const chunk = ttsTextChunks[currentTtsChunkIndex];
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en&q=${encodeURIComponent(chunk)}`;
    
    ttsAudioElement.src = url;
    ttsAudioElement.play()
        .then(() => {
            updatePauseButton(false);
        })
        .catch(err => {
            console.error("Error playing TTS chunk:", err);
            // Skip to next chunk
            currentTtsChunkIndex++;
            playNextTtsChunk();
        });
}

ttsAudioElement.onended = () => {
    if (isTtsPlayingState && !isTtsPausedState) {
        currentTtsChunkIndex++;
        // Natural pause between sentences
        setTimeout(() => {
            if (isTtsPlayingState && !isTtsPausedState) {
                playNextTtsChunk();
            }
        }, 400);
    }
};

window.stopAudio = function () {
    ttsAudioElement.pause();
    ttsTextChunks = [];
    currentTtsChunkIndex = 0;
    isTtsPlayingState = false;
    isTtsPausedState = false;
    updatePauseButton(false);
};

window.pauseAudio = function () {
    if (isTtsPlayingState && !isTtsPausedState) {
        ttsAudioElement.pause();
        isTtsPausedState = true;
        updatePauseButton(true);
    }
};

window.resumeAudio = function () {
    if (isTtsPlayingState && isTtsPausedState) {
        isTtsPausedState = false;
        ttsAudioElement.play()
            .then(() => {
                updatePauseButton(false);
            })
            .catch(err => {
                console.error("Error resuming audio:", err);
            });
    }
};

window.togglePauseAudio = function () {
    if (isTtsPlayingState) {
        if (isTtsPausedState) {
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
    console.log('C1 Google Neural American English Audio Engine Initialized');
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

