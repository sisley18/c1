import re

with open('exam2.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Update Titles
html = re.sub(r'<title>.*?</title>', '<title>Progress Exam 4 — Units 7 & 8 | Advanced English C1</title>', html)
html = re.sub(r'<h1>.*?</h1>', '<h1>Progress Exam 4</h1>', html)
html = re.sub(r'<p>Units 3 &amp; 4 Review</p>', '<p>Units 7 &amp; 8 Comprehensive Review</p>', html)
html = html.replace('Midterm Progress Exam', 'Progress Exam 4')
html = html.replace('Units 1 to 4 Comprehensive Review', 'Units 7 &amp; 8 Comprehensive Review')
html = html.replace('Units 3 &amp; 4 Review', 'Units 7 &amp; 8 Review')


c1_content = """
        <div class="exam-section">
            <span class="sec-label sec-indigo">🎧 PART 1: LISTENING COMPREHENSION</span>
            <p style="color:var(--muted); font-size:0.95rem; margin-bottom:1.5rem">Listen to the audio and answer the multiple-choice questions.</p>
            
            <div class="audio-player">
                <button class="play-btn" onclick="document.getElementById('exam4-audio').play()">▶ Play Audio</button>
                <audio id="exam4-audio" src="audio/exam4.mp3"></audio>
            </div>

            <div class="quiz-item" style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border: 1px solid var(--border); margin-bottom: 15px;">
                <p class="quiz-q" style="font-weight: 600; margin-bottom: 15px; color: var(--text);">1. According to the discussion on epistemology, what did Edmund Gettier's 1963 paper demonstrate?</p>
                <div class="opts" style="display: flex; flex-direction: column; gap: 10px;">
                    <button class="opt-btn" onclick="checkAns(this, false)">A) That Plato's definition of knowledge was entirely accurate.</button>
                    <button class="opt-btn" onclick="checkAns(this, true)">B) That a justified true belief is not necessarily knowledge.</button>
                    <button class="opt-btn" onclick="checkAns(this, false)">C) That empirical observation is the only path to certainty.</button>
                </div>
            </div>

            <div class="quiz-item" style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border: 1px solid var(--border); margin-bottom: 15px;">
                <p class="quiz-q" style="font-weight: 600; margin-bottom: 15px; color: var(--text);">2. In the context of the "post-truth" landscape, what role do algorithms optimized for engagement play?</p>
                <div class="opts" style="display: flex; flex-direction: column; gap: 10px;">
                    <button class="opt-btn" onclick="checkAns(this, true)">A) They systematically promote sensational, emotionally charged content over factual reporting.</button>
                    <button class="opt-btn" onclick="checkAns(this, false)">B) They encourage balanced reporting and diverse perspectives.</button>
                    <button class="opt-btn" onclick="checkAns(this, false)">C) They help fact-checking organizations correct misinformation faster.</button>
                </div>
            </div>
        </div>

        <div class="exam-section">
            <span class="sec-label sec-gold">💡 PART 2: USE OF ENGLISH & VOCABULARY</span>
            <p style="color:var(--muted); font-size:0.95rem; margin-bottom:1.5rem">Select the most appropriate advanced grammar structure or idiom to complete each sentence.</p>

            <div class="quiz-item" style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border: 1px solid var(--border); margin-bottom: 15px;">
                <p class="quiz-q" style="font-weight: 600; margin-bottom: 15px; color: var(--text);">3. "Are they going to implement the new media literacy framework?" "I certainly ______."</p>
                <div class="opts" style="display: flex; flex-wrap: wrap; gap: 10px;">
                    <button class="opt-btn" onclick="checkAns(this, false)">A) hope it</button>
                    <button class="opt-btn" onclick="checkAns(this, true)">B) hope so</button>
                    <button class="opt-btn" onclick="checkAns(this, false)">C) hope that</button>
                </div>
            </div>

            <div class="quiz-item" style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border: 1px solid var(--border); margin-bottom: 15px;">
                <p class="quiz-q" style="font-weight: 600; margin-bottom: 15px; color: var(--text);">4. The ______ of media ownership has significantly narrowed the range of available perspectives.</p>
                <div class="opts" style="display: flex; flex-wrap: wrap; gap: 10px;">
                    <button class="opt-btn" onclick="checkAns(this, false)">A) concentrating</button>
                    <button class="opt-btn" onclick="checkAns(this, false)">B) concentrated</button>
                    <button class="opt-btn" onclick="checkAns(this, true)">C) concentration</button>
                </div>
            </div>

            <div class="quiz-item" style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border: 1px solid var(--border); margin-bottom: 15px;">
                <p class="quiz-q" style="font-weight: 600; margin-bottom: 15px; color: var(--text);">5. The hotel we stayed at was completely ______ the beaten track.</p>
                <div class="opts" style="display: flex; flex-wrap: wrap; gap: 10px;">
                    <button class="opt-btn" onclick="checkAns(this, false)">A) out of</button>
                    <button class="opt-btn" onclick="checkAns(this, true)">B) off</button>
                    <button class="opt-btn" onclick="checkAns(this, false)">C) far from</button>
                </div>
            </div>
            
            <div class="quiz-item" style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border: 1px solid var(--border); margin-bottom: 15px;">
                <p class="quiz-q" style="font-weight: 600; margin-bottom: 15px; color: var(--text);">6. Scientific theories must be ______ in order to be considered empirically meaningful.</p>
                <div class="opts" style="display: flex; flex-wrap: wrap; gap: 10px;">
                    <button class="opt-btn" onclick="checkAns(this, false)">A) indubitable</button>
                    <button class="opt-btn" onclick="checkAns(this, true)">B) falsifiable</button>
                    <button class="opt-btn" onclick="checkAns(this, false)">C) provisional</button>
                </div>
            </div>
        </div>

        <div class="exam-section">
            <span class="sec-label sec-purple">📖 PART 3: READING & CRITICAL THINKING</span>
            <p style="color:var(--muted); font-size:0.95rem; margin-bottom:1.5rem">Read the excerpt below and answer the comprehension questions.</p>
            
            <div class="ebox" style="background: rgba(255,255,255,0.02); padding: 20px; border-left: 4px solid var(--accent-purple); border-radius: 8px; margin-bottom: 20px; color: var(--text); line-height: 1.8;">
                "The relationship between media ownership and editorial content has been a subject of intense scholarly debate since Noam Chomsky and Edward Herman published their seminal work Manufacturing Consent. Their 'propaganda model' of media identifies five 'filters' through which news is processed before reaching the public... critics argue that this consolidation narrows the range of perspectives available to the public and creates conflicts of interest when media companies are owned by corporations with extensive holdings in other industries."
            </div>

            <div class="quiz-item" style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border: 1px solid var(--border); margin-bottom: 15px;">
                <p class="quiz-q" style="font-weight: 600; margin-bottom: 15px; color: var(--text);">7. What is the main concern regarding media consolidation raised in the text?</p>
                <div class="opts" style="display: flex; flex-direction: column; gap: 10px;">
                    <button class="opt-btn" onclick="checkAns(this, false)">A) It increases the reliance on official government sources.</button>
                    <button class="opt-btn" onclick="checkAns(this, true)">B) It creates conflicts of interest and limits diverse perspectives.</button>
                    <button class="opt-btn" onclick="checkAns(this, false)">C) It makes media organizations vulnerable to organized 'flak'.</button>
                </div>
            </div>
        </div>

        <div class="exam-section">
            <span class="sec-label" style="background: rgba(236, 72, 153, 0.4); border: 1px solid #ec4899;">📝 PART 4: WRITING TASK</span>
            <p style="color:var(--muted); font-size:0.95rem; margin-bottom:1.5rem">Write a well-structured C1-level response (150-200 words) addressing the prompt below. Focus on cohesive devices, nominalization, and advanced vocabulary.</p>

            <div class="ebox" style="background: rgba(255,255,255,0.02); padding: 20px; border-left: 4px solid #ec4899; border-radius: 8px; margin-bottom: 20px; color: var(--text);">
                <strong>Prompt:</strong> Evaluate the impact of algorithmic curation on the spread of disinformation. Do platform companies (like Google and Meta) exercise an unacceptable level of editorial power?
            </div>

            <textarea class="write-area" placeholder="Draft your essay here... (This will be reviewed by your teacher)" style="width: 100%; min-height: 200px; background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 12px; padding: 15px; color: var(--text); font-family: inherit; font-size: 0.95rem; resize: vertical;"></textarea>
            
            <button class="submit-btn" style="margin-top: 15px; background: linear-gradient(135deg, #6366f1, #ec4899); color: white; border: none; padding: 12px 25px; border-radius: 50px; font-weight: 600; cursor: pointer; transition: transform 0.2s;" onclick="alert('Writing task submitted for teacher review!')">Submit Essay</button>
        </div>
"""

# Extract everything before the first exam-section
header_match = re.search(r'(<div class="exam-banner">.*?</div>\s*</div>\s*<div class="container">)', html, re.DOTALL)
header = html[:header_match.end()] if header_match else html.split('<div class="exam-section">')[0]

# Extract everything after the last exam-section
footer_match = re.search(r'(<!-- --- Protection Overlay --- -->.*)', html, re.DOTALL)
footer = footer_match.group(1) if footer_match else html.split('</main>')[-1]

# Combine
final_html = header + "\n" + c1_content + "\n        </div>\n    </main>\n" + footer

with open('exam4.html', 'w', encoding='utf-8') as f:
    f.write(final_html)

print("Created exam4.html!")
